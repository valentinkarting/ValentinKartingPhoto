// Initialisation d'EmailJS avec votre User ID
(function(){
    emailjs.init("UEQgbTpV4NaC6rHwU");
  })();
  
  // Gestion de la soumission du formulaire avec validation
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Empêche le rechargement de la page
    
    // Récupération et nettoyage des valeurs saisies par l'utilisateur
    var name    = document.getElementById('name').value.trim();
    var email   = document.getElementById('email').value.trim();
    var phone   = document.getElementById('phone').value.trim();
    var message = document.getElementById('objet').value.trim();
    
    // Vérifier que tous les champs sont remplis
    if (!name || !email || !phone || !message) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    
    // Vérifier que l'adresse email est valide (expression régulière simple)
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Veuillez saisir une adresse email valide.");
      return;
    }
    
    // Préparation des paramètres pour EmailJS
    var templateParams = {
      from_name: name,
      from_email: email,
      phone: phone,
      message: message
    };
    
    // Envoi de l'email via EmailJS
    emailjs.send('service_y6k5e8v', 'template_9e68r6o', templateParams)
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('✅Votre message a été envoyé avec succès !');
        document.getElementById('contact-form').reset(); // Réinitialisation du formulaire
      }, function(error) {
        console.log('FAILED...', error);
        alert('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.');
        console.error('Erreur dans l’envoi:', error);
    alert('Une erreur est survenue. Détails : ' + error.text);
      });
  });
  