const headerEl = document.querySelector('.header');
const navEl = document.querySelector('.nav');
const hamburgerEl = document.querySelector('.hamburger');

hamburgerEl.addEventListener('click', () => {
    navEl.classList.toggle('nav--open');
    hamburgerEl.classList.toggle('hamburger--open');
});


/*Implements the scrolling function for the header
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        headerEl.classList.add('header-scrolled');
    } else if (window.scrollY <=500) {
        headerEl.classList.remove('header-scrolled');
    }
})*/


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));