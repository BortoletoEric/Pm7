import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  AlertCircle,
  FileText
} from 'lucide-react';
import { CompanyConfig, ContactFormData } from '../types';

interface ContactSectionProps {
  company: CompanyConfig;
  preSelectedService?: string;
  onClearPreSelectedService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  company, 
  preSelectedService, 
  onClearPreSelectedService 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceType: preSelectedService || 'Subestações e Cabines Primárias',
    urgency: 'media',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionProtocol, setSubmissionProtocol] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [savedLeadsCount, setSavedLeadsCount] = useState<number>(0);

  useEffect(() => {
    if (preSelectedService) {
      setFormData(prev => ({ ...prev, serviceType: preSelectedService }));
    }
  }, [preSelectedService]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('nexus_engineering_leads');
      if (stored) {
        const parsed = JSON.parse(stored);
        setSavedLeadsCount(Array.isArray(parsed) ? parsed.length : 0);
      }
    } catch {
      // ignore
    }
  }, [submissionProtocol]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Client-Side Validation
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMessage('Por favor, preencha todos os campos obrigatórios (Nome, E-mail e Telefone).');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable async request
    setTimeout(() => {
      const protocolNumber = `OS-ENG-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      
      try {
        const existingLeads = JSON.parse(localStorage.getItem('nexus_engineering_leads') || '[]');
        const newLead = {
          ...formData,
          protocol: protocolNumber,
          createdAt: new Date().toISOString()
        };
        localStorage.setItem('nexus_engineering_leads', JSON.stringify([newLead, ...existingLeads]));
      } catch (err) {
        console.error('Error saving local lead:', err);
      }

      setIsSubmitting(false);
      setSubmissionProtocol(protocolNumber);
    }, 600);
  };

  const handleResetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceType: 'Subestações e Cabines Primárias',
      urgency: 'media',
      description: '',
    });
    setSubmissionProtocol(null);
    if (onClearPreSelectedService) onClearPreSelectedService();
  };

  const getWhatsAppLeadUrl = () => {
    const text = `*SOLICITAÇÃO DE ORÇAMENTO - ${company.tradeName}*\n\n` +
      `*Protocolo:* ${submissionProtocol || 'Novo Lead'}\n` +
      `*Nome:* ${formData.fullName}\n` +
      `*Empresa:* ${formData.companyName || 'Não informada'}\n` +
      `*Telefone:* ${formData.phone}\n` +
      `*E-mail:* ${formData.email}\n` +
      `*Serviço:* ${formData.serviceType}\n` +
      `*Urgência:* ${formData.urgency.toUpperCase()}\n` +
      `*Detalhes:* ${formData.description || 'Gostaria de agendar uma reunião técnica.'}`;
    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contato" className="py-20 bg-slate-900 text-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Canal Direto de Engenharia
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Solicite um Orçamento Técnico ou Vistoria
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Nossos engenheiros avaliam a demanda de sua planta e enviam proposta técnica detalhada com escopo,
            cronograma executivo e ART inclusa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details & Compliance */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-7 border border-slate-700 shadow-lg space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                Atendimento Corporativo & Diretoria
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-700/60 text-amber-400 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Central Telefônica</span>
                    <a href={`tel:${company.phone.replace(/\D/g, '')}`} className="font-bold text-white hover:text-amber-400 transition-colors">
                      {company.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-700/60 text-emerald-400 mt-0.5">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">WhatsApp Técnico Direto</span>
                    <a 
                      href={`https://wa.me/${company.whatsapp}`}
                      target="_blank" 
                      rel="noreferrer" 
                      className="font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Iniciar conversa imediata com Engenharia
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-700/60 text-amber-400 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">E-mail para Editais & RFPs</span>
                    <a href={`mailto:${company.email}`} className="font-bold text-white hover:text-amber-400 transition-colors">
                      {company.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-700/60 text-blue-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Sede Operacional</span>
                    <p className="text-slate-300 font-medium">
                      {company.address}
                    </p>
                    <p className="text-slate-400 text-xs">{company.cityState}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-slate-700/60 text-amber-400 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase tracking-wider block font-semibold">Horário & Plantão 24h</span>
                    <p className="text-slate-300 font-medium">Segunda a Sexta: 07h30 às 18h00</p>
                    <p className="text-xs text-amber-400 font-semibold">{company.emergencyPhone}</p>
                  </div>
                </div>
              </div>

              {/* Regulatory Assurance */}
              <div className="pt-4 border-t border-slate-700 flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span>{company.crea} - Atuação em todo o território nacional.</span>
              </div>
            </div>

            {/* Quick Note about SLA */}
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-slate-300 space-y-1.5">
              <span className="font-bold text-amber-400 uppercase tracking-wider block">Compromisso de Retorno Técnico:</span>
              <p>
                Propostas para laudos técnicos e manutenções são emitidas em até <strong>24 horas úteis</strong>.
                Para paradas de emergência, nosso plantão mobiliza equipe técnica imediatamente.
              </p>
              {savedLeadsCount > 0 && (
                <p className="pt-2 text-slate-400 text-[11px] border-t border-amber-500/20">
                  Total de orçamentos registrados localmente: <strong>{savedLeadsCount}</strong>
                </p>
              )}
            </div>

          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
              
              {submissionProtocol ? (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Solicitação Registrada com Sucesso!
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-3">
                      Protocolo: {submissionProtocol}
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                      Recebemos sua solicitação de <strong>{formData.serviceType}</strong> para a empresa <strong>{formData.companyName || formData.fullName}</strong>.
                      Um Engenheiro Eletricista entrará em contato em breve para alinhamento do escopo.
                    </p>
                  </div>

                  {/* WhatsApp Quick Forward Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppLeadUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Enviar Cópia Imediata no WhatsApp</span>
                    </a>

                    <button
                      onClick={handleResetForm}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      Nova Solicitação
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact / Proposal Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-200 pb-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">
                      Formulário de Solicitação de Proposta
                    </h3>
                    <p className="text-xs text-slate-500">
                      Preencha os dados da sua empresa e necessidade técnica para gerarmos a minuta da proposta.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 border border-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Ex: Carlos Mendes"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Empresa / Razão Social
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Ex: Indústria Química ABC"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        E-mail Corporativo *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="nome@empresa.com.br"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Telefone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(11) 99999-9999"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Tipo de Serviço Desejado
                      </label>
                      <select
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="Subestações e Cabines Primárias">Subestações e Cabines Primárias</option>
                        <option value="Projetos Elétricos Executivos">Projetos Elétricos Executivos</option>
                        <option value="Instalações e Obras Industriais (QGBT)">Instalações e Obras Industriais (QGBT)</option>
                        <option value="Laudos Técnicos e Termografia (SPDA)">Laudos Técnicos e Termografia (SPDA)</option>
                        <option value="Adequação NR-10 e Prontuário Elétrico">Adequação NR-10 e Prontuário Elétrico</option>
                        <option value="Eficiência Energética e Banco de Capacitores">Eficiência Energética e Banco de Capacitores</option>
                        <option value="Outro / Múltiplos Serviços">Outro / Múltiplos Serviços</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Nível de Urgência
                      </label>
                      <select
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      >
                        <option value="baixa">Planejamento Futuro (Próximos meses)</option>
                        <option value="media">Rotina (Próximos 30 dias)</option>
                        <option value="alta">Prioritário (Início imediato)</option>
                        <option value="imediata">Parada de Fábrica / Emergencial</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Descrição da Demanda / Detalhes do Local
                    </label>
                    <textarea
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Descreva detalhes como: tensão de atendimento (ex: 13,8 kV ou 380V), potência aproximada (kVA), cidade da obra ou prazos exigidos."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Registrando Proposta Técnica...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Solicitação de Proposta Técnica</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Seus dados corporativos estão protegidos. Não enviamos spam. Emissão de ART garantida pelo CREA.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
