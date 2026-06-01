// Dados Estruturados para Componentes Otimizados
const depoimentosData = [
    {
        texto: "A adaptação automática para dislexia permitiu ao meu filho compreender os problemas de frações de forma autônoma. O espaçamento e a fonte mudaram tudo.",
        autor: "Mariana R., Mãe de Aluno"
    },
    {
        texto: "Como professora de educação especial, encontrar uma plataforma de matemática que reduz o estímulo visual sob demanda para alunos com TEA é um divisor de águas.",
        autor: "Profª Carla Medeiros, Escola Municipal de Ensino Fundamental"
    },
    {
        texto: "O modo minimalista para TDAH removeu as distrações que sempre me impediam de terminar os exercícios de lógica. Recomendo muito!",
        autor: "Lucas S., Estudante do 9º Ano"
    }
];

const faqData = [
    {
        pergunta: "Como funciona a adaptação inteligente do sistema?",
        resposta: "Logo no cadastro ou login, o aluno seleciona sua neurodivergência ou necessidade específica. Imediatamente, o motor visual altera fontes, espaçamentos, paleta de cores e animações para criar a melhor usabilidade."
    },
    {
        pergunta: "Os professores podem incluir atividades personalizadas?",
        resposta: "Sim. A área do professor permite desenhar jornadas exclusivas de matemática, selecionando os níveis de suporte e blocos de exercícios recomendados para cada estudante."
    },
    {
        pergunta: "A plataforma atende outras matérias além da matemática?",
        resposta: "Inicialmente, focamos toda a nossa arquitetura e engenharia pedagógica na matéria de matemática para garantir a máxima eficácia e evitar sobrecarga de navegação."
    }
];

// Inicialização de Estado Global
let currentFontSize = 16;
let currentTestimonialIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    initAcessibilidade();
    initCarousel();
    initAccordion();
    initAdaptiveSimulation();
});

// Mecanismo de Acessibilidade (Fontes e Alto Contraste)
function initAcessibilidade() {
    const btnIncrease = document.getElementById('btn-font-increase');
    const btnDecrease = document.getElementById('btn-font-decrease');
    const btnContrast = document.getElementById('btn-contrast');

    btnIncrease.addEventListener('click', () => {
        if (currentFontSize < 24) {
            currentFontSize += 2;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    btnDecrease.addEventListener('click', () => {
        if (currentFontSize > 12) {
            currentFontSize -= 2;
            document.documentElement.style.setProperty('--base-font-size', `${currentFontSize}px`);
        }
    });

    btnContrast.addEventListener('click', () => {
        document.body.classList.toggle('high-contrast');
    });
}

// Renderização e Controle do Carrossel
function initCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    depoimentosData.forEach((dep, index) => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        if (index === 0) item.classList.add('active');
        
        item.innerHTML = `
            <p class="testimonial-text">"${dep.texto}"</p>
            <p class="testimonial-author">- ${dep.autor}</p>
        `;
        track.appendChild(item);
    });

    const items = document.querySelectorAll('.carousel-item');
    
    document.getElementById('carousel-next').addEventListener('click', () => {
        items[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex + 1) % items.length;
        items[currentTestimonialIndex].classList.add('active');
    });

    document.getElementById('carousel-prev').addEventListener('click', () => {
        items[currentTestimonialIndex].classList.remove('active');
        currentTestimonialIndex = (currentTestimonialIndex - 1 + items.length) % items.length;
        items[currentTestimonialIndex].classList.add('active');
    });
}

// Renderização e Controle do Acordeão (FAQ)
function initAccordion() {
    const container = document.getElementById('faq-accordion');
    if (!container) return;

    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        faqItem.innerHTML = `
            <button class="faq-trigger">
                <span>${item.pergunta}</span>
                <span>+</span>
            </button>
            <div class="faq-content">
                <p>${item.resposta}</p>
            </div>
        `;

        faqItem.querySelector('.faq-trigger').addEventListener('click', () => {
            faqItem.classList.toggle('active');
        });

        container.appendChild(faqItem);
    });
}

// Motor de Simulação de Perfil Adaptativo
function initAdaptiveSimulation() {
    const btnSimulate = document.getElementById('btn-simulate');
    const workspace = document.getElementById('workspace');
    const statusText = document.getElementById('preview-status-text');
    const neuroType = document.getElementById('neuro-type');
    const studentName = document.getElementById('student-name');

    if (!btnSimulate) return;

    btnSimulate.addEventListener('click', () => {
        const nameInput = studentName.value.trim() || 'Estudante';
        const type = neuroType.value;

        // Limpa classes anteriores
        workspace.classList.remove('workspace-tdah', 'workspace-dislexia', 'workspace-tea');

        if (type === 'tdah') {
            workspace.classList.add('workspace-tdah');
            statusText.innerText = `Visualização: Ambiente Otimizado para TDAH (${nameInput})`;
        } else if (type === 'dislexia') {
            workspace.classList.add('workspace-dislexia');
            statusText.innerText = `Visualização: Ambiente Otimizado para Dislexia (${nameInput})`;
        } else if (type === 'tea') {
            workspace.classList.add('workspace-tea');
            statusText.innerText = `Visualização: Ambiente Otimizado para Autismo/TEA (${nameInput})`;
        } else {
            statusText.innerText = `Visualização: Interface Padrão (${nameInput})`;
        }
    });
}