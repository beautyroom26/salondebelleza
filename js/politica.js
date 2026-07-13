// ============================================
// POLÍTICA DE PRIVACIDAD - INTERACCIONES
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    console.log('✅ Página de Política de Privacidad cargada');

    // ============================================
    // EFECTO DE DESPLAZAMIENTO SUAVE PARA ANCLAS
    // ============================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});