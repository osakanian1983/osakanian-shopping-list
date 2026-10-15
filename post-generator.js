const AMAZON_GENRES = [
  { name: "舌クリーナー", worry: "朝の口臭・舌の白い汚れ", product: "舌クリーナー", price: "800円", dailyEffort: "朝10秒磨くだけ", period: "3日",
    resultGood: "口臭が気にならなくなって息がスッキリ", altHigh: "3000円のマウスウォッシュ", altBadState: "使っても数時間で口臭が戻ってる",
    effortHigh: "毎食後に念入りに歯磨きして",
    scene: "久しぶりに泊まった友達の家の洗面所", reaction: "それ何って思わず二度見しちゃう",
    itemName: "KACHISUTA 舌ブラシ 舌クリーナー 口臭ケア", itemUrl: "https://www.amazon.co.jp/dp/B08PYJW6L6" },
  { name: "花粉ブロックスプレー", worry: "外出先での花粉の侵入", product: "花粉ブロックスプレー", price: "900円", dailyEffort: "出かける前にシュッとするだけ", period: "3日",
    resultGood: "マスクの中まで花粉が来なくなる", altHigh: "5000円の高性能空気清浄機", altBadState: "部屋は快適でも外出先でくしゃみが出る",
    effortHigh: "毎日帰宅後すぐ服をはたいて着替えて",
    scene: "花粉シーズンの満員電車の中", reaction: "涼しい顔してる人に思わず二度見する",
    itemName: "アース製薬 アレルブロック 花粉ガードスプレー", itemUrl: "https://www.amazon.co.jp/dp/B0192QPWDC" },
  { name: "卓上加湿器", worry: "デスク周りの乾燥・喉のイガイガ", product: "卓上加湿器", price: "2000円", dailyEffort: "USBに挿しておくだけ", period: "3日",
    resultGood: "喉のイガイガが減って肌の乾燥も気にならなくなる", altHigh: "1万円の大型加湿器", altBadState: "置き場所に困って結局しまい込んでる",
    effortHigh: "毎日給水と掃除に手間をかけて",
    scene: "在宅勤務中の自分のデスク横", reaction: "おしゃれな見た目につい二度見しちゃう",
    itemName: "卓上加湿器 小型 USB給電式 350ml", itemUrl: "https://www.amazon.co.jp/dp/B0CRJT4Q99" },
  { name: "布団圧縮袋", worry: "クローゼットの中の布団のかさばり", product: "布団圧縮袋", price: "1000円", dailyEffort: "掃除機で10分吸うだけ", period: "1回",
    resultGood: "布団が3分の1にまとまって収納がスッキリする", altHigh: "2000円のトランクルーム", altBadState: "借りても結局荷物が増え続けてる",
    effortHigh: "季節ごとに布団を丸めて紐で縛って",
    scene: "引っ越し作業を手伝った友達の部屋", reaction: "収納力の違いに思わず驚いちゃう",
    itemName: "石崎資材 ふとん圧縮袋 バルブ式 FSK-01B", itemUrl: "https://www.amazon.co.jp/dp/B00S0WGLQM" },
  { name: "毛穴吸引器", worry: "鼻の黒ずみ・角栓", product: "毛穴吸引器", price: "3000円", dailyEffort: "週2回3分当てるだけ", period: "1週間",
    resultGood: "鼻の黒ずみが目立たなくなって毛穴が引き締まる", altHigh: "1万円のエステの毛穴吸引コース", altBadState: "通うのが続かず結局黒ずみが戻ってる",
    effortHigh: "毎晩指で角栓を押し出そうとして",
    scene: "美容院の順番待ちの待合室", reaction: "肌の綺麗さについ二度見しちゃう",
    itemName: "Panasonic EH-SC10-E 毛穴吸引スポットクリア", itemUrl: "https://www.amazon.co.jp/dp/B09HGNZWVV" },
  { name: "低反発枕", worry: "朝起きた時の首や肩の痛み", product: "低反発枕", price: "3000円", dailyEffort: "いつも通り寝るだけ", period: "3日",
    resultGood: "首や肩が軽くなって朝の目覚めがスッキリする", altHigh: "2万円のオーダーメイド枕", altBadState: "高いお金払ったのに結局合わずに戻してる",
    effortHigh: "毎晩バスタオルを畳んで高さを調整して",
    scene: "出張先のビジネスホテルの部屋", reaction: "寝心地の良さについつい二度見する",
    itemName: "低反発枕 まくら 肩こり 首こり 安眠枕", itemUrl: "https://www.amazon.co.jp/dp/B0DFTBY98H" },
  { name: "非常食セット", worry: "災害時の食料備蓄不足", product: "非常食セット", price: "5000円", dailyEffort: "棚に置いておくだけ", period: "3日",
    resultGood: "いざという時も5年間安心して備えられる", altHigh: "毎月買い足す備蓄食品", altBadState: "賞味期限が切れて結局無駄にしてる",
    effortHigh: "毎月備蓄食品の賞味期限を確認して入れ替えて",
    scene: "マンションの防災訓練の集合場所", reaction: "備えの良さに思わず感心しちゃう",
    itemName: "あんしん壱番 非常食セット 5年保存 13種類", itemUrl: "https://www.amazon.co.jp/dp/B0B765Z3YS" },
  { name: "換気扇フィルター", worry: "キッチンの換気扇の油汚れ", product: "換気扇フィルター", price: "1000円", dailyEffort: "貼り替えるだけ", period: "1回",
    resultGood: "油汚れがフィルターに溜まって本体がキレイなまま", altHigh: "8000円の換気扇業者", altBadState: "予約が面倒で結局油汚れを放置してる",
    effortHigh: "毎月換気扇を分解して油汚れをゴシゴシ洗って",
    scene: "ホームパーティーで行った友達のキッチン", reaction: "換気扇の綺麗さに二度見する",
    itemName: "レンジフードフィルター 貼るだけ 不織布", itemUrl: "https://www.amazon.co.jp/dp/B0D6SGPCHW" },
  { name: "撥水スプレー", worry: "雨の日の靴や鞄の水シミ", product: "撥水スプレー", price: "1200円", dailyEffort: "お出かけ前にシュッとするだけ", period: "1回",
    resultGood: "雨の日も水を弾いて靴も鞄もシミにならない", altHigh: "1万円の防水加工ブランド靴", altBadState: "高いのに雨で色落ちしたりシミになってる",
    effortHigh: "濡れるたびに乾いたタオルで拭き取って",
    scene: "土砂降りの日の駅のホーム", reaction: "靴の綺麗さに思わず二度見しちゃう",
    itemName: "3M スコッチガード 防水スプレー 170ml", itemUrl: "https://www.amazon.co.jp/dp/B06WW9LTR8" },
  { name: "フォームローラー", worry: "ふくらはぎのむくみ・脚の疲れ", product: "フォームローラー", price: "1500円", dailyEffort: "1日3分コロコロ転がすだけ", period: "1週間",
    resultGood: "脚のむくみが軽くなって夕方も脚がスッキリ", altHigh: "1万円のリンパマッサージ", altBadState: "通うのが続かず結局むくみが戻ってる",
    effortHigh: "毎晩お風呂上がりに手で30分脚を揉んで",
    scene: "ジムの休憩スペース", reaction: "様になってる使い方につい二度見する",
    itemName: "マッサージローラー 筋膜リリース むくみ 脚痩せ", itemUrl: "https://www.amazon.co.jp/dp/B0F2B1SWXC" },
];

