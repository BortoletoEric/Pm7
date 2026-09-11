import React from 'react';
import { Building2, Award, Users, CheckCircle, Cpu, FileCheck } from 'lucide-react';
import { CompanyConfig } from '../types';

interface AboutSectionProps {
  company: CompanyConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ company }) => {
  return (
    <section id="empresa" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: About Text & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              Sobre a Engenharia
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Solidez Técnica e Compromisso com a Continuidade Operacional
            </h2>

            <p className="text-base text-slate-700 leading-relaxed">
              Fundada com o propósito de suprir a carência do mercado industrial por engenharia elétrica de alto rigor, a{' '}
              <strong className="text-slate-950 font-bold">{company.tradeName}</strong> atua desde a concepção de projetos executivos
              até a implantação física de subestações de média tensão e montagens eletromecânicas pesadas.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Nosso corpo técnico é composto por Engenheiros Eletricistas e técnicos habilitados com registro ativo no CREA.
              Cada instalação é tratada com precisão cirúrgica, respeitando janelas estreitas de parada de produção e garantindo conformidade
              irrestrita com a ABNT e as exigências das concessionárias de energia.
            </p>

            {/* Key Differentiators Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Registro & ART Direta</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Registro corporativo regularizado sob {company.crea}, garantindo amparo legal a toda a infraestrutura contratada.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 border border-blue-200/60">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Instrumentação Calibrada RBC</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Câmeras termográficas, terrômetros de quatro hastes e micro-ohmímetros calibrados pela Rede Brasileira de Calibração.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200/60">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">Equipe Própria Certificada</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Zero terceirização informal: profissionais com treinamento atualizado em NR-10 (Básico e SEP) e NR-35 (Trabalho em Altura).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-purple-50 text-purple-600 border border-purple-200/60">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">As-Built e Entrega Técnica</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Documentação cadastral completa entregue em CAD e PDF, facilitando manutenções futuras e auditorias internas.
                </p>
              </div>

            </div>
          </div>

          {/* Right: Engineering Process Methodology */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                Metodologia Executiva Padronizada
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Ciclo de vida estruturado para garantir zero atrasos e previsibilidade total de custos:
              </p>

              <div className="space-y-4">
                
                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Vistoria de Campo & Diagnóstico</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Levantamento de cargas, medição geométrica e análise de viabilidade perante a concessionária de energia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Engenharia de Detalhamento</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Cálculos de curto-circuito, dimensionamento de cabos, diagramas unifilares e memoriais descritivos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Montagem Eletromecânica</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Instalação de barramentos, transformadores, leitos e passagem de cabos com controle diário de obra (RDO).
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    4
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Comissionamento & Energização</h4>
                    <p className="text-xs text-slate-400 leading-relaxed mt-0.5">
                      Ensaios de rigidez dielétrica, parametrização de relés, emissão de ART conclusiva e acompanhamento da ligação.
                    </p>
                  </div>
                </div>

              </div>

              {/* Safety & Compliance Bottom Note */}
              <div className="mt-6 pt-5 border-t border-slate-800 flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Supervisão direta por Engenheiro Eletricista em 100% das etapas.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
