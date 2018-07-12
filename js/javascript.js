//on() metoda nasłuchująca, ktora w js jest addEventListener, nasłuchujemy klika na tym obiekcie
//fnkcji animate nie ma w czystym js, jest tylko w $
//1000 to czas trwania
  //animujemy odleglosc od pcozatku aby strona sie przesunela
//metoda offset oblicza odleglosci odleglosci do naszego elementu od wspolzednych 0.0
var $arrow = $(".arrow a");
var $off = $("main").offset().top;
var $off2 = $("#tech").offset().top;
var $off3 =  $("#prog").offset().top;

$("#arrow1").on("click", function () {
    $("body, html").animate({
        scrollTop: $("main").offset().top
    }, 1200)
})

$("#arrow2").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#tech").offset().top
    }, 1200)
})

$("#arrow3").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#prog").offset().top
    }, 1200)
})
