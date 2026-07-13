// ============================================
// MODO CLARO / OSCURO + BOTÓN VOLVER ARRIBA + FAQ
// ============================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // 1. INYECTAR SOLO LOS COLORES PARA MODO CLARO/OSCURO
    // ============================================

    const style = document.createElement('style');
    style.textContent = `
        /* SOLO CAMBIA COLORES - MODO OSCURO (por defecto) */
        body {
            background-color: #4e1f2e !important;
            color: #180a0e !important;
            transition: background-color 0.5s ease, color 0.5s ease !important;
        }

        header {
            background-color: #4e1f2e !important;
            transition: background-color 0.5s ease !important;
        }

        header nav a {
            color: #180a0e !important;
        }

        .separador {
            background-color: bisque !important;
        }

        .presentacion {
            background-color: bisque !important;
        }

        .presentacion h2 {
            color: #2c121b !important;
        }

        .presentacion h4 {
            color: #2c121b !important;
        }

        #servicios {
            background-color: #4e1f2e !important;
        }

        .servicios-titulo {
            color: bisque !important;
        }

        .servicio-card {
            background-color: bisque !important;
        }

        .servicio-nombre {
            color: #4e1f2e !important;
        }

        .servicio-descripcion {
            color: #2c121b !important;
        }

        .servicio-precio {
            color: #4e1f2e !important;
        }

        .btn-ver-mas {
            background-color: #4e1f2e !important;
            color: bisque !important;
        }

        .btn-ver-mas:hover {
            background-color: #CB7790 !important;
        }

        #preguntas-frecuentes {
            background-color: #4e1f2e !important;
        }

        .contenedor-preguntas {
            background-color: bisque !important;
        }

        .titulo-preguntas {
            color: #4e1f2e !important;
        }

        .pregunta-item {
            border-bottom: 2px solid #CB7790 !important;
        }

        .pregunta {
            color: #4e1f2e !important;
        }

        .pregunta::after {
            color: #CB7790 !important;
        }

        .respuesta {
            color: #2c121b !important;
            border-left: 4px solid #CB7790 !important;
        }

        #footer {
            background-color: #2c121b !important;
        }

        .footer-columna p {
            color: bisque !important;
        }

        .footer-copy p {
            color: #b8957a !important;
        }

        .caja-presentacion {
            background: rgb(184, 155, 101) !important;
        }

        .titulos {
            color: #180a0e !important;
        }

        .caja-categoria h1 {
            color: #180a0e !important;
        }

        .ver-servicio {
            background-color: wheat !important;
            color: #180a0e !important;
        }

        .ver-servicio:hover {
            background-color: #CB7790 !important;
            color: white !important;
        }

        .btnpro {
            background-color: rgb(255, 219, 199) !important;
            color: #180a0e !important;
        }

        .modal-servicio-contenido {
            background-color: bisque !important;
        }

        .modal-servicio-nombre {
            color: #4e1f2e !important;
        }

        .modal-servicio-descripcion {
            color: #2c121b !important;
        }

        .modal-servicio-precio {
            color: #4e1f2e !important;
        }

        .modal-servicio-info-extra p {
            color: #2c121b !important;
        }

        .modal-servicio-cerrar {
            color: #4e1f2e !important;
        }

        /* ===== CONTACTO - MODO OSCURO ===== */
        #contacto {
            background-color: #4e1f2e !important;
        }

        .contacto-container {
            background-color: bisque !important;
        }

        .contacto-titulo {
            color: #4e1f2e !important;
        }

        .contacto-subtitulo {
            color: #2c121b !important;
        }

        .campo-grupo label {
            color: #4e1f2e !important;
        }

        .campo-grupo input,
        .campo-grupo select,
        .campo-grupo textarea {
            background-color: white !important;
            border: 2px solid #CB7790 !important;
            color: #2c121b !important;
        }

        .btn-enviar {
            background-color: #4e1f2e !important;
            color: bisque !important;
        }

        .btn-enviar:hover {
            background-color: #CB7790 !important;
        }

        /* ===== TESTIMONIOS - MODO OSCURO ===== */
        .hero-testimonios {
            background: linear-gradient(135deg, #4e1f2e, #CB7790) !important;
        }

        .hero-testimonios h1,
        .hero-testimonios p {
            color: white !important;
        }

        #testimonios-destacados {
            background-color: #4e1f2e !important;
        }

        .testimonio-card {
            background-color: bisque !important;
        }

        .testimonio-texto {
            color: #2c121b !important;
        }

        .testimonio-info h4 {
            color: #4e1f2e !important;
        }

        .testimonio-info p {
            color: #7a5a6a !important;
        }

        /* ===== SOBRE NOSOTROS - MODO OSCURO ===== */
        .seccion-historia,
        .seccion-tiempo,
        .seccion-organigrama {
            background-color: #4e1f2e !important;
        }

        .seccion-mvv,
        .seccion-equipo,
        .seccion-instalaciones {
            background-color: bisque !important;
        }

        .seccion-mvv .seccion-titulo {
            color: #4e1f2e !important;
        }

        .mvv-card {
            background-color: #4e1f2e !important;
        }

        .mvv-card h3 {
            color: #CB7790 !important;
        }

        .mvv-card p {
            color: bisque !important;
        }

        .mvv-card ul li {
            color: bisque !important;
        }

        .equipo-card {
            background-color: #4e1f2e !important;
        }

        .equipo-card h4 {
            color: #CB7790 !important;
        }

        .equipo-card .cargo {
            color: bisque !important;
        }

        .equipo-card .descripcion {
            color: #b8957a !important;
        }

        .organigrama-container {
            background-color: bisque !important;
        }

        .organigrama-item {
            background-color: #4e1f2e !important;
        }

        .organigrama-item h4 {
            color: #CB7790 !important;
        }

        .organigrama-item p {
            color: bisque !important;
        }

        .instalacion-item {
            background-color: #4e1f2e !important;
        }

        .instalacion-info h4 {
            color: #CB7790 !important;
        }

        .instalacion-info p {
            color: bisque !important;
        }

        .timeline-contenido {
            background-color: bisque !important;
        }

        .timeline-contenido h4 {
            color: #4e1f2e !important;
        }

        .timeline-contenido p {
            color: #2c121b !important;
        }

        .historia-texto p {
            color: bisque !important;
        }

        .fecha-item {
            background-color: rgba(203, 119, 144, 0.2) !important;
        }

        .fecha-texto {
            color: bisque !important;
        }

        /* ===== POLÍTICA DE PRIVACIDAD - MODO OSCURO ===== */
        #politica-privacidad {
            background-color: #4e1f2e !important;
        }

        .politica-contenido {
            background-color: bisque !important;
        }

        .politica-titulo {
            color: #4e1f2e !important;
        }

        .politica-texto p {
            color: #2c121b !important;
        }

        .politica-texto h4 {
            color: #4e1f2e !important;
        }

        .politica-texto ul li {
            color: #2c121b !important;
        }

        .politica-texto strong {
            color: #4e1f2e !important;
        }

        .politica-seccion {
            border-bottom: 2px solid #CB7790 !important;
        }

        .politica-footer {
            border-top: 2px solid #CB7790 !important;
        }

        .politica-footer p {
            color: #2c121b !important;
        }

        .politica-footer strong {
            color: #4e1f2e !important;
        }

        .politica-contacto-card {
            background-color: #4e1f2e !important;
        }

        .politica-contacto-card h3 {
            color: #CB7790 !important;
        }

        .politica-contacto-card p {
            color: bisque !important;
        }

        .hero-politica {
            background: linear-gradient(135deg, #4e1f2e, #CB7790) !important;
        }

        .hero-politica h1,
        .hero-politica p {
            color: white !important;
        }

        .btn-contacto-politica {
            background-color: #CB7790 !important;
            color: white !important;
        }

        .btn-contacto-politica:hover {
            background-color: #b88090 !important;
        }

        /* ===== NOTICIAS - MODO OSCURO ===== */
        .hero-noticias {
            background: linear-gradient(135deg, #4e1f2e, #CB7790) !important;
        }

        .hero-noticias h1,
        .hero-noticias p {
            color: white !important;
        }

        #noticias {
            background-color: #4e1f2e !important;
        }

        .noticia-card {
            background-color: bisque !important;
        }

        .noticia-titulo {
            color: #4e1f2e !important;
        }

        .noticia-resumen {
            color: #2c121b !important;
        }

        .noticia-fecha {
            color: #CB7790 !important;
        }

        .btn-leer-mas {
            background-color: #4e1f2e !important;
            color: bisque !important;
        }

        .btn-leer-mas:hover {
            background-color: #CB7790 !important;
        }

        .modal-noticia-contenido {
            background-color: bisque !important;
        }

        .modal-noticia-titulo {
            color: #4e1f2e !important;
        }

        .modal-noticia-texto {
            color: #2c121b !important;
        }

        .modal-noticia-fecha {
            color: #CB7790 !important;
        }

        .modal-noticia-cerrar {
            color: #4e1f2e !important;
        }

        /* ============================================
           MODO CLARO
           ============================================ */

        body.modo-claro {
            background-color: #f5e6ea !important;
            color: #2c121b !important;
        }

        body.modo-claro header {
            background-color: #f5e6ea !important;
        }

        body.modo-claro header nav a {
            color: #2c121b !important;
        }

        body.modo-claro .separador {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .presentacion {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .presentacion h2 {
            color: #3d1a2a !important;
        }

        body.modo-claro .presentacion h4 {
            color: #3d1a2a !important;
        }

        body.modo-claro #servicios {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .servicios-titulo {
            color: #4e1f2e !important;
        }

        body.modo-claro .servicio-card {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .servicio-nombre {
            color: #3d1a2a !important;
        }

        body.modo-claro .servicio-descripcion {
            color: #3d1a2a !important;
        }

        body.modo-claro .servicio-precio {
            color: #3d1a2a !important;
        }

        body.modo-claro .btn-ver-mas {
            background-color: #d4a0b0 !important;
            color: #4e1f2e !important;
        }

        body.modo-claro .btn-ver-mas:hover {
            background-color: #b88090 !important;
        }

        body.modo-claro #preguntas-frecuentes {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .contenedor-preguntas {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .titulo-preguntas {
            color: #3d1a2a !important;
        }

        body.modo-claro .pregunta-item {
            border-bottom: 2px solid #d4a0b0 !important;
        }

        body.modo-claro .pregunta {
            color: #3d1a2a !important;
        }

        body.modo-claro .pregunta::after {
            color: #d4a0b0 !important;
        }

        body.modo-claro .respuesta {
            color: #3d1a2a !important;
            border-left: 4px solid #d4a0b0 !important;
        }

        body.modo-claro #footer {
            background-color: #e8d5db !important;
        }

        body.modo-claro .footer-columna p {
            color: #4e1f2e !important;
        }

        body.modo-claro .footer-copy p {
            color: #7a5a6a !important;
        }

        body.modo-claro .caja-presentacion {
            background: rgb(184, 155, 101) !important;
        }

        body.modo-claro .titulos {
            color: #2c121b !important;
        }

        body.modo-claro .caja-categoria h1 {
            color: #2c121b !important;
        }

        body.modo-claro .ver-servicio {
            background-color: wheat !important;
            color: #2c121b !important;
        }

        body.modo-claro .ver-servicio:hover {
            background-color: #CB7790 !important;
            color: white !important;
        }

        body.modo-claro .btnpro {
            background-color: rgb(255, 219, 199) !important;
            color: #2c121b !important;
        }

        body.modo-claro .modal-servicio-contenido {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .modal-servicio-nombre {
            color: #3d1a2a !important;
        }

        body.modo-claro .modal-servicio-descripcion {
            color: #3d1a2a !important;
        }

        body.modo-claro .modal-servicio-precio {
            color: #3d1a2a !important;
        }

        body.modo-claro .modal-servicio-info-extra p {
            color: #3d1a2a !important;
        }

        body.modo-claro .modal-servicio-cerrar {
            color: #3d1a2a !important;
        }

        /* ===== CONTACTO - MODO CLARO ===== */
        body.modo-claro #contacto {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .contacto-container {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .contacto-titulo {
            color: #3d1a2a !important;
        }

        body.modo-claro .contacto-subtitulo {
            color: #3d1a2a !important;
        }

        body.modo-claro .campo-grupo label {
            color: #3d1a2a !important;
        }

        body.modo-claro .campo-grupo input,
        body.modo-claro .campo-grupo select,
        body.modo-claro .campo-grupo textarea {
            background-color: white !important;
            border: 2px solid #d4a0b0 !important;
            color: #3d1a2a !important;
        }

        body.modo-claro .btn-enviar {
            background-color: #d4a0b0 !important;
            color: #4e1f2e !important;
        }

        body.modo-claro .btn-enviar:hover {
            background-color: #b88090 !important;
        }

        /* ===== TESTIMONIOS - MODO CLARO ===== */
        body.modo-claro .hero-testimonios {
            background: linear-gradient(135deg, #f5e6ea, #d4a0b0) !important;
        }

        body.modo-claro .hero-testimonios h1,
        body.modo-claro .hero-testimonios p {
            color: #3d1a2a !important;
        }

        body.modo-claro #testimonios-destacados {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .testimonio-card {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .testimonio-texto {
            color: #3d1a2a !important;
        }

        body.modo-claro .testimonio-info h4 {
            color: #3d1a2a !important;
        }

        body.modo-claro .testimonio-info p {
            color: #7a5a6a !important;
        }

        /* ===== SOBRE NOSOTROS - MODO CLARO ===== */
        body.modo-claro .seccion-historia,
        body.modo-claro .seccion-tiempo,
        body.modo-claro .seccion-organigrama {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .seccion-mvv,
        body.modo-claro .seccion-equipo,
        body.modo-claro .seccion-instalaciones {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .seccion-mvv .seccion-titulo {
            color: #3d1a2a !important;
        }

        body.modo-claro .mvv-card {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .mvv-card h3 {
            color: #CB7790 !important;
        }

        body.modo-claro .mvv-card p {
            color: #3d1a2a !important;
        }

        body.modo-claro .mvv-card ul li {
            color: #3d1a2a !important;
        }

        body.modo-claro .equipo-card {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .equipo-card h4 {
            color: #3d1a2a !important;
        }

        body.modo-claro .equipo-card .cargo {
            color: #3d1a2a !important;
        }

        body.modo-claro .equipo-card .descripcion {
            color: #3d1a2a !important;
        }

        body.modo-claro .organigrama-container {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .organigrama-item {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .organigrama-item h4 {
            color: #CB7790 !important;
        }

        body.modo-claro .organigrama-item p {
            color: #3d1a2a !important;
        }

        body.modo-claro .instalacion-item {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .instalacion-info h4 {
            color: #3d1a2a !important;
        }

        body.modo-claro .instalacion-info p {
            color: #3d1a2a !important;
        }

        body.modo-claro .timeline-contenido {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .timeline-contenido h4 {
            color: #3d1a2a !important;
        }

        body.modo-claro .timeline-contenido p {
            color: #3d1a2a !important;
        }

        body.modo-claro .historia-texto p {
            color: #3d1a2a !important;
        }

        body.modo-claro .fecha-item {
            background-color: rgba(203, 119, 144, 0.2) !important;
        }

        body.modo-claro .fecha-texto {
            color: #3d1a2a !important;
        }

        /* ===== POLÍTICA DE PRIVACIDAD - MODO CLARO ===== */
        body.modo-claro #politica-privacidad {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .politica-contenido {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .politica-titulo {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-texto p {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-texto h4 {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-texto ul li {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-texto strong {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-seccion {
            border-bottom: 2px solid #d4a0b0 !important;
        }

        body.modo-claro .politica-footer {
            border-top: 2px solid #d4a0b0 !important;
        }

        body.modo-claro .politica-footer p {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-footer strong {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-contacto-card {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .politica-contacto-card h3 {
            color: #3d1a2a !important;
        }

        body.modo-claro .politica-contacto-card p {
            color: #3d1a2a !important;
        }

        body.modo-claro .hero-politica {
            background: linear-gradient(135deg, #f5e6ea, #d4a0b0) !important;
        }

        body.modo-claro .hero-politica h1,
        body.modo-claro .hero-politica p {
            color: #3d1a2a !important;
        }

        body.modo-claro .btn-contacto-politica {
            background-color: #d4a0b0 !important;
            color: #4e1f2e !important;
        }

        body.modo-claro .btn-contacto-politica:hover {
            background-color: #b88090 !important;
            color: white !important;
        }

        /* ===== NOTICIAS - MODO CLARO ===== */
        body.modo-claro .hero-noticias {
            background: linear-gradient(135deg, #f5e6ea, #d4a0b0) !important;
        }

        body.modo-claro .hero-noticias h1,
        body.modo-claro .hero-noticias p {
            color: #3d1a2a !important;
        }

        body.modo-claro #noticias {
            background-color: #f5e6ea !important;
        }

        body.modo-claro .noticia-card {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .noticia-titulo {
            color: #3d1a2a !important;
        }

        body.modo-claro .noticia-resumen {
            color: #3d1a2a !important;
        }

        body.modo-claro .noticia-fecha {
            color: #d4a0b0 !important;
        }

        body.modo-claro .btn-leer-mas {
            background-color: #d4a0b0 !important;
            color: #4e1f2e !important;
        }

        body.modo-claro .btn-leer-mas:hover {
            background-color: #b88090 !important;
        }

        body.modo-claro .modal-noticia-contenido {
            background-color: #fff5f0 !important;
        }

        body.modo-claro .modal-noticia-titulo {
            color: #3d1a2a !important;
        }

        body.modo-claro .modal-noticia-texto {
            color: #3d1a2a !important;
        }

        body.modo-claro .modal-noticia-fecha {
            color: #d4a0b0 !important;
        }

        body.modo-claro .modal-noticia-cerrar {
            color: #3d1a2a !important;
        }
    `;
    document.head.appendChild(style);

    // ============================================
    // 2. CREAR BOTONES FLOTANTES
    // ============================================

    const floatingContainer = document.createElement('div');
    floatingContainer.id = 'floating-buttons';
    floatingContainer.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        z-index: 9999;
    `;
    document.body.appendChild(floatingContainer);

    // BOTÓN MODO CLARO/OSCURO
    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'toggle-mode-btn';
    toggleBtn.innerHTML = '🌙';
    toggleBtn.style.cssText = `
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: none;
        background-color: #4e1f2e;
        color: bisque;
        font-size: 26px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    toggleBtn.title = 'Cambiar modo';
    floatingContainer.appendChild(toggleBtn);

    // BOTÓN VOLVER ARRIBA
    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scroll-top-btn';
    scrollBtn.innerHTML = '⬆';
    scrollBtn.style.cssText = `
        width: 55px;
        height: 55px;
        border-radius: 50%;
        border: none;
        background-color: #CB7790;
        color: white;
        font-size: 28px;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        display: none;
        align-items: center;
        justify-content: center;
    `;
    scrollBtn.title = 'Volver arriba';
    floatingContainer.appendChild(scrollBtn);

    // ============================================
    // 3. HOVER EFFECTS
    // ============================================

    toggleBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 25px rgba(0,0,0,0.4)';
    });

    toggleBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    });

    scrollBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 6px 25px rgba(0,0,0,0.4)';
    });

    scrollBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
    });

    // ============================================
    // 4. MODO CLARO/OSCURO CON LOCALSTORAGE
    // ============================================

    let modoActual = localStorage.getItem('modo');
    
    if (!modoActual) {
        modoActual = 'oscuro';
        localStorage.setItem('modo', 'oscuro');
    }
    
    if (modoActual === 'claro') {
        document.body.classList.add('modo-claro');
        toggleBtn.innerHTML = '☀️';
        toggleBtn.style.backgroundColor = '#CB7790';
        toggleBtn.style.color = '#4e1f2e';
    }

    toggleBtn.addEventListener('click', function() {
        const body = document.body;
        body.classList.toggle('modo-claro');

        if (body.classList.contains('modo-claro')) {
            this.innerHTML = '☀️';
            this.style.backgroundColor = '#CB7790';
            this.style.color = '#4e1f2e';
            localStorage.setItem('modo', 'claro');
        } else {
            this.innerHTML = '🌙';
            this.style.backgroundColor = '#4e1f2e';
            this.style.color = 'bisque';
            localStorage.setItem('modo', 'oscuro');
        }
    });

    // ============================================
    // 5. BOTÓN VOLVER ARRIBA
    // ============================================

    window.addEventListener('scroll', function() {
        if (window.scrollY > 400) {
            scrollBtn.style.display = 'flex';
            scrollBtn.style.animation = 'fadeInUp 0.3s ease';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ============================================
    // 6. PREGUNTAS FRECUENTES - DESPLEGABLES
    // ============================================

    // Esperar a que los elementos existan y agregar el evento
    function iniciarPreguntasFrecuentes() {
        const preguntasItems = document.querySelectorAll('.pregunta-item');
        
        if (preguntasItems.length === 0) {
            // Si no hay elementos, esperar y reintentar
            setTimeout(iniciarPreguntasFrecuentes, 500);
            return;
        }
        
        preguntasItems.forEach(item => {
            const pregunta = item.querySelector('.pregunta');
            
            if (pregunta) {
                // Remover event listeners anteriores (si los hay)
                const nuevaPregunta = pregunta.cloneNode(true);
                pregunta.parentNode.replaceChild(nuevaPregunta, pregunta);
                
                nuevaPregunta.addEventListener('click', function(e) {
                    e.stopPropagation();
                    // Cierra las demás preguntas
                    document.querySelectorAll('.pregunta-item').forEach(other => {
                        if (other !== item) {
                            other.classList.remove('active');
                        }
                    });
                    // Alterna la pregunta actual
                    item.classList.toggle('active');
                });
            }
        });
        
        console.log('✅ Preguntas frecuentes inicializadas');
    }

    // Iniciar preguntas frecuentes
    iniciarPreguntasFrecuentes();

    // ============================================
    // 7. ANIMACIONES
    // ============================================

    const styleAnimations = document.createElement('style');
    styleAnimations.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @media screen and (max-width: 768px) {
            #floating-buttons {
                bottom: 20px;
                right: 15px;
                gap: 10px;
            }
            #toggle-mode-btn, #scroll-top-btn {
                width: 45px;
                height: 45px;
                font-size: 20px;
            }
        }

        @media screen and (max-width: 480px) {
            #floating-buttons {
                bottom: 15px;
                right: 10px;
                gap: 8px;
            }
            #toggle-mode-btn, #scroll-top-btn {
                width: 40px;
                height: 40px;
                font-size: 17px;
            }
        }
    `;
    document.head.appendChild(styleAnimations);

    console.log('✅ Modo claro/oscuro y preguntas frecuentes activados');
});