# KDP 入力用コピペシート — Flower Mandalas

KDP (https://kdp.amazon.com) の Paperback 作成フローで、この順番のまま
各欄にコピー&ペーストしてください。太字の見出しはKDP画面上の項目名です。
（実際の項目名・並び順は仕様変更で多少前後することがあります）

---

## 1. Paperback Details

**Language**
```
English
```

**Book Title**
```
Flower Mandalas
```

**Subtitle**
```
An Adult Coloring Book for Stress Relief & Relaxation
```

**Series**（シリーズ化しないなら空欄でOK。今後シリーズ化するなら）
```
(空欄でOK)
```

**Edition Number**（初版は空欄でOK）
```
(空欄でOK)
```

**Author — First name / Last name**
```
Osakanian
```
※ 姓名2欄に分かれている場合は First name: `Osakanian` / Last name: 空欄、
　もしくは片方に全部入れてもKDPは受け付けます。表紙・本文PDFも
　この名前で作成済みです。変更したい場合は教えてください。

**Contributors**（イラストレーター等を分けて表記したい場合のみ使用。不要なら空欄）
```
(空欄でOK)
```

**Description（商品説明）** — HTML簡易タグ（`<br>`など）が使えます
```
Escape into a world of intricate floral mandalas designed to help you relax, unwind, and rediscover your creativity.<br><br>Flower Mandalas is a collection of 25 original, hand-crafted mandala designs combining florals, stars, and geometric patterns — perfect for colorists of every skill level.<br><br>What's inside:<br>- 25 unique, intricate mandala designs<br>- Single-sided pages to prevent marker and gel-pen bleed-through<br>- Large 8.5" x 11" pages, ideal for colored pencils, gel pens, and fine-tip markers<br>- A calming, mindful escape from everyday stress<br><br>Whether you're a seasoned colorist or picking up your first set of pencils, grab your favorite coloring tools and let your creativity bloom.
```

**Publishing Rights**
```
This is not a public domain work, and I hold the necessary publishing rights.
```
(該当するラジオボタンを選択)

**Keywords（7枠、1枠ずつ貼り付け）**
```
adult coloring book
mandala coloring book
flower coloring book for adults
stress relief coloring book
relaxation coloring book
floral mandala designs
coloring book for grown ups
```

**Categories（カテゴリ検索窓に入力してヒットしたものを選択、2つまで）**
```
1つ目の検索語: adult coloring books
2つ目の検索語: mandala coloring book
```
候補として出てくる中から近いものを選んでください（例:
Crafts, Hobbies & Home > Crafts & Hobbies > ... > Coloring Books for Grown-Ups /
Self-Help > Stress Management）。

**Adult Content**
```
No
```

**AI-Generated Content の申告欄** — 表示された質問に応じて回答してください
```
このイラストはAI(Claude)が書いたPythonプログラムによって
アルゴリズム生成された画像です。「AIを使ってテキスト/画像を生成したか」
という質問には正直に「はい(Yes)」を選び、具体的な利用範囲
(例: illustrations generated with AI assistance)を選択・記入してください。
```

---

## 2. Paperback Content

**Manuscript**
```
アップロードファイル: build/flower_mandalas_interior.pdf
```

**Print Options**
```
Ink and Paper Type: Black ink with white paper
Bleed Settings: No bleed
Trim size: 8.5 x 11 in
```

**Cover finish**（お好みで。光沢が一般的）
```
Glossy
```

**Cover**
```
アップロード方法: Upload a print-ready PDF cover
アップロードファイル: build/flower_mandalas_cover.pdf
```
※ アップロード前に必ずKDPの「Cover Calculator」で最終ページ数(想定53)を入力し、
　寸法(17.3694 x 11.25 in / 背表紙幅 0.1194in)が一致するか確認してください。
　ページ数がズレた場合は `scripts/build_cover.py` の `PAGE_COUNT` を実際の値に
　直して再生成してから差し替えてください。

---

## 3. Paperback Rights & Pricing

**Territories**
```
All territories (Worldwide rights)
```

**Primary marketplace**
```
Amazon.com (US)
```

**Royalty**
```
60%
```

**List Price（USD, Amazon.com）**
```
$8.99
```
（印刷実費はKDPのPricingページに自動表示されます。実費+利益を見て
　$7.99〜$9.99の範囲で調整してください）

---

## 出版直前チェックリスト

- [ ] Description / Title / Author の誤字がないか確認
- [ ] Online Previewer でノド側の余白・線切れがないか全ページ確認
- [ ] Cover Calculator で背表紙幅を実ページ数と突き合わせ
- [ ] AIコンテンツ開示の質問に正直に回答したか
- [ ] 価格・印税プランの最終確認
- [ ] "Publish Your Paperback Book" ボタン ← ここから先はご本人操作
