import { useState, useEffect } from 'react';
import { initialCompanyConfig } from './data/companyData';
import { CompanyConfig } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { CredentialsSection } from './components/CredentialsSection';
import { AboutSection } from './components/AboutSection';
import { ClientsSection } from './components/ClientsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScopeEstimatorModal } from './components/ScopeEstimatorModal';
import { CompanyCustomizerModal } from './components/CompanyCustomizerModal';
import { WhatsAppFloating } from './components/WhatsAppFloating';

export default function App() {
  const [company, setCompany] = useState<CompanyConfig>(() => {
    try {
      const saved = localStorage.getItem('nexus_engineering_config');
      if (saved) {
        return { ...initialCompanyConfig, ...JSON.parse(saved) };
      }
    } catch {
      // ignore
    }
    return initialCompanyConfig;
  });

  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [preSelectedService, setPreSelectedService] = useState<string | undefined>(undefined);

  const handleSaveCompanyConfig = (updated: CompanyConfig) => {
    setCompany(updated);
    try {
      localStorage.setItem('nexus_engineering_config', JSON.stringify(updated));
    } catch (err) {
      console.error('Error saving company config:', err);
    }
  };

  const handleSelectServiceForQuote = (serviceTitle: string) => {
    setPreSelectedService(serviceTitle);
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRequestSimilarProject = (projectTitle: string) => {
    setPreSelectedService(`Projeto similar a: ${projectTitle}`);
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplySimulationToForm = (serviceName: string, description: string) => {
    setPreSelectedService(serviceName);
    const descInput = document.querySelector('textarea[name="description"]') as HTMLTextAreaElement;
    if (descInput) {
      descInput.value = description;
      // Trigger input event
      const event = new Event('input', { bubbles: true });
      descInput.dispatchEvent(event);
    }
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white">
      {/* Primary Header */}
      <Header
        company={company}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Banner & Key Metrics */}
        <Hero
          company={company}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        {/* Specialized Services with Scope & Norms */}
        <ServicesSection
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        {/* Real Engineering Project Cases & Modals */}
        <ProjectsSection
          onRequestSimilarProject={handleRequestSimilarProject}
        />

        {/* Technical Standards, CREA, ART & Safety NR-10 */}
        <CredentialsSection />

        {/* The Company, Senior Engineering Team & Calibrated Instruments */}
        <AboutSection company={company} />

        {/* Industrial Clients & Verified Testimonials */}
        <ClientsSection />

        {/* Direct Technical Quote Request & Contact Info */}
        <ContactSection
          company={company}
          preSelectedService={preSelectedService}
          onClearPreSelectedService={() => setPreSelectedService(undefined)}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        company={company}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Modals & Floating Tools */}
      <ScopeEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        company={company}
        onApplyToForm={handleApplySimulationToForm}
      />

      <CompanyCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        company={company}
        onSave={handleSaveCompanyConfig}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating company={company} />
    </div>
  );
}
