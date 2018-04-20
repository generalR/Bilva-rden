$( document ).ready(function() {

    $(".burger-nav").on("click", function(){
       console.log("click");
       
        $("header nav ul").toggleClass("open");
    });



});