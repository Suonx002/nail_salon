const navList = document.querySelector('.nav__list');
const burgerMenu = document.querySelector('.nav__burger');

AOS.init();
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000
});

burgerMenu.addEventListener('click', e => {
  navList.classList.toggle('show');
});

navList.addEventListener('click', () => {
  navList.classList.toggle('show');
});
