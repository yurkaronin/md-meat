const swiper = new Swiper('.js-slider', {
  // Optional parameters
  // slidesPerView: 3,
  // spaceBetween: 32,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.js-button-next',
    prevEl: '.js-button-prev',
  },
  zoom: {
    maxRatio: 5,
  },

  breakpoints: {
    // when window width is >= 320px
    376: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    // when window width is >= 480px
    426: {
      slidesPerView: 2,
      spaceBetween: 28
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 32
    }
  }

});
