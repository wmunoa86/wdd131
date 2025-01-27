// JavaScript for Chamber of Commerce Page

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula for °C and km/h
    return (
        13.12 +
        0.6215 * temperature -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16)
    ).toFixed(1);
}

// Function to update weather details
function updateWeather() {
    const temperature = 10; // Static value in °C
    const windSpeed = 5; // Static value in km/h

    const windChillElement = document.getElementById("wind-chill");

    // Check if conditions are valid for wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}

// Function to update footer details
function updateFooter() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("current-year").textContent = currentYear;
    document.getElementById("last-modified").textContent = lastModified;
}

// Initialize page content
function initPage() {
    updateWeather();
    updateFooter();
}

// Run initPage on page load
document.addEventListener("DOMContentLoaded", initPage);

// Hamburger menu functionality
const hamburgerButton = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburgerButton.addEventListener('click', () => {
    const isVisible = navMenu.style.display === 'block';
    navMenu.style.display = isVisible ? 'none' : 'block';
    hamburgerButton.textContent = isVisible ? '\u2630' : 'X'; // Change symbol between menu and close
});