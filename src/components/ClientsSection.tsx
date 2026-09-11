import React from 'react';
import { Star, Building, CheckCircle2, ThumbsUp } from 'lucide-react';
import { clientLogos, clientTestimonials } from '../data/companyData';
import { ClientTestimonial } from '../types';

export const ClientsSection: React.FC = () => {
  return (
    <section id="clientes" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ThumbsUp className="w-3.5 h-3.5 text-amber-600" />
            Confiança & Parcerias Industriais
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Clientes e Segmentos que Confiam em Nossa Engenharia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Atendemos plantas industriais, operadoras de galpões logísticos e grandes redes corporativas
            onde a confiabilidade do fornecimento de energia é um ativo crítico de negócio.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center hover:bg-amber-50/40 hover:border-amber-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-slate-200/70 text-slate-700 flex items-center justify-center mb-2.5">
                <Building className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-900 block line-clamp-1">{client.name}</span>
              <span className="text-[11px] text-slate-500 mt-0.5">{client.segment}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientTestimonials.map((t: ClientTestimonial) => (
            <div
              key={t.id}
              className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center space-x-1 mb-4 text-amber-500">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">
                  {t.clientName}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 font-medium">
                  {t.role}
                </p>
                <div className="flex items-center gap-1.5 mt-1 text-[11px] text-amber-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  <span>{t.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Numbers Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-around gap-6 text-center border border-slate-800">
          <div>
            <div className="text-3xl font-extrabold text-amber-400">99,4%</div>
            <p className="text-xs text-slate-300 mt-1 font-medium">Aprovação de Projetos no 1º Protocolo</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-800"></div>
          <div>
            <div className="text-3xl font-extrabold text-white">100%</div>
            <p className="text-xs text-slate-300 mt-1 font-medium">Pontualidade em Paradas Industriais</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-slate-800"></div>
          <div>
            <div className="text-3xl font-extrabold text-emerald-400">R$ 0</div>
            <p className="text-xs text-slate-300 mt-1 font-medium">Multas ou Sinistros em Obras Executadas</p>
          </div>
        </div>

      </div>
    </section>
  );
};
