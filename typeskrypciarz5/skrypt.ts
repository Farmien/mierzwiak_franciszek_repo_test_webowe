type tupel = [string, string, number, number];
enum oceny{
    niedostateczny = 1,
    dopuszczajacy = 2,
    dostateczny = 3,
    dobry = 4,
    bardzo_dobry = 5,
    celujacy = 6

}
let przedmioty: string[] = ["matematyka","j.pol","j,ang","historia","geografia","fizyka","chemia","biologia","wych.fiz","wos"]
let stopnie: tupel = ["placeholder","",0,0];
function start(){
    stopnie.splice(0, stopnie.length);
    if(<HTMLInputElement>document.getElementById("ilosc") != null){
        let ilosc = (<HTMLInputElement>document.getElementById("ilosc")).value;
        if(parseInt(ilosc) > 0){
            for(let i = 0; i < parseInt(ilosc); i++){
                let los = losu(1, 7);
                stopnie.push(oceny[los],przedmioty[losu(0,10)],losu(1,6),los);
                
            }
            wypisz("");
        }
    }
    
}

function oneSubject(){
    stopnie.splice(0, stopnie.length);
    let przedmiot = przedmioty[losu(0,10)];
    let info = "<b>Wylosowany przedmiot "+przedmiot+".<br>";
    let wagi = 0;
    let ocenySuma = 0;
    for(let i = 0; i < 4; i++){
        let los = losu(1, 7);
        let losWag = losu(1,6);
        stopnie.push(oceny[los],przedmiot,losWag,los);
        wagi += losWag;
        ocenySuma += los*losWag;
    }
    info +="Średnia wazona: <i>"+dwaPoPrzecinku(ocenySuma/(wagi))+"<br></i></b>"
    wypisz(info);
}
function allSubjects(){
    stopnie.splice(0, stopnie.length);
    let info = "";
    let magnum_ocenus = 0;
    let ilosc_przedmiotow = 0;
    przedmioty.forEach(function (x){
        
        let wagi = 0;
        let ocenySuma = 0;
        for(let i = 0; i < losu(3,11); i++){
            let los = losu(1, 7);
            let losWag = losu(1,6);
            stopnie.push(oceny[los],x,losWag,los);
            wagi += losWag;
            ocenySuma += los*losWag;
        }
        let warzone = dwaPoPrzecinku(ocenySuma/(wagi));
        info +="Średnia wazona dla przedmiotu: <b>"+x+": <i>"+warzone+"<br></i></b>"
        magnum_ocenus += warzone;
        ilosc_przedmiotow++;
    })
    info = "Srednia wszystkich przedmiotów: "+dwaPoPrzecinku(magnum_ocenus/ilosc_przedmiotow)+"<br>"+info;
    wypisz(info);
}

function losu(min: number, max: number){
    return Math.floor(Math.random() * (max - min) + min);
}
function wypisz(preText:string){
    const diver = document.getElementById("div");
    if(diver != null){
        let info = preText;
        let x = 0;
        stopnie.forEach(function(i){
            info += i+" ";
            if(x == 3){
                info +="<br>";
                x = 0
            }else{x++}
        });
        diver.innerHTML = info;
    }
}
function dwaPoPrzecinku(x:number){
    let power = Math.pow(10, 2);
    return Math.ceil(x * power) / power;
}