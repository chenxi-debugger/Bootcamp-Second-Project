const section5Data = [
      {
        country: "Egypt",
        dotClass: "one",
        vacations: [
          { title: "Bahariya Oasis", image: "../image/607dd011e021d45c28b27a10_021.jpeg", price: 6400, link: "https://webflow-path-three.webflow.io/vacations/bahariya-oasis" },
          { title: "Sahl Hasheesh", image:"../image/607dd011e021d4d191b27a11_022.jpeg", price: 7700, link: "https://webflow-path-three.webflow.io/vacations/sahl-hasheesh" },
          { title: "Alexandria", image: "../image/607dd02d03615176c83d10e5_024.jpeg", price: 5300, link: "https://webflow-path-three.webflow.io/vacations/alexandria"},
        ],
      },
      {
        country: "Greece",
        dotClass: "two",
        vacations: [
          { title: "Palaiokastritsa", image: "../image/607dcee44ed8fe667ad63e34_013.jpeg", price: 5600, link: "https://webflow-path-three.webflow.io/vacations/palaiokastritsa" },
          { title: "Meteora", image: "../image/607dceb50894ded296b2297d_019.jpeg", price: 2800, link: "https://webflow-path-three.webflow.io/vacations/meteora" },
          { title: "Thessaloniki", image: "../image/home-hero-background.jpeg", price: 6700, link: "https://webflow-path-three.webflow.io/vacations/thessaloniki" },
        ],
      },
      {
        country: "Indonesia",
        dotClass: "three",
        vacations: [
          { title: "Canggu", image: "../image/607dd099bae3eb2843495ff1_034.jpeg", price: 6500, link: "https://webflow-path-three.webflow.io/vacations/canggu" },
          { title: "Komodo", image: "../image/607dd099bae3eb0eaf495fc9_035.jpeg", price: 7600, link: "https://webflow-path-three.webflow.io/vacations/komodo" },
          { title: "Penida Island", image: "../image/607dd0b068e13e9e0a4aa1e0_036.jpeg", price: 2800, link: "https://webflow-path-three.webflow.io/vacations/penida-island"},
        ],
      },
      {
        country: "France",
        dotClass: "four",
        vacations: [
          { title: "Bonifacio", image: "../image/607dcd1ef1d9b0b767714525_001.jpeg", price: 1400, link: "https://webflow-path-three.webflow.io/vacations/bonifacio" },
          { title: "Brittany", image: "../image/607dcd5d6a5c000c4f1cf28e_005.jpeg", price: 3600, link: "https://webflow-path-three.webflow.io/vacations/brittany" },
          { title: "Carcassonne", image: "../image/607dcd73bae3eb8d1e477694_004.jpeg", price: 3900, link: "https://webflow-path-three.webflow.io/vacations/carcassonne" },
        ],
      }
    ];
    

    const tabMenu = document.getElementById("section5-tab-menu");
    const tabContent = document.getElementById("section5-tabs-content");

    let section5CurrentIndex = 0;

    function renderSection5() {
    tabMenu.innerHTML = section5Data.map((tab, i) => `
        <div class="section-5-vacations-tab-link ${i === 0 ? 'w--current' : ''}" data-index="${i}" role="tab" aria-selected="${i === 0}" tabindex="${i === 0 ? '0' : '-1'}">
        <div>${tab.country}</div>
        <div class="section-5-membership-circle">
            <div class="section-5-membership-dot ${tab.dotClass}"></div>
            <div class="section-5-membership-outline-circle"></div>
        </div>
        </div>
    `).join('') + tabMenu.innerHTML;

    tabContent.innerHTML = section5Data.map((tab, i) => `
        <div class="section-5-w-tab-pane ${i === 0 ? 'w--tab-active' : ''}">
        <div class="section-5-popular-vacations-wrapper">
            ${tab.vacations.map(v => `
            <div class="section-5-card-wrapper visible">
                <div class="section-5-vacations-verticle-card">
                <div class="section-5-verticle-card-image">
                    <div class="section-5-hero-background-image" style="background-image: url(${v.image})"></div>
                </div>
                <div class="section-5-vacation-card-bottom">
                    <h3>${v.title}</h3>
                    <p>Lorem ipsum dolor sit amet.</p>
                    <div style="margin: 10px 0; font-weight: bold;">Rates from: $${v.price}</div>
                    <a href="${v.link}" class="section-5-outline-button">Details</a>
                </div>
                </div>
            </div>
            `).join('')}
        </div>
        </div>
    `).join('');
    }

    function updateTab(index) {
    const tabs = tabMenu.querySelectorAll('.section-5-vacations-tab-link');
    const panes = tabContent.querySelectorAll('.section-5-w-tab-pane');
    const totalTabs = tabs.length;
    const indicatorFill = tabMenu.querySelector(".section-5-location-indicator-fill"); // Re-query here
    const dots = tabMenu.querySelectorAll('.section-5-membership-dot'); // Select all dots


    tabs.forEach((tab, i) => {
        tab.classList.toggle('w--current', i === index);
        tab.setAttribute('aria-selected', i === index);
        tab.setAttribute('tabindex', i === index ? '0' : '-1');
    });

    panes.forEach((pane, i) => {
        pane.classList.toggle('w--tab-active', i === index);
    });

    indicatorFill.style.width = `${(index + 1) * (100 / totalTabs)}%`; // Simplified calculation

    dots.forEach((dot, i) => {
      if (i <= index) {
        dot.classList.add('active-dot'); // Dark color for current and previous dots
      } else {
        dot.classList.remove('active-dot'); // Light color for future dots
      }
    });
    
    section5CurrentIndex = index;
    }



    document.addEventListener('DOMContentLoaded', () => {
    renderSection5();
    updateTab(section5CurrentIndex);

    tabMenu.addEventListener('click', (e) => {
        const tab = e.target.closest('.section-5-vacations-tab-link');
        if (tab) {
        const index = parseInt(tab.dataset.index);
        if (!isNaN(index)) {
            updateTab(index);
        }
        }
    });
    });

