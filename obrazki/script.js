$(document).ready(function(){
    $('#srodek').css("color","red");
    var shownImage = 0; //cosiek do sprawdzany ktory obrazek wyswietlony 
    var mains = ["#mainimage1", "#mainimage2","#mainimage3","#mainimage4","#mainimage5","#mainimage6"]; //tablicson do wyswietlanego obrazka
    var minis = ["#mini1", "#mini2","#mini3","#mini4","#mini5","#mini6"];// tablicyjson do tego typu benc mini obrazkow do klikania
    
    //funkcje on click do kazdego obrazka zeby chowal wszystkie(nie toggle z shownImage bo tak a shownImage mozna zamienic jakims get index czy czyms takim ale trelo morelo 00:00 nie chce mi sie)
    //a poza tym jeszcze pokazuje obrazek z indeksu tablicy z mini do mainimage tego typu benc
    $.each(minis, function(index2, nazwa2){
        $(nazwa2).click(function(){
            $.each(mains, function(index,nazwa){
                $(nazwa).hide();
            });
            $(mains[index2]).show();
            shownImage = index2;
        });
    });
    //funkcyjka klikancyjna na lewy przcisk do showania all i wyswietlenie poprzedniego obrazka index arraj dekrementacja tego typu benc
    $('#butlewy').click(function(){
        $.each(mains, function(index, nazwa){
            $(nazwa).hide();
        });
        if(shownImage == 0){
            shownImage = 5;
        }else{shownImage -=  1;}
        $(mains[shownImage]).show();
    });
    //funkcja na prawy przyciks to samo co lewy tylko inkrement
    $('#butprawy').click(function(){
        $.each(mains, function(index,nazwa){
            $(nazwa).hide();
        });
        if(shownImage == 5){
            shownImage = 0;
        }else{shownImage +=  1;}
        
        $(mains[shownImage]).show();
    });

    //funkcje pod niechowanie wszystkiego tylko pokazanego obrazka
    /*
    $.each(minis, function(index2, nazwa2){
        $(nazwa2).click(function(){
            $(mains[shownImage]).hide();;
            $(mains[index2]).show();
            shownImage = index2;
        });
    });
    */
});
