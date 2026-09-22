import React from 'react';
import {
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Award,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import tutorPortrait from '../assets/images/physics_tutor_portrait_1790100631721.jpg';
import { TUTOR_PROFILE } from '../data/physicsData';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToQuiz: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToQuiz }) => {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/60"
    >
      {/* Background glow and subtle physics grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/15 blur-[120px] rounded-full" />
        <div className="absolute -top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[90px] rounded-full" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full" />

        {/* Subtle decorative physics equations watermark */}
        <div className="absolute top-20 right-6 text-slate-800/40 select-none font-mono text-sm hidden lg:block leading-relaxed">
          <p>∇ · E = ρ / ε₀</p>
          <p>E = mc² • λ = h / p</p>
          <p>pV = (m/M)RT</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and Call-to-Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Top pill notification */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Набор на 2025–2026 учебный год • 7–11 классы</span>
            </div>

            {/* H1 Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-extrabold text-white tracking-tight leading-[1.18]">
              Подготовка к <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">ОГЭ и ЕГЭ</span> по физике на{' '}
              <span className="underline decoration-cyan-400/50 decoration-wavy underline-offset-4">
                80+ баллов
              </span>{' '}
              без стресса и зубрежки
            </h1>

            {/* Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              Понятное объяснение физических законов, авторская методика решения сложных задач С-части и спокойствие для родителей. Занятия ведет выпускник{' '}
              <strong className="text-white font-semibold">МФТИ</strong> с опытом 9+ лет.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  <strong>Первый урок 45 минут</strong> — бесплатно
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Экспертная проверка заданий ФИПИ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Отчеты для родителей каждый месяц</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Все записи уроков остаются навсегда</span>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBooking}
                id="hero-primary-cta"
                type="button"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 cursor-pointer active:scale-[0.98]"
              >
                <Sparkles className="w-5 h-5 text-cyan-200 animate-pulse" />
                <span>Записаться на пробный урок</span>
                <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToQuiz}
                id="hero-secondary-cta"
                type="button"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Экспресс-тест готовности (2 мин)</span>
              </button>
            </div>

            {/* Trust note below buttons */}
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Пробное занятие ни к чему не обязывает. Подберем оптимальный формат под уровень ученика.
              </span>
            </div>
          </div>

          {/* Right Column: Tutor Visual Card with Badges and Metrics */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Card Container */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/95 border border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
                {/* Photo & Teacher Header */}
                <div className="flex items-center gap-4 pb-5 border-b border-slate-800">
                  <div className="relative">
                    <img
                      src={tutorPortrait}
                      alt="Александр Сергеевич Морозов - репетитор по физике МФТИ"
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-cyan-400/40 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-emerald-500 w-4 h-4 rounded-full border-2 border-[#0e1424]" title="Ведет набор учеников" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-white">
                        {TUTOR_PROFILE.name}
                      </h2>
                    </div>
                    <p className="text-xs text-cyan-400 font-medium mt-0.5">
                      {TUTOR_PROFILE.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                      <span>{TUTOR_PROFILE.education}</span>
                    </p>
                  </div>
                </div>

                {/* Key Numbers Grid */}
                <div className="grid grid-cols-2 gap-3 py-4">
                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Средний балл ЕГЭ</span>
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300 mt-1">
                      {TUTOR_PROFILE.stats.avgEgeScore}
                    </div>
                    <span className="text-[11px] text-slate-400">по России средний ~54</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Средняя оценка ОГЭ</span>
                      <Award className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 mt-1">
                      {TUTOR_PROFILE.stats.avgOgeGrade}
                    </div>
                    <span className="text-[11px] text-slate-400">из 5.0 (98% сдали на «5»)</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Бюджетных мест</span>
                      <FileCheck2 className="w-4 h-4 text-blue-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {TUTOR_PROFILE.stats.budgetRate}
                    </div>
                    <span className="text-[11px] text-slate-400">МФТИ, Бауманка, МГУ, ВШЭ</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400">Опыт репетитора</span>
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                      {TUTOR_PROFILE.experience.split(' ')[0]}
                    </div>
                    <span className="text-[11px] text-slate-400">непрерывной практики</span>
                  </div>
                </div>

                {/* Bottom Trust Stamp */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Экспертный статус подтвержден</span>
                  </div>
                  <span className="text-cyan-400 font-semibold cursor-pointer hover:underline" onClick={onOpenBooking}>
                    Записаться →
                  </span>
                </div>
              </div>

              {/* Floating Highlight Badge */}
              <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg border border-blue-400/40 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>6 стобалльников на ЕГЭ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