const RAKUTEN_GENRES = [
  { name: "布団クリーナー", worry: "布団のダニやホコリが気になる悩み", product: "布団クリーナー", price: "1.3万円", dailyEffort: "布団に当てて往復するだけ", period: "1回",
    resultGood: "ダストがすっきり取れて眠りが変わる", altHigh: "3000円のクリーニング", altBadState: "頼んでも乾くまで数日布団が使えない",
    effortHigh: "毎回往復の送料を払って依頼して", tag: "掃除・時短家事",
    scene: "実家に帰省したときの寝室", reaction: "ダストの取れ具合に二度見する",
    itemName: "布団クリーナー コードレス ダニ ハンディ 軽量", itemUrl: "https://item.rakuten.co.jp/marz-shop/futoncleaner001/" },
  { name: "日焼け止めスプレー", worry: "塗り直しが面倒で紫外線対策が続かない悩み", product: "日焼け止めスプレー", price: "1760円", dailyEffort: "シュッと吹きかけるだけ", period: "1日",
    resultGood: "メイクの上からも塗り直せて焼けない", altHigh: "5000円のシミ取り", altBadState: "受けても結局また日焼けで悩む",
    effortHigh: "毎回予約を取ってクリニックに通って", tag: "日焼け対策",
    scene: "炎天下の屋外フェスの会場", reaction: "塗り直しの早さに二度見する",
    itemName: "アジャステ UVスプレー 無香料 SPF50+ 200g", itemUrl: "https://item.rakuten.co.jp/curemart/1033401/" },
  { name: "体組成計", worry: "ダイエットの成果が数字で分かりにくい悩み", product: "スマホ連動体組成計", price: "6980円", dailyEffort: "乗るだけ", period: "1週間",
    resultGood: "体脂肪や筋肉量の変化がアプリで分かる", altHigh: "1万円のジムの計測", altBadState: "計測しても月1回で変化が見えにくい",
    effortHigh: "毎回予約を取ってジムに通って", tag: "ダイエット",
    scene: "実家に帰ったときの洗面所", reaction: "体組成計の数字の細かさに二度見する",
    itemName: "RENPHO 体重計 体組成計 スマホ連動", itemUrl: "https://item.rakuten.co.jp/renpho/rpjp-es-26p3/" },
  { name: "洗濯槽クリーナー", worry: "洗濯物の生乾き臭が気になる悩み", product: "洗濯槽クリーナー", price: "1200円", dailyEffort: "洗濯機に入れて回すだけ", period: "1回",
    resultGood: "洗濯槽のカビが落ちて臭わなくなる", altHigh: "1万円のクリーニング業者", altBadState: "依頼しても数ヶ月でまた臭いが戻る",
    effortHigh: "毎回業者の予約を取って依頼して", tag: "掃除・時短家事",
    scene: "梅雨時の洗濯物を干すベランダ", reaction: "生乾き臭がしないことに二度見する",
    itemName: "パナソニック 洗濯槽クリーナー(塩素系) N-W1A", itemUrl: "https://item.rakuten.co.jp/murauchi-dvd/4549980616819/" },
  { name: "ボトル型浄水器", worry: "ペットボトルのゴミが増えて罪悪感がある悩み", product: "ボトル型浄水器", price: "3200円", dailyEffort: "水道水を入れるだけ", period: "1回",
    resultGood: "美味しい水をすぐ持ち運べる", altHigh: "2000円のミネラルウォーター", altBadState: "買っても置き場所とゴミ出しに困る",
    effortHigh: "毎回重い水をまとめ買いして", tag: "時短家事",
    scene: "よく行くジムのウォーターサーバー横", reaction: "ボトルのおしゃれさに二度見する",
    itemName: "ブリタ ボトル型浄水器 アクティブ", itemUrl: "https://item.rakuten.co.jp/brita/fag-act/" },
  { name: "ネッククーラー", worry: "夏の屋外で熱中症が心配な悩み", product: "ネッククーラー", price: "2200円", dailyEffort: "首にかけるだけ", period: "1回",
    resultGood: "外出中もひんやり快適に過ごせる", altHigh: "5000円の冷感タオルセット", altBadState: "使っても数十分でぬるくなる",
    effortHigh: "何度も冷水で絞り直して", tag: "夏グッズ",
    scene: "炎天下で応援した子供の運動会", reaction: "涼しそうな見た目につい二度見しちゃう",
    itemName: "クールリング PCM素材 28℃自然凍結", itemUrl: "https://item.rakuten.co.jp/forinessshop/2201072701sell/" },
  { name: "セルフジェルネイルライト", worry: "サロン代がかさんでネイルを諦めがちな悩み", product: "セルフジェルネイルライト", price: "2980円", dailyEffort: "硬化させてライトに当てるだけ", period: "1回",
    resultGood: "サロン級の仕上がりが自宅で完成する", altHigh: "5000円のネイルサロン", altBadState: "通っても数週間でオフして払い直す",
    effortHigh: "毎回予約を取ってサロンに通って", tag: "ネイルケア",
    scene: "行きつけの美容室の待合室", reaction: "仕上がりの綺麗さに二度見する",
    itemName: "UV/LED両対応 ジェルネイルライト", itemUrl: "https://item.rakuten.co.jp/link5520889/mjd/" },
  { name: "軽量スティック掃除機", worry: "掃除機が重くて出すのが億劫な悩み", product: "軽量スティック掃除機", price: "9800円", dailyEffort: "サッと出して吸うだけ", period: "1回",
    resultGood: "毎日の掃除が苦にならなくなる", altHigh: "1万円のハウスクリーニング", altBadState: "依頼しても毎回また埃が溜まる",
    effortHigh: "毎回予約を取って依頼して", tag: "時短家電",
    scene: "久しぶりに帰った実家の玄関先", reaction: "軽そうな持ち上げ方に二度見する",
    itemName: "VANKYO コードレス掃除機 500g 17600Pa", itemUrl: "https://item.rakuten.co.jp/heimvision/e20/" },
  { name: "虫除けアロマブレスレット", worry: "子供の虫除けスプレーの肌荒れが心配な悩み", product: "虫除けアロマブレスレット", price: "980円", dailyEffort: "手首につけるだけ", period: "1回",
    resultGood: "肌に直接つけずに虫除けできる", altHigh: "2000円の低刺激虫除けスプレー", altBadState: "使っても汗で何度も塗り直す",
    effortHigh: "何度もスプレーを塗り直して", tag: "子育てグッズ",
    scene: "公園で遊ぶ子供たちの手首", reaction: "おしゃれなブレスレットに二度見する",
    itemName: "虫よけくるくるブレスレット 天然精油", itemUrl: "https://item.rakuten.co.jp/babycareshop/bc20230070/" },
  { name: "ハンドマッサージャー", worry: "スマホ操作で指や手が疲れる悩み", product: "ハンドマッサージャー", price: "5980円", dailyEffort: "手を入れてスイッチを押すだけ", period: "1回",
    resultGood: "指先までじんわりほぐれて楽になる", altHigh: "4000円のハンドエステ", altBadState: "通っても翌日にはまた疲れが戻る",
    effortHigh: "毎回予約を取ってエステに通って", tag: "リラックスグッズ",
    scene: "よく行く整体院の待合室", reaction: "気持ちよさそうな表情に二度見する",
    itemName: "NIPLUX HAND MOMI ハンドマッサージャー", itemUrl: "https://item.rakuten.co.jp/nissoplus/np-hm21/" },
];

