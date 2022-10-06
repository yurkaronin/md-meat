const swiper = new Swiper('.js-slider', {
  spaceBetween: 32,
  loop: true,

  navigation: {
    nextEl: '.js-button-next',
    prevEl: '.js-button-prev',
  },
  zoom: {
    maxRatio: 5,
  },

  breakpoints: {
    376: {
      slidesPerView: 1,
    },
    426: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 3,
    }
  }

});
