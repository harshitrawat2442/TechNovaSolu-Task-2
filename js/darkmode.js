const themeToggle = document.getElementById("theme-toggle");

// Apply saved theme on every page
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Only if button exists (index.html)
if (themeToggle) {

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            localStorage.setItem("theme", "light");
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }

    });

}