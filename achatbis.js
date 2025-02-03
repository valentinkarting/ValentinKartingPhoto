



// Initialisation d'EmailJS
(function () {
    emailjs.init("UEQgbTpV4NaC6rHwU");
})();

// Récupération des éléments HTML
const input3 = document.getElementById('input3');
const customButton = document.getElementById('my-custom-button');
const paypalContainer = document.getElementById('paypal-button-container');
const lineCountDisplay = document.getElementById('lineCountDisplay');
let paypalRendered = false;

// Fonction pour limiter chaque ligne à 12 caractères et max 10 lignes
function formatInput() {
    const maxCharsPerLine = 12;
    const maxLines = 10;
    let text = input3.value.replace(/\r?\n/g, ''); // Supprime les sauts de ligne
    const lines = [];

    for (let i = 0; i < text.length; i += maxCharsPerLine) {
        lines.push(text.substring(i, i + maxCharsPerLine));
        if (lines.length === maxLines) break;
    }

    input3.value = lines.join('\n');
    updateLineCount();
}

// Mise à jour du compteur de lignes
function updateLineCount() {
    const lineCount = input3.value.split('\n').filter(line => line.trim() !== '').length;
    lineCountDisplay.textContent = lineCount;
}

// Appliquer la mise en forme en temps réel
input3.addEventListener('input', formatInput);

// Transfert des données et calcul du total
function transferData() {
    document.getElementById('output1').textContent = document.getElementById('input1').value.trim();
    document.getElementById('output2').textContent = document.getElementById('input2').value.trim();
    document.getElementById('output3').textContent = input3.value.trim();

    updateLineCount();
    const total = Number(lineCountDisplay.textContent) * 6;
    document.getElementById('outputLineCount').textContent = total;

    checkInputs();
}

// Vérification des champs pour activer le bouton
function checkInputs() {
    const filled = document.getElementById('output1').textContent.trim() !== "" &&
                   document.getElementById('output2').textContent.trim() !== "" &&
                   document.getElementById('output3').textContent.trim() !== "" &&
                   document.getElementById('outputLineCount').textContent.trim() !== "";

    if (filled) {
        customButton.style.display = "inline-block"; // Affiche le bouton personnalisé
        paypalContainer.style.display = "block"; // Affiche le bouton PayPal

        if (!paypalRendered) {
            renderPaypalButton(); // Charge le bouton PayPal si ce n'est pas encore fait
        }
    } else {
        customButton.style.display = "none";
        paypalContainer.style.display = "none";
    }
}

// Récupération du montant total
function getTotalAmount() {
    return parseFloat(document.getElementById("outputLineCount").textContent) || 0;
}

// Initialisation du bouton PayPal
function renderPaypalButton() {
    paypalRendered = true;
    paypalContainer.innerHTML = ""; // Nettoyage du container avant de le recharger

    paypal.Buttons({
        style: { layout: 'vertical', fundingicons: false },
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: { currency_code: "EUR", value: getTotalAmount() }
                }]
            });
        },
        onApprove: (data, actions) => {
            return actions.order.capture().then(details => {
                alert("Paiement réussi pour " + details.payer.name.given_name);
                sendEmailAfterPayment();
            });
        }
    }).render("#paypal-button-container"); // Render dans le bon conteneur
}

// Déclencher le paiement PayPal au clic sur le bouton personnalisé
customButton.addEventListener("click", function () {
    const paypalButton = paypalContainer.querySelector("iframe"); // Trouver le bouton caché
    if (paypalButton) {
        paypalButton.click();
    } else {
        console.error("Le bouton PayPal n'est pas prêt.");
    }
});

// Envoi d'un email après paiement
function sendEmailAfterPayment() {
    const data = {
        from_email: document.getElementById('output1').textContent.trim(),
        meeting_info: document.getElementById('output2').textContent.trim(),
        photos_info: document.getElementById('output3').textContent.trim(),
        total_price: document.getElementById('outputLineCount').textContent.trim() + " €"
    };

    emailjs.send("valou_qwncioq", "template_9e68r6o", data).then(
        function(response) {
            console.log("Succès de l'envoi", response);
            resetForm();
        },
        function(error) {
            console.log("Erreur d'envoi", error);
            alert("Erreur lors de l'envoi de l'email.");
        }
    );
}

// Réinitialisation du formulaire après paiement
function resetForm() {
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    document.getElementById('input3').value = "";
    document.getElementById('output1').textContent = "";
    document.getElementById('output2').textContent = "";
    document.getElementById('output3').textContent = "";
    document.getElementById('outputLineCount').textContent = "";
    updateLineCount();
}

// Vérifier si PayPal est chargé
document.addEventListener("DOMContentLoaded", function() {
    if (typeof paypal !== "undefined") {
        renderPaypalButton();
    } else {
        console.error("Le SDK PayPal n'a pas été chargé.");
    }
});

// Écouteurs d'événements pour surveiller les entrées utilisateur
document.getElementById('input1').addEventListener('input', checkInputs);
document.getElementById('input2').addEventListener('input', checkInputs);
document.getElementById('input3').addEventListener('input', checkInputs);
