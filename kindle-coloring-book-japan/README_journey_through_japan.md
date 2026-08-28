# Journey Through Japan — Adult Coloring Book (KDP Paperback)

`kindle-coloring-book-japan` フォルダ内にある、**手描き風景版(Japanese
Landscapes)とは別のもう一つの本**です。こちらは、あなたが実際にMidjourney等の
外部AIで生成した「実在の名所」線画イラストを1県1ページで組み込んだものです。

現時点で **24都道府県** ぶんの原稿が完成しています（東北7・関東7・北信越5・
中部4・三重1）。残り23都道府県は追加が来次第、同じ手順で組み込めます。

## できあがっているもの

| ファイル | 内容 |
|---|---|
| `build/japan_prefectures_interior.pdf` | 本文原稿。全51ページ（表題1p・奥付1p・名所24p・無地24p・お礼1p）。トリムサイズ 8.5×11 in |
| `build/journey_through_japan_cover.pdf` | KDPペーパーバック用フルラップ表紙。17.3649 × 11.25 in（背表紙幅 0.1149in、想定51ページ） |
| `build/previews_prefectures/*.png` | 表紙・タイトルページ・作例ページのプレビュー |
| `source_images/` | 提供いただいた各名所の線画（01〜24の連番ファイル名） |
| `scripts/build_photo_book.py` | 本文PDFのビルダー。`LOCATIONS` リストに (タイトル, 副題, ファイル名) を追加していく方式 |
| `scripts/build_photo_cover.py` | 表紙PDFのビルダー |

## 収録されている24都道府県

東北: 北海道(釧路湿原)・青森(ねぶた祭り)・岩手(中尊寺)・宮城(松島)・
秋田(角館)・山形(山寺)・福島(鶴ヶ城)

関東: 茨城(偕楽園)・栃木(日光東照宮)・群馬(草津温泉)・埼玉(川越)・
東京(浅草寺雷門)・千葉(鋸山日本寺大仏)・神奈川(鎌倉大仏)

北信越: 新潟(佐渡たらい舟)・富山(立山黒部アルペンルート)・
石川(兼六園)・福井(東尋坊)・山梨(河口湖と富士山)

中部: 長野(松本城)・岐阜(白川郷)・静岡(三保の松原)・愛知(名古屋城)・
三重(伊勢神宮)

## 続きを追加するには

```bash
cd kindle-coloring-book-japan
# 1. source_images/ に新しい画像を 25_xxx.png のように追加
# 2. scripts/build_photo_book.py の LOCATIONS リストに1行追加
#    ("英語タイトル", "場所・都道府県", "25_xxx.png"),
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
3. 原稿PDF: `build/japan_prefectures_interior.pdf`
4. 表紙: KDPの **Cover Calculator** で寸法を確認してから
   `build/journey_through_japan_cover.pdf` をアップロード
5. Online Previewer で全ページを目視確認（特にノド側マージン）
6. 価格・印税プランを設定 → Publish Your Paperback Book の直前まで到達

## おすすめカテゴリ（Amazon US, BISAC）

- Crafts & Hobbies > Coloring Books for Adults
- Travel > Asia > Japan
- Self-Help > Stress Management

## おすすめキーワード（7枠）

1. adult coloring book
2. japan coloring book
3. japan travel coloring book
4. japanese landmarks coloring book
5. stress relief coloring book
6. mindfulness coloring book
7. travel the world coloring book

## 価格の目安

51ページ・8.5x11・白黒/白用紙のペーパーバックはKDPの印刷実費が
おおよそ $2.5〜$3.5（米国印刷）程度になります。**$8.99〜$10.99** あたりが
一般的な価格帯です。最終価格はKDPの「Pricing」画面の実費・印税
シミュレーションを見て決めてください。
