document.addEventListener('DOMContentLoaded', function() {
    // Agrega la funcionalidad para cerrar sesión
    const logoutButton = document.getElementById('logoutButton');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            // Implementa aquí la lógica para cerrar sesión
            window.location.href = 'iniciar_sesion.html'; // Redirige a la página de inicio de sesión después de cerrar sesión
        });
    }

    // Agrega cualquier otra acción adicional relacionada con la administración aquí

});
