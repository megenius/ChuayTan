import React from 'react';

export const OfflineGuaranteeBadge: React.FC = () => {
  return (
    <div className="px-4 py-2 mb-3">
      <div className="bg-[#f0f9ff] border border-blue-100/80 rounded-2xl p-3 flex items-start gap-2.5 shadow-2xs">
        <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600">
          <svg className="w-3 h-3 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="text-[11px] leading-relaxed text-slate-700 font-normal">
          ข้อมูลเบื้องต้น ไม่ใช่คำแนะนำทางการแพทย์ โทร 1669
        </p>
      </div>
    </div>
  );
};
