import React, { useState } from 'react';
import {
  Quote,
  Star,
  CheckCircle,
  GraduationCap,
  TrendingUp,
  Info,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/physicsData';
import { Testimonial } from '../types';

interface TestimonialsSectionProps {
  onOpenBooking: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenBooking }) => {
  const [filter, setFilter] = useState<'all' | 'ЕГЭ' | 'ОГЭ' | 'parents'>('all');

  const filteredList = TESTIMONIALS.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'ЕГЭ') return item.examType === 'ЕГЭ';
    if (filter === 'ОГЭ') return item.examType === 'ОГЭ';
    if (filter === 'parents') return !!item.parentFeedback;
    return true;
  });

  return (
    <section id="testimonials" className="py-20 bg-[#0d1322] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            Результаты учеников
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Истории поступления на бюджет и роста баллов
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Реальный прогресс учеников — от неуверенности и троек в начале года до высоких баллов на государственных экзаменах.
          </p>
        </div>

        {/* REQUIRED EXPLICIT NOTICE: Clearly marked placeholder content notice */}
        <div className="max-w-3xl mx-auto mb-12 p-3.5 rounded-xl bg-cyan-950/50 border border-cyan-500/40 text-cyan-200 text-xs sm:text-sm flex items-center justify-center gap-2.5 text-center shadow-inner">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong>Примечание:</strong> Ниже представлены демонстрационные отзывы и кейсы учеников в формате реального портфолио репетитора по физике.
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Все отзывы' },
            { id: 'ЕГЭ', label: 'Выпускники ЕГЭ (11 класс)' },
            { id: 'ОГЭ', label: 'Сдавших ОГЭ (9 класс)' },
            { id: 'parents', label: 'С отзывами родителей' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filteredList.map((test) => (
            <div
              key={test.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors shadow-xl"
            >
              <div className="space-y-4">
                {/* Author row & rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${test.avatarColor} flex items-center justify-center text-white font-bold text-base shadow`}
                    >
                      {test.authorName.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-white">
                        {test.authorName}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {test.year} • {test.examType}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Score Dynamics Pill */}
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs">
                  <div className="text-slate-400">
                    <span className="block text-[10px] uppercase font-bold text-slate-400">
                      Старт:
                    </span>
                    <span className="font-semibold text-slate-300">{test.beforeScore}</span>
                  </div>
                  <div className="w-px h-6 bg-slate-800" />
                  <div className="text-right">
                    <span className="block text-[10px] uppercase font-bold text-emerald-400">
                      Итог на экзамене:
                    </span>
                    <span className="font-extrabold text-emerald-300 text-sm">
                      {test.afterScore}
                    </span>
                  </div>
                </div>

                {/* University admitted */}
                {test.university && (
                  <div className="flex items-start gap-2 text-xs text-cyan-300 bg-cyan-950/40 p-2.5 rounded-lg border border-cyan-500/20">
                    <GraduationCap className="w-4 h-4 shrink-0 mt-0.5 text-cyan-400" />
                    <span className="leading-snug">
                      <strong>Поступил:</strong> {test.university}
                    </span>
                  </div>
                )}

                {/* Quote Text */}
                <div className="relative pt-1">
                  <Quote className="w-6 h-6 text-slate-800 absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic relative z-10 pl-2">
                    «{test.text}»
                  </p>
                </div>

                {/* Parent Feedback if available */}
                {test.parentFeedback && (
                  <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs text-slate-300 border-l-2 border-l-indigo-400 space-y-1">
                    <p className="leading-relaxed">{test.parentFeedback}</p>
                  </div>
                )}
              </div>

              {/* Bottom verified badge */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Верифицированный результат</span>
                </span>
                <span className="text-slate-400">[демо-кейс]</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner inside Testimonials */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-slate-900 border border-cyan-500/30 p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Хотите такой же результат на экзамене?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Запишитесь на первое бесплатное занятие. Мы определим стартовый уровень и составим пошаговый план поступления на бюджет.
          </p>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 inline-flex items-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-cyan-200" />
            <span>Записаться на бесплатный пробный урок</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
