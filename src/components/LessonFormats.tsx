import React from 'react';
import {
  Users,
  User,
  Users2,
  Video,
  Monitor,
  MessageSquare,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from 'lucide-react';
import { LESSON_FORMATS } from '../data/physicsData';

interface LessonFormatsProps {
  onOpenBooking: (formatTitle?: string) => void;
}

export const LessonFormats: React.FC<LessonFormatsProps> = ({ onOpenBooking }) => {
  return (
    <section id="formats" className="py-20 bg-[#0d1322] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider">
            Форматы обучения
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Выберите удобный формат занятий
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Все уроки проходят онлайн на специализированной интерактивной доске в режиме реального времени с максимальным вовлечением ученика.
          </p>
        </div>

        {/* 3 Formats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {LESSON_FORMATS.map((format) => {
            const isMiniGroup = format.id === 'mini-group';
            return (
              <div
                key={format.id}
                className={`rounded-2xl flex flex-col justify-between p-6 sm:p-7 relative transition-all ${
                  isMiniGroup
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-cyan-500 shadow-xl shadow-cyan-500/10'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {format.badge && (
                  <div
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold ${
                      isMiniGroup
                        ? 'bg-cyan-500 text-slate-950 shadow-md'
                        : 'bg-slate-800 text-cyan-300 border border-cyan-500/30'
                    }`}
                  >
                    {format.badge}
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between pt-1">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-cyan-400">
                      {format.id === 'individual' && <User className="w-6 h-6" />}
                      {format.id === 'mini-group' && <Users className="w-6 h-6" />}
                      {format.id === 'paired' && <Users2 className="w-6 h-6" />}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300">
                      {format.groupSize}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white">{format.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {format.description}
                    </p>
                  </div>

                  {/* Advantages */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-800">
                    <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-1">
                      Преимущества:
                    </span>
                    {format.pros.map((pro, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800 space-y-3">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs text-slate-400">Стоимость от:</span>
                    <div className="text-right">
                      <span className="text-xl font-extrabold text-white">
                        {format.pricePerHour.toLocaleString('ru-RU')} ₽
                      </span>
                      <span className="text-xs text-slate-400"> / урок</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(format.title)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isMiniGroup
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white border border-slate-700'
                    }`}
                  >
                    <span>Выбрать {format.title.toLowerCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* How Online Class Works Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 p-6 sm:p-8">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Как проходит современный онлайн-урок физики
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Комфортное технологичное пространство, где ученик не просто слушает, а активно решает задачи вместе с преподавателем.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Интерактивная доска</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Бесконечный холст, где преподаватель и ученик пишут одновременно графическим планшетом в реальном времени.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-300 flex items-center justify-center">
                <Video className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Записи всех уроков в HD</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Каждый урок записывается. Ученик может в любой момент пересмотреть разбор сложной задачи перед контрольной или экзаменом.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Авторские конспекты</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Красочные PDF-скрипты без «воды» с выжимкой ключевых законов, формул и типичных ошибок для каждого модуля.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-white">Поддержка в Telegram</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Возник вопрос по домашке среди недели? Ученик просто присылает фото решения и получает подсказку в течение пары часов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
