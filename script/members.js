// console.log(covers);

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
    $('.modal').css("display","block");
});

$('.modal').on('click', function(){
    $('.modal').css("display","none");
});
