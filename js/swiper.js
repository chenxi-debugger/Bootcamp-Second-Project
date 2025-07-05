
        window.addEventListener('load', function () {
          var swiper = new Swiper(".mySwipers", {
            pagination: {
              el: ".swiper-pagination1",
              clickable: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
              },
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
      
          const swiperImgs = document.querySelector('.swiperImgs');
          const pics = document.querySelectorAll('.pic');
          const closeSwiper = document.getElementById('closeSwiper');
          const bigSwiper = document.getElementById('bigSwiper');
      
          swiperImgs.addEventListener('mouseover', function (e) {
            if (e.clientX > swiperImgs.offsetWidth / 2) {
              swiperImgs.style.marginLeft = '-960px';
            } else {
              swiperImgs.style.marginLeft = '0px';
            }
          });
      
          swiperImgs.addEventListener('mouseout', function () {
            swiperImgs.style.marginLeft = '-480px';
          });
      
          pics.forEach(pic => {
            pic.addEventListener('mouseover', function () {
              const imgIcon = this.querySelector('.imgIcon');
              imgIcon.style.display = 'block';
            });
            pic.addEventListener('mouseout', function () {
              const imgIcon = this.querySelector('.imgIcon');
              imgIcon.style.display = 'none';
            });
            pic.addEventListener('click', function (e) {
              swiper.slideTo(Number(e.target.dataset.index));
              bigSwiper.style.display = 'block';
            });
          });
      
          closeSwiper.addEventListener('click', function () {
            bigSwiper.style.display = 'none';
          });
        });
