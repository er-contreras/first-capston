/* Menu */
const bgMenuBtn = document.querySelector('#bg-menu-btn');
const menuContainer = document.querySelector('.menu-container');
const menuTabClose = document.querySelector('.menu-tab-close');

bgMenuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'block';
  menuContainer.style.position = 'fixed';
});

menuTabClose.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});
