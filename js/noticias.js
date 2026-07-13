// ============================================
// NOTICIAS - DATOS Y FUNCIONES
// ============================================

// ============================================
// 1. LISTA DE NOTICIAS
// ============================================

const noticias = [
    {
        id: 1,
        imagen: "img/peloorgan.png",
        fecha: "15 de junio, 2014",
        titulo: "Nueva Línea de Productos Orgánicos",
        resumen: "Presentamos nuestra nueva línea de productos orgánicos y sostenibles para el cuidado capilar, elaborados con ingredientes 100% naturales.",
        texto: `<p>Nos enorgullece anunciar el lanzamiento de nuestra nueva línea de productos orgánicos para el cuidado capilar. Después de meses de investigación y desarrollo, hemos creado una colección de productos que combinan lo mejor de la naturaleza con la ciencia moderna.</p>
        <p>Esta línea incluye champús, acondicionadores, mascarillas y tratamientos especiales, todos formulados con ingredientes 100% naturales y libres de químicos agresivos. Nuestro compromiso con el medio ambiente y la salud de nuestros clientes nos ha llevado a desarrollar productos que son tan efectivos como sostenibles.</p>
        <p>Los productos están disponibles en nuestro salón y próximamente en nuestra tienda online. ¡Ven a probarlos y descubre la diferencia!</p>`
    },
    {
        id: 2,
        imagen: "img/aniver.png",
        fecha: "8 de junio, 2015",
        titulo: "The Beauty Room cumple 5 años",
        resumen: "Celebramos nuestro quinto aniversario con grandes ofertas y sorpresas para todos nuestros clientes. ¡Gracias por confiar en nosotros!",
        texto: `<p>¡Celebramos 5 años de belleza y cuidado! Desde nuestro primer día, hemos trabajado para ofrecer a nuestros clientes la mejor experiencia en servicios de belleza. Hemos crecido gracias a la confianza y el apoyo de cada persona que ha confiado en nosotros.</p>
        <p>Para celebrar este importante hito, hemos preparado ofertas especiales en todos nuestros servicios durante todo el mes. También tendremos sorteos y regalos sorpresa para nuestros clientes más fieles.</p>
        <p>Queremos agradecer a cada persona que ha sido parte de esta hermosa historia. ¡Los esperamos para seguir celebrando juntos!</p>`
    },
    {
        id: 3,
        imagen: "img/organico.png",
        fecha: "1 de marzo, 2020",
        titulo: "Nuevos Servicios de Skincare",
        resumen: "Ampliamos nuestra oferta con tratamientos faciales de última generación. Descubre cómo cuidar tu piel como nunca antes.",
        texto: `<p>Estamos emocionados de anunciar la incorporación de nuevos servicios de skincare a nuestro catálogo. Ahora ofrecemos tratamientos faciales de última generación diseñados para cada tipo de piel.</p>
        <p>Nuestros especialistas en cuidado facial han sido capacitados en las técnicas más avanzadas para brindarte resultados visibles desde el primer tratamiento. Ofrecemos limpiezas profundas, hidratación intensa, tratamientos anti-edad y terapias personalizadas.</p>
        <p>Agenda tu cita y descubre cómo tu piel puede lucir más radiante que nunca. ¡Tu mejor versión te espera!</p>`
    },
    {
        id: 4,
        imagen: "img/convenio.png",
        fecha: "25 de mayo, 2026",
        titulo: "Convenio con Escuela de Belleza",
        resumen: "Firmamos un acuerdo con la Escuela de Belleza para ofrecer prácticas profesionales a estudiantes y capacitación continua a nuestro equipo.",
        texto: `<p>Nos complace anunciar nuestro nuevo convenio con la prestigiosa Escuela de Belleza de la ciudad. Este acuerdo nos permitirá ofrecer prácticas profesionales a los estudiantes más destacados, brindándoles la oportunidad de formarse en un entorno real.</p>
        <p>Además, nuestro equipo recibirá capacitación continua en las últimas técnicas y tendencias del mundo de la belleza, asegurando que siempre ofrezcamos servicios de la más alta calidad.</p>
        <p>Este convenio es un paso importante en nuestro compromiso con la excelencia y la formación de nuevos talentos en el sector.</p>`
    },
    {
        id: 5,
        imagen: "img/online.png",
        fecha: "18 de junio, 2026",
        titulo: "Nuevo Sistema de Reservas Online",
        resumen: "Simplificamos la agenda con nuestro nuevo sistema de reservas online. Agendar tu cita nunca fue tan fácil.",
        texto: `<p>Para mejorar la experiencia de nuestros clientes, hemos implementado un nuevo sistema de reservas online. Ahora puedes agendar tu cita desde cualquier lugar y en cualquier momento, de manera rápida y sencilla.</p>
        <p>El sistema te permite ver la disponibilidad de nuestros profesionales, elegir el servicio que deseas y recibir confirmación inmediata. También puedes modificar o cancelar tu cita con solo unos clics.</p>
        <p>Visita nuestra página web y prueba nuestro nuevo sistema. ¡Agendar tu cita nunca fue tan fácil!</p>`
    },
    {
        id: 6,
        imagen: "img/feria.png",
        fecha: "29 de junio, 2026",
        titulo: "Participación en Feria de Belleza",
        resumen: "The Beauty Room estará presente en la Feria Internacional de Belleza 2026. Te esperamos para conocer las últimas tendencias.",
        texto: `<p>Nos enorgullece anunciar que The Beauty Room estará presente en la Feria Internacional de Belleza 2026, que se llevará a cabo el próximo mes. Este evento reúne a los mejores profesionales y marcas del sector.</p>
        <p>En nuestro stand, podrás conocer los últimos avances en tratamientos capilares, skincare y servicios de manicura. También ofreceremos demostraciones en vivo y asesoría personalizada para todos los asistentes.</p>
        <p>¡Te esperamos para compartir nuestra pasión por la belleza y descubrir juntos las tendencias que marcarán el futuro del sector!</p>`
    }
];

