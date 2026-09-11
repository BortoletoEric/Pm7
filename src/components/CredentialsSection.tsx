import React from 'react';
import { ShieldCheck, Award, FileSpreadsheet, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';
import { technicalCredentials } from '../data/companyData';
import { TechnicalCredential } from '../types';

export const CredentialsSection: React.FC = () => {
  return (
    <section id="credenciais" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Rigor Normativo & Responsabilidade Civil
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Credenciais, Normas e Conformidade Técnica
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Instalações elétricas industriais exigem conformidade irrestrita às normas vigentes da ABNT e do Ministério do Trabalho. 
            Garantimos blindagem jurídica, segurança patrimonial e cobertura securitária.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalCredentials.map((cred: TechnicalCredential) => (
            <div
              key={cred.id}
              className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/70 hover:border-amber-500/50 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded border border-amber-400/20">
                    {cred.code}
                  </span>
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">
                    {cred.category === 'seguranca' ? 'Segurança Ocupacional' : cred.category === 'norma_tecnica' ? 'Norma ABNT' : 'Órgão Regulador'}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cred.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {cred.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-700/60 flex items-center gap-2 text-xs text-amber-300/90 font-medium">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{cred.validityDetails}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Why ART and Engineering Matter Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Por que a ART do CREA é indispensável para sua empresa?</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-white">
                Proteção contra autuações trabalhistas, recusa de seguradoras e risco de incêndio
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                A Anotação de Responsabilidade Técnica (ART) vincula formalmente o Engenheiro Eletricista à obra.
                Sem ela, sua empresa fica exposta à desclassificação de apólices de seguro patrimonial em caso de sinistro elétrico e autuações severas dos auditores fiscais da NR-10.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Cobertura plena em seguradoras industriais</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/60 p-2.5 rounded-lg border border-slate-700">
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Laudos aceitos pelo Corpo de Bombeiros (AVCB)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-slate-800/80 p-5 rounded-xl border border-slate-700 text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h5 className="text-sm font-bold text-white">Precisa regularizar seu Prontuário ou Laudo?</h5>
              <p className="text-xs text-slate-400">
                Realizamos vistoria diagnóstica imediata em sua planta e emitimos relatório pericial com ART.
              </p>
              <a
                href="#contato"
                className="inline-block w-full py-2.5 px-4 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                Solicitar Vistoria Técnica
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
