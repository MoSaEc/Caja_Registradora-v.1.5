window.onload = function() {
    // Obtener el nombre de usuario de localStorage
    var username = localStorage.getItem('username');
    var message= "Bienvenido: "

    // Mostrar el nombre de usuario en la barra de navegación
    document.getElementById('username').textContent = message + username;

     // Obtener los botones
     var buttons = document.getElementsByClassName('crud-button');

     // Asignar un evento de clic a cada botón
     for (var i = 0; i < buttons.length; i++) {
         buttons[i].addEventListener('click', function() {
             // Redirigir a diferentes páginas dependiendo del texto del botón
             switch (this.children[1].textContent) {
                 case 'Nuevo Pedido':
                     window.location.href = './Pedidos/nuevo.html';
                     break;
                 case 'Editar Pedido':
                     window.location.href = './Pedidos/editar.html';
                     break;
                 case 'Eliminar Pedido':
                     
                     break;
                 case 'Pagar':
                     window.location.href = './Pedidos/pagar.html';
                     break;
             }
         });
     }
}
