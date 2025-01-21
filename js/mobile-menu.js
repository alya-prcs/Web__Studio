
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const burgerClose = document.createElement('div');
burgerClose.classList.add('burger-close');
burgerClose.innerHTML = '&times;'; 

nav.prepend(burgerClose);

burger.addEventListener('click', () => {
    nav.classList.add('active');
    burgerClose.style.display = 'block';
});

burgerClose.addEventListener('click', () => {
    nav.classList.remove('active');
    burgerClose.style.display = 'none'; 
});