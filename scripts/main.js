const burger = document.querySelector('.burger');
const burgerNav = document.querySelector('.burger-nav');

burger.addEventListener('click', function() {
    burger.classList.toggle('cross');
    burgerNav.classList.toggle('active-nav');
});
