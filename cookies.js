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
    const resetBtn = document.getElementById("reset-cookies"); // 🔥 nouveau

    const analyticsCheckbox = document.getElementById("analytics-cookies");
    const marketingCheckbox = document.getElementById("marketing-cookies");

    const analyticsStatus = document.getElementById("analytics-status");
    const marketingStatus = document.getElementById("marketing-status");

    const CONSENT_DURATION = 180; // jours

    // =========================
    // 🔥 GESTION COOKIES
    // =========================

    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 86400000).toUTCString();
        document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expires + "; path=/; SameSite=Lax";
    }

    function getCookie(name) {
        const cookies = document.cookie.split("; ");
        for (let c of cookies) {
            const [key, val] = c.split("=");
            if (key === name) return decodeURIComponent(val);
        }
        return null;
    }

    function deleteAllCookies() {
        document.cookie.split(";").forEach(cookie => {
            const name = cookie.split("=")[0].trim();
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
        });
    }

    // 🔧 MODE DEV
    const DEV_MODE = false;
    if (DEV_MODE) {
        setCookie("cookieConsent", "", -1);
    }

    // 🔍 Lire consentement
    let consent = JSON.parse(getCookie("cookieConsent"));

    function isConsentValid() {
        if (!consent) return false;
        return (Date.now() - consent.date) < (CONSENT_DURATION * 86400000);
    }

    // 🎯 AFFICHAGE BANNIÈRE
    if (!isConsentValid()) {
        banner.style.display = "block";
        setTimeout(() => banner.classList.add("show"), 50);
    } else {
        applyConsent(consent);
    }

    // =========================
    // 🔥 SWITCH UI
    // =========================

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

    // =========================
    // 💾 SAUVEGARDE CONSENTEMENT
    // =========================

    function saveConsent(data) {
        consent = {
            ...data,
            date: Date.now()
        };

        setCookie("cookieConsent", JSON.stringify(consent), CONSENT_DURATION);

        banner.classList.remove("show");
        setTimeout(() => {
            banner.style.display = "none";
        }, 300);

        modal.style.display = "none";

        applyConsent(consent);
    }

    // =========================
    // 🎯 APPLICATION CONSENTEMENT
    // =========================

    function applyConsent(consent) {

        if (typeof gtag === "function") {
            gtag('consent', 'update', {
                analytics_storage: consent.analytics ? 'granted' : 'denied',
                ad_storage: consent.marketing ? 'granted' : 'denied',
                ad_user_data: consent.marketing ? 'granted' : 'denied',
                ad_personalization: consent.marketing ? 'granted' : 'denied'
            });
        }

        if (consent.analytics) {

            console.log("Analytics autorisé");

            if (!window.gaLoaded) {

                window.gaLoaded = true;

                const script = document.createElement("script");
                script.src = "https://www.googletagmanager.com/gtag/js?id=G-Z3M5C7671B";
                script.async = true;
                document.head.appendChild(script);

                script.onload = () => {
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}

                    gtag('js', new Date());
                    gtag('config', 'G-Z3M5C7671B');
                };
            }
        }

        if (consent.marketing) {
            console.log("Marketing autorisé");
        }
    }

    // =========================
    // 🎯 BOUTONS
    // =========================

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

    if (manageBtn) {
        manageBtn.onclick = () => modal.style.display = "flex";
    }

    if (openPrefBtn) {
        openPrefBtn.onclick = () => modal.style.display = "flex";
    }

    // 🔥 RESET COOKIES (NOUVEAU)
    if (resetBtn) {
        resetBtn.onclick = () => {

            deleteAllCookies();                 // supprime tous les cookies
            setCookie("cookieConsent", "", -1); // supprime consentement
            consent = null;

            console.log("Cookies réinitialisés");

            // réaffiche bannière
            banner.style.display = "block";
            setTimeout(() => banner.classList.add("show"), 50);

            setTimeout(() => location.reload(), 500);
        };
    }

    // ❌ Fermer modal
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Init
    initSwitches();
});