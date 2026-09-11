import React, { useState } from 'react';
import { Briefcase, MapPin, Gauge, ExternalLink } from 'lucide-react';
import { projectList } from '../data/companyData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

interface ProjectsSectionProps {
  onRequestSimilarProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onRequestSimilarProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos os Projetos' },
    { id: 'subestacoes', label: 'Subestações & MT' },
    { id: 'instalacoes', label: 'Instalações & QGBT' },
    { id: 'laudos', label: 'Laudos & SPDA' },
    { id: 'projetos', label: 'Projetos Executivos' },
  ];

  const filteredProjects = selectedCategory === 'todos'
    ? projectList
    : projectList.filter(p => p.category === selectedCategory);

  return (
    <section id="obras" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-amber-600" />
            Portfólio & Obras Realizadas
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Casos de Engenharia Executados com Excelência
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conheça algumas das obras e intervenções de média e baixa tensão entregues em indústrias,
            centros de distribuição e empreendimentos comerciais de grande porte.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Image with Badges */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md shadow-sm">
                    {project.clientSector}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-200">
                  <span className="flex items-center gap-1 bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-xs">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 bg-slate-950/70 px-2 py-0.5 rounded backdrop-blur-xs font-mono font-medium text-amber-300">
                    <Gauge className="w-3 h-3 text-amber-400" />
                    {project.capacity.split('/')[0]}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Standards Badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.standards.slice(0, 2).map((std, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200"
                      >
                        {std}
                      </span>
                    ))}
                    {project.standards.length > 2 && (
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                        +{project.standards.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View Details Action Button */}
                  <button
                    onClick={() => setActiveProject(project)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-amber-400 hover:text-slate-950 transition-colors flex items-center justify-center gap-1.5 border border-slate-200 cursor-pointer"
                  >
                    <span>Ver Ficha Técnica Completa</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal when project is selected */}
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
          onRequestSimilar={onRequestSimilarProject}
        />

      </div>
    </section>
  );
};
