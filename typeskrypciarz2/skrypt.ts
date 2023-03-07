function jeden(){
    let a = prompt("Podaj liczbę: ");
    if(a != null){
        let b = parseInt(a);
        if(b > 0 && b < 13){
            alert("Podana liczba jest poprawnym numerem miesiąca.");
        }else {alert("błąd")};
    }else {alert("błąd")};
}
function dwa(){
    let a = prompt("Podaj liczbę: ");
    if(a != null){
        let b = parseInt(a);
        if(b % 2 == 0){
            alert("Podana liczba jest parzysta.");
        }else if(b % 2 == 1){
            alert("Podana liczba nie jest parzysta.")
        }else {alert("błąd")};
    }else {alert("błąd")};
}
function trzy(){
    let ob = prompt("Podaj kraj zamieszkania: ");
    if(ob == "polska"){
        let lata = prompt("Podaj ile masz lat w dniu wyborów: ");
        if(lata != null){
            let prs = parseInt(lata);
            if(prs > 34){
                alert("Możesz ubiegać się o fotel prezydenta.");
            }else {alert("Nie możesz ubiegać się o fotel prezydenta(Jesteś za młody).")};
        }else {alert("błąd")};
    }else{alert("Nie możesz ubiegać się o fotel prezydenta(Nie posiadasz obywatelstwa polskiego).")}
}
function cztery(){
    let trasa = prompt("Podaj długość trasy: ");
    if(trasa != null){
        let trasaInt = parseInt(trasa);
        if(trasaInt > 0 && trasaInt <= 15){
            let cena = 3;
            alert("Zapłacisz: "+cena);
        }else if(trasaInt > 15 && trasaInt <= 40){
            let cena = 1.5 + (trasaInt * 0.2);
            alert("Zapłacisz: "+cena);
        }else if(trasaInt > 40){
            let cena = 1 + (trasaInt * 0.1);
            alert("Zapłacisz: "+cena);
        }else alert("Niepoprawna długość trasy");
    }
}