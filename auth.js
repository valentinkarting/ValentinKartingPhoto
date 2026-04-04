import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// 🔥 CONFIG FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAcbpOvXZJ61WRINj865CE1zByBKIvKFo8",
    authDomain: "valentinkarting-c3780.firebaseapp.com",
    projectId: "valentinkarting-c3780",
    storageBucket: "valentinkarting-c3780.firebasestorage.app",
    messagingSenderId: "266468820952",
    appId: "1:266468820952:web:166113aa147ed4b86c94ad"
};

// 🔥 Initialisation Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 🔥 Gestion du bouton compte
document.addEventListener("DOMContentLoaded", () => {
    const accountBtn = document.getElementById("accountBtn");
    if (!accountBtn) return;

    onAuthStateChanged(auth, (user) => {
        if (user) {
            accountBtn.setAttribute("data-tooltip", "Mon compte");

            // clic → page moncompte.html
            accountBtn.onclick = () => {
                window.location.href = "moncompte.html";
            };
        } else {
            accountBtn.setAttribute("data-tooltip", "Connexion");

            // clic → page compte.html
            accountBtn.onclick = () => {
                window.location.href = "compte.html";
            };
        }
    });
    // bulle
    // 🔹 bulle mobile (1,5s)
    accountBtn.addEventListener("click", (e) => {
        e.preventDefault(); // empêche navigation immédiate
        accountBtn.classList.add("active");

        setTimeout(() => {
            accountBtn.classList.remove("active");
            if (accountBtn.onclick) accountBtn.onclick();
        }, 1500);
    });
});