import React from 'react';
import { Share2, X, User, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  onOpenInfo?: () => void;
  onOpenProfile?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenInfo, onOpenProfile }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'การ์ดช่วยนักท่องเที่ยว - Tourist First Aid Guide',
          text: 'คู่มือปฐมพยาบาลฉุกเฉินและสื่อสารนักท่องเที่ยว พร้อมใช้งานออฟไลน์',
          url: window.location.href,
        });
      } catch (err) {
        // Share cancelled or not supported
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('คัดลอกลิงก์การ์ดฉุกเฉินแล้ว');
    }
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 py-2.5 flex items-center justify-between">
      {/* Brand logo & status */}
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-sm shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-teal-400 opacity-90" />
          <svg className="w-5 h-5 relative z-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M12 7v6" />
            <path d="M9 10h6" />
          </svg>
        </div>
        <div>
          <h1 className="text-base font-bold text-slate-900 tracking-tight leading-tight">
            การ์ดช่วยนักท่องเที่ยว
          </h1>
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>พร้อมใช้ออฟไลน์</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-1.5">
        <button
          onClick={handleShare}
          title="แชร์การ์ด"
          aria-label="แชร์การ์ดฉุกเฉิน"
          className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <Share2 className="w-4 h-4" />
        </button>
        <button
          onClick={onOpenInfo}
          title="เกี่ยวกับระบบ"
          aria-label="ข้อมูลระบบ"
          className="w-9 h-9 rounded-full flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <button
          onClick={onOpenProfile}
          title="โปรไฟล์ผู้กู้ชีพ"
          aria-label="โปรไฟล์ผู้ใช้งาน"
          className="w-9 h-9 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 transition-colors shadow-sm ml-0.5"
        >
          <User className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};
