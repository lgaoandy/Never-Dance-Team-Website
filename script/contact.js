// FORM VALIDATIONS
function validateForm(name, subject, email, phone, message){
    let error = new Object();
    if ($.trim(name) == ''){
        error['name'] = 'Please enter your name';
    }

    if (subject == ''){
        error['subject'] = 'Please select an option';
    }

    if ($.trim(email) == ''){
        error['email'] = 'Please enter your email address';
    }
    else if (!checkEmail(email)){
        error['email'] = 'Please enter an email with a valid format';
    }

    if ($.trim(phone) != ''){
        if (!checkPhone(phone)){
            phone = phone.replace(/ /g,'');
            error['phone'] = 'Please enter your number in the request format';
        }
    }
    else {
        delete error['phone'];
    }

    if ($.trim(message) == ''){
        error['message'] = 'Please describe your inquiry';
    }
    else if (message.length < 10){
        error['message'] = 'Please provide more details to your inquiry';
    }
    return error;
}

function formResponse(error, property, inputType = 'text'){
    if (error[property] !== undefined){
        if (inputType == 'text'){
            $('.form-input[name="'+property+'"]').val('').attr('placeholder',error[property])
            .parent('.form-element').addClass('error');
        }
        else if (inputType == 'select'){
            $('.form-input[name="'+property+'"]').children('.default').html(error[property])
            .parents('.form-element').addClass('error');
        }
    }
    else {
        $('.form-input[name="'+property+'"]').attr('placeholder','').parent().removeClass('error');
    }
}

$('select.form-input').change(function(){
    var selected = $(this).val();
    if (selected == ''){
        $(this).css('color','grey');
    }
    else {
        $(this).css('color','black');
    }
});

$('#submit').click(function(){
    var name = $('.form-input[name="name"]').val();
    var subject = $('.form-input[name="subject"]').val();
    var email = $('.form-input[name="email"]').val();
    var phone = $('.form-input[name="phone"]').val();
    var message = $('.form-input[name="message"]').val();

    // validate inputs
    var error = validateForm(name, subject, email, phone, message,);
    formResponse(error,'name');
    formResponse(error,'subject','select');
    formResponse(error,'email');
    formResponse(error,'phone');
    formResponse(error,'message');

    // form response
    if ($.isEmptyObject(error)){
        $('.main-wrapper').fadeOut();
        $('.title-wrapper').fadeOut();
        $('.success-message').fadeIn();
    }
});