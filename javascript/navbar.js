const hamburgerMenu = document.querySelector('.menu-toggle input');
const navbar = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', function () {
  navbar.classList.toggle('slide');
});
