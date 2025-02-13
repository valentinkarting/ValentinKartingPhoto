document.addEventListener("DOMContentLoaded", function () {
  // -----------------------
  // Gestion de la modale d'achat
  // -----------------------
  const achatBtn = document.getElementById("achatBtn");
  const modalOverlay = document.getElementById("modalOverlay");
  const closeModal = document.getElementById("closeModal");

  // Ouvrir le modal lors du clic sur "Achetez vos photos"
  if (achatBtn && modalOverlay) {
    achatBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlay.style.display = "flex";
    });

    // Fermer le modal lorsque l'utilisateur clique sur "Annuler"
    if (closeModal) {
      closeModal.addEventListener("click", function () {
        modalOverlay.style.display = "none";
      });
    }

    // Fermer le modal si l'utilisateur clique en dehors du contenu
    modalOverlay.addEventListener("click", function (e) {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = "none";
      }
    });
  }

  // -----------------------
  // Gestion de la modale de réservation
  // -----------------------
  const reservationBtn = document.getElementById("reservationBtn");
  const modalOverlayReservation = document.getElementById("modalOverlayReservation");
  const closeModalReservation = document.getElementById("closeModalReservation");

  // Ouvrir le modal de réservation lors du clic sur "Réservez vos médias"
  if (reservationBtn && modalOverlayReservation) {
    reservationBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modalOverlayReservation.style.display = "flex";
    });

    // Fermer le modal de réservation lorsque l'utilisateur clique sur "Annuler"
    if (closeModalReservation) {
      closeModalReservation.addEventListener("click", function () {
        modalOverlayReservation.style.display = "none";
      });
    }

    // Fermer le modal si l'utilisateur clique en dehors du contenu
    modalOverlayReservation.addEventListener("click", function (e) {
      if (e.target === modalOverlayReservation) {
        modalOverlayReservation.style.display = "none";
      }
    });
  }
});

  