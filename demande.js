// 🟢 Fonction pour valider et transférer les données entre les fenêtres
function validate() {
    const inputs = document.querySelectorAll('.window1 .text-zone');
    const outputs = document.querySelectorAll('.window2 .text-zone');

    inputs.forEach((input, index) => {
        outputs[index].value = input.value;
    });

    console.log("✅ Données transférées vers la fenêtre 2 !");
}

// 🟢 Fonction pour envoyer les données via EmailJS
function send() {
    const data = {
        from_name: document.getElementById("output1").value,    // Nom et Prénom / Entreprise
        category_number: document.getElementById("output2").value,  // Date et lieu de l'évènement
        email: document.getElementById("output3").value,  // Adresse Email
        meeting_info: document.getElementById("output4").value, // Précisez votre demande
        package_choice: "Non spécifié" // Peut être modifié si nécessaire
    };

    console.log("📩 Données préparées pour EmailJS :", data);

    // Vérification des champs vides
    for (const [key, value] of Object.entries(data)) {
        if (!value) {
            alert(`🚨 Le champ "${key}" est vide. Veuillez le remplir.`);
            return;
        }
    }

    // Vérification de l'adresse email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert("🚨 L'adresse e-mail entrée n'est pas valide.");
        return;
    }

    // 🟢 Envoi via EmailJS
    emailjs.send("service_y6k5e8v", "template_b415isf", data).then(
        function (response) {
            alert("✅ Votre message a été envoyé avec succès !");
            console.log("✔ Succès de l'envoi :", response);
            resetForm();
        },
        function (error) {
            alert("❌ Une erreur est survenue, veuillez réessayer.");
            console.log("❌ Erreur d'envoi :", error);
        }
    );
}

// 🟢 Fonction pour réinitialiser les champs après l'envoi
function resetForm() {
    console.log("🔄 Réinitialisation des champs...");

    document.querySelectorAll('.text-zone').forEach(input => input.value = '');

    console.log("✅ Tous les champs ont été réinitialisés !");
}

// 🟢 Initialisation d'EmailJS
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("UEQgbTpV4NaC6rHwU");
});
