"use strict";
function Pole(figura) {
    let div = document.getElementById("polekola");
    let div2 = document.getElementById("polekwadratu");
    let div3 = document.getElementById("poleprostokata");
    let div4 = document.getElementById("poletrojkata");
    switch (figura) {
        case "kolo":
            if (div != null && div2 != null && div3 != null && div4 != null) {
                div.style.display = "block";
                div2.style.display = "none";
                div3.style.display = "none";
                div4.style.display = "none";
            }
            break;
        case "kwadrat":
            if (div != null && div2 != null && div3 != null && div4 != null) {
                div.style.display = "none";
                div2.style.display = "block";
                div3.style.display = "none";
                div4.style.display = "none";
            }
            break;
        case "prostokat":
            if (div != null && div2 != null && div3 != null && div4 != null) {
                div.style.display = "none";
                div2.style.display = "none";
                div3.style.display = "block";
                div4.style.display = "none";
            }
            break;
        case "trojkat":
            if (div != null && div2 != null && div3 != null && div4 != null) {
                div.style.display = "none";
                div2.style.display = "none";
                div3.style.display = "none";
                div4.style.display = "block";
            }
            break;
    }
}
function PoleKola() {
    let r = document.getElementById("KoR").value;
    let R = parseInt(r);
    alert("Pole wynosi: " + (3.14 * R * R));
}
function PoleKwadratu() {
    let a = document.getElementById("KwB").value;
    let A = parseInt(a);
    alert("Pole wynosi: " + (A * A));
}
function PoleProstokata() {
    let a = document.getElementById("PBA").value;
    let A = parseInt(a);
    let b = document.getElementById("PBB").value;
    let B = parseInt(b);
    alert("Pole wynosi: " + (A * B));
}
function PoleTrojkata() {
    let a = document.getElementById("TBA").value;
    let A = parseInt(a);
    let b = document.getElementById("TBB").value;
    let B = parseInt(b);
    let c = document.getElementById("TBC").value;
    let C = parseInt(c);
    let obw = A + B + C;
    let p = obw / 2;
    if ((A + B) <= C || (A + C) <= B || (B + C) <= A) {
        alert("Trójkąt nie istnieje!!!(Podano bok dłuższy niż suma pozostałych boków)");
    }
    else {
        alert("Pole wynosi: " + Math.sqrt(p * (p - A) * (p - B) * (p - C)));
    }
}
function InputCheck(id) {
    let value = document.getElementById(id).value;
    let valueInt = parseInt(value);
    if (valueInt < 0) {
        alert("Podano liczbę ujemną");
        let form = document.getElementById("jajo");
        form.reset();
    }
}
