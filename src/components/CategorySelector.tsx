import React from 'react';
import { AlertOctagon, Clock } from 'lucide-react';
import { EmergencyCategory, EmergencyCard } from '../types/emergency';

interface CategorySelectorProps {
  cards: EmergencyCard[];
  selectedCategory: EmergencyCategory;
  onSelectCategory: (category: EmergencyCategory) => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  cards,
  selectedCategory,
  onSelectCategory,
}) => {
  const currentCard = cards.find((c) => c.id === selectedCategory) || cards[0];

  return (
    <div className="px-4 pt-1 pb-1">
      {/* Urgency indicator strip */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 text-[#c81e2b] font-bold text-sm">
          <div className="w-5 h-5 rounded-md bg-red-100 flex items-center justify-center text-[#c81e2b] shrink-0">
            <AlertOctagon className="w-3.5 h-3.5" />
          </div>
          <span>{currentCard?.tagTh || 'พิษสัตว์อันตรายถึงชีวิต'}</span>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e0e7ff] text-[11px] font-semibold text-slate-800">
          <Clock className="w-3 h-3 text-red-500" />
          <span>{currentCard?.goldenHour || 'นาทีวิกฤต (Golden Hour)'}</span>
        </div>
      </div>

      {/* Primary 2-column Category Selector matching Mockup */}
      <div className="grid grid-cols-2 gap-2 mb-1">
        {/* Jellyfish Tab */}
        <button
          onClick={() => onSelectCategory('jellyfish')}
          className={`flex items-center gap-2.5 p-3 rounded-2xl text-left transition-all ${
            selectedCategory === 'jellyfish'
              ? 'bg-[#c81e2b] text-white shadow-xs'
              : 'bg-[#f1f5f9] text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <svg className={`w-5 h-5 ${selectedCategory === 'jellyfish' ? 'text-white' : 'text-slate-700'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <path d="M12 11v4" />
              <path d="M10 13h4" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className={`text-xs font-bold leading-tight ${selectedCategory === 'jellyfish' ? 'text-white' : 'text-slate-900'}`}>
              แมงกะพรุนกล่อง
            </div>
            <div className={`text-[10px] leading-tight mt-0.5 ${selectedCategory === 'jellyfish' ? 'text-red-100' : 'text-slate-500'}`}>
              Box Jellyfish
            </div>
          </div>
        </button>

        {/* Snake Tab */}
        <button
          onClick={() => onSelectCategory('snake')}
          className={`flex items-center gap-2.5 p-3 rounded-2xl text-left transition-all ${
            selectedCategory === 'snake'
              ? 'bg-[#c81e2b] text-white shadow-xs'
              : 'bg-[#f1f5f9] text-slate-700 hover:bg-slate-200/80 border border-slate-200/60'
          }`}
        >
          <div className="w-6 h-6 flex items-center justify-center shrink-0">
            <svg className={`w-5 h-5 ${selectedCategory === 'snake' ? 'text-white' : 'text-slate-700'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 0-4 4c0 3 2 4 2 7 0 2-2 3-2 5a3 3 0 0 0 6 0c0-2-2-3-2-5 0-3 2-4 2-7a4 4 0 0 0-4-4z" />
              <path d="M12 10v.01" />
            </svg>
          </div>
          <div className="min-w-0">
            <div className={`text-xs font-bold leading-tight ${selectedCategory === 'snake' ? 'text-white' : 'text-slate-900'}`}>
              งูพิษกัด
            </div>
            <div className={`text-[10px] leading-tight mt-0.5 ${selectedCategory === 'snake' ? 'text-red-100' : 'text-slate-500'}`}>
              Venomous Snake
            </div>
          </div>
        </button>
      </div>

      {/* Secondary Quick Selector for Other Emergencies */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar text-xs">
        {cards.filter(c => c.id !== 'jellyfish' && c.id !== 'snake').map(c => (
          <button
            key={c.id}
            onClick={() => onSelectCategory(c.id)}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-medium shrink-0 transition-colors ${
              selectedCategory === c.id
                ? 'bg-slate-900 text-white font-bold'
                : 'text-slate-600 bg-white border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {c.icon} {c.nameTh}
          </button>
        ))}
      </div>
    </div>
  );
};
