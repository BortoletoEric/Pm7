import { ServiceItem, ProjectItem, TechnicalCredential, ClientTestimonial, CompanyConfig } from '../types';

export const initialCompanyConfig: CompanyConfig = {
  name: 'Pm7 Engenharia',
  tradeName: 'Pm7 Engenharia',
  responsibleEngineer: 'Eng. Paulo Macedo Silva',
  crea: 'CREA-SP com ART / Visto Nacional',
  phone: '55 11 92019-0370',
  whatsapp: '11920190370',
  email: 'paulo@pm7engenharia.com.br',
  website: 'www.pm7engenharia.com.br',
  address: 'São Paulo - SP',
  cityState: 'São Paulo - SP',
  emergencyPhone: '55 11 92019-0370 (Eng. Paulo Macedo)',
};

export const serviceList: ServiceItem[] = [
  {
    id: 'projetos-eletricos',
    title: 'Projetos Elétricos Executivos',
    shortDesc: 'Dimensionamento completo em Média e Baixa Tensão para indústrias, galpões e edifícios comerciais com emissão de ART.',
    fullDesc: 'Desenvolvimento detalhado de plantas, memoriais de cálculo de curto-circuito e queda de tensão, diagramas unifilares/multifilares, especificações de condutores e quadros elétricos em total conformidade técnica.',
    icon: 'Cpu',
    tag: 'Engenharia de Base',
    normas: ['NBR 5410', 'NBR 14039', 'Padrão Concessionárias'],
    deliverables: [
      'Diagramas unifilares e multifilares detalhados',
      'Memorial de cálculo de cargas e fluxo de potência',
      'Estudo de seletividade e coordenação da proteção',
      'Lista completa de materiais e memoriais descritivos',
      'Emissão de ART de elaboração e projeto'
    ]
  },
  {
    id: 'subestacoes-cabines',
    title: 'Subestações e Cabines Primárias',
    shortDesc: 'Implantação, reforma, manutenção preventiva/corretiva e comissionamento de cabines de 13,8 kV a 34,5 kV.',
    fullDesc: 'Atendimento integral a sistemas de média tensão: instalação de transformadores a óleo ou a seco, disjuntores a vácuo/SF6, parametrização de relés microprocessados, ensaios de rigidez dielétrica e laudo de comissionamento.',
    icon: 'Zap',
    tag: 'Média Tensão',
    normas: ['NBR 14039', 'NR-10', 'Homologação Enel/CPFL/EDP'],
    deliverables: [
      'Projetos de entrada de energia e aprovação na concessionária',
      'Ensaios de isolamento (Megômetro, Hipot, TTR)',
      'Manutenção preventiva com limpeza, reaperto e testes de relés',
      'Troca de óleo mineral isolante e ensaios físico-químicos',
      'Plano de emergência e contingência operacional'
    ]
  },
  {
    id: 'instalacoes-obras',
    title: 'Instalações e Obras Industriais',
    shortDesc: 'Montagem eletromecânica completa: infraestrutura, leitos, eletrocalhas, barramentos blindados (busway) e QGBTs.',
    fullDesc: 'Execução de obras elétricas de alta complexidade com equipe técnica especializada em ambiente industrial e logístico, garantindo cronogramas rigorosos, zero paradas indesejadas e compliance de segurança.',
    icon: 'Hammer',
    tag: 'Execução e Obras',
    normas: ['NBR 5410', 'NR-10', 'NR-35', 'NR-12'],
    deliverables: [
      'Montagem e lançamento de cabos de força e comando',
      'Instalação de barramento blindado (Busway) de alta capacidade',
      'Montagem e teste de QGBTs, CCMs e quadros de automação',
      'Ensaios de continuidade, aterramento e isolação',
      'As-built executivo final e entrega técnica'
    ]
  },
  {
    id: 'laudos-spda-termografia',
    title: 'Laudos Técnicos e Termografia',
    shortDesc: 'Inspeções com câmera termográfica infravermelha calibrada, laudos de SPDA (Para-raios) e auditoria técnica.',
    fullDesc: 'Diagnósticos preventivos avançados sem necessidade de desenergização. Identificação precoce de pontos quentes (hot-spots), desbalanceamento de fases e medição ôhmica de malha de aterramento com emissão de parecer e ART.',
    icon: 'ShieldCheck',
    tag: 'Conformidade & Perícia',
    normas: ['NBR 5419', 'NBR 5410', 'NR-10'],
    deliverables: [
      'Relatório termográfico com classificação de severidade de anomalias',
      'Laudo de SPDA conforme NBR 5419 (Partes 1 a 4) com fotos e medições',
      'Medição de resistência de aterramento pelo método de queda de potencial',
      'Plano de ação corretivo com prazos e prioridades de intervenção',
      'ART emitida por Engenheiro Eletricista responsável'
    ]
  },
  {
    id: 'adequacao-nr10-prontuario',
    title: 'Adequação NR-10 e Prontuário Elétrico',
    shortDesc: 'Auditoria de segurança em instalações elétricas, elaboração e atualização contínua do Prontuário de Instalações (PIE).',
    fullDesc: 'Estruturação documental e técnica exigida pelo Ministério do Trabalho para resguardar a empresa e trabalhadores contra riscos de choque elétrico e arco elétrico. Cálculo de energia incidente (Arc Flash) e procedimentos de bloqueio (LOTO).',
    icon: 'FileText',
    tag: 'Segurança do Trabalho',
    normas: ['NR-10', 'NR-12', 'IEEE 1584'],
    deliverables: [
      'Composição do Prontuário das Instalações Elétricas (PIE)',
      'Estudo de Arc Flash (energia incidente) e especificação de EPIs',
      'Diagramas unifilares atualizados das instalações',
      'Procedimentos de trabalho seguro e Instruções Técnicas (ITs)',
      'Treinamentos técnicos in-company com certificação'
    ]
  },
  {
    id: 'eficiencia-mercado-livre',
    title: 'Eficiência Energética & Mercado Livre',
    shortDesc: 'Correção de fator de potência (bancos de capacitores), mitigação de harmônicos e consultoria para Mercado Livre.',
    fullDesc: 'Eliminação de multas de energia reativa na conta de luz, análise de qualidade da energia elétrica com analisadores de grandezas em tempo real, dimensionamento de filtros de harmônicos e suporte na transição para o Mercado Livre (ACL).',
    icon: 'TrendingUp',
    tag: 'Redução de Custos',
    normas: ['PRODIST Módulo 8', 'IEEE 519'],
    deliverables: [
      'Análise de grandezas elétricas com registrador classe A instalado',
      'Dimensionamento e instalação de Bancos de Capacitores automáticos',
      'Estudo de viabilidade e economia na migração para o Mercado Livre',
      'Projetos de automação de iluminação inteligente e climatização',
      'Relatório de payback e redução garantida da fatura elétrica'
    ]
  }
];

