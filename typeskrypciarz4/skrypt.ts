let owoce = ["jabłko","arbuz","banan","gruszka"];
let warzywa = ["marchew","burak","kalafior","pietruszka"]

function dlugosc(){
    alert(owoce.length);
}

function sortieren(){
    owoce.sort();
    let info = "";
    /*tablica.forEach(function (i){
        info += i+", ";
    
    });
    info = info.substring(0, info.length-2);*/
    wyswietl();
}

function dodajAnanas(){
    owoce.push("ananas");
    wyswietl();
}

function usunOstatni(){
    owoce.pop();
    wyswietl();
}

function usunPierwszy(){
    owoce.shift();
    wyswietl();
}
function wstawAnanas(){
    owoce.unshift("ananas");
    wyswietl();

}
function odwrocKolejnosc(){
    let tablica2: string[] = [];
    owoce.forEach(function (i){
        tablica2.unshift(i);
    })
    owoce = tablica2;
    wyswietl();
}


function wyswietlFor(){
    let info = "";
    for(let i=0;i < owoce.length; i++){
        info += owoce[i] + ", ";
    }
    info = info.substring(0, info.length-2);
    alert(info);
}

function polaczConcat(){
    owoce.concat(warzywa);
    wyswietl();
}

function operatorDodawania(){
    alert("Operator '+' cannot be applied to types 'string[]' and 'string[]'");
}

function polaczRozwinieciem(){
    owoce = [...owoce, ...warzywa];
}

function wyswietl(){
    alert(owoce.join(", "));
}