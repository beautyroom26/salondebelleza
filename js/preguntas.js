// ============================================
// PREGUNTAS FRECUENTES - INTERACCIONES
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // DESPLEGAR/OCULTAR RESPUESTAS
    // ============================================

    const preguntas = document.querySelectorAll('.faq-pregunta');

    preguntas.forEach(pregunta => {
        pregunta.addEventListener('click', function() {
            const item = this.parentElement;
            
            // Cerrar otras preguntas en la misma categoría
            const categoria = item.closest('.faq-categoria');
            const items = categoria.querySelectorAll('.faq-item');
            
            items.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Alternar la pregunta actual
            item.classList.toggle('active');
        });
    });

    // ============================================
    // ABRIR PRIMERA PREGUNTA DE CADA CATEGORÍA
    // ============================================

    const categorias = document.querySelectorAll('.faq-categoria');
    categorias.forEach(categoria => {
        const primerItem = categoria.querySelector('.faq-item');
        if (primerItem) {
            primerItem.classList.add('active');
        }
    });

    console.log('✅ Preguntas frecuentes inicializadas');
});