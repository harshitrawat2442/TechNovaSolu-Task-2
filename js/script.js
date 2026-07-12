/*=========================================
        TECHNOVA SOLUTIONS
            script.js
=========================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
        MOBILE MENU
    =========================*/

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {

                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-times");

            }

        });

    }

    /*=========================
        CLOSE MENU
    =========================*/

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            if (navMenu) navMenu.classList.remove("active");

            if (menuBtn) {

                const icon = menuBtn.querySelector("i");

                if (icon) {

                    icon.classList.remove("fa-times");
                    icon.classList.add("fa-bars");

                }

            }

        });

    });

    /*=========================
        ACTIVE NAV LINK
    =========================*/

    const currentPage = location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(link => {

        if (link.getAttribute("href") === currentPage) {

            link.classList.add("active");

        }

    });

    /*=========================
        SCROLL REVEAL
    =========================*/

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.10

    });

    sections.forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

    /*=========================
        IMAGE HOVER
    =========================*/

    document.querySelectorAll("img").forEach(img => {

        img.addEventListener("mouseenter", () => {

            img.style.transform = "scale(1.02)";

        });

        img.addEventListener("mouseleave", () => {

            img.style.transform = "scale(1)";

        });

    });

    /*=========================
        RIPPLE BUTTON
    =========================*/

    document.querySelectorAll(".ripple").forEach(button => {

        button.addEventListener("click", function (e) {

            const ripple = document.createElement("span");

            const size = Math.max(this.clientWidth, this.clientHeight);

            ripple.style.width = ripple.style.height = size + "px";

            ripple.style.left = (e.offsetX - size / 2) + "px";

            ripple.style.top = (e.offsetY - size / 2) + "px";

            ripple.className = "ripple-effect";

            const oldRipple = this.querySelector(".ripple-effect");

            if (oldRipple) oldRipple.remove();

            this.appendChild(ripple);

        });

    });

});

/*=========================
    PAGE LOADED
=========================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});