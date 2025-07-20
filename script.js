const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

AOS.init({
  duration: 1000,     // animasyon süresi (ms cinsinden)
  once: true,         // sadece bir kez çalışsın
  easing: 'ease-in-out', // geçiş efekti
});

    function toggleMenu() {
        const menu = document.getElementById("fullscreenMenu");
        menu.classList.toggle("active");
    }
