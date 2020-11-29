$(function() {
    
    "use strict";

    
    //===== Sticky
    
    $(window).on('scroll',function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation-bar").removeClass("sticky");
        }else{
            $(".navigation-bar").addClass("sticky");
        }
    });
    
    
    //===== wow
    
    new WOW().init();
    
    
    //===== AOS
    
     AOS.init({
         duration: 800,
     });
    
    

    

    


    
    
    
    
    
    
    
});