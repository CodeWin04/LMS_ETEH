/**
 * Tab Switcher for Sign In / Sign Up Forms
 * @param {string} tabName - 'signin' or 'signup'
 */
alert("I am working!");
function switchTab(tabName) {
    const signInTab = document.getElementById('tab-signin');
    const signUpTab = document.getElementById('tab-signup');
    const signInForm = document.getElementById('form-signin');
    const signUpForm = document.getElementById('form-signup');

    if (!signInTab || !signUpTab || !signInForm || !signUpForm) return;

    if (tabName === 'signin') {
        // Activate Sign In
        signInTab.classList.add('active');
        signUpTab.classList.remove('active');
        signInForm.classList.add('active-form');
        signUpForm.classList.remove('active-form');
    } else if (tabName === 'signup') {
        // Activate Sign Up
        signUpTab.classList.add('active');
        signInTab.classList.remove('active');
        signUpForm.classList.add('active-form');
        signInForm.classList.remove('active-form');
    }
}

// Mobile Menu Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile nav when clicking a link
    const links = navLinks ? navLinks.querySelectorAll('a') : [];
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});
