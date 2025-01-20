// Update the year dynamically in the footer
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

yearSpan.textContent = currentYear;
lastModifiedSpan.textContent = lastModified;

// Hamburger menu functionality
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
    const isVisible = navMenu.style.display === 'block';
    navMenu.style.display = isVisible ? 'none' : 'block';
    hamburgerButton.textContent = isVisible ? '\u2630' : 'X'; // Change symbol between menu and close
});

