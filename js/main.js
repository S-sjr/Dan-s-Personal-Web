// 导航栏激活状态
// 简化版main.js - 只保留导航功能，用于调试语法错误
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

console.log('main.js已加载并执行');