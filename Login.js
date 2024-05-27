const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');
const formContainer = document.querySelector('.form-container');

registerLink.addEventListener('click', () => {
    loginForm.style.transform = 'translateX(-100%)';
    registerForm.style.transform = 'translateX(0)';
    formContainer.style.backgroundImage = 'url(./Imagen/b.jpeg)';
});

loginLink.addEventListener('click', () => {
    loginForm.style.transform = 'translateX(0)';
    registerForm.style.transform = 'translateX(100%)';
    formContainer.style.backgroundImage = 'url(./Imagen/a.jpg)';
});
