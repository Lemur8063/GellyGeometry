var images_mapping = {
    '1': 'img/360/',
    '2': 'img/360-1/',
    '3': 'img/360-2/',
    '4': 'img/360-3/',
    '5': 'img/360-4/',
};


$(document).on('ready', function() {
    $('.photo_3d').rotate3d({
        'source': 'img/360/',
        'count' : 35,
    });
});

$('.1').click(function(event) {
    $('.photo_3d').empty();

    var element = event.target;
    var image_source = images_mapping[element.id];
    $('.photo_3d').rotate3d({
        'source': image_source,
        'count' : 35,
    });
});