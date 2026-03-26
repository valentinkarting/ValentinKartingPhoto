document.addEventListener("DOMContentLoaded", function () {

  // 🔹 Traductions des éléments par ID
  const translations = {
    fr: {
      "A1": "RÉGIONALES",
      "A2": "NATIONALES",
      "A3": "INTERNATIONALES",
      "A4": "ACTUALITÉS",
      "A5": "PORTE-FOLIO",
      "A6": "🏁 Bonjour et bienvenue 🏁 - Découvrez vos photos de karting ! Pour réserver acheter ou commander des photos ou vidéos cliquez sur le panier et laissez-vous guider ou bien laissez un message je vous répondrais le plus vite possible🏁",
      "toggleText": "Arrêter le texte",
      "A7": "Photographe professionnel de karting de compétition",
      "A8": "Shooting photos",
      "A9": `Vos photos en HD.<br>
                Taille 8688px / 5792px<br>
                De 9 à 15 Mo<br>
                Idéal pour tirage papier<br>
                et Poster.<br>
                Matériel :<br>
                EOS 5D-SR et EOS 5R<br>
                Obectif 150/600<br>
                et Macro 100mm<br>
                téléconvertisseur X2`,
      "A10": "Politique de cookie",
       "A11": "Calendrier", 
       "A12": "Veuillez noter que toutes les photos sont en (basse résolution) afin de permettre un affichage optimal suivant le type de connexion, les photos originales sont en (HD)",
       "welcome-btn": "Continuer"
    },       

    en: {
      "A1": "REGIONAL",
      "A2": "NATIONAL",
      "A3": "INTERNATIONAL",
      "A4": "NEWS",
      "A5": "PORTFOLIO",
      "A6": "🏁 Hello and welcome 🏁 - Discover your karting photos! To book, buy or order photos or videos, click on the shopping cart and follow the instructions, or leave a message and I will reply as soon as possible 🏁",
      "toggleText": "Stop the text",
      "A7": "Professional competitive karting photographer",
      "A8": "Shooting photos",
      "A9": `Your photos in HD.<br>
                Size 8688px / 5792px<br>
                9 to 15 MB<br>
                Ideal for printing<br>
                and posters.<br>
                Equipment:<br>
                EOS 5D-SR and EOS 5R<br>
                150-600mm lens<br>
                and 100mm macro lens<br>
                2x teleconverter`,
      "A10": "Cookie Policy",
      "A11": "Calendar",
      "A12": "Please note that all photos are in (low resolution) to allow for optimal display depending on the type of connection; the original photos are in (HD).",
      "welcome-btn": "Continue"
    },  

    it: {
      "A1": "REGIONALI",
      "A2": "NAZIONALI",
      "A3": "INTERNAZIONALI",
      "A4": "NOTIZIE",
      "A5": "PORTFOLIO",
      "A6":"🏁 Ciao e benvenuto 🏁 - Dai un'occhiata alle tue foto di karting! Per prenotare, acquistare o ordinare foto o video, clicca sul carrello e segui le istruzioni, oppure lascia un messaggio e ti risponderò il prima possibile. 🏁",
      "toggleText": "Stop il testo",
      "A7": "Fotografo professionista di karting agonistico",
      "A8": "foto scattata",
      "A9": `Le tue foto in HD.<br>
                Dimensioni 8688px / 5792px<br>
                Da 9 a 15 MB<br>
                Ideale per stampe<br>
                e poster.<br>
                Attrezzatura:<br>
                EOS 5D-SR e EOS 5R<br>
                Obiettivo 150/600<br>
                e Macro 100mm<br>
                teleconvertitore X2`,
      "A10": "Informativa sui cookie",
      "A11": "Calendario",
      "A12": "Si prega di notare che tutte le foto sono in bassa risoluzione per consentire una visualizzazione ottimale a seconda del tipo di connessione; le foto originali sono in alta definizione (HD).",
      "welcome-btn": "Continuare"
    },

    es: {
      "A1": "REGIONALES",
      "A2": "NACIONALES",
      "A3": "INTERNACIONALES",
      "A4": "NOTICIAS",
      "A5": "PORTAFOLIO",
      "A6": "🏁 ¡Hola y bienvenidos! 🏁 ¡Miren sus fotos de karting! Para reservar, comprar o encargar fotos o videos, hagan clic en el carrito de compras y sigan las instrucciones, o dejen un mensaje y les responderé lo antes posible. 🏁",
      "toggleText": "Detener el texto",
      "A7": "Fotógrafo profesional de karting de competición",
      "A8": "fotografía de tiro",
      "A9": `Tus fotos en HD.<br>
                Tamaño: 8688x5792 px<br>
                De 9 a 15 MB<br>
                Ideal para impresiones<br>
                y pósteres.<br>
                Equipo:<br>
                EOS 5D-SR y EOS 5R<br>
                Objetivo 150/600<br>
                y macro 100 mm<br>
                Teleconvertidor X2`,
      "A10": "Política de cookies",
      "A11": "Calendario",
      "A12": "Tenga en cuenta que todas las fotos están en baja resolución para permitir una visualización óptima según el tipo de conexión; las fotos originales están en alta definición (HD).",
      "welcome-btn": "Continuar"
    },

    al: {
      "A1": "REGIONALES",
      "A2": "NATIONALES",
      "A3": "INTERNATIONALES",
      "A4": "NACHRICHT",
      "A5": "PORTAFOLIO",
      "A6": "🏁 Hallo und herzlich willkommen 🏁 – Schaut euch eure Kartfotos an! Um Fotos oder Videos zu buchen, zu kaufen oder zu bestellen, klickt einfach auf den Warenkorb und folgt den Anweisungen. Alternativ könnt ihr mir auch eine Nachricht hinterlassen, und ich melde mich schnellstmöglich bei euch. 🏁",
      "toggleText": "Stoppen Sie den Text",
      "A7": "Professioneller Fotograf im Rennkartsport",
      "A8": "Fotos schießen",
      "A9": `Ihre Fotos in HD.<br>
               Größe: 8688 px / 5792 px<br>
               9 bis 15 MB<br>
               Ideal zum Drucken<br>
               und für Poster.<br>
               Ausrüstung:<br>
               EOS 5D-SR und EOS 5R<br>
               150-600-mm-Objektiv<br>
               und 100-mm-Makroobjektiv<br>
               2x-Telekonverter`,
      "A10": "Cookie-Richtlinie",
      "A11": "Kalender",
      "A12": "Bitte beachten Sie, dass alle Fotos in niedriger Auflösung vorliegen, um eine optimale Darstellung je nach Verbindungsart zu ermöglichen; die Originalfotos liegen in HD-Qualität vor.",
      "welcome-btn": "Weitermachen"
    }
  };

  // 🔹 Fonction qui applique la langue
  function setLanguage(lang) {
    localStorage.setItem("lang", lang);

    // ✅ On ne traduit QUE les éléments définis dans translations
    Object.keys(translations[lang]).forEach(key => {
      const el = document.getElementById(key);
      if (el) {
        el.innerHTML = translations[lang][key]; // ✅ important pour <br>
      }
    });

    // 🔹 Mise à jour de la langue HTML (SEO)
    document.documentElement.lang = lang;

    // 🔹 Gestion du drapeau actif
    document.querySelectorAll(".flag").forEach(flag => {
      flag.classList.remove("active");
    });

    const activeFlag = document.getElementById("lang-" + lang);
    if (activeFlag) {
      activeFlag.classList.add("active");
    }
  }

  // 🔹 Langue sauvegardée ou défaut
  const savedLang = localStorage.getItem("lang") || "fr";
  setLanguage(savedLang);

  // 🔹 Clic sur les drapeaux
  document.getElementById("lang-fr").addEventListener("click", () => setLanguage("fr"));
  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-it").addEventListener("click", () => setLanguage("it"));
  document.getElementById("lang-es").addEventListener("click", () => setLanguage("es"));
  document.getElementById("lang-al").addEventListener("click", () => setLanguage("al"));

});