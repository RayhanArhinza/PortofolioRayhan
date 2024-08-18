// script.js

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});
// Scroll Up Button Script
document.addEventListener('DOMContentLoaded', function() {
    var scrollUpButton = document.getElementById('scroll-up-button');

    // Show/Hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollUpButton.style.display = 'flex'; // Show button
        } else {
            scrollUpButton.style.display = 'none'; // Hide button
        }
    });

    // Smooth scroll to top
    scrollUpButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
