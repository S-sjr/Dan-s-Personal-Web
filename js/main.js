// 导航栏激活状态
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-links a');

// 设置导航链接的激活状态
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// 轮播图功能
function initSlider() {
    const sliderImages = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    let slideInterval;

    // 显示指定幻灯片
    function showSlide(index) {
        // 隐藏所有幻灯片
        sliderImages.forEach(img => img.classList.remove('active'));
        indicators.forEach(ind => ind.classList.remove('active'));
        
        // 显示当前幻灯片
        sliderImages[index].classList.add('active');
        indicators[index].classList.add('active');
        currentSlide = index;
    }

    // 下一张幻灯片
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= sliderImages.length) next = 0;
        showSlide(next);
    }

    // 设置自动轮播
    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // 每5秒切换一次
    }

    // 点击指示器切换幻灯片
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideInterval);
            showSlide(index);
            startSlideshow();
        });
    });

    // 开始轮播
    startSlideshow();
}

// 页面加载完成后初始化轮播图
if (document.querySelector('.hero-slider')) {
    window.addEventListener('DOMContentLoaded', initSlider);
}

console.log('main.js已加载并执行');