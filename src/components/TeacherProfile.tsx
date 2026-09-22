import React from 'react';
import {
  GraduationCap,
  Award,
  CheckCircle,
  FileText,
  HeartHandshake,
  Lightbulb,
  Compass,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import tutorPortrait from '../assets/images/physics_tutor_portrait_1790100631721.jpg';
import { TUTOR_PROFILE } from '../data/physicsData';

interface TeacherProfileProps {
  onOpenBooking: () => void;
}

export const TeacherProfile: React.FC<TeacherProfileProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-[#0d1322] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            Преподаватель
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Кто готовит вашего ребенка к экзаменам
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Фундаментальное физико-математическое образование МФТИ, подтвержденный статус эксперта ЕГЭ и 9 лет практики с учениками со всей России.
          </p>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Tutor Details & Photo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-6 sm:p-8 shadow-xl">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={tutorPortrait}
                  alt="Александр Морозов - репетитор по физике"
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl object-cover object-top border-2 border-cyan-500/40 shadow-lg shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {TUTOR_PROFILE.name}
                  </h3>
                  <div className="inline-block px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                    Выпускник МФТИ (ФОПФ)
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Частный преподаватель, автор методики ускоренного освоения механики и термодинамики.
                  </p>
                </div>
              </div>

              {/* Verified Credentials List */}
              <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                <div className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Подтвержденные квалификации:
                </div>
                {TUTOR_PROFILE.credentials.map((cred, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{cred}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-800">
                <button
                  onClick={onOpenBooking}
                  id="about-cta-btn"
                  type="button"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                >
                  <span>Познакомиться на бесплатном уроке</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Special block for Parents */}
            <div className="rounded-2xl bg-gradient-to-br from-indigo-950/40 to-slate-900 border border-indigo-500/30 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  Важно для родителей
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Я понимаю, сколько тревоги приносит выпускной год. Я всегда на связи с родителями, предоставляю официальный электронный чек самозанятого за каждое занятие и ежемесячную сводку по динамике пробников. Мы готовимся целеустремленно, но без слез и нервных срывов.
              </p>
              <div className="flex items-center gap-2 text-xs text-indigo-300 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Договор и официальные платежи с чеком</span>
              </div>
            </div>
          </div>

          {/* Right Column: Teaching Principles & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-left space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Как построена методика: 4 ключевых принципа
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                В школе физику часто преподают как набор бесконечных формул для механического заучивания. Моя цель — научить думать как физик и видеть логику процессов.
              </p>
            </div>

            {/* 4 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TUTOR_PROFILE.principles.map((principle, index) => {
                const icons = [Lightbulb, FileText, HeartHandshake, Compass];
                const IconComponent = icons[index % icons.length];
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors space-y-2.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {principle.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {principle.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Universities Banner */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-cyan-400 font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>Куда поступают выпускники:</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                За 9 лет более 140 ребят стали студентами бюджетных отделений:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {[
                  'МФТИ (Физтех)',
                  'МГТУ им. Н.Э. Баумана',
                  'МГУ им. М.В. Ломоносова',
                  'НИУ ВШЭ (МИЭМ/ФКН)',
                  'НИЯУ МИФИ',
                  'СПбПУ Петра Великого',
                  'МАИ',
                  'МИРЭА',
                ].map((uni, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200"
                  >
                    {uni}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
