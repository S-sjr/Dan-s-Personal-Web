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