// Add shadow to the header on scroll
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');

    // Throttle scroll event to improve performance
    const onScroll = () => {
        const currentScrollY = window.scrollY;

        // Toggle 'scrolled' class based on scroll position
        if (currentScrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    // Use passive listeners for better scrolling performance
    window.addEventListener('scroll', onScroll, { passive: true });
});

// Handle theme toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Load the current theme
    const currentTheme = localStorage.getItem('theme') ||
        (prefersDarkScheme.matches ? 'dark' : 'light');

    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    });
});

// Navbar toggle and blur effect for small screens
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector(".menu-icon-container");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");  
        const barsIcon = menuIcon.querySelector("i.fa-bars");
        const xmarkIcon = menuIcon.querySelector("i.fa-xmark");

        // Toggle icons between hamburger and close
        barsIcon.style.display = barsIcon.style.display === "none" ? "block" : "none";
        xmarkIcon.style.display = xmarkIcon.style.display === "none" ? "block" : "none";
    });
});


new Typed("#typed", {
    strings: ["Web Developer", "Designer", "Freelancer"],
    typeSpeed: 150,
    backSpeed: 30,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|",
});

//New Year effect window looping effects
window.onload = function () {

    setInterval(() => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 4000);
};


