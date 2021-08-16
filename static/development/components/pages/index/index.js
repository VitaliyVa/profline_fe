import './index.scss';

let swiper = new Swiper(".main_slider__block", {
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

let width = document.documentElement.clientWidth;
if (width <= 1350) {

    let swiper = new Swiper(".best_sales_swiper", {
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 30,
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            992: {
                slidesPerView: 2,
            },
            300: {
                slidesPerView: 1,
            },
        },
    });
    let sponsor_swiper = new Swiper(".sponsor_swiper", {
        speed: 1000,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        breakpoints: {
            992: {
                slidesPerView: 5,
            },
            800: {
                slidesPerView: 3,
            },
            420: {
                slidesPerView: 2,
            },
        },
    });
}