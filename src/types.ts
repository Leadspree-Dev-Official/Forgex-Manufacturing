export interface CapabilityItem {
  id: string;
  title: string;
  description: string;
  image: string;
  badge?: string;
  tolerances?: string;
  materials?: string[];
  equipment?: string[];
  fullDetails?: string;
}

export interface FeatureCardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  iconName: 'crosshair' | 'bot' | 'shield';
  metrics?: string;
  details?: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  iconName: 'calendar' | 'building' | 'machine' | 'shield-check';
}

export interface IndustryItem {
  id: string;
  name: string;
  iconName: 'car' | 'plane' | 'wind' | 'crane' | 'gear' | 'cpu';
  standards: string;
  materials: string[];
  sampleParts: string[];
  tolerance: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  clientIndustry: string;
  leadTime: string;
  volume: string;
  material: string;
  fullSpecs: string;
}

export interface QuoteFormData {
  projectName: string;
  companyName: string;
  email: string;
  phone: string;
  industry: string;
  partCategory: string;
  quantity: string;
  material: string;
  tolerance: string;
  surfaceFinish: string;
  notes: string;
  fileName?: string;
}
