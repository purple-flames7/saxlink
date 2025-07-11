const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".pricing-tab");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Deactivate all buttons
    tabButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Hide all tabs
    tabs.forEach((tab) => tab.classList.add("hidden"));

    // Show selected tab
    const tabId = btn.getAttribute("data-tab");
    document.getElementById(`${tabId}-tab`).classList.remove("hidden");
  });
});
