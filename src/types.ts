export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  tag: string;
  normas: string[];
  deliverables: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'subestacoes' | 'instalacoes' | 'laudos' | 'projetos';
  clientSector: string;
  location: string;
  capacity: string;
  imageUrl: string;
  summary: string;
  challenge: string;
  solution: string;
  standards: string[];
  scope: string[];
}

export interface TechnicalCredential {
  id: string;
  code: string;
  title: string;
  category: 'seguranca' | 'norma_tecnica' | 'orgao';
  description: string;
  validityDetails: string;
}

export interface ClientTestimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  sector: string;
  comment: string;
  rating: number;
}

export interface CompanyConfig {
  name: string;
  tradeName: string;
  responsibleEngineer?: string;
  website?: string;
  crea: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  cityState: string;
  emergencyPhone: string;
}

export interface ContactFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceType: string;
  urgency: 'baixa' | 'media' | 'alta' | 'imediata';
  description: string;
}
