// Cuando se carga la página
window.onload = function() {
    // Obtener el nombre de usuario de localStorage
    var username = localStorage.getItem('username');
    var message = "Bienvenido: ";

    var usernameElement = document.getElementById('username');
    usernameElement.textContent = message + username;

    // Mostrar el carrito guardado
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const receiptItems = document.getElementById('receipt-items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    let subtotal = 0;
    let tax = 0;
    let total = 0;

    cart.forEach((product) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>$${(product.price * product.quantity).toFixed(2)}</td>
        `;
        receiptItems.appendChild(row);

        subtotal += product.price * product.quantity;
        tax = subtotal * 0.16;
        total = subtotal + tax;
    });

    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    taxElement.textContent = `$${tax.toFixed(2)}`;
    totalElement.textContent = `$${total.toFixed(2)}`;

    // Cuando se hace clic en el botón "Pagar"
const payButton = document.getElementById('payButton');
payButton.addEventListener('click', () => {
    // Mostrar mensaje de confirmación
    alert('Ticket Pagado');

    // Vaciar el localStorage
    localStorage.clear();

    // Actualizar el carrito en la interfaz
    const receiptItems = document.getElementById('receipt-items');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');

    // Establecer los valores del carrito en 0
    receiptItems.innerHTML = '';
    subtotalElement.textContent = '$0.00';
    taxElement.textContent = '$0.00';
    totalElement.textContent = '$0.00';
});

    // Cuando se hace clic en el botón "Imprimir"
    const printButton = document.getElementById('printButton');
    printButton.addEventListener('click', () => {
        // Generar PDF del ticket
        window.print();
    });
};