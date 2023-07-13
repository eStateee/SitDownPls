import GraphModal from 'graph-modal';
import swiper from './detail-swiper.js'
const modal_btn = document.querySelector('#modal-btn')
const item_buy = document.querySelector('.item-buy')
const swiper_trigger = document.querySelectorAll(".detail-slide")
const modal_containewr = document.querySelector('.graph-modal__container')


if (modal_btn && item_buy && swiper) {
  modal_btn.addEventListener('click', () => {
    document.querySelector('.graph-modal__container').style.display = 'none';
    new GraphModal().open('grats');
    });

    item_buy.addEventListener('click', () => {
      document.querySelector('.graph-modal__container').style.display = 'inline-block';
      new GraphModal().open('buy-one-click');
    });
}


function openModal() {
  modal_containewr.style.display = 'none';
  new GraphModal().open('swiper-modal');
}

swiper.on('slideChangeTransitionEnd', function() {
  swiper_trigger.forEach(el => {
    el.removeEventListener("click", openModal);
  });

  swiper.slides.forEach(slideEl => {
    if (slideEl.classList.contains('swiper-slide-active')) {
      slideEl.addEventListener("click", openModal);
    }
  });
});

swiper_trigger.forEach(el => {
  if (el.classList.contains('swiper-slide-active')) {
    el.addEventListener("click", openModal);
  }
});
