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