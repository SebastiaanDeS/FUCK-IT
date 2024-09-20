const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');

function toggleNavigation() {
    burger.classList.toggle('cross');
    burgerNav.classList.toggle('active-nav');
}
