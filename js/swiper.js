// 大图swiper部分
var swiper = new Swiper(".mySwipers", {
    pagination: {
        el: ".swiper-pagination1",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },
    // 左右按钮
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const swiperImgs = document.querySelector('.swiperImgs')
const pics = document.querySelectorAll('.pic')
const closeSwiper = document.getElementById('closeSwiper')

// 鼠标移上去会图片移动
swiperImgs.addEventListener('mouseover', function (e) {
    // 获取鼠标x轴位置
    // console.log(e.clientX);
    // console.log(swiperImg.offsetWidth / 2);
    if (e.clientX > swiperImgs.offsetWidth / 2) {
        swiperImgs.style.marginLeft = '-960px'
    } else {
        swiperImgs.style.marginLeft = '0px'
    }
})
swiperImgs.addEventListener('mouseout', function (e) {
    swiperImgs.style.marginLeft = '-480px'
})
// 悬浮照片上 会出现文字和图标
pics.forEach(pic => {
    pic.addEventListener('mouseover', function () {
        const imgIcon = this.querySelector('.imgIcon')
        imgIcon.style.display = 'block'
    })
    pic.addEventListener('mouseout', function () {
        const imgIcon = this.querySelector('.imgIcon')
        imgIcon.style.display = 'none'
    })
    // 点击图片出现大图
    pic.addEventListener('click', function (e) {
        // console.log(e.target);
        // console.log(e.target.dataset);
        swiper.slideTo(e.target.dataset.index)
        bigSwiper.style.display = 'block';
    })
})

// 关闭大图
closeSwiper.addEventListener('click', function () {
    // console.log('@@@');
    bigSwiper.style.display = 'none';

})
