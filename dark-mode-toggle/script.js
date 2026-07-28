const toggleBtn = document.getElementById("toggleBtn");
const html = document.documentElement;

toggleBtn.addEventListener("click", () => {
    console.log("this part run");
    const currentTheme = html.getAttribute("data-theme"); // light or dark
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
});

// check for saved preference or default light mode
const currentTheme = localStorage.getItem("theme");
html.setAttribute("data-theme", currentTheme);