const burger = document.querySelector('.header__row-navigation--burger');
const navbar = document.querySelector('.header__row-navigation');


burger.addEventListener("click", () => {
  navbar.classList.toggle('changeMenu');
});

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 460 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 460) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
