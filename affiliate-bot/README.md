# affiliate-bot

キーワードリスト → 楽天市場商品検索API → Claude で記事の下書きを生成 → WordPress に**下書き**として保存するスクリプトです。

公開は人が内容を確認してから行う「半自動」を前提にしています。

## 仕組み

```
keywords.txt ─▶ 楽天API(商品・価格・レビュー・アフィリエイトURL)
                 │
                 ▼
             Claude API(本文のみ生成。URL・画像は書かせない)
                 │
                 ▼
             render(PR表記・商品ボックスをAPIデータから差し込み)
                 │
                 ├─▶ output/YYYY-MM-DD/<slug>.html / .json(要確認表現のリスト付き)
                 └─▶ WordPress(status=draft)
```

規約・法令リスクを下げるために、次のことをコード側で保証しています。

- **リンクと画像はAPIデータからだけ入れる。** モデルが書いた `<a>` `<img>` は取り除きます。商品画像は加工せず、そのまま商品ページへのリンクとして表示します。
- **全記事の冒頭に【PR】表記を入れる。**(ステマ規制への対応)
- **アフィリエイトリンクには `rel="sponsored"` を付ける。**
- **価格には「◯年◯月◯日時点」を付ける。**
- **要確認の表現を JSON に書き出す。** 最上級表現、効果効能、体験談っぽい表現などを `review_flags` に出力します。

## セットアップ

```bash
cd affiliate-bot
pip install -r requirements.txt
cp .env.example .env              # 値を埋める
cp keywords.example.txt keywords.txt
```

### 楽天APIについて(2026年の仕様変更)

- [Rakuten Developers](https://webservice.rakuten.co.jp/) で**新しく**アプリを登録します。旧アカウントで発行したIDは使えません。
- `applicationId` に加えて `accessKey` が必須です。
- アプリの「許可されたWebサイト」に登録したURLを `RAKUTEN_REFERER` に設定してください。Referer / Origin ヘッダーとして送ります。これがないと 403 になることがあります。
- エンドポイントは `.../IchibaItem/Search/20260701` を初期値にしています。変わったときは `RAKUTEN_ENDPOINT` で上書きしてください。

## 使い方

```bash
# まずはローカル出力だけで中身を確認
python -m affbot.main --keywords keywords.txt --dry-run --limit 1

# WordPress に下書き保存
python -m affbot.main --keywords keywords.txt --limit 3
```

| オプション | 説明 |
|---|---|
| `--dry-run` | WordPress に投稿せず `output/` に保存するだけ |
| `--limit N` | 今回処理する最大件数 |
| `--hits N` | 1記事あたりの商品数(初期値 5) |
| `--force` | 処理済みのキーワードも作り直す(処理済みの記録は `output/processed.json`) |

## 公開前のチェック(人がやること)

1. `output/.../<slug>.json` の `review_flags` を確認する。
2. WordPress の下書きを開き、内容の誤り・不自然な点を直す。自分の感想や使用経験があれば加える。
3. 予約投稿で公開する。

## 定期実行の例(GitHub Actions)

このリポジトリとは別のリポジトリに移して使う想定です。Secrets に `.env` と同じ値を登録してください。

```yaml
on:
  schedule: [{ cron: "7 21 * * *" }]   # 毎日 06:07 JST
  workflow_dispatch:
jobs:
  draft:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.11" }
      - run: pip install -r requirements.txt
      - run: python -m affbot.main --keywords keywords.txt --limit 2
        env:
          RAKUTEN_APP_ID: ${{ secrets.RAKUTEN_APP_ID }}
          RAKUTEN_ACCESS_KEY: ${{ secrets.RAKUTEN_ACCESS_KEY }}
          RAKUTEN_AFFILIATE_ID: ${{ secrets.RAKUTEN_AFFILIATE_ID }}
          RAKUTEN_REFERER: ${{ secrets.RAKUTEN_REFERER }}
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
          WP_URL: ${{ secrets.WP_URL }}
          WP_USER: ${{ secrets.WP_USER }}
          WP_APP_PASSWORD: ${{ secrets.WP_APP_PASSWORD }}
```

Actions の実行環境は毎回まっさらなので、`output/processed.json`(処理済みの記録)は残りません。本番で使うときは、処理済みのキーワードを `keywords.txt` から消すか、`processed.json` をコミットして戻す手順を足してください。

## テスト

```bash
python -m unittest discover -s tests -t .
```
