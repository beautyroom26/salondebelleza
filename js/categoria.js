// ============================================
// CATEGORÍAS - Botones del inicio
// ============================================

const categoria = [
    {
        img: "img/manicura.png",
        nombre: "Manicura"
    },
    {
        img: "img/pedicura.png",
        nombre: "Pedicura"
    },
    {
        img: "img/skincare.png",
        nombre: "Skincare"
    },
    {
        img: "img/haircare.png",
        nombre: "Hair Care"
    }
]

function mostrarcategoria() {
    let contenedor = document.getElementById('categoria');
    
    if (!contenedor) {
        console.error('No se encontró el elemento con id="categoria"');
        return;
    }

    categoria.forEach(categoria => {
        let card = document.createElement('div');
        card.className = "card-categoria";

        card.innerHTML = `
            <div class="contenido">
                <img class="imagenes" src="${categoria.img}" alt="${categoria.nombre}">
                <button class="ver-servicio" data-categoria="${categoria.nombre}">Ver servicios</button>
            </div>
        `;
        contenedor.appendChild(card);
    });

    // Evento para los botones de categoría
    document.querySelectorAll('.ver-servicio').forEach(boton => {
        boton.addEventListener('click', function() {
            const categoriaSeleccionada = this.dataset.categoria;
            
            // Redirigir a la página de servicios con la categoría en la URL
            window.location.href = 'servicios.html?categoria=' + encodeURIComponent(categoriaSeleccionada);
        });
    });
}

// ============================================
// INICIALIZAR CATEGORÍAS
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    mostrarcategoria();
});