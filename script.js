// 1. GESTÃO DE DADOS (Simulando um JSON/Banco de Dados)
const especies = [
    { nome: "Raposa-vermelha", habitat: "Hemisfério Norte", desc: "A mais comum e conhecida." },
    { nome: "Raposa-do-ártico", habitat: "Tundra Ártica", desc: "Possui pelagem branca camuflada." },
    { nome: "Feneco", habitat: "Deserto do Saara", desc: "Famosa pelas orelhas gigantes." }
];

const curiosidades = [
    { titulo: "O que elas comem?", texto: "São onívoras, comem desde roedores a frutas." },
    { titulo: "Elas latem?", texto: "Elas produzem mais de 20 vocalizações diferentes." }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderizarConteudo() {
    const container = document.getElementById('galeria-container');
    
    especies.forEach(raposa => {
        const card = document.createElement('article');
        card.className = 'card';
        card.innerHTML = `
            <h3>${raposa.nome}</h3>
            <p><strong>Habitat:</strong> ${raposa.habitat}</p>
            <p>${raposa.desc}</p>
        `;
        container.appendChild(card);
    });

    const faqContainer = document.getElementById('accordion-container');
    curiosidades.forEach((item, index) => {
        faqContainer.innerHTML += `
            <div class="accordion-item">
                <button class="accordion-trigger" onclick="toggleAccordion(${index})">
                    ${item.titulo}
                </button>
                <div id="content-${index}" style="display:none; padding: 1rem;">
                    ${item.texto}
                </div>
            </div>
        `;
    });
}

// 3. ACESSIBILIDADE: TAMANHO DA FONTE
let currentFontSize = 16;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 2 : -2);
    document.documentElement.style.setProperty('--font-base', currentFontSize + 'px');
}

// 4. MODO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 5. ACORDEÃO (Lógica)
function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}

// 6. SCROLL REVEAL (Simples)
window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 50) {
            card.classList.add('visible');
        }
    });
});

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderizarConteudo();
});
