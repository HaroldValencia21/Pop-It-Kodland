const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel-btn.left');
const nextBtn = document.querySelector('.carousel-btn.right');

let currentSlide = 0;

// Función para mover el carrusel
function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// Función para ir al siguiente slide
function goToNextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

// Función para ir al anterior slide
function goToPrevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Botones manuales
nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// Auto avance
let autoSlide = setInterval(goToNextSlide, 3000);

// Pausar auto-slide cuando el usuario usa botones
[nextBtn, prevBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(goToNextSlide, 3000);
  });
});

// Ajustar al redimensionar
window.addEventListener('resize', updateCarousel);

