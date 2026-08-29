# Journey Through Western Japan — Adult Coloring Book (KDP Paperback)

`kindle-coloring-book-japan-west` フォルダにある、**Journey Through Eastern
Japan（東日本版）の姉妹本**です。実在の名所を1県1ページで組み込む同じ方式で、
近畿・中国・四国・九州・沖縄の**23都道府県**を収録しています。

これで東日本版（24県）と合わせて、**日本47都道府県すべて**がこの2冊シリーズで
揃いました。

## できあがっているもの

| ファイル | 内容 |
|---|---|
| `build/journey_through_western_japan_interior.pdf` | 本文原稿。全49ページ（表題1p・奥付1p・名所23p・無地23p・お礼1p）。トリムサイズ 8.5×11 in |
| `build/journey_through_western_japan_cover.pdf` | KDPペーパーバック用フルラップ表紙。17.3603 × 11.25 in（背表紙幅 0.1103in、想定49ページ）。表表紙に太宰府天満宮（福岡）、裏表紙に琵琶湖・浮御堂（滋賀）の著者手彩色イラストを使用 |
| `build/previews/*.png` | 表紙・タイトルページのプレビュー |
| `source_images/` | 提供いただいた各名所の線画（25〜47の連番ファイル名。東日本版の1〜24に続く番号） |
| `cover_images/` | 表紙用に著者が彩色した2点（太宰府天満宮＝表表紙、琵琶湖・浮御堂＝裏表紙） |
| `scripts/build_photo_book.py` | 本文PDFのビルダー。`LOCATIONS` リストに (タイトル, 副題, ファイル名) を追加していく方式 |
| `scripts/build_photo_cover.py` | 表紙PDFのビルダー |

## 収録されている23都道府県

近畿: 滋賀(浮御堂)・京都(金閣寺)・大阪(道頓堀グリコの看板)・
兵庫(姫路城)・奈良(東大寺と鹿)・和歌山(那智の滝・三重塔)

中国: 鳥取(鳥取砂丘)・島根(出雲大社)・岡山(後楽園)・広島(厳島神社)・
山口(元乃隅神社)

四国: 徳島(鳴門の渦潮)・香川(栗林公園)・愛媛(道後温泉)・
高知(四万十川沈下橋)

九州: 福岡(太宰府天満宮)・佐賀(祐徳稲荷神社)・長崎(眼鏡橋)・
熊本(熊本城)・大分(別府温泉)・宮崎(高千穂峡)・鹿児島(桜島)

沖縄: 沖縄(万座毛)

## 続きを追加するには

すでに全都道府県が収録済みですが、差し替えや追加をする場合:

```bash
cd kindle-coloring-book-japan-west
# 1. source_images/ に新しい画像を 48_xxx.png のように追加
# 2. scripts/build_photo_book.py の LOCATIONS リストに1行追加
#    ("英語タイトル", "場所・都道府県", "48_xxx.png"),
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
3. 原稿PDF: `build/journey_through_western_japan_interior.pdf`
4. 表紙: KDPの **Cover Calculator** で寸法を確認してから
   `build/journey_through_western_japan_cover.pdf` をアップロード
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

49ページ・8.5x11・白黒/白用紙のペーパーバックはKDPの印刷実費が
おおよそ $2.5〜$3.5（米国印刷）程度になります。**$8.99〜$10.99** あたりが
一般的な価格帯です。最終価格はKDPの「Pricing」画面の実費・印税
シミュレーションを見て決めてください。
