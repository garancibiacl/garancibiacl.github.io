window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


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
          console.log("garancibiacl@gmail.com copiado al portapapeles ✅");
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
            text: 'El email garancibiacl@gmail.com ha sido copiado al portapapeles.',
            timer: 2000,
            showConfirmButton: false
        });
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}


// START ANIMACION SECCIONES CON ANIMATE.CSS
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".animar");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const animationIn = entry.target.getAttribute("data-animation-in");
            const animationOut = entry.target.getAttribute("data-animation-out");

            if (entry.isIntersecting) {
                entry.target.classList.remove("animate__animated", animationOut);
                entry.target.classList.add("animate__animated", animationIn, "visible");
            } else {
                entry.target.classList.remove("animate__animated", animationIn);
                entry.target.classList.add("animate__animated", animationOut);
            }
        });
    }, { threshold: 0.3 }); // Se activa cuando el 30% de la sección es visible

    sections.forEach(section => {
        observer.observe(section);
    });
});

// FIN ANIMACION SECCIONES CON ANIMATE.CSS


document.getElementById("scrollIndicator").addEventListener("click", function() {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 2, // 👈 Espacio mínimo entre badges
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000, // 👈 Movimiento súper lento (15s)
    freeMode: true,
    allowTouchMove: false, // 👈 Evita interrupciones del usuario
    loopAdditionalSlides: 1, // 👈 Previene saltos al volver al inicio
});