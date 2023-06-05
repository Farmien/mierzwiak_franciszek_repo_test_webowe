var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var owoce = ["jabłko", "arbuz", "banan", "gruszka"];
var warzywa = ["marchew", "burak", "kalafior", "pietruszka"];
function dlugosc() {
    alert(owoce.length);
}
function sortieren() {
    owoce.sort();
    var info = "";
    /*tablica.forEach(function (i){
        info += i+", ";
    
    });
    info = info.substring(0, info.length-2);*/
    wyswietl();
}
function dodajAnanas() {
    owoce.push("ananas");
    wyswietl();
}
function usunOstatni() {
    owoce.pop();
    wyswietl();
}
function usunPierwszy() {
    owoce.shift();
    wyswietl();
}
function wstawAnanas() {
    owoce.unshift("ananas");
    wyswietl();
}
function odwrocKolejnosc() {
    var tablica2 = [];
    owoce.forEach(function (i) {
        tablica2.unshift(i);
    });
    owoce = tablica2;
    wyswietl();
}
function wyswietlFor() {
    var info = "";
    for (var i = 0; i < owoce.length; i++) {
        info += owoce[i] + ", ";
    }
    info = info.substring(0, info.length - 2);
    alert(info);
}
function polaczConcat() {
    owoce.concat(warzywa);
    wyswietl();
}
function operatorDodawania() {
    alert("Operator '+' cannot be applied to types 'string[]' and 'string[]'");
}
function polaczRozwinieciem() {
    owoce = __spreadArray(__spreadArray([], owoce, true), warzywa, true);
}
function wyswietl() {
    alert(owoce.join(", "));
}
