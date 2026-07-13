// ============================================
// SERVICIOS - Lista completa de servicios
// ============================================

const servicios = [
    // MANICURA
    {
        id: 1,
        img: "img/clasica.png",
        nombre: "Manicura Clásica",
        descripcion: "Limpieza, corte, limado y esmaltado tradicional para unas manos impecables.",
        precio: "₲ 25.000",
        categoria: "Manicura",
        infoExtra: "Duración: 1 hora. Incluye masaje de manos y selección de más de 50 colores."
    },
    {
        id: 2,
        img: "img/gel.png",
        nombre: "Manicura en Gel",
        descripcion: "Esmaltado semipermanente con gel que dura hasta 3 semanas sin perder brillo.",
        precio: "₲ 45.000",
        categoria: "Manicura",
        infoExtra: "Duración: 1.5 horas. Incluye preparación de uñas y acabado brillante de larga duración."
    },
    {
        id: 3,
        img: "img/acrilico.png",
        nombre: "Uñas Acrílicas",
        descripcion: "Extensión de uñas con acrílico para un look largo, fuerte y natural.",
        precio: "₲ 65.000",
        categoria: "Manicura",
        infoExtra: "Duración: 2 horas. Incluye diseño personalizado y mantenimiento gratuito a la semana."
    },
    {
        id: 4,
        img: "img/nailart.png",
        nombre: "Nail Art",
        descripcion: "Diseños decorativos y personalizados para tus uñas con acabado profesional.",
        precio: "₲ 35.000",
        categoria: "Manicura",
        infoExtra: "Duración: 1.5 horas. Incluye diseño a elección con glitter, perlas o dibujos."
    },

    // PEDICURA
    {
        id: 5,
        img: "img/pedcla.png",
        nombre: "Pedicura Clásica",
        descripcion: "Tratamiento completo para pies con hidratación y esmaltado tradicional.",
        precio: "₲ 30.000",
        categoria: "Pedicura",
        infoExtra: "Duración: 1.5 horas. Incluye exfoliación, hidratación y masaje relajante."
    },
    {
        id: 6,
        img: "img/pedgel.png",
        nombre: "Pedicura en Gel",
        descripcion: "Esmaltado semipermanente para pies con duración de hasta 4 semanas.",
        precio: "₲ 50.000",
        categoria: "Pedicura",
        infoExtra: "Duración: 2 horas. Incluye preparación de uñas y gel de larga duración."
    },
    {
        id: 7,
        img: "img/pedspa.png",
        nombre: "Pedicura Spa",
        descripcion: "Tratamiento de lujo con exfoliación, mascarilla y masaje profesional.",
        precio: "₲ 55.000",
        categoria: "Pedicura",
        infoExtra: "Duración: 2.5 horas. Incluye sales de baño, exfoliación y mascarilla hidratante."
    },
    {
        id: 8,
        img: "img/peddep.png",
        nombre: "Pedicura Deportiva",
        descripcion: "Especial para pies activos con tratamiento anti-olor y de durezas.",
        precio: "₲ 40.000",
        categoria: "Pedicura",
        infoExtra: "Duración: 1.5 horas. Incluye eliminación de durezas y tratamiento revitalizante."
    },

    // SKINCARE
    {
        id: 9,
        img: "img/limpieza.png",
        nombre: "Limpieza Facial Profunda",
        descripcion: "Eliminación de impurezas y células muertas para una piel renovada.",
        precio: "₲ 50.000",
        categoria: "Skincare",
        infoExtra: "Duración: 1 hora. Incluye limpieza, exfoliación y mascarilla según tu tipo de piel."
    },
    {
        id: 10,
        img: "img/hidratacion.png",
        nombre: "Hidratación Intensa",
        descripcion: "Tratamiento hidratante con ácido hialurónico para una piel luminosa.",
        precio: "₲ 60.000",
        categoria: "Skincare",
        infoExtra: "Duración: 1.5 horas. Incluye limpieza, suero hidratante y mascarilla de colágeno."
    },
    {
        id: 11,
        img: "img/antiage.png",
        nombre: "Tratamiento Anti-Edad",
        descripcion: "Terapia avanzada con activos antiarrugas para una piel rejuvenecida.",
        precio: "₲ 80.000",
        categoria: "Skincare",
        infoExtra: "Duración: 1.5 horas. Incluye microdermoabrasión y suero reafirmante."
    },
    {
        id: 12,
        img: "img/antiacne.png",
        nombre: "Tratamiento para Acné",
        descripcion: "Control y reducción del acné con productos especializados y calmantes.",
        precio: "₲ 55.000",
        categoria: "Skincare",
        infoExtra: "Duración: 1.5 horas. Incluye limpieza profunda, mascarilla purificante y consejos de cuidado."
    },

    // HAIR CARE
    {
        id: 13,
        img: "img/corte.png",
        nombre: "Corte y Peinado",
        descripcion: "Corte moderno con técnicas de vanguardia y peinado profesional.",
        precio: "₲ 40.000",
        categoria: "Hair Care",
        infoExtra: "Duración: 1.5 horas. Incluye lavado, corte y peinado con productos de alta calidad."
    },
    {
        id: 14,
        img: "img/color.png",
        nombre: "Coloración",
        descripcion: "Tinte profesional con colores vibrantes y de larga duración.",
        precio: "₲ 70.000",
        categoria: "Hair Care",
        infoExtra: "Duración: 2.5 horas. Incluye tinte, tratamiento post-color y consejos de mantenimiento."
    },
    {
        id: 15,
        img: "img/keratina.png",
        nombre: "Tratamiento de Keratina",
        descripcion: "Alisado y reparación capilar con keratina para un cabello sedoso.",
        precio: "₲ 90.000",
        categoria: "Hair Care",
        infoExtra: "Duración: 3 horas. Incluye lavado, aplicación de keratina y planchado."
    },
    {
        id: 16,
        img: "img/hidratacio.png",
        nombre: "Hidratación Capilar",
        descripcion: "Recuperación de la humedad natural para un cabello saludable.",
        precio: "₲ 45.000",
        categoria: "Hair Care",
        infoExtra: "Duración: 1.5 horas. Incluye masaje capilar, mascarilla hidratante y sellado de cutículas."
    }
];

