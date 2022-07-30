$(document).ready(function () {
    $('.slider-header').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $('.slicks-itemA').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    });
    $(".dropdown").hover(function () {
            $(this).children("div").stop(1,0,1).slideToggle(500);
        }
    );
    window.onscroll=function(){
        if($(window).scrollTop()>=400){
            $(".navbar").removeClass(("container"));
            $(".navbar").addClass(("Scroll"));
        }else{
            $(".navbar").removeClass(("Scroll"));
            $(".navbar").addClass(("container"));
        }
    }
    $('.countdown').dsCountDown({
        endDate: new Date("December 24, 2022 23:59:00")
        });
});