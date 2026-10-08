const AMAZON_GENRES = [
  { name: "舌クリーナー", worry: "朝の口臭・舌の白い汚れ", product: "舌クリーナー", price: "800円", dailyEffort: "朝10秒磨くだけ", period: "3日",
    resultGood: "口臭が気にならなくなって息がスッキリ", altHigh: "3000円のマウスウォッシュ", altBadState: "使っても数時間で口臭が戻ってる",
    effortHigh: "毎食後に念入りに歯磨きして",
    itemName: "KACHISUTA 舌ブラシ 舌クリーナー 口臭ケア", itemUrl: "https://www.amazon.co.jp/dp/B08PYJW6L6" },
  { name: "花粉ブロックスプレー", worry: "外出先での花粉の侵入", product: "花粉ブロックスプレー", price: "900円", dailyEffort: "出かける前にシュッとするだけ", period: "3日",
    resultGood: "マスクの中まで花粉が来なくなる", altHigh: "5000円の高性能空気清浄機", altBadState: "部屋は快適でも外出先でくしゃみが出る",
    effortHigh: "毎日帰宅後すぐ服をはたいて着替えて",
    itemName: "アース製薬 アレルブロック 花粉ガードスプレー", itemUrl: "https://www.amazon.co.jp/dp/B0192QPWDC" },
  { name: "卓上加湿器", worry: "デスク周りの乾燥・喉のイガイガ", product: "卓上加湿器", price: "2000円", dailyEffort: "USBに挿しておくだけ", period: "3日",
    resultGood: "喉のイガイガが減って肌の乾燥も気にならなくなる", altHigh: "1万円の大型加湿器", altBadState: "置き場所に困って結局しまい込んでる",
    effortHigh: "毎日給水と掃除に手間をかけて",
    itemName: "卓上加湿器 小型 USB給電式 350ml", itemUrl: "https://www.amazon.co.jp/dp/B0CRJT4Q99" },
  { name: "布団圧縮袋", worry: "クローゼットの中の布団のかさばり", product: "布団圧縮袋", price: "1000円", dailyEffort: "掃除機で10分吸うだけ", period: "1回",
    resultGood: "布団が3分の1にまとまって収納がスッキリする", altHigh: "月2000円のトランクルーム", altBadState: "借りても結局荷物が増え続けてる",
    effortHigh: "季節ごとに布団を丸めて紐で縛って",
    itemName: "石崎資材 ふとん圧縮袋 バルブ式 FSK-01B", itemUrl: "https://www.amazon.co.jp/dp/B00S0WGLQM" },
  { name: "毛穴吸引器", worry: "鼻の黒ずみ・角栓", product: "毛穴吸引器", price: "3000円", dailyEffort: "週2回3分当てるだけ", period: "1週間",
    resultGood: "鼻の黒ずみが目立たなくなって毛穴が引き締まる", altHigh: "1万円のエステの毛穴吸引コース", altBadState: "通うのが続かず結局黒ずみが戻ってる",
    effortHigh: "毎晩指で角栓を押し出そうとして",
    itemName: "Panasonic EH-SC10-E 毛穴吸引スポットクリア", itemUrl: "https://www.amazon.co.jp/dp/B09HGNZWVV" },
  { name: "低反発枕", worry: "朝起きた時の首や肩の痛み", product: "低反発枕", price: "3000円", dailyEffort: "いつも通り寝るだけ", period: "3日",
    resultGood: "首や肩が軽くなって朝の目覚めがスッキリする", altHigh: "2万円のオーダーメイド枕", altBadState: "高いお金払ったのに結局合わずに戻してる",
    effortHigh: "毎晩バスタオルを畳んで高さを調整して",
    itemName: "低反発枕 まくら 肩こり 首こり 安眠枕", itemUrl: "https://www.amazon.co.jp/dp/B0DFTBY98H" },
  { name: "非常食セット", worry: "災害時の食料備蓄不足", product: "非常食セット", price: "5000円", dailyEffort: "棚に置いておくだけ", period: "3日",
    resultGood: "いざという時も5年間安心して備えられる", altHigh: "毎月買い足すローリングストック食品", altBadState: "賞味期限が切れて結局無駄にしてる",
    effortHigh: "毎月備蓄食品の賞味期限を確認して入れ替えて",
    itemName: "あんしん壱番 非常食セット 5年保存 13種類", itemUrl: "https://www.amazon.co.jp/dp/B0B765Z3YS" },
  { name: "換気扇フィルター", worry: "キッチンの換気扇の油汚れ", product: "換気扇フィルター", price: "1000円", dailyEffort: "貼り替えるだけ", period: "1回",
    resultGood: "油汚れがフィルターに溜まって本体がキレイなまま", altHigh: "8000円の換気扇業者", altBadState: "予約が面倒で結局油汚れを放置してる",
    effortHigh: "毎月換気扇を分解して油汚れをゴシゴシ洗って",
    itemName: "レンジフードフィルター 貼るだけ 不織布", itemUrl: "https://www.amazon.co.jp/dp/B0D6SGPCHW" },
  { name: "撥水スプレー", worry: "雨の日の靴や鞄の水シミ", product: "撥水スプレー", price: "1200円", dailyEffort: "お出かけ前にシュッとするだけ", period: "1回",
    resultGood: "雨の日も水を弾いて靴も鞄もシミにならない", altHigh: "1万円の防水加工ブランド靴", altBadState: "高いのに雨で色落ちしたりシミになってる",
    effortHigh: "濡れるたびに乾いたタオルで拭き取って",
    itemName: "3M スコッチガード 防水スプレー 170ml", itemUrl: "https://www.amazon.co.jp/dp/B06WW9LTR8" },
  { name: "フォームローラー", worry: "ふくらはぎのむくみ・脚の疲れ", product: "フォームローラー", price: "1500円", dailyEffort: "1日3分コロコロ転がすだけ", period: "1週間",
    resultGood: "脚のむくみが軽くなって夕方も脚がスッキリ", altHigh: "月1万円のリンパマッサージ", altBadState: "通うのが続かず結局むくみが戻ってる",
    effortHigh: "毎晩お風呂上がりに手で30分脚を揉んで",
    itemName: "マッサージローラー 筋膜リリース むくみ 脚痩せ", itemUrl: "https://www.amazon.co.jp/dp/B0F2B1SWXC" },
];

