// Initialiser EmailJS avec votre userID (celui que vous obtenez sur le tableau de bord EmailJS)
emailjs.init('6ZG_2TCVnIBPG7zuO');  // Remplacez par votre userID d'EmailJS

document.getElementById("btn-validate").addEventListener("click", () => {
    // Récupérer les valeurs des champs de texte de F1
    const input1 = document.getElementById("input1").value;
    const input2 = document.getElementById("input2").value;
    const input3 = document.getElementById("input3").value;
    const input4 = document.getElementById("input4").value;

    // Récupérer les états des cases à cocher
    const checkbox1 = document.getElementById("checkbox1").checked;
    const checkbox2 = document.getElementById("checkbox2").checked;
    const checkbox3 = document.getElementById("checkbox3").checked;

    // Construire le résultat des cases à cocher
    let checkboxResult = "";
    if (checkbox1) checkboxResult += "- Pack 10 photos 50€ (photos au choix)\n";
    if (checkbox2) checkboxResult += "- Réels 45 ~ 75€ (15 ~ 30s)\n";
    if (checkbox3) checkboxResult += "- Pack réel + photo 80€ (10 photos au choix + réel de 15s)\n";
    if (!checkbox1 && !checkbox2 && !checkbox3) {
        checkboxResult = "Aucun Pack sélectionné.";
    }

    // Optionnel : Limiter la longueur du texte pour ne pas dépasser la taille de la zone de texte
    const maxLength = 28;  // Maximum de caractères à afficher
    if (checkboxResult.length > maxLength) {
        checkboxResult = checkboxResult.substring(0, maxLength) + "...";  // Couper le texte et ajouter "..."
    }

    // Copier les valeurs dans les zones de texte de F2
    document.getElementById("output1").value = input1;
    document.getElementById("output2").value = input2;
    document.getElementById("output3").value = input3;
    document.getElementById("output4").value = input4;
    document.getElementById("output5").value = checkboxResult;
});

// Ajouter un événement au bouton "Effacer"
document.getElementById("btn-clear").addEventListener("click", () => {
    // Réinitialiser les zones de texte de F2
    document.getElementById("output1").value = "";
    document.getElementById("output2").value = "";
    document.getElementById("output3").value = "";
    document.getElementById("output4").value = "";
    document.getElementById("output5").value = "";
});

// Ajouter un événement au bouton "Envoyer"
document.getElementById("btn-send").addEventListener("click", () => {
    // Récupérer les valeurs des zones de texte de F2
    const output1 = document.getElementById("output1").value;
    const output2 = document.getElementById("output2").value;
    const output3 = document.getElementById("output3").value;
    const output4 = document.getElementById("output4").value;
    const output5 = document.getElementById("output5").value;

    // Créer l'objet de données à envoyer
    const formData = {
        name: output1,
        categoryAndNumber: output2,
        eventDetails: output3,
        email: output4,
        selectedPack: output5
    };

    // Vérification : Aucun champ ne doit être vide
    if (!output1 || !output2 || !output3 || !output4 || !output5) {
        alert("Veuillez remplir tous les champs avant de soumettre le formulaire.");
        return;
    }

    // Vérification : L'adresse email doit être valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(output4)) {
        alert("Veuillez entrer une adresse e-mail valide.");
        return;
    }

    // Utiliser EmailJS pour envoyer l'email
    emailjs.send('service_valou', 'template_u6fjufo', formData)
        .then((response) => {
            alert('Votre email a été envoyé avec succès !');
        }, (error) => {
            alert('Il y a eu une erreur lors de l\'envoi de l\'email. Essayez à nouveau.');
            console.error('Erreur lors de l\'envoi:', error);
        });
});

// Sélectionner toutes les checkboxes dans le groupe
const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');

// Ajouter un événement de changement à chaque checkbox
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        // Si une checkbox est cochée, désactiver toutes les autres
        checkboxes.forEach(otherCheckbox => {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.disabled = checkbox.checked;  // Désactive les autres checkboxes si l'une est cochée
            }
        });
    });
});
