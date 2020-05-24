// console.log(covers);

// LOADING ICONS FOR IMAGES
$('.member-profile').imagesLoaded()
    .done(function(instance) {
    console.log('All images successfully loaded');
})
    .progress(function(instance, image) {
    $(image.img).parent('.member-profile').removeClass('loading');
    $(image.img).animate({'opacity': '1'}, 500);
});

$('.member img').on('click', function(){
    var src = $(this).attr('src');
    var name = $(this).attr('member');
    
    $('.modal-list').empty();
    $.each(covers, function(i, cover){
        let roleCovered;
        $.each(cover.roles, function(i, role){
            if (name === role.member){
                roleCovered = role.role;
            }
        });
        if (roleCovered !== undefined){
            let coverInvolved = '<p>' + cover.song + ' - ' + cover.artist + ' as <span class="cover-role">' + roleCovered + '</span></p>';
            $('.modal-list').append(coverInvolved);
        }
    });
    
    $('.modal-image').attr('src',src);
    $('.modal-name').empty().append(name);
    $('.modal').addClass('active');
    $('.member-container').addClass('hide');
});

$('.modal').on('click', function(){
    $('.modal').removeClass('active');
    $('.member-container').removeClass('hide');
});

