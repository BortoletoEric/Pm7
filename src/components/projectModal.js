export function createProjectModalContent(project) {
  return `
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
      <button class="btn btn-outline-light btn-fechar-modal" data-target="projectModalOverlay">Fechar</button>
      <button class="btn btn-primary btn-solicitar-similar" data-title="${project.title}">
        Solicitar Orçamento Similar
      </button>
    </div>
  `;
}
