document.addEventListener('DOMContentLoaded', function () {
    const imageItems = document.querySelectorAll('.section-8-about-image-item');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        }
    );

    imageItems.forEach(item => {
        observer.observe(item);
    });
});