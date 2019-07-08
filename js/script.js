$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        margin:0,
        singleItem:true,
        stagePadding: 0,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });

    //service assembler

    $('.add-btn').click(function () {
        $('#todo').append("<li>" + $("input[name=task]").val() + " <a href='#/' class='close' aria-hidden='true'>&times;</a></li>");
    });
    $("body").on('click', '#todo a', function () {
        $(this).closest("li").remove();
    });

    // age verification


});
