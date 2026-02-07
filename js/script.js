/* ================= MOBILE MENU ================= */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Close menu when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});


/* ================= THEME TOGGLE ================= */

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

// Load saved theme on page load
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

// Switch theme + save preference
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme);


/* ================= FOOTER DATE ================= */

const dateElement = document.querySelector("#datee");
if (dateElement) {
  dateElement.innerHTML = new Date().getFullYear();
}
