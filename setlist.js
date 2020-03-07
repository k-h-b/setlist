const echo = function () {
    const json = [
        {
            "author": "呑み会12_いわおけ_set1",
            "date": "20200307",
            "title": "ENDYMION (long edit)"
        },
        {
            "author": "呑み会12_いわおけ_set2",
            "date": "20200307",
            "title": "Utopia feat. shully"
        },
        {
            "author": "呑み会12_いわおけ_set2",
            "date": "20200307",
            "title": "Stratoliner"
        },
        {
            "author": "呑み会12_いわおけ_set2",
            "date": "20200307",
            "title": "jacaranda"
        },
        {
            "author": "呑み会12_いわおけ_set2",
            "date": "20200307",
            "title": "CHECKER FLAG"
        },
        {
            "author": "呑み会12_いわおけ_set2",
            "date": "20200307",
            "title": "Demon's Rave"
        },
        {
            "author": "呑み会12_いわおけ_set2",
            "date": "20200307",
            "title": "Murasaki"
        },
        {
            "author": "呑み会12_いわおけ_set2",
            "date": "20200307",
            "title": "Mazy Metroplex"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "エフるっ!"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "ハヤテのごとく"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "七転八起☆至上主義！"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "Get my way!"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "本日、満開ワタシ色！"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "人として軸がぶれている"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "空想ルンバ"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "林檎もぎれビーム!"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "非実在系女子達はどうすりゃいいですか?"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "THE APPLE IS CAST!"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": "May Day+"
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": ""
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": ""
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": ""
        },
        {
            "author": "呑み会12_かなたん_set1",
            "date": "20200307",
            "title": ""
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "よろしく九九組"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "星のダイアローグ"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "ハッピーインターリュード"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "ki-ringtone"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "恋の魔球"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "再生産"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "-Star Divine- フィナーレ"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "約束タワー"
        },
        {
            "author": "呑み会12_ちよだ_set1",
            "date": "20200307",
            "title": "99 ILLUSION!"
        },
        {
            "author": "呑み会12_ちよだ_set2",
            "date": "20200307",
            "title": "FUTURE LINE"
        },
        {
            "author": "呑み会12_ちよだ_set2",
            "date": "20200307",
            "title": "for..."
        },
        {
            "author": "呑み会12_ちよだ_set2",
            "date": "20200307",
            "title": "コンディショングリーン～緊急発進～"
        },
        {
            "author": "呑み会12_ちよだ_set2",
            "date": "20200307",
            "title": "INVOKE -インヴォーク-"
        },
        {
            "author": "呑み会12_ちよだ_set2",
            "date": "20200307",
            "title": "PRIDE"
        },
        {
            "author": "呑み会12_ちよだ_set2",
            "date": "20200307",
            "title": "ミルキィアタック"
        },
        {
            "author": "呑み会12_ちよだ_set2",
            "date": "20200307",
            "title": "星降る夢で逢いましょう"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "民主暴力主義葛西共和国連合 国歌斉唱"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "While Shining feat. yukacco (TANO*C TOUR 2017 ANTHEM)"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Cybernecia Catharsis (Extend Mix)"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "TENKAI Rising (Original Mix)"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Mantra (Original Mix)"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Fallen"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "BUCK WILD"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Shiny Memory feat. Yukacco (TANO*C TOUR 2018 ANTHEM)"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "KASAI HARDCORE SQUAD"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Fight for the CORE"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "少女IN ～Virgin In～ (m1dy remix)"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Trinity Homerun"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Tano*C Megamix 3"
        },
        {
            "author": "呑み会12_ブレジョ_set1",
            "date": "20200307",
            "title": "Shining Harmony (TANO*C TOUR 2019 ANTHEM)"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "Sentimental heart boy"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "Internet bitch (P*Light Remix)"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "Winning Day"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "平面鏡"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "アンデッド・ダンスロック (M@STER VERSION)"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "Fascinate (M@STER VERSION)"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "昏き星、遠い月"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "アルカード"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "雨とカプチーノ"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "エリシアンズ・オールドマンズ"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "Svanrand"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "Befall"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "Dual-Ego"
        },
        {
            "author": "呑み会12_ブレジョ_set2",
            "date": "20200307",
            "title": "献花の番人"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "ロマンス＆バカンス「おちんちんYEAH」【MUSIC VIDEO】"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "【Full ver.】『ウルトラ☀オレンジ☀ハイテンション』1000ちゃん(CV:新田恵海) ミュージックビデオ"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "パチスロ1000ちゃん「夏☆DASH!! OUR DANCE!!ver」"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "抽選後の風景"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "HELLFIRE"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "Desire's Delight"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "月下雷鳴"
        },
        {
            "date": "20200307"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "運命共同体"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "次回予告"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "夢追人"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "WE ARE SEVEN'S TV"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "東西回胴連II"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "A PROJECT feat. 妖狐"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "花火百景"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "日常の全てがパチスロに思えてしまう病気"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "7's heaven-7のチカラRemix- feat. 東西回胴連"
        },
        {
            "author": "呑み会12_ユッキー_set1",
            "date": "20200307",
            "title": "実践後の風景"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Be A Shooter！ (NOMAL BIG BONUS)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "2 Color Romance (BIG BONUS)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Take Me Higher (BIG BONUS) [feat. DT]"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "I Got A Feeling！ (HYPER BIG BONUS ①)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "YOUR VOICE (HYPER BIG BONUS ②)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "DISC UP (Crazy Beat Remix HYPER BIG BONUS ③)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "DISC UP (Bonus Remix 特殊条件同色BIG BONUS)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Let's Rock It！ (REG BONUS)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Be Ready！ (STANDBY MODE)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "A.O.D (DANCE TIME アフロレディ)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "C'mon DJ！ (DANCE TIME リーゼントマン)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Shooting Shower (DANCE TIME シンディ)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Dance Eternity (DANCE TIME 反転)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Boogie Steps (DJ ZONE アフロマン)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Clap Your Hands！ (DJ ZONE キャンベル)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Get Swag (DJ ZONE B.B.)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "DISC UP AR (DANCE TIME ？？？？？)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Fire Drift (Bonus Mix １G連 同色BIG 赤7)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Club Rodeo (Bonus Mix １G連 同色BIG 青7)"
        },
        {
            "author": "呑み会12_ユッキー_set2",
            "date": "20200307",
            "title": "Hard Boiled (Bonus Mix １G連 同色BIG 黒BAR)"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Inferno"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Reincarnation"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "迷路"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Daredevil - Persona 5 Scramble_ The Phantom Strikers OST"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Blooming Villain REMIX - Persona 5 Scramble_ The Phantom Strikers OST"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Last Surprise REMIX (FULL) - Persona 5 Scramble_ The Phantom Strikes OST"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "LOUDER"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "月光陰 -Moonlight Shadow-"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "極楽浄土"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Lunar Clock Luna Dial"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Shanghai Alice of Meiji 17"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "イナイイナイ依存症 (ツミキ Remix)"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "失敗作少女 (稲葉曇 Remix)"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "ベノム (MARETU Remix)"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Buffalo"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "Il Vento D'oro"
        },
        {
            "author": "呑み会12_世界_set1",
            "date": "20200307",
            "title": "亡霊たちの舞踏会"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Utopiosphere -Platonism-"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "A Turtle's Heart"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Extension　of　You"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Unidentified Flavourful Object"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Sloth"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Camelia"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Rightfully"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "With　a　Billion　Worldful　of<3"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Victim"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "TOKYO　NEON"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "RTRT"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "world.execute(me);"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Ga1ahad and Scientific Witchery"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Summoning　101"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Excαlibur"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Nine Point Eight"
        },
        {
            "author": "呑み会12_影牢_set1",
            "date": "20200307",
            "title": "Static"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "バンバード"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "玻璃（はり）"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "オリエンタルピアノアタック"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "バトルオブマリオン"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "LAST HOPE"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "Natureends"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "ババ～ン！とバトルだバンバトル！！"
        },
        {
            "author": "呑み会12_音信_set1",
            "date": "20200307",
            "title": "貝がら峠 ～Long Version～"
        }
    ]
    let tmp = {}
    json.forEach(function (song) {
        tmp[song.author].push(song.title)
    })

    for (let [key, value] of Object.entries(tmp)) {
        console.log(`${key}: ${value}`);
    }
    
}