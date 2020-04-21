// find the name of the file - by removing the URL
function findName(URL){
    var urlLength = URL.split("/").length;
    var urlName = URL.split("/")[urlLength-1];
    urlName = urlName.split(".")[0];
    urlName = urlName.replace("_"," ");
    return urlName;
}

var selectedMember = $('.member-column').children();
$(selectedMember).on('click',function(){
    var src = $(this).attr('src');
    var name = findName(src);
    console.log(src,name);
    
    $('.modal-image').attr('src',src);
    $('.modal-caption').empty().append(name);
    $('.modal').css("display","block");
});

$('.close-modal').on('click',function(){
    $('.modal').css("display","none");
});
