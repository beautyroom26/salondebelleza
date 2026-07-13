// ===== MODAL PARA IMÁGENES =====
// Obtener elementos
const modal = document.getElementById('modal-imagen');
const modalImg = document.getElementById('modal-img');
const modalPie = document.getElementById('modal-pie');
const cerrarModal = document.querySelector('.modal-cerrar');

// Agregar click a todas las imágenes con clase "imagenes" o "imagen-modal"
document.querySelectorAll('.imagenes, .imagen-modal').forEach(img => {
    img.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalPie.textContent = this.alt || 'Imagen del servicio';
        document.body.style.overflow = 'hidden'; // Evita scroll
    });
});

// Cerrar modal al hacer click en la X
cerrarModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Cerrar modal al hacer click fuera de la imagen
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Cerrar modal con la tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});