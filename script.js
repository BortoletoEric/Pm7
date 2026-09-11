/**
 * PM7 ENGENHARIA - JAVASCRIPT NATIVO VANILLA (ZERO FRAMEWORK)
 * 100% Funcional e compatível com Five Server, Live Server ou qualquer servidor web estático.
 */

// ============================================================================
// CONFIGURAÇÃO DA EMPRESA (EDITE DIRETAMENTE AQUI)
// Altere os dados abaixo para refletir as informações reais da sua empresa:
// ============================================================================
const COMPANY_CONFIG = {
  name: 'Pm7 Engenharia',
  tradeName: 'Pm7 Engenharia',
  responsibleEngineer: 'Eng. Paulo Macedo Silva',
  crea: 'CREA-SP com ART / Visto Nacional',
  phone: '55 11 92019-0370',
  whatsapp: '55920190370',
  email: 'paulo@pm7engenharia.com.br',
  website: 'www.pm7engenharia.com.br',
  address: 'São Paulo - SP',
  cityState: 'São Paulo - SP',
  emergencyPhone: '55 11 92019-0370 (Eng. Paulo Macedo)',
};

const PROJECTS_DATA = [
  {
    id: 'subestacao-cajamar',
    title: 'Subestação Abrigada de 3.000 kVA - Centro Logístico',
    category: 'subestacoes',
    clientSector: 'Logística & E-commerce',
    location: 'Cajamar, SP',
    capacity: '3.000 kVA (2x 1.500 kVA a seco) / 13,8 kV',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    summary: 'Projeto executivo, aprovação na concessionária e montagem eletromecânica completa de cabine primária para galpão AAA.',
    challenge: 'Prazo crítico de 45 dias antes do início da operação do centro de distribuição, com exigência de paralelismo momentâneo e redundância N+1.',
    solution: 'Adiantamento dos pedidos de transformadores a seco com grau de proteção IP-23, parametrização antecipada de relés de proteção Schneider e comissionamento com equipe 24/7.',
    standards: ['NBR 14039', 'Padrão Enel DTI', 'NR-10'],
    scope: [
      'Aprovação do projeto elétrico de média tensão junto à concessionária',
      'Montagem de 2 transformadores a seco de 1.500 kVA com monitoramento térmico',
      'Disjuntor de média tensão a vácuo com proteção contra curto e sobrecarga',
      'Malha de aterramento profunda com hastes de cobre e medição < 5 Ohms',
      'Comissionamento completo, ensaios de rigidez e emissão de ART'
    ]
  },
  {
    id: 'qgbt-paulinia',
    title: 'Montagem de QGBT 4.000A com Barramento Blindado',
    category: 'instalacoes',
    clientSector: 'Indústria Farmacêutica',
    location: 'Paulínia, SP',
    capacity: 'QGBT 4.000A Forma Construtiva 4b / 380V',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    summary: 'Substituição planejada de quadro geral de baixa tensão sem interrupção da linha crítica de produção de medicamentos.',
    challenge: 'Espaço confinado na sala elétrica existente e janela máxima de desligamento de 14 horas durante feriado.',
    solution: 'Pré-fabricação milimétrica de barramentos de cobre eletrolítico e simulação 3D das conexões antes da parada programada, concluída 2 horas antes do limite.',
    standards: ['NBR IEC 61439-1/2', 'NBR 5410', 'NR-10'],
    scope: [
      'Quadro Geral com disjuntores caixa aberta motorizados',
      'Intertravamento elétrico e mecânico rede comercial vs grupo gerador',
      'Instalação de 120m de barramento blindado (Busway) de alumínio estanhado',
      'Sistema de medição de energia setorizada Modbus/TCP',
      'Laudo técnico de entrega e termo de garantia estendida'
    ]
  },
  {
    id: 'laudo-spda-sorocaba',
    title: 'Laudo Pericial de SPDA e Termografia Global',
    category: 'laudos',
    clientSector: 'Complexo Metalmecânico',
    location: 'Sorocaba, SP',
    capacity: 'Área fabril de 42.000 m² / 14 galpões',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    summary: 'Inspeção pericial completa de proteção contra descargas atmosféricas conforme NBR 5419:2015 e termografia em 68 quadros.',
    challenge: 'Histórico de queima de placas eletrônicas de tornos CNC durante tempestades de verão e exigência de renovação de AVCB.',
    solution: 'Diagnóstico identificou laços indutivos incorretos no SPDA. Foram instalados DPS Classe I e II coordenados e corrigidas as malhas de aterramento.',
    standards: ['NBR 5419:2015 Partes 1 a 4', 'NBR 5410', 'NR-10'],
    scope: [
      'Medição de continuidade de descidas e anéis de equalização',
      'Termografia em 68 painéis elétricos com câmera Fluke calibrada RBC',
      'Revisão e especificação dos Dispositivos Protetores de Surtos (DPS)',
      'Relatório fotográfico ilustrado com mapa de calor e recomendações',
      'Apresentação executiva para a diretoria industrial e seguradora'
    ]
  },
  {
    id: 'datacenter-alphaville',
    title: 'Projeto Elétrico Executivo para Edifício Corporativo & TI',
    category: 'projetos',
    clientSector: 'Tecnologia e Serviços Financeiros',
    location: 'Barueri / Alphaville, SP',
    capacity: 'Alimentação dupla com redundância Tier III (1.200 kVA)',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    summary: 'Engenharia de detalhamento para infraestrutura de energia ininterrupta com no-breaks modulares e geradores automáticos.',
    challenge: 'Necessidade de disponibilidade 99,982% sem ponto único de falha (Single Point of Failure - SPOF).',
    solution: 'Topologia em anel com chaves estáticas STS, dois bancos de baterias independentes e controle de seletividade lógica da proteção.',
    standards: ['NBR 5410', 'TIA-942 Tier III', 'NBR 14039'],
    scope: [
      'Projeto elétrico executivo com modelagem BIM (LOD 350)',
      'Estudo de coordenação e seletividade da proteção em software',
      'Dimensionamento de sistema UPS paralelo redundante de 400 kVA',
      'Quadro de Transferência Automática (QTA) microprocessado',
      'Acompanhamento de homologação perante a concessionária de energia'
    ]
  },
  {
    id: 'capacitores-campinas',
    title: 'Banco de Capacitores Automático com Filtro de Harmônicos',
    category: 'instalacoes',
    clientSector: 'Indústria Química',
    location: 'Campinas, SP',
    capacity: '850 kvar com reatores anti-ressonância (detuned 7%)',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    summary: 'Solução definitiva para eliminação de R$ 38.000/mês em multas de energia reativa excedente na conta de energia.',
    challenge: 'Presença massiva de inversores de frequência na linha de mistura provocando distorção harmônica e queima de capacitores convencionais.',
    solution: 'Instalação de banco com reatores anti-ressonância dessintonizados em 189 Hz e controlador microprocessado de 12 estágios.',
    standards: ['PRODIST Módulo 8', 'IEEE 519', 'NBR 5410'],
    scope: [
      'Monitoramento de 7 dias com analisador de energia Classe A',
      'Fornecimento e montagem de cubículo metálico ventilado IP-54',
      'Filtro de rejeição harmônica e proteção por fusíveis NH retardados',
      'Correção do FP de 0,78 para 0,96 garantido em todos os postos',
      'Retorno sobre o investimento (Payback) alcançado em apenas 4,2 meses'
    ]
  },
  {
    id: 'prontuario-ribeirao',
    title: 'Prontuário NR-10 e Auditoria Completa de Instalações',
    category: 'laudos',
    clientSector: 'Frigorífico & Alimentos',
    location: 'Ribeirão Preto, SP',
    capacity: 'Planta industrial com 350 colaboradores e 120 motores',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80',
    summary: 'Auditoria e elaboração do Prontuário de Instalações Elétricas (PIE) exigido pelo Ministério do Trabalho para renovação de licença.',
    challenge: 'Instalações em ambiente úmido e corrosivo, com histórico de autuações prévias e documentação desatualizada.',
    solution: 'Mapeamento cadastral integral de campo, redesenho dos unifilares em CAD e elaboração de procedimentos de LOTO e manutenção segura.',
    standards: ['NR-10 (Portaria MTE 598)', 'NBR 5410', 'NR-12'],
    scope: [
      'Levantamento cadastral de 100% dos quadros e cargas motrizes',
      'Emissão do Relatório Técnico das Inspeções (RTI) com plano de adequação',
      'Especificação de vestimentas de proteção contra arco elétrico (ATP)',
      'Padronização de etiquetas de bloqueio de segurança e sinalização',
      'Aprovação sem ressalvas na auditoria fiscal do trabalho'
    ]
  }
];

