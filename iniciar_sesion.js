document.addEventListener('DOMContentLoaded', function() {
    // Obtiene los elementos del formulario y del mensaje de error
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const adminIDInput = document.getElementById('adminID');
    const errorMessage = document.getElementById('errorMessage');

    // Agrega un evento de escucha para el envío del formulario
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Verifica si el usuario es un admin (simulado aquí con un usuario y contraseña específicos)
        const isAdmin = (emailInput.value === 'josecarlosanzuetorodas@gmail.com' && 
                         passwordInput.value === '12345' && 
                         adminIDInput.value === 'admin');

        // Si es admin, redirige a administración.html y muestra la vista de administración; de lo contrario, muestra un mensaje de error
        if (isAdmin) {
            window.location.href = 'administración.html';
        } else {
            errorMessage.textContent = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
        }
    });

    // Agrega la funcionalidad para cerrar sesión (esto es solo un ejemplo, ajusta según sea necesario)
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Implementa aquí la lógica para cerrar sesión
            window.location.href = 'iniciar_sesion.html'; // Redirige a la página de inicio de sesión después de cerrar sesión
        });
    }

    // Agrega cualquier otra acción adicional que necesites aquí
});
