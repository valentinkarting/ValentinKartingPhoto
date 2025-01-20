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