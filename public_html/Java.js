var kepek = ["Kep1.jpg", "Kep2.jpg", "Kep3.jpg", "Kep4.jpg", "Kep5.jpg", "Kep6.jpg", "Kep7.jpg", "Kep8.jpg", "Kep9.jpg", "Kep10.jpg", "Kep1.jpg", "Kep2.jpg", "Kep3.jpg", "Kep4.jpg", "Kep5.jpg", "Kep6.jpg", "Kep7.jpg", "Kep8.jpg", "Kep9.jpg", "Kep10.jpg"];
var kepekalt = ["lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny"];

var szamlalo = 0;
var kattintott = [];

$(function () {
    console.log("Hello Világ!");

    //képek bele rakása
    for (var i = 0; i < kepek.length; i++) {
//        $("article").append('<img src="kepek/'+ kepek[i] +'" alt=""/>');
        $("article").append('<img/>');//hozzá fűzük
//        $("article img").eq(i).attr("src", "kepek/"+ kepek[i]);
        $("article img").eq(i).attr("src", "kepek/hatter.jpg");
        $("article img").eq(i).attr("alt", "szornyhatter");
        $("article img").eq(i).attr("id",i);
        

    }
    $("article img").click(kattint);
});
function kattint() {
    var id = $(this).attr("id");
//    console.log(id);
    $(this).attr("src", "kepek/" + kepek[id]);
    $(this).attr("alt", kepekalt[id]);
    szamlalo++;
//    console.log(szamlalo);
    kattintott[szamlalo] = id;
    if (szamlalo === 2) {
        //visszaállítjuk a háttérképeket,csak akkor nem ha két különböző van
        //ha két azonos,akkor tüntessük el a képeket
        if (kepek[kattintott[1]] === kepek[kattintott[2]]) {
            $("article img").eq(kattintott[1]).attr("src", "");
            $("article img").eq(kattintott[2]).attr("src", "");
        } else {

            setTimeout(visszaFordit, 1000);
        }
    }
}

function visszaFordit() {
    $("article img").eq(kattintott[1]).attr("src", "kepek/hatter.jpg");
    $("article img").eq(kattintott[2]).attr("src", "kepek/hatter.jpg");
}

