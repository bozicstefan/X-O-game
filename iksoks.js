let cijijered = "1";
let pobeda = 0;
let brojpoteza = 0;
let brojpobedaX = 0;
let brojpobedaO = 0;

$(document).ready(function () {

    $(document).keypress(
        function (event) {
            if (event.which == '13') {
                resetuj();
            }
            if (event.which > 48 && event.which < 58) {
                tastatura(event.which - 48);
            }

        });

    /////////////uslov za upisivanje bez ponavljanja

    $(".polje").on("click", function () {

        if ($(this).attr("src") == "img/prazno.png") {
            if (cijijered === "o") {
                $(this).attr("src", "img/oks.png");
                $(this).prop('disabled', true);
                cijijered = "x";
                brojpoteza++;
            } else {
                $(this).attr("src", "img/iks.png");
                $(this).prop('disabled', true);
                cijijered = "o";
                brojpoteza++;
            };
        };

        proveraPobede();
        upisiRezultat();
        //    tastatura();
    });


});


//uslov za pobedu
function proveraPobede() {
    //provera za X
    if ((($("#polje1").attr("src") === "img/iks.png") && ($("#polje2").attr("src") === "img/iks.png") && ($("#polje3").attr("src") === "img/iks.png")) ||
        (($("#polje4").attr("src") === "img/iks.png") && ($("#polje5").attr("src") === "img/iks.png") && ($("#polje6").attr("src") === "img/iks.png")) ||
        ($("#polje7").attr("src") === "img/iks.png" && ($("#polje8").attr("src") === "img/iks.png" && ($("#polje9").attr("src") === "img/iks.png"))) ||
        ($("#polje1").attr("src") === "img/iks.png" && ($("#polje4").attr("src") === "img/iks.png" && ($("#polje7").attr("src") === "img/iks.png"))) ||
        ($("#polje2").attr("src") === "img/iks.png" && ($("#polje5").attr("src") === "img/iks.png" && ($("#polje8").attr("src") === "img/iks.png"))) ||
        ($("#polje3").attr("src") === "img/iks.png" && ($("#polje6").attr("src") === "img/iks.png" && ($("#polje9").attr("src") === "img/iks.png"))) ||
        ($("#polje1").attr("src") === "img/iks.png" && ($("#polje5").attr("src") === "img/iks.png" && ($("#polje9").attr("src") === "img/iks.png"))) ||
        ($("#polje3").attr("src") === "img/iks.png" && ($("#polje5").attr("src") === "img/iks.png" && ($("#polje7").attr("src") === "img/iks.png")))) {
        alert("X je pobedio!");
        pobeda = 1;
        brojpobedaX++;
        brojpoteza = 0;
        $(".polje").prop('disabled', true);
    }
    //provera za O 
    if ((($("#polje1").attr("src") === "img/oks.png") && ($("#polje2").attr("src") === "img/oks.png") && ($("#polje3").attr("src") === "img/oks.png")) ||
        (($("#polje4").attr("src") === "img/oks.png") && ($("#polje5").attr("src") === "img/oks.png") && ($("#polje6").attr("src") === "img/oks.png")) ||
        ($("#polje7").attr("src") === "img/oks.png" && ($("#polje8").attr("src") === "img/oks.png" && ($("#polje9").attr("src") === "img/oks.png"))) ||
        ($("#polje1").attr("src") === "img/oks.png" && ($("#polje4").attr("src") === "img/oks.png" && ($("#polje7").attr("src") === "img/oks.png"))) ||
        ($("#polje2").attr("src") === "img/oks.png" && ($("#polje5").attr("src") === "img/oks.png" && ($("#polje8").attr("src") === "img/oks.png"))) ||
        ($("#polje3").attr("src") === "img/oks.png" && ($("#polje6").attr("src") === "img/oks.png" && ($("#polje9").attr("src") === "img/oks.png"))) ||
        ($("#polje1").attr("src") === "img/oks.png" && ($("#polje5").attr("src") === "img/oks.png" && ($("#polje9").attr("src") === "img/oks.png"))) ||
        ($("#polje3").attr("src") === "img/oks.png" && ($("#polje5").attr("src") === "img/oks.png" && ($("#polje7").attr("src") === "img/oks.png")))) {
        alert("O je pobedio!");
        pobeda = 2;
        brojpobedaO++;
        brojpoteza = 0;
        $(".polje").prop('disabled', true);
    }
    if (brojpoteza === 9 && (pobeda !== 1 || pobeda !== 2)) {
        alert("Nerešeno!");
    }
}

function resetuj() {
    $(".polje").attr("src", "img/prazno.png");
    $(".polje").prop('disabled', false);
    brojpoteza = 0;
    cijijered = 'x';
    pobeda = 0;
};


function resetujRezultat() {
    $(".polje").attr("src", "img/prazno.png");
    $(".polje").prop('disabled', false);
    brojpoteza = 0;
    brojpobedaX = 0;
    brojpobedaO = 0;
    pobeda = 0;
    $(".rezultatX").text(brojpobedaX);
    $(".rezultatO").text(brojpobedaO);
};

function upisiRezultat() {
    if (pobeda === 1 || pobeda === 2) {
        $(".rezultatX").text(brojpobedaX);
        $(".rezultatO").text(brojpobedaO);
    }
}

function tastatura(brojpolja) {

    if ($("#polje" + brojpolja).attr("src") == "img/prazno.png") {
        if (cijijered === "o") {
            $("#polje" + brojpolja).attr("src", "img/oks.png");
            $("#polje" + brojpolja).prop('disabled', true);
            $("#polje" + brojpolja).unbind("keypress");
            cijijered = "x";
            brojpoteza++;
        } else {
            $("#polje" + brojpolja).attr("src", "img/iks.png");
            $("#polje" + brojpolja).prop('disabled', true);
            $("#polje" + brojpolja).unbind("keypress");
            cijijered = "o";
            brojpoteza++;
        };
    };
    proveraPobede();
    upisiRezultat();
}