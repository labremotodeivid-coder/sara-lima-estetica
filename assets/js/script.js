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
    nome: 'Drenagem Linf&#225;tica',
    preco: 'R$ 80,00',
    resumo: 'Elimine o incha&#231;o, ative a circula&#231;&#227;o e sinta leveza imediata.',
    descricao: 'Massagem manual com movimentos suaves e r&#237;tmicos que estimulam o sistema linf&#225;tico, acelerando a elimina&#231;&#227;o de toxinas e l&#237;quidos retidos. Alivia incha&#231;o, sensa&#231;&#227;o de peso nas pernas e melhora a circula&#231;&#227;o geral.',
    beneficios: [
      'Redu&#231;&#227;o de incha&#231;o e reten&#231;&#227;o h&#237;drica',
      'Melhora da circula&#231;&#227;o sangu&#237;nea e linf&#225;tica',
      'Al&#237;vio de pernas cansadas e pesadas',
      'Excelente para p&#243;s-operat&#243;rio',
      'Sensa&#231;&#227;o imediata de leveza'
    ],
    duracao: '60 minutos'
  },
  {
    id: 2,
    tag: 'Relaxante',
    icon: '&#127807;',
    nome: 'Massagem Relaxante',
    preco: 'R$ 90,00',
    resumo: 'Alivie tens&#245;es, reduza o estresse e recarregue as energias.',
    descricao: 'Massagem corporal com manobras suaves e envolventes que liberam as tens&#245;es musculares acumuladas, reduzem o estresse e proporcionam profundo relaxamento. Uma pausa merecida para cuidar de corpo e mente.',
    beneficios: [
      'Al&#237;vio de tens&#227;o muscular e estresse',
      'Melhora da qualidade do sono',
      'Libera&#231;&#227;o de endorfinas naturais',
      'Relaxamento profundo corpo e mente',
      'Sensa&#231;&#227;o de bem-estar duradoura'
    ],
    duracao: '50 a 60 minutos'
  },
  {
    id: 3,
    tag: 'Facial',
    icon: '&#10024;',
    nome: 'Limpeza de Pele',
    preco: 'R$ 100,00',
    resumo: 'Pele limpa, oxigenada e radiante com protocolo completo.',
    descricao: 'Tratamento facial completo que remove impurezas, cravos e c&#233;lulas mortas acumuladas, desobstruindo os poros e promovendo a renova&#231;&#227;o celular. Ideal para todos os tipos de pele, especialmente oleosa e mista.',
    beneficios: [
      'Desobstru&#231;&#227;o profunda dos poros',
      'Remo&#231;&#227;o de cravos e impurezas',
      'Pele mais luminosa e uniforme',
      'Prepara&#231;&#227;o para outros tratamentos faciais',
      'Hidrata&#231;&#227;o intensiva ao final'
    ],
    duracao: '60 a 90 minutos'
  },
  {
    id: 4,
    tag: 'Corporal',
    icon: '&#128293;',
    nome: 'Massagem Modeladora',
    preco: 'R$ 95,00',
    resumo: 'Reduza medidas, combata a celulite e defina o contorno.',
    descricao: 'T&#233;cnica de massagem vigorosa com movimentos espec&#237;ficos para quebrar os n&#243;dulos de gordura localizada, melhorar o aspecto da celulite e definir o contorno corporal. Resultados vis&#237;veis com sess&#245;es regulares.',
    beneficios: [
      'Redu&#231;&#227;o de gordura localizada',
      'Melhora do aspecto da celulite',
      'Defini&#231;&#227;o do contorno corporal',
      'Estimula a circula&#231;&#227;o e o metabolismo',
      'Pele mais firme e tonificada'
    ],
    duracao: '50 a 60 minutos'
  },
  {
    id: 5,
    tag: 'Relaxante',
    icon: '&#127800;',
    nome: 'Escalda P&#233;s',
    preco: 'R$ 55,00',
    resumo: 'Hidrata&#231;&#227;o, relaxamento e cuidado completo para os seus p&#233;s.',
    descricao: 'Ritual relaxante que combina imers&#227;o dos p&#233;s em &#225;gua morna aromatizada com &#243;leos essenciais, esfolia&#231;&#227;o, hidrata&#231;&#227;o intensa e massagem. Alivia o cansa&#231;o, amacia os calos e proporciona uma sensa&#231;&#227;o deliciosa de leveza.',
    beneficios: [
      'Al&#237;vio do cansa&#231;o e incha&#231;o dos p&#233;s',
      'Hidrata&#231;&#227;o profunda e suaviza&#231;&#227;o da pele',
      'Elimina&#231;&#227;o de calos e pele ressecada',
      'Relaxamento e bem-estar total',
      '&#211;timo para combinar com outros tratamentos'
    ],
    duracao: '40 a 50 minutos'
  },
  {
    id: 6,
    tag: 'Corporal',
    icon: '&#127802;',
    nome: 'Depila&#231;&#227;o com Cera',
    preco: 'A partir de R$ 25,00',
    resumo: 'Pele lisa por mais tempo com depila&#231;&#227;o suave e eficiente.',
    descricao: 'Depila&#231;&#227;o com cera quente ou morna que remove os pelos pela raiz, garantindo pele lisa por muito mais tempo. Realizada com t&#233;cnica precisa e produtos de qualidade para minimizar o desconforto e irrita&#231;&#245;es.',
    beneficios: [
      'Remo&#231;&#227;o eficiente dos pelos pela raiz',
      'Pele lisa por 3 a 5 semanas',
      'Pelos nascem mais finos com o tempo',
      'Produtos de qualidade e hipoalerg&#234;nicos',
      'T&#233;cnica precisa para minimizar desconforto'
    ],
    duracao: 'A partir de 20 minutos'
  },
  {
    id: 7,
    tag: 'Facial',
    icon: '&#127775;',
    nome: 'Detox Facial',
    preco: 'R$ 110,00',
    resumo: 'Desintoxique a pele e recupere o brilho natural do seu rosto.',
    descricao: 'Tratamento facial desintoxicante que utiliza ativos purificantes e antioxidantes para eliminar as impurezas acumuladas pela polui&#231;&#227;o e estresse do dia a dia. Revitaliza, ilumina e devolve a vitalidade &#224; pele cansada.',
    beneficios: [
      'Desintoxica&#231;&#227;o e purifica&#231;&#227;o profunda',
      'Pele mais iluminada e revitalizada',
      'Prote&#231;&#227;o antioxidante contra a polui&#231;&#227;o',
      'Redu&#231;&#227;o do aspecto de pele cansada',
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

  document.getElementById('modalIcon').innerHTML   = s.icon;
  document.getElementById('modalTag').innerHTML    = s.tag;
  document.getElementById('modalTitulo').innerHTML = s.nome;
  document.getElementById('modalDesc').innerHTML   = s.descricao;
  document.getElementById('modalDuracao').innerHTML = '&#9200; ' + s.duracao;
  document.getElementById('modalPreco').innerHTML  = s.preco;

  document.getElementById('modalBeneficios').innerHTML =
    s.beneficios.map(b => `<li>${b}</li>`).join('');

  const btn = document.getElementById('modalAgendar');
  const jaAdicionado = carrinho.some(x => x.id === id);

  if (jaAdicionado) {
    btn.innerHTML = '&#10003; J&#225; est&#225; no seu agendamento';
    btn.style.background = '#4caf50';
    btn.style.borderColor = '#4caf50';
    btn.onclick = () => fecharModal();
  } else {
    btn.innerHTML = '&#10022; Adicionar ao Agendamento';
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
    lista.innerHTML = '<p class="carrinho-vazio">Nenhum servi&#231;o selecionado ainda.</p>';
    footer.style.display = 'none';
  } else {
    lista.innerHTML = carrinho.map(s => `
      <div class="carrinho-item">
        <span class="carrinho-item-icon">${s.icon}</span>
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
      if (link) { link.innerHTML = '&#10003; Adicionado'; link.style.color = '#4caf50'; }
    } else {
      card.classList.remove('adicionado');
      if (link) { link.innerHTML = 'Ver detalhes &#8594;'; link.style.color = ''; }
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
    .map(s => encodeURIComponent('   \u2728 ' + s.nome + ' \u2014 ' + s.preco))
    .join('%0A');

  const msg =
    encodeURIComponent('\uD83C\uDF38 SARA LIMA EST\u00C9TICA \uD83C\uDF38') + '%0A' +
    encodeURIComponent('_______________________________') + '%0A%0A' +
    encodeURIComponent('Ol\u00E1 Sara, tudo bem? \uD83D\uDC95') + '%0A%0A' +
    encodeURIComponent('Gostaria de agendar os seguintes tratamentos:') + '%0A%0A' +
    itens + '%0A%0A' +
    encodeURIComponent('\uD83D\uDCCD Estou em Caxambu \u2014 MG') + '%0A' +
    encodeURIComponent('\uD83D\uDDD3\uFE0F Poderia me informar os hor\u00E1rios dispon\u00EDveis?') + '%0A%0A' +
    encodeURIComponent('Aguardo seu retorno! \uD83D\uDE4F\u2728');

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