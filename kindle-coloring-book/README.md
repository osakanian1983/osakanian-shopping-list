# Flower Mandalas — Adult Coloring Book (KDP Paperback)

米国 Amazon (KDP: Kindle Direct Publishing / ペーパーバック) で販売することを
想定した、大人向けマンダラ塗り絵本の制作物一式です。すべての線画は
Python (`reportlab`) で幾何学的に自動生成したオリジナル作品で、
25種類すべて異なるデザインです。

## できあがっているもの

| ファイル | 内容 |
|---|---|
| `build/flower_mandalas_interior.pdf` | 本文原稿。全53ページ（表題1p・奥付1p・塗り絵25p・無地25p・お礼1p）。トリムサイズ 8.5×11 in |
| `build/flower_mandalas_cover.pdf` | KDPペーパーバック用フルラップ表紙（裏表紙＋背表紙＋表表紙）。17.3694 × 11.25 in |
| `build/previews/*.png` | 表紙・タイトルページ・塗り絵ページのプレビュー画像（PDFを開かずに確認可能） |
| `scripts/` | 生成に使ったPythonスクリプト一式（再生成・デザイン数の変更などに利用可） |

## まずはこれをどうぞ

`KDP_COPY_PASTE_SHEET.md` に、KDPの入力フォームへそのまま貼り付けられる
書名・紹介文・キーワード・カテゴリ・価格などをまとめてあります。
これをコピペしながら進めれば、実質「あとはアップロードとボタンを押すだけ」
の状態になります。

## 出版（アップロード）までに、あなたが決めて直す必要があること

これらは私が代わりに決められない項目です。KDPにアップロードする前に必ず確認してください。

1. **著者名 / ペンネーム**
   現在は `Osakanian` を著者名として本文・表紙に反映済みです。
   変更したい場合は `scripts/build_book.py` と `scripts/build_cover.py` の
   先頭にある `AUTHOR_NAME` / `AUTHOR` を書き換えて、
   `python3 scripts/build_book.py && python3 scripts/build_cover.py` を再実行してください。

2. **書名（タイトル / サブタイトル）**
   現在: *Flower Mandalas — An Adult Coloring Book for Stress Relief & Relaxation*
   気に入らなければ `BOOK_TITLE` / `BOOK_SUBTITLE` を書き換えて再生成できます。

3. **ISBN**
   ペーパーバックはKDPが無料のISBNを自動発行できます（Amazon限定販売でよければ
   それで十分です）。他書店にも流通させたい場合は自分でISBNを取得し、
   奥付ページの `ISBN:` 行を差し替えてください。

4. **AIコンテンツの開示（重要・法的要件）**
   本書のイラストはAI（このセッションのClaude）が書いたプログラムにより
   アルゴリズム生成されたものです。KDPの出版フローには
   「AI生成コンテンツを含むか」という申告欄があります。
   このイラストはAIが作成したPythonコードの実行結果であるため、
   **申告時は「AI-generated」（または該当する項目）を正直に選択してください。**
   虚偽申告はアカウント停止のリスクがあります。

## KDPへのアップロード手順（出版の一歩手前まで）

1. https://kdp.amazon.com にログイン（米国アカウント推奨）→ **+ Create** →
   **Paperback**
2. **Paperback Details**
   - 言語: English
   - 書名/サブタイトル: 上記参照
   - 著者名: あなたの名前
   - 内容紹介（Description）: 下記「商品説明の下書き」を参照・編集
   - カテゴリ: 下記「おすすめカテゴリ」参照
   - キーワード（7つまで）: 下記「おすすめキーワード」参照
   - AIコンテンツ開示: 上記4を参照して正直に回答
3. **Paperback Content**
   - 原稿言語: English、トリムサイズ: **8.5 x 11 in**
   - 用紙: **白色用紙（White)**・本文: **黒黒(Black & White) インテリア**
   - 裁ち落とし(Bleed): **なし（No bleed）**（本文はすべて安全マージン内に収めているため）
   - 原稿PDFをアップロード: `build/flower_mandalas_interior.pdf`
   - ページ数が自動判定されます（想定53ページ）。表紙のスパイン幅計算は
     この53ページを前提にしているので、**もしKDP側の判定ページ数が変わったら
     `scripts/build_cover.py` の `PAGE_COUNT` を実際の値に直して表紙を再生成してください。**
   - 表紙: **Cover Calculator** で寸法を確認 → 「Upload a print-ready PDF cover」
     で `build/flower_mandalas_cover.pdf` をアップロード
   - オンラインプレビューア（Launch Previewer）で全ページを目視確認
     （マージン割れ・線切れがないか、特にノド側）
4. **Paperback Rights & Pricing**
   - 販売地域: All marketplaces（米国中心でOK）
   - 印税プラン: 60%
   - 価格の目安: 下記「価格の目安」参照
5. 内容に問題がなければ **Publish Your Paperback Book** の直前まで来ています。
   実際の「出版」ボタンは、著者名・税務情報・支払口座など
   あなたご本人の情報確認が必要なため、最終確認は必ずご自身で行ってください。

## おすすめカテゴリ（Amazon US, BISAC）

- Crafts & Hobbies > Coloring Books for Adults / Craft & Hobby > General
- Self-Help > Stress Management
- Health, Fitness & Dieting > Psychology & Counseling > Creativity & Genius

KDPの category 選択画面はキーワード検索式なので、
"adult coloring book", "coloring books for grown-ups", "mandala" などで
検索してヒットする該当ジャンルを選んでください。

## おすすめキーワード（7枠）

1. adult coloring book
2. mandala coloring book
3. flower coloring book for adults
4. stress relief coloring book
5. relaxation coloring book
6. floral mandala designs
7. coloring book for grown ups

## 商品説明（Description）の下書き

```
Escape into a world of intricate floral mandalas designed to help you relax,
unwind, and rediscover your creativity.

Flower Mandalas is a collection of 25 original, hand-crafted mandala designs
combining florals, stars, and geometric patterns — perfect for colorists of
every skill level.

What's inside:
- 25 unique, intricate mandala designs
- Single-sided pages to prevent marker and gel-pen bleed-through
- Large 8.5" x 11" pages, ideal for colored pencils, gel pens, and fine-tip markers
- A calming, mindful escape from everyday stress

Whether you're a seasoned colorist or picking up your first set of pencils,
grab your favorite coloring tools and let your creativity bloom.
```

## 価格の目安

53ページ・8.5x11・白黒/白用紙のペーパーバックはKDPの印刷実費が
おおよそ $2.5〜$3.5（米国印刷）程度になります。同ジャンルの類書相場を踏まえ、
**$7.99〜$9.99** あたりが一般的な価格帯です。最終価格は KDP の
「Pricing」画面に表示される実費と印税シミュレーションを見て決めてください。

## デザインを作り直したい場合

```bash
cd kindle-coloring-book/scripts
python3 build_book.py    # 本文PDFを再生成 (build/flower_mandalas_interior.pdf)
python3 build_cover.py   # 表紙PDFを再生成 (build/flower_mandalas_cover.pdf)
```

- `scripts/compose.py` の `LAYER_TYPES` や乱数レンジを変えるとデザインの雰囲気を調整できます。
- ページ数を変えたい場合は `build_book.py` 内の `while design_num <= 25:` を変更し、
  `build_cover.py` の `PAGE_COUNT` も実際の合計ページ数に合わせて更新してください。
