let cart = [];

    // Ajouter un produit ou service au panier
    function addToCart(name, price) {
      const itemIndex = cart.findIndex(item => item.name === name);
      if (itemIndex !== -1) {
        cart[itemIndex].quantity += 1;
      } else {
        cart.push({ name, price, quantity: 1 });
      }
      updateCart();
    }

    // Mettre à jour l'affichage du panier
    function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartContainer = document.getElementById('cart'); // Obtenir le conteneur du panier

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('li');
        cartItem.classList.add('flex', 'justify-between', 'items-center');
        cartItem.innerHTML = `
        <span>${item.name} (x${item.quantity})</span>
        <span>${itemTotal.toFixed(2)} €</span>
        `;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = total.toFixed(2) + ' €';

    // Affiche ou masque le panier en fonction de son contenu
    if (cart.length > 0) {
        cartContainer.classList.remove('hidden');
    } else {
        cartContainer.classList.add('hidden');
    }
    }

    // Ouvrir le modal
    function openModal() {
      document.getElementById('orderModal').style.display = 'flex';
    }

    // Fermer le modal
    function closeModal() {
      document.getElementById('orderModal').style.display = 'none';
    }

    // Générer le message de commande
    function generateOrderMessage() {
      let message = "Commande de l'utilisateur:\n\n";
      cart.forEach(item => {
        message += `${item.name} (x${item.quantity}) - ${item.price.toFixed(2)} € chacun\n`;
      });
      message += `\nTotal: ${document.getElementById('cart-total').textContent}`;
      return encodeURIComponent(message);
    }

    // Envoyer la commande via WhatsApp
    function sendOrderViaWhatsApp() {
      const message = generateOrderMessage();
      const phoneNumber = "33625921696";
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }

    // Envoyer la commande par e-mail
    function sendOrderViaEmail() {
      const message = generateOrderMessage();
      const email = "patrick.assis192@gmail.com";
      const subject = encodeURIComponent("Nouvelle commande");
      const mailtoUrl = `mailto:${email}?subject=${subject}&body=${message}`;
      window.open(mailtoUrl, '_blank');
    }

    // Envoyer la commande par SMS
    function sendOrderViaSms() {
      const message = generateOrderMessage();
      const smsNumber = "0625921696";
      const smsUrl = `sms:${smsNumber}?body=${message}`;
      window.open(smsUrl, '_blank');
    }
