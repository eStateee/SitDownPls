var swiper = new Swiper(".catalog-swiper", {
  slidesPerView: 2,

  spaceBetween: 16,
  grid: {
    rows: 3,
    fill: 'row',
  },
  pagination: {
    el: ".swiper-pag",
    type: 'bullets',
    bulletActiveClass: 'swiper-pag-bullet-active',
    bulletClass: 'swiper-pag-bullet',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    610: {
      grid: {
        rows: 3,
        fill: 'row',
      },
      slidesPerView: 2,
      spaceBetween: 32,
    },

    1024: {
      grid: {
        rows: 3,
        fill: 'row',
      },
      spaceBetween: 32,
      slidesPerView: 3,
    }
  }
});


