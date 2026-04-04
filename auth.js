import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "XXX",
    authDomain: "XXX",
    projectId: "XXX",
    storageBucket: "XXX",
    messagingSenderId: "XXX",
    appId: "XXX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔥 STOP TOTAL SUR PAGES LOGIN / COMPTE
const path = window.location.pathname;

if (path.includes("compte.html") || path.includes("moncompte.html")) {
    console.log("⛔ auth.js OFF sur cette page");
} else {

    document.addEventListener("DOMContentLoaded", () => {

        const accountBtn = document.getElementById("accountBtn");
        if (!accountBtn) return;

        let targetPage = "compte.html"; // par défaut

        onAuthStateChanged(auth, (user) => {
            if (user) {
                targetPage = "moncompte.html";
            } else {
                targetPage = "compte.html";
            }
        });

        // 🔥 UN SEUL gestionnaire de clic propre
        accountBtn.addEventListener("click", (e) => {
            e.preventDefault(); // 🔥 TRÈS IMPORTANT (stop le href)

            // 🔥 navigation propre (évite boucle historique)
            window.location.replace(targetPage);
        });

    });

}