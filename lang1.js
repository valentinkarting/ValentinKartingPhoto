document.addEventListener("DOMContentLoaded", function () {

  // 🔹 Traductions des éléments par ID
  const translations = {
    fr: {
        "input1": "Adresse Mail",
        "input2": "Meeting",
        "input4": "Nom et Prénom",
        "input3": "Nom des photos",
        "A48": "6€ / photo",
        "A49": "Valider",
        "A50": "Récapitulatif de commande",
        "A51": "Total à régler"
    },       

    en: {
        "input1": "Email Address",
        "input2": "Meeting",
        "input4": "First and Last Name",
        "input3": "Photo Names",
        "A48": "€6 / photo",
        "A49": "Confirm",
        "A50": "Order Summary",
        "A51": "Total Due"
    },  

    it: {
       "input1": "Indirizzo email",
       "input2": "Riunione",
       "input4": "Nome e cognome",
       "input3": "Nomi delle foto",
       "A48": "€6 / foto",
       "A49": "Conferma",
       "A50": "Riepilogo ordine",
       "A51": "Totale dovuto" 

    },

    es: {
      "input1": "Correo electrónico",
      "input2": "Reunión",
      "input4": "Nombre y apellidos",
      "input3": "Nombres de las fotos",
      "A48": "6 € / foto",
      "A49": "Confirmar",
      "A50": "Resumen del pedido",
      "A51": "Importe total"

    },

    al: {
      "input1": "E-Mail-Adresse",
      "input2": "Termin",
      "input4": "Vor- und Nachname",
      "input3": "Namen der Fotos", 
      "A48": "6 € / Foto", 
      "A49": "Bestätigen",
      "A50": "Bestellübersicht",
      "A51": "Gesamtbetrag"
    }
  };

  // 🔹 Fonction de traduction
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    Object.keys(translations[lang]).forEach(key => {
      const el = document.getElementById(key);
      if (el) {

        // 🔥 INPUT → placeholder
        if (el.tagName === "INPUT") {
          el.placeholder = translations[lang][key];
        }

        // 🔥 LABEL → garder le radio
        else if (el.tagName === "LABEL") {
          const input = el.querySelector("input");
          el.innerHTML = "";
          if (input) {
            el.appendChild(input);
          }
          el.append(" " + translations[lang][key]);
        }

        // 🔥 AUTRES
        else {
          el.innerHTML = translations[lang][key];
        }
      }
    });

    // 🔹 SEO
    document.documentElement.lang = lang;

    // 🔹 Drapeau actif
    document.querySelectorAll(".flag").forEach(flag => {
      flag.classList.remove("active");
    });

    const activeFlag = document.getElementById("lang-" + lang);
    if (activeFlag) {
      activeFlag.classList.add("active");
    }
  }

  // 🔹 Langue sauvegardée
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);

  // 🔹 Events drapeaux
  document.getElementById("lang-fr").addEventListener("click", () => setLanguage("fr"));
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-it").addEventListener("click", () => setLanguage("it"));
  document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
  document.getElementById("lang-al").addEventListener("click", () => setLanguage("al"));

});