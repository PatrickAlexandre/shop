function sendSms(event) {
  event.preventDefault();  // Empêche le rechargement de la page

  // Récupère les valeurs des champs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Compose le contenu du SMS
  const smsContent = `Nom: ${name}, Email: ${email}, Message: ${message}`;
  const phoneNumber = '+33625921696';
  const smsLink = `sms:${phoneNumber}?&body=${encodeURIComponent(smsContent)}`;

  // Ouvre le lien pour déclencher l'application SMS
  window.location.href = smsLink;
}

function sendOrderSms(serviceName) {
  // Compose le SMS pour la commande de service
  const smsContent = `Commande de service : ${serviceName}. Merci de bien vouloir organiser la prestation.`;
  const phoneNumber = '+33625921696';
  const smsLink = `sms:${phoneNumber}?&body=${encodeURIComponent(smsContent)}`;

  // Ouvre l'application SMS avec le message pré-rempli
  window.location.href = smsLink;
}
