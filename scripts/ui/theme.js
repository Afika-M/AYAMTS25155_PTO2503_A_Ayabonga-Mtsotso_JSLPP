/**
 * Theme Toggle Script
 * This script enables users to toggle between light and dark themes.
 * It saves the user's preference in localStorage to persist across sessions.
 */
export function setupThemeToggle() {
const themeToggle = document.getElementById('theme-toggle-btn');
const body = document.body;
const logo = document.getElementById('logo');

// Check for saved theme preference on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    logo.src = './assets/logo-dark.svg';
} else {
    logo.src = './assets/logo-light.svg';
}

// Event listener for the toggle button
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save theme preference to localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        logo.src = './assets/logo-dark.svg';
    } else {
        localStorage.setItem('theme', 'light');
        logo.src = './assets/logo-light.svg';
    }
});
}