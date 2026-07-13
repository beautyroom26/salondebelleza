// ============================================
// SOBRE NOSOTROS - INTERACCIONES
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Animación de entrada para los elementos al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos con clase de animación
    document.querySelectorAll('.mvv-card, .equipo-card, .instalacion-item, .timeline-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Efecto de hover en tarjetas (ya está en CSS)

    console.log('✅ Página Sobre Nosotros cargada correctamente');
});