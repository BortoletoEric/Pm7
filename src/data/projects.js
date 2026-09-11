export const PROJECTS_DATA = [
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
