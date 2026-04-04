import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore.js";

// 🔹 CONFIG FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyAcbpOvXZJ61WRINj865CE1zByBKIvKFo8",
    authDomain: "valentinkarting-c3780.firebaseapp.com",
    projectId: "valentinkarting-c3780",
    storageBucket: "valentinkarting-c3780.firebasestorage.app",
    messagingSenderId: "266468820952",
    appId: "1:266468820952:web:166113aa147ed4b86c94ad"
};

// 🔹 INITIALISATION
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ script chargé");

    const signupBtn = document.getElementById("signupBtn");
    const loginBtn = document.getElementById("loginBtn");

    if (!signupBtn || !loginBtn) {
        console.error("❌ Boutons introuvables");
        return;
    }

    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const signupEmail = document.getElementById("signupEmail");
    const signupPassword = document.getElementById("signupPassword");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const message = document.getElementById("message");

    const showLoginPassword = document.getElementById("showLoginPassword");
    const showSignupPassword = document.getElementById("showSignupPassword");

    // 🔹 Afficher / masquer les mots de passe
    showLoginPassword.addEventListener("change", () => {
        password.type = showLoginPassword.checked ? "text" : "password";
    });

    showSignupPassword.addEventListener("change", () => {
        signupPassword.type = showSignupPassword.checked ? "text" : "password";
    });

    // 🔥 CONNEXION
    loginBtn.addEventListener("click", async () => {

        if (!email.value || !password.value) {
            message.style.color = "red";
            message.textContent = "Merci de remplir tous les champs de connexion.";
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email.value, password.value);

            message.style.color = "green";
            message.textContent = "Connexion réussie !";

            setTimeout(() => {
                // ✅ IMPORTANT : évite boucle retour mobile
                window.location.replace("index.html");
            }, 1500);

        } catch (error) {

            message.style.color = "red";

            if (error.code === "auth/user-not-found") {
                message.textContent = "Utilisateur non trouvé.";
            } else if (error.code === "auth/wrong-password") {
                message.textContent = "Mot de passe incorrect.";
            } else {
                message.textContent = error.message;
            }

            console.error("❌ erreur connexion :", error);
        }
    });

    // 🔥 CRÉATION DE COMPTE
    signupBtn.addEventListener("click", async () => {

        console.log("🟢 clic sur créer compte");

        if (!signupEmail.value || !signupPassword.value || !firstName.value || !lastName.value) {
            message.style.color = "red";
            message.textContent = "Merci de remplir tous les champs pour créer un compte.";
            return;
        }

        try {
            console.log("🟡 création Firebase...");

            const userCredential = await createUserWithEmailAndPassword(
                auth, 
                signupEmail.value, 
                signupPassword.value
            );

            const user = userCredential.user;

            console.log("🟢 utilisateur créé :", user.uid);

            // 🔹 Enregistrement Firestore
            await setDoc(doc(db, "users", user.uid), {
                firstName: firstName.value,
                lastName: lastName.value,
                email: signupEmail.value
            });

            console.log("🟢 Firestore OK");

            message.style.color = "green";
            message.textContent = "Compte créé avec succès !";

            setTimeout(() => {
                // ✅ IMPORTANT : évite boucle retour mobile
                window.location.replace("index.html");
            }, 1500);

        } catch (error) {

            console.error("❌ erreur création compte :", error);

            message.style.color = "red";

            if (error.code === "auth/email-already-in-use") {
                message.textContent = "Cette adresse email est déjà utilisée.";
            } else if (error.code === "auth/invalid-email") {
                message.textContent = "Adresse email invalide.";
            } else if (error.code === "auth/weak-password") {
                message.textContent = "Le mot de passe est trop faible (min. 6 caractères).";
            } else {
                message.textContent = error.message;
            }
        }
    });

});