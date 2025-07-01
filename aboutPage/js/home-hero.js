document.addEventListener('DOMContentLoaded', () => {
    // Preloader Animation
    const preloaderFill = document.querySelector('.prloader-fill');
    const preloaderTop = document.querySelector('.preloader-top');
    const preloaderBottom = document.querySelector('.preloader-bottom');
    const preloader = document.querySelector('.preloader');

    // Step 1: Expand the line from center-left to center-right (250px)
    setTimeout(() => {
        preloaderFill.classList.add('expanded');

        // Step 2: Fade out the line after it expands
        setTimeout(() => {
            preloaderFill.classList.add('hidden');

            // Step 3: Slide open the top and bottom halves
            setTimeout(() => {
                preloaderTop.classList.add('open');
                preloaderBottom.classList.add('open');

                // Step 4: Hide the preloader after the slide animation
                setTimeout(() => {
                    preloader.classList.add('hidden');
                }, 1000); // Matches the slide animation duration (1s)
            }, 500); // Delay to ensure the line is visible (0.5s)
        }, 1500); // Matches the line expansion duration (1.5s)
    }, 100); // Initial delay before starting the animation

    // Scroll Indicator
    const indicatorWrapper = document.querySelector('.indicator-wrapper');
    const indicatorFill = document.querySelector('.indicator-fill');
    
    const updateScrollIndicator = () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const wrapperHeight = indicatorWrapper.offsetHeight;
        const scrollFraction = scrollTop / documentHeight;
        const maxTop = wrapperHeight - 100; // subtract fill height (100px)
        const fillTop = scrollFraction * maxTop;
    
        indicatorFill.style.top = `${fillTop}px`;
    };
    
    window.addEventListener('scroll', updateScrollIndicator);
    window.addEventListener('resize', updateScrollIndicator);
    

        // Sidebar Toggle
        const homeHeroHamburgerButton = document.querySelector('.header-hamburger');
        const homeHeroCloseButton = document.querySelector('.sidebar-closebtn');
        const homeHeroOverlay = document.getElementById('header-overlay');
        const homeHeroSidebar = document.getElementById('sidebar');

        // Toggle function
        const toggleSidebar = () => {
            homeHeroSidebar.classList.toggle('open');
            homeHeroOverlay.classList.toggle('active');
            document.body.classList.toggle('sidebar-open');
        };

        // Close function
        const closeSidebar = () => {
            homeHeroSidebar.classList.remove('open');
            homeHeroOverlay.classList.remove('active');
            document.body.classList.remove('sidebar-open');
        };

        // Add toggle triggers
        homeHeroHamburgerButton.addEventListener('click', toggleSidebar);
        homeHeroCloseButton.addEventListener('click', closeSidebar);
        homeHeroOverlay.addEventListener('click', closeSidebar);

        // Detect click outside sidebar
        document.addEventListener('click', function (event) {
            const isClickInsideSidebar = homeHeroSidebar.contains(event.target);
            const isClickHamburger = homeHeroHamburgerButton.contains(event.target);
            
            if (!isClickInsideSidebar && !isClickHamburger && homeHeroSidebar.classList.contains('open')) {
                closeSidebar();
            }
        });


    // Header Scroll Effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById("header");
        if (window.scrollY >= 65) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Dropdown Toggle on Click
    const dropbtn = document.querySelector('.dropbtn');
    const dropdown = document.querySelector('.dropdown');

    dropbtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent the click from bubbling up and triggering the document click listener
        dropdown.classList.toggle('active');
        const isExpanded = dropdown.classList.contains('active');
        dropbtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
            dropbtn.setAttribute('aria-expanded', 'false');
        }
    });

    // === Slider Functionality ===
    const sliderMask = document.getElementById('hero-slider-mask');
    const slideTemplate = document.querySelector('.hero-slide');
    const homeHero = document.getElementById('home-hero');
    let currentSlide = 0;

    const locations = [
        {
            name: "Thessaloniki, Greece",
            price: "Starting at $6700",
            background: "url('https://cdn.prod.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg')",
            link: "https://webflow-path-three.webflow.io/vacations/thessaloniki"
        },
        {
            name: "Bahariya Oasis, Egypt",
            price: "Starting at $6400",
            background: "url('https://cdn.prod.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg')",
            link: "https://webflow-path-three.webflow.io/vacations/bahariya-oasis"
        },
        {
            name: "Denpasar, Indonesia",
            price: "Starting at $1900",
            background: "url('https://cdn.prod.website-files.com/606764630d23c37bf9d41bb1/607dcd2961c3e396968aac28_031.jpeg')",
            link: "https://webflow-path-three.webflow.io/vacations/denpasar"
        }
    ];

    if (sliderMask && slideTemplate && homeHero) {
        locations.forEach((location, index) => {
            const slide = slideTemplate.cloneNode(true);
            const [city, country] = location.name.split(', ');
            const priceValue = location.price.replace('Starting at $', '');

            slide.setAttribute('aria-label', `${index + 1} of ${locations.length}`);
            const headings = slide.querySelectorAll('.featured-location-heading');
            if (headings.length >= 3) {
                headings[0].textContent = city;
                headings[2].textContent = country;
            }
            const priceSubtitle = slide.querySelector('.price-grid .subtitle');
            if (priceSubtitle) priceSubtitle.textContent = priceValue;
            const locationLink = slide.querySelector('.featured-location');
            if (locationLink) locationLink.href = location.link;
            const navigateArrow = slide.querySelector('.navigate-arrow');
            if (navigateArrow) navigateArrow.href = location.link;

            sliderMask.appendChild(slide);
        });

        slideTemplate.remove();
        const slides = document.querySelectorAll('.hero-slide');
        const totalSlides = slides.length;

        function updateSlider() {
            sliderMask.style.transform = `translateX(-${currentSlide * 100}%)`;
            slides.forEach((slide, index) => {
                slide.toggleAttribute('aria-hidden', index !== currentSlide);
                slide.style.visibility = index === currentSlide ? 'visible' : 'hidden';
            });
            homeHero.style.backgroundImage = locations[currentSlide].background;
            const navigateArrow = slides[currentSlide].querySelector('.navigate-arrow');
            if (navigateArrow) navigateArrow.href = locations[currentSlide].link;
        }

        slides.forEach((slide) => {
            const prevArrow = slide.querySelector('.w-slider-arrow-left');
            const nextArrow = slide.querySelector('.w-slider-arrow-right');

            if (prevArrow) {
                prevArrow.addEventListener('click', () => {
                    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                    updateSlider();
                });
            }
            if (nextArrow) {
                nextArrow.addEventListener('click', () => {
                    currentSlide = (currentSlide + 1) % totalSlides;
                    updateSlider();
                });
            }
        });

        updateSlider();
    } else {
        console.warn('Slider elements not found.');
    }

    

    //video part
    
        const videoButton = document.querySelector('.hero-video-button');
        const videoHoverButton = document.querySelector('.video-hover-button');
        const videoBackground = document.querySelector('.video-button-background');
        const waves = document.querySelector('.video-button-waves');
        const backgroundVideo = document.querySelector('#button-video');
        const videoPopup = document.querySelector('.video-popup');
        const videoPopupClose = document.querySelector('.video-popup-close');
        const popupVideo = document.querySelector('#popup-video');

        // Show waves, expand background, and play video on hover
        videoButton.addEventListener('mouseenter', () => {
            waves.style.display = 'block';
            videoBackground.style.transform = 'scale(2)';
            backgroundVideo.play(); // Play the background video on hover
        });

        videoButton.addEventListener('mouseleave', () => {
            waves.style.display = 'none';
            videoBackground.style.transform = 'scale(0)';
            backgroundVideo.pause(); // Pause the background video on mouse leave
            backgroundVideo.currentTime = 0; // Reset to start
        });

        // Show pop-up and play YouTube video on click
        videoHoverButton.addEventListener('click', () => {
            videoPopup.classList.add('active');
            // The YouTube video will autoplay due to the ?autoplay=1 parameter in the iframe src
        });

         // Close popup and stop video
        videoPopupClose.addEventListener('click', () => {
            videoPopup.classList.remove('active');
            popupVideo.src = ""; // reset completely
        });

        // Close when clicking outside the content
        videoPopup.addEventListener('click', (e) => {
            if (e.target === videoPopup) {
                videoPopup.classList.remove('active');
                popupVideo.src = ""; // reset to stop video
            }
        });
});