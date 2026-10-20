import React from 'react';

export type TabId = 'cards' | 'flip' | 'dialog' | 'hotlines';

interface BottomNavBarProps {
  activeTab: TabId;
  onSelectTab: (tab: TabId) => void;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, onSelectTab }) => {
  const tabs: { id: TabId; label: string; icon: (active: boolean) => React.ReactNode }[] = [
    {
      id: 'cards',
      label: 'การ์ดช่วย',
      icon: (active) => (
        <svg className={`w-5 h-5 ${active ? 'text-slate-900 stroke-[2.2]' : 'text-slate-600 stroke-[1.8]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
    {
      id: 'flip',
      label: 'ยื่นจอ',
      icon: (active) => (
        <svg className={`w-5 h-5 ${active ? 'text-slate-900 stroke-[2.2]' : 'text-slate-600 stroke-[1.8]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <path d="M12 18h.01" />
          <path d="M9 6a3 3 0 1 1 6 0" />
        </svg>
      ),
    },
    {
      id: 'dialog',
      label: 'โต้ตอบ',
      icon: (active) => (
        <svg className={`w-5 h-5 ${active ? 'text-slate-900 stroke-[2.2]' : 'text-slate-600 stroke-[1.8]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 16 4 4 4-4" />
          <path d="M7 20V4" />
          <path d="m21 8-4-4-4 4" />
          <path d="M17 4v16" />
        </svg>
      ),
    },
    {
      id: 'hotlines',
      label: 'สายด่วน',
      icon: (active) => (
        <svg className={`w-5 h-5 ${active ? 'text-slate-900 stroke-[2.2]' : 'text-slate-600 stroke-[1.8]'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <circle cx="8" cy="10" r="2" />
          <path d="M14 8h4" />
          <path d="M14 12h4" />
          <path d="M6 16h12" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 bg-white/98 backdrop-blur-md border-t border-slate-200/80 pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-4 h-14 items-center px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center min-h-[48px] py-1 transition-colors ${
                isActive
                  ? 'text-slate-950 font-bold'
                  : 'text-slate-600 hover:text-slate-900 font-medium'
              }`}
            >
              <div className="relative">
                {tab.icon(isActive)}
              </div>
              <span className={`text-[10px] tracking-tight mt-1 leading-none ${isActive ? 'font-bold text-slate-950' : 'text-slate-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
