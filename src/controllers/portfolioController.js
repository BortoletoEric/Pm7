import { PROJECTS_DATA } from '../data/projects.js';
import { createProjectCard } from '../components/projectCard.js';
import { createProjectModalContent } from '../components/projectModal.js';
import { openModal, closeModal } from '../utils/modal.js';

export function initPortfolio() {
  const container = document.getElementById('projectsContainer');
  const filterButtons = document.querySelectorAll('.filter-btn');

  if (!container) return;

  // Renderiza a grid inicial com todos os projetos
  renderProjects('todos');

  // Listeners para os botões de Filtro
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.getAttribute('data-cat') || 'todos';
      renderProjects(cat);
    });
  });

  // Event Delegation para elementos dinâmicos (criados via JS)
  document.addEventListener('click', (e) => {
    // Clique em "Ver Ficha Técnica"
    const openBtn = e.target.closest('.btn-open-project');
    if (openBtn) {
      const projectId = openBtn.getAttribute('data-id');
      handleOpenProjectModal(projectId);
    }

    // Clique em "Solicitar Orçamento Similar" dentro do modal
    const similarBtn = e.target.closest('.btn-solicitar-similar');
    if (similarBtn) {
      const title = similarBtn.getAttribute('data-title');
      requestSimilarProject(title);
    }
  });

  function renderProjects(category) {
    const filtered = category === 'todos' 
      ? PROJECTS_DATA 
      : PROJECTS_DATA.filter(p => p.category === category);
  
    container.innerHTML = filtered.map(project => createProjectCard(project)).join('');
  }

  function handleOpenProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;
  
    const modalBody = document.getElementById('projectModalBody');
    const modalTitle = document.getElementById('projectModalTitle');
  
    modalTitle.textContent = project.title;
    modalBody.innerHTML = createProjectModalContent(project);
  
    openModal('projectModalOverlay');
  }

  function requestSimilarProject(projectTitle) {
    closeModal('projectModalOverlay');
    
    const serviceInput = document.getElementById('serviceType');
    const descInput = document.getElementById('description');
    
    if (serviceInput) serviceInput.value = 'Outro / Múltiplos Serviços';
    if (descInput) descInput.value = `Gostaria de uma proposta técnica similar à obra: ${projectTitle}.`;
    
    const contatoSection = document.getElementById('contato');
    if (contatoSection) contatoSection.scrollIntoView({ behavior: 'smooth' });
  }
}
