// ============================================================
// SARA LIMA ESTÉTICA — script.js
// WhatsApp: 5535991103879
// ============================================================

const WHATSAPP_NUM = '5535991103879';

const SERVICOS = [
  {
    id: 1,
    tag: 'Corporal',
    icon: '<img src="assets/images/drenagem.png" alt="Drenagem Linfática" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />',
    iconModal: '💧',
    nome: 'Drenagem Linfática',
    preco: 'R$ 80,00',
    resumo: 'Elimine o inchaço, ative a circulação e sinta leveza imediata.',
    descricao: 'Massagem manual com movimentos suaves e rítmicos que estimulam o sistema linfático, acelerando a eliminação de toxinas e líquidos retidos. Alivia inchaço, sensação de peso nas pernas e melhora a circulação geral.',
    beneficios: [
      'Redução de inchaço e retenção hídrica',
      'Melhora da circulação sanguínea e linfática',
      'Alívio de pernas cansadas e pesadas',
      'Excelente para pós-operatório',
      'Sensação imediata de leveza'
    ],
    duracao: '60 minutos'
  },
  {
    id: 2,
    tag: 'Relaxante',
    icon: '<img src="assets/images/relaxante.png" alt="Massagem Relaxante" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />',
    iconModal: '🌿',
    nome: 'Massagem Relaxante',
    preco: 'R$ 90,00',
    resumo: 'Alivie tensões, reduza o estresse e recarregue as energias.',
    descricao: 'Massagem corporal com manobras suaves e envolventes que liberam as tensões musculares acumuladas, reduzem o estresse e proporcionam profundo relaxamento. Uma pausa merecida para cuidar de corpo e mente.',
    beneficios: [
      'Alívio de tensão muscular e estresse',
      'Melhora da qualidade do sono',
      'Liberação de endorfinas naturais',
      'Relaxamento profundo corpo e mente',
      'Sensação de bem-estar duradoura'
    ],
    duracao: '50 a 60 minutos'
  },
  {
    id: 3,
    tag: 'Facial',
    icon: '<img src="assets/images/limpeza.jpg" alt="Limpeza de Pele" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />',
    iconModal: '✨',
    nome: 'Limpeza de Pele',
    preco: 'R$ 100,00',
    resumo: 'Pele limpa, oxigenada e radiante com protocolo completo.',
    descricao: 'Tratamento facial completo que remove impurezas, cravos e células mortas acumuladas, desobstruindo os poros e promovendo a renovação celular. Ideal para todos os tipos de pele, especialmente oleosa e mista.',
    beneficios: [
      'Desobstrução profunda dos poros',
      'Remoção de cravos e impurezas',
      'Pele mais luminosa e uniforme',
      'Preparação para outros tratamentos faciais',
      'Hidratação intensiva ao final'
    ],
    duracao: '60 a 90 minutos'
  },
  {
    id: 4,
    tag: 'Corporal',
    icon: '<img src="assets/images/modeladora.jpg" alt="Massagem Modeladora" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />',
    iconModal: '🔥',
    nome: 'Massagem Modeladora',
    preco: 'R$ 95,00',
    resumo: 'Reduza medidas, combata a celulite e defina o contorno.',
    descricao: 'Técnica de massagem vigorosa com movimentos específicos para quebrar os nódulos de gordura localizada, melhorar o aspecto da celulite e definir o contorno corporal. Resultados visíveis com sessões regulares.',
    beneficios: [
      'Redução de gordura localizada',
      'Melhora do aspecto da celulite',
      'Definição do contorno corporal',
      'Estimula a circulação e o metabolismo',
      'Pele mais firme e tonificada'
    ],
    duracao: '50 a 60 minutos'
  },
  {
    id: 5,
    tag: 'Relaxante',
    icon: '<img src="assets/images/pes.jpg" alt="Escalda Pés" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />',
    iconModal: '🌸',
    nome: 'Escalda Pés',
    preco: 'R$ 55,00',
    resumo: 'Hidratação, relaxamento e cuidado completo para os seus pés.',
    descricao: 'Ritual relaxante que combina imersão dos pés em água morna aromatizada com óleos essenciais, esfoliação, hidratação intensa e massagem. Alivia o cansaço, amacia os calos e proporciona uma sensação deliciosa de leveza.',
    beneficios: [
      'Alívio do cansaço e inchaço dos pés',
      'Hidratação profunda e suavização da pele',
      'Eliminação de calos e pele ressecada',
      'Relaxamento e bem-estar total',
      'Ótimo para combinar com outros tratamentos'
    ],
    duracao: '40 a 50 minutos'
  },
  {
    id: 6,
    tag: 'Corporal',
    icon: '<img src="assets/images/cera.jpg" alt="Depilação com Cera" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />',
    iconModal: '🌺',
    nome: 'Depilação com Cera',
    preco: 'A partir de R$ 25,00',
    resumo: 'Pele lisa por mais tempo com depilação suave e eficiente.',
    descricao: 'Depilação com cera quente ou morna que remove os pelos pela raiz, garantindo pele lisa por muito mais tempo. Realizada com técnica precisa e produtos de qualidade para minimizar o desconforto e irritações.',
    beneficios: [
      'Remoção eficiente dos pelos pela raiz',
      'Pele lisa por 3 a 5 semanas',
      'Pelos nascem mais finos com o tempo',
      'Produtos de qualidade e hipoalergênicos',
      'Técnica precisa para minimizar desconforto'
    ],
    duracao: 'A partir de 20 minutos'
  },
  {
    id: 7,
    tag: 'Facial',
    icon: '<img src="assets/images/detox.jpg" alt="Detox Facial" style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;" />',
    iconModal: '🌟',
    nome: 'Detox Facial',
    preco: 'R$ 110,00',
    resumo: 'Desintoxique a pele e recupere o brilho natural do seu rosto.',
    descricao: 'Tratamento facial desintoxicante que utiliza ativos purificantes e antioxidantes para eliminar as impurezas acumuladas pela poluição e estresse do dia a dia. Revitaliza, ilumina e devolve a vitalidade à pele cansada.',
    beneficios: [
      'Desintoxicação e purificação profunda',
      'Pele mais iluminada e revitalizada',
      'Proteção antioxidante contra a poluição',
      'Redução do aspecto de pele cansada',
      'Efeito de lifting leve e imediato'
    ],
    duracao: '50 a 60 minutos'
  }
];