// ============================================
// FUNCIONES DE SERVICIOS
// ============================================

// Variable para saber si se están mostrando todos los servicios
let mostrandoTodos = true;

// Obtener categoría de la URL
function getCategoriaFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get('categoria');
}

// Filtrar por categoría
function filtrarPorCategoria(categoria) {
    mostrandoTodos = false;
    const todosLosServicios = document.querySelectorAll('.servicio-card');
    let encontrados = 0;
    
    // Actualizar título para mostrar la categoría
    const titulo = document.querySelector('.servicios-titulo');
    if (titulo && categoria) {
        titulo.textContent = '✨ ' + categoria;
    }
    
    todosLosServicios.forEach(servicio => {
        const categoriaServicio = servicio.querySelector('.servicio-categoria');
        if (categoriaServicio) {
            if (categoriaServicio.textContent.trim() === categoria) {
                servicio.style.display = 'block';
                servicio.style.border = '3px solid #CB7790';
                servicio.style.borderRadius = '20px';
                servicio.style.transition = '0.3s';
                setTimeout(() => {
                    servicio.style.border = 'none';
                }, 2000);
                encontrados++;
            } else {
                servicio.style.display = 'none';
            }
        }
    });
    
    // Si no hay servicios, mostrar mensaje
    if (encontrados === 0) {
        const contenedor = document.getElementById('servicios-grid');
        const mensaje = document.createElement('p');
        mensaje.className = 'mensaje-sin-servicios';
        mensaje.textContent = 'No hay servicios disponibles en la categoría: ' + categoria;
        mensaje.style.cssText = 'color: bisque; font-size: 20px; text-align: center; grid-column: 1 / -1;';
        contenedor.appendChild(mensaje);
    }
    
    // Mostrar el botón "Ver todos" cuando se filtra
    mostrarBotonVerTodos();
}

// Ver todos los servicios
function verTodosLosServicios() {
    mostrandoTodos = true;
    document.querySelectorAll('.servicio-card').forEach(s => {
        s.style.display = 'block';
        s.style.border = 'none';
    });
    
    // Restaurar título
    const titulo = document.querySelector('.servicios-titulo');
    if (titulo) {
        titulo.textContent = 'Nuestros Servicios';
    }
    
    // Eliminar mensaje de "no hay servicios" si existe
    const mensaje = document.querySelector('#servicios-grid .mensaje-sin-servicios');
    if (mensaje) {
        mensaje.remove();
    }
    
    // Ocultar el botón "Ver todos" cuando ya se están mostrando todos
    ocultarBotonVerTodos();
}

// Mostrar botón "Ver todos"
function mostrarBotonVerTodos() {
    const boton = document.querySelector('.btn-ver-todos');
    if (boton) {
        boton.style.display = 'block';
    }
}

// Ocultar botón "Ver todos"
function ocultarBotonVerTodos() {
    const boton = document.querySelector('.btn-ver-todos');
    if (boton) {
        boton.style.display = 'none';
    }
}

