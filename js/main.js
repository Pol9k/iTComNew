const burger = document.querySelector('.header__row-navigation--burger');
const navbar = document.querySelector('.header__row-navigation');


burger.addEventListener("click", () => {
  navbar.classList.toggle('changeMenu');
})