// 2. Dados e Configurações da Empresa
const currentCompany = { ...COMPANY_CONFIG };

function applyCompanyToDOM() {
  // Atualiza elementos de texto marcados com data-company-*
  document.querySelectorAll('[data-company-name]').forEach(el => el.textContent = currentCompany.name);
  document.querySelectorAll('[data-company-trade]').forEach(el => el.textContent = currentCompany.tradeName);
  document.querySelectorAll('[data-company-engineer]').forEach(el => el.textContent = currentCompany.responsibleEngineer);
  document.querySelectorAll('[data-company-website]').forEach(el => el.textContent = currentCompany.website);
  document.querySelectorAll('[data-company-crea]').forEach(el => el.textContent = currentCompany.crea);
  document.querySelectorAll('[data-company-phone]').forEach(el => el.textContent = currentCompany.phone);
  document.querySelectorAll('[data-company-email]').forEach(el => el.textContent = currentCompany.email);
  document.querySelectorAll('[data-company-address]').forEach(el => el.textContent = currentCompany.address);
  document.querySelectorAll('[data-company-city]').forEach(el => el.textContent = currentCompany.cityState);
  document.querySelectorAll('[data-company-emergency]').forEach(el => el.textContent = currentCompany.emergencyPhone);

  // Atualiza links de telefone, email e WhatsApp
  const cleanPhone = currentCompany.phone.replace(/\D/g, '');
  document.querySelectorAll('a[href^="tel:"]').forEach(el => el.setAttribute('href', `tel:${cleanPhone}`));
  document.querySelectorAll('a[href^="mailto:"]').forEach(el => el.setAttribute('href', `mailto:${currentCompany.email}`));

  const waLinks = document.querySelectorAll('.dynamic-whatsapp-link');
  waLinks.forEach(el => {
    el.setAttribute('href', `https://wa.me/${currentCompany.whatsapp}?text=${encodeURIComponent('Olá Eng. Paulo Macedo Silva, gostaria de solicitar uma proposta técnica com a ' + currentCompany.tradeName + '.')}`);
  });
}

