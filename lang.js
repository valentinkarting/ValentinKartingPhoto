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
       "welcome-btn": "Continuer",
       "reservationBtn": "Réservez vos médias",
       "achatBtn": "Achetez vos photos",
       "A13": "Pack 10 photos",
       "A14": "A l'unité 6€/photo",
       "A15": "Photos / Vidéos",
       "A16": "Demandes particulières",
       "closeModalReservation": "Annuler",
       "A17": "Choisissez votre option",
       "closeModal": "Annuler",
       "A18": "Choisissez votre option",
       "A19": "Nom Prénom",
       "A20": "Adresse Mail",
       "A21": "Téléphone",
       "A22": "Objet",
       "A24": "Pour toute réservation un tarif de prestation vous sera envoyé vous devrez le retourner rempli daté et signé.",
       "A23": "Envoyer",
       "A24": "Nom Prénom",
       "A25": "Catégorie et numéro",
       "A26": "Date et lieu du meeting",
       "A27": "Adresse Mail",
       "A28": "Pack 10 photos 50€ ( au choix).",
       "A29": "Réel 40 à 75€ (15 à 30s).",
       "A30": "Pack réel + photos 80€ (10 photos au choix + réel 15s).",
       "A31": "Valider",
       "A32": "PAIEMENT LORS DE L'ÉVÈNEMENT.",
       "A33": "Envoyer",
       "A34": "Nom Prénom / Entreprise / Comité d'entreprise.",
       "A35": "Date et lieu de l'évènement.",
       "A36": "Adresse Mail",
       "A37": "Précisez votre demande",
       "A38": "Valider",
       "A39":"Merci pour votre demande je vous réponds rapidement.",
       "A40": "Un tarif de prestation sera envoyé vous devrez le retourner rempli daté et signé.",
       "A41": "30% à la commande et solde lors de l'évènement.",
       "A42": "BON ROULAGE",
       "A43": "Envoyer",
       "input1": "Adresse Mail",
       "input2": "Meeting",
       "input4": "Nom et Prénom",
       "input3": "Nom des photos",
       "A44": "Pack 10 photos 50€",
       "A45": "Valider",
       "A46": "Récapitulatif de commande",
       "A47": "Total à régler 50€"       
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
      "welcome-btn": "Continue",
       "reservationBtn": "Reserve your media",
       "achatBtn": "Buy your photos",
       "A13": "Pack of 10 photos",
       "A14": "Photo 6€ each",
       "A15": "Photos / Videos",
       "A16": "Special requests",
       "closeModalReservation": "Cancel",
       "A17": "Choose your option",
       "closeModal": "Cancel",
       "A18": "Choose your option",
       "A19": "name surname",
       "A20": "Email Address",
       "A21": "Phone",
       "A22": "Object",
       "A24": "For all bookings, a service price list will be sent to you; you must return it completed, dated and signed.",
       "A23": "Send",
       "A24": "First Name Last Name",
       "A25": "Category and Number",
       "A26": "Date and Location of Meeting",
       "A27": "Email Address",
       "A28": "Package of 10 photos 50€ (your choice)",
       "A29": "Real 40 to 75€ (15 to 30 seconds)",
       "A30": "Real + Photos Package 80€ (10 photos of your choice + 15 seconds real)",
       "A31": "Submit",
       "A32": "PAYMENT AT THE EVENT",
      "A33": "Submit",
      "A34": "First Name Last Name / Company / Works Council.",
      "A35": "Date and location of the event.",
      "A36": "Email Address",
      "A37": "Specify your request",
      "A38": "Submit",
      "A39": "Thank you for your request, I will respond quickly.",
      "A40": "A service price list will be sent; you must return it completed, dated, and signed.",
      "A41": "30% upon ordering and balance at the event.",
      "A42": "Have a good trip",
      "A43": "Submit",
      "input1": "Email Address",
      "input2": "Meeting",
      "input4": "First and Last Name",
      "input3": "Photo Names",
      "A44": "Pack of 10 photos €50",
      "A45": "Confirm",
      "A46": "Order Summary",
      "A47": "Total to Pay €50"

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
      "welcome-btn": "Continuare",
       "reservationBtn": "Prenota i tuoi contenuti multimediali",
       "achatBtn": "Acquista le tue foto",
       "A13": "Pacchetto di 10 foto",
       "A14": "6€ a foto",
       "A15": "Foto / Video",
       "A16": "Richieste speciali",
       "closeModalReservation": "Cancellare",
       "A17": "Scegli la tua opzione",
       "closeModal": "Cancellare",
       "A18": "Scegli la tua opzione",
       "A19": "nome cognome",
       "A20": "Indirizzo e-mail",
       "A21": "Telefono",
       "A22": "Oggetto",
       "A24": "Per tutte le prenotazioni, vi verrà inviato un listino prezzi dei servizi; dovrete restituirlo compilato, datato e firmato.",
       "A23": "Inviare",
       "A24": "Nome Cognome",
       "A25": "Categoria e numero",
       "A26": "Data e luogo dell'incontro",
       "A27": "Indirizzo email",
       "A28": "Pacchetto 10 foto €50 (a scelta)",
       "A29": "Servizio reale da 40 a 75 € (da 15 a 30 secondi)",
       "A30": "Servizio reale + Pacchetto foto €80 (10 foto a scelta + 15 secondi di servizio reale)",
       "A31": "Invia",
       "A32": "PAGAMENTO ALL'EVENTO",
       "A33": "Invia",
       "A34": "Nome Cognome / Azienda / Consiglio di fabbrica.",
       "A35": "Data e luogo dell'evento.",
       "A36": "Indirizzo e-mail",
       "A37": "Specificare la richiesta",
       "A38": "Invia",
       "A39": "Grazie per la sua richiesta, le risponderò al più presto.",
       "A40": "Le verrà inviato un listino prezzi; la preghiamo di restituirlo compilato, datato e firmato.",
       "A41": "30% al momento dell'ordine e saldo all'evento.",
       "A42": "Buon viaggio",
       "A43": "Invia",
       "input1": "Indirizzo email",
       "input2": "Riunione",
       "input4": "Nome e cognome",
       "input3": "Nomi delle foto",
       "A44": "Pacchetto di 10 foto €50",
       "A45": "Conferma",
       "A46": "Riepilogo ordine",
       "A47": "Totale da pagare €50"




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
      "welcome-btn": "Continuar",
       "reservationBtn": "Reserva tu medio",
       "achatBtn": "Compra tus fotos",
       "A13": "Paquete de 10 fotos",
       "A14": "6€ por foto",
       "A15": "Fotos / Vídeos",
       "A16": "Peticiones especiales",
       "closeModalReservation": "Cancelar",
       "A17": "Elige tu opción",
       "closeModal": "Cancelar",
       "A18": "Elige tu opción",
       "A19": "nombre apellido",
       "A20": "Dirección de correo electrónico",
       "A21": "Teléfono",
       "A22": "Objeto",
       "A24": "Para todas las reservas, se le enviará una lista de precios de los servicios; deberá devolverla cumplimentada, fechada y firmada.",
       "A23": "Enviar",
       "A24": "Nombre y Apellidos",
       "A25": "Categoría y Número",
       "A26": "Fecha y Lugar de la Reunión",
       "A27": "Correo Electrónico",
       "A28": "Paquete de 10 fotos: 50 € (a elegir)",
       "A29": "Vídeo: 40-75 € (15-30 segundos)",
       "A30": "Paquete de vídeo + fotos: 80 € (10 fotos a elegir + vídeo de 15 segundos)",
       "A31": "Enviar",
       "A32": "Pago en el evento",
       "A33": "Enviar",
       "A34": "Nombre Apellido / Empresa / Comité de Empresa.",
       "A35": "Fecha y lugar del evento.",
       "A36": "Correo electrónico",
       "A37": "Especifique su solicitud",
       "A38": "Enviar",
       "A39": "Gracias por su solicitud, le responderé a la brevedad.",
       "A40": "Se le enviará una lista de precios del servicio; deberá devolverla completa, fechada y firmada.",
       "A41": "30% al realizar el pedido y el resto en el evento.",
       "A42": "Que tenga un buen viaje",
       "A43": "Enviar",
       "input1": "Correo electrónico",
       "input2": "Reunión",
       "input4": "Nombre y apellidos",
       "input3": "Nombres de las fotos",
       "A44": "Paquete de 10 fotos 50 €",  
       "A45": "Confirmar",
       "A46": "Resumen del pedido",
       "A47": "Total a pagar 50 €"


    },

    al: {
      "A1": "REGIONALES",
      "A2": "NATIONALES",
      "A3": "INTERNATIONALES",
      "A4": "NACHRICHT",
      "A5": "PORTAFOLIO",
      "A6": "🏁 Hallo und herzlich willkommen 🏁 Schaut euch eure Kartfotos an! Um Fotos oder Videos zu buchen, zu kaufen oder zu bestellen, klickt einfach auf den Warenkorb und folgt den Anweisungen. Alternativ könnt ihr mir auch eine Nachricht hinterlassen, und ich melde mich schnellstmöglich bei euch. 🏁",
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
      "welcome-btn": "Weitermachen",
       "reservationBtn": "Reservieren Sie Ihre Medien",
       "achatBtn": "Kaufen Sie Ihre Fotos",
       "A13": "10er-Pack Fotos",
       "A14": "6 € pro Foto",
       "A15": "Fotos / Videos",
       "A16": "Sonderwünsche",
       "closeModalReservation": "Stornieren",
       "A17": "Wählen Sie Ihre Option",
       "closeModal": "Stornieren",
       "A18": "Wählen Sie Ihre Option",
       "A19": "Vorname Nachname",
       "A20": "E-Mail-Adresse",
       "A21": "Telefon",
       "A22": "Objekt",
       "A24": "Für jede Buchung erhalten Sie eine Preisliste der angebotenen Dienstleistungen; diese muss ausgefüllt, datiert und unterschrieben zurückgesendet werden.",
       "A23": "Schicken",
       "A24": "Vorname Nachname",
       "A25": "Kategorie und Nummer",
       "A26": "Datum und Ort des Treffens",
       "A27": "E-Mail-Adresse",
       "A28": "10 Fotos 50 € (nach Wahl)",
       "A29": "Echter Auftritt 40 bis 75 € (15 bis 30 Sekunden)",
       "A30": "Echter Auftritt + Fotos 80 € (10 Fotos nach Wahl + 15 Sekunden echter Auftritt)",
       "A31": "Absenden",
       "A32": "Zahlung bei der Veranstaltung",
       "A33": "Absenden",
       "A34": "Vorname Nachname / Firma / Betriebsrat.",
       "A35": "Datum und Ort der Veranstaltung.",
       "A36": "E-Mail-Adresse",
       "A37": "Geben Sie Ihre Anfrage an.",
       "A38": "Absenden.",
       "A39": "Vielen Dank für Ihre Anfrage. Ich werde Ihnen umgehend antworten.",
       "A40": "Sie erhalten eine Preisliste. Bitte senden Sie diese ausgefüllt, datiert und unterschrieben zurück.",
       "A41": "30 % bei Bestellung, Restzahlung bei der Veranstaltung.",
       "A42": "Gute Reise.",
       "A43": "Absenden",
       "input1": "E-Mail-Adresse",
       "input2": "Termin",
       "input4": "Vor- und Nachname",
       "input3": "Namen der Fotos",
       "A44": "10 Fotos, 50 €",
       "A45": "Bestätigen",
       "A46": "Bestellübersicht",
       "A47": "Gesamtbetrag: 50 €"
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