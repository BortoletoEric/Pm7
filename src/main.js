import { COMPANY_CONFIG } from './config/company.js';
import { initPortfolio } from './controllers/portfolioController.js';
import { initModals } from './utils/modal.js';

// Função utilitária para aplicar os dados da empresa no DOM (em breve será movida para um utils/dom.js ou controller)
function applyCompanyToDOM(company) {
  document.querySelectorAll('[data-company-name]').forEach(el => el.textContent = company.name);
  document.querySelectorAll('[data-company-trade]').forEach(el => el.textContent = company.tradeName);
  document.querySelectorAll('[data-company-engineer]').forEach(el => el.textContent = company.responsibleEngineer);
  document.querySelectorAll('[data-company-website]').forEach(el => el.textContent = company.website);
  document.querySelectorAll('[data-company-crea]').forEach(el => el.textContent = company.crea);
  document.querySelectorAll('[data-company-phone]').forEach(el => el.textContent = company.phone);
  document.querySelectorAll('[data-company-email]').forEach(el => el.textContent = company.email);
  document.querySelectorAll('[data-company-address]').forEach(el => el.textContent = company.address);
  document.querySelectorAll('[data-company-city]').forEach(el => el.textContent = company.cityState);
  document.querySelectorAll('[data-company-emergency]').forEach(el => el.textContent = company.emergencyPhone);

  const cleanPhone = company.phone.replace(/\D/g, '');
  document.querySelectorAll('a[href^="tel:"]').forEach(el => el.setAttribute('href', `tel:${cleanPhone}`));
  document.querySelectorAll('a[href^="mailto:"]').forEach(el => el.setAttribute('href', `mailto:${company.email}`));

  const waLinks = document.querySelectorAll('.dynamic-whatsapp-link');
  waLinks.forEach(el => {
    el.setAttribute('href', `https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Olá Eng. Paulo Macedo Silva, gostaria de solicitar uma proposta técnica com a ' + company.tradeName + '.')}`);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // 1. Injeta variáveis estáticas da empresa
  applyCompanyToDOM(COMPANY_CONFIG);
  
  // 2. Inicializa utilitários globais (Modais)
  initModals();

  // 3. Inicializa Controladores de Sessão
  initPortfolio();
  
  console.log('Pm7 Engenharia - App Inicializado com Arquitetura SOLID.');
});
