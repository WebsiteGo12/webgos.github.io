$(document).ready(function () {
    var wheight = $(window).height();

    $(window).scroll(function () {
        $('header').toggleClass('scrolled', $(this).scrollTop() > 10);
        if ($(window).scrollTop() > wheight) {
            $('.scrolltop-btn').fadeIn();
        } else {
            $('.scrolltop-btn').fadeOut();
        }
    });
    $(document).on("click", ".scrolltop-btn", function () {
        $("html, body").animate({
            scrollTop: 0
        }, "500");
    });
    if (screen.width > 1024) {
        AOS.init({
            easing: 'ease-in-out-sine',
            once: true,
        });
    }
    if ($(window).width() < 971) {
        $('.menu-icon').click(function () {
            $('.nav-sec').css({
                'right': '0px',
                'opacity': '1',
                'visibility': 'visible'
            });
            $('#cls-btn').css({
                'display': 'block',
                'opacity': '1',
                'visibility': 'visible'
            });
        });
        $('#cls-btn').click(function () {
            $('.nav-sec').css({
                'right': '-250px',
                'opacity': '0',
                'visibility': 'hidden'
            });
            $(this).css('display', 'none');
        });
        $(document).on('click', function (e) {
            if ($(e.target).closest(".nav-sec, .menu-icon").length === 0) {
                $('.nav-sec').css({
                    'right': '-250px',
                    'opacity': '0',
                    'visibility': 'hidden'
                });
                $('#cls-btn').css('display', 'none');
            }
        });

    } else {
        $('#cls-btn').css({
            'display': 'block',
            'opacity': '0',
            'visibility': 'hidden'
        });
    }
    if ($(window).width() < 645) {
        $('.clickable').on('click', function () {
            $(this).next('.footer-nav').slideToggle();
            $(this).toggleClass('in');
        }); 
       
    }
});