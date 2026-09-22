import React, { useState } from 'react';
import {
  GraduationCap,
  Award,
  Sparkles,
  Trophy,
  Check,
  Clock,
  Target,
  ChevronDown,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { PROGRAMS } from '../data/physicsData';
import { Program } from '../types';

interface ProgramsSectionProps {
  onSelectProgram: (programTitle: string) => void;
}

export const ProgramsSection: React.FC<ProgramsSectionProps> = ({ onSelectProgram }) => {
  const [activeProgramId, setActiveProgramId] = useState<string>(PROGRAMS[0].id);
  const [expandedTopicIndex, setExpandedTopicIndex] = useState<number | null>(null);

  const activeProgram = PROGRAMS.find((p) => p.id === activeProgramId) || PROGRAMS[0];

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return GraduationCap;
      case 'Award':
        return Award;
      case 'Sparkles':
        return Sparkles;
      case 'Trophy':
        return Trophy;
      default:
        return BookOpen;
    }
  };

  return (
    <section id="programs" className="py-20 bg-[#0b0f19] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            Программы подготовки
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Продуманные курсы под вашу конкретную цель
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            От устранения двоек и троек в 7–8 классах до уверенной победы на олимпиадах и 90+ баллов на ЕГЭ.
          </p>
        </div>

        {/* Program Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {PROGRAMS.map((prog) => {
            const Icon = getProgramIcon(prog.iconName);
            const isActive = prog.id === activeProgramId;
            return (
              <button
                key={prog.id}
                type="button"
                onClick={() => {
                  setActiveProgramId(prog.id);
                  setExpandedTopicIndex(null);
                }}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative ${
                  isActive
                    ? 'bg-slate-800/95 border-cyan-500 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-500'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                {prog.badge && (
                  <span
                    className={`absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {prog.badge}
                  </span>
                )}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white line-clamp-1">
                  {prog.title.split(':')[0]}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {prog.targetGrades} • {prog.targetScore}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Program Card Detail */}
        <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Overview, Highlights, Target */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
                    {activeProgram.targetGrades}
                  </span>
                  <span className="px-3 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-1">
                    <Target className="w-3.5 h-3.5" />
                    <span>Цель: {activeProgram.targetScore}</span>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeProgram.title}
                </h3>
                <p className="text-sm font-medium text-cyan-400">
                  {activeProgram.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {activeProgram.description}
              </p>

              {/* What is included in this curriculum */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                  Ключевые особенности этой программы:
                </h4>
                <div className="space-y-2.5">
                  {activeProgram.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <div className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block">Рекомендуемая интенсивность:</span>
                  <strong className="text-white font-semibold flex items-center gap-1.5 mt-0.5">
                    <Clock className="w-4 h-4 text-cyan-400" />
                    {activeProgram.recommendedIntensity}
                  </strong>
                </div>
                <button
                  type="button"
                  onClick={() => onSelectProgram(activeProgram.title)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all self-start sm:self-auto whitespace-nowrap"
                >
                  <span>Выбрать программу</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Col: Interactive Syllabus Outline */}
            <div className="lg:col-span-5 bg-slate-950/80 rounded-xl border border-slate-800 p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <h4 className="font-bold text-sm text-white">Тематический план курса</h4>
                </div>
                <span className="text-xs text-slate-400">
                  {activeProgram.topics.reduce((sum, t) => sum + t.hours, 0)} ак. часов
                </span>
              </div>

              <div className="space-y-2">
                {activeProgram.topics.map((topic, idx) => {
                  const isExpanded = expandedTopicIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="rounded-lg border border-slate-800/80 bg-slate-900/60 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => setExpandedTopicIndex(isExpanded ? null : idx)}
                        className="w-full p-3 text-left flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors cursor-pointer"
                      >
                        <span className="line-clamp-1">{topic.title}</span>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                            {topic.hours} ч
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 text-slate-400 transition-transform ${
                              isExpanded ? 'rotate-180 text-cyan-400' : ''
                            }`}
                          />
                        </div>
                      </button>
                      {isExpanded && (
                        <div className="px-3 pb-3 text-xs text-slate-400 border-t border-slate-800/60 pt-2 animate-in fade-in duration-150">
                          {topic.description}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <p className="text-[11px] text-slate-400 italic pt-1">
                * План адаптируется под индивидуальные результаты входного диагностического урока.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
