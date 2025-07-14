const swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
    },
});
