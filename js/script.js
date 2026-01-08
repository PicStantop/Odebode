const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide (loop back to 0 if at the end)
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Add active class to the new slide
    slides[currentSlide].classList.add('active');
}

// Select slide groups (Text and House Images only)
const textSlides = document.querySelectorAll('.text-item');
const imageSlides = document.querySelectorAll('.image-item');

let currentIndex = 0;

function rotateSlides() {
    // 1. Hide Current
    textSlides[currentIndex].classList.remove('active');
    imageSlides[currentIndex].classList.remove('active');

    // 2. Calculate Next (Loop back to 0 when at the end)
    currentIndex = (currentIndex + 1) % textSlides.length;

    // 3. Show Next
    textSlides[currentIndex].classList.add('active');
    imageSlides[currentIndex].classList.add('active');
}

// Rotate every 5 seconds
setInterval(rotateSlides, 5000);

// Add background to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});