import React from 'react';
import { X, MapPin, Gauge, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestSimilar }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Project Image Banner */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-2xl bg-slate-900">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent"></div>
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full">
                {project.clientSector}
              </span>
              <span className="text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-400" />
                {project.location}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Capacidade Técnica</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <Gauge className="w-4 h-4 text-amber-600" />
                {project.capacity}
              </span>
            </div>
            <div>
              <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Normas Atendidas</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {project.standards.join(' • ')}
              </span>
            </div>
          </div>

          {/* Context & Challenge */}
          <div className="space-y-4 text-sm text-slate-700">
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-amber-800 mb-1">
                O Desafio da Obra
              </h4>
              <p className="bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60 text-slate-800 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-emerald-800 mb-1">
                Solução de Engenharia Executada
              </h4>
              <p className="bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-200/60 text-slate-800 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Scope of Supply */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
              Escopo Executivo do Fornecimento:
            </h4>
            <div className="space-y-2">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-start text-xs sm:text-sm text-slate-700 space-x-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Fechar Visualização
            </button>
            <button
              onClick={() => {
                onRequestSimilar(project.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Solicitar Orçamento para Projeto Similar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
