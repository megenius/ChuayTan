import React from 'react';
import { AlertOctagon, Clock, Flame } from 'lucide-react';
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
    <div className="px-4 pt-1 pb-2">
      {/* Urgency indicator strip */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-1.5 text-red-600 font-bold text-sm">
          <div className="w-5 h-5 rounded-md bg-red-100 flex items-center justify-center text-red-600">
            <AlertOctagon className="w-3.5 h-3.5" />
          </div>
          <span>{currentCard?.tagTh || 'พิษสัตว์อันตรายถึงชีวิต'}</span>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-semibold text-blue-800">
          <Clock className="w-3 h-3 text-blue-600" />
          <span>{currentCard?.goldenHour || 'นาทีวิกฤต (Golden Hour)'}</span>
        </div>
      </div>

      {/* Category selector pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {cards.map((card) => {
          const isActive = card.id === selectedCategory;
          return (
            <button
              key={card.id}
              onClick={() => onSelectCategory(card.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-left transition-all shrink-0 active:scale-[0.98] ${
                isActive
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <span className="text-base">{card.icon}</span>
              <div className="min-w-0">
                <div className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {card.nameTh}
                </div>
                <div className={`text-[10px] leading-tight ${isActive ? 'text-red-100' : 'text-slate-500'}`}>
                  {card.nameEn}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
