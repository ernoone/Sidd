$(document).ready(function(){
    $('.hero-section-js').slick({
        dots: true,
        infinite: true,
        speed: 500,
    });
    $('.upcoming-events-js').slick({
        variableWidth: false,
        dots: false,
        infinite: true,
        speed: 500,
    });

    $('.news-wrapper-js').slick({
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
    });

    $('.we-recommended-js').slick({
        slidesToShow: 4,
        variableWidth: false,
        dots: false,
        infinite: true,
        speed: 500,
    });

    $('.product-slide-wrapper-js').slick({
        slidesToShow: 1,
        variableWidth: false,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
    });

    $('.currency-select-js').niceSelect();
    $('.select-js').niceSelect();
    $('.filter-select').niceSelect();
    $('.select-2').niceSelect();

    $(".owl-carousel").owlCarousel({
        margin:1,
        loop:true,
        autoWidth:true,
        nav :true,
        items:5
    });

    $(".album-list-js").owlCarousel({
        loop:true,
        nav :true,
        dots: false,
        items:4,
    });

    $("ul.tabs-caption").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active")
            .closest("div.tabs")
            .find("div.tabs-content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });
});

// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     if ($('.body').scrollTop() > 20 || document.documentElement.scrollTop > 20) {
//         $(".header").addClass("fixed");
//         $(".header").css("top", "-76px");
//     } else {
//         $(".header").css("top", "0");
//     }
// }

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 400);

function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}

var acc = document.getElementsByClassName("accordion-js");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}