// Mostrar servicios
function mostrarServicios() {
    let contenedor = document.getElementById('servicios-grid');
    
    if (!contenedor) {
        console.error('No se encontró el elemento con id="servicios-grid"');
        return;
    }
    
    contenedor.innerHTML = '';

    servicios.forEach(servicio => {
        let card = document.createElement('div');
        card.className = "servicio-card";

        card.innerHTML = `
            <img class="servicio-imagen" src="${servicio.img}" alt="${servicio.nombre}">
            <div class="servicio-info">
                <h3 class="servicio-nombre">${servicio.nombre}</h3>
                <p class="servicio-descripcion">${servicio.descripcion}</p>
                <div class="servicio-detalles">
                    <span class="servicio-precio">${servicio.precio}</span>
                    <span class="servicio-categoria">${servicio.categoria}</span>
                </div>
                <button class="btn-ver-mas" data-id="${servicio.id}">Ver más</button>
            </div>
        `;

        contenedor.appendChild(card);
    });

    // Evento para botones "Ver más"
    document.querySelectorAll('.btn-ver-mas').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const servicio = servicios.find(s => s.id === id);
            if (servicio) {
                abrirModalServicio(servicio);
            }
        });
    });

    // Agregar botón "Ver todos" ABAJO del contenedor de servicios
    agregarBotonVerTodos();
    
    // Verificar si hay categoría en la URL para filtrar
    const categoriaURL = getCategoriaFromURL();
    if (categoriaURL) {
        setTimeout(() => {
            filtrarPorCategoria(categoriaURL);
        }, 100);
    } else {
        // Si no hay categoría en la URL, ocultar el botón "Ver todos"
        ocultarBotonVerTodos();
    }
}

// Agregar botón "Ver todos" - AHORA ABAJO
function agregarBotonVerTodos() {
    const contenedor = document.getElementById('servicios-grid');
    if (!contenedor) return;
    
    // Buscar si ya existe el botón
    let botonExistente = document.querySelector('.btn-ver-todos');
    if (botonExistente) {
        // Si ya existe, actualizar su evento y estado
        botonExistente.onclick = verTodosLosServicios;
        if (mostrandoTodos) {
            botonExistente.style.display = 'none';
        } else {
            botonExistente.style.display = 'block';
        }
        return;
    }
    
    // Crear el botón
    const boton = document.createElement('button');
    boton.textContent = 'Ver todos los servicios';
    boton.className = 'btn-ver-todos';
    boton.style.cssText = `
        display: none;
        margin: 20px auto 0;
        background-color: #CB7790;
        color: white;
        border: none;
        padding: 12px 35px;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
        font-family: Arial, Helvetica, sans-serif;
        transition: 0.3s;
        grid-column: 1 / -1;
        justify-self: center;
    `;
    boton.onmouseenter = function() {
        this.style.backgroundColor = '#4e1f2e';
        this.style.transform = 'scale(1.05)';
    };
    boton.onmouseleave = function() {
        this.style.backgroundColor = '#CB7790';
        this.style.transform = 'scale(1)';
    };
    boton.onclick = verTodosLosServicios;
    
    // Insertar el botón DENTRO del contenedor, al final
    contenedor.appendChild(boton);
}

// ============================================
// MODAL
// ============================================

function abrirModalServicio(servicio) {
    const modal = document.getElementById('modal-servicio');
    const body = document.getElementById('modal-servicio-body');
    
    if (!modal || !body) {
        console.error('Modal no encontrado');
        return;
    }
    
    body.innerHTML = `
        <img class="modal-servicio-imagen" src="${servicio.img}" alt="${servicio.nombre}">
        <h2 class="modal-servicio-nombre">${servicio.nombre}</h2>
        <p class="modal-servicio-descripcion">${servicio.descripcion}</p>
        <div class="modal-servicio-detalles">
            <span class="modal-servicio-precio">${servicio.precio}</span>
            <span class="modal-servicio-categoria">${servicio.categoria}</span>
        </div>
        <div class="modal-servicio-info-extra">
            <p><strong>✨ Información adicional:</strong></p>
            <p>${servicio.infoExtra}</p>
            <p style="margin-top: 12px; color: #CB7790; font-weight: bold;"></p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Cerrar modal
document.addEventListener('DOMContentLoaded', function() {
    const cerrar = document.querySelector('.modal-servicio-cerrar');
    const modal = document.getElementById('modal-servicio');
    
    if (cerrar) {
        cerrar.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('modal-servicio');
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// ============================================
// INICIALIZAR SERVICIOS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    mostrarServicios();
});