// 3. Renderização Dinâmica dos Projetos
function renderProjects(category = 'todos') {
  const container = document.getElementById('projectsContainer');
  if (!container) return;

  const filtered = category === 'todos' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === category);

  container.innerHTML = filtered.map(project => `
    <div class="project-card" data-category="${project.category}">
      <div class="project-img-wrap">
        <img src="${project.imageUrl}" alt="${project.title}" loading="lazy" />
        <span class="project-sector-badge">${project.clientSector}</span>
        <div class="project-meta-overlay">
          <span>📍 ${project.location}</span>
          <span style="color: #fcd34d; font-family: monospace;">⚡ ${project.capacity.split('/')[0]}</span>
        </div>
      </div>
      <div class="project-content">
        <div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
        </div>
        <div>
          <div class="project-standards">
            ${project.standards.slice(0, 3).map(s => `<span class="norma-chip">${s}</span>`).join('')}
          </div>
          <button class="btn btn-outline-light btn-block btn-sm" onclick="openProjectModal('${project.id}')">
            <span>Ver Ficha Técnica Completa</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// 4. Modal de Detalhes do Projeto
function openProjectModal(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modalOverlay = document.getElementById('projectModalOverlay');
  const modalBody = document.getElementById('projectModalBody');
  const modalTitle = document.getElementById('projectModalTitle');

  modalTitle.textContent = project.title;
  modalBody.innerHTML = `
    <div style="position: relative; height: 16rem; border-radius: 12px; overflow: hidden; margin-bottom: 1.5rem; background: #0f172a;">
      <img src="${project.imageUrl}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;" />
      <div style="position: absolute; bottom: 0; left: 0; right: 0; padding: 1rem; background: linear-gradient(to top, rgba(15,23,42,0.95), transparent); color: #fff;">
        <span style="background: #f59e0b; color: #0f172a; font-size: 0.7rem; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 4px; text-transform: uppercase;">
          ${project.clientSector}
        </span>
        <span style="margin-left: 0.75rem; font-size: 0.8rem;">📍 ${project.location}</span>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; padding: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; margin-bottom: 1.5rem; font-size: 0.85rem;">
      <div>
        <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block;">Capacidade Instalada</span>
        <strong style="color: #0f172a;">⚡ ${project.capacity}</strong>
      </div>
      <div>
        <span style="font-size: 0.7rem; font-weight: 700; text-transform: uppercase; color: #64748b; display: block;">Normas Atendidas</span>
        <strong style="color: #059669;">🛡️ ${project.standards.join(' • ')}</strong>
      </div>
    </div>

    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: #92400e; margin-bottom: 0.35rem;">O Desafio da Obra</h4>
      <p style="background: #fef3c7; border: 1px solid #fde68a; padding: 0.85rem; border-radius: 8px; font-size: 0.85rem; color: #78350f;">
        ${project.challenge}
      </p>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: #065f46; margin-bottom: 0.35rem;">Solução de Engenharia</h4>
      <p style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 0.85rem; border-radius: 8px; font-size: 0.85rem; color: #065f46;">
        ${project.solution}
      </p>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: #1e293b; margin-bottom: 0.5rem;">Escopo do Fornecimento:</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem; color: #334155;">
        ${project.scope.map(item => `
          <li style="display: flex; align-items: flex-start; gap: 0.5rem;">
            <span style="color: #10b981; font-weight: bold;">✔</span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="display: flex; gap: 1rem; border-top: 1px solid #e2e8f0; padding-top: 1rem; justify-content: flex-end; flex-wrap: wrap;">
      <button class="btn btn-outline-light" onclick="closeModal('projectModalOverlay')">Fechar</button>
      <button class="btn btn-primary" onclick="requestSimilarProject('${project.title}')">
        Solicitar Orçamento Similar
      </button>
    </div>
  `;

  modalOverlay.classList.add('active');
}

function requestSimilarProject(projectTitle) {
  closeModal('projectModalOverlay');
  const serviceInput = document.getElementById('serviceType');
  const descInput = document.getElementById('description');
  if (serviceInput) serviceInput.value = 'Outro / Múltiplos Serviços';
  if (descInput) descInput.value = `Gostaria de uma proposta técnica similar à obra: ${projectTitle}.`;
  
  const el = document.getElementById('contato');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// 5. Simulador de Pré-Escopo Técnico
function calculateScope() {
  const facility = document.querySelector('input[name="simFacility"]:checked')?.value || 'industria';
  const service = document.querySelector('input[name="simService"]:checked')?.value || 'subestacao';
  const power = document.querySelector('input[name="simPower"]:checked')?.value || 'media';

  const resultBox = document.getElementById('simResultBox');
  if (!resultBox) return;

  let title = '';
  let standards = '';
  let days = '';
  let items = [];
  let tip = '';

  if (service === 'subestacao') {
    title = 'Subestação de Média Tensão (13,8 a 34,5 kV)';
    standards = 'NBR 14039 • NR-10 • Homologação Concessionária';
    days = power === 'pesada' ? '45 a 60 dias' : '30 a 45 dias';
    items = [
      'Elaboração de projeto executivo e protocolo na concessionária (Enel/CPFL/EDP)',
      'Transformador a seco ou óleo com ensaios dielétricos e TTR',
      'Cubículos de média tensão com disjuntor a vácuo e relés de proteção',
      'Malha de aterramento com cálculo de passo e toque e ART do CREA'
    ];
    tip = 'Fundamental vistoria prévia para checar o ponto de entrega e poste da rede pública.';
  } else if (service === 'qgbt') {
    title = 'Quadro Geral de Baixa Tensão (QGBT) & Barramentos';
    standards = 'NBR IEC 61439-1/2 • NBR 5410 • NR-10';
    days = '15 a 30 dias';
    items = [
      'Montagem de QGBT com formas construtivas segregadas IP-54',
      'Disjuntores caixa aberta/moldada motorizados com intertravamento',
      'Barramentos de cobre 99,9% com pintura e termorretrátil',
      'As-built cadastral e ensaios de continuidade'
    ];
    tip = 'Planejamento de janela de desligamento em final de semana para zero impacto na fábrica.';
  } else if (service === 'spda') {
    title = 'Laudo Pericial de SPDA & Termografia Global';
    standards = 'NBR 5419:2015 (Partes 1 a 4) • NR-10';
    days = '3 a 7 dias úteis';
    items = [
      'Medição ôhmica de aterramento pelo método de queda de potencial',
      'Termografia com câmera Fluke calibrada RBC em 100% dos quadros',
      'Avaliação dos Dispositivos Protetores de Surtos (DPS)',
      'Emissão de Laudo Conclusivo com ART e fotos comentadas'
    ];
    tip = 'Item obrigatório para renovação de AVCB do Corpo de Bombeiros e apólice de seguro.';
  } else if (service === 'nr10') {
    title = 'Prontuário de Instalações Elétricas (PIE) e Adequação NR-10';
    standards = 'NR-10 (Portaria 598) • NR-12 • IEEE 1584';
    days = '20 a 40 dias';
    items = [
      'Levantamento cadastral completo de campo e unifilares',
      'Relatório Técnico de Inspeções (RTI) com cronograma de correções',
      'Estudo de Arc Flash (energia incidente) e especificação de EPIs',
      'Procedimentos de bloqueio (LOTO) e instruções técnicas de trabalho'
    ];
    tip = 'Blindagem contra multas pesadas e interdições do Ministério do Trabalho.';
  } else {
    title = 'Banco de Capacitores Automático & Correção de Fator de Potência';
    standards = 'PRODIST Módulo 8 • IEEE 519 • NBR 5410';
    days = '10 a 20 dias';
    items = [
      'Análise prévia de 7 dias com registrador de grandezas elétricas',
      'Células capacitivas trifásicas com reatores anti-ressonância',
      'Controlador microprocessado com chaveamento inteligente',
      'Eliminação comprovada de multas de energia reativa na fatura'
    ];
    tip = 'Retorno sobre o investimento (Payback) médio entre 3 e 5 meses.';
  }

  resultBox.innerHTML = `
    <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 0.75rem; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
      <div>
        <span style="font-size: 0.7rem; font-weight: 800; color: #b45309; text-transform: uppercase;">Diagnóstico de Engenharia</span>
        <h4 style="font-size: 1.1rem; font-weight: 800; color: #0f172a;">${title}</h4>
      </div>
      <span style="background: #ffffff; border: 1px solid #e2e8f0; padding: 0.3rem 0.6rem; border-radius: 6px; font-size: 0.75rem; font-weight: 700; color: #475569;">
        ⏱️ Prazo: ${days}
      </span>
    </div>

    <div style="margin-bottom: 1rem;">
      <span style="font-size: 0.75rem; font-weight: 700; color: #334155; display: block; margin-bottom: 0.25rem;">Normas Regulatórias Obrigatórias:</span>
      <span style="font-family: monospace; font-size: 0.75rem; font-weight: 600; background: #ffffff; padding: 0.25rem 0.5rem; border: 1px solid #cbd5e1; border-radius: 4px; display: inline-block;">
        ${standards}
      </span>
      <span style="margin-left: 0.5rem; font-size: 0.75rem; font-weight: 700; color: #059669;">🛡️ ART CREA Inclusa</span>
    </div>

    <div style="margin-bottom: 1rem;">
      <span style="font-size: 0.75rem; font-weight: 700; color: #334155; display: block; margin-bottom: 0.5rem;">Entregáveis Recomendados da Engenharia:</span>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.35rem; font-size: 0.8rem; color: #475569;">
        ${items.map(i => `<li style="display: flex; align-items: flex-start; gap: 0.4rem;"><span style="color: #10b981;">✔</span><span>${i}</span></li>`).join('')}
      </ul>
    </div>

    <div style="background: #fef3c7; border: 1px solid #fde68a; padding: 0.75rem; border-radius: 8px; font-size: 0.75rem; color: #92400e; margin-bottom: 1.25rem;">
      <strong>Orientação Técnica:</strong> ${tip}
    </div>

    <div style="display: flex; gap: 0.75rem; justify-content: flex-end; flex-wrap: wrap;">
      <button class="btn btn-whatsapp btn-sm" onclick="sendSimulationWhatsApp('${title}', '${days}', '${facility}')">
        <span>Enviar no WhatsApp</span>
      </button>
      <button class="btn btn-primary btn-sm" onclick="applySimulationToForm('${title}', '${days}', '${facility}')">
        <span>Preencher no Formulário</span>
      </button>
    </div>
  `;
}

function sendSimulationWhatsApp(title, days, facility) {
  const text = `*SIMULAÇÃO DE PRÉ-ESCOPO - ${currentCompany.tradeName}*\n\n` +
    `*Instalação:* ${facility.toUpperCase()}\n` +
    `*Serviço:* ${title}\n` +
    `*Prazo Estimado:* ${days}\n\n` +
    `Gostaria de uma proposta formal de orçamento técnico.`;
  window.open(`https://wa.me/${currentCompany.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
}

function applySimulationToForm(title, days, facility) {
  closeModal('estimatorModalOverlay');
  const serviceInput = document.getElementById('serviceType');
  const descInput = document.getElementById('description');

  if (serviceInput) {
    if (title.includes('Subestação')) serviceInput.value = 'Subestações e Cabines Primárias';
    else if (title.includes('QGBT')) serviceInput.value = 'Instalações e Obras Industriais (QGBT)';
    else if (title.includes('SPDA')) serviceInput.value = 'Laudos Técnicos e Termografia (SPDA)';
    else if (title.includes('NR-10')) serviceInput.value = 'Adequação NR-10 e Prontuário Elétrico';
    else if (title.includes('Capacitores')) serviceInput.value = 'Eficiência Energética e Banco de Capacitores';
    else serviceInput.value = 'Outro / Múltiplos Serviços';
  }

  if (descInput) {
    descInput.value = `[SIMULAÇÃO DE ESCOPO]\nTipo de Empreendimento: ${facility.toUpperCase()}\nServiço: ${title}\nPrazo Estimado: ${days}\nSolicito contato para vistoria técnica e alinhamento de proposta.`;
  }

  const el = document.getElementById('contato');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// 6. Formulário de Contato e Disparo Estático por E-mail (mailto) e WhatsApp
let lastGeneratedProposalText = '';

function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('fullName')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const phone = document.getElementById('phone')?.value.trim();
  const company = document.getElementById('companyName')?.value.trim();
  const serviceType = document.getElementById('serviceType')?.value || 'Não informado';
  const urgency = document.getElementById('urgency')?.value || 'Normal';
  const description = document.getElementById('description')?.value.trim() || 'Solicitação direta de contato técnico para vistoria.';

  if (!name || !email || !phone) {
    alert('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Telefone).');
    return;
  }

  const protocol = `OS-ENG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const destinationEmail = currentCompany.email || 'paulo@pm7engenharia.com.br';
  const engineerName = currentCompany.responsibleEngineer || 'Eng. Paulo Macedo Silva';
  const currentDate = new Date().toLocaleString('pt-BR');

  // Assunto estático estruturado
  const emailSubject = `[PROPOSTA TÉCNICA] ${company ? company + ' - ' : ''}${name} (${protocol})`;

  // Corpo estático do e-mail com todos os dados da proposta
  const emailBody = 
`À Diretoria Técnica - ${currentCompany.tradeName}
A/C: ${engineerName} (${destinationEmail})

==================================================
SOLICITAÇÃO DE PROPOSTA TÉCNICA
==================================================
Protocolo: ${protocol}
Data do Registro: ${currentDate}

DADOS DO SOLICITANTE:
• Nome: ${name}
• Empresa / Obra: ${company || 'Não informada (Pessoa Física / Empreendimento)'}
• Telefone / WhatsApp: ${phone}
• E-mail para Retorno: ${email}

ESCOPO DA ENGENHARIA:
• Tipo de Serviço: ${serviceType}
• Nível de Urgência: ${urgency.toUpperCase()}

DESCRIÇÃO TÉCNICA DA DEMANDA:
${description}

==================================================
Demanda originada através do portal: ${currentCompany.website || 'www.pm7engenharia.com.br'}`;

  lastGeneratedProposalText = emailBody;

  // Link estático nativo de mailto com assunto e corpo codificados
  const mailtoUrl = `mailto:${encodeURIComponent(destinationEmail)}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  // Backup opcional no localStorage
  try {
    const stored = JSON.parse(localStorage.getItem('pm7_engineering_leads') || '[]');
    stored.unshift({
      protocol,
      name,
      company,
      email,
      phone,
      serviceType,
      urgency,
      description,
      destinationEmail,
      date: currentDate
    });
    localStorage.setItem('pm7_engineering_leads', JSON.stringify(stored));
  } catch (err) {
    console.error(err);
  }

  // Atualiza e exibe tela de sucesso
  const formElement = document.getElementById('quoteForm');
  const successBox = document.getElementById('submissionSuccessBox');
  const protocolDisplay = document.getElementById('protocolDisplay');
  const emailMailtoBtn = document.getElementById('emailMailtoBtn');
  const waLeadBtn = document.getElementById('waForwardLeadBtn');

  if (formElement) formElement.style.display = 'none';
  if (successBox) successBox.classList.add('active');
  if (protocolDisplay) protocolDisplay.textContent = protocol;

  // Configura botão de Mailto estático direto
  if (emailMailtoBtn) {
    emailMailtoBtn.setAttribute('href', mailtoUrl);
  }

  // Configura botão de WhatsApp direto
  if (waLeadBtn) {
    const waText = `*SOLICITAÇÃO DE PROPOSTA TÉCNICA - ${currentCompany.tradeName}*\n\n` +
      `*Protocolo:* ${protocol}\n` +
      `*A/C:* ${engineerName}\n` +
      `*Solicitante:* ${name}\n` +
      `*Empresa:* ${company || 'Não informada'}\n` +
      `*Telefone:* ${phone}\n` +
      `*E-mail:* ${email}\n` +
      `*Serviço:* ${serviceType}\n` +
      `*Urgência:* ${urgency?.toUpperCase()}\n\n` +
      `*Descrição:* ${description}`;

    waLeadBtn.onclick = () => {
      window.open(`https://wa.me/${currentCompany.whatsapp}?text=${encodeURIComponent(waText)}`, '_blank');
    };
  }

  // Aciona automaticamente o mailto nativo
  window.location.href = mailtoUrl;
}

// Função para copiar o texto pronto da proposta para a área de transferência (para quem usa Webmail Gmail/Outlook)
function copyProposalToClipboard() {
  if (!lastGeneratedProposalText) return;

  navigator.clipboard.writeText(lastGeneratedProposalText).then(() => {
    const btnText = document.getElementById('copyBtnText');
    if (btnText) {
      const old = btnText.textContent;
      btnText.textContent = '✔ Texto Copiado!';
      btnText.style.color = '#10b981';
      setTimeout(() => {
        btnText.textContent = old;
        btnText.style.color = '';
      }, 2500);
    }
  }).catch(() => {
    alert('Texto da proposta pronto. Selecione e copie manualmente.');
  });
}

function resetQuoteForm() {
  const formElement = document.getElementById('quoteForm');
  const successBox = document.getElementById('submissionSuccessBox');
  if (formElement) {
    formElement.reset();
    formElement.style.display = 'block';
  }
  if (successBox) {
    successBox.classList.remove('active');
  }
}

// 7. Funções Genéricas de Modal e Navegação
function closeModal(overlayId) {
  const modal = document.getElementById(overlayId);
  if (modal) modal.classList.remove('active');
}

function toggleMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.toggle('active');
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobileDrawer');
  if (drawer) drawer.classList.remove('active');
}

function toggleDeliverables(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('active');
}

function selectServiceForQuote(serviceName) {
  const serviceInput = document.getElementById('serviceType');
  if (serviceInput) serviceInput.value = serviceName;
  const el = document.getElementById('contato');
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// Inicialização após carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
  applyCompanyToDOM();
  renderProjects('todos');

  // Filtros de Projetos
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.getAttribute('data-cat') || 'todos';
      renderProjects(cat);
    });
  });

  // Formulário de Contato
  const form = document.getElementById('quoteForm');
  if (form) form.addEventListener('submit', handleContactSubmit);

  // Fechar modais ao clicar no backdrop
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        overlay.classList.remove('active');
      }
    });
  });
});
