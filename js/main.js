// 导航栏激活状态
const currentPage = window.location.pathname.split('/').pop();
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// 表单提交
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('感谢您的留言，我会尽快回复您！');
        this.reset();
    });
}

// 图片轮播功能 - 自动播放，无控制按钮
const initSlider = () => {
    const sliderImages = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.indicator');
    
    // 如果没有轮播元素则不初始化
    if (!sliderImages.length || !indicators.length) {
        return;
    }
    
    let currentIndex = 0;
    let slideInterval;
    const slideDelay = 3000; // 3秒切换一次，符合用户要求
    
    // 显示指定索引的幻灯片 - 优化动画效果
    const showSlide = (index) => {
        // 添加淡出动画到当前激活的幻灯片
        const activeSlide = document.querySelector('.slider-image.active');
        if (activeSlide) {
            activeSlide.style.opacity = '0';
            
            // 等待淡出动画完成后，再隐藏并显示下一张
            setTimeout(() => {
                activeSlide.classList.remove('active');
                
                // 隐藏所有幻灯片
                sliderImages.forEach(img => {
                    img.style.opacity = '0';
                });
                
                // 移除所有指示器的激活状态
                indicators.forEach(indicator => {
                    indicator.classList.remove('active');
                });
                
                // 显示当前幻灯片并激活对应的指示器
                sliderImages[index].classList.add('active');
                sliderImages[index].style.opacity = '1';
                indicators[index].classList.add('active');
                
                currentIndex = index;
            }, 500); // 与CSS中的transition时间一致
        } else {
            // 初始化第一张幻灯片
            sliderImages[index].classList.add('active');
            sliderImages[index].style.opacity = '1';
            indicators[index].classList.add('active');
            currentIndex = index;
        }
    };
    
    // 下一张幻灯片
    const nextSlide = () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= sliderImages.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    };
    
    // 开始自动轮播
    const startSlideInterval = () => {
        slideInterval = setInterval(nextSlide, slideDelay);
    };
    
    // 停止自动轮播
    const stopSlideInterval = () => {
        clearInterval(slideInterval);
    };
    
    // 点击指示器切换到对应的幻灯片
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopSlideInterval();
            showSlide(index);
            startSlideInterval();
        });
    });
    
    // 鼠标悬停在轮播区域时暂停自动轮播
    const sliderContainer = document.querySelector('.hero-slider');
    sliderContainer.addEventListener('mouseenter', stopSlideInterval);
    sliderContainer.addEventListener('mouseleave', startSlideInterval);
    
    // 初始化并启动自动轮播
    showSlide(0);
    startSlideInterval();
};

// 当DOM加载完成后初始化轮播
document.addEventListener('DOMContentLoaded', initSlider);