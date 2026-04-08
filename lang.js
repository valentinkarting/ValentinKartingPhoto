document.addEventListener("DOMContentLoaded", function () {

  // 🔹 Traductions des éléments par ID
  window.translations = {
    fr: {
      "A1": "RÉGIONALES",
      "A2": "NATIONALES",
      "A3": "INTERNATIONALES",
      "A4": "ACTUALITÉS",
      "A5": "PORTE-FOLIO",
      "A6": "🏁 Bonjour et bienvenue 🏁 - Découvrez vos photos de karting ! Pour réserver acheter ou commander des photos ou vidéos cliquez sur le panier et laissez-vous guider ou bien laissez un message je vous répondrais le plus vite possible🏁",
      "toggleText": "Arrêter le texte",
      "toggleTextPlay": "Afficher le texte",
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
       "A47": "Total à régler 50€",
       // page compte.html
       "A52": "Connexion",
       "email": "Email",
       "password": "Mot de passe",
       "showLoginPasswordLabel": "Afficher le mot de passe",
       "loginBtn": "Se connecter",
       "A53": "Créer un compte",
       "firstName": "Prénom",
       "lastName": "Nom",
       "signupEmail": "Email",
       "phone": "Numéro de téléphone",
       "signupPassword": "Mot de passe",
       "showSignupPasswordLabel": "Afficher le mot de passe",
       "signupBtn": "Créer compte",
       // place disponible pour traduction de message
       "A54": "Quitter",
       // page moncompte.html
       "A55": "Mon Compte",
       "label-lastname" : "Nom",
       "label-firstname": "Prénom",
       "label-email": "Email",
       "label-phone": "Téléphone",
       "editBtn": "Modifier",
       "A56": "Historique des achats",
       "logoutBtn": "Se déconnecter",
       "deleteAccountBtn": "Supprimer mon compte",
       "A57": "Quitter",
       //  page RGPD
       "A58": "Modifier mes données personnelles",
       "A59": "Conformément au RGPD, vous pouvez consulter, modifier ou supprimer vos données personnelles. Pour ce faire sur la page d'accueil connecter vous puis accéder à votre compte et modifier ou supprimer vos données.",
       "A60": "Quitter",
       "A61": "Politique de Confidentialité",
       // page confi.html  pour Confidentialité
       "A62": "Politique de Confidentialité",
       "A63": "Dernière mise à jour :",
       "A64": "1. Introduction",
       "A65": "Nous accordons une grande importance à la protection de vos données personnelles. Cette politique deconfidentialité explique comment nous collectons, utilisons et protégeons vos informations.",
       "A66": "2. Données collectées",
       "A67": "Nous pouvons collecter les informations suivantes :",
       "A68": `<li>Nom et prénom</li>
               <li>Adresse e-mail</li>
               <li>Numéro de téléphone</li>
               <li>Adresse IP et données de navigation</li>
               <li>Préférences et interactions avec notre site</li>`,
       "A69": "3. Finalités du traitement",
       "A70": "Nous utilisons vos données pour :",
       "A71": `<li>Gérer votre compte utilisateur</li>
               <li>Vous envoyer des informations et newsletters</li>
               <li>Améliorer nos services et votre expérience</li>
               <li>Respecter nos obligations légales</li>`,
       "A72": "4. Partage des données",
       "A73": "Vos informations ne sont ni vendues ni échangées. Elles peuvent être partagées avec :",
       "A74": `<li>Nos prestataires techniques (hébergement, emailing, analyse de trafic)</li>
               <li>Les autorités en cas d'obligation légale</li>`,
       "A75": "5. Durée de conservation",
       "A76": "Vos données sont conservées aussi longtemps que nécessaire pour les finalités mentionnées ci-dessus.",
       "A77": "6. Vos droits",
       "A78": "Conformément au RGPD, vous avez les droits suivants :",
       "A79": `<li>Accéder à vos données</li>
               <li>Rectifier ou supprimer vos informations</li>`,
       "A80": "Pour exercer ces droits, connectez vous et accédez à votre compte",
       "A81": "7. Sécurité",
       "A82": "Nous mettons en place des mesures de sécurité pour protéger vos informations.",
       "A83": "8. Cookies",
       "A84": "Nous n'utilisons pas des cookies sur notre site.",
       "A85": "9. Modifications",
       "A86": "Nous pouvons modifier cette politique. Toute mise à jour sera publiée sur cette page.",
       "A87": "J'accepte",
       //  page politique de cookies

      
       

    },       

    en: {
      "A1": "REGIONAL",
      "A2": "NATIONAL",
      "A3": "INTERNATIONAL",
      "A4": "NEWS",
      "A5": "PORTFOLIO",
      "A6": "🏁 Hello and welcome 🏁 - Discover your karting photos! To book, buy or order photos or videos, click on the shopping cart and follow the instructions, or leave a message and I will reply as soon as possible 🏁",
      "toggleText": "Stop the text",
      "toggleTextPlay": "Show the text", 
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
      "A47": "Total to Pay €50",
      // Page compte.html
      "A52": "Login",
      "email": "Email",
      "password": "Password",
      "showLoginPasswordLabel": "Show Password",
      "loginBtn": "Log in",
      "A53": "Create an Account",
      "firstName": "First Name",
      "lastName": "Last Name",
      "signupEmail": "Email",
      "phone": "Phone number",
      "signupPassword": "Password",
      "showSignupPasswordLabel": "Show Password",
      "signupBtn": "Create Account",
      // Space available for message translation
      "A54": "Exit",
      // page mon compte.html
      "A55": "My Account",
      "label-lastname" : "Last Name",
      "label-firstname": "First Name",
      "label-email": "Email",
      "label-phone": "phone",
      "editBtn": "Modify",
      "A56": "Purchase History",
      "logoutBtn": "Log Out",
      "deleteAccountBtn": "Delete My Account",
      "A57": "Exit",
      // page RGPD
      "A58": "Edit my personal data",
      "A59": "In accordance with the GDPR, you can view, modify, or delete your personal data. To do so, log in to your account on the homepage and modify or delete your data.",
      "A60": "Exit",
      "A61": "Privacy Policy",
      // page confi.html  pour Confidentialité
      "A62": "Privacy Policy",
      "A63": "Last updated:",
      "A64": "1. Introduction",
      "A65": "We attach great importance to the protection of your personal data. This privacy policy explains how we collect, use, and protect your information.",
      "A66": "2. Data Collected",
      "A67": "We may collect the following information:",
      "A68": `<li>First and last name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>IP address and browsing data</li>
              <li>Preferences and interactions with our site</li>`,
      "A69": "3. Purposes of Processing",
      "A70": "We use your data to:",
      "A71": `<li>Manage your user account</li>
              <li>Send you information and newsletters</li>
              <li>Improving our services and your experience</li>
              <li>Complying with our legal obligations</li>`,
      "A72": "4. Data Sharing",
      "A73": "Your information is neither sold nor exchanged. It may be shared with:",
      "A74": `<li>Our technical service providers (hosting, email marketing, traffic analysis)</li>
              <li>The authorities in the event of a legal obligation</li>`,
      "A75": "5. Data Retention Period",
      "A76": "Your data is kept for as long as necessary for the purposes mentioned above.",
      "A77": "6. Your Rights",
      "A78": "In accordance with the GDPR, you have the following rights:",
      "A79": `<li>Access your data</li>
              <li>Rectify or delete your information</li>`,
      "A80": "To exercise To access these rights, log in and access your account.",
      "A81": "7. Security",
      "A82": "We implement security measures to protect your information.",
      "A83": "8. Cookies",
      "A84": "We do not use cookies on our site.",
      "A85": "9. Changes",
      "A86": "We may change this policy. Any updates will be posted on this page.",
      "A87": "I agree.",
      //  page politique de cookies

    },  

    it: {
      "A1": "REGIONALI",
      "A2": "NAZIONALI",
      "A3": "INTERNAZIONALI",
      "A4": "NOTIZIE",
      "A5": "PORTFOLIO",
      "A6":"🏁 Ciao e benvenuto 🏁 - Dai un'occhiata alle tue foto di karting! Per prenotare, acquistare o ordinare foto o video, clicca sul carrello e segui le istruzioni, oppure lascia un messaggio e ti risponderò il prima possibile. 🏁",
      "toggleText": "Stop il testo",
      "toggleTextPlay": "Mostra il testo",
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
       "A47": "Totale da pagare €50",
       // page compte.html
       "A52": "Accedi",
       "email": "Email",
       "password": "Password",
       "showLoginPasswordLabel": "Mostra password",
       "loginBtn": "Accedi",
       "A53": "Crea un account",
       "firstName": "Nome",
       "lastName": "Cognome",
       "signupEmail": "Email",
       "phone": "Numero di telefono",
       "signupPassword": "Password",
       "showSignupPasswordLabel": "Mostra password",
       "signupBtn": "Crea un account",
       "A54": "Esci",
       // page moncompte.html
       "A55": "Il mio account",
       "label-lastname" : "Cognome",
       "label-firstname": "Nome",
       "label-email": "Email",
       "label-phone": "telefono",
       "editBtn": "Per modificare",
       "A56": "Cronologia acquisti",
       "logoutBtn": "Esci",
       "deleteAccountBtn": "Elimina il mio account",
       "A57": "Esci",
       //  page RGPD
       "A58": "Modifica i miei dati personali",
       "A59": "Ai sensi del GDPR, puoi visualizzare, modificare o eliminare i tuoi dati personali. Per farlo, accedi al tuo account sulla homepage e modifica o elimina i tuoi dati.",
       "A60": "Esci",
       "A61": "Informativa sulla privacy",
       //  page conf.html pour Confidentialité
      "A62": "Informativa sulla privacy",
      "A63": "Ultimo aggiornamento:",
      "A64": "1. Introduzione",
      "A65": "Attribuiamo grande importanza alla protezione dei vostri dati personali. Questa informativa sulla privacy spiega come raccogliamo, utilizziamo e proteggiamo le vostre informazioni.",
      "A66": "2. Dati raccolti",
      "A67": "Potremmo raccogliere le seguenti informazioni:",
      "A68": `<li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Numero di telefono</li>
              <li>Indirizzo IP e dati di navigazione</li>
              <li>Preferenze e interazioni con il nostro sito</li>`,
      "A69": "3. Finalità del trattamento",   
      "A70": "Utilizziamo i tuoi dati per:",
      "A71": `<li>Gestire il tuo account utente</li>
              <li>Inviarti informazioni e newsletter</li>
              <li>Migliorare i nostri servizi e la tua esperienza</li>
              <li>Adempiere ai nostri obblighi legali</li>`,
      "A72": "4. Condivisione dei dati",
      "A73": "Le tue informazioni non vengono vendute né scambiate. Possono essere condivise con:",
      "A74": `<li>I nostri fornitori di servizi tecnici (hosting, email marketing, analisi del traffico)</li>
              <li>Le autorità in caso di obbligo legale</li>`,
      "A75": "5. Periodo di conservazione dei dati",
      "A76": "I tuoi dati vengono conservati per il tempo necessario al raggiungimento delle finalità sopra indicate.",
      "A77": "6. I tuoi diritti",
      "A78": "Ai sensi del GDPR, hai i seguenti diritti:",
      "A79": `<li>Accedere ai tuoi dati</li>
              <li>Rettificare o cancellare le tue informazioni</li>`,
      "A80": "Per esercitare questi diritti, accedi al tuo account.",
      "A81": "7. Sicurezza",
      "A82": "Adottiamo misure di sicurezza per proteggere le tue informazioni.",
      "A83": "8. Cookie",
      "A84": "Non utilizziamo cookie sul nostro sito.",
      "A85": "9. Modifiche",
      "A86": "Potremmo modificare la presente informativa. Eventuali aggiornamenti saranno pubblicati su questa pagina.",
      "A87": "Accetto."


    },

    es: {
      "A1": "REGIONALES",
      "A2": "NACIONALES",
      "A3": "INTERNACIONALES",
      "A4": "NOTICIAS",
      "A5": "PORTAFOLIO",
      "A6": "🏁 ¡Hola y bienvenidos! 🏁 ¡Miren sus fotos de karting! Para reservar, comprar o encargar fotos o videos, hagan clic en el carrito de compras y sigan las instrucciones, o dejen un mensaje y les responderé lo antes posible. 🏁",
      "toggleText": "Detener el texto",
      "toggleTextPlay": "Mostrar el texto",
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
       "A47": "Total a pagar 50 €",
       // page compte.html
       "A52": "Iniciar sesión",
       "email": "Correo electrónico",
       "password": "Contraseña",
       "showLoginPasswordLabel": "Mostrar contraseña",
       "loginBtn": "Iniciar sesión",
       "A53": "Crear una cuenta",
       "firstName": "Nombre",
       "lastName": "Apellido",
       "signupEmail": "Correo electrónico",
       "phone": "Número de teléfono",
       "signupPassword": "Contraseña",
       "showSignupPasswordLabel": "Mostrar contraseña",
       "signupBtn": "Crear cuenta",
       "A54": "Salir",
       // page moncompte.html
       "A55": "Mi cuenta",
       "label-lastname" : "Apellido",
       "label-firstname": "Nombre",
       "label-email": "Correo electrónico",
       "label-phone": "teléfono",
       "editBtn": "Per modificare",
       "A56": "Historial de compras",
       "logoutBtn": "Cerrar sesión",
       "deleteAccountBtn": "Eliminar mi cuenta",
       "A57": "Salir",
       //  page RGPD
       "A58": "Editar mis datos personales.",
       "A59": "De conformidad con el RGPD, puede consultar, modificar o eliminar sus datos personales. Para ello, inicie sesión en su cuenta en la página principal y modifique o elimine sus datos.",
       "A60": "Salir.",
       "A61": "Política de privacidad.",
       //  page confi.html  pour Confidentialité
       "A62": "Política de privacidad",
       "A63": "Última actualización:",
       "A64": "1. Introducción",
       "A65": "Concedemos gran importancia a la protección de sus datos personales. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos su información.",
       "A66": "2. Datos recopilados",
       "A67": "Podemos recopilar la siguiente información:",
       "A68": `<li>Nombre y apellidos</li>
               <li>Dirección de correo electrónico</li>
               <li>Número de teléfono</li>
               <li>Dirección IP y datos de navegación</li>
               <li>Preferencias e interacciones con nuestro sitio</li>`,
       "A69": "3. Finalidades del tratamiento",
       "A70": "Utilizamos sus datos para:",
       "A71": `<li>Gestionar su cuenta de usuario</li>
               <li>Enviarle información y boletines informativos</li>
               <li>Mejorar nuestros servicios y su experiencia</li>
               <li>Cumplir con nuestras obligaciones legales</li>`,
       "A72": "4. Intercambio de datos",
       "A73": "Su información no se vende ni se intercambia. Puede compartirse con:",
       "A74": `<li>Nuestros proveedores de servicios técnicos (hosting, marketing por correo electrónico, análisis de tráfico)</li>
              <li>Las autoridades en caso de obligación legal</li>`,
       "A75": "5. Periodo de conservación de datos",
       "A76": "Sus datos se conservan durante el tiempo necesario para las finalidades mencionadas anteriormente.",
       "A77": "6. Sus derechos",
       "A78": "«De conformidad con el RGPD, usted tiene los siguientes derechos:",
       "A79": `<li>Acceder a sus datos</li>
               <li>Rectificar o eliminar su información</li>`,
       "A80": "«Para ejercer estos derechos, inicie sesión y acceda a su cuenta.",
       "A81": "7. Seguridad",
       "A82": "Implementamos medidas de seguridad para proteger su información.",
       "A83": "8. Cookies",
       "A84": "No utilizamos cookies en nuestro sitio web.",
       "A85": "9. Cambios",
       "A86": "Podemos modificar esta política. Cualquier actualización se publicará en esta página.",
       "A87": "Acepto.",
       //  page politique de cookies


    },

    al: {
      "A1": "REGIONALES",
      "A2": "NATIONALES",
      "A3": "INTERNATIONALES",
      "A4": "NACHRICHT",
      "A5": "PORTAFOLIO",
      "A6": "🏁 Hallo und herzlich willkommen 🏁 Schaut euch eure Kartfotos an! Um Fotos oder Videos zu buchen, zu kaufen oder zu bestellen, klickt einfach auf den Warenkorb und folgt den Anweisungen. Alternativ könnt ihr mir auch eine Nachricht hinterlassen, und ich melde mich schnellstmöglich bei euch. 🏁",
      "toggleText": "Stoppen Sie den Text.",
      "toggleTextPlay": "Text anzeigen",
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
       "A47": "Gesamtbetrag: 50 €",
       // page compte.html
       "A52": "Anmelden",
       "email": "E-Mail",
       "password": "Passwort",
       "showLoginPasswordLabel": "Passwort anzeigen",
       "loginBtn": "Anmelden",
       "A53": "Konto erstellen",
       "firstName": "Vorname",
       "lastName": "Nachname",
       "signupEmail": "E-Mail",
       "phone": "Telefonnummer",
       "signupPassword": "Passwort",
       "showSignupPasswordLabel": "Passwort anzeigen",
       "signupBtn": "Konto erstellen",
       "A54": "Beenden",
       // page moncompte.html
       "A55": "Mein Konto",
       "label-lastname" : "Nachname",
       "label-firstname": "Vorname",
       "label-email": "E-Mail",
       "label-phone": "Telefon",
       "editBtn": "Zum Ändern",
       "A56": "Kaufhistorie",
       "logoutBtn": "Abmelden",
       "deleteAccountBtn": "Mein Konto löschen",
       "A57": "Beenden",
       //  page RGPD
       "A58": "Meine persönlichen Daten bearbeiten",
       "A59": "Gemäß der DSGVO können Sie Ihre personenbezogenen Daten einsehen, ändern oder löschen. Melden Sie sich dazu auf der Startseite in Ihrem Konto an und ändern oder löschen Sie Ihre Daten.",
       "A60": "Abmelden",
       "A61": "Datenschutzerklärung",
       //  page confi.html pour Confidentialité
       "A62": "Datenschutzrichtlinie",
       "A63": "Letzte Aktualisierung:",
       "A64": "1. Einleitung",
       "A65": "Der Schutz Ihrer personenbezogenen Daten ist uns sehr wichtig. Diese Datenschutzrichtlinie erläutert, wie wir Ihre Daten erfassen, verwenden und schützen.",
       "A66": "2. Erfasste Daten",
       "A67": "Wir erfassen möglicherweise die folgenden Informationen:",
       "A68": `<li>Vor- und Nachname</li>
               <li>E-Mail-Adresse</li>
               <li>Telefonnummer</li>
               <li>IP-Adresse und Browserdaten</li>
               <li>Präferenzen und Interaktionen mit unserer Website</li>`,
       "A69": "3. Zwecke der Datenverarbeitung",
       "A70": "Wir verwenden Ihre Daten für:",
       "A71": `<li>Verwaltung Ihres Benutzerkontos</li>
               <li>Versand von Informationen und Newslettern</li>
               <li>Verbesserung unserer Dienste und Ihrer Nutzererfahrung</li>
               <li>Erfüllung unserer rechtlichen Verpflichtungen</li>`,
       "A72": "4. Datenweitergabe",
       "A73": "Ihre Daten werden weder verkauft noch getauscht. Sie können weitergegeben werden an:",
       "A74": `<li>Unsere technischen Dienstleister (Hosting, E-Mail-Marketing, Traffic-Analyse)</li>
               <li>Die Behörden im Falle einer rechtlichen Verpflichtung</li>`,
       "A75": "5. Speicherdauer",
       "A76": "Ihre Daten werden so lange gespeichert, wie es für die oben genannten Zwecke erforderlich ist.",
       "A77": "6. Ihre Rechte",
       "A78": "Gemäß der DSGVO haben Sie folgende Rechte:",
       "A79": `<li>Zugriff auf Ihre Daten</li>
               <li>Recht auf Berichtigung oder Löschung Ihrer Daten</li>`,
       "A80": "Um diese Rechte auszuüben, melden Sie sich an und greifen Sie auf Ihr Konto zu.",
       "A81": "7. Sicherheit",
       "A82": "Wir setzen Sicherheitsmaßnahmen zum Schutz Ihrer Daten ein.",
       "A83": "8. Cookies",
       "A84": "Wir verwenden keine Cookies auf unserer Website.",
       "A85": "9. Änderungen",
       "A86": "Wir behalten uns das Recht vor, diese Richtlinie zu ändern. Aktualisierungen werden auf dieser Seite veröffentlicht.",
       "A87": "Ich stimme zu.",
       //  page politique de cookies



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