// Seleccionamos el navbar
let navbar = document.getElementById('navbar');

// Agregamos un evento de scroll
window.onscroll = function() {
  if (window.pageYOffset > 50) { // Cambia cuando se haya desplazado más de 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
