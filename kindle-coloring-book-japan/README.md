# Japanese Landscapes — Adult Coloring Book (KDP Paperback)

米国 Amazon (KDP: Kindle Direct Publishing / ペーパーバック) で販売することを
想定した、日本の風景をテーマにした大人向け塗り絵本の制作物一式です。
すべての線画は Python (`reportlab`) でパーツを組み合わせて自動生成した
オリジナル作品で、25種類すべて異なる構図です（富士山、鳥居、五重塔、
竹林、桜、紅葉、北斎風の波、庭園など）。

`kindle-coloring-book`（花のマンダラ本）と同じ構成・同じ余白ルール・
同じ埋め込みフォント手法を踏襲しています。

## まずはこれをどうぞ

`KDP_COPY_PASTE_SHEET.md` に、KDPの入力フォームへそのまま貼り付けられる
書名・紹介文・キーワード・カテゴリ・価格などをまとめてあります。

## できあがっているもの

| ファイル | 内容 |
|---|---|
| `build/japanese_landscapes_interior.pdf` | 本文原稿。全53ページ（表題1p・奥付1p・風景画25p・無地25p・お礼1p）。トリムサイズ 8.5×11 in |
| `build/japanese_landscapes_cover.pdf` | KDPペーパーバック用フルラップ表紙（裏表紙＋背表紙＋表表紙、カラーの富士山イラスト入り）。17.3694 × 11.25 in |
| `build/previews/*.png` | 表紙・タイトルページ・作例ページのプレビュー画像 |
| `scripts/` | 生成に使ったPythonスクリプト一式 |

**KDPの品質チェック対応済み:** 全ページのテキストはKDPの最小マージン(0.25in)
を満たす位置に配置し、フォントは Liberation Sans を埋め込み済みです
(`kindle-coloring-book` 版で発生した「余白からはみ出す」「フォント未埋め込み」
エラーの原因を踏まえて、最初から回避する設計にしています)。

## 収録されている25の風景

1. Mount Fuji at Dawn / 2. Torii Gate Sunset / 3. The Great Wave /
4. Bamboo Grove Path / 5. Five-Story Pagoda / 6. Thousand Torii Path /
7. Cherry Blossom Riverside / 8. Zen Rock Garden / 9. Autumn Maple Valley /
10. Rice Paddy Village / 11. Koi Pond Bridge / 12. Temple Gate /
13. Moonlit Pines / 14. Fishing Boats at Sunset / 15. Crane and Pine /
16. Mountain Stream / 17. Hilltop Pagoda / 18. Lakeside Torii /
19. Snowy Mount Fuji / 20. Garden Lantern Path / 21. Twilight Temple /
22. Coastal Pines / 23. Maple Koi Bridge / 24. Village Pagoda /
25. Full Moon Over Mountains

## 出版（アップロード）までに、あなたが決めて直す必要があること

1. **著者名**: 現在 `Osakanian` を設定済みです。変更したい場合は
   `scripts/build_book.py` と `scripts/build_cover.py` 先頭の `AUTHOR_NAME`
   / `AUTHOR` を書き換えて、`python3 scripts/build_book.py && python3 scripts/build_cover.py`
   を再実行してください。
2. **書名（タイトル / サブタイトル）**: 現在 *Japanese Landscapes — An Adult
   Coloring Book for Stress Relief & Relaxation*。`BOOK_TITLE` / `BOOK_SUBTITLE`
   を書き換えて再生成できます。
3. **ISBN**: KDPが無料のISBNを自動発行できます（Amazon限定販売でよければ
   それで十分）。他書店にも流通させたい場合は自分でISBNを取得し、
   奥付ページの `ISBN:` 行を差し替えてください。
4. **AIコンテンツの開示（重要・法的要件）**: 本書のイラストはAI（この
   セッションのClaude）が書いたプログラムによりアルゴリズム生成された
   ものです。KDP出版フローの「AI生成コンテンツを含むか」という申告欄で、
   正直に「AI-generated」を選択してください。

## KDPへのアップロード手順（出版の一歩手前まで）

`kindle-coloring-book/README.md` と同じ手順です。要点のみ再掲します。

1. https://kdp.amazon.com → **+ Create** → **Paperback**
2. 言語 English、トリムサイズ **8.5 x 11 in**、用紙 **白色(White)**、
   本文 **黒黒(Black & White) インテリア**、裁ち落とし **なし(No bleed)**
3. 原稿PDF: `build/japanese_landscapes_interior.pdf`
4. 表紙: KDPの **Cover Calculator** で寸法を確認してから
   `build/japanese_landscapes_cover.pdf` をアップロード
   （想定53ページ、背表紙幅0.1194in。実際のページ数が変わったら
   `scripts/build_cover.py` の `PAGE_COUNT` を直して再生成してください）
5. Online Previewer で全ページを目視確認（特にノド側マージン）
6. 価格・印税プランを設定 → Publish Your Paperback Book の直前まで到達

## おすすめカテゴリ（Amazon US, BISAC）

- Crafts & Hobbies > Coloring Books for Adults
- Travel > Asia > Japan
- Self-Help > Stress Management

## おすすめキーワード（7枠）

1. adult coloring book
2. japan coloring book
3. mount fuji coloring book
4. japanese landscape coloring book
5. stress relief coloring book
6. zen coloring book for adults
7. travel coloring book japan

## 価格の目安

53ページ・8.5x11・白黒/白用紙のペーパーバックはKDPの印刷実費が
おおよそ $2.5〜$3.5（米国印刷）程度になります。**$7.99〜$9.99** あたりが
一般的な価格帯です。最終価格はKDPの「Pricing」画面の実費・印税
シミュレーションを見て決めてください。

## デザインを作り直したい場合

```bash
cd kindle-coloring-book-japan/scripts
python3 build_book.py    # 本文PDFを再生成
python3 build_cover.py   # 表紙PDFを再生成
```

- `scripts/scene_lib.py`: 富士山・鳥居・五重塔・竹・桜・波などの部品
- `scripts/compose_scenes.py`: 25の構図のレシピ（要素の組み合わせ・配置）
- `scripts/compose_cover.py`: 表紙用のカラーイラスト
