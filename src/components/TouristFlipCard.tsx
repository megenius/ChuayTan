import React, { useState } from 'react';
import { RotateCw, Volume2, Asterisk } from 'lucide-react';
import { EmergencyCard, Language } from '../types/emergency';
import { speakText, stopSpeech } from '../utils/speech';

interface TouristFlipCardProps {
  card: EmergencyCard;
  language: Language;
  onOpenFullscreenFlip?: () => void;
}

export const TouristFlipCard: React.FC<TouristFlipCardProps> = ({
  card,
  language,
}) => {
  const [isFlipped180, setIsFlipped180] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

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

  return (
    <div className="px-4 py-2">
      {/* Handover Instruction Bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-xs font-bold text-red-600 leading-tight">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
          <span>
            ยื่นหน้าจอนี้ให้นักท่องเที่ยวอ่าน<br className="sm:hidden" />ทันที
          </span>
        </div>

        <button
          onClick={() => setIsFlipped180(!isFlipped180)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-2xl text-xs font-bold transition-all ${
            isFlipped180
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-[#dbeafe] text-[#1e40af] hover:bg-blue-200 border border-blue-200'
          }`}
          title="หมุนหน้าจอ 180 องศาให้ผู้ป่วยอ่าน"
        >
          <svg className={`w-4 h-4 transition-transform duration-300 ${isFlipped180 ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
            <path d="M12 18h.01" />
            <path d="M9 6a3 3 0 1 1 6 0" />
          </svg>
          <div className="text-[11px] leading-tight text-left">
            <div>กลับหัวจอ</div>
            <div>180°</div>
          </div>
        </button>
      </div>

      {/* Main Warning Box with optional 180 flip */}
      <div
        className={`transition-all duration-500 rounded-3xl bg-[#fff2f2] border border-[#fecaca] p-4 shadow-2xs ${
          isFlipped180 ? 'rotate-180 transform-gpu my-4 bg-blue-50/40 border-blue-300' : ''
        }`}
      >
        {/* Header Tag */}
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="text-[11px] font-black tracking-wider text-[#991b1b] uppercase">
            {translation.title}
          </div>
          <span className="text-red-600 font-bold text-base leading-none">✱</span>
        </div>

        {/* Big Bold Warning Text in Target Language */}
        <div className="text-[19px] sm:text-[21px] font-black text-[#580d19] leading-tight tracking-tight mb-3">
          {translation.criticalInstruction}
        </div>

        {/* Phonetic pronunciation section for Thai Rescuer */}
        <div className="bg-white rounded-2xl p-3 border border-red-100 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <svg className="w-4 h-4 text-slate-700 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 10c0 1.5-.8 2.8-2 3.4" />
                <path d="M19 7c1.3.8 2 2 2 3.5" />
              </svg>
              <span>คำอ่านออกเสียงช่วยพูด (Phonetic Speech)</span>
            </div>

            <button
              onClick={handleSpeak}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white transition-all shadow-xs shrink-0 ${
                isPlayingAudio
                  ? 'bg-amber-600 ring-2 ring-amber-300 animate-pulse'
                  : 'bg-[#009944] hover:bg-[#008039]'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <div className="text-[11px] leading-tight text-left">
                <div>กดออกเสียง</div>
                <div>ดังๆ</div>
              </div>
            </button>
          </div>

          {/* Thai Phonetic Text */}
          <div className="text-[13px] font-bold text-slate-900 leading-snug mt-1">
            {translation.phoneticThai}
          </div>

          {/* Meaning in Thai */}
          <div className="text-[11px] text-slate-500 leading-normal mt-1.5">
            <span>{translation.meaningThai}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
