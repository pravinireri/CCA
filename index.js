/* MENU */

const menuButton = document.getElementById('menu-button');
const closeButton = document.getElementById('close-button');
const overlay = document.getElementById('overlay');

// Show overlay
menuButton.addEventListener('click', () => {
  overlay.style.display = 'flex';
});

// Hide overlay
closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
});


/* PRELOADER */

document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const mainContent = document.getElementById("main-content");

  // Simulated Delay
  setTimeout(() => {
    preloader.classList.add("hidden"); // fade-out effect
    mainContent.classList.remove("hidden"); // reveals main content
  }, 1600); // delay
});