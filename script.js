const themeToggle = document.querySelector(".theme-toggle");

function setTheme(theme) {
  if (theme === "dark") {
    document.documentElement.style.setProperty("--bg-color", "#1b1b1b");
    document.documentElement.style.setProperty("--text-color", "#fdfdfd");
    document.documentElement.style.setProperty("--nav-bg", "#333");
    document.documentElement.style.setProperty("--footer-bg", "#111");
    themeToggle.textContent = "🌞";
  } else {
    document.documentElement.style.setProperty("--bg-color", "#fdfdfd");
    document.documentElement.style.setProperty("--text-color", "#1b1b1b");
    document.documentElement.style.setProperty("--nav-bg", "#7B1FA2");
    document.documentElement.style.setProperty("--footer-bg", "#2c2c2c");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", theme);
}

// Toggle mobile nav menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
