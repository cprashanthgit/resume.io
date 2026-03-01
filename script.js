document.addEventListener("DOMContentLoaded", () => {
    
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: stop observing once shown
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Elements to animate
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Glitch Text Effect Initialization logic (Optional expansion)
    // You can expand the CSS data-text glitch later if desired. The class acts as a hook.

});
