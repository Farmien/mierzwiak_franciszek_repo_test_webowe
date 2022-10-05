$(document).ready(function(){
    $('.radiobutton').click(function() {
        if($('.radiobutton').is(':checked')){ 
          $("div").show().css("background-color",$(".radiobutton:checked").val());
        }                      
    });
});
