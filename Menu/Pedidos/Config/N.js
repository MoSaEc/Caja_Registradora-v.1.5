// Cuando se carga la página
window.onload = function() {
    // Obtener el nombre de usuario de localStorage
    var username = localStorage.getItem('username');
    var message = "Bienvenido: ";
  
    var h2 = document.createElement('h2');
    h2.textContent = message + username;
  
    document.getElementById('username').appendChild(h2);
  
    // Mostrar el carrito guardado
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.querySelector('.total');
    let total = 0;
  
    cart.forEach((product) => {
      const cartItem = document.createElement('li');
      cartItem.textContent = `${product.name} x ${product.quantity} - $${product.price.toFixed(2)} cada uno, Total: $${(product.price * product.quantity).toFixed(2)}`;
      cartItems.appendChild(cartItem);
  
      total += product.price * product.quantity;
      totalElement.textContent = total.toFixed(2);
    });
  
    // Cuando se agrega un producto al carrito
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('h3').textContent;
        const productPriceText = productItem.querySelector('p:nth-of-type(2)').textContent.split(': ')[1];
        const productPrice = parseFloat(productPriceText.replace('$', ''));
        const quantity = parseInt(productItem.querySelector('.quantity').value);
  
        if (quantity > 0) {
          const product = {
            name: productName,
            price: productPrice,
            quantity: quantity
          };
  
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(product);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          const cartItem = document.createElement('li');
          cartItem.textContent = `${productName} x ${quantity} - $${productPrice.toFixed(2)} cada uno, Total: $${(productPrice * quantity).toFixed(2)}`;
          cartItems.appendChild(cartItem);
  
          total += productPrice * quantity;
          totalElement.textContent = total.toFixed(2);
  
          // Mostrar mensaje de confirmación
          alert('Carrito guardado');
        }
      });
    });
  
    // Cuando se hace clic en el botón "Terminar Pedido"
    const checkoutButton = document.querySelector('.checkout');
    checkoutButton.addEventListener('click', () => {
      // Mostrar mensaje de confirmación
      alert('Pedido Completado');
    });
  };