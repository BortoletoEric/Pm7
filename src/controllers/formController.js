import { COMPANY_CONFIG } from '../config/company.js';
import { generateProposalText } from '../services/emailTemplate.js';

export function initFormController() {
  const form = document.getElementById('quoteForm');
  const successBox = document.getElementById('submissionSuccessBox');
  const protocolDisplay = document.getElementById('protocolDisplay');
  const emailMailtoBtn = document.getElementById('emailMailtoBtn');
  const waLeadBtn = document.getElementById('waForwardLeadBtn');
  const copyProposalBtn = document.getElementById('copyProposalBtn');
  const btnNovaSolicitacao = document.getElementById('btnNovaSolicitacao');
  
  let lastGeneratedProposalText = '';

  if (!form) return;

  form.addEventListener('submit', (e) => {
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
    const currentDate = new Date().toLocaleString('pt-BR');

    const formData = { protocol, name, company, phone, email, serviceType, urgency, description, date: currentDate };
    const { emailSubject, emailBody, waText } = generateProposalText(formData);
    
    lastGeneratedProposalText = emailBody;

    // Update UI
    form.style.display = 'none';
    if (successBox) successBox.classList.add('active');
    if (protocolDisplay) protocolDisplay.textContent = protocol;

    // Setup Mailto
    const mailtoUrl = `mailto:${encodeURIComponent(COMPANY_CONFIG.email)}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    if (emailMailtoBtn) {
      emailMailtoBtn.setAttribute('href', mailtoUrl);
    }

    // Setup WhatsApp
    if (waLeadBtn) {
      waLeadBtn.onclick = () => {
        window.open(`https://wa.me/${COMPANY_CONFIG.whatsapp}?text=${encodeURIComponent(waText)}`, '_blank');
      };
    }

    // Auto-trigger mailto
    window.location.href = mailtoUrl;
  });

  if (copyProposalBtn) {
    copyProposalBtn.addEventListener('click', () => {
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
    });
  }

  if (btnNovaSolicitacao) {
    btnNovaSolicitacao.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      if (successBox) successBox.classList.remove('active');
    });
  }
}

export function initServiceQuoteButtons() {
  // Lógica para os botões "Solicitar Orçamento deste Serviço" que estão espalhados pela tela
  document.addEventListener('click', (e) => {
    const quoteBtn = e.target.closest('.quote-service-btn');
    if (quoteBtn) {
      const serviceName = quoteBtn.getAttribute('data-service');
      const serviceInput = document.getElementById('serviceType');
      if (serviceInput && serviceName) {
        serviceInput.value = serviceName;
      }
      const formSection = document.getElementById('contato');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}
