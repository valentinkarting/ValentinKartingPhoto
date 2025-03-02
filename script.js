// Sélectionner les images et les bullets
const images = document.querySelectorAll('.carousel-image');
const bullets = document.querySelectorAll('.carousel-bullet');
let currentIndex = 0;

// Fonction pour afficher l'image active
function showImage(index) {
    // Masquer toutes les images
    images.forEach(img => img.classList.remove('active'));
    // Afficher l'image active
    images[index].classList.add('active');

    // Mettre à jour les bullets
    bullets.forEach(bullet => bullet.classList.remove('active'));
    bullets[index].classList.add('active');
}

// Initialiser le carrousel avec la première image
showImage(currentIndex);

// Ajouter des écouteurs d'événements sur chaque bullet
bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});


// bouton pour fermer le texte qui défile 
// Sélectionne le bouton et l'élément du texte défilant
const toggleButton = document.getElementById('toggleText');
const scrollingText = document.querySelector('.scrolling-text');

toggleButton.addEventListener('click', function() {
  // Vérifie si le texte a déjà la classe 'paused'
  if (scrollingText.classList.contains('paused')) {
    // Relance l'animation en retirant la classe 'paused'
    scrollingText.classList.remove('paused');
    toggleButton.textContent = 'Arrêter le texte';
  } else {
    // Met l'animation en pause en ajoutant la classe 'paused'
    scrollingText.classList.add('paused');
    toggleButton.textContent = 'Afficher le texte';
  }
});