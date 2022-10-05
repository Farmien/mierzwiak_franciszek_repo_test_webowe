$(document).ready(function(){
  
  var cb = ["#cb1","#cb2","#cb3","#cb4","#cb5"]
  var ps = ["#pasek1","#pasek2","#pasek3","#pasek4","#pasek5"]
  var j = 0;
  $.each(cb , function(index,nazwa){
    $(nazwa).change(function(){
      var i = 0;
      if($(nazwa).is(':checked')){ 
        if(j < 5){
          console.log(j);
          $(ps[j]).css("background-color",$(nazwa).val());
          j += 1;
        }else{
          $(ps[0]).css("background-color",$(ps[1]).css("background-color"));
          $(ps[1]).css("background-color",$(ps[2]).css("background-color"));
          $(ps[2]).css("background-color",$(ps[3]).css("background-color"));
          $(ps[3]).css("background-color",$(ps[4]).css("background-color"));
          $(ps[4]).css("background-color",$(nazwa).val());
          console.log(j);
        }
        
      }
    $.each(cb, function(index2,nazwa2){
      if($(nazwa2).is(':checked')){ 
        i = i + 1;
      }
    });
    $("p").html(i);   
    switch(i){
      case 1:
        $("p").html("zaznaczono 1 pole");
      break;
      case 2:
        $("p").html("zaznaczono 2 pola");
      break;
      case 3:
        $("p").html("zaznaczono 3 pola");
      break;
      case 4:
        $("p").html("zaznaczono 4 pola");
      break;
      case 5:
        $("p").html("zaznaczono 5 pól");
      break;
      default:
        $("p").html("");
      break;
    }
    });
  });
  /*$('.checkbox').change(function() {
    console.log(this.val());
    var i = 0;
    $.each(cb, function(index,nazwa){
      if($(nazwa).is(':checked')){ 
        i = i + 1;
      }
    });
    $("p").html(i);   
    switch(i){
      case 1:
        $("p").html("zaznaczono 1 pole");
      break;
      case 2:
        $("p").html("zaznaczono 2 pola");
      break;
      case 3:
        $("p").html("zaznaczono 3 pola");
      break;
      case 4:
        $("p").html("zaznaczono 4 pola");
      break;
      case 5:
        $("p").html("zaznaczono 5 pól");
      break;
      default:
        $("p").html("");
      break;
    }
    $(ps[j]).css("background-color","red");
    j += 1;
  });*/
});
