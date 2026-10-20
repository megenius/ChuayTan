import React from 'react';
import { EmergencyCard } from '../types/emergency';

interface DontsWarningProps {
  card: EmergencyCard;
}

export const DontsWarning: React.FC<DontsWarningProps> = ({ card }) => {
  return (
    <div className="px-4 py-2">
      <div className="rounded-3xl bg-[#fef2f2] border border-rose-200/80 p-3.5 shadow-2xs">
        {/* Title */}
        <div className="flex items-center gap-2 mb-2.5 text-rose-700 font-extrabold text-sm tracking-tight">
          <svg className="w-4 h-4 text-rose-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
          <span>ข้อห้ามเด็ดขาด (อันตรายถึงชีวิต!)</span>
        </div>

        {/* Warning cards list */}
        <div className="space-y-2">
          {card.dontsTh.map((item, idx) => {
            const [boldPart, ...rest] = item.split(': ');
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-3 border border-rose-100/90 shadow-2xs flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </div>
                <div className="text-[11px] leading-relaxed text-slate-700 min-w-0">
                  <div className="font-bold text-rose-700">{boldPart}</div>
                  {rest.length > 0 && <div className="text-slate-600 mt-0.5">{rest.join(': ')}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