const RAKUTEN_GENRES = [
  { name: "舌クリーナー", worry: "朝の口臭・舌の白い汚れ", product: "舌クリーナー", price: "700円", dailyEffort: "朝10秒磨くだけ", period: "3日",
    resultGood: "口臭が気にならなくなって息がスッキリ", altHigh: "3000円のマウスウォッシュ", altBadState: "使っても数時間で口臭が戻ってる",
    effortHigh: "毎食後に念入りに歯磨きして", tag: "口臭ケア",
    itemName: "グリーンベル 舌クリーナー グッドデザイン受賞モデル", itemUrl: "https://item.rakuten.co.jp/green-bell/sitakuri-na-/" },
  { name: "花粉ブロックスプレー", worry: "外出先での花粉の侵入", product: "花粉ブロックスプレー", price: "900円", dailyEffort: "出かける前にシュッとするだけ", period: "3日",
    resultGood: "マスクの中まで花粉が来なくなる", altHigh: "5000円の高性能空気清浄機", altBadState: "部屋は快適でも外出先でくしゃみが出る",
    effortHigh: "毎日帰宅後すぐ服をはたいて着替えて", tag: "花粉対策",
    itemName: "アース製薬 アレルブロック 花粉ガードスプレー モイストヴェール", itemUrl: "https://item.rakuten.co.jp/tomods-ap/4901080576910/" },
  { name: "卓上加湿器", worry: "デスク周りの乾燥・喉のイガイガ", product: "卓上加湿器", price: "2200円", dailyEffort: "USBに挿しておくだけ", period: "3日",
    resultGood: "喉のイガイガが減って肌の乾燥も気にならなくなる", altHigh: "1万円の大型加湿器", altBadState: "置き場所に困って結局しまい込んでる",
    effortHigh: "毎日給水と掃除に手間をかけて", tag: "乾燥対策",
    itemName: "モイストリー USB卓上加湿器", itemUrl: "https://item.rakuten.co.jp/emblstore/4526858066198/" },
  { name: "布団圧縮袋", worry: "クローゼットの中の布団のかさばり", product: "布団圧縮袋", price: "900円", dailyEffort: "掃除機で10分吸うだけ", period: "1回",
    resultGood: "布団が3分の1にまとまって収納がスッキリする", altHigh: "月2000円のトランクルーム", altBadState: "借りても結局荷物が増え続けてる",
    effortHigh: "季節ごとに布団を丸めて紐で縛って", tag: "収納",
    itemName: "リビングート 神ワザバルブ 布団圧縮袋L 2枚入り", itemUrl: "https://item.rakuten.co.jp/livingut/366714/" },
  { name: "毛穴吸引器", worry: "鼻の黒ずみ・角栓", product: "毛穴吸引器", price: "3480円", dailyEffort: "週2回3分当てるだけ", period: "1週間",
    resultGood: "鼻の黒ずみが目立たなくなって毛穴が引き締まる", altHigh: "1万円のエステの毛穴吸引コース", altBadState: "通うのが続かず結局黒ずみが戻ってる",
    effortHigh: "毎晩指で角栓を押し出そうとして", tag: "毛穴ケア",
    itemName: "NIPLUX マルチスキンクリーナー 水流式毛穴吸引", itemUrl: "https://item.rakuten.co.jp/nissoplus/np-msc25/" },
  { name: "低反発枕", worry: "朝起きた時の首や肩の痛み", product: "低反発枕", price: "3500円", dailyEffort: "いつも通り寝るだけ", period: "3日",
    resultGood: "首や肩が軽くなって朝の目覚めがスッキリする", altHigh: "2万円のオーダーメイド枕", altBadState: "高いお金払ったのに結局合わずに戻してる",
    effortHigh: "毎晩バスタオルを畳んで高さを調整して", tag: "快眠グッズ",
    itemName: "HOMFINE 低反発枕 4段階高さ調整", itemUrl: "https://item.rakuten.co.jp/homfine/hfj013-38/" },
  { name: "非常食セット", worry: "災害時の食料備蓄不足", product: "非常食セット", price: "4500円", dailyEffort: "棚に置いておくだけ", period: "3日",
    resultGood: "いざという時も5年間安心して備えられる", altHigh: "毎月買い足すローリングストック食品", altBadState: "賞味期限が切れて結局無駄にしてる",
    effortHigh: "毎月備蓄食品の賞味期限を確認して入れ替えて", tag: "防災グッズ",
    itemName: "防災・非常食の専門店らいぷら 7日間非常食セットB 5年保存", itemUrl: "https://item.rakuten.co.jp/lifestoreplus/ls13378/" },
  { name: "換気扇フィルター", worry: "キッチンの換気扇の油汚れ", product: "換気扇フィルター", price: "900円", dailyEffort: "貼り替えるだけ", period: "1回",
    resultGood: "油汚れがフィルターに溜まって本体がキレイなまま", altHigh: "8000円の換気扇業者", altBadState: "予約が面倒で結局油汚れを放置してる",
    effortHigh: "毎月換気扇を分解して油汚れをゴシゴシ洗って", tag: "掃除・時短家事",
    itemName: "東洋アルミ フィルたん レンジフードフィルター 貼るだけ", itemUrl: "https://item.rakuten.co.jp/badasai/4901987227830/" },
  { name: "撥水スプレー", worry: "雨の日の靴や鞄の水シミ", product: "撥水スプレー", price: "800円", dailyEffort: "お出かけ前にシュッとするだけ", period: "1回",
    resultGood: "雨の日も水を弾いて靴も鞄もシミにならない", altHigh: "1万円の防水加工ブランド靴", altBadState: "高いのに雨で色落ちしたりシミになってる",
    effortHigh: "濡れるたびに乾いたタオルで拭き取って", tag: "梅雨対策",
    itemName: "コロンブス 防水スプレー アメダス420ml", itemUrl: "https://item.rakuten.co.jp/i-need-more-shoes/10009003/" },
  { name: "フォームローラー", worry: "ふくらはぎのむくみ・脚の疲れ", product: "フォームローラー", price: "2500円", dailyEffort: "1日3分コロコロ転がすだけ", period: "1週間",
    resultGood: "脚のむくみが軽くなって夕方も脚がスッキリ", altHigh: "月1万円のリンパマッサージ", altBadState: "通うのが続かず結局むくみが戻ってる",
    effortHigh: "毎晩お風呂上がりに手で30分脚を揉んで", tag: "むくみケア",
    itemName: "AOBAX 筋膜リリースローラー むくみ脚やせ", itemUrl: "https://item.rakuten.co.jp/aobax/aobamasarora/" },
];

