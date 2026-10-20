import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../types/emergency';

interface LanguageSelectorProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLang, onSelectLang }) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-t border-slate-100">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700">
        <Languages className="w-4 h-4 text-slate-600" />
        <span>ภาษาข้อความสื่อสาร :</span>
      </div>

      <div className="flex items-center gap-1">
        {(['EN', '中文', 'RU'] as Language[]).map((lang) => {
          const isActive = currentLang === lang;
          return (
            <button
              key={lang}
              onClick={() => onSelectLang(lang)}
              className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
                isActive
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {lang}
            </button>
          );
        })}
      </div>
    </div>
  );
};
