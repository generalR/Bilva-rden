$(document).ready(function () {

    $(".burger-nav").on("click", function () {
        $("header nav ul").toggleClass("open");
    });

    $(".form-wrapper .button").click(function () {
        var button = $(this);
        var currentSection = button.parents(".section");
        var currentSectionIndex = currentSection.index();
        var headerSection = $('.steps li').eq(currentSectionIndex);
        currentSection.removeClass("is-active").next().addClass("is-active");
        headerSection.removeClass("is-active").next().addClass("is-active");

        $(".form-wrapper").submit(function (e) {
            e.preventDefault();
        });

        if (currentSectionIndex === 3) {
            $(document).find(".form-wrapper .section").first().addClass("is-active");
            $(document).find(".steps li").first().addClass("is-active");
        }
    });




    $('.tooltip-container').click(function(){
      // $( ".tooltip-container" ).closest( "div", tipsCard ).css( "background-color", "red" );
        //var eq = $(this).eq();

    var button = $(this);
    var currentCard = button.parents('.col-xs-12');
   // currentCard.css( "background-color", "red" );
    var prevCard = currentCard.prev('div').find('.tips-card');
  //  prevCard.css( "background-color", "blue" );
    //prevCard.find('.tips-card');
    console.log(prevCard);

    var currentCardSectionIndex = currentCard.index();
   // console.log(currentCardSectionIndex);
    //currentCardSectionIndex.prev().css( "background-color", "pink" );

    /*  var antalTooltipContainer = $(this).index('.tooltip-container');
      console.log(antalTooltipContainer);
      
      var antalTipsCard = $('div.tips-card');
      antalTipsCard.eq(antalTooltipContainer);
      antalTipsCard.css( "background-color", "red" );*/
        
        
      $(prevCard).toggle('800');
        
      //  var antalTooltips = $('.tooltip-container'); 
        
      //  console.log(antalTipsCard);
        
       /* if($(antalTooltips).eq() === antalTipsCard.eq() ){
            antalTipsCard.css( "background-color", "red" );
                
        }*/
      //  korrektTipsCard = antalTipsCard.index();
       // console.log(korrektTipsCard);
        
    });

    $('.show-more').click(function(){
        
        $('.bakgrundstext').toggleClass('open');
        if($(this).text() == 'Visa mindre'){
            $(this).text('Visa mer');
        } else {
            $(this).text('Visa mindre');
        }
 });
 

});




    //2
    /*
    function removeSlide(run){
        $count++;
        // Om count är lika många som antalet modalBody
        if($count === $modalBody){
            doneSlide(run);
            $count = 0; 
        }else{
            //ta bort från run
            run.removeClass('animate-out is-showing').
            next().addClass('animate-in');
            
            run.removeClass('is-active').
            next().addClass('is-active');
        }
        $modalHeader.eq($count).addClass('is-active');
    }

    function addNewSlide(run){
        console.log('vad är run.next? -> ' + run.next());
        run.next().removeClass('animate-in').addClass('is-showing');
        
    }

    //1
    function btnClick(){
        var run = $(this).parents('.modal-body');
        run.addClass('animate-out');

        setTimeout(function(){
            //ta bort nuvarabde slide
            removeSlide(run), setting.animateOutSpeed;
            addNewSlide(run), setting.animateInSpeed;
            
          });
        
    }
    function doneSlide(){
        run.parents('.modal-wrap').addClass('animate-up');
        setTimeout(() => $rerunBtn.css('display', 'inline-block'), 300);
        run.removeClass('animate-out is-showing is-active');
        
        $modalHeader.removeClass('is-active');
    };

    function restart(){
        $modalWrap.removeClass('animate-up');
        $modalBFirst.addClass('is-showing');
        
        $rerunBtn.hide();
    }

    $btn.on('click', btnClick);
    $rerunBtn.on('click', restart);


});
*/

/*
    //Login form
    $('.button').click(function () {
        var $btn = $(this),
            $step = $btn.parents('.modal-body'),
            stepIndex = $step.index();
            console.log('Stepindex: ' + stepIndex);
            $pag = $('.modal-header span').eq(stepIndex);
            console.log('$pag: ' + $pag);
        if (stepIndex === 0 || stepIndex === 1) {
            console.log(stepIndex);

            step1($step, $pag);
        }
        else {
            step3($step, $pag);
        }

    });

    function step1($step, $pag){
        console.log('step1');
          // animate the step out
          $step.addClass('animate-out');
          
          // animate the step in
          setTimeout(function(){
            $step.removeClass('animate-out is-showing')
                 .next().addClass('animate-in');
            $pag.removeClass('is-active')
                  .next().addClass('is-active');
          }, 600);
          
          // after the animation, adjust the classes
          setTimeout(function(){
            $step.next().removeClass('animate-in')
                  .addClass('is-showing');
            
          }, 1200);
        }   
     });

     
function step3($step, $pag){
    console.log('3');
    
      // animate the step out
      $step.parents('.modal-wrap').addClass('animate-up');
    
      setTimeout(function(){
        $('.rerun-button').css('display', 'inline-block');
      }, 300);
    }
    
    $('.rerun-button').click(function(){
     $('.modal-wrap').removeClass('animate-up')
                      .find('.modal-body')
                      .first().addClass('is-showing')
                      .siblings().removeClass('is-showing');
    
      $('.modal-header span').first().addClass('is-active')
                              .siblings().removeClass('is-active');
     $(this).hide();
    });
    */