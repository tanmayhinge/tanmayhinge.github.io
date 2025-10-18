// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Simple parallax effect on scroll
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const title = document.querySelector('.title');

    if (title) {
        const offset = scrollTop * 0.3;
        title.style.transform = `translateY(${offset}px)`;
        title.style.opacity = Math.max(1 - scrollTop / 500, 0);
    }

    lastScrollTop = scrollTop;
});
