import React from 'react';
import { LayoutGrid, Smartphone, MessageSquareText, Phone } from 'lucide-react';

export type TabId = 'cards' | 'flip' | 'dialog' | 'hotlines';

interface BottomNavBarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onSelectTab }) => {
  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    {
      id: 'cards',
      label: 'การ์ดช่วย',
      icon: <LayoutGrid className="w-5 h-5" />,
    },
    {
      id: 'flip',
      label: 'ยื่นจอ',
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: 'dialog',
      label: 'โต้ตอบ',
      icon: <MessageSquareText className="w-5 h-5" />,
    },
    {
      id: 'hotlines',
      label: 'สายด่วน',
      icon: <Phone className="w-5 h-5" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 pb-safe">
      <div className="max-w-lg mx-auto grid grid-cols-4 h-15 items-center px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center min-h-[48px] py-1 transition-colors relative ${
                isActive
                  ? 'text-red-600 font-bold'
                  : 'text-slate-500 hover:text-slate-900 font-medium'
              }`}
            >
              <div className="relative">
                {tab.icon}
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-red-600" />
                )}
              </div>
              <span className="text-[11px] tracking-tight mt-1 leading-none">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
