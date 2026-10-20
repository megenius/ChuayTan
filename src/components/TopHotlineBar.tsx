import React from 'react';
import { Shield, Ambulance, AlertCircle } from 'lucide-react';

interface TopHotlineBarProps {
  onCall: (number: string, title: string, detail: string) => void;
}

export const TopHotlineBar: React.FC<TopHotlineBarProps> = ({ onCall }) => {
  return (
    <div className="grid grid-cols-3 gap-2 px-4 pt-3 pb-2">
      {/* 1155 Tourist Police */}
      <button
        onClick={() => onCall('1155', 'ตำรวจท่องเที่ยว (Tourist Police)', 'แจ้งเหตุนักท่องเที่ยวต่างชาติ มีเจ้าหน้าที่ล่ามช่วยแปลภาษาอังกฤษ จีน รัสเซีย')}
        className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white border border-rose-200/80 shadow-xs hover:border-rose-400 hover:bg-rose-50/30 transition-all text-left"
      >
        <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 shrink-0">
          <Shield className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-rose-700 leading-none">1155</div>
          <div className="text-[11px] font-medium text-slate-600 truncate mt-0.5">ตำรวจท่องเที่ยว</div>
        </div>
      </button>

      {/* 1669 EMS - Prominently highlighted in Red */}
      <button
        onClick={() => onCall('1669', 'สถาบันการแพทย์ฉุกเฉินแห่งชาติ (EMS)', 'เรียกรถพยาบาลกู้ชีพฉุกเฉิน แจ้งตำแหน่งและอาการผู้ป่วยทันที')}
        className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm hover:from-red-700 hover:to-rose-700 transition-all text-left active:scale-[0.98]"
      >
        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white shrink-0">
          <Ambulance className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-white leading-none">1669</div>
          <div className="text-[11px] font-medium text-white/95 truncate mt-0.5">กู้ชีพฉุกเฉิน</div>
        </div>
      </button>

      {/* 191 Police Patrol */}
      <button
        onClick={() => onCall('191', 'เหตุด่วนเหตุร้าย (Police Patrol)', 'แจ้งเหตุด่วน เหตุอาชญากรรม อุบัติเหตุรุนแรง ทั่วประเทศ')}
        className="flex items-center gap-2 px-2.5 py-2 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 hover:bg-slate-50 transition-all text-left"
      >
        <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center text-slate-700 shrink-0">
          <Shield className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="text-sm font-extrabold text-slate-800 leading-none">191</div>
          <div className="text-[11px] font-medium text-slate-600 truncate mt-0.5">เหตุด่วนเหตุร้าย</div>
        </div>
      </button>
    </div>
  );
};
