// --- Modal de bienvenida ---
const modal = document.getElementById("welcome-modal");
const enterBtn = document.getElementById("enter-btn");
const music = document.getElementById("music");

enterBtn.addEventListener("click", () => {
  modal.style.display = "none";
  music.play();
});

// --- Cuenta regresiva ---
const eventDate = new Date("2025-11-22T12:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  if (distance < 0) clearInterval(countdown);
}, 1000);
// --- CONFETI DORADO 🎊 ---
function lanzarConfeti() {
  const cantidad = 60; // cantidad de partículas
  for (let i = 0; i < cantidad; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    // posición y tamaño aleatorio
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 3 + Math.random() * 3 + "s";
    confetti.style.width = confetti.style.height = 5 + Math.random() * 7 + "px";

    // color dorado con variaciones
    const colores = ["#FFD700", "#FFEC8B", "#FDD017", "#EAC117"];
    confetti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];

    // eliminar después de la animación
    setTimeout(() => confetti.remove(), 6000);
  }
}

// Se lanza automáticamente al entrar
enterBtn.addEventListener("click", () => {
  modal.style.display = "none";
  music.play();
  lanzarConfeti();
});
// CARRUSEL DE FOTOS
// === CARRUSEL AUTOMÁTICO DE FOTOS ===
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  // Oculta todas las imágenes
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Avanza al siguiente slide
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  // Quita la clase 'active' de los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Muestra el slide actual y activa su punto
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Cambia cada 5 segundos (ajusta a gusto)
  setTimeout(showSlides, 10000);
}

// Flechas manuales (si las tienes)
function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}


