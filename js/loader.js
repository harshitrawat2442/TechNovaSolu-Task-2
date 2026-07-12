// ==========================
// PRELOADER
// ==========================

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    if (!loader) return;

    // Smooth fade out
    loader.style.transition = "opacity 0.4s ease";
    loader.style.opacity = "0";

    // Remove after fade
    setTimeout(() => {

        loader.style.display = "none";

        // Enable smooth page appearance
        document.body.classList.add("loaded");

    }, 400);

});