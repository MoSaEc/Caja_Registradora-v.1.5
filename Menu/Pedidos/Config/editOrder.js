// Cargar productos desde el localStorage
let products = JSON.parse(localStorage.getItem('products')) || [
    { id: 1, name: 'Leche Santa Clara', price: 2.99 },
    { id: 2, name: 'Pan Bimbo', price: 1.49 },
    { id: 3, name: 'Yogur Yoplait', price: 3.79 },
    { id: 4, name: 'Pasta Barrilla', price: 1.99 },
    { id: 5, name: 'Tomates La Costeña', price: 4.29 },
    { id: 6, name: 'Aceite 1-2-3', price: 6.99 },
    { id: 7, name: 'Cereal Kellogs', price: 3.49 },
    { id: 8, name: 'Mermelada Mckornick', price: 2.19 },
    { id: 9, name: 'Café Nescafe', price: 4.99 },
    { id: 10, name: 'Galletas Gamesa Chokis', price: 2.79 }
];

// Guardar productos en el localStorage
localStorage.setItem('products', JSON.stringify(products));

// Mostrar productos en la lista
const productsList = document.getElementById('productsList');
products.forEach(product => {
    const productItem = document.createElement('li');
    productItem.textContent = product.name;
    productsList.appendChild(productItem);
});

// Agregar productos al select
const productSelect = document.getElementById('productSelect');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Obtener otros elementos del DOM
const productQuantity = document.getElementById('productQuantity');
const addToCartBtn = document.getElementById('addToCartBtn');
const saveOrderBtn = document.getElementById('saveOrderBtn');
const cartItems = document.getElementById('cart-items');
const messageDiv = document.getElementById('message');

// Cargar carrito desde el localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Mostrar productos en el carrito
cart.forEach(item => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItems.appendChild(cartItem);
});

// Agregar evento al botón "Agregar al Carrito"
addToCartBtn.addEventListener('click', () => {
    const selectedProductIndex = productSelect.selectedIndex;
    const selectedProductId = parseInt(productSelect.value);

    if (selectedProductIndex > 0 && selectedProductId > 0) {
        const selectedProduct = products.find(product => product.id === selectedProductId);
        const quantity = parseInt(productQuantity.value);

        if (quantity > 0) {
            const cartItem = {
                id: selectedProduct.id,
                name: selectedProduct.name,
                price: selectedProduct.price,
                quantity: quantity
            };

            cart.push(cartItem);
            localStorage.setItem('cart', JSON.stringify(cart));

            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${cartItem.name} x ${cartItem.quantity} - $${(cartItem.price * cartItem.quantity).toFixed(2)}`;
            cartItems.appendChild(cartItemElement);

            productQuantity.value = '0';

            messageDiv.textContent = 'Producto agregado al carrito con éxito!';
            messageDiv.style.display = 'block';
            setTimeout(() => {
                messageDiv.style.display = 'none';
            }, 3000);
        } else {
            alert('Por favor ingresa una cantidad válida.');
        }
    } else {
        alert('Por favor selecciona un producto.');
    }
});

// Agregar evento al botón "Guardar"
saveOrderBtn.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para guardar el pedido
    // y actualizar el localStorage, etc.

    alert('Pedido guardado exitosamente.');
});