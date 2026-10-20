import React, { useState, useEffect } from 'react';
import { Play, RotateCcw, Check } from 'lucide-react';
import { EmergencyCard } from '../types/emergency';

interface StepByStepGuideProps {
  card: EmergencyCard;
  onEmergencyCall: () => void;
}

export const StepByStepGuide: React.FC<StepByStepGuideProps> = ({ card }) => {
  const [timerSeconds, setTimerSeconds] = useState(30);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<Record<number, boolean>>({});

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 400]);
      }
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, timerSeconds]);

  const toggleStep = (id: number) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimerSeconds(30);
  };

  return (
    <div className="px-4 py-2">
      {/* Container */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xs p-3.5">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-slate-900 text-white flex items-center justify-center shrink-0">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M12 8v8" />
                <path d="M8 12h8" />
              </svg>
            </div>
            <div className="text-[14px] font-extrabold text-slate-900 leading-tight">
              <div>ขั้นตอนปฐมพยาบาล:</div>
              <div>{card.nameTh}</div>
            </div>
          </div>

          <div className="px-3 py-1 rounded-2xl bg-[#e0e7ff] text-[#3730a3] text-[11px] font-bold text-center leading-tight">
            <div>Step-by-</div>
            <div>step</div>
          </div>
        </div>

        {/* Hero Photo Banner */}
        <div className="rounded-2xl overflow-hidden mb-3 border border-slate-200/60 shadow-2xs">
          <img
            src={card.heroImage}
            alt={card.heroImageCaption}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Interactive 30s Vinegar Timer Bar */}
        {card.id === 'jellyfish' && (
          <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-2.5 mb-3 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-amber-950">
                ⏱️ จับเวลาราดน้ำส้มสายชู 30 วิ
              </div>
              <div className="text-[11px] text-amber-800">
                {timerSeconds === 0 ? 'ครบ 30 วินาทีแล้ว' : `เหลืออีก ${timerSeconds} วินาที`}
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`px-2.5 py-1.5 rounded-xl text-xs font-bold text-white transition-all shadow-xs ${
                  isTimerRunning
                    ? 'bg-amber-600 animate-pulse'
                    : timerSeconds === 0
                    ? 'bg-emerald-600'
                    : 'bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {isTimerRunning ? 'หยุด' : timerSeconds === 0 ? 'สำเร็จ' : 'เริ่มจับเวลา'}
              </button>
              <button
                onClick={resetTimer}
                title="รีเซ็ตเวลา"
                className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-600 flex items-center justify-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Steps List */}
        <div className="space-y-2">
          {card.stepsTh.map((step) => {
            const isDone = completedSteps[step.id];
            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                className={`p-3 rounded-2xl bg-[#f8fafc] border border-slate-200/70 flex items-start gap-3 cursor-pointer transition-colors ${
                  isDone ? 'bg-emerald-50/60 border-emerald-200' : 'hover:bg-slate-100/60'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                    isDone ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-white'
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : step.id}
                </div>

                <div className="min-w-0 flex-1">
                  <div className={`text-xs font-bold text-slate-900 leading-tight ${isDone ? 'line-through text-slate-500' : ''}`}>
                    {step.title}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
