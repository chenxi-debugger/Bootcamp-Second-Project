//section 2
const destinations = [
  {
    name: "France",
    image: "../image/607dcd1ef1d9b0b767714525_001.jpeg",
    link: "https://webflow-path-three.webflow.io/location/france"
  },
  {
    name: "Indonesia",
    image: "../image/607dcd2961c3e396968aac28_031.jpeg",
    link: "https://webflow-path-three.webflow.io/location/indonesia"
  },
  {
    name: "Greece",
    image: "../image/home-hero-background.jpeg",
    link: "https://webflow-path-three.webflow.io/location/greece"
  },
  {
    name: "Egypt",
    image: "../image/607dcd3ca4b006d82a3c6859_026.jpeg",
    link: "https://webflow-path-three.webflow.io/location/egypt"
  }
];

const grid = document.getElementById('section-2-destination-grid');
const prevArrow = document.getElementById('section-2-prev-arrow');
const nextArrow = document.getElementById('section-2-next-arrow');

let currentIndex = 1;

// Create cards 
const createCard = (dest) => {
  const a = document.createElement('a');
  a.href = dest.link;
  a.className = 'section-2-location-card-wrapper';

  a.innerHTML = `
  <div class="section-2-location-card-padding">
    <div class="section-2-location-card-inner">
      <div class="section-2-location-image-wrapper">
        <div class="section-2-location-image" style="background-image: url('${dest.image}')">
          <div class="section-2-gradient-overlay"></div>
        </div>
      </div>
      <div class="section-2-location-card-content">
        <div class="section-2-subtitle-dynamic-text">6 Vacations</div>
        <h2>${dest.name}</h2>
      </div>
      <div class="image-overlay top"></div>
      <div class="image-overlay bottom"></div>
    </div>
  </div>
`;

  return a;
};


const firstClone = createCard(destinations[0]);
const lastClone = createCard(destinations[destinations.length - 1]);

grid.appendChild(lastClone);
destinations.forEach(dest => grid.appendChild(createCard(dest)));
grid.appendChild(firstClone);

let cards = document.querySelectorAll('.section-2-location-card-wrapper');

function updateSlider() {
  const GAP = 30;
  const offset = (cards[0].offsetWidth + GAP) * currentIndex;
  grid.style.transform = `translateX(calc(50% - ${(offset + cards[0].offsetWidth / 2)}px))`;


  cards.forEach(c => c.classList.remove('active'));
  cards[currentIndex].classList.add('active');
}

prevArrow.addEventListener('click', () => {
  if (currentIndex <= 0) return;
  currentIndex--;
  updateSlider();
  fixLoop();
});

nextArrow.addEventListener('click', () => {
  if (currentIndex >= cards.length - 1) return;
  currentIndex++;
  updateSlider();
  fixLoop();
});

function fixLoop() {
  setTimeout(() => {
    if (currentIndex === 0) {
      currentIndex = destinations.length;
      grid.style.transition = 'none';
      updateSlider();
      requestAnimationFrame(() => grid.style.transition = 'transform 0.5s ease');
    }
    if (currentIndex === cards.length - 1) {
      currentIndex = 1;
      grid.style.transition = 'none';
      updateSlider();
      requestAnimationFrame(() => grid.style.transition = 'transform 0.5s ease');
    }
  }, 500);
}

// Initial Setup
window.addEventListener('load', () => {
  cards = document.querySelectorAll('.section-2-location-card-wrapper');
  updateSlider();

  // Animate all cards once on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        grid.classList.add('animate-all');
        observer.disconnect();
      }
    });
  }, { threshold: 0.4 });

  observer.observe(grid);
});

window.addEventListener('resize', updateSlider);

// Sction 3 JavaScript
    // Dropdown Toggle on Click
    const dropbtn = document.querySelector('.section-3-dropbtn');
    const dropdown = document.querySelector('.section-3-dropdown');

    dropbtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('section-3-active');
      const isExpanded = dropdown.classList.contains('section-3-active');
      dropbtn.setAttribute('aria-expanded', isExpanded);
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('section-3-active');
        dropbtn.setAttribute('aria-expanded', 'false');
      }
    });


    const image = document.querySelector('.section-3-image');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            image.classList.add('revealed');
            observer.unobserve(image); // only animate once
        }
        });
    }, {
        threshold: 0.5 // trigger when 50% of image is visible
    });

    observer.observe(image);