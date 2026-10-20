import React, { useState } from 'react';
import { Phone, MapPin, Copy, Check, ShieldCheck, Ambulance, HeartPulse, LifeBuoy, Car, AlertTriangle, ExternalLink } from 'lucide-react';
import { useHotlines, useUserLocation, LOCATION_UNKNOWN_TH } from '../../hooks/useEmergencyData';

interface HotlinesViewProps {
  onCall: (number: string, title: string, detail: string) => void;
}

export const HotlinesView: React.FC<HotlinesViewProps> = ({ onCall }) => {
  const { data: hotlines } = useHotlines();
  const { data: location } = useUserLocation();
  const [copied, setCopied] = useState(false);

  const handleCopyLocation = () => {
    const locText = `พิกัดแจ้งเหตุฉุกเฉิน สพฉ. 1669: ละติจูด ${location?.lat}, ลองจิจูด ${location?.lng} (${location?.address})`;
    navigator.clipboard.writeText(locText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'medical':
        return <Ambulance className="w-5 h-5 text-red-600" />;
      case 'police':
        return <ShieldCheck className="w-5 h-5 text-blue-600" />;
      case 'poison':
        return <HeartPulse className="w-5 h-5 text-emerald-600" />;
      case 'marine':
        return <LifeBuoy className="w-5 h-5 text-cyan-600" />;
      default:
        return <Phone className="w-5 h-5 text-slate-600" />;
    }
  };

  return (
    <div className="pb-24 pt-2 px-4 max-w-lg mx-auto">
      {/* EMS Hero Banner with Image 8 */}
      <div className="relative rounded-2xl overflow-hidden mb-3 border border-slate-200 shadow-2xs">
        <div className="aspect-21/9 w-full bg-slate-900">
          <img
            src="/assets/aistudio/Image_8_599d5503.jpeg"
            alt="หน่วยกู้ชีพฉุกเฉิน 1669 และสถาบันการแพทย์ฉุกเฉินแห่งชาติ"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex items-end p-3.5">
            <div>
              <div className="text-white text-xs font-black flex items-center gap-1.5">
                <Ambulance className="w-4 h-4 text-red-400" />
                <span>สายด่วนการแพทย์ฉุกเฉินและกู้ชีพประเทศไทย</span>
              </div>
              <p className="text-[11px] text-white/85">
                บริการฟรีตลอด 24 ชั่วโมง พร้อมระบบแจ้งพิกัดดาวเทียม
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Live GPS Coordinates Card */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-4 border border-blue-200/90 shadow-2xs mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>พิกัดระบุตำแหน่งสำหรับแจ้ง 1669:</span>
          </div>
          {location && (
            <button
              onClick={handleCopyLocation}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-bold shadow-2xs transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'คัดลอกพิกัดแล้ว' : 'คัดลอกพิกัด'}</span>
            </button>
          )}
        </div>

        <div className="bg-white/95 rounded-xl p-2.5 border border-blue-100 mb-2">
          <div className="text-sm font-mono font-bold text-slate-900">
            {location ? `${location.lat}, ${location.lng}` : LOCATION_UNKNOWN_TH}
          </div>
          {location && (
            <div className="text-xs text-slate-600 mt-0.5 line-clamp-1">
              {location.address}
            </div>
          )}
        </div>

        <p className="text-[11px] text-blue-800 leading-normal">
          💡 เมื่อโทร 1669 ให้แจ้งพิกัดตัวเลขนี้แก่เจ้าหน้าที่ศูนย์สั่งการ เพื่อให้รถพยาบาลนำทางด้วย GPS ได้แม่นยำที่สุด
        </p>
      </div>

      {/* Emergency Hotlines Directory */}
      <div className="space-y-2.5">
        <div className="text-xs font-bold text-slate-700 px-1">
          หมายเลขสายด่วนหลักในประเทศไทย :
        </div>

        {hotlines?.map((h) => (
          <div
            key={h.number}
            className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
              h.isPrimary
                ? 'bg-white border-red-200/90 shadow-xs ring-1 ring-red-100'
                : 'bg-white border-slate-200 shadow-2xs hover:border-slate-300'
            }`}
          >
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 mt-0.5 border border-slate-100">
                {getIcon(h.category)}
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black text-slate-900 leading-tight">
                    {h.number}
                  </span>
                  {h.badge && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {h.badge}
                    </span>
                  )}
                </div>
                <div className="text-xs font-bold text-slate-800 truncate mt-0.5">
                  {h.nameTh}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                  {h.descriptionTh}
                </div>
              </div>
            </div>

            <button
              onClick={() => onCall(h.number, h.nameTh, h.descriptionTh)}
              className={`flex items-center gap-1 px-3.5 py-2.5 rounded-xl font-extrabold text-xs shrink-0 shadow-xs active:scale-95 transition-all ${
                h.isPrimary
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>โทร</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
