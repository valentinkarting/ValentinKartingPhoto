document.addEventListener("DOMContentLoaded", function () {
    // Bouton qui déclenche l'ouverture du modal
    const achatBtn = document.getElementById("achatBtn");
    // Éléments du modal
    const modalOverlay = document.getElementById("modalOverlay");
    const closeModal = document.getElementById("closeModal");
  
    // Ouvrir le modal lors du clic sur "Récupérez vos photos"
    achatBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.style.display = "flex";
    });
  
    // Fermer le modal lorsque l'utilisateur clique sur "Annuler"
    closeModal.addEventListener("click", function () {
      modalOverlay.style.display = "none";
    });
  
    // Fermer le modal si l'utilisateur clique en dehors du contenu
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
      }
    });
  });
  