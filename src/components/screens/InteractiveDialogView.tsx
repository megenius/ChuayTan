import React, { useState } from 'react';
import { Volume2, Languages, MessageCircle, Check, HelpCircle, Shield } from 'lucide-react';
import { usePhrasebook } from '../../hooks/useEmergencyData';
import { Language } from '../../types/emergency';
import { speakText, stopSpeech } from '../../utils/speech';

export const InteractiveDialogView: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<Language>('EN');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [activeSpeechId, setActiveSpeechId] = useState<string | null>(null);

  const { data: phrases, isLoading } = usePhrasebook(categoryFilter);

  const handleSpeak = async (id: string, text: string) => {
    if (activeSpeechId === id) {
      stopSpeech();
      setActiveSpeechId(null);
      return;
    }

    setActiveSpeechId(id);
    await speakText(text, selectedLang);
    setActiveSpeechId(null);
  };

  const categories = [
    { id: 'all', label: 'ทั้งหมด' },
    { id: 'symptoms', label: 'สอบถามอาการ' },
    { id: 'medical_history', label: 'ประวัติแพ้ยา' },
    { id: 'instructions', label: 'คำสั่งฉุกเฉิน' },
    { id: 'reassurance', label: 'ปลอบขวัญ' },
  ];

  return (
    <div className="pb-24 pt-2 px-4 max-w-lg mx-auto">
      {/* Banner with Thai Tourist Police image */}
      <div className="relative rounded-2xl overflow-hidden mb-3 border border-slate-200 shadow-2xs">
        <div className="aspect-21/9 w-full bg-slate-900">
          <img
            src="/assets/aistudio/Image_9_e5d95098.jpeg"
            alt="เจ้าหน้าที่ตำรวจท่องเที่ยวและกู้ภัยสื่อสารกับนักท่องเที่ยว"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex items-end p-3">
            <div>
              <div className="text-white text-xs font-bold flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>ล่ามฉุกเฉินและบทสนทนาช่วยเหลือนักท่องเที่ยว</span>
              </div>
              <p className="text-[11px] text-white/80">
                พร้อมคำอ่านภาษาไทย ช่วยให้ออกเสียงภาษาต่างประเทศได้ทันที
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Language Toggle Bar */}
      <div className="bg-white p-2 rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
          <Languages className="w-4 h-4 text-blue-600" />
          <span>ภาษาเป้าหมาย:</span>
        </div>

        <div className="flex items-center gap-1">
          {(['EN', '中文', 'RU', 'DE', 'JA'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => setSelectedLang(l)}
              className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-colors ${
                selectedLang === l ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar mb-3">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setCategoryFilter(c.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-colors ${
              categoryFilter === c.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Phrases List */}
      <div className="space-y-3">
        {isLoading ? (
          <div className="p-8 text-center text-xs text-slate-500">กำลังโหลดบทสนทนา...</div>
        ) : (
          phrases?.map((phrase) => {
            const trans = phrase.translations[selectedLang] || phrase.translations.EN;
            const isPlaying = activeSpeechId === phrase.id;

            return (
              <div
                key={phrase.id}
                className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all"
              >
                {/* Thai Prompt */}
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full">
                    {phrase.categoryTh}
                  </span>
                  <button
                    onClick={() => handleSpeak(phrase.id, trans.text)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white transition-all shadow-xs ${
                      isPlaying
                        ? 'bg-amber-600 ring-2 ring-amber-300 animate-pulse'
                        : 'bg-emerald-600 hover:bg-emerald-700'
                    }`}
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{isPlaying ? 'กำลังออกเสียง...' : 'กดออกเสียง'}</span>
                  </button>
                </div>

                <div className="text-sm font-bold text-slate-900 mb-2">
                  🇹🇭 {phrase.thText}
                </div>

                {/* Target Translation */}
                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-2">
                  <div className="text-sm font-extrabold text-blue-950 mb-1 leading-snug">
                    {trans.text}
                  </div>
                  <div className="text-xs font-medium text-amber-800 bg-amber-50/80 px-2 py-1 rounded-md border border-amber-200/50 leading-relaxed">
                    🗣️ คำอ่าน: <b>{trans.phonetic}</b>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
