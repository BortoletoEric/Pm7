import React, { useState } from 'react';
import { Zap, Phone, Mail, Menu, X, Shield, Settings, FileText } from 'lucide-react';
import { CompanyConfig } from '../types';

interface HeaderProps {
  company: CompanyConfig;
  onOpenEstimator: () => void;
  onOpenCustomizer: () => void;
}

export const Header: React.FC<HeaderProps> = ({ company, onOpenEstimator, onOpenCustomizer }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900 border-b border-slate-800 text-slate-100 shadow-md">
      {/* Top Bar with CREA, Emergency and Fast Contact */}
      <div className="bg-slate-950 px-4 py-1.5 text-xs border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3 text-slate-400">
            <span className="inline-flex items-center text-amber-400 font-medium">
              <Shield className="w-3.5 h-3.5 mr-1" />
              {company.crea}
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-300">Emissão de ART em 100% dos serviços</span>
          </div>

          <div className="flex items-center space-x-4 text-slate-300">
            <a
              href={`tel:${company.phone.replace(/\D/g, '')}`}
              className="inline-flex items-center hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3 h-3 mr-1 text-amber-500" />
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="hidden md:inline-flex items-center hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3 h-3 mr-1 text-amber-500" />
              <span>{company.email}</span>
            </a>
            <button
              onClick={onOpenCustomizer}
              title="Configurar Dados da Empresa"
              className="inline-flex items-center text-xs text-slate-400 hover:text-amber-400 bg-slate-800/60 hover:bg-slate-800 px-2 py-0.5 rounded border border-slate-700 transition-colors cursor-pointer"
            >
              <Settings className="w-3 h-3 mr-1" />
              <span className="hidden md:inline">Editar Dados</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20 text-slate-950 font-bold">
              <Zap className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                {company.tradeName}
                <span className="text-xs uppercase tracking-wider font-semibold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded">
                  Engenharia
                </span>
              </span>
              <p className="text-xs text-slate-400 hidden sm:block">
                Projetos • Média & Baixa Tensão • Laudos e ART
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <button
              onClick={() => scrollToSection('servicos')}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection('obras')}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Obras e Projetos
            </button>
            <button
              onClick={() => scrollToSection('credenciais')}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Normas & NR-10
            </button>
            <button
              onClick={() => scrollToSection('empresa')}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              A Empresa
            </button>
            <button
              onClick={() => scrollToSection('clientes')}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="text-slate-300 hover:text-amber-400 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenEstimator}
              className="inline-flex items-center px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              Simular Escopo
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <button
            onClick={() => scrollToSection('servicos')}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Serviços Técnicos
          </button>
          <button
            onClick={() => scrollToSection('obras')}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Obras Realizadas
          </button>
          <button
            onClick={() => scrollToSection('credenciais')}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Normas, ART & NR-10
          </button>
          <button
            onClick={() => scrollToSection('empresa')}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            A Empresa e Equipe
          </button>
          <button
            onClick={() => scrollToSection('clientes')}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Clientes & Depoimentos
          </button>
          <button
            onClick={() => scrollToSection('contato')}
            className="block w-full text-left py-2 text-slate-200 hover:text-amber-400 font-medium"
          >
            Fale Conosco / Orçamento
          </button>
          
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full text-center py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700"
            >
              Simular Pré-Escopo Técnico
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className="w-full text-center py-2.5 rounded-lg text-sm font-bold text-slate-950 bg-amber-400"
            >
              Solicitar Orçamento com ART
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
