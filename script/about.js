$('.img-wrapper').imagesLoaded()
    .done( function(instance) {
    console.log('All images successfully loaded');
})
    .progress( function(instance, image) {
    $(image.img).parent('.img-wrapper').removeClass('loading');
    $(image.img).animate({'opacity': '1'}, 500);
});
