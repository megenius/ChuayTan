import React from 'react';
import { PhoneCall, Shield, HeartPulse, Ambulance } from 'lucide-react';

interface EmergencyActionPanelProps {
  onCall: (number: string, title: string, detail: string) => void;
  categoryNameTh?: string;
}

export const EmergencyActionPanel: React.FC<EmergencyActionPanelProps> = ({
  onCall,
  categoryNameTh = 'สัตว์มีพิษกัด/ต่อย',
}) => {
  return (
    <div className="px-4 py-2">
      <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-2">
        <span>กดโทรขอความช่วยเหลือเร่งด่วน :</span>
        <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          ฟรี 24 ชม.
        </span>
      </div>

      {/* Primary 1669 Dispatch Card */}
      <div className="rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white p-3.5 shadow-md mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
            <Ambulance className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-base font-black leading-tight text-white flex items-center gap-1.5">
              <span>โทร 1669</span>
              <span className="text-xs font-semibold text-white/90">แพทย์ฉุกเฉิน / กู้ชีพ</span>
            </div>
            <div className="text-[11px] text-white/80 truncate mt-0.5">
              แจ้งตำแหน่งทันที ระบุว่าถูก{categoryNameTh}
            </div>
          </div>
        </div>

        <button
          onClick={() =>
            onCall(
              '1669',
              'สายด่วนกู้ชีพ 1669 (EMS Thailand)',
              `แจ้งเหตุด่วน: มีผู้ป่วยบาดเจ็บจาก ${categoryNameTh} ต้องการรถพยาบาลฉุกเฉินระดับสูงด่วนที่สุด`
            )
          }
          className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white text-red-600 font-extrabold text-xs shadow-sm hover:bg-red-50 active:scale-95 transition-all shrink-0"
        >
          <PhoneCall className="w-4 h-4 fill-red-600" />
          <span>กดโทร</span>
        </button>
      </div>

      {/* Secondary Contacts (1155 & 1367) */}
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() =>
            onCall(
              '1155',
              'ตำรวจท่องเที่ยว (Tourist Police)',
              'ต้องการล่ามช่วยแปลภาษาและประสานงานเหตุด่วนกับนักท่องเที่ยวชาวต่างชาติ'
            )
          }
          className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50 transition-all text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <Shield className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-slate-900 leading-none">1155</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">ตร. ท่องเที่ยว (ล่าม)</div>
            </div>
          </div>
          <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
        </button>

        <button
          onClick={() =>
            onCall(
              '1367',
              'ศูนย์พิษวิทยารามาธิบดี',
              'ปรึกษาแนวทางการรักษาพิษสัตว์ การให้เซรุ่มต้านพิษ และการส่งต่อโรงพยาบาล'
            )
          }
          className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50 transition-all text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <HeartPulse className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-slate-900 leading-none">1367</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">ศูนย์พิษวิทยา (เซรุ่ม)</div>
            </div>
          </div>
          <PhoneCall className="w-3.5 h-3.5 text-slate-400" />
        </button>
      </div>
    </div>
  );
};
