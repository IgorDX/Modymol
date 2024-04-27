import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
	// Optional parameters

	loop: true,
  
	slidesPerView: 1,
	spaceBetween: 16,
	pagination: {
	  el: ".swiper-pagination",
	  clickable: true,
	},
	breakpoints: {
		415: {
			slidesPerView: 2,
			spaceBetween: 24,
		  },
        830: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      },
  });
// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import accordion from './modules/accordion.js';
mobileNav();
// Accordion
accordion();