let carrinho = [];

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  renderServicos();
  initNavbar();
  initContadores();
  initHero();
  initModal();
  initCarrinho();
  initSmoothScroll();
});

// ── Render cards ──────────────────────────────────────────
function renderServicos() {
  const grid = document.getElementById('servicosGrid');
  if (!grid) return;

  grid.innerHTML = SERVICOS.map(s => `
    <article class="servico-card reveal" data-id="${s.id}" tabindex="0" role="button" aria-label="Ver detalhes: ${s.nome}">
      <div class="servico-img" aria-hidden="true">
        <span>${s.icon}</span>
        <div class="servico-img-overlay"></div>
      </div>
      <div class="servico-body">
        <span class="servico-tag">${s.tag}</span>
        <h3>${s.nome}</h3>
        <p>${s.resumo}</p>
        <div class="servico-footer">
          <span class="servico-preco">${s.preco}</span>
          <span class="servico-link" id="link-${s.id}">Ver detalhes &#8594;</span>
        </div>
      </div>
    </article>
  `).join('');

  grid.querySelectorAll('.servico-card').forEach(card => {
    const abrir = () => abrirModal(parseInt(card.dataset.id));
    card.addEventListener('click', abrir);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') abrir(); });
  });

  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── Modal ─────────────────────────────────────────────────
let revealObserver;

function abrirModal(id) {
  const s = SERVICOS.find(x => x.id === id);
  if (!s) return;

  document.getElementById('modalIcon').innerHTML   = s.iconModal || s.icon;
  document.getElementById('modalTag').innerHTML    = s.tag;
  document.getElementById('modalTitulo').innerHTML = s.nome;
  document.getElementById('modalDesc').innerHTML   = s.descricao;
  document.getElementById('modalDuracao').innerHTML = '⏰ ' + s.duracao;
  document.getElementById('modalPreco').innerHTML  = s.preco;

  document.getElementById('modalBeneficios').innerHTML =
    s.beneficios.map(b => `<li>${b}</li>`).join('');

  const btn = document.getElementById('modalAgendar');
  const jaAdicionado = carrinho.some(x => x.id === id);

  if (jaAdicionado) {
    btn.innerHTML = '✓ Já está no seu agendamento';
    btn.style.background = '#4caf50';
    btn.style.borderColor = '#4caf50';
    btn.onclick = () => fecharModal();
  } else {
    btn.innerHTML = '✦ Adicionar ao Agendamento';
    btn.style.background = '';
    btn.style.borderColor = '';
    btn.onclick = () => {
      adicionarAoCarrinho(s);
      fecharModal();
      abrirCarrinhoPainel();
    };
  }

  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', fecharModal);
  document.getElementById('modalOverlay').addEventListener('click', e => {
    if (e.target === e.currentTarget) fecharModal();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') fecharModal();
  });
}

// ── Carrinho ──────────────────────────────────────────────
function adicionarAoCarrinho(servico) {
  if (carrinho.some(x => x.id === servico.id)) return;
  carrinho.push(servico);
  atualizarCarrinhoUI();
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter(x => x.id !== id);
  atualizarCarrinhoUI();
}

function atualizarCarrinhoUI() {
  const count = document.getElementById('carrinhoCount');
  count.textContent = carrinho.length;

  const lista  = document.getElementById('carrinhoLista');
  const footer = document.getElementById('carrinhoFooter');

  if (carrinho.length === 0) {
    lista.innerHTML = '<p class="carrinho-vazio">Nenhum serviço selecionado ainda.</p>';
    footer.style.display = 'none';
  } else {
    lista.innerHTML = carrinho.map(s => `
      <div class="carrinho-item">
        <span class="carrinho-item-icon">${s.iconModal || s.icon}</span>
        <div class="carrinho-item-info">
          <div class="carrinho-item-nome">${s.nome}</div>
          <div class="carrinho-item-tag">${s.preco} &middot; ${s.duracao}</div>
        </div>
        <button class="carrinho-item-remover" data-id="${s.id}" aria-label="Remover">&#10005;</button>
      </div>
    `).join('');

    lista.querySelectorAll('.carrinho-item-remover').forEach(btn => {
      btn.addEventListener('click', () => removerDoCarrinho(parseInt(btn.dataset.id)));
    });

    footer.style.display = 'flex';
  }

  document.querySelectorAll('.servico-card').forEach(card => {
    const id   = parseInt(card.dataset.id);
    const link = document.getElementById('link-' + id);
    if (carrinho.some(x => x.id === id)) {
      card.classList.add('adicionado');
      if (link) { link.innerHTML = '✓ Adicionado'; link.style.color = '#4caf50'; }
    } else {
      card.classList.remove('adicionado');
      if (link) { link.innerHTML = 'Ver detalhes →'; link.style.color = ''; }
    }
  });
}

function abrirCarrinhoPainel() {
  document.getElementById('carrinhoPainel').classList.add('open');
  document.getElementById('carrinhoOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function fecharCarrinhoPainel() {
  document.getElementById('carrinhoPainel').classList.remove('open');
  document.getElementById('carrinhoOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function initCarrinho() {
  document.getElementById('carrinhoBtn').addEventListener('click', abrirCarrinhoPainel);
  document.getElementById('carrinhoFechar').addEventListener('click', fecharCarrinhoPainel);
  document.getElementById('carrinhoOverlay').addEventListener('click', fecharCarrinhoPainel);
  document.getElementById('carrinhoLimpar').addEventListener('click', () => {
    carrinho = [];
    atualizarCarrinhoUI();
  });
  document.getElementById('carrinhoWhats').addEventListener('click', agendarWhatsApp);
}

function agendarWhatsApp() {
  if (carrinho.length === 0) return;

  const itens = carrinho
    .map(s => encodeURIComponent('   ✨ ' + s.nome + ' — ' + s.preco))
    .join('%0A');

  const msg =
    encodeURIComponent('🌸 SARA LIMA ESTÉTICA 🌸') + '%0A' +
    encodeURIComponent('_______________________________') + '%0A%0A' +
    encodeURIComponent('Olá Sara, tudo bem? 💕') + '%0A%0A' +
    encodeURIComponent('Gostaria de agendar os seguintes tratamentos:') + '%0A%0A' +
    itens + '%0A%0A' +
    encodeURIComponent('📍 Estou em Caxambu — MG') + '%0A' +
    encodeURIComponent('🗓️ Poderia me informar os horários disponíveis?') + '%0A%0A' +
    encodeURIComponent('Aguardo seu retorno! 🙏✨');

  window.open('https://wa.me/' + WHATSAPP_NUM + '?text=' + msg, '_blank');
}

// ── Navbar ────────────────────────────────────────────────
function initNavbar() {
  const navbar   = document.querySelector('.navbar');
  const toggle   = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      const spans = toggle.querySelectorAll('span');
      if (isOpen) {
        spans[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => {
          s.style.transform = '';
          s.style.opacity = '';
        });
      });
    });
  }
}

// ── Hero ──────────────────────────────────────────────────
function initHero() {
  const hero = document.querySelector('.hero');
  if (hero) setTimeout(() => hero.classList.add('loaded'), 100);
}

// ── Scroll Reveal ─────────────────────────────────────────
function initScrollReveal() {
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── Contadores ────────────────────────────────────────────
function initContadores() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = parseInt(el.dataset.counter, 10);
      const suffix = el.dataset.suffix || '';
      let current  = 0;
      const step   = target / 60;
      const timer  = setInterval(() => {
        current += step;
        if (current >= target) { el.textContent = target + suffix; clearInterval(timer); }
        else el.textContent = Math.floor(current) + suffix;
      }, 20);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-counter]').forEach(el => io.observe(el));
}

// ── Smooth Scroll ─────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}