const AMAZON_EN_GENRES = [
  { name: "Aroma Diffuser", worry: "a room that feels dry with no scent", product: "scent diffuser", price: "$25", dailyEffort: "just add water and a few oil drops", period: "1 evening",
    resultGood: "the room feels fresh and smells great", altHigh: "$40 scented candle", altBadState: "still lighting candles that barely last",
    effortHigh: "burning through candles every week",
    scene: "a friend's apartment", reaction: "ask where it's from",
    itemName: "InnoGear Essential Oil Diffuser", itemUrl: "https://www.amazon.com/InnoGear-Aromatherapy-Essential-Ultrasonic-Humidifier/dp/B00V9JP8EE" },
  { name: "Baby Gate", worry: "a crawling baby getting close to the stairs", product: "baby gate", price: "$35", dailyEffort: "just latch it shut behind you", period: "1 day",
    resultGood: "you relax knowing the stairs are blocked", altHigh: "$3,000 stair remodel", altBadState: "still hovering by the stairs",
    effortHigh: "watching the baby every second near the stairs",
    scene: "a playdate at a friend's house", reaction: "want one immediately",
    itemName: "Cumbor Baby Gate for Stairs and Doorways", itemUrl: "https://www.amazon.com/Cumbor-29-7-40-6-Essential-Winner-Dog-Auto-Close/dp/B08CK8WPP4" },
  { name: "Cat Scratching Post", worry: "a couch getting shredded by your cat", product: "cat scratching post", price: "$30", dailyEffort: "just set it where your cat scratches", period: "1 week",
    resultGood: "your cat scratches the post instead", altHigh: "$600 new couch", altBadState: "still watching the couch get shredded",
    effortHigh: "yelling 'no' every time your cat scratches",
    scene: "a friend's living room", reaction: "do a double-take at the untouched couch",
    itemName: "Amazon Basics Cat Scratching Post", itemUrl: "https://www.amazon.com/AmazonBasics-Premium-Cat-Scratching-Post/dp/B07G3SLKQ8" },
  { name: "Cuticle Oil Pen", worry: "dry, cracked cuticles that catch on everything", product: "cuticle oil pen", price: "$10", dailyEffort: "just twist and brush it on", period: "1 week",
    resultGood: "your cuticles stay soft all day", altHigh: "$40 manicure", altBadState: "still picking at dry, cracked skin",
    effortHigh: "slathering on hand cream every hour",
    scene: "a coworker's desk", reaction: "ask to borrow it",
    itemName: "Bliss Kiss Cuticle Oil Pen", itemUrl: "https://www.amazon.com/Bliss-Kiss-Simply-Pure-Cuticle/dp/B00DYMYRX2" },
  { name: "Cooling Gel Mattress Pad", worry: "waking up sweaty every night", product: "cooling gel mattress pad", price: "$40", dailyEffort: "just lay it over your mattress", period: "1 night",
    resultGood: "you stay cool and sleep through the night", altHigh: "$2,000 mattress", altBadState: "still waking up drenched",
    effortHigh: "flipping your pillow every hour for a cool side",
    scene: "a guest room at a friend's house", reaction: "sleep better than at home and ask why",
    itemName: "Amazon Basics Cooling Gel Mattress Topper", itemUrl: "https://www.amazon.com/AmazonBasics-Cooling-Gel-Infused-CertiPUR-US-Certified/dp/B07SMSYPFV" },
  { name: "Hands-Free Umbrella Holder", worry: "pushing a stroller with no hand for an umbrella", product: "stroller umbrella mount", price: "$15", dailyEffort: "just clamp it on the bar", period: "1 walk",
    resultGood: "you push with both hands, staying dry", altHigh: "$60 rain cover", altBadState: "still getting soaked",
    effortHigh: "juggling the umbrella and the stroller handle",
    scene: "the sidewalk on a rainy school run", reaction: "stop and stare",
    itemName: "JIUKONG Hands-Free Umbrella Holder", itemUrl: "https://www.amazon.com/JIUKONG-Universal-Umbrella-Stroller-Hands-Free/dp/B0GZ6FW9ZJ" },
  { name: "Gel Nail Stickers", worry: "chipped polish days after a manicure", product: "set of gel nail stickers", price: "$12", dailyEffort: "just press one onto each nail", period: "1 manicure",
    resultGood: "your manicure stays glossy for weeks", altHigh: "$50 gel manicure", altBadState: "still touching up chips",
    effortHigh: "repainting chipped nails every few days",
    scene: "a coffee shop", reaction: "ask where you got your manicure done",
    itemName: "DANNI and TONI Gel Nail Strips", itemUrl: "https://www.amazon.com/DANNI-TONI-Transparent-Ultra-Glossy-Long-Lasting/dp/B09QS3HS5G" },
  { name: "Stroller Organizer", worry: "digging through a diaper bag at every stop", product: "stroller organizer", price: "$20", dailyEffort: "just reach into a side pocket", period: "1 outing",
    resultGood: "everything is right at your fingertips", altHigh: "$70 diaper bag", altBadState: "still digging through the bag",
    effortHigh: "unpacking the whole diaper bag at every stop",
    scene: "a crowded park", reaction: "notice how organized everything looks",
    itemName: "Momcozy Universal Stroller Organizer", itemUrl: "https://www.amazon.com/Universal-Stroller-Organizer-Insulated-Momcozy/dp/B07JMZYJVW" },
  { name: "Shower Chair", worry: "feeling unsteady standing in the shower", product: "shower chair", price: "$35", dailyEffort: "just sit down and shower as usual", period: "1 shower",
    resultGood: "you shower steady, zero wobbling", altHigh: "$3,000 remodel", altBadState: "still gripping the wall",
    effortHigh: "holding the grab bar the entire shower",
    scene: "a relative's bathroom", reaction: "wonder why you don't have one",
    itemName: "Carex Compact Shower Stool", itemUrl: "https://www.amazon.com/Carex-Compact-Shower-Stool-Adjustable/dp/B004G7NPJQ" },
  { name: "Portable Air Mattress", worry: "not having a bed ready for sudden guests", product: "portable air mattress", price: "$45", dailyEffort: "just plug in the pump", period: "1 night",
    resultGood: "guests get a comfortable bed in minutes", altHigh: "$400 bed frame", altBadState: "still apologizing for the couch",
    effortHigh: "hauling out a spare mattress from storage",
    scene: "a last-minute sleepover", reaction: "ask to borrow it next time",
    itemName: "Luxchoice Portable Air Mattress", itemUrl: "https://www.amazon.com/Luxchoice-Mattress-Rechargeable-Inflatable-Portable/dp/B0CSNBTGP3" },
];

