export function createProjectCard(project) {
  return `
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
          <button class="btn btn-outline-light btn-block btn-sm btn-open-project" data-id="${project.id}">
            <span>Ver Ficha Técnica Completa</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </button>
        </div>
      </div>
    </div>
  `;
}