// ============================================
// 2. FUNCIÓN PARA MOSTRAR NOTICIAS
// ============================================

function mostrarNoticias() {
    const contenedor = document.getElementById('noticias-grid');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    noticias.forEach(noticia => {
        const card = document.createElement('div');
        card.className = 'noticia-card';

        card.innerHTML = `
            <img class="noticia-imagen" src="${noticia.imagen}" alt="${noticia.titulo}">
            <div class="noticia-info">
                <p class="noticia-fecha">${noticia.fecha}</p>
                <h3 class="noticia-titulo">${noticia.titulo}</h3>
                <p class="noticia-resumen">${noticia.resumen}</p>
                <button class="btn-leer-mas" data-id="${noticia.id}"> Leer más</button>
            </div>
        `;

        contenedor.appendChild(card);
    });

    // Evento para botones "Leer más"
    document.querySelectorAll('.btn-leer-mas').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.dataset.id);
            const noticia = noticias.find(n => n.id === id);
            if (noticia) {
                abrirModalNoticia(noticia);
            }
        });
    });
}

// ============================================
// 3. MODAL DE NOTICIA
// ============================================

function abrirModalNoticia(noticia) {
    const modal = document.getElementById('modal-noticia');
    const body = document.getElementById('modal-noticia-body');
    
    if (!modal || !body) {
        console.error('Modal no encontrado');
        return;
    }
    
    body.innerHTML = `
        <img class="modal-noticia-imagen" src="${noticia.imagen}" alt="${noticia.titulo}">
        <p class="modal-noticia-fecha"> ${noticia.fecha}</p>
        <h2 class="modal-noticia-titulo">${noticia.titulo}</h2>
        <div class="modal-noticia-texto">${noticia.texto}</div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// ============================================
// 4. CERRAR MODAL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const cerrar = document.querySelector('.modal-noticia-cerrar');
    const modal = document.getElementById('modal-noticia');
    
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
        const modal = document.getElementById('modal-noticia');
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }
});

// ============================================
// 5. INICIALIZAR
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    mostrarNoticias();
    console.log('✅ Noticias cargadas correctamente');
});