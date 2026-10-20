import React from 'react';
import { Share2, X, User } from 'lucide-react';

interface HeaderProps {
  onOpenInfo?: () => void;
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInfo, onOpenProfile }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ช่วยทัน (ChuayTan)',
          text: 'คู่มือปฐมพยาบาลฉุกเฉินและสื่อสารนักท่องเที่ยว',
          url: window.location.href,
        });
      } catch (err) {
        // Share cancelled
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('คัดลอกลิงก์การ์ดฉุกเฉินแล้ว');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/98 backdrop-blur-md border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
      {/* Brand logo & status */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-slate-950 flex items-center justify-center shadow-xs shrink-0 p-1">
          {/* Green chat bubble with medical cross */}
          <div className="w-full h-full rounded-lg bg-emerald-500 flex items-center justify-center text-white relative">
            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v6h6a2 2 0 0 1 2 2h0a2 2 0 0 1-2 2h-6v6a2 2 0 0 1-2 2h0a2 2 0 0 1-2-2v-6H4a2 2 0 0 1-2-2h0a2 2 0 0 1 2-2h6V4z" />
            </svg>
          </div>
        </div>
        <div>
          <h1 className="text-[15px] font-bold text-slate-900 tracking-tight leading-tight">
            การ์ดช่วยนักท่องเที่ยว
          </h1>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={handleShare}
          title="แชร์การ์ด"
          aria-label="แชร์การ์ดฉุกเฉิน"
          className="text-slate-700 hover:text-slate-950 p-1 transition-colors"
        >
          <Share2 className="w-5 h-5 stroke-[1.8]" />
        </button>
        <button
          onClick={onOpenInfo}
          title="เกี่ยวกับระบบ"
          aria-label="ข้อมูลระบบ"
          className="text-slate-700 hover:text-slate-950 p-1 transition-colors"
        >
          <X className="w-5 h-5 stroke-[1.8]" />
        </button>
        <button
          onClick={onOpenProfile}
          title="โปรไฟล์ผู้กู้ชีพ"
          aria-label="โปรไฟล์ผู้ใช้งาน"
          className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-xs ml-0.5"
        >
          <User className="w-4 h-4 fill-white" />
        </button>
      </div>
    </header>
  );
};
