/*========== Menu Icon Navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/*========== Scroll Sections Active Link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    /*========== Sticky Navbar ==========*/
    let header = document.querySelector('.header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    /*========== Remove Menu Icon Navbar When Clicking a Navbar Link (Mobile) ==========*/
    if (window.innerWidth <= 768 && menuIcon && navbar) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

/*========== Swiper ==========*/
if (typeof Swiper !== 'undefined') {
    new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 50,
        loop: true,
        grabCursor: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

/*========== Dark Light Mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

if (darkModeIcon) {
    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('dark-mode');
    };
}

/*========== Download Button ==========*/
let downloadButton = document.getElementById("download-cv");

if (downloadButton) {
    downloadButton.addEventListener("click", function () {
        window.location.href =  "https://drive.google.com/file/d/1aAQSCquYNCjD-D3tmICIN5UVcNEOMnXd/view?usp=drive_link"; // Replace with actual file ID
    });
}


/*========== Scroll Reveal ==========*/
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal({
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
    ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
}


