import { COMPANY_CONFIG } from '../config/company.js';

export function generateProposalText(data) {
  const { protocol, name, company, phone, email, serviceType, urgency, description, date } = data;
  
  const emailSubject = `[PROPOSTA TÉCNICA] ${company ? company + ' - ' : ''}${name} (${protocol})`;
  
  const emailBody = `À Diretoria Técnica - ${COMPANY_CONFIG.tradeName}
A/C: ${COMPANY_CONFIG.responsibleEngineer} (${COMPANY_CONFIG.email})

==================================================
SOLICITAÇÃO DE PROPOSTA TÉCNICA
==================================================
Protocolo: ${protocol}
Data do Registro: ${date}

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
Demanda originada através do portal: ${COMPANY_CONFIG.website}`;

  const waText = `*SOLICITAÇÃO DE PROPOSTA TÉCNICA - ${COMPANY_CONFIG.tradeName}*

` +
    `*Protocolo:* ${protocol}
` +
    `*A/C:* ${COMPANY_CONFIG.responsibleEngineer}
` +
    `*Solicitante:* ${name}
` +
    `*Empresa:* ${company || 'Não informada'}
` +
    `*Telefone:* ${phone}
` +
    `*E-mail:* ${email}
` +
    `*Serviço:* ${serviceType}
` +
    `*Urgência:* ${urgency?.toUpperCase()}

` +
    `*Descrição:* ${description}`;

  return { emailSubject, emailBody, waText };
}
