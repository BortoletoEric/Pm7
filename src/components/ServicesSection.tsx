import React, { useState } from 'react';
import { 
  Zap, 
  Cpu, 
  Hammer, 
  ShieldCheck, 
  FileText, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { serviceList } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForQuote }) => {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" />;
      case 'FileText':
        return <FileText className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Zap className="w-6 h-6" />;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedServiceId(prev => (prev === id ? null : id));
  };

  return (
    <section id="servicos" className="py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-700" />
            Capacidade Técnica Integral
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Serviços Especializados em Engenharia Elétrica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Do projeto executivo à montagem e comissionamento de média tensão. Todos os serviços são executados
            com responsabilidade técnica formal e ART averbada no CREA.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service: ServiceItem) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden"
              >
                {/* Card Top */}
                <div className="p-6">
                  
                  {/* Category Tag & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center">
                      {getServiceIcon(service.icon)}
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Normas Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {service.normas.map((norma, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium font-mono text-slate-600 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded"
                      >
                        {norma}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Deliverables */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 animate-fadeIn">
                      <p className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Escopo e Entregáveis Inclusos:
                      </p>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start text-xs text-slate-600 space-x-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Bottom / Actions */}
                <div className="p-6 pt-0 border-t border-slate-100 mt-2 bg-slate-50/50 flex flex-col gap-2">
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 py-1.5 flex items-center justify-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{isExpanded ? 'Ocultar Entregáveis' : 'Ver Entregáveis e Escopo Detalhado'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
                  >
                    <span>Solicitar Orçamento deste Serviço</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Service Guarantee Notice */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">Garantia Formal de Conformidade Técnica</h4>
              <p className="text-sm text-slate-600">
                Todo serviço entregue acompanha laudo conclusivo assinado por Engenheiro Eletricista com ART emitida e garantia contratual de aprovação perante concessionárias e corpo de bombeiros.
              </p>
            </div>
          </div>
          <button
            onClick={() => onSelectServiceForQuote('Geral / Múltiplos Serviços')}
            className="whitespace-nowrap px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
          >
            Falar com Engenheiro Técnico
          </button>
        </div>

      </div>
    </section>
  );
};
