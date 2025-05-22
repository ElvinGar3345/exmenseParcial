document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Validación de usuario y contraseña (puedes mejorarlo con una base de datos)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") { // Simulación de credenciales correctas
        window.location.href = "inicio.html"; // Redirecciona a la página de inicio del proyecto
    } else {
        alert("Usuario o contraseña incorrectos. Inténtalo nuevamente.");
    }
});
