document.addEventListener('DOMContentLoaded', () => {
    const section4SliderMask = document.getElementById('section-4-slider-mask');
    const section4Slides = document.querySelectorAll('.section-4-testimonial-slide');
    const section4LeftArrow = document.querySelector('.section-4-testimonial-arrow.section-4-left');
    const section4RightArrow = document.querySelector('.section-4-testimonial-arrow.section-4-right');
    const section4TrackerItems = document.querySelectorAll('.section-4-tracker-item');

    let section4CurrentIndex = 0;

    // Function to update the slider
    function section4UpdateSlider(index) {
        // Get the current and next slides
        const currentSlide = section4Slides[section4CurrentIndex];
        const nextSlide = section4Slides[index];

        // Get the current and next content
        const currentContent = currentSlide.querySelector('.section-4-testimonial-content');
        const nextContent = nextSlide.querySelector('.section-4-testimonial-content');

        // Trigger the hide animation for the current content
        currentContent.classList.remove('visible');
        currentContent.classList.add('hidden');

        // Update slide visibility
        section4Slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            slide.setAttribute('aria-hidden', i !== index);
        });

        // Delay the show animation for the next content by 0.5 seconds
        setTimeout(() => {
            nextContent.classList.remove('hidden');
            nextContent.classList.add('visible');
        }, 500); // 0.5-second delay

        // Update tracker
        section4TrackerItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        section4CurrentIndex = index;
    }

    // Initial setup
    section4UpdateSlider(section4CurrentIndex);

    // Left arrow click
    section4LeftArrow.addEventListener('click', () => {
        let newIndex = section4CurrentIndex - 1;
        if (newIndex < 0) newIndex = section4Slides.length - 1;
        section4UpdateSlider(newIndex);
    });

    // Right arrow click
    section4RightArrow.addEventListener('click', () => {
        let newIndex = section4CurrentIndex + 1;
        if (newIndex >= section4Slides.length) newIndex = 0;
        section4UpdateSlider(newIndex);
    });

    // Tracker item click
    section4TrackerItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            section4UpdateSlider(index);
        });
    });
});


// section 7 script
document.addEventListener('DOMContentLoaded', function () {
    const stepCards = document.querySelectorAll('.section-7-steps-card');

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    // Optionally unobserve the element after animation triggers
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            root: null, // Use the viewport as the root
            rootMargin: '0px',
            threshold: 0.1 // Trigger when 10% of the card is visible
        }
    );

    stepCards.forEach(card => {
        observer.observe(card);
    });
});
