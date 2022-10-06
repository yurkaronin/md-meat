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


const tl = gsap.timeline();

tl.from('.hero__image', {
  y: '-10%',
  duration: 2,
  opacity: 0
})
  .from('.hero__text .title', {
    y: '-10%',
    duration: 1,
    opacity: 0
  })
  .from('.hero .button', {
    y: '-10%',
    duration: 1,
    opacity: 0
  })
  .from(['.header .logo', '.header__buttons'], {
    y: '-10%',
    duration: 1,
    opacity: 0
  });


