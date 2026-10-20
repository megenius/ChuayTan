import React from 'react';
import { Ban, XCircle } from 'lucide-react';
import { EmergencyCard } from '../types/emergency';

interface DontsWarningProps {
  card: EmergencyCard;
}

export const DontsWarning: React.FC<DontsWarningProps> = ({ card }) => {
  return (
    <div className="px-4 py-2">
      <div className="rounded-2xl bg-gradient-to-b from-rose-50/90 to-red-100/40 border border-rose-200/90 p-3.5 shadow-2xs">
        {/* Title */}
        <div className="flex items-center gap-2 mb-3 text-red-700 font-extrabold text-sm tracking-tight">
          <Ban className="w-4 h-4 text-red-600 shrink-0" />
          <span>ข้อห้ามเด็ดขาด (อันตรายถึงชีวิต!)</span>
        </div>

        {/* Warning cards list */}
        <div className="space-y-2">
          {card.dontsTh.map((item, idx) => {
            const [boldPart, ...rest] = item.split(': ');
            return (
              <div
                key={idx}
                className="bg-white/95 rounded-xl p-3 border border-red-100/80 shadow-2xs flex items-start gap-2.5"
              >
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-4 h-4" />
                </div>
                <div className="text-xs leading-relaxed text-slate-700">
                  <span className="font-bold text-red-700">{boldPart}</span>
                  {rest.length > 0 && <span>: {rest.join(': ')}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
