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
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show-timeline-left');
        }
    });
});

const hiddentimelineleft = document.querySelectorAll('.hidden-timeline-left');
hiddentimelineleft.forEach((el) => observer2.observe(el));

const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show-timeline-right');
        }
    });
});

const hiddentimelineright = document.querySelectorAll('.hidden-timeline-right');
hiddentimelineright.forEach((el) => observer3.observe(el));


const tabs = document.querySelectorAll('.tab_btn');
const all_content = document.querySelectorAll('.content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabs.forEach(tab =>{tab.classList.remove('active')});
        tab.classList.add('active');

        var line=document.querySelector('.line');
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";
        line.style.opacity = 1;

        all_content.forEach(content => {content.classList.remove('active')})
        all_content[index].classList.add('active');
    })

    
})