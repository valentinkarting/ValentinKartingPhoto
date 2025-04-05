// Fonction pour valider et transférer les données entre les fenêtres
function validate() {
    // Récupère les données des zones de texte de la première fenêtre
    const inputs = document.querySelectorAll('.window1 .text-zone');
    const outputs = document.querySelectorAll('.window2 .text-zone');

    // Transfert les données dans les champs de la deuxième fenêtre
    for (let i = 0; i < inputs.length; i++) {
        outputs[i].value = inputs[i].value;
    }

    // Récupère le bouton radio sélectionné
    const selectedRadio = document.querySelector('.window1 input[name="option"]:checked');
    if (selectedRadio) {
        // Récupère le texte du label associé et l'ajoute à la 5e zone de texte
        const label = selectedRadio.parentElement.textContent.trim();
        if (outputs[4]) {
            outputs[4].value = label;
        }
    }
}

// Fonction pour envoyer les données par e-mail
function send() {
    // Récupère les valeurs des champs de la deuxième fenêtre
    const data = Array.from(document.querySelectorAll('.window2 .text-zone')).map(input => input.value);

    // Valider que tous les champs ne sont pas vides
    for (let i = 0; i < data.length; i++) {
        if (!data[i]) {
            alert(`Le champ ${i + 1} est vide. Veuillez le remplir avant d'envoyer.`);
            return;
        }
    }

    // Vérifie si l'email (output4) est valide
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data[3])) {
        alert('L\'adresse e-mail entrée n\'est pas valide.');
        return;
    }

    // Prépare le corps de l'e-mail avec les données
    const emailBody = `Données :
1. ${data[0]}
2. ${data[1]}
3. ${data[2]}
4. ${data[3]}
Choix du pack : ${data[4]}`;

    // Utilisation d'EmailJS pour envoyer l'email
    emailjs.send("service_y6k5e8v", "template_b415isf", {
        from_name: data[0], // Nom et Prénom
        category_number: data[1], // Catégorie et numéro
        meeting_info: data[2], // Date et lieu du meeting
        email: data[3], // Adresse e-mail
        package_choice: data[4] // Choix du pack
    }).then(
        function (response) {
            alert("✅Votre message a été envoyé avec succès !");
            console.log("Succès de l'envoi", response);

            // Réinitialisation complète après l'envoi du mail
            resetForm();
        },
        function (error) {
            alert("Une erreur est survenue, veuillez réessayer.");
            console.log("Erreur d'envoi", error);
        }
    );
}

// Fonction pour réinitialiser les champs de texte et décocher les cases après l'envoi
function resetForm() {
    console.log("Réinitialisation des champs en cours...");

    // Sélectionner et vider tous les champs texte
    document.querySelectorAll('.text-zone').forEach(input => {
        input.value = '';  
    });

    // Sélectionner et décocher tous les boutons radio et checkboxes
    document.querySelectorAll('input[type="radio"]:checked, input[type="checkbox"]:checked').forEach(input => {
        input.checked = false;
    });

    // Vérifier si les champs sont bien vidés
    setTimeout(() => {
        document.querySelectorAll('.text-zone').forEach(input => {
            console.log(`Champ après reset: "${input.value}"`); // Doit afficher "" pour chaque champ
        });
    }, 100);
    
    console.log("Tous les champs et sélections ont été réinitialisés !");
}

// Initialisation de EmailJS avec votre user_id
(function () {
    emailjs.init("UEQgbTpV4NaC6rHwU");  // Remplacez "YOUR_USER_ID" par votre ID utilisateur EmailJS
})();
