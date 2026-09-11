import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, PhoneCall, Zap, Activity, HardHat, FileCheck2 } from 'lucide-react';
import { CompanyConfig } from '../types';

interface HeroProps {
  company: CompanyConfig;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ company, onOpenEstimator }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    const el = document.getElementById('obras');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-slate-900 text-white overflow-hidden pt-8 pb-16 lg:py-24 border-b border-slate-800">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>
      
      {/* Subtle Glows */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Regulatory Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs font-semibold text-amber-400">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>Engenharia Especializada em Média & Baixa Tensão</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">ART Inclusa</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Engenharia Elétrica de Alta Precisão para{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
                Projetos, Obras e Laudos Técnicos
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Desenvolvemos subestações de energia, quadros QGBT, laudos periciais de SPDA e conformidade NR-10.
              Segurança operacional, homologação ágil junto às concessionárias e zero paradas não programadas para sua indústria ou comércio.
            </p>

            {/* Bullets of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-sm text-slate-300">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Projetos 100% aprovados em concessionárias</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Emissão rigorosa de ART pelo CREA</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Laudos com instrumentos Fluke calibrados RBC</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Equipe própria treinada em NR-10 e NR-35</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Solicitar Proposta Técnica</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <a
                href={`https://wa.me/${company.whatsapp}?text=Ol%C3%A1%2C+preciso+de+um+or%C3%A7amento+t%C3%A9cnico+de+engenharia+el%C3%A9trica.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3.5 rounded-lg text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                <PhoneCall className="w-4 h-4 mr-2 text-emerald-400" />
                <span>Falar no WhatsApp</span>
              </a>

              <button
                onClick={onOpenEstimator}
                className="inline-flex items-center justify-center px-4 py-3.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4 mr-1.5 text-amber-400" />
                <span>Simular Pré-Escopo</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Engineering Blueprint Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-slate-950/80 border border-slate-800 p-6 shadow-2xl backdrop-blur-sm">
              
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center space-x-2.5">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white">Central de Engenharia Elétrica</h2>
                    <p className="text-xs text-slate-400">Status Operacional & Conformidade</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-xs text-emerald-400 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Plantão Ativo
                </div>
              </div>

              {/* Status Modules */}
              <div className="space-y-3 text-xs">
                
                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="w-5 h-5 text-amber-400" />
                    <div>
                      <p className="text-slate-200 font-semibold">Registro no CREA Ativo</p>
                      <p className="text-slate-400 text-[11px]">{company.crea}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">Regular</span>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <HardHat className="w-5 h-5 text-blue-400" />
                    <div>
                      <p className="text-slate-200 font-semibold">Corpo de Engenharia Próprio</p>
                      <p className="text-slate-400 text-[11px]">Especialistas em MT (13,8 a 34,5 kV)</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded">Sênior</span>
                </div>

                <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-slate-200 font-semibold">Auditoria & Termografia</p>
                      <p className="text-slate-400 text-[11px]">Câmeras termográficas Fluke com calibração RBC</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">Calibrado</span>
                </div>

              </div>

              {/* Fast Emergency Line */}
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Atendimento a paradas industriais:</span>
                <span className="font-semibold text-amber-400">{company.phone}</span>
              </div>

              {/* View Works Button */}
              <button
                onClick={scrollToProjects}
                className="mt-3 w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition-colors border border-slate-700 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Explorar Portfólio de Obras Realizadas</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Numeric Indicators Bar */}
        <div className="mt-14 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">+12 Anos</div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Experiência em Engenharia</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">+380 Obras</div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Instalações e Projetos Entregues</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">100% ART</div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Responsabilidade Técnica CREA</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">0 Acidentes</div>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">Compliance Estrito NR-10/NR-35</p>
          </div>
        </div>

        {/* Concessionaires & Standards Strip */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <span className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
            Homologação & Normas Regulatórias:
          </span>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-slate-300">
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60">ENEL</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60">CPFL</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60">EDP</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60">CEMIG</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60">LIGHT</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60 text-amber-400">NBR 5410</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60 text-amber-400">NBR 14039</span>
            <span className="bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700/60 text-amber-400">NBR 5419 (SPDA)</span>
          </div>
        </div>

      </div>
    </section>
  );
};
