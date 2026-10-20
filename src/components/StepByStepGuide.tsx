import React, { useState, useEffect } from 'react';
import { PlusSquare, Play, RotateCcw, Check, Sparkles } from 'lucide-react';
import { EmergencyCard } from '../types/emergency';

interface StepByStepGuideProps {
  card: EmergencyCard;
  onEmergencyCall: () => void;
}

export const StepByStepGuide: React.FC<StepByStepGuideProps> = ({ card, onEmergencyCall }) => {
  // 30 seconds timer for vinegar or CPR timing
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
      // Play completed sound or vibration
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
      {/* Container Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs overflow-hidden">
        {/* Header */}
        <div className="p-3.5 flex items-center justify-between border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
              <PlusSquare className="w-4 h-4" />
            </div>
            <h2 className="text-sm font-extrabold text-slate-900 tracking-tight">
              ขั้นตอนปฐมพยาบาล: {card.nameTh}
            </h2>
          </div>

          <div className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-bold text-blue-700">
            Step-by-step
          </div>
        </div>

        {/* Hero Photo with overlay caption */}
        <div className="relative aspect-16/9 w-full bg-slate-900 overflow-hidden">
          <img
            src={card.heroImage}
            alt={card.heroImageCaption}
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to Image 8 or 12
              (e.target as HTMLImageElement).src = '/assets/aistudio/Image_8_599d5503.jpeg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex items-end p-3.5">
            <div className="text-white text-xs sm:text-sm font-semibold leading-snug drop-shadow-md">
              {card.heroImageCaption}
            </div>
          </div>
        </div>

        {/* 30 Seconds Emergency Vinegar / Action Timer Bar */}
        {card.id === 'jellyfish' && (
          <div className="bg-amber-50/80 border-b border-amber-200/80 px-3.5 py-2.5 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-amber-950">
                ⏱️ ตัวช่วยจับเวลาราดน้ำส้มสายชู (30 วินาที)
              </div>
              <div className="text-[11px] text-amber-800">
                {timerSeconds === 0 ? 'ครบ 30 วินาทีแล้ว คีบสายออกได้!' : `เหลือเวลาอีก ${timerSeconds} วินาที`}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white shadow-xs transition-all ${
                  isTimerRunning
                    ? 'bg-amber-600 animate-pulse'
                    : timerSeconds === 0
                    ? 'bg-emerald-600'
                    : 'bg-slate-900 hover:bg-slate-800'
                }`}
              >
                {isTimerRunning ? 'หยุดชั่วคราว' : timerSeconds === 0 ? 'สำเร็จ' : <><Play className="w-3 h-3 fill-white" /> เริ่มจับเวลา</>}
              </button>
              <button
                onClick={resetTimer}
                title="รีเซ็ตเวลา"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 flex items-center justify-center"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* Steps List */}
        <div className="divide-y divide-slate-100 p-2">
          {card.stepsTh.map((step) => {
            const isDone = completedSteps[step.id];
            return (
              <div
                key={step.id}
                onClick={() => toggleStep(step.id)}
                className={`p-3 rounded-xl flex items-start gap-3 cursor-pointer transition-colors ${
                  isDone ? 'bg-emerald-50/50' : 'hover:bg-slate-50'
                }`}
              >
                {/* Number Circle / Checkbox */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 transition-colors ${
                    isDone
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-white'
                  }`}
                >
                  {isDone ? <Check className="w-4 h-4 stroke-[3]" /> : step.id}
                </div>

                <div className="min-w-0 flex-1">
                  <div className={`text-sm font-bold text-slate-900 leading-tight ${isDone ? 'line-through text-slate-500' : ''}`}>
                    {step.title}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
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
