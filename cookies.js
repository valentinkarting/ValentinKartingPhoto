// Vérifie si le cookie d'acceptation existe
window.onload = function() {
    if (localStorage.getItem("cookiesAccepted") === "true") {
        document.getElementById("cookie-banner").style.display = "none";
    } else {
        document.getElementById("cookie-banner").style.display = "flex";
    }

    // Gère l'acceptation des cookies
    document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        document.getElementById("cookie-banner").style.display = "none";
    });
};
