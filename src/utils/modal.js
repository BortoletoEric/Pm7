export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.add('active');
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('active');
}

export function initModals() {
  // Delegação de eventos global para fechamento de modais
  document.addEventListener('click', (e) => {
    // 1. Clique no botão de fechar (X ou "Fechar")
    const closeBtn = e.target.closest('.btn-fechar-modal');
    if (closeBtn) {
      const target = closeBtn.getAttribute('data-target');
      if (target) closeModal(target);
    }
    
    // 2. Clique no fundo escuro (backdrop)
    if (e.target.classList.contains('modal-overlay')) {
      e.target.classList.remove('active');
    }
  });
}
