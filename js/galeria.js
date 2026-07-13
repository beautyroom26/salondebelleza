// ============================================
// GALERÍA - CON BOTÓN VER MÁS
// ============================================

const galeria = [
    {
        img: "img/1.png",
    },
    {
        img: "img/2.png",
    },
    {
        img: "img/3.png",
    },
    {
        img: "img/4.png",
    },
    {
        img: "img/5.png",
    },
    {
        img: "img/6.png",
    },
    {
        img: "img/7.png",
    },
    {
        img: "img/8.png",
    },
    {
        img: "img/9.png",
    },
    {
        img: "img/10.png",
    },
    {
        img: "img/11.png",
    },
    {
        img: "img/12.png",
    },
    {   
        img: "img/13.png",
    },
    {
        img: "img/14.png",
    },
    {
        img: "img/15.png",
    },
    {
        img: "img/16.png",
    },
    {
        img: "img/17.png",
    },
    {
        img: "img/19.png",
    },
    {
        img: "img/20.png",
    },
    {
        img: "img/21.png",
    }
];

// Variable para controlar si se muestran todas las imágenes
let mostrandoTodas = false;
const IMAGENES_INICIALES = 8;

function mostrargaleria() {
    let contenedor = document.getElementById('galeria');
    if (!contenedor) return;

    // Limpiar contenedor
    contenedor.innerHTML = '';

    // Determinar cuántas imágenes mostrar
    const imagenesAMostrar = mostrandoTodas ? galeria.length : IMAGENES_INICIALES;

    // Mostrar las imágenes
    for (let i = 0; i < imagenesAMostrar && i < galeria.length; i++) {
        let card = document.createElement('div');
        card.className = "card-galeria";

        card.innerHTML = `
            <div class="contenido">
                <img class="imagenes" src="${galeria[i].img}" alt="Imagen de galería">
            </div>
        `;
        contenedor.appendChild(card);
    }

    // Agregar botón "Ver más" si no se están mostrando todas
    if (!mostrandoTodas && galeria.length > IMAGENES_INICIALES) {
        const botonContainer = document.createElement('div');
        botonContainer.className = "boton-ver-mas-container";
        botonContainer.style.cssText = `
            grid-column: 1 / -1;
            display: flex;
            justify-content: center;
            padding: 20px 0;
        `;

        const boton = document.createElement('button');
        boton.className = "btn-ver-mas-galeria";
        boton.textContent = `Ver más imágenes (${galeria.length - IMAGENES_INICIALES} restantes)`;
        boton.style.cssText = `
            background-color: #CB7790;
            color: white;
            border: none;
            padding: 12px 35px;
            border-radius: 20px;
            font-size: 18px;
            cursor: pointer;
            font-family: Arial, Helvetica, sans-serif;
            transition: 0.3s;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        `;
        boton.onmouseenter = function() {
            this.style.backgroundColor = '#4e1f2e';
            this.style.transform = 'scale(1.05)';
        };
        boton.onmouseleave = function() {
            this.style.backgroundColor = '#CB7790';
            this.style.transform = 'scale(1)';
        };
        boton.onclick = function() {
            mostrandoTodas = true;
            mostrargaleria();
            // Desplazar suavemente hacia la galería
            document.getElementById('galeria').scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        botonContainer.appendChild(boton);
        contenedor.appendChild(botonContainer);
    }

    // Si se están mostrando todas, mostrar un mensaje
    if (mostrandoTodas) {
        const mensajeContainer = document.createElement('div');
        mensajeContainer.className = "mensaje-galeria-completa";
        mensajeContainer.style.cssText = `
            grid-column: 1 / -1;
            text-align: center;
            padding: 10px 0;
        `;

        const mensaje = document.createElement('p');
        mensaje.textContent = `Mostrando todas las imágenes (${galeria.length})`;
        mensaje.style.cssText = `
            color: bisque;
            font-size: 18px;
            font-family: Arial, Helvetica, sans-serif;
        `;

        mensajeContainer.appendChild(mensaje);
        contenedor.appendChild(mensajeContainer);
    }
}

// Inicializar galería
document.addEventListener('DOMContentLoaded', mostrargaleria);