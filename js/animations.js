// Scroll animations using IntersectionObserver - Enhanced with modern effects
(function() {
    'use strict';
    
    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const observeFadeElements = () => {
        const fadeElements = document.querySelectorAll('.fade-in');
        fadeElements.forEach(el => {
            // Reset visibility for re-animation
            el.classList.remove('visible');
            observer.observe(el);
        });
    };
    
    // Initialize on page load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', observeFadeElements);
    } else {
        observeFadeElements();
    }
    
    // Re-observe after HTMX content swap
    document.body.addEventListener('htmx:afterSwap', () => {
        // Small delay to ensure DOM is ready
        setTimeout(observeFadeElements, 100);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Stagger animation for badges and pills
    const staggerElements = (selector, delay = 50) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 50);
            }, index * delay);
        });
    };
    
    // Apply stagger to skill badges when skills section loads
    document.body.addEventListener('htmx:afterSwap', (evt) => {
        if (evt.detail.target.id === 'content') {
            const skillsSection = evt.detail.target.querySelector('section');
            if (skillsSection) {
                setTimeout(() => {
                    staggerElements('.metallic', 30);
                }, 200);
            }
        }
    });
    
    // Add parallax effect to hero section
    const addParallax = () => {
        const hero = document.querySelector('section.relative');
        if (hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const heroContent = hero.querySelector('.relative.z-10');
                if (heroContent) {
                    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                    heroContent.style.opacity = 1 - (scrolled / 500);
                }
            });
        }
    };
    
    // Initialize parallax
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addParallax);
    } else {
        addParallax();
    }
})();
