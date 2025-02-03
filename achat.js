// Initialisation d'EmailJS
(function () {
    emailjs.init("UEQgbTpV4NaC6rHwU"); // Votre ID EmailJS
})();

// Récupération des éléments HTML
const input3 = document.getElementById('input3');
const customButton = document.getElementById('my-custom-button');
const paypalContainer = document.getElementById('paypal-button-container');

// === Restriction de la zone de texte (input3) ===
// Limiter chaque ligne à 12 caractères et maximum 10 lignes
function formatInput() {
    const maxCharsPerLine = 12;
    const maxLines = 10;
    // Supprime les retours à la ligne existants
    let text = input3.value.replace(/\r?\n/g, '');
    const lines = [];
    // Découpage du texte par tranches de 12 caractères
    for (let i = 0; i < text.length; i += maxCharsPerLine) {
        lines.push(text.substring(i, i + maxCharsPerLine));
        if (lines.length === maxLines) break;
    }
    // Reconstituer le texte avec des retours à la ligne
    input3.value = lines.join('\n');
}

// Appel de la fonction à chaque modification de l'input3
input3.addEventListener('input', formatInput);

// === Transfert des données vers la fenêtre récapitulative ===
function transferData() {
    // Transférer les données des inputs vers les outputs
    document.getElementById('output1').textContent = document.getElementById('input1').value.trim();
    document.getElementById('output2').textContent = document.getElementById('input2').value.trim();
    document.getElementById('output3').textContent = input3.value.trim();

    // Vérifier que tous les champs sont remplis pour activer le bouton de paiement
    checkInputs();
}

// === Vérification de l'affichage du bouton de paiement ===
function checkInputs() {
    const emailFilled = document.getElementById('output1').textContent.trim() !== "";
    const meetingFilled = document.getElementById('output2').textContent.trim() !== "";
    const photosFilled = document.getElementById('output3').textContent.trim() !== "";

    // Si tous les champs sont remplis, afficher le bouton PayPal et l'image
    if (emailFilled && meetingFilled && photosFilled) {
        document.getElementById('paypal-button-container').style.display = "block"; // Affiche le bouton PayPal
        document.getElementById('custom-image').style.display = "block"; // Affiche l'image sous le bouton PayPal
    } else {
        document.getElementById('paypal-button-container').style.display = "none"; // Cache le bouton PayPal
        document.getElementById('custom-image').style.display = "none"; // Cache l'image
    }
}

// === Intégration du bouton SDK PayPal ===

// Ici, nous fixons le montant à payer à 50.00 € (modifiable selon votre besoin)
function getTotalAmount() {
    return "2.00"; // Montant à régler
}

// Fonction pour initialiser et rendre le bouton SDK PayPal
function renderPaypalButton() {
    paypal.Buttons({
        style: {
            layout: 'horizontal', // ou 'vertical'
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
            tagline: false,
            height: 30,
            width: 80,
            fontSize: 10,
            padding: 5
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency_code: 'EUR',
                        value: getTotalAmount() // Montant à payer
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("Paiement réussi pour " + details.payer.name.given_name);

                // Récupérer le montant payé
                const paidAmount = details.purchase_units[0].amount.value;

                // Envoi de l'e-mail via EmailJS après paiement validé
                emailjs.send("valou_qwncioq", "template_9e68r6o", {
                    from_email: document.getElementById('output1').textContent.trim(),
                    meeting_info: document.getElementById('output2').textContent.trim(),
                    photos_info: document.getElementById('output3').textContent.trim(),
                    paid_amount: paidAmount // Ajout du montant payé
                }).then(function(response) {
                    console.log("E-mail envoyé avec succès", response);
                    // Vous pouvez rediriger l'utilisateur ou afficher un message de confirmation ici
                }, function(error) {
                    console.error("Erreur lors de l'envoi de l'e-mail", error);
                    alert("Une erreur est survenue lors de l'envoi de l'e-mail.");
                });
            });
        },
        onError: function(err) {
            console.error("Erreur PayPal", err);
            alert("Une erreur est survenue lors du paiement.");
        }
    }).render('#paypal-button-container'); // Affichage du bouton PayPal
}

// Rendre le bouton PayPal dès que la page est chargée
document.addEventListener("DOMContentLoaded", function() {
    renderPaypalButton();
});

// === (Optionnel) Si vous souhaitez utiliser le bouton personnalisé pour déclencher le paiement ===
// Vous pouvez, par exemple, ajouter un événement sur customButton pour simuler un clic sur le bouton PayPal
// Attention : Le SDK PayPal exige que l'utilisateur interagisse directement avec le bouton généré par PayPal
customButton.addEventListener("click", function () {
    // Vous pouvez rediriger l'utilisateur directement vers le flux de paiement si nécessaire
    // Ici, nous n'avons pas de simulation de clic car le SDK doit être utilisé tel quel.
    // Une alternative est d'afficher le bouton SDK PayPal directement.
    alert("Veuillez utiliser le bouton PayPal ci-dessus pour finaliser le paiement.");
});
