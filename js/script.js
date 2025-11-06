

/*===========
let Navbar = document.querySelector('.navbar');
let Fabars = document.querySelector('.fa-bars');


Fabars.onclick = () =>{
    Navbar.classList.toggle("active")
};
===========*/

/*=======home slides==========
var swiper = new Swiper(".home-slid", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
==================*/

var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-250px";
}



/*=======automatic scroll==========*/
let slideIndex = 0;
carousel();

function carousel() {
  const slides = document.querySelectorAll('.swiper-scroll');
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides.forEach(slide => {
    slide.style.transform = `translateX(-${slideIndex - 1}00%)`;
  });

  setTimeout(carousel, 6000); // Change slide every 6 seconds
}

/*======================= scroll reveal ===============*/
ScrollReveal({ 
  // reset: true,
  distance: '120px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.heading', { origin: 'top' });
ScrollReveal().reveal('.about .box .video-links, .news-calendar .row .box1, .services1 .h-3', { origin: 'left' });
ScrollReveal().reveal('.h2-div', { origin: 'bottom' });
ScrollReveal().reveal('.about .content p, .mission, .news-calendar .row .box2, .about .heading-about', { origin: 'right' });

ScrollReveal().reveal('.contact form input, .contact form textarea', {delay: 600, origin: 'right', interval: 200 });
ScrollReveal().reveal('.contact .box .content, .contact .row iframe, .vision', {delay: 300, origin: 'left'});
ScrollReveal().reveal('.footer .our-servis, .footer .link, .footer .content, .footer .contact-us', {origin: 'left'});
ScrollReveal().reveal('.footer .content .shar i', {delay: 700, origin: 'bottom', interval: 200});
ScrollReveal().reveal('.contact .box .content i', {delay: 500, origin: 'top', interval: 200 });
ScrollReveal().reveal('.services1 .row .box, .services .row .box', {delay: 100, origin: 'bottom', interval: 200 });



/*======================= type js ===============
const typed = new Typed('.multiple-text', {
  strings: ['<i></i>', ], 
  typeSpeed: 30,
  backSpeed: 20,
  backDelay: 1000,
  loop: true,
});
==================*/


var swiper = new Swiper(".team-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    "0": {
      slidesPerView: 1,
      autoplay:{
          delay:700,
          disableOnInteraction:false,
      },
    },
    "768": {
      slidesPerView: 2,
        
    },
    "1020": {
      slidesPerView: 3,
        
    },
  },
});
