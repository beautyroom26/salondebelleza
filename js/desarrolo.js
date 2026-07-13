// ============================================
// DESARROLLADORES - INTERACCIONES
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // ANIMACIÓN DE ENTRADA PARA LAS TARJETAS
    // ============================================

    const devCards = document.querySelectorAll('.dev-card');
    const techItems = document.querySelectorAll('.tech-item');

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

    // Aplicar animación a tarjetas de desarrolladores
    devCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Aplicar animación a tecnologías
    techItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });

    console.log('✅ Página de desarrolladores cargada correctamente');
    console.log('👨‍💻 Equipo de desarrollo listo!');
});