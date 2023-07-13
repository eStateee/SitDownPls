import _vars from "../_vars";
const swiper = new Swiper(_vars.usefull_swiper, {
  spaceBetween: 32,
  direction: "horizontal",
  navigation: {
    nextEl: ".usefull-next",
    prevEl: ".usefull-back"
  },

  breakpoints: {
    576: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    768: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    1024: {
      slidesPerGroup: 1,
      slidesPerView: 3,
    },

    1281: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    }
  }
});


