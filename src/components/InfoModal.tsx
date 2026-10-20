import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, HeartPulse, Smartphone, Users } from 'lucide-react';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState('hotel_staff');

  if (!isOpen) return null;

  const roles = [
    { id: 'hotel_staff', title: 'เจ้าหน้าที่โรงแรม / รีสอร์ต', desc: 'ดูแลนักท่องเที่ยวและแจ้งเหตุเบื้องต้น' },
    { id: 'tour_guide', title: 'มัคคุเทศก์ / ไกด์นำเที่ยว', desc: 'พานักท่องเที่ยวทำกิจกรรมทางทะเลและธรรมชาติ' },
    { id: 'lifeguard', title: 'ไลฟ์การ์ด / กู้ชีพชายหาด', desc: 'ปฐมพยาบาลสัตว์มีพิษและช่วยคนจมน้ำ' },
    { id: 'police', title: 'ตำรวจท่องเที่ยว / เจ้าหน้าที่สายตรวจ', desc: 'ประสานงานล่ามและนำส่งโรงพยาบาล' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-5 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                เกี่ยวกับการ์ดช่วยนักท่องเที่ยว
              </h3>
              <p className="text-[11px] text-emerald-600 font-semibold">
                Thailand Emergency Medical Protocol
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
          <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
            <div className="font-bold text-slate-900 text-sm mb-1">
              มาตรฐานการแพทย์ฉุกเฉินแห่งชาติ (สพฉ. 1669)
            </div>
            <p>
              แอปพลิเคชันนี้ออกแบบมาเพื่อลดอุปสรรคทางภาษาในนาทีชีวิต (Golden Hour) โดยรวมแนวทางปฐมพยาบาลที่ถูกต้องตามมาตรฐานสากล พร้อมคำอ่านออกเสียงภาษาไทย ระบบกลับหัวจอ 180 องศา และเสียงพูดช่วยสั่งการ
            </p>
          </div>

          <div>
            <div className="font-bold text-slate-800 text-xs mb-2 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-600" />
              <span>โหมดผู้ใช้งานปัจจุบัน :</span>
            </div>
            <div className="space-y-2">
              {roles.map((r) => (
                <div
                  key={r.id}
                  onClick={() => setSelectedRole(r.id)}
                  className={`p-2.5 rounded-xl border cursor-pointer transition-all ${
                    selectedRole === r.id
                      ? 'border-blue-600 bg-blue-50/50'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-xs">{r.title}</span>
                    {selectedRole === r.id && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <button
          onClick={onClose}
          className="w-full mt-4 h-11 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
        >
          เข้าใจแล้ว / ปิดหน้าต่าง
        </button>
      </div>
    </div>
  );
};
