/* Menu */
const bgMenuBtn = document.querySelector('#bg-menu-btn');
const menuContainer = document.querySelector('.menu-container');
const menuTabClose = document.querySelector('.menu-tab-close');
const arrowClose = document.querySelector('#arrowClose');
const arrowClose2 = document.querySelector('#arrowClose2');

bgMenuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'block';
  menuContainer.style.position = 'fixed';
});

menuTabClose.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

arrowClose.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

arrowClose2.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});