import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types/emergency';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'EN', label: 'EN' },
  { code: '中文', label: '中文' },
  { code: 'RU', label: 'RU' },
  { code: 'DE', label: 'DE' },
  { code: 'JA', label: '日本語' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onSelectLang }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t border-slate-100">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
        <Languages className="w-4 h-4 text-slate-500" />
        <span>ภาษาข้อความสื่อสาร :</span>
      </div>

      <div className="flex items-center gap-1 bg-slate-100/90 p-1 rounded-lg">
        {LANGUAGES.map((lang) => {
          const isActive = currentLang === lang.code;
          return (
            <button
              key={lang.code}
              onClick={() => onSelectLang(lang.code)}
              className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
