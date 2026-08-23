// Navigasi Mobile Menu (Hamburger Toggle)
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Tutup menu otomatis setelah klik link (untuk mode mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Typewriter Effect
document.addEventListener("DOMContentLoaded", () => {
    const option = {
        strings: [
            "Xcelsior SMANSA 2026.",
            "Angkatan 67.",
            "Generasi Unggul dan Kreatif.",
        ],

        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,

        showCursor: true,
        cursorChar: "_",
        autoInsertCss: true,
    };

    const typed = new Typed("#typed-text", option);
});