const TRAVEL_GENRES = [
  { name: "由布院温泉の離れ宿", worry: "大浴場で周りを気にせず入れない悩み", product: "由布院の離れ宿", price: "1泊2.8万円", dailyEffort: "離れの内湯に浸かるだけ", period: "1泊",
    resultGood: "気兼ねなく名湯を満喫できる", altHigh: "5000円の貸切風呂温泉", altBadState: "利用しても時間制限で終わる",
    effortHigh: "予約して貸切風呂に通って", tag: "由布院温泉",
    itemName: "御宿 田 離宮", itemUrl: "https://travel.rakuten.co.jp/HOTEL/176658/176658.html",
    enCaption: "A ryokan with private detached rooms at Yufuin Onsen, Oita, rated 5.0 by guests." },
  { name: "白川郷の合掌造り民宿", worry: "集落を素通りで終わる悩み", product: "白川郷の民宿", price: "1泊1.2万円", dailyEffort: "合掌造りの一室に泊まるだけ", period: "1泊",
    resultGood: "150年の暮らしを体感できる", altHigh: "3000円の見学ツアー", altBadState: "参加しても外から眺めるだけ",
    effortHigh: "何度も見学ツアーに参加して", tag: "白川郷旅行",
    itemName: "民宿 かんじや", itemUrl: "https://travel.rakuten.co.jp/HOTEL/39754/39754.html",
    enCaption: "A 150-year-old gassho-zukuri farmhouse minshuku in the UNESCO village of Shirakawa-go." },
  { name: "石垣島のオーシャンビュー一棟貸し", worry: "リゾートでも人目が気になる悩み", product: "石垣島の一棟貸し", price: "1泊4.2万円", dailyEffort: "専用プールで過ごすだけ", period: "1泊",
    resultGood: "気兼ねなく絶景を独り占めできる", altHigh: "3万円の高級リゾート", altBadState: "泊まっても共有プールで気になる",
    effortHigh: "何軒も高級ホテルを比較して", tag: "石垣島旅行",
    itemName: "石垣ヒルズ", itemUrl: "https://travel.rakuten.co.jp/HOTEL/191815/191815.html",
    enCaption: "A one-villa-stay with an infinity pool on a hilltop in Ishigaki Island, Okinawa." },
  { name: "軽井沢の一棟貸しコテージ", worry: "ホテルで別荘気分を味わえない悩み", product: "軽井沢のコテージ", price: "1泊2.2万円", dailyEffort: "コテージでBBQを待つだけ", period: "1泊",
    resultGood: "自分の別荘のようにくつろげる", altHigh: "3万円の高級ホテル", altBadState: "泊まっても結局一室で終わる",
    effortHigh: "別荘気分を求めて見比べて", tag: "軽井沢旅行",
    itemName: "軽井沢の貸別荘 桜ヶ丘パークコテージ", itemUrl: "https://travel.rakuten.co.jp/HOTEL/129542/129542.html",
    enCaption: "A whole-cottage rental at a resort villa complex in Karuizawa, Nagano." },
  { name: "河口湖の富士山ビュー温泉旅館", worry: "天気任せの富士山観光に悩む悩み", product: "河口湖の富士山ビュー旅館", price: "1泊2.4万円", dailyEffort: "部屋の露天風呂に浸かるだけ", period: "1泊",
    resultGood: "部屋から富士山を満喫できる", altHigh: "1万円の富士山展望バス", altBadState: "参加しても曇りで見えない",
    effortHigh: "何度も展望ツアーに参加して", tag: "河口湖旅行",
    itemName: "富士河口湖温泉 湖南荘", itemUrl: "https://travel.rakuten.co.jp/HOTEL/31111/31111.html",
    enCaption: "A hot spring ryokan at Lake Kawaguchi with rooms facing Mt. Fuji, rated 4.75 by guests." },
  { name: "屋久島の一棟貸し星空コテージ", worry: "満点の星空に憧れても叶わない悩み", product: "屋久島のコテージ", price: "1泊2000円", dailyEffort: "テラスで寝転んで星を待つだけ", period: "1泊",
    resultGood: "みかん畑に囲まれた星空を独占できる", altHigh: "1万円の天体観測ツアー", altBadState: "参加しても天候次第で見えない",
    effortHigh: "予約して観測地まで通って", tag: "屋久島旅行",
    itemName: "Villa Heureux（ヴィラ ウルー）", itemUrl: "https://travel.rakuten.co.jp/HOTEL/146866/146866.html",
    enCaption: "A whole-cottage stay surrounded by tangerine orchards in Yakushima, rated 5.0 by guests." },
  { name: "佐渡島の海鮮民宿", worry: "離島で海の幸を味わい切れない悩み", product: "佐渡島の海鮮民宿", price: "1泊1.5万円", dailyEffort: "民宿で舟盛りを待つだけ", period: "1泊",
    resultGood: "特大アワビと海鮮を満喫できる", altHigh: "1万円の食べ放題ツアー", altBadState: "参加しても時間制限で食べ切れない",
    effortHigh: "何度も食べ放題ツアーに参加して", tag: "佐渡島旅行",
    itemName: "民宿 敷島荘", itemUrl: "https://travel.rakuten.co.jp/HOTEL/40089/40089.html",
    enCaption: "A minshuku in Sado Island, Niigata, known for its abalone and seafood dinners." },
  { name: "蔵王温泉のゲレンデ徒歩5分スキー宿", worry: "移動に時間を取られる悩み", product: "蔵王温泉のスキー宿", price: "1泊8800円", dailyEffort: "徒歩5分でゲレンデに向かうだけ", period: "1泊",
    resultGood: "滑る時間が増えて満足できる", altHigh: "1万円の送迎付きツアー", altBadState: "利用しても送迎待ちで時間が減る",
    effortHigh: "毎回送迎バスを待って", tag: "蔵王温泉",
    itemName: "蔵王温泉 ロッジ スコーレ", itemUrl: "https://travel.rakuten.co.jp/HOTEL/5102/5102.html",
    enCaption: "A ski lodge at Zao Onsen, Yamagata, five minutes' walk from the slopes." },
  { name: "下田の海近くペット同伴OK宿", worry: "愛犬を預けて旅行するのが心苦しい悩み", product: "下田のペット同伴宿", price: "1泊1.5万円", dailyEffort: "愛犬と宿の部屋でくつろぐだけ", period: "1泊",
    resultGood: "愛犬と一緒に旅を満喫できる", altHigh: "3000円のペットホテル", altBadState: "預けても慣れない環境でストレスがかかる",
    effortHigh: "毎回送り迎えして", tag: "下田旅行",
    itemName: "ペットと泊まる伊豆下田温泉宿 晴レ屋", itemUrl: "https://travel.rakuten.co.jp/HOTEL/111166/111166.html",
    enCaption: "A pet-friendly hot spring inn near the beach in Shimoda, Izu." },
  { name: "奥飛騨温泉郷の貸切露天風呂宿", worry: "混浴の露天風呂に気を遣う悩み", product: "奥飛騨温泉郷の宿", price: "1泊2万円", dailyEffort: "貸切露天風呂を好きなだけ回るだけ", period: "1泊",
    resultGood: "気兼ねなく秘湯気分を満喫できる", altHigh: "5000円の貸切温泉施設", altBadState: "利用しても時間制限ですぐ終わる",
    effortHigh: "予約して貸切温泉に通って", tag: "奥飛騨温泉",
    itemName: "旅館 岐山", itemUrl: "https://travel.rakuten.co.jp/HOTEL/20046/20046.html",
    enCaption: "A ryokan in Okuhida Onsen, Gifu, with four free private open-air baths, no reservation needed." },
];