export const projectList: ProjectItem[] = [
  {
    id: 'subestacao-centro-logistico-cajamar',
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
    id: 'qgbt-fabrica-farmaceutica',
    title: 'Montagem de QGBT 4.000A com Barramento Blindado',
    category: 'instalacoes',
    clientSector: 'Indústria Farmacêutica',
    location: 'Paulínia, SP',
    capacity: 'QGBT 4.000A com Forma Construtiva 4b / 380V',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    summary: 'Substituição planejada de quadro geral de baixa tensão sem interrupção da linha crítica de produção de medicamentos.',
    challenge: 'Espaço confinado na sala elétrica existente e janela máxima de desligamento de 14 horas durante o feriado nacional.',
    solution: 'Pré-fabricação milimétrica de barramentos de cobre eletrolítico e simulação 3D das conexões antes da parada programada, concluída 2 horas antes do limite.',
    standards: ['NBR IEC 61439-1/2', 'NBR 5410', 'NR-10'],
    scope: [
      'Quadro Geral de Baixa Tensão com disjuntores caixa aberta motorizados',
      'Intertravamento elétrico e mecânico entre rede comercial e gerador a diesel',
      'Instalação de 120 metros de barramento blindado (Busway) de alumínio estanhado',
      'Sistema integrado de medição de energia setorizada com protocolo Modbus/TCP',
      'Laudo técnico de entrega e termo de garantia estendida'
    ]
  },
  {
    id: 'laudo-spda-parque-industrial',
    title: 'Laudo Pericial de SPDA e Termografia Global',
    category: 'laudos',
    clientSector: 'Complexo Metalmecânico',
    location: 'Sorocaba, SP',
    capacity: 'Área coberta de 42.000 m² / 14 galpões',
    imageUrl: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80',
    summary: 'Inspeção pericial completa de proteção contra descargas atmosféricas conforme NBR 5419:2015 e termografia infravermelha em 68 quadros.',
    challenge: 'Complexo fabril antigo com histórico de queima de placas eletrônicas de tornos CNC durante tempestades de verão.',
    solution: 'Diagnóstico identificou laços indutivos incorretos no SPDA e 11 conexões com aquecimento crítico. Foram instalados DPS Classe I e II coordenados e corrigidas as malhas.',
    standards: ['NBR 5419:2015 Partes 1 a 4', 'NBR 5410', 'NR-10'],
    scope: [
      'Medição de continuidade de descidas e anéis de equalização de potencial',
      'Termografia em 68 painéis elétricos com câmera Fluke calibrada RBC',
      'Revisão e especificação dos Dispositivos Protetores de Surtos (DPS)',
      'Relatório fotográfico ilustrado com mapa de calor e recomendações imediatas',
      'Apresentação executiva para a diretoria industrial e seguradora'
    ]
  },
  {
    id: 'projeto-expansao-datacenter',
    title: 'Projeto Elétrico Executivo para Edifício Corporativo & TI',
    category: 'projetos',
    clientSector: 'Tecnologia e Serviços Financeiros',
    location: 'Barueri / Alphaville, SP',
    capacity: 'Alimentação dupla com redundância Tier III (1.200 kVA)',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
    summary: 'Engenharia de detalhamento para infraestrutura de energia ininterrupta com no-breaks modulares e geradores automáticos.',
    challenge: 'Necessidade de disponibilidade 99,982% sem ponto único de falha (Single Point of Failure - SPOF).',
    solution: 'Topologia em anel com chaves estáticas STS (Static Transfer Switch), dois bancos de baterias independentes e controle de seletividade lógica.',
    standards: ['NBR 5410', 'TIA-942 Tier III', 'NBR 14039'],
    scope: [
      'Projeto elétrico executivo com modelagem BIM (LOD 350)',
      'Estudo de coordenação e seletividade da proteção em software elétrico',
      'Dimensionamento de sistema UPS paralelo redundante de 400 kVA',
      'Quadro de Transferência Automática (QTA) microprocessado',
      'Acompanhamento de homologação perante a concessionária de energia'
    ]
  },
  {
    id: 'correcao-fator-potencia-quimica',
    title: 'Banco de Capacitores Automático com Filtro de Harmônicos',
    category: 'instalacoes',
    clientSector: 'Indústria Química',
    location: 'Campinas, SP',
    capacity: '850 kvar com reatores anti-ressonância (detuned 7%)',
    imageUrl: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80',
    summary: 'Solução definitiva para eliminação de R$ 38.000/mês em multas de energia reativa excedente na conta de energia.',
    challenge: 'Presença massiva de inversores de frequência na linha de mistura química provocando distorção harmônica THD(V) > 8% e queima de capacitores convencionais.',
    solution: 'Instalação de banco com contactores especiais de amortecimento, reatores anti-ressonância dessintonizados em 189 Hz e controlador microprocessado de 12 estágios.',
    standards: ['PRODIST Módulo 8', 'IEEE 519', 'NBR 5410'],
    scope: [
      'Monitoramento prévio de 7 dias com analisador de energia Classe A',
      'Fornecimento e montagem de cubículo metálico ventilado IP-54',
      'Filtro de rejeição harmônica e proteção por fusíveis NH retardados',
      'Correção do FP de 0,78 para 0,96 garantido em todos os postos horários',
      'Retorno sobre o investimento (Payback) alcançado em apenas 4,2 meses'
    ]
  },
  {
    id: 'prontuario-eletrico-frigorifico',
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

export const technicalCredentials: TechnicalCredential[] = [
  {
    id: 'crea-art',
    code: 'CREA & ART',
    title: 'Registro Corporativo e Anotação de Responsabilidade Técnica',
    category: 'orgao',
    description: 'Empresa e equipe técnica devidamente registradas no Conselho Regional de Engenharia. Toda obra e projeto conta com emissão imediata de ART.',
    validityDetails: 'Registro Ativo e Regularizado no CREA com Visto Nacional'
  },
  {
    id: 'nr-10',
    code: 'NR-10',
    title: 'Segurança em Instalações e Serviços em Eletricidade',
    category: 'seguranca',
    description: 'Equipe 100% capacitada no treinamento básico e complementar (SEP - Sistema Elétrico de Potência), garantindo intervenções seguras e sem risco.',
    validityDetails: 'Certificação Bienal Obrigatória Atualizada'
  },
  {
    id: 'nr-35',
    code: 'NR-35',
    title: 'Trabalho em Altura em Montagens Industriais',
    category: 'seguranca',
    description: 'Atestados de saúde ocupacional (ASO) específicos e certificação para intervenções em bandejamentos aéreos, postes e estruturas elevadas.',
    validityDetails: 'Conformidade integral com EPIs e Linhas de Vida'
  },
  {
    id: 'nbr-5410',
    code: 'NBR 5410',
    title: 'Instalações Elétricas em Baixa Tensão',
    category: 'norma_tecnica',
    description: 'Norma-mãe brasileira para dimensionamento de cabos, conduítes, quadros elétricos, proteções diferenciais-residuais (DR) e aterramento.',
    validityDetails: 'Critérios estritos de cálculo de queda de tensão e ampacidade'
  },
  {
    id: 'nbr-14039',
    code: 'NBR 14039',
    title: 'Instalações Elétricas de Média Tensão (1,0 kV a 36,2 kV)',
    category: 'norma_tecnica',
    description: 'Diretrizes oficiais para subestações consumidoras, chaves seccionadoras, disjuntores de MT, aterramento de cercas e isolação dielétrica.',
    validityDetails: 'Homologação perante distribuidoras de energia'
  },
  {
    id: 'nbr-5419',
    code: 'NBR 5419',
    title: 'Proteção contra Descargas Atmosféricas (SPDA)',
    category: 'norma_tecnica',
    description: 'Gerenciamento de risco, proteção física contra raios (método Franklin e Gaiola de Faraday) e medidas de proteção contra surtos elétricos (MPS).',
    validityDetails: 'Partes 1, 2, 3 e 4 da revisão em vigor'
  }
];

export const clientLogos = [
  { name: 'Multinacional Farmacêutica', segment: 'Farmacêutico' },
  { name: 'Operador Logístico Brasil', segment: 'Logística AAA' },
  { name: 'Indústria Metalúrgica do Aço', segment: 'Siderurgia' },
  { name: 'Rede Atacadista & Varejo', segment: 'Varejo & Comercial' },
  { name: 'Usina de Alimentos & Bebidas', segment: 'Alimentício' },
  { name: 'Edifícios Corporativos Triple A', segment: 'Facilities' },
];

export const clientTestimonials: ClientTestimonial[] = [
  {
    id: '1',
    clientName: 'Carlos Eduardo Silveira',
    role: 'Gerente Geral de Engenharia & Manutenção',
    company: 'Complexo Logístico Integração',
    sector: 'Logística',
    comment: 'A Pm7 Engenharia executou a cabine primária de 3.000 kVA dentro do prazo mais agressivo que já enfrentamos. A aprovação na Enel foi sem nenhuma ressalva e o comissionamento técnico do Eng. Paulo Macedo Silva foi exemplar.',
    rating: 5
  },
  {
    id: '2',
    clientName: 'Engª Mariana Freitas',
    role: 'Coordenadora de Utilidades Industriais',
    company: 'FarmaBio Soluções',
    sector: 'Farmacêutico',
    comment: 'A substituição do QGBT de 4.000A durante o shutdown da fábrica foi cirúrgica. Ter engenheiros presentes em tempo real e testes documentados nos deu total segurança operacional.',
    rating: 5
  },
  {
    id: '3',
    clientName: 'Roberto Albuquerque',
    role: 'Diretor de Operações',
    company: 'Aliança Metalúrgica',
    sector: 'Indústria Pesada',
    comment: 'O laudo de SPDA e a adequação do banco de capacitores não apenas eliminaram a multa de reativos na conta de energia em menos de 5 meses, como zeraram as queimas de equipamentos sensíveis.',
    rating: 5
  }
];
