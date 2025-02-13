// Affichage de la dernière mise à jour
document.getElementById("dateMaj").textContent = new Date().toLocaleDateString();

// Fonction pour accepter la politique
function acceptPolicy() {
    alert("Vous avez accepté la politique de confidentialité.");
    localStorage.setItem("policyAccepted", "true");
}