function amazonBuildScene(g) {
  const l1 = `${g.scene}で${g.product}を使ってる人がいたら、${g.reaction}。`;
  const rest = `だって、${g.price}なのに${g.dailyEffort}で${g.period}後には${g.resultGood}って🥹` +
    `${g.scene}でまた見かけたら、絶対また二度見する自信ある。` +
    `周りの反応まで変わるなら、試さない理由なくない？🥹`;
  return `${l1}\n${rest}`;
}
function amazonBuildA(g) {
  const l1 = `${g.worry}に悩んでる人、${g.product}使った方がいいよ。`;
  const rest = `だって、${g.price}なのに${g.dailyEffort}で${g.period}後には${g.resultGood}って` +
    `マジでやばくない🥹${g.altHigh}使ってるのに${g.altBadState}人絶対試して。` +
    `高いお金払って変化ないより、${g.price}でちゃんと結果出る方が良くない？🥹`;
  return `${l1}\n${rest}`;
}
function amazonBuildB(g) {
  const l1 = `${g.worry}に時間かけたくない人、${g.product}使った方がいい。`;
  const rest = `だって、${g.dailyEffort}足すだけで${g.period}後には${g.resultGood}って` +
    `忙しい人ほどマジで助かるやつ🥹${g.effortHigh}頑張ってるのに効果続かない人絶対試して。` +
    `手間かけて一時的に変わるより、${g.dailyEffort}で自然にキープできる方が良くない？🥹`;
  return `${l1}\n${rest}`;
}
function amazonBuildC(g) {
  const l1 = `${g.worry}、実は${g.altHigh}使ってる人ほど気づいてない落とし穴があるらしい。`;
  const rest = `だって、値段より続けられるかが大事で${g.price}の${g.product}でも${g.period}継続したら` +
    `${g.resultGood}って🥹${g.altHigh}買って満足しただけで${g.altBadState}人絶対試して。` +
    `値段の高さで安心するより、ちゃんと使い切って効果出す方が良くない？🥹`;
  return `${l1}\n${rest}`;
}

