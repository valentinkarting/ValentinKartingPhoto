// Sélection des éléments du DOM
const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('.carousel-images img');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0; // Index de l'image actuelle

// Fonction pour mettre à jour le défilement
function updateCarousel() {
  const offset = -currentIndex * 100; // Décalage en pourcentage
  carousel.style.transform = `translateX(${offset}%)`;
}

// Événements pour les boutons
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Retour au début si < 0
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Retour au début si dépasse la fin
  updateCarousel();
});
