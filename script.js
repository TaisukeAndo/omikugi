/*ローディング*/
window.onload = function() {
    const loader = document.getElementById('loading-wrapper');
    loader.classList.add('completed');
}

function form(){
    document.getElementById("form").classList.remove("form_on");
    document.getElementById("form").classList.add("form_off");
}

/*おみくじ*/
function kuji(){

    //結果表示
    document.getElementById("result_show").classList.add("result");

    //Buttonの無効化
    document.getElementById("on").classList.remove("btn--on");
    document.getElementById("on").classList.add("off");

    /*おみくじ要素の取得*/
    var omikuji_items = ["大大大吉","だいちゅき","大大吉","大吉","中吉","中吉","中吉","中吉","小吉","小吉","小吉","小吉","小吉"];
    var expein=["★★★","健康運詳細","★★★","勉強運詳細","★★★","恋愛運詳細","★★★","たぁくん詳細","ラッキーアイテム詳細"];

    /*numに乱数を代入する*/
    var num = Math.floor(Math.random() * omikuji_items.length);

    var ken = [
        ["★","このままの生活を続けると病気にかかりやすい体質になってしまいます。\nバランスの良い食事と生活習慣に気を遣いましょう。"],
        ["★","ストレスが溜まり続けると生活に支障が出てしまします。\nほどよく息抜きしましょう。"],
        ["★★","食べ過ぎで少し太ってしまうかもしれません。\n買い食いを抑えるとモデル体型になれるでしょう。"],
        ["★★","寒暖差により風邪を引いてしまうかもしれません。\n気温に合わせた服の着こなしを意識することで快適に過ごしましょう。"],
        ["★★★","特に怪我をすることも病気にかかる事も無いでしょう。\nこれからも体調管理を怠らないようにしましょう。"],
        ["★★★","理想的な体型になる事が出来るでしょう。\nこの調子で食事にこだわりを持ちましょう。"],
        ["★★★★","健康的な生活を送ることが出来るでしょう。\n病を既に患っている人は早期完治するでしょう。"],
        ["★★★★","沢山食べても太ることなく、理想的な体型を維持する事が出来るでしょう。\nただし栄養バランスは考慮しましょう。"],
        ["★★★★★","あなただけでなくあなたと関わりのある家族や友達など\n全員が健康的な生活を送ることが出来るでしょう。"],
        ["★★★★★","今年1年とても健康的な生活を送ることが出来るでしょう。\nそしてあなたの生活や体型を誰もが羨ましがるでしょう。"]
    ]

    var ben = [
        ["★","授業中に眠くなってしまうかも...\n先生に沢山質問をすると授業に集中出来るでしょう。"],
        ["★","成績が悪くて先生や両親に怒られちゃうかも...\n毎日復習を欠かさずすると成績が一気に伸びるでしょう。"],
        ["★★","勉強をする気がなかなか起きないかも...\n目標を設定することで勉強のやる気が起こるでしょう。"],
        ["★★","成績が思う様に伸びないかも...\n友達と一緒に勉強すると格段に成績が上がるでしょう。"],
        ["★★★","欠かさず授業やテストの復習に取り組めば成績が格段に上がるでしょう。\n分からないところは先生に質問しよう。"],
        ["★★★","集中して授業に取り組めば成績がグンと伸びるでしょう。\n授業中に寝ないことが成績UPに大きく繋がるでしょう。"],
        ["★★★★","先生に認めらる成績をとる事が出来るでしょう。\n数学を極めるとさらに成績UP!!"],
        ["★★★★","クラスの中でも上位の成績を維持することが出来るでしょう。\n友達に勉強を教えると成績UP!!"],
        ["★★★★★","校外模試の志望校判定でA判定をとる事が出来るでしょう。\nこの調子で勉強を続けましょう。"],
        ["★★★★★","あなたの努力次第で学年TOPの成績になるでしょう。\nとくに英語を極めると成績が上がるかも!!"]
    ]

    var ren = [
        ["★","好きな人が出来るでしょう。\n焦らずゆっくりアピールしていこう!"],
        ["★","好きな人に恋人がいることが発覚...\nすぐに立ち直り新しく好きな人が出来るでしょう。"],
        ["★★","好きな人と何度も目が合うでしょう。\n積極的に話しかけると両思いになれるかも..."],
        ["★★","好きな人に話かけてもらえるでしょう。\n目を見て離すと相手も恋に落ちるでしょう。"],
        ["★★★","好きな人と話す機会が触れるでしょう。\nお互いの恋バナでドキドキしちゃおう!!"],
        ["★★★","席替えで好きな人と隣同士になれるでしょう。\n自分から積極的に声をかけないと振り向いてくれないゾ!"],
        ["★★★★","人生最大のモテ期が来るでしょう。\n浮気は絶対にしちゃダメよ。"],
        ["★★★★","好きな人と沢山話す事が出来るでしょう。\n青春を謳歌することができるでしょう。"],
        ["★★★★★","好きな人から告白されるでしょう。\n沢山話しかけて相手をその気にさせよう!!"],
        ["★★★★★","大好きな人と付き合うことが出来るでしょう\n幸せな1年になるでしょう。"]
    ]

    var tai = [
        ["★","少し冷たくされちゃうかも...\n全力アピールしたらたぁくんが振り向くかも!!"],
        ["★","なかなか話せる機会が無いかも...\n時々話しかけるとたぁくんは大喜びするでしょう。"],
        ["★★","今年は何度も外出中にたぁくんに遭遇するでしょう。\n遭遇した翌日たぁくんとの会話の種になるでしょう。"],
        ["★★","たぁくんとすれ違うと手を振ってくれるでしょう。\n振り替えしてくれるとたぁくんは大変喜びます。"],
        ["★★★","一緒にデートする事になるカモ...\nたぁくんは甘い物を食べたいです。"],
        ["★★★","たぁくんと沢山話す年になるでしょう。\nたぁくんがきっと笑わせてくれるでしょう。"],
        ["★★★★","今年は毎日たぁくんと話すでしょう。\n毎日話している内にたぁくんが恋に落ちるかも..."],
        ["★★★★","たぁくんから告白されるでしょう。\n付き合えばきっと幸せになれるでしょう。"],
        ["★★★★★","たぁくんから猛烈なアピールを受けるでしょう。\n何か奢ってもらえるかも..."],
        ["★★★★★","たぁくんと付き合う事になりそう...\n沢山デートする事になるでしょう。"]
    ]

    var rack = [
        "抱き枕",
        "赤チャート",
        "黒いスマホケース",
        "ぬいぐるみ",
        "チューインガム",
        "ブラックコーヒー",
        "白いパーカー",
        "座椅子",
        "黒いニット帽",
        "みたらし団子"
    ]

    var num_ken;
    var num_ben;
    var num_ren;
    var num_tai;
    var num_rack;

    /*おみくじ結果詳細設定*/
    if(num==0 || num==1){
        num_ken = 6 + Math.floor(Math.random() * 3);
        num_ben = 6 + Math.floor(Math.random() * 3);
        num_ren = 6 + Math.floor(Math.random() * 3);
        num_tai = 6 + Math.floor(Math.random() * 3);
    }
    else if(num==2 || num==3){
        num_ken = 4 + Math.floor(Math.random() * 5);
        num_ben = 4 + Math.floor(Math.random() * 5);
        num_ren = 4 + Math.floor(Math.random() * 5);
        num_tai = 4 + Math.floor(Math.random() * 5);
    }
    else if(num>=4 && num<=7){
        num_ken = 2 + Math.floor(Math.random() * 5);
        num_ben = 2 + Math.floor(Math.random() * 5);
        num_ren = 2 + Math.floor(Math.random() * 5);
        num_tai = 2 + Math.floor(Math.random() * 5);
    }
    else{
        num_ken = Math.floor(Math.random() * 5);
        num_ben = Math.floor(Math.random() * 5);
        num_ren = Math.floor(Math.random() * 5);
        num_tai = Math.floor(Math.random() * 5);
    }

    num_rack = Math.floor(Math.random() * rack.length);

    expein[0]=ken[num_ken][0];
    expein[1]=ken[num_ken][1];
    expein[2]=ben[num_ben][0];
    expein[3]=ben[num_ben][1];
    expein[4]=ren[num_ren][0];
    expein[5]=ren[num_ren][1];
    expein[6]=tai[num_tai][0];
    expein[7]=tai[num_tai][1];
    expein[8]=rack[num_rack];

    /*HTMLのID"dsp"をランダムに取得した要素に置き換える*/
    result_1.innerHTML = (omikuji_items[num]);
    result_2.innerHTML = ("健康運　");
    result_3.innerHTML = (expein[0]);
    result_4.innerHTML = (expein[1]);
    result_5.innerHTML = ("勉強運　");
    result_6.innerHTML = (expein[2]);
    result_7.innerHTML = (expein[3]);
    result_8.innerHTML = ("恋愛運　");
    result_9.innerHTML = (expein[4]);
    result_10.innerHTML = (expein[5]);
    result_11.innerHTML = ("たぁくん運　");
    result_12.innerHTML = (expein[6]);
    result_13.innerHTML = (expein[7]);
    result_14.innerHTML = ("ラッキーアイテム");
    result_15.innerHTML = (expein[8]);
    
}