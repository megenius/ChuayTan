export type Language = 'EN' | '中文' | 'RU' | 'DE' | 'JA';

export type EmergencyCategory = 'jellyfish' | 'snake' | 'cpr' | 'fracture' | 'heatstroke';

export interface TranslationData {
  title: string;
  criticalInstruction: string;
  phoneticThai: string;
  meaningThai: string;
  warningNote: string;
}

export interface StepItem {
  id: number;
  title: string;
  desc: string;
}

export interface EmergencyCard {
  id: EmergencyCategory;
  nameTh: string;
  nameEn: string;
  icon: string;
  tagTh: string;
  goldenHour: string;
  severity: 'critical' | 'high';
  heroImage: string;
  heroImageCaption: string;
  translations: Record<Language, TranslationData>;
  stepsTh: StepItem[];
  dontsTh: string[];
}

export interface PhraseItem {
  id: string;
  category: 'symptoms' | 'instructions' | 'medical_history' | 'reassurance';
  categoryTh: string;
  thText: string;
  translations: Record<Language, { text: string; phonetic: string }>;
}

export interface EmergencyHotline {
  number: string;
  nameTh: string;
  nameEn: string;
  descriptionTh: string;
  badge?: string;
  isPrimary?: boolean;
  category: 'medical' | 'police' | 'poison' | 'marine' | 'special';
  icon: string;
}
