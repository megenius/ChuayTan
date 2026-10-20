import React, { useState } from 'react';
import { Phone, PhoneOff, MapPin, Copy, Check, ShieldAlert, Volume2 } from 'lucide-react';
import { useUserLocation } from '../hooks/useEmergencyData';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber: string;
  serviceTitle: string;
  emergencyDetail: string;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  phoneNumber,
  serviceTitle,
  emergencyDetail,
}) => {
  const [copied, setCopied] = useState(false);
  const { data: location } = useUserLocation();

  if (!isOpen) return null;

  const handleCopyLocation = () => {
    const locText = `พิกัดแจ้งเหตุฉุกเฉิน: ละติจูด ${location?.lat}, ลองจิจูด ${location?.lng} (${location?.address})`;
    navigator.clipboard.writeText(locText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleActualCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-sm w-full p-5 shadow-2xl border border-slate-100 flex flex-col">
        {/* Calling Header */}
        <div className="text-center mb-4">
          <div className="w-16 h-16 rounded-full bg-red-100 text-red-600 mx-auto flex items-center justify-center mb-3 animate-bounce">
            <Phone className="w-8 h-8 fill-red-600 text-red-600" />
          </div>
          <div className="text-xs font-bold text-red-600 tracking-wider uppercase">
            กำลังเตรียมต่อสายด่วนฉุกเฉิน
          </div>
          <div className="text-3xl font-black text-slate-900 mt-1">
            {phoneNumber}
          </div>
          <div className="text-xs font-semibold text-slate-600 mt-0.5">
            {serviceTitle}
          </div>
        </div>

        {/* GPS location pill to report to operator */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-3 mb-4 text-left">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800 mb-1">
            <div className="flex items-center gap-1.5 text-blue-700">
              <MapPin className="w-3.5 h-3.5" />
              <span>ตำแหน่งปัจจุบันของคุณ:</span>
            </div>
            <button
              onClick={handleCopyLocation}
              className="flex items-center gap-1 text-[11px] text-blue-600 hover:text-blue-800 font-bold"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'คัดลอกแล้ว' : 'คัดลอกพิกัด'}</span>
            </button>
          </div>
          <div className="text-xs font-mono text-slate-900 font-semibold truncate">
            {location?.lat}, {location?.lng}
          </div>
          <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
            {location?.address}
          </div>
        </div>

        {/* 1669 Emergency Dispatch Checklist */}
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-3 text-left mb-4 text-xs text-amber-950">
          <div className="font-extrabold flex items-center gap-1.5 mb-1 text-amber-900">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-700" />
            <span>สคริปต์แจ้งเจ้าหน้าที่:</span>
          </div>
          <ol className="list-decimal list-inside space-y-1 text-[11px] leading-relaxed text-amber-900/90 font-medium">
            <li>บอกตำแหน่งชัดเจนและจุดสังเกต</li>
            <li>บอกว่ามีผู้ป่วยบาดเจ็บ: <b>{emergencyDetail}</b></li>
            <li>แจ้งระดับความรู้สึกตัว และการหายใจ</li>
            <li>วางสายเมื่อเจ้าหน้าที่บอกให้วางเท่านั้น</li>
          </ol>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-2 gap-2 mt-auto">
          <button
            onClick={onClose}
            className="h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <PhoneOff className="w-4 h-4" />
            <span>ยกเลิก</span>
          </button>

          <button
            onClick={handleActualCall}
            className="h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-red-600/20 active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>โทรออกทันที</span>
          </button>
        </div>
      </div>
    </div>
  );
};
