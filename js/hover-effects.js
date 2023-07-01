$(window).resize(function () {
    if($(window).width() <= 1180){
        $('.item-flex').removeClass('flex-column');

        $('.item-flex').addClass('flex-row');
        $('.item').addClass('col-md-6');
    };
})

$(window).resize(function () {
    if($(window).width() <= 767){
        $('.item-flex').addClass('flex-column');
        $('.item-flex').removeClass('flex-row');
        $('.item').removeClass('col-md-6');
    };
})

$(function(){
    $(".border-img").mouseover(function() {
        $('#icon').attr('src', '../img/car-icon-blue.svg');
    })
    $(".border-img").mouseout(function(){
        $('#icon').attr('src', '../img/car-icon-blue.svg');
    })
});

$(function(){
    $(".border-img").mouseover(function() {
        $(".modal-div").show();
    })
    $(".border-img").mouseout(function(){
        $(".modal-div").hide();
    })
});

$(".form___input").click(function() {
    if (($(this).prop("checked"))) {
        $("#form__button").removeAttr("disabled");
    } else {
        $("#form__button").attr("disabled", "disabled");
    }
})

$("#form__button").click(function (){
    $(".form__message").remove();
})