function inicializarIndex() {
  // Puedes agregar aquí cualquier función específica para la página index.html
}

function inicializarInventario() {
  // Puedes agregar aquí cualquier función específica para la página inventario.html
}

function inicializarIniciarSesion() {
  // Puedes agregar aquí cualquier función específica para la página iniciar_sesión.html
  // JavaScript para iniciar sesión
  var loginForm = document.getElementById("loginForm");
  if (loginForm) {
      loginForm.addEventListener("submit", function(event){
          event.preventDefault(); // Evitar que se recargue la página
          // Obtener los datos del formulario
          var email = document.getElementById("email").value;
          var password = document.getElementById("password").value;
          var rememberMe = document.getElementById("rememberMe").checked;

          // Aquí puedes agregar la lógica para autenticar al usuario
          // Por simplicidad, asumiremos que el inicio de sesión es exitoso siempre
          // En una aplicación real, deberías hacer una solicitud a un servidor para autenticar al usuario

          // Simulando inicio de sesión exitoso
          var isAdmin = email === "josecarlosanzuetorodas@gmail.com"; // Supongamos que el email del admin es "admin@example.com"
          if (isAdmin) {
              localStorage.setItem("adminLoggedIn", true);
              if (rememberMe) {
                  localStorage.setItem("adminEmail", email);
              } else {
                  localStorage.removeItem("adminEmail");
              }
          } else {
              localStorage.setItem("clientLoggedIn", true);
              if (rememberMe) {
                  localStorage.setItem("clientEmail", email);
              } else {
                  localStorage.removeItem("clientEmail");
              }
          }
          window.location.reload(); // Recargar la página para reflejar el inicio de sesión
      });
  }
}

function inicializarCarrito() {
  var carrito = localStorage.getItem('carrito');
  if (carrito) {
      var productosEnCarrito = JSON.parse(carrito);
      var cartCount = document.getElementById('cartCount');
      if (cartCount) {
          cartCount.innerText = productosEnCarrito.length; // Actualizar el contador del carrito
      }
  }
}

// Evento para mostrar el formulario de pago al hacer clic en "Comprar"
var buyButton = document.getElementById('buyButton');
if (buyButton) {
  buyButton.addEventListener('click', function() {
      var paymentForm = document.getElementById('paymentForm');
      if (paymentForm) {
          paymentForm.style.display = 'block';
      }
  });
}

// Evento para inicializar el carrito al cargar la página
window.onload = function() {
  var currentPage = window.location.pathname.split('/').pop();
  switch (currentPage) {
      case 'index.html':
          inicializarIndex();
          break;
      case 'inventario.html':
          inicializarInventario();
          break;
      case 'iniciar_sesión.html':
          inicializarIniciarSesion();
          break;
      default:
          break;
  }
  inicializarCarrito();
};

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtener el botón de enviar formulario
  var enviarFormularioBtn = document.getElementById("enviarFormulario");

  // Verificar si el botón existe antes de agregar el event listener
  if (enviarFormularioBtn) {
      enviarFormularioBtn.addEventListener("click", function() {
          // Lógica para manejar el evento de hacer clic en el botón
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var buyButton = document.getElementById('buyButton');
  if (buyButton) {
      buyButton.addEventListener('click', function() {
          var paymentForm = document.getElementById('paymentForm');
          if (paymentForm) {
              paymentForm.style.display = 'block';
          }
      });
  }
});
