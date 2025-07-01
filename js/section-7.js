// Section 7 animation
  const section7Image = document.querySelector('.section-7-hero-background-image');
  const observer7 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section7Image.classList.add('revealed');
        observer7.unobserve(section7Image);
      }
    });
  }, { threshold: 0.5 });
  observer7.observe(section7Image);

