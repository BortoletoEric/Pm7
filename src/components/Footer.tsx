import React from 'react';
import { Zap, Shield, Phone, Mail, MapPin, ArrowUp, Settings, FileText } from 'lucide-react';
import { CompanyConfig } from '../types';

interface FooterProps {
  company: CompanyConfig;
  onOpenEstimator: () => void;
  onOpenCustomizer: () => void;
}

export const Footer: React.FC<FooterProps> = ({ company, onOpenEstimator, onOpenCustomizer }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Column 1: Brand & Registration */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={scrollToTop}>
              <div className="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-amber-500/20">
                <Zap className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {company.tradeName}
              </span>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-sm">
              Engenharia elétrica especializada em subestações de média tensão, montagem eletromecânica de QGBTs, laudos de SPDA conforme NBR 5419 e adequação integral à NR-10.
            </p>

            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 inline-block space-y-1">
              <div className="flex items-center space-x-2 text-amber-400 font-semibold">
                <Shield className="w-4 h-4" />
                <span>{company.crea}</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Responsabilidade técnica e emissão de ART em 100% dos serviços.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => scrollToSection('servicos')} className="hover:text-amber-400 transition-colors">
                  Serviços Técnicos
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('obras')} className="hover:text-amber-400 transition-colors">
                  Portfólio de Obras
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('credenciais')} className="hover:text-amber-400 transition-colors">
                  Normas & Segurança NR-10
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('empresa')} className="hover:text-amber-400 transition-colors">
                  A Empresa & Engenharia
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('clientes')} className="hover:text-amber-400 transition-colors">
                  Clientes & Casos de Sucesso
                </button>
              </li>
              <li>
                <button onClick={onOpenEstimator} className="text-amber-400 font-semibold hover:underline flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" />
                  Simulador de Pré-Escopo
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Technical Norms */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Normas ABNT & NR
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>NBR 5410 (Baixa Tensão)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>NBR 14039 (Média Tensão)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>NBR 5419 (SPDA / Para-raios)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>NR-10 (Segurança Elétrica)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>NR-35 (Trabalho em Altura)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Padrões de Concessionárias</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Atendimento
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>{company.address}, {company.cityState}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="hover:text-white">
                  {company.phone}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${company.email}`} className="hover:text-white">
                  {company.email}
                </a>
              </div>
              <p className="pt-1 text-[11px] text-amber-300 font-medium">
                Plantão 24h: {company.emergencyPhone}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {company.name} - Todos os direitos reservados.
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={onOpenCustomizer}
              className="hover:text-amber-400 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Settings className="w-3 h-3" />
              <span>Personalizar Dados (CEO)</span>
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Voltar ao topo</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
