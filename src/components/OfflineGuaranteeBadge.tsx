import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const OfflineGuaranteeBadge: React.FC = () => {
  return (
    <div className="px-4 py-2 mb-4">
      <div className="bg-emerald-50/90 border border-emerald-200/90 rounded-xl p-3 flex items-start gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <p className="text-[11px] leading-relaxed text-emerald-950 font-medium">
          ข้อมูลชุดนี้ได้รับการรับรองตามมาตรฐานการแพทย์ฉุกเฉิน และบันทึกไว้ในอุปกรณ์พร้อมใช้งานแม้ไม่มีสัญญาณอินเทอร์เน็ต
        </p>
      </div>
    </div>
  );
};
