$('.form-input').on('change', function(){
    // Remove red border and placeholder
    $(this).attr('placeholder','').parent('.form-element').removeClass('error');

    // Remove message
    $(this).siblings('.form-label').children('.message').removeClass('red').empty();
});

function checkEmail(email){
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
}

function checkPhone(phone){
    var regex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    return regex.test(String(phone).toLowerCase());
}

function checkVideo(video){
    var format = video.split('.')[video.split('.').length-1];
    switch (format){
        case 'mp4':
        case 'mov':
        case 'avi':
            return true;
        default:
            return false;
    }
}