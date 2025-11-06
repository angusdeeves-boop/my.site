  
       document.addEventListener('DOMContentLoaded', () => {
 
});

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

        // Scroll animation for cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.feature-card, .class-card').forEach(card => {
            card.style.opacity = '0';
            observer.observe(card);
        });

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = 'rgba(15, 23, 42, 0.98)';
                nav.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.2)';
            } else {
                nav.style.background = 'rgba(15, 23, 42, 0.95)';
                nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
            }
        });


        
   
