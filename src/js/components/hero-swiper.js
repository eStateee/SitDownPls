import _vars from "../_vars"
const swiper = new Swiper(_vars.hero_swiper, {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 2000,
  autoplay: {
    delay: 2000
  },
  effect: "fade",
  allowTouchMove: false,


})
