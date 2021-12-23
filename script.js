$(document).ready(function () {
    //ここからJSを記述Start!!!

    $(function () {
        $('.janken-show').click(function () {
            $('#janken-modal').fadeIn();
        });

        $('.close-modal').click(function () {
            $('#janken-modal').fadeOut();
        });
    });



    // じゃんけんscrpt
    $("#gu_btn").on("click", function () {
        var humanGu = 1;
        var comp = Math.floor(Math.random() * 3 + 1);

        if (comp == 1) {
            $("#pc").text("グー")
            $("#result").text("惜しい！あいこで10％オフ！")
        } else if (comp == 2) {
            $("#pc").text("チョキ")
            $("#result").text("勝ちです！30％オフ！")
        } else if (comp == 3) {
            $("#pc").text("パー")
            $("#result").text("残念！割引はナシです！")
        }
    });

    $("#cho_btn").on("click", function () {
        var humaCho = 2;
        var comp = Math.floor(Math.random() * 3 + 1);

        if (comp == 1) {
            $("#pc").text("グー")
            $("#result").text("残念！割引はナシです！")
        } else if (comp == 2) {
            $("#pc").text("チョキ")
            $("#result").text("惜しい！あいこで10％オフ！")
        } else if (comp == 3) {
            $("#pc").text("パー")
            $("#result").text("勝ちです！30％オフ！")
        }
    });
    $("#par_btn").on("click", function () {
        var humaPar = 3;
        var comp = Math.floor(Math.random() * 3 + 1);
        if (comp == 1) {
            $("#pc").text("グー")
            $("#result").text("勝ちです！30％オフ！")
        } else if (comp == 2) {
            $("#pc").text("チョキ")
            $("#result").text("残念！割引はナシです！")
        } else if (comp == 3) {
            $("#pc").text("パー")
            $("#result").text("惜しい！あいこで10％オフ！")
        }
    });

});