const AMAZON_EN_GENRES = [
  { name: "Aroma Diffuser", worry: "a room that feels dry with no scent", product: "scent diffuser", price: "$25", dailyEffort: "just add water and a few oil drops", period: "1 evening",
    resultGood: "the room feels fresh and smells great", altHigh: "$40 scented candle", altBadState: "still lighting candles that barely last",
    effortHigh: "burning through candles every week",
    itemName: "InnoGear Essential Oil Diffuser", itemUrl: "https://www.amazon.com/InnoGear-Aromatherapy-Essential-Ultrasonic-Humidifier/dp/B00V9JP8EE" },
  { name: "Baby Gate", worry: "a crawling baby getting close to the stairs", product: "baby gate", price: "$35", dailyEffort: "just latch it shut behind you", period: "1 day",
    resultGood: "you relax knowing the stairs are blocked", altHigh: "$3,000 stair remodel", altBadState: "still hovering by the stairs",
    effortHigh: "watching the baby every second near the stairs",
    itemName: "Cumbor Baby Gate for Stairs and Doorways", itemUrl: "https://www.amazon.com/Cumbor-29-7-40-6-Essential-Winner-Dog-Auto-Close/dp/B08CK8WPP4" },
  { name: "Cat Scratching Post", worry: "a couch getting shredded by your cat", product: "cat scratching post", price: "$30", dailyEffort: "just set it where your cat scratches", period: "1 week",
    resultGood: "your cat scratches the post instead", altHigh: "$600 new couch", altBadState: "still watching the couch get shredded",
    effortHigh: "yelling 'no' every time your cat scratches",
    itemName: "Amazon Basics Cat Scratching Post", itemUrl: "https://www.amazon.com/AmazonBasics-Premium-Cat-Scratching-Post/dp/B07G3SLKQ8" },
  { name: "Cuticle Oil Pen", worry: "dry, cracked cuticles that catch on everything", product: "cuticle oil pen", price: "$10", dailyEffort: "just twist and brush it on", period: "1 week",
    resultGood: "your cuticles stay soft all day", altHigh: "$40 manicure", altBadState: "still picking at dry, cracked skin",
    effortHigh: "slathering on hand cream every hour",
    itemName: "Bliss Kiss Cuticle Oil Pen", itemUrl: "https://www.amazon.com/Bliss-Kiss-Simply-Pure-Cuticle/dp/B00DYMYRX2" },
  { name: "Cooling Gel Mattress Pad", worry: "waking up sweaty every night", product: "cooling gel mattress pad", price: "$40", dailyEffort: "just lay it over your mattress", period: "1 night",
    resultGood: "you stay cool and sleep through the night", altHigh: "$2,000 mattress", altBadState: "still waking up drenched",
    effortHigh: "flipping your pillow every hour for a cool side",
    itemName: "Amazon Basics Cooling Gel Mattress Topper", itemUrl: "https://www.amazon.com/AmazonBasics-Cooling-Gel-Infused-CertiPUR-US-Certified/dp/B07SMSYPFV" },
  { name: "Hands-Free Umbrella Holder", worry: "pushing a stroller with no hand for an umbrella", product: "stroller umbrella mount", price: "$15", dailyEffort: "just clamp it on the bar", period: "1 walk",
    resultGood: "you push with both hands, staying dry", altHigh: "$60 rain cover", altBadState: "still getting soaked",
    effortHigh: "juggling the umbrella and the stroller handle",
    itemName: "JIUKONG Hands-Free Umbrella Holder", itemUrl: "https://www.amazon.com/JIUKONG-Universal-Umbrella-Stroller-Hands-Free/dp/B0GZ6FW9ZJ" },
  { name: "Gel Nail Stickers", worry: "chipped polish days after a manicure", product: "set of gel nail stickers", price: "$12", dailyEffort: "just press one onto each nail", period: "1 manicure",
    resultGood: "your manicure stays glossy for weeks", altHigh: "$50 gel manicure", altBadState: "still touching up chips",
    effortHigh: "repainting chipped nails every few days",
    itemName: "DANNI and TONI Gel Nail Strips", itemUrl: "https://www.amazon.com/DANNI-TONI-Transparent-Ultra-Glossy-Long-Lasting/dp/B09QS3HS5G" },
  { name: "Stroller Organizer", worry: "digging through a diaper bag at every stop", product: "stroller organizer", price: "$20", dailyEffort: "just reach into a side pocket", period: "1 outing",
    resultGood: "everything is right at your fingertips", altHigh: "$70 diaper bag", altBadState: "still digging through the bag",
    effortHigh: "unpacking the whole diaper bag at every stop",
    itemName: "Momcozy Universal Stroller Organizer", itemUrl: "https://www.amazon.com/Universal-Stroller-Organizer-Insulated-Momcozy/dp/B07JMZYJVW" },
  { name: "Shower Chair", worry: "feeling unsteady standing in the shower", product: "shower chair", price: "$35", dailyEffort: "just sit down and shower as usual", period: "1 shower",
    resultGood: "you shower steady, zero wobbling", altHigh: "$3,000 remodel", altBadState: "still gripping the wall",
    effortHigh: "holding the grab bar the entire shower",
    itemName: "Carex Compact Shower Stool", itemUrl: "https://www.amazon.com/Carex-Compact-Shower-Stool-Adjustable/dp/B004G7NPJQ" },
  { name: "Portable Air Mattress", worry: "not having a bed ready for sudden guests", product: "portable air mattress", price: "$45", dailyEffort: "just plug in the pump", period: "1 night",
    resultGood: "guests get a comfortable bed in minutes", altHigh: "$400 bed frame", altBadState: "still apologizing for the couch",
    effortHigh: "hauling out a spare mattress from storage",
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
      { key: "A", title: "パターンA｜価格ギャップ重視型", build: amazonBuildA,
        scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], reaction: [15, 18] },
        reasons: ["価格差のインパクトで保存を誘発するため", "コスパ訴求が当事者に刺さりやすいため"] },
      { key: "B", title: "パターンB｜時短・手軽さ重視型", build: amazonBuildB,
        scoreRange: { hook: [15, 18], concrete: [16, 19], contrarian: [13, 16], empathy: [17, 19], reaction: [15, 18] },
        reasons: ["時短の実感が刺さり共有されやすいため", "手軽さ訴求で忙しい層に刺さるため"] },
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
      { key: "A", title: "パターンA｜価格ギャップ重視型", build: rakutenBuildA,
        scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], reaction: [15, 18] },
        reasons: ["価格差のインパクトでクリップを誘発するため", "コスパ訴求が当事者に刺さりやすいため"] },
      { key: "B", title: "パターンB｜時短・手軽さ重視型", build: rakutenBuildB,
        scoreRange: { hook: [15, 18], concrete: [16, 19], contrarian: [13, 16], empathy: [17, 19], reaction: [15, 18] },
        reasons: ["時短の実感が刺さり保存されやすいため", "手軽さ訴求で忙しい層に刺さるため"] },
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
      { key: "A", title: "Pattern A｜Price-Gap Angle", build: amazonEnBuildA,
        scoreRange: { hook: [17, 19], concrete: [18, 20], contrarian: [15, 18], empathy: [15, 18], reaction: [15, 18] },
        reasons: ["The price gap creates enough shock value to drive saves", "Cost-per-value framing lands hard with the target audience"] },
      { key: "B", title: "Pattern B｜Time-Saving Angle", build: amazonEnBuildB,
        scoreRange: { hook: [15, 18], concrete: [16, 19], contrarian: [13, 16], empathy: [17, 19], reaction: [15, 18] },
        reasons: ["The time-saved payoff is highly shareable", "Convenience framing resonates with busy people"] },
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
