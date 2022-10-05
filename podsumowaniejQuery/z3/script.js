$(document).ready(function(){
    var degree = 90;
    $("#bt1").click(function(){
        $("#kwadrat").css("transform","rotate("+degree+"deg)");
        degree += 90;
    });
    $("#bt2").click(function(){
        var p = $( "#kwadrat" ).first();
        var position = p.position();
        console.log(position.left);
        $("#kwadrat").animate({left: (position.left-20)+'px'})
        
    });
    $("#bt3").click(function(){
        var p = $( "#kwadrat" ).first();
        var position = p.position();
        console.log(position.left);
        $("#kwadrat").animate({left: (position.left+20)+'px'})
    });
    $("#bt4").click(function(){
        var p = $( "#kwadrat" ).first();
        var position = p.position();
        console.log(position.top);
        $("#kwadrat").animate({top: (position.top-20-96.890625)+'px'})
    });
    $("#bt5").click(function(){
        var p = $( "#kwadrat" ).first();
        var position = p.position();
        console.log(position.top);
        $("#kwadrat").animate({top: (position.top+20-96.890625)+'px'})
    });
});
