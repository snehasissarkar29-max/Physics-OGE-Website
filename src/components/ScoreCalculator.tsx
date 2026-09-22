import React, { useState } from 'react';
import { Calculator, Target, Zap, Clock, ShieldCheck, ArrowRight, Award } from 'lucide-react';

interface ScoreCalculatorProps {
  onOpenBookingWithGoal: (goalSummary: string) => void;
}

export const ScoreCalculator: React.FC<ScoreCalculatorProps> = ({ onOpenBookingWithGoal }) => {
  const [examType, setExamType] = useState<'ege' | 'oge'>('ege');
  const [currentScore, setCurrentScore] = useState<number>(45);
  const [targetScore, setTargetScore] = useState<number>(85);
  const [monthsLeft, setMonthsLeft] = useState<number>(8);

  // Score delta
  const scoreDelta = Math.max(0, targetScore - currentScore);
  const pointsPerMonth = monthsLeft > 0 ? (scoreDelta / monthsLeft).toFixed(1) : '0';

  // Recommended hours based on delta
  let recommendedWeeklyLessons = 2;
  let recommendedFormat = 'Мини-группа или Индивидуальный Стандарт';
  let intensityBadge = 'Оптимальный темп';

  if (scoreDelta > 40 && monthsLeft <= 6) {
    recommendedWeeklyLessons = 3;
    recommendedFormat = 'Индивидуальный «Интенсив»';
    intensityBadge = 'Интенсивный режим';
  } else if (scoreDelta <= 20) {
    recommendedWeeklyLessons = 1.5;
    recommendedFormat = 'Мини-группа (3–5 человек)';
    intensityBadge = 'Спокойный режим';
  }

  const handleBookGoal = () => {
    const summary = `${examType.toUpperCase()}: текущий ${currentScore} б. → цель ${targetScore} б. за ${monthsLeft} мес.`;
    onOpenBookingWithGoal(summary);
  };

  return (
    <section id="calculator" className="py-20 bg-[#0b0f19] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
            Калькулятор подготовки
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Рассчитайте план выхода на желаемый балл
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Укажите текущий уровень и цель — калькулятор подскажет необходимую нагрузку и оптимальный формат для гарантированного результата.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="md:col-span-7 space-y-6">
              {/* Exam switcher */}
              <div>
                <label className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-2">
                  Экзамен:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setExamType('ege');
                      setCurrentScore(45);
                      setTargetScore(85);
                    }}
                    className={`py-2.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      examType === 'ege'
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    ЕГЭ (10–11 класс)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setExamType('oge');
                      setCurrentScore(20);
                      setTargetScore(40);
                    }}
                    className={`py-2.5 px-4 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                      examType === 'oge'
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    ОГЭ (9 класс)
                  </button>
                </div>
              </div>

              {/* Slider 1: Current Score */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Текущий ориентировочный балл:</span>
                  <span className="font-extrabold text-white text-base">
                    {currentScore} {examType === 'ege' ? 'баллов из 100' : 'из 45'}
                  </span>
                </div>
                <input
                  type="range"
                  min={examType === 'ege' ? 25 : 10}
                  max={examType === 'ege' ? 75 : 30}
                  step={1}
                  value={currentScore}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setCurrentScore(val);
                    if (val >= targetScore) {
                      setTargetScore(val + 10);
                    }
                  }}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>{examType === 'ege' ? '25 б. (базовый минимум)' : '10 б. (тройка)'}</span>
                  <span>{examType === 'ege' ? '75 б. (уверенная база)' : '30 б. (четверка)'}</span>
                </div>
              </div>

              {/* Slider 2: Target Score */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Желаемый целевой балл:</span>
                  <span className="font-extrabold text-cyan-300 text-base">
                    {targetScore} {examType === 'ege' ? 'баллов' : 'баллов (Оценка «5»)'}
                  </span>
                </div>
                <input
                  type="range"
                  min={Math.max(currentScore + 5, examType === 'ege' ? 60 : 32)}
                  max={examType === 'ege' ? 100 : 45}
                  step={1}
                  value={targetScore}
                  onChange={(e) => setTargetScore(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>{examType === 'ege' ? '60 б. (порог вузов)' : '32 б. (граница 4/5)'}</span>
                  <span>{examType === 'ege' ? '100 б. (максимум)' : '45 б. (абсолютная 5)'}</span>
                </div>
              </div>

              {/* Slider 3: Months Remaining */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Сколько месяцев до экзамена:</span>
                  <span className="font-extrabold text-white text-base">
                    {monthsLeft} {monthsLeft === 1 ? 'месяц' : monthsLeft < 5 ? 'месяца' : 'месяцев'}
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={20}
                  step={1}
                  value={monthsLeft}
                  onChange={(e) => setMonthsLeft(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
                <div className="flex justify-between text-[11px] text-slate-400">
                  <span>2 мес. (экспресс-спринт)</span>
                  <span>9 мес. (учебный год)</span>
                  <span>20 мес. (с 10 класса)</span>
                </div>
              </div>
            </div>

            {/* Output Calculation Result Card */}
            <div className="md:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 rounded-2xl border border-slate-700/80 p-6 space-y-4 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  План подготовки:
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  {intensityBadge}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-300">Прирост баллов:</span>
                  <span className="text-xl font-extrabold text-cyan-300">
                    +{scoreDelta} {examType === 'ege' ? 'б.' : 'б.'}
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-300">Темп прироста:</span>
                  <span className="text-sm font-semibold text-white">
                    ~{pointsPerMonth} баллов / месяц
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-slate-300">Занятий с репетитором:</span>
                  <span className="text-sm font-semibold text-white">
                    {recommendedWeeklyLessons} ур. в неделю по 90 мин
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-800/80 space-y-1">
                  <span className="text-xs text-slate-400 block">Рекомендованный формат:</span>
                  <strong className="text-sm font-bold text-white block text-cyan-300">
                    {recommendedFormat}
                  </strong>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleBookGoal}
                  className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <Target className="w-4 h-4" />
                  <span>Обсудить этот план на уроке</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>На бесплатном уроке проведем срез и скорректируем прогноз</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
