// Limiter les entrées dans la zone de texte avec restrictions
const input3 = document.getElementById('input3');

input3.addEventListener('input', (e) => {
    const maxCharsPerLine = 12; // Nombre maximum de caractères par ligne
    const maxLines = 10;        // Nombre maximum de lignes

    // Récupérer et formater le texte
    let text = e.target.value.replace(/\r?\n/g, ''); // Supprime les sauts de ligne existants
    const lines = [];

    // Découper le texte en lignes de 12 caractères
    for (let i = 0; i < text.length; i += maxCharsPerLine) {
        lines.push(text.substring(i, i + maxCharsPerLine));
        if (lines.length === maxLines) break; // Arrêter si le nombre maximum de lignes est atteint
    }

    // Recréer la valeur en joignant les lignes avec des sauts de ligne
    e.target.value = lines.join('\n');
});


// Transférer les données de la fenêtre 1 à la fenêtre 2
function transferData() {
    document.getElementById('output1').value = document.getElementById('input1').value;
    document.getElementById('output2').value = document.getElementById('input2').value;
    document.getElementById('output3').value = document.getElementById('input3').value;
}

// Fonction de redirection pour le paiement (exemple)
function goToPayment() {
    alert('Redirection vers l\'interface de paiement.');
    // window.location.href = 'url-vers-interface-paiement';
}
