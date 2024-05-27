// Datos Maestros
var users = {
    "a": "a",
    "Mk": "Mk",
    "Luis" :"24/09/07"
};


var username = "";

// Función para verificar el inicio de sesión
function login(event) {
    event.preventDefault();

    var username = document.querySelector('.login-form input[type="text"]').value;
    var password = document.querySelector('.login-form input[type="password"]').value;

    if (users[username] && users[username] === password) {
        // Almacenar el nombre de usuario en localStorage
        localStorage.setItem('username', username);

        // Redirigir a Menu.html si las credenciales son correctas
        window.location.href = "./Menu/Menu.html";
        alert("Bienvenido");
    } else {
        alert("Nombre de usuario o contraseña incorrectos");
    }
}


// Función para registrar un nuevo usuario
function register(event) {
    event.preventDefault(); 

    var username = document.querySelector('.register-form input[type="text"]').value;
    var password1 = document.querySelector('.register-form input[type="password"]:nth-child(3)').value;
    var password2 = document.querySelector('.register-form input[type="password"]:nth-child(4)').value;

    if (password1 === password2) {
        users[username] = password1;
        alert("Registro exitoso");
    } else {
        alert("Las contraseñas no coinciden");
    }
}

document.querySelector('.login-form').addEventListener('submit', login);
document.querySelector('.register-form').addEventListener('submit', register);
