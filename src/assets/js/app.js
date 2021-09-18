$(() => {
    $(window).on('load', function hidePreloader() {
        $('.preloader__wrp').fadeOut();
    });
});

$('.js-menu').on('click', function () {
    $(this).toggleClass('header__burger--active');
    $('.header').toggleClass('header--active');
    $('.burger').toggleClass('burger--active');
    $('body').toggleClass('burger--active')
});

// $(() => {
//     $(document).on('click', function (e) {
//         var container = $('.header');
//
//         // if the target of the click isn't the container nor a descendant of the container
//         if (!container.is(e.target) && container.has(e.target).length === 0)
//         {
//             container.removeClass('header--active');
//             $(this).removeClass('header__burger--active');
//             $('.burger').removeClass('burger--active');
//         }
//
//     });
// });

$(() => {
    $('.js-prevent-default').on('click', function (e) {
        e.preventDefault();
    });
});


$(() => {
    //sticky header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 5){
            $('body').addClass('sticky-header');
        } else {
            $('body').removeClass('sticky-header');
        }
    });
});

// $(() => {
//     $('.tabs__content-item:not(:first-child)').hide();
//     $('.tabs__list-item:first-child').addClass('active');
//     $('.tabs__list > .tabs__list-item').click(function tabListLiClick() {
//         if (!($(this).hasClass('active'))) {
//             const thisLi = $(this);
//             const numLi = thisLi.index();
//             thisLi.addClass('active').siblings().removeClass('active');
//             thisLi.parent().next().children('div').hide()
//                 .eq(numLi)
//                 .fadeIn('slow');
//         }
//     });
// });

$(() => {
    const restSlider = new Swiper(".js-events-slider", {
        speed: 1000,
        centeredSlides: true,
        initialSlide: 3,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
            1572: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        }
    });
});

$(() => {
    const finalSlider = new Swiper(".js-final-slider", {
        speed: 1000,
        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 5,
                spaceBetween: 15,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 15,
            },
            1572: {
                slidesPerView: 7,
                spaceBetween: 30,
            },
        }
    });
});

$(() => {
    const membershipSlider = new Swiper(".js-membership-slider", {
        speed: 1000,
        pagination: {
            el: '.js-membership-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
            976: {
                slidesPerView: 5,
                spaceBetween: 25,
            },
            1200: {
                slidesPerView: 6,
                spaceBetween: 35,
                initialSlide: 3,
                centeredSlides: true,
            },
            1572: {
                slidesPerView: 7,
                spaceBetween: 50,
                initialSlide: 3,
                centeredSlides: true,
            },
        }
    });
});



var testBottom = new Swiper('.js-test-bottom-slider', {
    freeMode: false,
    spaceBetween: 30,
    navigation: {
        prevEl: '.js-test-slider-prev',
        nextEl: '.js-test-slider-next',
    },
    thumbs: {
        swiper: testTop,
    },
    slidesPerView: 1,
    breakpoints: {
        0: {
            slidesPerView: 2,
            // allowTouchMove: false,
        },
        520: {
            slidesPerView: 3,
            allowTouchMove: false,
        },
        768: {
            slidesPerView: 4,
            allowTouchMove: false,
        },
        1200: {
            slidesPerView: 6,
            allowTouchMove: false,
        },
    },
    speed: 1000,
});
var testTop = new Swiper('.js-test-top-slider', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    navigation: {
        prevEl: '.js-test-slider-prev',
        nextEl: '.js-test-slider-next',
    },
    thumbs: {
        swiper: testBottom,
    },
    speed: 1000,
});