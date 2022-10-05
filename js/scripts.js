const swiper = new Swiper('.js-slider', {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.js-button-next',
    prevEl: '.js-button-prev',
  },
  zoom: {
    maxRatio: 5,
  },

});
