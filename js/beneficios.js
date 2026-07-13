// ============================================
// BENEFICIOS - INTERACCIONES
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // ANIMACIÓN DE ENTRADA PARA LAS TARJETAS
    // ============================================

    const cards = document.querySelectorAll('.beneficio-card');

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

    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    console.log('✅ Beneficios cargados correctamente');
});