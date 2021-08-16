import './star_rate.scss'
import './index.scss'


var swiper = new Swiper(".card_swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        300: {
            slidesPerView: 1,
        },
    },
});
