// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false,
    },
});

// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Smooth scroll for Know More button
document.getElementById('knowMoreButton').addEventListener('click', function() {
    document.getElementById('more').scrollIntoView({ behavior: 'smooth' });
});

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));


// For imporatance box
document.addEventListener("DOMContentLoaded", function() {
    const importanceBoxes = document.querySelectorAll('.importance-box');

    function handleScroll() {
        importanceBoxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (boxTop < windowHeight - 50) {
                box.style.opacity = 1;
                box.style.transform = "translateY(0)";
            } else {
                box.style.opacity = 0;
                box.style.transform = "translateY(50px)";
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
});

