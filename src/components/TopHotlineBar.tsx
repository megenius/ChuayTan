import React from 'react';
import { Shield, Ambulance } from 'lucide-react';

interface TopHotlineBarProps {
  onCall: (number: string, title: string, detail: string) => void;
}

export const TopHotlineBar: React.FC<TopHotlineBarProps> = ({ onCall }) => {
  return (
    <div className="grid grid-cols-3 gap-2 px-4 pt-3 pb-2">
      {/* 1155 Tourist Police */}
      <button
        onClick={() => onCall('1155', 'ตำรวจท่องเที่ยว (Tourist Police)', 'แจ้งเหตุนักท่องเที่ยวต่างชาติ มีเจ้าหน้าที่ล่ามช่วยแปลภาษาอังกฤษ จีน รัสเซีย')}
        className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 transition-all text-left"
      >
        <div className="w-6 h-6 flex items-center justify-center text-rose-600 shrink-0">
          <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <path d="M12 8v8" />
            <path d="M8 12h8" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-extrabold text-red-600 leading-none">1155</div>
          <div className="text-[10px] font-medium text-slate-600 truncate mt-1">ตำรวจท่องเที่ยว</div>
        </div>
      </button>

      {/* 1669 EMS - Prominently highlighted in Solid Red */}
      <button
        onClick={() => onCall('1669', 'สถาบันการแพทย์ฉุกเฉินแห่งชาติ (EMS)', 'เรียกรถพยาบาลกู้ชีพฉุกเฉิน แจ้งตำแหน่งและอาการผู้ป่วยทันที')}
        className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#c81e2b] text-white shadow-2xs hover:bg-[#b01925] transition-all text-left active:scale-[0.98]"
      >
        <div className="w-6 h-6 flex items-center justify-center text-white shrink-0">
          <Ambulance className="w-5 h-5 text-white" />
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-extrabold text-white leading-none">1669</div>
          <div className="text-[10px] font-medium text-white truncate mt-1">กู้ชีพฉุกเฉิน</div>
        </div>
      </button>

      {/* 191 Police Patrol */}
      <button
        onClick={() => onCall('191', 'เหตุด่วนเหตุร้าย (Police Patrol)', 'แจ้งเหตุด่วน เหตุอาชญากรรม อุบัติเหตุรุนแรง ทั่วประเทศ')}
        className="flex items-center gap-2 p-2.5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:bg-slate-50 transition-all text-left"
      >
        <div className="w-6 h-6 flex items-center justify-center text-slate-800 shrink-0">
          <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>
        <div className="min-w-0">
          <div className="text-[14px] font-extrabold text-slate-900 leading-none">191</div>
          <div className="text-[10px] font-medium text-slate-600 truncate mt-1">เหตุด่วนเหตุร้าย</div>
        </div>
      </button>
    </div>
  );
};
