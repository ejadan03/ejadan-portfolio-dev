// Dark Mode Toggle with localStorage - Fixed version
(function() {
    'use strict';
    
    // Initialize theme immediately
    const html = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const getTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        // Default to light mode
        return 'light';
    };
    
    // Apply theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
        
        // Update icons
        const sunIcon = document.getElementById('sun-icon');
        const moonIcon = document.getElementById('moon-icon');
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.classList.remove('hidden');
                sunIcon.classList.add('block');
                moonIcon.classList.add('hidden');
                moonIcon.classList.remove('block');
            } else {
                sunIcon.classList.add('hidden');
                sunIcon.classList.remove('block');
                moonIcon.classList.remove('hidden');
                moonIcon.classList.add('block');
            }
        }
    };
    
    // Initialize theme on page load (before DOM is ready)
    const currentTheme = getTheme();
    applyTheme(currentTheme);
    
    // Toggle theme function
    const toggleTheme = () => {
        const isDark = html.classList.contains('dark');
        applyTheme(isDark ? 'light' : 'dark');
    };
    
    // Set up toggle button listener
    const setupToggle = () => {
        const darkModeToggle = document.getElementById('dark-mode-toggle');
        if (darkModeToggle) {
            // Remove existing listeners by cloning
            const newToggle = darkModeToggle.cloneNode(true);
            darkModeToggle.parentNode.replaceChild(newToggle, darkModeToggle);
            newToggle.addEventListener('click', toggleTheme);
        }
    };
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupToggle);
    } else {
        setupToggle();
    }
    
    // Re-setup after HTMX swaps (in case nav is re-rendered)
    document.body.addEventListener('htmx:afterSwap', function(evt) {
        if (evt.detail.target.id === 'content' || evt.detail.target.closest('nav')) {
            setTimeout(setupToggle, 50);
        }
    });
    
    // Listen for system theme changes (only if no manual preference)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();
