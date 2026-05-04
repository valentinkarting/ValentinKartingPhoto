import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc } 
from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAcbpOvXZJ61WRINj865CE1zByBKIvKFo8",
    authDomain: "valentinkarting-c3780.firebaseapp.com",
    projectId: "valentinkarting-c3780",
    storageBucket: "valentinkarting-c3780.firebasestorage.app",
    messagingSenderId: "266468820952",
    appId: "1:266468820952:web:166113aa147ed4b86c94ad"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {

    const signupBtn = document.getElementById("signupBtn");
    const loginBtn = document.getElementById("loginBtn");

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const phoneInput = document.getElementById("phone");

    const message = document.getElementById("message");

    const showLoginPassword = document.getElementById("showLoginPassword");
    const showSignupPassword = document.getElementById("showSignupPassword");

    // 🔹 Sécurité : vérifier existence
    if (!signupBtn || !loginBtn) return;

    // 🔹 Afficher / masquer mot de passe
    if (showLoginPassword && password) {
        showLoginPassword.addEventListener("change", () => {
            password.type = showLoginPassword.checked ? "text" : "password";
        });
    }

    if (showSignupPassword && signupPassword) {
        showSignupPassword.addEventListener("change", () => {
            signupPassword.type = showSignupPassword.checked ? "text" : "password";
        });
    }

    // 🔹 INIT TELEPHONE (sécurisé)
    let iti = null;

    if (phoneInput && window.intlTelInput) {
        iti = window.intlTelInput(phoneInput, {
            initialCountry: "fr",
            separateDialCode: true,
            preferredCountries: ["fr","gb","it","es","de"],
            loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.11.3/build/js/utils.js")
        });
    }

    // 🔹 LOGIN
    loginBtn.addEventListener("click", async () => {

        if (!email.value || !password.value) {
            message.textContent = "Remplis tous les champs";
            message.style.color = "red";
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email.value, password.value);

            message.textContent = "Connexion réussie";
            message.style.color = "green";

            setTimeout(() => {
                window.location.replace("index.html");
            }, 1000);

        } catch (error) {

            if (error.code === "auth/user-not-found") {
                message.textContent = "Utilisateur introuvable";
            } else if (error.code === "auth/wrong-password") {
                message.textContent = "Mot de passe incorrect";
            } else {
                message.textContent = "Erreur : " + error.message;
            }

            message.style.color = "red";
        }
    });

    // 🔹 SIGNUP
    signupBtn.addEventListener("click", async () => {

        if (!signupEmail.value || !signupPassword.value || !firstName.value || !lastName.value || !phoneInput.value) {
            message.textContent = "Remplis tous les champs";
            message.style.color = "red";
            return;
        }

        // 🔹 validation numéro
        if (iti && !iti.isValidNumber()) {
            message.textContent = "Numéro invalide";
            message.style.color = "red";
            return;
        }

        try {

            const userCredential = await createUserWithEmailAndPassword(
                auth,
                signupEmail.value,
                signupPassword.value
            );

            await setDoc(doc(db, "users", userCredential.user.uid), {
                firstName: firstName.value,
                lastName: lastName.value,
                email: signupEmail.value,
                phone: iti ? iti.getNumber() : phoneInput.value
            });

            message.textContent = "Compte créé avec succès";
            message.style.color = "green";

            setTimeout(() => {
                window.location.replace("index.html");
            }, 1000);

        } catch (error) {

            if (error.code === "auth/email-already-in-use") {
                message.textContent = "Email déjà utilisé";
            } else if (error.code === "auth/weak-password") {
                message.textContent = "Mot de passe trop faible";
            } else {
                message.textContent = "Erreur : " + error.message;
            }

            message.style.color = "red";
        }
    });

});