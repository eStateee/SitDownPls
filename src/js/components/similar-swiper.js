import _vars from "../_vars";
const swiper = new Swiper(_vars.similar_swiper, {
  spaceBetween: 32,
  slidesPerGroup: 1,
  direction: "horizontal",
  navigation: {
    nextEl: ".similar-next",
    prevEl: ".similar-back"
  },

  breakpoints: {

  320: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    769: {
      slidesPerView: 3,
    },
    1025: {
      slidesPerView: 4,
    },

  }
});


