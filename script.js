const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.carousel__btn--left');
const nextBtn = document.querySelector('.carousel__btn--right');

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

// Función para ir al slide anterior
function goToPrevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Eventos de botones
nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// Auto avance
let autoSlide = setInterval(goToNextSlide, 3000);

// Reiniciar autoSlide al hacer click manual
[nextBtn, prevBtn].forEach(btn => {
  btn.addEventListener('click', () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(goToNextSlide, 3000);
  });
});

// Actualiza el tamaño al redimensionar
window.addEventListener('resize', updateCarousel);

// Inicializa el carrusel
updateCarousel();