function rakutenBuildScene(g) {
  const l1 = `${g.scene}で${g.product}を使ってる人がいたら、${g.reaction}。`;
  const rest = `だって、${g.price}なのに${g.dailyEffort}で${g.period}後には${g.resultGood}って🕊️` +
    `${g.scene}でまた見かけたら、絶対また二度見する自信ある。` +
    `周りの反応まで変わるなら、試さない理由がなくない？🕊️`;
  return `${l1}\n${rest}`;
}
function rakutenBuildA(g) {
  const l1 = `${g.worry}に悩んでる人、${g.product}が本当に買ってよかった。`;
  const rest = `だって、${g.price}なのに${g.dailyEffort}で${g.period}後には${g.resultGood}って` +
    `正直コスパ良すぎ🕊️${g.altHigh}使ってるのに${g.altBadState}人こそ試して。` +
    `高いお金払って変化ないより、${g.price}でちゃんと結果出る方が良くない？🕊️`;
  return `${l1}\n${rest}`;
}
function rakutenBuildB(g) {
  const l1 = `${g.worry}に時間かけたくない人、${g.product}が神すぎた。`;
  const rest = `だって、${g.dailyEffort}足すだけで${g.period}後には${g.resultGood}って` +
    `忙しい人ほどマジで助かるやつ🕊️${g.effortHigh}頑張ってるのに効果続かない人こそ試して。` +
    `手間かけて一時的に変わるより、${g.dailyEffort}で自然にキープできる方が良くない？🕊️`;
  return `${l1}\n${rest}`;
}
function rakutenBuildC(g) {
  const l1 = `${g.worry}、実は${g.altHigh}使ってる人ほど気づいてない落とし穴があるらしい。`;
  const rest = `だって、値段より続けられるかが大事で${g.price}の${g.product}でも${g.period}継続したら` +
    `${g.resultGood}って🕊️${g.altHigh}買って満足しただけで${g.altBadState}人こそ試して。` +
    `値段で安心するより、ちゃんと使い切る方が良くない？🕊️`;
  return `${l1}\n${rest}`;
}

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function amazonEnBuildScene(g) {
  const l1 = `If you saw someone using a ${g.product} at ${g.scene}, you'd ${g.reaction}.`;
  const rest = `For just ${g.price}, ${g.dailyEffort} and after ${g.period} ${g.resultGood} 🤯 ` +
    `Spot it again at ${g.scene} and you'd still do a double-take. ` +
    `Why skip something that gets a reaction like that? 🤯`;
  return `${l1}\n${rest}`;
}
function amazonEnBuildA(g) {
  const l1 = `If ${g.worry} sounds familiar, you need a ${g.product}.`;
  const rest = `For just ${g.price}, ${g.dailyEffort} and after ${g.period} ${g.resultGood} — ` +
    `wild 🤯 Still using a ${g.altHigh} and ${g.altBadState}? You need to try this. ` +
    `Why pay more for nothing when ${g.price} actually works? 🤯`;
  return `${l1}\n${rest}`;
}
function amazonEnBuildB(g) {
  const l1 = `If you're tired of ${g.worry}, get a ${g.product}.`;
  const rest = `${cap(g.dailyEffort)} and after ${g.period} ${g.resultGood} — a lifesaver when ` +
    `you're busy 🤯 Still ${g.effortHigh} with no results? You need to try this. ` +
    `Why work harder for temporary results when this takes zero effort? 🤯`;
  return `${l1}\n${rest}`;
}
function amazonEnBuildC(g) {
  const l1 = `${cap(g.worry)} — the people who drop money on a ${g.altHigh} are missing the real fix.`;
  const rest = `It's not about price, it's about sticking with it. Even a ${g.price} ${g.product} ` +
    `works if you use it for ${g.period} — ${g.resultGood} 🤯 Bought a ${g.altHigh} and ` +
    `${g.altBadState}? You need to try this. Why pay more to feel safe when using it ` +
    `actually works? 🤯`;
  return `${l1}\n${rest}`;
}

