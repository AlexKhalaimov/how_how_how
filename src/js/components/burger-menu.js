const burgerBtn = document.querySelector('.js-burger-btn');
const navMenu = document.querySelector('.js-nav-menu');
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('is-active');
    navMenu.classList.toggle('active');
})
