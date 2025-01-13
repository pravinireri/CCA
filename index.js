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