function travelBuildA(g) {
  const l1 = `${g.worry}に悩んでる人、${g.product}に泊まって本当によかった。`;
  const rest = `だって、${g.price}なのに${g.dailyEffort}で${g.period}には${g.resultGood}って` +
    `正直コスパ良すぎ🕊️${g.altHigh}に泊まってるのに${g.altBadState}人こそ試して。` +
    `高いお金払って変化ないより、${g.price}でちゃんと満足できる方が良くない？🕊️`;
  return `${l1}\n${rest}`;
}
function travelBuildB(g) {
  const l1 = `${g.worry}に時間かけたくない人、${g.product}が神すぎた。`;
  const rest = `だって、${g.dailyEffort}だけで${g.period}には${g.resultGood}って` +
    `忙しい人ほどマジで助かるやつ🕊️${g.effortHigh}頑張ってるのに疲れが取れない人こそ試して。` +
    `手間かけて一時的に変わるより、${g.dailyEffort}で自然にリフレッシュできる方が良くない？🕊️`;
  return `${l1}\n${rest}`;
}
function travelBuildC(g) {
  const l1 = `${g.worry}、実は${g.altHigh}に泊まってる人ほど気づいてない落とし穴があるらしい。`;
  const rest = `だって、値段より過ごし方が大事で${g.price}の${g.product}でも${g.period}過ごしたら` +
    `${g.resultGood}って🕊️${g.altHigh}に泊まって満足しただけで${g.altBadState}人こそ試して。` +
    `値段で安心するより、ちゃんと満喫する方が良くない？🕊️`;
  return `${l1}\n${rest}`;
}

const PLATFORMS = {
  amazon: {
    key: "amazon",
    label: "Amazon / Threads",
    linkLabel: "紹介商品（Amazon）",
    note: "※価格・在庫は変動するため、投稿前にAmazonで最新情報をご確認ください。",
    genres: AMAZON_GENRES,
    lastScoreKey: "reaction",
    lastScoreLabel: "コメント誘発力",
    hashtags: (g) => `#PR #Amazon #買ってよかったもの #購入品 #${g.name}`,
    patterns: [
      { key: "A", title: "パターンA｜シーン共感型", build: amazonBuildScene,
        scoreRange: { hook: [18, 20], concrete: [16, 19], contrarian: [8, 12], empathy: [17, 19], reaction: [18, 20] },
        reasons: ["具体的なシーンが目に浮かび保存されやすいため", "第三者のリアクションが好奇心を刺激するため"] },
      { key: "B", title: "パターンB｜価格ギャップ重視型", build: amazonBuildA,
        scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], reaction: [15, 18] },
        reasons: ["価格差のインパクトで保存を誘発するため", "コスパ訴求が当事者に刺さりやすいため"] },
      { key: "C", title: "パターンC｜逆張り・共感重視型", build: amazonBuildC,
        scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], reaction: [16, 19] },
        reasons: ["高額勢を名指しし共感と反論を誘発するため", "逆張り視点でコメントを誘発しやすいため"] },
    ],
  },
  rakuten: {
    key: "rakuten",
    label: "楽天ROOM",
    linkLabel: "紹介商品（楽天市場）",
    note: "※価格・在庫は変動するため、投稿前に楽天市場で最新情報を確認してからROOMにコレクトしてください。",
    genres: RAKUTEN_GENRES,
    lastScoreKey: "reaction",
    lastScoreLabel: "クリップ誘発力",
    hashtags: (g) => `#PR #楽天ROOM #楽天市場 #買ってよかったもの #購入品 #${g.tag}`,
    patterns: [
      { key: "A", title: "パターンA｜シーン共感型", build: rakutenBuildScene,
        scoreRange: { hook: [18, 20], concrete: [16, 19], contrarian: [8, 12], empathy: [17, 19], reaction: [18, 20] },
        reasons: ["具体的なシーンが目に浮かび保存されやすいため", "第三者のリアクションが好奇心を刺激するため"] },
      { key: "B", title: "パターンB｜価格ギャップ重視型", build: rakutenBuildA,
        scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], reaction: [15, 18] },
        reasons: ["価格差のインパクトでクリップを誘発するため", "コスパ訴求が当事者に刺さりやすいため"] },
      { key: "C", title: "パターンC｜逆張り・共感重視型", build: rakutenBuildC,
        scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], reaction: [16, 19] },
        reasons: ["高額勢を名指しし共感と反論を誘発するため", "逆張り視点でコメントを誘発しやすいため"] },
    ],
  },
  amazon_en: {
    key: "amazon_en",
    label: "Amazon (EN)",
    linkLabel: "Featured product (Amazon)",
    note: "※ Prices and availability change. Check Amazon for the latest info before posting.",
    genres: AMAZON_EN_GENRES,
    lastScoreKey: "reaction",
    lastScoreLabel: "Comment Bait",
    genreLabelPrefix: "Today's genre: ",
    labelColon: ": ",
    countJoin: " ",
    charUnit: " chars",
    hashtags: (g) => `#ad #Amazon #AmazonFinds #${g.name.replace(/\s+/g, "")}`,
    patterns: [
      { key: "A", title: "Pattern A｜Scene Reaction Angle", build: amazonEnBuildScene,
        scoreRange: { hook: [18, 20], concrete: [16, 19], contrarian: [8, 12], empathy: [17, 19], reaction: [18, 20] },
        reasons: ["A vivid scene makes the post easy to picture and save", "A third-party reaction sparks curiosity without feeling salesy"] },
      { key: "B", title: "Pattern B｜Price-Gap Angle", build: amazonEnBuildA,
        scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], reaction: [15, 18] },
        reasons: ["The price gap creates enough shock value to drive saves", "Cost-per-value framing lands hard with the target audience"] },
      { key: "C", title: "Pattern C｜Contrarian Angle", build: amazonEnBuildC,
        scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], reaction: [16, 19] },
        reasons: ["Calling out big spenders sparks both agreement and pushback", "The contrarian angle is built to drive comments"] },
    ],
  },
  travel: {
    key: "travel",
    label: "楽天トラベル",
    linkLabel: "紹介施設（楽天トラベル）",
    note: "※料金・空室状況は変動するため、投稿前に楽天トラベルで最新情報をご確認ください。",
    genres: TRAVEL_GENRES,
    lastScoreKey: "reaction",
    lastScoreLabel: "クリップ誘発力",
    genreLabelPrefix: "今日のテーマ：",
    hashtags: (g) => `#PR #楽天トラベル #国内旅行 #旅行好き #旅好きさんと繋がりたい #${g.tag}`,
    patterns: [
      { key: "A", title: "パターンA｜価格ギャップ重視型", build: travelBuildA,
        scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], reaction: [15, 18] },
        reasons: ["価格差のインパクトでクリップを誘発するため", "コスパ訴求が当事者に刺さりやすいため"] },
      { key: "B", title: "パターンB｜時短・手軽さ重視型", build: travelBuildB,
        scoreRange: { hook: [15, 18], concrete: [16, 19], contrarian: [13, 16], empathy: [17, 19], reaction: [15, 18] },
        reasons: ["時短の実感が刺さり保存されやすいため", "手軽さ訴求で忙しい層に刺さるため"] },
      { key: "C", title: "パターンC｜逆張り・共感重視型", build: travelBuildC,
        scoreRange: { hook: [17, 19], concrete: [16, 19], contrarian: [18, 20], empathy: [17, 19], reaction: [16, 19] },
        reasons: ["高額勢を名指しし共感と反論を誘発するため", "逆張り視点でコメントを誘発しやすいため"] },
    ],
  },
};

