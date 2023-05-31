const hamburger = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.header__nav');
const span1 = document.querySelector('.hamburger-menu__span-1');
const span2 = document.querySelector('.hamburger-menu__span-2');
const span3 = document.querySelector('.hamburger-menu__span-3');

hamburger.addEventListener('click', function(){
    mainNav.classList.toggle('clicked');
    span2.classList.toggle('span-2-clicked');
    span3.classList.toggle('span-3-clicked');
    span1.classList.toggle('span-1-clicked');
});