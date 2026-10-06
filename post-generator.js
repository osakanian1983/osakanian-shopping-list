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
  { name: "草津温泉の老舗旅館", worry: "日本三大名湯と言われても実感が薄い悩み", product: "草津温泉の老舗旅館", price: "1泊2万円", dailyEffort: "湯畑近くの旅館に泊まるだけ", period: "1泊",
    resultGood: "強い酸性泉の実力をしっかり体感できる", altHigh: "3000円の日帰り温泉巡り", altBadState: "巡っても結局移動で時間切れになる",
    effortHigh: "日帰り温泉を何軒もはしごして", tag: "草津温泉",
    itemName: "草津温泉 十二屋旅館", itemUrl: "https://travel.rakuten.co.jp/HOTEL/41000/41000.html",
    enCaption: "A traditional ryokan near the famous Yubatake in Kusatsu Onsen, Gunma." },
  { name: "下呂温泉の老舗旅館", worry: "美肌の湯と聞いても半信半疑な悩み", product: "下呂温泉の老舗旅館", price: "1泊1.9万円", dailyEffort: "宿の湯にゆっくり浸かるだけ", period: "1泊",
    resultGood: "とろりとした湯で肌がすべすべになる", altHigh: "5000円の美肌エステ", altBadState: "通っても数日で元の肌触りに戻る",
    effortHigh: "毎回予約を取ってエステに通って", tag: "下呂温泉",
    itemName: "下呂温泉 旅館 瓢きん", itemUrl: "https://travel.rakuten.co.jp/HOTEL/8800/8800.html",
    enCaption: "A classic ryokan at Gero Onsen, one of Japan's three famous hot springs." },
  { name: "有馬温泉の名湯旅館", worry: "金の湯か銀の湯か迷う悩み", product: "有馬温泉の名湯旅館", price: "1泊2.2万円", dailyEffort: "宿で両方の湯に入り比べるだけ", period: "1泊",
    resultGood: "金泉と銀泉の違いをじっくり満喫できる", altHigh: "1000円の日帰り入浴施設", altBadState: "入っても片方しか入れない",
    effortHigh: "日帰り施設を何軒もはしごして", tag: "有馬温泉",
    itemName: "有馬温泉 月光園 游月山荘", itemUrl: "https://travel.rakuten.co.jp/HOTEL/18251/18251.html",
    enCaption: "A ryokan at Arima Onsen near Kobe, famous for its gold and silver hot springs." },
  { name: "奄美大島のオーシャンリゾート", worry: "海を近くに感じられない悩み", product: "奄美大島のリゾート", price: "1泊2万円", dailyEffort: "最上階の露天風呂から海を眺めるだけ", period: "1泊",
    resultGood: "奄美の海をすぐそばに感じて癒される", altHigh: "3万円のシュノーケリング", altBadState: "参加しても天候次第で入れない",
    effortHigh: "予約を取って港まで通って", tag: "奄美大島旅行",
    itemName: "スパリゾート奄美山羊島ホテル", itemUrl: "https://travel.rakuten.co.jp/HOTEL/142760/142760.html",
    enCaption: "An ocean resort hotel on Amami Oshima Island with rooftop open-air baths." },
  { name: "函館ベイエリアの一棟貸しホテル", worry: "観光地ホテルで人目が気になる悩み", product: "函館ベイの一棟貸しホテル", price: "1泊1.8万円", dailyEffort: "一棟貸しの部屋でくつろぐだけ", period: "1泊",
    resultGood: "誰にも気兼ねなく満喫できる", altHigh: "3万円の高級ホテルのスイート", altBadState: "泊まっても結局人目が気になる",
    effortHigh: "人目を避けて部屋に閉じこもって", tag: "函館旅行",
    itemName: "函館ベイハウス", itemUrl: "https://travel.rakuten.co.jp/HOTEL/190386/190386.html",
    enCaption: "A whole-house rental in Hakodate's scenic bay area, near the historic warehouses." },
  { name: "高野山の宿坊", worry: "観光地のホテルでは味わえない特別感がない悩み", product: "高野山の宿坊", price: "1泊1.5万円", dailyEffort: "宿坊で精進料理を待つだけ", period: "1泊",
    resultGood: "世界遺産の静寂と精進料理を満喫できる", altHigh: "1万円の日帰りバスツアー", altBadState: "参加しても人混みで静寂がない",
    effortHigh: "何軒も観光地を回って写真を撮って", tag: "高野山旅行",
    itemName: "高野山 宿坊 大明王院", itemUrl: "https://travel.rakuten.co.jp/HOTEL/184135/184135.html",
    enCaption: "A temple lodging on the UNESCO World Heritage site of Mount Koya, Wakayama." },
  { name: "鬼怒川温泉の大型旅館", worry: "空の庭露天風呂に憧れる悩み", product: "鬼怒川温泉の大型旅館", price: "1泊2.3万円", dailyEffort: "最上階の露天風呂に浸かるだけ", period: "1泊",
    resultGood: "鬼怒川の渓谷を眺めながら湯を満喫できる", altHigh: "3万円の渓谷ツアー", altBadState: "参加しても移動ばかりで見られない",
    effortHigh: "渓谷まで何度も通って時間を待って", tag: "鬼怒川温泉",
    itemName: "鬼怒川温泉 あさや", itemUrl: "https://travel.rakuten.co.jp/HOTEL/8643/8643.html",
    enCaption: "A large ryokan at Kinugawa Onsen with a sky-garden open-air bath over the gorge." },
  { name: "四万十川のカヌー体験宿", worry: "川遊びの準備が面倒で踏み出せない", product: "四万十川のカヌー体験宿", price: "1泊1.3万円", dailyEffort: "宿のカヌーに乗って川を下るだけ", period: "1泊",
    resultGood: "手ぶらで清流のカヌー体験を満喫できる", altHigh: "3万円のカヌー用品一式", altBadState: "買っても使う機会が少なく困る",
    effortHigh: "毎回道具を揃えて運んで", tag: "四万十旅行",
    itemName: "四万十ひろばバンガロー「ゆうゆう」", itemUrl: "https://travel.rakuten.co.jp/HOTEL/128509/128509.html",
    enCaption: "A riverside lodge on the Shimanto River, Japan's last clear stream, with canoe trips." },
  { name: "淡路島のオーシャンビュー一棟貸し", worry: "部屋が狭く感じる悩み", product: "淡路島の一棟貸し", price: "1泊2.5万円", dailyEffort: "一棟貸しのテラスで海を眺めるだけ", period: "1泊",
    resultGood: "播磨灘を独り占めできる", altHigh: "3万円の都市部ホテル", altBadState: "泊まっても窓の景色が狭く感じる",
    effortHigh: "良い景色を求めて何軒も見比べて", tag: "淡路島旅行",
    itemName: "AWAJI OCEAN BASE WEST COAST", itemUrl: "https://travel.rakuten.co.jp/HOTEL/184267/184267.html",
    enCaption: "A whole-house rental on Awaji Island's west coast with sweeping ocean views." },
  { name: "摩周湖畔の温泉ペンション", worry: "神秘的な湖もすぐ日常に戻る悩み", product: "摩周湖畔の温泉ペンション", price: "1泊1万円", dailyEffort: "駅前のペンションで温泉に浸かるだけ", period: "1泊",
    resultGood: "摩周湖の静けさを感じて癒される", altHigh: "2万円の展望台ツアー", altBadState: "行っても霧で湖が見えず終わる",
    effortHigh: "展望台まで何度も通って待って", tag: "摩周湖旅行",
    itemName: "ペンション ニュー マリモ", itemUrl: "https://travel.rakuten.co.jp/HOTEL/28635/28635.html",
    enCaption: "A hot spring pension by Lake Mashu, one of Hokkaido's clearest lakes." },
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
