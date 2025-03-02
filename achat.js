document.addEventListener("DOMContentLoaded", function() {
    let input4 = document.getElementById("input4");

    if (input4) {
        // Afficher la largeur actuelle une première fois
        console.log("Largeur initiale de #input4:", input4.offsetWidth);

        // Vérifier la largeur toutes les 500ms
        setInterval(() => {
            console.log("Largeur de #input4:", input4.offsetWidth);
        }, 500);
    } else {
        console.error("L'élément #input4 n'a pas été trouvé !");
    }
});




// === Initialisation d'EmailJS ===
emailjs.init("UEQgbTpV4NaC6rHwU");

// === Récupération des éléments HTML ===
const input3 = document.getElementById('input3');
const customButton = document.getElementById('my-custom-button');
const paypalContainer = document.getElementById('paypal-button-container');

// === Restriction de la zone de texte (input3) ===
// Limiter chaque ligne à 12 caractères et maximum 10 lignes
function formatInput() {
    const maxCharsPerLine = 12;
    const maxLines = 10;
    let text = input3.value.replace(/\r?\n/g, '');
    const lines = [];
    for (let i = 0; i < text.length; i += maxCharsPerLine) {
        lines.push(text.substring(i, i + maxCharsPerLine));
        if (lines.length === maxLines) break;
    }
    input3.value = lines.join('\n');
}

// Ajout de l'événement pour limiter la saisie
input3.addEventListener('input', formatInput);

// === Transfert des données vers la fenêtre récapitulative ===
function transferData() {
    let email = document.getElementById('input1').value.trim();
    let meeting = document.getElementById('input2').value.trim();
    let name = document.getElementById('input4').value.trim(); // Récupérer la valeur du nouvel input
    let photos = document.getElementById('input3').value.trim();

    if (email === "" || meeting === "" || name === "" || photos === "") { // Validation de tous les champs
        alert("Merci de remplir tous les champs avant de valider.");
        return;
    }

    

    document.getElementById('output1').textContent = email;
    document.getElementById('output2').textContent = meeting;
    document.getElementById('output4').textContent = name; // Affichage du nom et prénom dans le output
    document.getElementById('output3').textContent = photos;

    // Affichage des éléments nécessaires
    document.getElementById('window1').style.display = "block"; // Assurer que window1 est visible
    document.getElementById('window1').style.textAlign = "center";
    // document.getElementById('window2').style.display = "block"; 
    // document.getElementById('window2').style.textAlign = "center"; 

    document.getElementById('window2').style.display = "flex";
    document.getElementById('window2').style.flexDirection = "column";
    document.getElementById('window2').style.alignItems = "center";


    document.getElementById('paypal-button-container').style.display = "block";
    document.getElementById('custom-image').style.display = "block";

    // L'envoi d'email se fera après la confirmation du paiement (voir onApprove)
}

// === Envoi de l'email après le paiement ===
function sendEmailAfterPayment() { 
    const fixedAmount = "2.00"; // Montant fixe

    console.log("📨 EmailJS chargé :", typeof emailjs !== "undefined");
    console.log("📩 Tentative d'envoi de l'email...");
    console.log("🔑 Clé publique utilisée :", emailjs._publicKey);
    emailjs.send("valou_qwncioq", "template_9e68r6o", {
        from_email: document.getElementById('output1').textContent.trim(),
        meeting_info: document.getElementById('output2').textContent.trim(),
        photos_info: document.getElementById('output3').textContent.trim(),
        name_info: document.getElementById('output4').textContent.trim(),
        paid_amount: fixedAmount
    }).then(function(response) {
        console.log("✅ E-mail envoyé avec succès", response);
        // alert("L'email a été envoyé avec succès !"); 
    }).catch(function(error) {
        console.error("❌ Erreur lors de l'envoi de l'e-mail", error);
        alert("Une erreur est survenue lors de l'envoi de l'e-mail. Vérifie la console.");
    });
}

// === Définition du montant fixe ===
function getTotalAmount() {
    return "50.00"; // Montant à régler
}

// === Fonction de rendu du bouton PayPal ===
function renderPaypalButton() {
    paypal.Buttons({
        style: {
            layout: 'horizontal',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
            tagline: false,
            height: 30,
            width: 50,
            fontSize: 10,
            padding: 5
        },
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        currency_code: 'EUR',
                        value: getTotalAmount()
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            return actions.order.capture().then(function(details) {
                alert("Paiement réussi pour " + details.payer.name.given_name);
                // Appel de l'envoi d'email après la réussite du paiement
                sendEmailAfterPayment();
            });
        },
        onError: function(err) {
            console.error("❌ Erreur PayPal", err);
            alert("Une erreur est survenue lors du paiement.");
        }
    }).render('#paypal-button-container');
}

// === Exécution à l'ouverture de la page ===
document.addEventListener("DOMContentLoaded", function() {
    console.log("🟢 Page chargée, préparation du paiement.");
    renderPaypalButton();
});

// === Ajout d'un événement pour le bouton personnalisé ===
customButton.addEventListener("click", function () {
    alert("Veuillez utiliser le bouton PayPal ci-dessus pour finaliser le paiement.");
});

// === Réinitialisation du formulaire après paiement ===
function resetForm() {
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
    input4.value = "";
    document.getElementById('input3').value = "";
    document.getElementById('output1').textContent = "";
    document.getElementById('output2').textContent = "";
    document.getElementById('output4').textContent = "";
    document.getElementById('output3').textContent = "";
    document.getElementById('outputLineCount').textContent = "";
    updateLineCount();
}