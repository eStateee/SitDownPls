import _vars from "../_vars";
const swiper = new Swiper(_vars.offers_swiper, {
  spaceBetween: 32,
  slidesPerView: "auto",
  direction: "horizontal",
  navigation: {
    nextEl: ".offers-next",
    prevEl: ".offers-back"
  },

  breakpoints: {
    610: {
      slidesPerGroup: 2
    },

    1281: {
      slidesPerGroup: 3
    }
  }
});


