// Vérifie si le cookie d'acceptation existe
document.addEventListener("DOMContentLoaded", function () {

    const banner = document.getElementById("cookie-banner");
    const modal = document.getElementById("cookie-modal");

    const acceptAll = document.getElementById("accept-all");
    const refuseAll = document.getElementById("refuse-all");
    const openSettings = document.getElementById("open-settings");
    const saveBtn = document.getElementById("save-preferences");
    const manageBtn = document.getElementById("manage-cookies");
    const openPrefBtn = document.getElementById("open-cookie-preferences");

    const analyticsCheckbox = document.getElementById("analytics-cookies");
    const marketingCheckbox = document.getElementById("marketing-cookies");

    const analyticsStatus = document.getElementById("analytics-status");
    const marketingStatus = document.getElementById("marketing-status");

    const CONSENT_DURATION = 180; // jours

    // 🔧 MODE DEV (mettre false en production)
    const DEV_MODE = true;
    if (DEV_MODE) localStorage.removeItem("cookieConsent");

    // 🔍 Lire consentement
    let consent = JSON.parse(localStorage.getItem("cookieConsent"));

    function isConsentValid() {
        if (!consent) return false;
        return (Date.now() - consent.date) < (CONSENT_DURATION * 86400000);
    }

    // 🎯 AFFICHAGE BANNIÈRE (corrigé)
    if (!isConsentValid()) {
        banner.classList.add("show"); // ✅ utilise le CSS
    } else {
        applyConsent(consent);
    }

    // 🔥 Mise à jour YES / NO
    function updateStatus(checkbox, label) {
        label.textContent = checkbox.checked ? "YES" : "NO";
    }

    function initSwitches() {
        updateStatus(analyticsCheckbox, analyticsStatus);
        updateStatus(marketingCheckbox, marketingStatus);
    }

    analyticsCheckbox.addEventListener("change", () =>
        updateStatus(analyticsCheckbox, analyticsStatus)
    );

    marketingCheckbox.addEventListener("change", () =>
        updateStatus(marketingCheckbox, marketingStatus)
    );

    // 💾 Sauvegarde consentement (corrigé animation)
    function saveConsent(data) {
        consent = {
            ...data,
            date: Date.now()
        };

        localStorage.setItem("cookieConsent", JSON.stringify(consent));

        // 🔥 animation de fermeture propre
        banner.classList.remove("show");
        setTimeout(() => {
            banner.style.display = "none";
        }, 300);

        modal.style.display = "none";

        applyConsent(consent);
    }

    // 🎯 Appliquer consentement
    function applyConsent(consent) {

        if (consent.analytics) {
            console.log("Analytics autorisé");
            // 👉 charger Google Analytics ici
        }

        if (consent.marketing) {
            console.log("Marketing autorisé");
        }
    }

    // 🎯 Boutons
    acceptAll.onclick = () => {
        analyticsCheckbox.checked = true;
        marketingCheckbox.checked = true;
        initSwitches();

        saveConsent({ analytics: true, marketing: true });
    };

    refuseAll.onclick = () => {
        analyticsCheckbox.checked = false;
        marketingCheckbox.checked = false;
        initSwitches();

        saveConsent({ analytics: false, marketing: false });
    };

    openSettings.onclick = () => {
        modal.style.display = "flex";
    };

    saveBtn.onclick = () => {
        saveConsent({
            analytics: analyticsCheckbox.checked,
            marketing: marketingCheckbox.checked
        });
    };

    // 🔁 Boutons accès préférences
    if (manageBtn) {
        manageBtn.onclick = () => modal.style.display = "flex";
    }

    if (openPrefBtn) {
        openPrefBtn.onclick = () => modal.style.display = "flex";
    }

    // ❌ Fermer modal en cliquant dehors
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Init
    initSwitches();
});