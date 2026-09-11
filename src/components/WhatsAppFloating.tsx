import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { CompanyConfig } from '../types';

interface WhatsAppFloatingProps {
  company: CompanyConfig;
}

export const WhatsAppFloating: React.FC<WhatsAppFloatingProps> = ({ company }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const getUrl = () => {
    const text = `Olá! Gostaria de falar com o departamento de engenharia da ${company.tradeName} sobre uma demanda técnica.`;
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2.5 max-w-xs bg-slate-900 text-white rounded-2xl p-3 shadow-xl border border-slate-700 text-xs relative animate-fadeIn flex items-start space-x-2">
          <div className="flex-1">
            <span className="font-bold text-amber-400 block mb-0.5">Engenharia Online</span>
            <p className="text-slate-300 text-[11px] leading-tight">
              Precisa de orçamento urgente ou vistoria técnica? Fale agora no WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
            aria-label="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={getUrl()}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-200 group"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-500 text-[9px] font-bold text-slate-950 items-center justify-center">
            1
          </span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white/20" />
      </a>
    </div>
  );
};