const SCORE_LABELS_BASE = [
  ["hook", "フック力"],
  ["concrete", "具体性"],
  ["contrarian", "逆張り強度"],
  ["empathy", "共感性"],
];

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickGenre(genres, excludeIndex) {
  if (genres.length === 1) return { genre: genres[0], index: 0 };
  let index = excludeIndex;
  while (index === excludeIndex) index = randInt(0, genres.length - 1);
  return { genre: genres[index], index };
}

function scorePattern(pattern) {
  const scores = {};
  let total = 0;
  for (const [key] of [...SCORE_LABELS_BASE, ["reaction", ""]]) {
    const [min, max] = pattern.scoreRange[key];
    const value = randInt(min, max);
    scores[key] = value;
    total += value;
  }
  return { scores, total };
}

function generateRound(platform, genre) {
  const countJoin = platform.countJoin ?? "";
  return platform.patterns.map((pattern) => {
    const body = pattern.build(genre);
    const { scores, total } = scorePattern(pattern);
    const reason = pattern.reasons[randInt(0, pattern.reasons.length - 1)];
    const tags = platform.hashtags ? platform.hashtags(genre) : "";
    return { pattern, body, tags, scores, total, reason, charCount: body.replace(/\n/g, countJoin).length };
  });
}

function formatRound(platform, results, genre) {
  const divider = "━━━━━━━━━━━━━━━";
  const scoreLabels = [...SCORE_LABELS_BASE, ["reaction", platform.lastScoreLabel]];
  const enBlock = genre.enCaption ? `\n\n🌐 ${genre.enCaption} (Ad)` : "";
  const blocks = results.map(({ pattern, body, tags, scores, total }) => {
    const scoreLines = scoreLabels.map(([key, label]) => `・${label}：${scores[key]}/20`).join("\n");
    const tagsBlock = tags ? `\n\n${tags}` : "";
    return `${divider}\n【${pattern.title}】\n伸びる確率：${total}％\n\n${body}${enBlock}${tagsBlock}\n\n採点内訳：\n${scoreLines}`;
  });
  const winner = results.reduce((best, cur) => (cur.total > best.total ? cur : best), results[0]);
  const summary = `【総合おすすめ】\n最も伸びる確率が高いパターン：${winner.pattern.key}\n理由：${winner.reason}`;
  return `${blocks.join("\n")}\n${divider}\n\n${summary}`;
}

const platformButtons = document.querySelectorAll(".pg-platform-btn");
const genreLabelEl = document.getElementById("genre-label");
const productInfoEl = document.getElementById("product-info");
const productNoteEl = document.getElementById("product-note");
const outputEl = document.getElementById("output");
const generateBtn = document.getElementById("generate-btn");
const copyBtn = document.getElementById("copy-btn");
const copyStatusEl = document.getElementById("copy-status");
const charCountsEl = document.getElementById("char-counts");

let currentPlatformKey = "amazon";
let lastGenreIndex = -1;
let currentText = "";

function render() {
  const platform = PLATFORMS[currentPlatformKey];
  const { genre, index } = pickGenre(platform.genres, lastGenreIndex);
  lastGenreIndex = index;

  const results = generateRound(platform, genre);
  currentText = formatRound(platform, results, genre);

  genreLabelEl.textContent = `${platform.genreLabelPrefix ?? "今日のジャンル："}${genre.name}`;
  productInfoEl.textContent = "";
  const linkLabel = document.createElement("span");
  linkLabel.textContent = `${platform.linkLabel}${platform.labelColon ?? "："}`;
  const link = document.createElement("a");
  link.href = genre.itemUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = genre.itemName;
  productInfoEl.append(linkLabel, link);
  productNoteEl.textContent = platform.note;

  outputEl.textContent = currentText;
  const charUnit = platform.charUnit ?? "文字";
  charCountsEl.textContent = results
    .map((r) => `${r.pattern.key}: ${r.charCount}${charUnit}`)
    .join(" / ");
  copyStatusEl.textContent = "";
}

function setPlatform(key) {
  if (key === currentPlatformKey) return;
  currentPlatformKey = key;
  lastGenreIndex = -1;
  document.body.dataset.platform = key;
  platformButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.platform === key);
    btn.setAttribute("aria-selected", String(btn.dataset.platform === key));
  });
  render();
}

platformButtons.forEach((btn) => {
  btn.addEventListener("click", () => setPlatform(btn.dataset.platform));
});

generateBtn.addEventListener("click", render);

copyBtn.addEventListener("click", async () => {
  if (!currentText) return;
  try {
    await navigator.clipboard.writeText(currentText);
    copyStatusEl.textContent = "コピーしました";
  } catch {
    copyStatusEl.textContent = "コピーに失敗しました。手動で選択してください。";
  }
});

document.body.dataset.platform = currentPlatformKey;
render();
