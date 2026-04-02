
document.addEventListener("DOMContentLoaded", function () {

  const images = document.querySelectorAll(".clickable-image");
  console.log("images trouvées :", images.length);

});

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

  // 🔹 récupère la langue actuelle
  const lang = localStorage.getItem("lang") || "fr";

  // 🔹 sécurise l'accès aux traductions
  const t = (window.translations && window.translations[lang]) 
            ? window.translations[lang] 
            : {};

  // Vérifie si le texte a déjà la classe 'paused'
  if (scrollingText.classList.contains('paused')) {

    // Relance l'animation
    scrollingText.classList.remove('paused');

    // 🔥 texte traduit (avec fallback)
    toggleButton.textContent = t["toggleText"] || "Arrêter le texte";

  } else {

    // Met en pause
    scrollingText.classList.add('paused');

    // 🔥 texte traduit (avec fallback)
    toggleButton.textContent = t["toggleTextPlay"] || "Afficher le texte";
  }

});


document.addEventListener("DOMContentLoaded", function () {

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close");
  const modalBox = document.querySelector(".modal-box");

  // sélectionner toutes les images cliquables
  const images = document.querySelectorAll(".clickable-image");
  console.log("images trouvées :", images.length);

  // ouvrir la modale au clic sur une image
  images.forEach(img => {
    img.addEventListener("click", function() {
      modal.classList.add("active");
      modalImg.src = this.src;
    });
  });

  // fermer la modale avec la croix
  closeBtn.addEventListener("click", function() {
    modal.classList.remove("active");
  });

  // clic sur le fond → ferme
  modal.addEventListener("click", function() {
    modal.classList.remove("active");
  });
  // clic sur l'image → ne ferme pas
 modalImg.addEventListener("click", function(e) {
  e.stopPropagation();
});

});
  
const flagWrappers = document.querySelectorAll('.flag-wrapper');

flagWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', () => {

    // Supprime la classe active de tous les drapeaux
    flagWrappers.forEach(w => w.classList.remove('active'));

    // Ajoute la classe active au drapeau tapé
    wrapper.classList.add('active');

    // 🔹 Affiche la bulle tooltip
    wrapper.classList.add('show-tooltip');

    // 🔹 Supprime automatiquement la bulle après 1,5s
    setTimeout(() => {
      wrapper.classList.remove('active');
      wrapper.classList.remove('show-tooltip');
    }, 1500);
  });
});

