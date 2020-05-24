// Disabled future times in datepicker
$(function(){
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();

    if (month < 10){
        month = '0' + month.toString();
    }
    if (day < 10){
        day = '0' + day.toString();
    }
    var maxDate = year + '-' + month + '-' + day;    
    $('input[type=date]').attr('max', maxDate);
});

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
        case '4':
            level = "Beginner";
            break;
        case '5':
        case '6':
            level = "Intermediate";
            break;
        case '7':
        case '8':
            level = "Advanced";
            break;
        case '9':
        case '10':
            level = "Professional";
            break;
    }
    $('.slider-value').empty().append(level);
});

/* -------------------------------------------------- 
    FORM BUTTONS
-------------------------------------------------- */
function findMessage(name){
    let error;
    switch (name){
        case 'email format':
            error = 'your email format is invalid';
            break;
        case 'video':
            error = 'you must submit a video';
        case 'video format':
            error = '.avi, .mov, .mp4 files only';
            break;
        default:
            error = 'this field is required';
            break;
    }
    return error;
}
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
function prevForm(step){
    if (step >= 1){
        $('.audition-form').fadeOut(200,function(){
            $('.form-steps').find('span.active').removeClass('active');
            $('.form-steps').find('span[form-no='+step+']').addClass('active');
        
            $('form').find('.form-container.active').removeClass('active').addClass('finish');
            $('form').find('.form-container[form-no="'+step+'"]').addClass('active');
            showButtons(step);
            $('.audition-form').fadeIn(200);
        });
    }
    $('button.back').blur();
}
function nextForm(step){
    if (step <= 4){
        $('.audition-form').fadeOut(200,function(){
            $('.form-steps').find('span.active').removeClass('active').addClass('finish');
            $('.form-steps').find('span[form-no='+step+']').addClass('active');
            $('form').find('.form-container.active').removeClass('active').addClass('finish');
            $('form').find('.form-container[form-no="'+step+'"]').addClass('active');
            showButtons(step);
            $('.audition-form').fadeIn(200);
        });
    }
    $('button.next').blur();
}
function submitSuccess(){
    $('.audition-form').fadeOut();
    var success = '<p class="success"><span>Thank you for your interest in NEVER.</span><br> Our manager will be in contact with you.</p>'
    $('.audition-form').before(success);
}

$('button.next').click(function(){
    var inputs = $('.form-container.active .form-input');
    $.each(inputs, function(){
        let value = $(this).val();
        let name = $(this).attr('name');
        let required = $(this).attr('required');

        if (required !== undefined && $.trim(value) === ''){
            let message = findMessage(name);
            $(this).parent('.form-element').addClass('error');
            $('.form-label[for="'+name+'"]').children('.message').addClass('red').html(message);
        }
        else if (name === 'email' && !checkEmail(value)){
            let message = findMessage('email format');
            $(this).parent('.form-element').addClass('error');
            $('.form-label[for="'+name+'"]').children('.message').addClass('red').html(message);
        }
    });

    var elements = $('.form-container.active .error');
    if (elements.length == 0){
        var activestep = $('.form-steps').find('span.active').attr('form-no');
        var nextstep = parseInt(activestep)+1;
        nextForm(nextstep);
    }
});
$('button.back').click(function(){
    var activestep = $('.form-steps').find('span.active').attr('form-no');
    var prevstep = parseInt(activestep)-1;
    prevForm(prevstep);
});
$('button.submit').click(function(){
    var audition = $('.form-input[name="video"]');
    var video = audition.val();

    if (video === ''){
        let message = findMessage();
        audition.parent('.form-element').addClass('error');
        $('.form-label[for="video"]').children('.message').addClass('red').html(message);
    }
    else if (!checkVideo(video)){
        let message = findMessage('video format');
        audition.parent('.form-element').addClass('error');
        $('.form-label[for="video"]').children('.message').addClass('red').html(message);
    }
    else {
        submitSuccess();
    }
});