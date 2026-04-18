// Esperar a que todo el HTML cargue antes de ejecutar JS
document.addEventListener("DOMContentLoaded", () => {
    
    /*    1. MODO DÍA / NOCHE */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Verificar si el usuario tenía el modo noche guardado
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Modo Día';
    }

    // Evento al hacer clic en el botón
    themeToggleBtn.addEventListener('click', () => {
        // Alterna la clase 'dark-mode' en el body (Cambio dinámico)
        body.classList.toggle('dark-mode');
        
        // Cambiar el texto del botón y guardar preferencia
        if (body.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = 'Modo Día';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggleBtn.textContent = 'Modo Noche';
            localStorage.setItem('theme', 'light');
        }
    });

    /* 2. VALIDACIÓN DEL FORMULARIO */
    const formulario = document.getElementById('contacto-form');
    
    // Solo ejecutar esto si estamos en la página de contacto (si el form existe)
    if (formulario) { 
        formulario.addEventListener('submit', function(evento) {
            // Prevenir que la página se recargue (comportamiento por defecto)
            evento.preventDefault(); 
            
            let formularioValido = true;
            
            // Capturar los valores de los inputs
            const nombre = document.getElementById('nombre').value.trim();
            const servicio = document.getElementById('servicio').value;
            const mensaje = document.getElementById('mensaje').value.trim();

            // Capturar los espacios para los mensajes de error
            const errorNombre = document.getElementById('error-nombre');
            const errorServicio = document.getElementById('error-servicio');
            const errorMensaje = document.getElementById('error-mensaje');

            // Limpiar errores previos (Cambio dinámico)
            errorNombre.textContent = '';
            errorServicio.textContent = '';
            errorMensaje.textContent = '';

            // 1. Validar Nombre (mínimo 3 caracteres, sin números idealmente)
            if (nombre.length < 3) {
                errorNombre.textContent = 'Por favor, ingrese un nombre válido (mínimo 3 letras).';
                formularioValido = false;
            }

            // 2. Validar Servicio (debe seleccionar una opción)
            if (servicio === "") {
                errorServicio.textContent = 'Por favor, seleccione un servicio de la lista.';
                formularioValido = false;
            }

            // 3. Validar Mensaje (mínimo 10 caracteres)
            if (mensaje.length < 10) {
                errorMensaje.textContent = 'El mensaje es muy corto. Escriba al menos 10 caracteres.';
                formularioValido = false;
            }

            // Si pasó todas las validaciones
            if (formularioValido) {
                // Crear objeto con los datos
                const datosEnviados = {
                    nombreCompleto: nombre,
                    servicioInteres: servicio,
                    mensajeUsuario: mensaje
                };
                
                // Mostrar en la consola del navegador
                console.log("=== NUEVO MENSAJE DE CONTACTO ===");
                console.log(datosEnviados);
                
                // Dar feedback al usuario (Alerta)
                alert(`¡Gracias ${nombre}! Tu mensaje sobre "${servicio}" ha sido enviado correctamente. Revisa la consola.`);
                
                // Limpiar el formulario dinámicamente
                formulario.reset();
            }
        });
    }

});