import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// 🔹 CONFIG FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAcbpOvXZJ61WRINj865CE1zByBKIvKFo8",
    authDomain: "valentinkarting-c3780.firebaseapp.com",
    projectId: "valentinkarting-c3780",
    storageBucket: "valentinkarting-c3780.firebasestorage.app",
    messagingSenderId: "266468820952",
    appId: "1:266468820952:web:166113aa147ed4b86c94ad"
};

// 🔹 INIT
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {

    const accountBtn = document.getElementById("accountBtn");
    const accountIcon = document.getElementById("accountIcon");
    const accountEmail = document.getElementById("accountEmail");

    if (!accountBtn) return;

    onAuthStateChanged(auth, (user) => {

        if (user) {
            // 🔥 afficher email
            if (accountEmail) {
                accountEmail.style.display = "inline";
                accountEmail.textContent = user.email.split("@")[0]; // 👈 plus propre
            }

            // 🔥 cacher icône
            if (accountIcon) {
                accountIcon.style.display = "none";
            }

            accountBtn.setAttribute("data-tooltip", "Mon compte");
            accountBtn.href = "moncompte.html";

        } else {
            // 🔥 afficher icône
            if (accountIcon) {
                accountIcon.style.display = "inline";
            }

            // 🔥 cacher email
            if (accountEmail) {
                accountEmail.style.display = "none";
            }

            accountBtn.setAttribute("data-tooltip", "Connexion");
            accountBtn.href = "compte.html";
        }

    });

    // 🔹 animation mobile (inchangée)
    accountBtn.addEventListener("click", (e) => {
        e.preventDefault();

        accountBtn.classList.add("active");

        setTimeout(() => {
            accountBtn.classList.remove("active");

            // 🔥 navigation propre avec <a>
            window.location.href = accountBtn.href;

        }, 1500);
    });

});