import React from 'react';
import { Phone, Ambulance } from 'lucide-react';

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
        <span className="text-[#c81e2b] font-bold">
          ฟรี 24 ชม.
        </span>
      </div>

      {/* Primary 1669 Dispatch Card */}
      <div className="rounded-2xl bg-[#c81e2b] text-white p-3 shadow-xs mb-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Ambulance className="w-5 h-5 text-white" />
          </div>
          <div className="min-w-0">
            <div className="text-[13px] font-black leading-tight text-white flex items-center gap-1">
              <span>โทร 1669</span>
              <span className="text-xs font-medium text-white/95">แพทย์ฉุกเฉิน / กู้ชีพ</span>
            </div>
            <div className="text-[10px] text-white/80 truncate mt-0.5">
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
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#a61320] border border-white/20 text-white font-bold text-xs shadow-2xs hover:bg-[#92101b] active:scale-95 transition-all shrink-0"
        >
          <Phone className="w-3.5 h-3.5 fill-white text-white" />
          <div className="text-[10px] leading-tight text-left">
            <div>กด</div>
            <div>โทร</div>
          </div>
        </button>
      </div>

      {/* Secondary Contacts (1155 & 1367) */}
      <div className="grid grid-cols-2 gap-2">
        {/* 1155 */}
        <button
          onClick={() =>
            onCall(
              '1155',
              'ตำรวจท่องเที่ยว (Tourist Police)',
              'ต้องการล่ามช่วยแปลภาษาและประสานงานเหตุด่วนกับนักท่องเที่ยวชาวต่างชาติ'
            )
          }
          className="flex items-center justify-between p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50 transition-all text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center text-red-600 shrink-0">
              <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-red-600 leading-none">1155</div>
              <div className="text-[10px] font-bold text-slate-800 truncate mt-0.5">ตร. ท่องเที่ยว</div>
              <div className="text-[9px] text-slate-500 truncate">ล่ามช่วยแปล</div>
            </div>
          </div>
          <Phone className="w-3 h-3 text-slate-600 shrink-0" />
        </button>

        {/* 1367 */}
        <button
          onClick={() =>
            onCall(
              '1367',
              'ศูนย์พิษวิทยารามาธิบดี',
              'ปรึกษาแนวทางการรักษาพิษสัตว์ การให้เซรุ่มต้านพิษ และการส่งต่อโรงพยาบาล'
            )
          }
          className="flex items-center justify-between p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:bg-slate-50 transition-all text-left"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 flex items-center justify-center text-emerald-600 shrink-0">
              <svg className="w-5 h-5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v20" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <div className="min-w-0">
              <div className="text-xs font-black text-slate-900 leading-none">1367</div>
              <div className="text-[10px] font-bold text-slate-800 truncate mt-0.5">ศูนย์พิษวิทยา</div>
              <div className="text-[9px] text-slate-500 truncate">รามาธิบดี ปรึกษาเซรุ่ม</div>
            </div>
          </div>
          <Phone className="w-3 h-3 text-slate-600 shrink-0" />
        </button>
      </div>
    </div>
  );
};
