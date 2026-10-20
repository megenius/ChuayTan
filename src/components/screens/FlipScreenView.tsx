import React, { useState } from 'react';
import { RotateCw, Volume2, CheckCircle2, XCircle, HeartPulse, ShieldAlert, Sparkles, AlertTriangle } from 'lucide-react';
import { EmergencyCard, Language } from '../../types/emergency';
import { speakText, stopSpeech } from '../../utils/speech';

interface FlipScreenViewProps {
  card: EmergencyCard;
  selectedCategory: string;
  onSelectCategory: (cat: any) => void;
  cards: EmergencyCard[];
}

export const FlipScreenView: React.FC<FlipScreenViewProps> = ({
  card,
  selectedCategory,
  onSelectCategory,
  cards,
}) => {
  const [language, setLanguage] = useState<Language>('EN');
  const [isFlipped180, setIsFlipped180] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [touristResponse, setTouristResponse] = useState<string | null>(null);

  const translation = card.translations[language] || card.translations.EN;

  const handleSpeak = async () => {
    if (isPlayingAudio) {
      stopSpeech();
      setIsPlayingAudio(false);
      return;
    }

    setIsPlayingAudio(true);
    await speakText(translation.criticalInstruction, language);
    setIsPlayingAudio(false);
  };

  const touristResponses = [
    { id: 'yes', labelEn: 'YES / UNDERSTOOD', labelTh: 'เข้าใจแล้ว / ใช่', color: 'bg-emerald-600' },
    { id: 'no', labelEn: 'NO / I DO NOT UNDERSTAND', labelTh: 'ไม่เข้าใจ / ไม่ใช่', color: 'bg-slate-700' },
    { id: 'pain_high', labelEn: 'SEVERE PAIN (8-10)', labelTh: 'เจ็บปวดรุนแรงมาก', color: 'bg-red-600' },
    { id: 'cannot_breathe', labelEn: 'CANNOT BREATHE', labelTh: 'หายใจไม่ออก / แน่นหน้าอก', color: 'bg-rose-700' },
    { id: 'allergies', labelEn: 'I HAVE ALLERGIES', labelTh: 'มีประวัติแพ้ยา', color: 'bg-amber-600' },
    { id: 'insurance', labelEn: 'I HAVE TRAVEL INSURANCE', labelTh: 'มีประกันสุขภาพนักท่องเที่ยว', color: 'bg-blue-600' },
  ];

  return (
    <div className="pb-24 pt-2 px-4 max-w-lg mx-auto">
      {/* Top Controls: Flip 180 button & Language selector */}
      <div className="flex items-center justify-between gap-2 mb-3 bg-white p-2 rounded-2xl border border-slate-200/90 shadow-2xs">
        {/* 180° Flip Toggle */}
        <button
          onClick={() => setIsFlipped180(!isFlipped180)}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold transition-all ${
            isFlipped180
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
          }`}
        >
          <RotateCw className={`w-4 h-4 transition-transform duration-300 ${isFlipped180 ? 'rotate-180' : ''}`} />
          <span>{isFlipped180 ? 'มุมมองปกติ' : 'กลับหัวจอ 180° (ให้ผู้ป่วยอ่าน)'}</span>
        </button>

        {/* Language Tabs */}
        <div className="flex items-center gap-1">
          {(['EN', '中文', 'RU', 'DE', 'JA'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setLanguage(l)}
              className={`px-2 py-1 text-xs font-bold rounded-lg transition-colors ${
                language === l ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Emergency condition switcher */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar mb-2">
        {cards.map((c) => (
          <button
            key={c.id}
            onClick={() => onSelectCategory(c.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 flex items-center gap-1.5 transition-all ${
              selectedCategory === c.id
                ? 'bg-red-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700'
            }`}
          >
            <span>{c.icon}</span>
            <span>{c.nameTh}</span>
          </button>
        ))}
      </div>

      {/* Handover Notice */}
      <div className="flex items-center justify-between px-1 mb-2">
        <div className="flex items-center gap-1.5 text-xs font-bold text-red-600">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span>ยื่นหน้าจอนี้ให้นักท่องเที่ยวอ่านโดยตรง</span>
        </div>
        <span className="text-[11px] text-slate-500 font-medium">กดปุ่มสีเขียวเพื่อให้ระบบพูดดังๆ</span>
      </div>

      {/* Flip Container */}
      <div
        className={`transition-all duration-500 ${
          isFlipped180 ? 'rotate-180 transform-gpu my-6' : ''
        }`}
      >
        {/* Giant Warning Card for Tourist */}
        <div className="rounded-3xl bg-gradient-to-b from-red-600 via-rose-600 to-red-700 text-white p-5 shadow-xl border-4 border-white/40 mb-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/20 mb-4">
            <div className="text-xs font-black tracking-widest uppercase text-red-100 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-300" />
              <span>{translation.title}</span>
            </div>
            <div className="text-[11px] font-bold bg-white/20 px-2.5 py-0.5 rounded-full text-white">
              {language}
            </div>
          </div>

          {/* Huge typography */}
          <div className="text-2xl sm:text-3xl font-black text-white leading-tight tracking-tight drop-shadow-sm mb-4">
            {translation.criticalInstruction}
          </div>

          {/* Loud Audio Playback Button */}
          <button
            onClick={handleSpeak}
            className={`w-full py-3.5 px-4 rounded-2xl font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg active:scale-98 ${
              isPlayingAudio
                ? 'bg-amber-400 text-slate-900 ring-4 ring-amber-300 animate-pulse'
                : 'bg-emerald-500 hover:bg-emerald-400 text-white shadow-emerald-700/30'
            }`}
          >
            <Volume2 className="w-5 h-5 fill-current" />
            <span>{isPlayingAudio ? 'PLAYING EMERGENCY AUDIO...' : 'PLAY AUDIO LOUDLY (กดออกเสียงดังๆ)'}</span>
          </button>
        </div>

        {/* Tourist Interactive Responses */}
        <div className="bg-white rounded-3xl p-4 border border-slate-200/90 shadow-2xs">
          <div className="text-center mb-3">
            <h3 className="text-sm font-extrabold text-slate-900">
              TOUCH TO ANSWER / แตะหน้าจอเพื่อตอบ
            </h3>
            <p className="text-[11px] text-slate-500">
              ให้นักท่องเที่ยวแตะตัวเลือกด้านล่างเพื่อสื่อสารทันที
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {touristResponses.map((res) => {
              const isSelected = touristResponse === res.id;
              return (
                <button
                  key={res.id}
                  onClick={() => setTouristResponse(res.id)}
                  className={`p-3 rounded-2xl text-left transition-all border ${
                    isSelected
                      ? `${res.color} text-white border-transparent shadow-md scale-[1.02]`
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                  }`}
                >
                  <div className={`text-xs font-black leading-tight ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                    {res.labelEn}
                  </div>
                  <div className={`text-[11px] font-medium mt-0.5 leading-tight ${isSelected ? 'text-white/90' : 'text-slate-500'}`}>
                    {res.labelTh}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active selection feedback */}
          {touristResponse && (
            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center">
              <span className="text-xs font-bold text-emerald-800">
                ผู้ป่วยเลือก: {touristResponses.find((r) => r.id === touristResponse)?.labelTh}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
