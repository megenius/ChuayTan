import React, { useState } from 'react';
import { RotateCw, Volume2, Asterisk, Sparkles, AlertCircle } from 'lucide-react';
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
  onOpenFullscreenFlip,
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
        <div className="flex items-center gap-2 text-xs font-bold text-red-600">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
          </span>
          <span>ยื่นหน้าจอนี้ให้นักท่องเที่ยวอ่านทันที</span>
        </div>

        <button
          onClick={() => setIsFlipped180(!isFlipped180)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-2xs ${
            isFlipped180
              ? 'bg-blue-600 text-white'
              : 'bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200/80'
          }`}
          title="หมุนหน้าจอให้อีกฝั่งอ่าน"
        >
          <RotateCw className={`w-3.5 h-3.5 transition-transform duration-300 ${isFlipped180 ? 'rotate-180' : ''}`} />
          <span>{isFlipped180 ? 'กลับจอปกติ' : 'กลับหัวจอ 180°'}</span>
        </button>
      </div>

      {/* Main Warning Box with optional 180 flip */}
      <div
        className={`transition-all duration-500 rounded-2xl bg-gradient-to-b from-rose-50/90 to-red-50/50 border-2 border-red-200/90 p-4 shadow-sm ${
          isFlipped180 ? 'rotate-180 transform-gpu my-3 border-blue-400 bg-blue-50/30' : ''
        }`}
      >
        {/* Header Tag */}
        <div className="flex items-center justify-between gap-2 mb-2 pb-2 border-b border-red-200/60">
          <div className="text-[12px] font-extrabold tracking-wider text-rose-800 uppercase">
            {translation.title}
          </div>
          <Asterisk className="w-5 h-5 text-red-600 animate-spin-slow" />
        </div>

        {/* Big Bold Warning Text in Target Language */}
        <div className="text-xl sm:text-2xl font-black text-rose-950 leading-snug tracking-tight mb-4">
          {translation.criticalInstruction}
        </div>

        {/* Phonetic pronunciation section for Thai Rescuer */}
        <div className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-red-100 shadow-2xs">
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
              <span className="text-sm">🗣️</span>
              <span>คำอ่านออกเสียงช่วยพูด (Phonetic Speech)</span>
            </div>

            <button
              onClick={handleSpeak}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white transition-all shadow-xs active:scale-95 ${
                isPlayingAudio
                  ? 'bg-amber-600 ring-2 ring-amber-300 animate-pulse'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isPlayingAudio ? 'กำลังเล่นเสียง...' : 'กดออกเสียงดังๆ'}</span>
            </button>
          </div>

          {/* Thai Phonetic Text */}
          <div className="text-sm font-bold text-slate-900 bg-amber-50/60 p-2.5 rounded-lg border border-amber-200/60 leading-relaxed mb-2">
            {translation.phoneticThai}
          </div>

          {/* Meaning in Thai */}
          <div className="text-xs text-slate-600 leading-normal">
            <span className="font-semibold text-slate-700">(ความหมาย: </span>
            <span>{translation.meaningThai}</span>
            <span className="font-semibold text-slate-700">)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
