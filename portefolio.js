// Sélection des éléments
const photos = document.querySelectorAll('.photo');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.getElementById('close-btn');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const modalCaption = document.getElementById('modal-caption');

let currentIndex = 0;

// Fonction pour ouvrir la modale
function openModal(index) {
    currentIndex = index;
    modalImage.src = photos[currentIndex].src;
    // Extrait le nom du fichier de l'URL et le met dans le paragraphe
    modalCaption.textContent = photos[currentIndex].src.split('/').pop();
    modal.style.display = 'flex';
}

// Fonction pour fermer la modale
function closeModal() {
    modal.style.display = 'none';
}

// Fonction pour naviguer
function prevImage() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    modalImage.src = photos[currentIndex].src;
    modalCaption.textContent = photos[currentIndex].src.split('/').pop(); // Mise à jour du nom
}

function nextImage() {
    currentIndex = (currentIndex + 1) % photos.length;
    modalImage.src = photos[currentIndex].src;
    modalCaption.textContent = photos[currentIndex].src.split('/').pop(); // Mise à jour du nom
}

// Ajout des événements
photos.forEach((photo, index) => {
    photo.addEventListener('click', () => openModal(index));
});

closeButton.addEventListener('click', closeModal);
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);

modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
});


// Sélection de la fenêtre modale de bienvenue et du bouton
const welcomeModal = document.getElementById("welcome-modal");
const welcomeBtn = document.getElementById("welcome-btn");

// Désactiver le scroll et interactions tant que la modale est active
document.body.style.overflow = "hidden";

// Fermer la modale et activer l'accès à la page
welcomeBtn.addEventListener("click", () => {
    welcomeModal.style.display = "none";
    document.body.style.overflow = "auto"; // Réactive le scroll
});


