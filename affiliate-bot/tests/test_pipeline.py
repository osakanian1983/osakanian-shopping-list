import json
import tempfile
import unittest
from datetime import date
from pathlib import Path
from types import SimpleNamespace
from unittest import mock

from affbot import main as main_mod
from affbot.compliance import check_text
from affbot.generator import ArticleGenerator, Draft, GenerationError
from affbot.rakuten import Product, parse_items
from affbot.render import PR_NOTICE, render_article, sanitize_slug

ITEM = {
    "itemName": "濃厚チーズケーキ <4個入>",
    "itemPrice": 2980,
    "itemUrl": "https://item.rakuten.co.jp/shop/a/",
    "affiliateUrl": "https://hb.afl.rakuten.co.jp/hgc/xxx/?pc=a",
    "mediumImageUrls": [{"imageUrl": "https://thumbnail.image.rakuten.co.jp/a.jpg"}],
    "shopName": "スイーツ店",
    "reviewAverage": 4.53,
    "reviewCount": 1234,
    "itemCaption": "説明" * 400,
}


def make_product(name="商品A"):
    return Product(name, 1000, "https://item/", "https://aff/", "https://img/a.jpg",
                   "店", 4.0, 10, "説明")


class ParseItemsTest(unittest.TestCase):
    def test_format_version_1_and_2(self):
        v1 = parse_items({"Items": [{"Item": ITEM}]})
        v2 = parse_items({"Items": [dict(ITEM, mediumImageUrls=["https://thumbnail.image.rakuten.co.jp/a.jpg"])]})
        for products in (v1, v2):
            p = products[0]
            self.assertEqual(p.price, 2980)
            self.assertEqual(p.affiliate_url, ITEM["affiliateUrl"])
            self.assertEqual(p.image_url, "https://thumbnail.image.rakuten.co.jp/a.jpg")

    def test_prompt_dict_has_no_urls_and_truncated_caption(self):
        d = parse_items({"Items": [ITEM]})[0].to_prompt_dict(0)
        self.assertNotIn("affiliate_url", d)
        self.assertNotIn("image_url", d)
        self.assertEqual(len(d["caption"]), 500)


class RenderTest(unittest.TestCase):
    def test_placeholders_replaced_and_links_stripped(self):
        products = parse_items({"Items": [ITEM]})
        body = '<p>紹介</p>[[PRODUCT:0]][[PRODUCT:0]][[PRODUCT:9]]<a href="https://evil">x</a><img src="x">'
        html = render_article(body, products, as_of=date(2026, 9, 27))
        self.assertTrue(html.startswith(PR_NOTICE))
        self.assertEqual(html.count('class="rakuten-item"'), 1)  # 重複と範囲外は消える
        self.assertNotIn("evil", html)
        self.assertIn('rel="sponsored noopener"', html)
        self.assertIn("&lt;4個入&gt;", html)  # 商品名はエスケープされる
        self.assertIn("2,980円(2026年09月27日時点)", html)

    def test_sanitize_slug(self):
        self.assertEqual(sanitize_slug("Konbini Sweets!! 2026", "fb"), "konbini-sweets-2026")
        self.assertEqual(sanitize_slug("コンビニ", "fb"), "fb")


class ComplianceTest(unittest.TestCase):
    def test_flags(self):
        reasons = {f["match"] for f in check_text("<p>最安で絶対おすすめ。実際に食べてみました</p>")}
        self.assertTrue({"最安", "絶対", "実際に食べ"} <= reasons)
        self.assertEqual(check_text("<p>レビュー平均4.5点の人気商品です</p>"), [])


class GeneratorTest(unittest.TestCase):
    def _client(self, stop_reason="end_turn", text=None):
        text = text or json.dumps({"title": "t", "slug": "s", "excerpt": "e", "body_html": "b"})
        resp = SimpleNamespace(stop_reason=stop_reason,
                               content=[SimpleNamespace(type="text", text=text)])
        client = mock.MagicMock()
        client.beta.messages.create.return_value = resp
        return client

    def test_generate_parses_json_and_sends_fallbacks(self):
        client = self._client()
        draft = ArticleGenerator("claude-opus-5", client=client).generate("kw", [make_product()])
        self.assertEqual(draft, Draft("t", "s", "e", "b"))
        kwargs = client.beta.messages.create.call_args.kwargs
        self.assertEqual(kwargs["fallbacks"], "default")
        self.assertEqual(kwargs["output_config"]["format"]["type"], "json_schema")

    def test_refusal_raises(self):
        with self.assertRaises(GenerationError):
            ArticleGenerator("m", client=self._client("refusal")).generate("kw", [make_product()])


class MainDryRunTest(unittest.TestCase):
    def test_dry_run_writes_files_and_skips_processed(self):
        with tempfile.TemporaryDirectory() as tmp:
            tmp = Path(tmp)
            kw = tmp / "keywords.txt"
            kw.write_text("# comment\nコンビニ スイーツ\nご当地カップ麺 | ranking\n", encoding="utf-8")
            env = {"RAKUTEN_APP_ID": "a", "RAKUTEN_ACCESS_KEY": "k", "RAKUTEN_AFFILIATE_ID": "f"}
            fake_rakuten = mock.MagicMock()
            fake_rakuten.search.return_value = [make_product()]
            fake_gen = mock.MagicMock()
            fake_gen.generate.side_effect = [
                Draft("タイトル1", "sweets", "要約", "<p>本文</p>[[PRODUCT:0]]"),
                Draft("タイトル2", "cup-noodle", "要約", "<p>最安</p>"),
            ]
            with mock.patch.dict("os.environ", env, clear=True), \
                    mock.patch.object(main_mod, "RakutenClient", return_value=fake_rakuten), \
                    mock.patch.object(main_mod, "ArticleGenerator", return_value=fake_gen):
                args = ["--keywords", str(kw), "--dry-run", "--out", str(tmp / "out")]
                self.assertEqual(main_mod.main(args), 0)
                # 2回目は処理済みなので生成されない
                self.assertEqual(main_mod.main(args), 0)

            self.assertEqual(fake_gen.generate.call_count, 2)
            self.assertEqual(fake_gen.generate.call_args_list[1].args[2], "ranking")
            day_dir = tmp / "out" / f"{date.today():%Y-%m-%d}"
            self.assertIn('class="rakuten-item"', (day_dir / "sweets.html").read_text(encoding="utf-8"))
            report = json.loads((day_dir / "cup-noodle.json").read_text(encoding="utf-8"))
            self.assertEqual(report["review_flags"][0]["match"], "最安")


if __name__ == "__main__":
    unittest.main()
