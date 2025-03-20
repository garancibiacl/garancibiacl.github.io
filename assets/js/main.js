// Seleccionamos el navbar
let navbar = document.getElementById('navbar');

// Agregamos un evento de scroll
window.onscroll = function() {
  if (window.pageYOffset > 10) { // Cambia cuando se haya desplazado más de 50px
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};


let text = "Dev Front-End";
let i = 0;
let isDeleting = false; 
let speed = 150; // Velocidad de tipeo
let delayBeforeReverse = 1000; // Pausa antes de borrar
let minChars = 1; // Mínimo de caracteres antes de reiniciar
let typingText = document.getElementById("typing-text");

function typeEffect() {
    typingText.textContent = text.substring(0, i); // Mantiene el bloque sin saltos

    if (!isDeleting && i < text.length) {
        i++;
        setTimeout(typeEffect, speed);
    } else if (!isDeleting && i === text.length) {
        setTimeout(() => {
            isDeleting = true;
            typeEffect();
        }, delayBeforeReverse);
    } else if (isDeleting && i > minChars) {
        i--;
        setTimeout(typeEffect, speed);
    } else {
        isDeleting = false;
        setTimeout(typeEffect, speed);
    }
}

typeEffect();

function copiarAlPortapapeles(texto) {
  navigator.clipboard.writeText(texto)
      .then(() => {
          console.log("Texto copiado al portapapeles ✅");
      })
      .catch(err => {
          console.error("Error al copiar el texto", err);
      });
}

document.getElementById('year').textContent = new Date().getFullYear();

function copiarEmail() {
    let email = document.getElementById("email").textContent;
    navigator.clipboard.writeText(email).then(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Copiado!',
            text: 'El email ha sido copiado al portapapeles.',
            timer: 2000,
            showConfirmButton: false
        });
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}


document.addEventListener("DOMContentLoaded", () => {
    let sections = document.querySelectorAll(".animar");

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                let animation = entry.target.getAttribute("data-animation"); 
                entry.target.classList.add("animate__animated", animation, "visible");
            } else {
                // Si la sección deja de ser visible, la ocultamos nuevamente
                entry.target.classList.remove("visible", "animate__animated", entry.target.getAttribute("data-animation"));
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% de la sección es visible

    sections.forEach(section => {
        observer.observe(section);
    });
});




