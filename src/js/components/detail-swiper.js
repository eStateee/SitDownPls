const swiper2 = new Swiper(".detail-swiper-bottom", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,

  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 2,
      direction: 'horizontal',
    },
    576: {
      slidesPerView: 4,
      direction: 'vertical',
    },

    769: {
      slidesPerView: 4,
      direction: 'horizontal',
    }
  }
});
const swiper = new Swiper(".detail-swiper-top", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper2
  }
});

// ###########################

const swiper3 = new Swiper(".detail-swiper-bottom-2", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    }

  }
});
const swiper4 = new Swiper(".detail-swiper-top-2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper3
  }
});
export default swiper;
