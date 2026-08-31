# A Taste of Eastern Japan — Adult Coloring Book (KDP Paperback)

`kindle-coloring-book-japan-food-east` フォルダにある、**Journey Through
Eastern Japan（名所版・東日本編）の姉妹本**です。同じ方式で、今回は「実在の
場所」ではなく「ご当地グルメ」を1県1ページで組み込んでいます。東北・関東・
北信越・中部の**24都道府県**を収録しています。

## できあがっているもの

| ファイル | 内容 |
|---|---|
| `build/a_taste_of_eastern_japan_interior.pdf` | 本文原稿。全51ページ（表題1p・奥付1p・料理24p・無地24p・お礼1p）。トリムサイズ 8.5×11 in |
| `build/a_taste_of_eastern_japan_cover.pdf` | KDPペーパーバック用フルラップ表紙。17.3649 × 11.25 in（背表紙幅 0.1149in、想定51ページ）。表表紙に江戸前寿司（東京）、裏表紙に金沢おでん（石川）の著者手彩色イラストを使用 |
| `build/previews/*.png` | 表紙プレビュー |
| `source_images/` | 提供いただいた各料理の線画（01〜24の連番ファイル名） |
| `cover_images/` | 表紙用に著者が彩色した2点（江戸前寿司＝表表紙、金沢おでん＝裏表紙） |
| `scripts/build_photo_book.py` | 本文PDFのビルダー。`LOCATIONS` リストに (タイトル, 副題, ファイル名) を追加していく方式 |
| `scripts/build_photo_cover.py` | 表紙PDFのビルダー |

## 収録されている24都道府県のグルメ

東北: 北海道(ジンギスカン)・青森(せんべい汁)・岩手(わんこそば)・
宮城(牛タン)・秋田(きりたんぽ鍋)・山形(米沢牛)・福島(喜多方ラーメン)

関東: 茨城(あんこう鍋)・栃木(餃子/宇都宮)・群馬(焼きまんじゅう)・
埼玉(わらじかつ丼)・千葉(太巻き祭り寿司)・東京(江戸前寿司)・
神奈川(しらす丼)

北信越: 新潟(へぎそば)・富山(白えび丼)・石川(金沢おでん)・
福井(越前おろしそば)・山梨(ほうとう)

中部: 長野(おやき)・岐阜(飛騨牛)・静岡(うな重)・愛知(ひつまぶし)・
三重(伊勢うどん)

## 続きを追加するには

```bash
cd kindle-coloring-book-japan-food-east
# 1. source_images/ に新しい画像を 25_xxx.png のように追加
# 2. scripts/build_photo_book.py の LOCATIONS リストに1行追加
#    ("英語タイトル", "料理名・都道府県", "25_xxx.png"),
# 3. 表紙の PAGE_COUNT (build_photo_cover.py) は自動で再計算されないので、
#    本文再生成後に出力される "Total pages" の値に手動で合わせて再生成する
python3 scripts/build_photo_book.py
python3 scripts/build_photo_cover.py
```

## 出版（アップロード）までに、あなたが決めて直す必要があること

`kindle-coloring-book/README.md`（花のマンダラ本）と同じ注意点です。

1. **著者名**: 現在 `Osakanian` を設定済み。変更する場合は
   `build_photo_book.py` / `build_photo_cover.py` 先頭の `AUTHOR_NAME` / `AUTHOR`
   を書き換えて再生成してください。
2. **ISBN**: KDPが無料のISBNを自動発行できます。他書店にも流通させたい場合は
   自分でISBNを取得し、奥付ページの `ISBN:` 行を差し替えてください。
3. **AIコンテンツの開示（重要・法的要件）**: 本書のイラストはAIで生成された
   ものです。KDP出版フローの「AI生成コンテンツを含むか」という申告欄で、
   正直に「AI-generated」を選択してください。
4. **画像の著作権**: 各イラストがどのサービス・利用規約のもとで生成された
   ものか（商用利用・再配布が許可されているか）を、生成元のツールの利用規約で
   必ず確認してください。

## KDPへのアップロード手順

`kindle-coloring-book/README.md` と同じ手順です。

1. https://kdp.amazon.com → **+ Create** → **Paperback**
2. 言語 English、トリムサイズ **8.5 x 11 in**、用紙 **白色(White)**、
   本文 **黒黒(Black & White) インテリア**、裁ち落とし **なし(No bleed)**
3. 原稿PDF: `build/a_taste_of_eastern_japan_interior.pdf`
4. 表紙: KDPの **Cover Calculator** で寸法を確認してから
   `build/a_taste_of_eastern_japan_cover.pdf` をアップロード
5. Online Previewer で全ページを目視確認（特にノド側マージン）
6. 価格・印税プランを設定 → Publish Your Paperback Book の直前まで到達

## おすすめカテゴリ（Amazon US, BISAC）

- Crafts & Hobbies > Coloring Books for Adults
- Cooking, Food & Wine > Regional & Ethnic > Asian > Japanese
- Travel > Asia > Japan

## おすすめキーワード（7枠）

1. adult coloring book
2. japan food coloring book
3. japanese food coloring book
4. japan travel coloring book
5. stress relief coloring book
6. mindfulness coloring book
7. foodie coloring book

## 価格の目安

51ページ・8.5x11・白黒/白用紙のペーパーバックはKDPの印刷実費が
おおよそ $2.5〜$3.5（米国印刷）程度になります。**$8.99〜$10.99** あたりが
一般的な価格帯です。最終価格はKDPの「Pricing」画面の実費・印税
シミュレーションを見て決めてください。
