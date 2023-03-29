var oceny;
(function (oceny) {
    oceny[oceny["niedostateczny"] = 1] = "niedostateczny";
    oceny[oceny["dopuszczajacy"] = 2] = "dopuszczajacy";
    oceny[oceny["dostateczny"] = 3] = "dostateczny";
    oceny[oceny["dobry"] = 4] = "dobry";
    oceny[oceny["bardzo_dobry"] = 5] = "bardzo_dobry";
    oceny[oceny["celujacy"] = 6] = "celujacy";
})(oceny || (oceny = {}));
var przedmioty = ["matematyka", "j.pol", "j,ang", "historia", "geografia", "fizyka", "chemia", "biologia", "wych.fiz", "wos"];
var stopnie = ["placeholder", "", 0, 0];
function start() {
    stopnie.splice(0, stopnie.length);
    if (document.getElementById("ilosc") != null) {
        var ilosc = document.getElementById("ilosc").value;
        if (parseInt(ilosc) > 0) {
            for (var i = 0; i < parseInt(ilosc); i++) {
                var los = losu(1, 7);
                stopnie.push(oceny[los], przedmioty[losu(0, 10)], losu(1, 6), los);
            }
            wypisz("");
        }
    }
}
function oneSubject() {
    stopnie.splice(0, stopnie.length);
    var przedmiot = przedmioty[losu(0, przedmioty.length)];
    var info = "<b>Wylosowany przedmiot " + przedmiot + ".<br>";
    var wagi = 0;
    var ocenySuma = 0;
    for (var i = 0; i < 4; i++) {
        var los = losu(1, 7);
        var losWag = losu(1, 6);
        stopnie.push(oceny[los], przedmiot, losWag, los);
        wagi += losWag;
        ocenySuma += los * losWag;
    }
    info += "Średnia wazona: <i>" + dwaPoPrzecinku(ocenySuma / (wagi)) + "<br></i></b>";
    wypisz(info);
}
function allSubjects() {
    stopnie.splice(0, stopnie.length);
    var info = "";
    var magnum_ocenus = 0;
    var ilosc_przedmiotow = 0;
    przedmioty.forEach(function (x) {
        var wagi = 0;
        var ocenySuma = 0;
        for (var i = 0; i < losu(3, 11); i++) {
            var los = losu(1, 7);
            var losWag = losu(1, 6);
            stopnie.push(oceny[los], x, losWag, los);
            wagi += losWag;
            ocenySuma += los * losWag;
        }
        var warzone = dwaPoPrzecinku(ocenySuma / (wagi));
        info += "Średnia wazona dla przedmiotu: <b>" + x + ": <i>" + warzone + "<br></i></b>";
        magnum_ocenus += warzone;
        ilosc_przedmiotow++;
    });
    info = "Srednia wszystkich przedmiotów: " + dwaPoPrzecinku(magnum_ocenus / ilosc_przedmiotow) + "<br>" + info;
    wypisz(info);
}
function losu(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function wypisz(preText) {
    var diver = document.getElementById("div");
    if (diver != null) {
        var info_1 = preText;
        var x_1 = 0;
        stopnie.forEach(function (i) {
            info_1 += i + " ";
            if (x_1 == 3) {
                info_1 += "<br>";
                x_1 = 0;
            }
            else {
                x_1++;
            }
        });
        diver.innerHTML = info_1;
    }
}
function dwaPoPrzecinku(x) {
    var power = Math.pow(10, 2);
    return Math.ceil(x * power) / power;
}
