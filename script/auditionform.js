/* -------------------------------------------------- 
    GENERATE COMMUNITY LIST
-------------------------------------------------- */


/* -------------------------------------------------- 
    SKILL SLIDER
-------------------------------------------------- */
$(document).on('input', '.skill-slider', function(){
    var value = this.value;
    var level;
    switch (value){
        case '1':
            level = 'Inexperienced';
            break;
        case '2':
            level = "Casual";
            break;
        case '3':
            level = "Beginner";
            break;
        case '4':
            level = "Dance Trainee";
            break;
        case '5':
        case '6':
            level = "Intermediate";
            break;
        case '7':
            level = "Advanced";
            break;
        case '8':
            level = "Professional";
            break;
        case '9':
            level = "Lead Dancer";
            break;
        case '10':
            level = "Main Dancer";
            break;
    }
    $('.slider-value').empty().append(level);
});

/* -------------------------------------------------- 
    FORM BUTTONS
-------------------------------------------------- */
function showButtons(step){
    // activate previous and/or next button
    switch (step){
        case 1:
            $('button.back').addClass('hide');
            break;
        case 2:
        case 3:
            $('button.back').removeClass('hide');
            $('button.next').removeClass('hide');
            $('button.submit').prop('hidden',true);
            break;
        case 4:
            $('button.next').addClass('hide');
            $('button.submit').prop('hidden',false);
            break;
    }
}
function findNextStep(){
    var activestep = $('.form-steps').find('span.active').attr('form-no');
    return parseInt(activestep)+1;
}
$(document).on('click', 'button.next', function(){
    var nextstep = findNextStep();
    if (nextstep <= 4){
        $('.audition-form').fadeOut(200,function(){
            $('.form-steps').find('span.active').removeClass('active').addClass('finish');
            $('.form-steps').find('span[form-no='+nextstep+']').addClass('active');
            $('form').find('.form-container.active').removeClass('active').addClass('finish');
            $('form').find('.form-container[form-no="'+nextstep+'"]').addClass('active');
            showButtons(nextstep);
            $('.audition-form').fadeIn(200);
        });
    }
    $('button.next').blur();
});
$(document).on('click', 'button.back', function(){
    var activestep = $('.form-steps').find('span.active').attr('form-no');
    var prevstep = parseInt(activestep)-1;
    if (prevstep >= 1){
        $('.audition-form').fadeOut(200,function(){
            $('.form-steps').find('span.active').removeClass('active');
            $('.form-steps').find('span[form-no='+prevstep+']').addClass('active');
        
            $('form').find('.form-container.active').removeClass('active').addClass('finish');
            $('form').find('.form-container[form-no="'+prevstep+'"]').addClass('active');
            showButtons(prevstep);
            $('.audition-form').fadeIn(200);
        });
    }
    $('button.back').blur();
});