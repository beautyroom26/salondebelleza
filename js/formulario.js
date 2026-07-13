// ============================================
// FORMULARIO DE CONTACTO CON EMAILJS
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // 1. CONFIGURACIÓN DE EMAILJS
    // ============================================

    const PUBLIC_KEY = "VByaNafWsDo5KK3Zc";        // Tu Public Key de EmailJS
    const SERVICE_ID = "service_19we06c";          // Tu Service ID
    const TEMPLATE_ID = "template_shu8dlr";        // Tu Template ID

    // Inicializar EmailJS
    emailjs.init({
        publicKey: PUBLIC_KEY,
    });

    // ============================================
    // 2. VALIDACIÓN DE CAMPOS
    // ============================================

    const formulario = document.getElementById('formulario-contacto');
    
    const campos = {
        nombre: {
            elemento: document.getElementById('nombre'),
            error: document.getElementById('error-nombre'),
            validar: function(valor) {
                return valor.trim().length >= 2;
            }
        },
        apellido: {
            elemento: document.getElementById('apellido'),
            error: document.getElementById('error-apellido'),
            validar: function(valor) {
                return valor.trim().length >= 2;
            }
        },
        correo: {
            elemento: document.getElementById('correo'),
            error: document.getElementById('error-correo'),
            validar: function(valor) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return regex.test(valor.trim());
            }
        },
        telefono: {
            elemento: document.getElementById('telefono'),
            error: document.getElementById('error-telefono'),
            validar: function(valor) {
                const regex = /^[0-9\s\-+()]{7,15}$/;
                return regex.test(valor.trim());
            }
        },
        asunto: {
            elemento: document.getElementById('asunto'),
            error: document.getElementById('error-asunto'),
            validar: function(valor) {
                return valor.trim().length >= 3;
            }
        },
        tipoConsulta: {
            elemento: document.getElementById('tipo-consulta'),
            error: document.getElementById('error-consulta'),
            validar: function(valor) {
                return valor !== '';
            }
        },
        mensaje: {
            elemento: document.getElementById('mensaje'),
            error: document.getElementById('error-mensaje'),
            validar: function(valor) {
                return valor.trim().length >= 10;
            }
        }
    };

    // Función para validar un campo individual
    function validarCampo(campo) {
        const valor = campo.elemento.value;
        const esValido = campo.validar(valor);
        
        campo.elemento.classList.remove('error', 'success');
        campo.error.classList.remove('visible');
        
        if (esValido) {
            campo.elemento.classList.add('success');
        } else {
            campo.elemento.classList.add('error');
            campo.error.classList.add('visible');
        }
        
        return esValido;
    }

    // Función para validar todos los campos
    function validarFormulario() {
        let esValido = true;
        
        for (let key in campos) {
            if (!validarCampo(campos[key])) {
                esValido = false;
            }
        }
        
        return esValido;
    }

    // Eventos de validación en tiempo real
    for (let key in campos) {
        const campo = campos[key];
        
        campo.elemento.addEventListener('blur', function() {
            validarCampo(campo);
        });
        
        campo.elemento.addEventListener('input', function() {
            this.classList.remove('error');
            campo.error.classList.remove('visible');
        });
        
        if (campo.elemento.tagName === 'SELECT') {
            campo.elemento.addEventListener('change', function() {
                validarCampo(campo);
            });
        }
    }

    // ============================================
    // 3. ENVÍO DEL FORMULARIO CON EMAILJS
    // ============================================

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validar todos los campos antes de enviar
        if (!validarFormulario()) {
            const primerError = document.querySelector('.campo-grupo input.error, .campo-grupo select.error, .campo-grupo textarea.error');
            if (primerError) {
                primerError.focus();
            }
            
            const mensajeError = document.getElementById('mensaje-error');
            mensajeError.textContent = '❌ Por favor completa todos los campos obligatorios correctamente.';
            mensajeError.style.display = 'block';
            
            setTimeout(function() {
                mensajeError.style.display = 'none';
            }, 5000);
            
            return;
        }

        // Mostrar estado de carga
        const btnEnviar = document.getElementById('btn-enviar');
        const btnTexto = document.getElementById('btn-texto');
        const btnCargando = document.getElementById('btn-cargando');
        btnTexto.style.display = 'none';
        btnCargando.style.display = 'inline';
        btnEnviar.disabled = true;

        // Ocultar mensajes anteriores
        document.getElementById('mensaje-exito').style.display = 'none';
        document.getElementById('mensaje-error').style.display = 'none';

        // Obtener valores del formulario
        const formData = {
            nombre: document.getElementById('nombre').value.trim(),
            apellido: document.getElementById('apellido').value.trim(),
            correo: document.getElementById('correo').value.trim(),
            telefono: document.getElementById('telefono').value.trim(),
            asunto: document.getElementById('asunto').value.trim(),
            tipo_consulta: document.getElementById('tipo-consulta').value,
            mensaje: document.getElementById('mensaje').value.trim()
        };

        console.log('📤 Enviando datos:', formData);

        // ============================================
        // ENVIAR CORREO CON EMAILJS
        // VARIABLES CORREGIDAS PARA TU PLANTILLA
        // ============================================
        
        emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            nombre: formData.nombre,                    // ← {{nombre}}
            apellido: formData.apellido,                // ← {{apellido}}
            correo: formData.correo,                    // ← {{correo}}
            telefono: formData.telefono,                // ← {{telefono}}
            asunto: formData.asunto,                    // ← {{asunto}}
            tipo_consulta: formData.tipo_consulta,      // ← {{tipo_consulta}}
            mensaje: formData.mensaje,                  // ← {{mensaje}}
            fecha: new Date().toLocaleString('es-ES', { // ← {{fecha}}
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        })
        .then(function(response) {
            console.log('✅ Correo enviado con éxito:', response);
            
            const mensajeExito = document.getElementById('mensaje-exito');
            mensajeExito.style.display = 'block';
            mensajeExito.textContent = '✅ ¡Mensaje enviado con éxito! Te contactaremos pronto.';
            
            // Resetear formulario
            formulario.reset();
            
            // Limpiar clases de validación
            for (let key in campos) {
                campos[key].elemento.classList.remove('success', 'error');
                campos[key].error.classList.remove('visible');
            }
            
            setTimeout(function() {
                mensajeExito.style.display = 'none';
            }, 5000);
        })
        .catch(function(error) {
            console.error('❌ Error al enviar:', error);
            
            const mensajeError = document.getElementById('mensaje-error');
            mensajeError.textContent = '❌ Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente.';
            mensajeError.style.display = 'block';
            
            setTimeout(function() {
                mensajeError.style.display = 'none';
            }, 5000);
        })
        .finally(function() {
            btnTexto.style.display = 'inline';
            btnCargando.style.display = 'none';
            btnEnviar.disabled = false;
        });
    });

    console.log('✅ Formulario con EmailJS inicializado correctamente');
});