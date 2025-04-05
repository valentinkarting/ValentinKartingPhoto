



// === Initialisation d'EmailJS ===
(function () {
    emailjs.init("UEQgbTpV4NaC6rHwU");
})();

// === Récupération des éléments HTML ===
const input3 = document.getElementById('input3');
const input4 = document.getElementById('input4'); // Nouvel élément input4
const customButton = document.getElementById('my-custom-button');
const paypalContainer = document.getElementById('paypal-button-container');
const lineCountDisplay = document.getElementById('lineCountDisplay');
let paypalRendered = false;

// === Fonction pour limiter chaque ligne à 12 caractères et max 10 lignes (pour input3) ===
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
    updateLineCount();
}

// === Mise à jour du compteur de lignes pour input3 ===
function updateLineCount() {
    const lineCount = input3.value.split('\n').filter(line => line.trim() !== '').length;
    lineCountDisplay.textContent = lineCount;
}

// === Appliquer la mise en forme en temps réel sur input3 ===
input3.addEventListener('input', formatInput);

// === Transfert des données vers la fenêtre récapitulative et calcul du total ===
function transferData() {
    const email = document.getElementById('input1').value.trim();
    const meeting = document.getElementById('input2').value.trim();
    const name = input4.value.trim();
    const photos = input3.value.trim();
    
    if (email === "" || meeting === "" || name === "" || photos === "") {
        alert("Merci de remplir tous les champs avant de valider.");
        return;
    }
    
    // Transfert vers les outputs
    document.getElementById('output1').textContent = email;
    document.getElementById('output2').textContent = meeting;
    document.getElementById('output4').textContent = name;
    document.getElementById('output3').textContent = photos;
    
    // Ici, le montant affiché dans outputLineCount doit déjà être renseigné
    // (par exemple, par un calcul antérieur ou saisi par l'utilisateur)
    const total = Number(lineCountDisplay.textContent) * 6; // Exemple : multiplication par 6
    document.getElementById('outputLineCount').textContent = total; // Mettre à jour outputLineCount avec le total

    checkInputs();
    
    // Affichage des fenêtres et des éléments
    document.getElementById('window1').style.display = "block";
    document.getElementById('window1').style.textAlign = "center";
    
    document.getElementById('window2').style.display = "flex";
    document.getElementById('window2').style.flexDirection = "column";
    document.getElementById('window2').style.alignItems = "center";
    
    paypalContainer.style.display = "block";
    
}

// === Vérification des champs pour activer le bouton PayPal et le bouton personnalisé ===
function checkInputs() {
    const filled = document.getElementById('output1').textContent.trim() !== "" &&
                   document.getElementById('output2').textContent.trim() !== "" &&
                   document.getElementById('output4').textContent.trim() !== "" &&
                   document.getElementById('output3').textContent.trim() !== "" &&
                   document.getElementById('outputLineCount').textContent.trim() !== "";
    
    if (filled) {
        customButton.style.display = "inline-block";
        paypalContainer.style.display = "block";
        if (!paypalRendered) {
            renderPaypalButton();
        }
    } else {
        customButton.style.display = "none";
        paypalContainer.style.display = "none";
    }
}

// === Récupération du montant à payer (à partir de outputLineCount) ===
function getTotalAmount() {
    return document.getElementById("outputLineCount").textContent.trim();
}

// === Initialisation du bouton PayPal ===
function renderPaypalButton() {
    paypalRendered = true;
    paypalContainer.innerHTML = ""; // Nettoyer le conteneur avant de le recharger
    
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
                sendEmailAfterPayment();
            });
        },
        onError: function(err) {
            console.error("❌ Erreur PayPal", err);
            alert("Une erreur est survenue lors du paiement.");
        }
    }).render('#paypal-button-container');
}

// === Bouton personnalisé ===
customButton.addEventListener("click", function () {
    alert("Veuillez utiliser le bouton PayPal ci-dessus pour finaliser le paiement.");
});

// === Envoi d'un email après paiement ===
function sendEmailAfterPayment() {
    const data = {
        from_email: document.getElementById('output1').textContent.trim(),
        meeting_info: document.getElementById('output2').textContent.trim(),
        photos_info: document.getElementById('output3').textContent.trim(),
        name_info: document.getElementById('output4').textContent.trim(),
        paid_amount: document.getElementById('outputLineCount')
    };
    
    console.log("📨 EmailJS chargé :", typeof emailjs !== "undefined");
    console.log("📩 Tentative d'envoi de l'email...");
    console.log("🔑 Clé publique utilisée :", emailjs._publicKey);
    
    emailjs.send("valou_qwncioq", "template_9e68r6o", data).then(
        function(response) {
            console.log("✅ E-mail envoyé avec succès", response);
            alert("L'email a été envoyé avec succès !");
            resetForm();
        },
        function(error) {
            console.error("❌ Erreur lors de l'envoi de l'e-mail", error);
            alert("Une erreur est survenue lors de l'envoi de l'e-mail. Vérifie la console.");
        }
    );
}

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

// === Vérifier si le SDK PayPal est chargé ===
document.addEventListener("DOMContentLoaded", function() {
    console.log("🟢 Page chargée, préparation du paiement.");
    if (typeof paypal !== "undefined") {
        renderPaypalButton();
    } else {
        console.error("Le SDK PayPal n'a pas été chargé.");
    }
});

// === Écouteurs d'événements pour surveiller les entrées utilisateur ===
document.getElementById('input1').addEventListener('input', checkInputs);
document.getElementById('input2').addEventListener('input', checkInputs);
input4.addEventListener('input', checkInputs);
document.getElementById('input3').addEventListener('input', checkInputs);
