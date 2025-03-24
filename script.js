// BURGER MENU
const burgerButton = document.getElementById('burger-button');
const closeButton = document.getElementById('close-button');
const burgerMenu = document.getElementById('burger-menu');

burgerButton.addEventListener('click', () => {
    burgerMenu.classList.remove('hidden')
    document.body.style.overflow = 'hidden';
})

closeButton.addEventListener('click', () => {
    burgerMenu.classList.add('hidden')
    document.body.style.overflow = '';
})

// LOGO COLOR SWITCH

const header = document.getElementById('header');
const logoImg = document.getElementById('header-logo');

document.addEventListener('DOMContentLoaded', () => {
    if(header.classList.contains('bg-dark')){
        logoImg.src = "./images/tpc-light.svg";
    }
    else{
        logoImg.src = "./images/tpc-dark.svg";
    }
})

