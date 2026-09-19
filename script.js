// ===============================
// SOFAIN WEBSITE
// ===============================


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn) {

    menuBtn.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


// CLOSE MOBILE MENU AFTER CLICK

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


// SCROLL TOP BUTTON

const topBtn =
    document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


if (topBtn) {

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// DOWNLOAD BUTTON FEEDBACK

const downloadButtons =
    document.querySelectorAll(".download-btn");

downloadButtons.forEach(button => {

    button.addEventListener("click", () => {

        const originalText =
            button.innerHTML;

        button.innerHTML =
            "<span>✓</span> Starting download...";

        setTimeout(() => {

            button.innerHTML =
                originalText;

        }, 2500);

    });

});


// SIMPLE FADE-IN ANIMATION

const cards =
    document.querySelectorAll(
        ".download-card, .feature-card, .file-box"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(card);

});


// CURRENT YEAR

const year =
    new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.textContent =
        `© ${year} SOFAIN. All rights reserved.`;

}
