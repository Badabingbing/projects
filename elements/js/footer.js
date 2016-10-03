$(document).ready(function () {
var numero_ID = 1;
    var nom_ID = "#presentation";
    var numero_nom_ID = nom_ID + numero_ID;

    $(".suivant").click(function () {
        $(numero_nom_ID).css("display", "none");
        numero_ID++;
        numero_nom_ID = nom_ID + numero_ID;
        $(numero_nom_ID).css("display", "block");
    });

    $(".precedent").click(function () {
        $(numero_nom_ID).css("display", "none");
        numero_ID--;
        numero_nom_ID = nom_ID + numero_ID;
        $(numero_nom_ID).css("display", "block");
    });
});
