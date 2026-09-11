import React, { useState } from 'react';
import { X, Calculator, ArrowRight, ShieldCheck, Clock, CheckCircle2, MessageSquare } from 'lucide-react';
import { CompanyConfig } from '../types';

interface ScopeEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  company: CompanyConfig;
  onApplyToForm: (serviceName: string, description: string) => void;
}

export const ScopeEstimatorModal: React.FC<ScopeEstimatorModalProps> = ({
  isOpen,
  onClose,
  company,
  onApplyToForm,
}) => {
  const [facilityType, setFacilityType] = useState<'industria' | 'logistica' | 'comercial' | 'corporativo'>('industria');
  const [serviceCategory, setServiceCategory] = useState<'subestacao' | 'qgbt' | 'spda' | 'nr10' | 'capacitores'>('subestacao');
  const [powerScale, setPowerScale] = useState<'baixa' | 'media' | 'alta' | 'pesada'>('media');

  if (!isOpen) return null;

  // Calculation Logic
  const getEstimationDetails = () => {
    switch (serviceCategory) {
      case 'subestacao':
        return {
          title: 'Subestação de Média Tensão (13,8 a 34,5 kV)',
          standards: ['NBR 14039', 'NR-10', 'Padrão Concessionária (Enel/CPFL/EDP)'],
          estimatedDays: powerScale === 'pesada' ? '45 a 60 dias' : '30 a 45 dias',
          keyItems: [
            'Elaboração de projeto executivo e protocolo de aprovação na concessionária',
            'Cubículos blindados de MT ou cabine em alvenaria com chave seccionadora',
            'Transformador de força dimensionado com ensaios de isolação e TTR',
            'Malha de aterramento profunda com cálculo de tensão de passo e toque',
            'Comissionamento elétrico e emissão de ART de responsabilidade técnica'
          ],
          recommendation: 'Recomendamos agendamento prévio de vistoria técnica no local para verificação da distância até o poste de derivação da concessionária.'
        };
      case 'qgbt':
        return {
          title: 'Quadro Geral de Baixa Tensão (QGBT) e Infraestrutura',
          standards: ['NBR IEC 61439-1/2', 'NBR 5410', 'NR-10'],
          estimatedDays: '15 a 30 dias',
          keyItems: [
            'Quadro metálico com grau de proteção IP-54 e formas construtivas segregadas',
            'Disjuntores caixa aberta ou moldada com proteção eletrônica ajustável',
            'Barramentos de cobre eletrolítico 99,9% com pintura e termorretrátil',
            'Sistema de medição multimedidor integrado para controle de demanda',
            'Ensaios de rotina em fábrica e termo de garantia estendida'
          ],
          recommendation: 'Planejamento de janela de parada fabril pré-acordada com a diretoria para substituição em feriado ou fim de semana.'
        };
      case 'spda':
        return {
          title: 'Laudo Pericial de SPDA e Inspeção Termográfica',
          standards: ['NBR 5419:2015 Partes 1 a 4', 'NR-10'],
          estimatedDays: '3 a 7 dias úteis',
          keyItems: [
            'Medição de continuidade das descidas com miliohmímetro de precisão',
            'Medição da resistência de aterramento pelo método de queda de potencial',
            'Varredura termográfica completa com câmera calibrada RBC nos quadros',
            'Relatório fotográfico comentado com classificação de severidade térmica',
            'Emissão de ART formal assinada por Engenheiro Eletricista habilitado'
          ],
          recommendation: 'Fundamental para renovação de AVCB (Corpo de Bombeiros) e validação da apólice de seguro patrimonial.'
        };
      case 'nr10':
        return {
          title: 'Prontuário de Instalações Elétricas (PIE) e Adequação NR-10',
          standards: ['NR-10 (Portaria 598)', 'NR-12', 'IEEE 1584'],
          estimatedDays: '20 a 40 dias',
          keyItems: [
            'Levantamento cadastral in loco e atualização de diagramas unifilares',
            'Relatório Técnico de Inspeções (RTI) com cronograma de adequação',
            'Estudo de Arc Flash (energia incidente) e especificação de vestimentas ATP',
            'Procedimentos de bloqueio e etiquetagem (LOTO) e instruções técnicas',
            'Estruturação física e digital do Prontuário Elétrico permanente'
          ],
          recommendation: 'Blindagem total contra multas de auditorias fiscais do Ministério do Trabalho e Segurança.'
        };
      case 'capacitores':
        return {
          title: 'Banco de Capacitores Automático & Correção de Fator de Potência',
          standards: ['PRODIST Módulo 8', 'IEEE 519', 'NBR 5410'],
          estimatedDays: '10 a 20 dias',
          keyItems: [
            'Medição preliminar com analisador de grandezas elétricas Classe A',
            'Dimensionamento de células capacitivas trifásicas com reatores anti-harmônicos',
            'Controlador microprocessado com chaveamento inteligente por fator de potência',
            'Proteção individualizada por fusíveis NH ultrarrápidos',
            'Eliminação imediata das multas de excedente reativo na conta de luz'
          ],
          recommendation: 'Payback médio entre 3 e 6 meses com a economia gerada diretamente na fatura de energia.'
        };
      default:
        return {
          title: 'Serviço Personalizado de Engenharia Elétrica',
          standards: ['NBR 5410', 'NR-10'],
          estimatedDays: 'A definir',
          keyItems: ['Vistoria técnica preliminar', 'Projeto e especificação', 'Execução com ART'],
          recommendation: 'Consulte nossa equipe técnica para avaliação sob medida.'
        };
    }
  };

  const details = getEstimationDetails();

  const handleApply = () => {
    const desc = `[SIMULAÇÃO DE PRÉ-ESCOPO]\nInstalação: ${facilityType.toUpperCase()} | Potência/Porte: ${powerScale.toUpperCase()}\nServiço: ${details.title}\nPrazo Estimado: ${details.estimatedDays}\nItens principais requeridos:\n- ` + details.keyItems.join('\n- ');
    onApplyToForm(details.title, desc);
    onClose();
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const getWhatsAppSimUrl = () => {
    const text = `*SIMULAÇÃO DE PRÉ-ESCOPO TÉCNICO - ${company.tradeName}*\n\n` +
      `*Instalação:* ${facilityType.toUpperCase()}\n` +
      `*Serviço:* ${details.title}\n` +
      `*Porte:* ${powerScale.toUpperCase()}\n` +
      `*Prazo Estimado:* ${details.estimatedDays}\n` +
      `*Normas:* ${details.standards.join(', ')}\n\n` +
      `Gostaria de uma avaliação formal de orçamento para este escopo.`;
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
      <div 
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-slate-200 flex items-center justify-between bg-slate-900 text-white rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Simulador de Pré-Escopo Técnico</h3>
              <p className="text-xs text-slate-300">Pré-dimensionamento de escopo e normas para seu projeto</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Selectors */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Step 1: Facility Type */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              1. Tipo de Empreendimento / Instalação
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'industria', label: 'Indústria / Fabril' },
                { id: 'logistica', label: 'Galpão Logístico' },
                { id: 'comercial', label: 'Varejo / Shopping' },
                { id: 'corporativo', label: 'Edifício / Hospital' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFacilityType(item.id as any)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    facilityType === item.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Service Category */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              2. Serviço Principal Desejado
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'subestacao', label: 'Subestação & Média Tensão' },
                { id: 'qgbt', label: 'QGBT & Barramentos' },
                { id: 'spda', label: 'Laudo SPDA & Termografia' },
                { id: 'nr10', label: 'Adequação NR-10 & PIE' },
                { id: 'capacitores', label: 'Banco de Capacitores' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setServiceCategory(item.id as any)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-left ${
                    serviceCategory === item.id
                      ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Power Scale */}
          <div>
            <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
              3. Porte Estimado / Demanda de Potência
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'baixa', label: 'Até 300 kVA' },
                { id: 'media', label: '300 a 750 kVA' },
                { id: 'alta', label: '750 a 1.500 kVA' },
                { id: 'pesada', label: 'Acima de 1.500 kVA' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPowerScale(item.id as any)}
                  className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                    powerScale === item.id
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resulting Technical Output */}
          <div className="mt-4 p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] font-bold uppercase text-amber-700 block">Diagnóstico de Escopo Recomendado</span>
                <h4 className="text-base font-bold text-slate-900">{details.title}</h4>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 bg-white px-3 py-1 rounded-lg border border-slate-200">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Prazo Estimado: <strong>{details.estimatedDays}</strong></span>
              </div>
            </div>

            {/* Applicable Standards */}
            <div>
              <span className="text-xs font-bold text-slate-800 block mb-1">Normas Regulamentadoras Aplicáveis:</span>
              <div className="flex flex-wrap gap-1.5">
                {details.standards.map((std, i) => (
                  <span key={i} className="text-xs font-mono font-semibold bg-white border border-slate-300 text-slate-700 px-2 py-0.5 rounded">
                    {std}
                  </span>
                ))}
                <span className="text-xs font-mono font-semibold bg-emerald-50 border border-emerald-200 text-emerald-700 px-2 py-0.5 rounded flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  ART CREA Inclusa
                </span>
              </div>
            </div>

            {/* Scope Items */}
            <div>
              <span className="text-xs font-bold text-slate-800 block mb-2">Entregáveis Obrigatórios da Engenharia:</span>
              <div className="space-y-1.5">
                {details.keyItems.map((item, idx) => (
                  <div key={idx} className="flex items-start text-xs text-slate-700 space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommendation Box */}
            <div className="p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-xs text-amber-900">
              <strong>Orientação do Engenheiro:</strong> {details.recommendation}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <a
              href={getWhatsAppSimUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors"
            >
              <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
              <span>Enviar Simulação no WhatsApp</span>
            </a>

            <button
              onClick={handleApply}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Preencher no Formulário de Orçamento</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
