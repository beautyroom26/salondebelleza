// ============================================
// TESTIMONIOS - SOLO MOSTRAR
// ============================================

// ============================================
// 1. LISTA DE TESTIMONIOS
// ============================================

const testimonios = [
    {
        id: 1,
        nombre: "Luana González",
        servicio: "Manicura",
        calificacion: 5,
        texto: "Excelente servicio, salí con mis uñas perfectas. La atención es increíble y el lugar es muy acogedor. Definitivamente volveré.",
        avatar: "MG"
    },
    {
        id: 2,
        nombre: "Lujan Martínez",
        servicio: "Skincare",
        calificacion: 5,
        texto: "El tratamiento facial me dejó la piel radiante. La profesional es muy atenta y me explicó cada paso del proceso. 100% recomendado.",
        avatar: "LM"
    },
    {
        id: 3,
        nombre: "Carolina Rodríguez",
        servicio: "Hair Care",
        calificacion: 4,
        texto: "El corte y peinado quedaron espectaculares. El estilista entendió perfectamente lo que quería. Muy profesional y detallista.",
        avatar: "CR"
    },
    {
        id: 4,
        nombre: "Ana Benítez",
        servicio: "Pedicura",
        calificacion: 5,
        texto: "La pedicura spa es una maravilla. Mis pies quedaron suaves y renovados. El masaje es relajante, sin duda repetiré.",
        avatar: "AB"
    },
    {
        id: 5,
        nombre: "Sofía Pereira",
        servicio: "Manicura",
        calificacion: 5,
        texto: "El nail art que me hicieron es hermoso. La atención fue excelente y el precio es muy accesible. ¡Me encantó!",
        avatar: "SP"
    },
    {
        id: 6,
        nombre: "Karina Martínez",
        servicio: "Hair Care",
        calificacion: 4,
        texto: "Excelente servicio de coloración, el color quedó natural y brillante. El ambiente del salón es muy agradable.",
        avatar: "JM"
    },
    {
        id: 7,
        nombre: "Valentina Rojas",
        servicio: "Skincare",
        calificacion: 5,
        texto: "Mi piel nunca había lucido tan bien. El tratamiento de hidratación intensa es increíble, noté los resultados desde el primer día.",
        avatar: "VR"
    },
    {
        id: 8,
        nombre: "Paola Fernández",
        servicio: "Hair Care",
        calificacion: 5,
        texto: "La mejor experiencia en un salón. El corte que me hicieron es exactamente lo que buscaba. Volveré sin dudas.",
        avatar: "DF"
    },
    {
        id: 9,
        nombre: "Camila Torres",
        servicio: "Manicura",
        calificacion: 4,
        texto: "Me encantó el diseño de uñas que me hicieron. El lugar es precioso y la atención de primera. Muy recomendable.",
        avatar: "CT"
    }
];

// ============================================
// 2. FUNCIÓN PARA MOSTRAR TESTIMONIOS
// ============================================

function mostrarTestimonios() {
    const contenedor = document.getElementById('testimonios-grid');
    if (!contenedor) return;

    contenedor.innerHTML = '';

    testimonios.forEach(testimonio => {
        const card = document.createElement('div');
        card.className = 'testimonio-card';

        // Crear estrellas según calificación
        let estrellas = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= testimonio.calificacion) {
                estrellas += '⭐';
            } else {
                estrellas += '☆';
            }
        }

        card.innerHTML = `
            <div class="testimonio-estrellas">${estrellas}</div>
            <p class="testimonio-texto">${testimonio.texto}</p>
            <div class="testimonio-autor">
                <div class="testimonio-avatar">${testimonio.avatar}</div>
                <div class="testimonio-info">
                    <h4>${testimonio.nombre}</h4>
                    <p>${testimonio.servicio}</p>
                </div>
            </div>
        `;

        contenedor.appendChild(card);
    });
}

// ============================================
// 3. INICIALIZAR
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    mostrarTestimonios();
});