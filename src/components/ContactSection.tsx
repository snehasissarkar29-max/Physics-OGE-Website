import React, { useState } from 'react';
import {
  Send,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  Clock,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { GradeLevel, ExamTarget, BookingFormData } from '../types';

interface ContactSectionProps {
  prefilledGoal?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledGoal }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    studentGrade: '11',
    examTarget: 'ege_80plus',
    contactMethod: 'telegram',
    messengerUsername: '',
    preferredTime: 'вечер (18:00–21:00 МСК)',
    comment: prefilledGoal || '',
    agreeToPolicy: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Пожалуйста, заполните имя и номер телефона');
      return;
    }
    setIsSubmitting(true);
    // Simulate real smooth client-side action
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contacts" className="py-20 bg-[#0d1322] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contacts & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                Связь с преподавателем
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Запишитесь на бесплатный пробный урок
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                На уроке мы познакомимся, протестируем текущий уровень знаний по физике и составим персональный план достижения максимального балла.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Telegram (самый быстрый ответ):</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300">
                    @morozov_physics
                  </div>
                </div>
              </a>

              <a
                href="tel:+79990000000"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 transition-all text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Телефон (звонки и WhatsApp):</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-blue-300">
                    +7 (999) 000-00-00
                  </div>
                </div>
              </a>

              <a
                href="mailto:alexander.morozov.physics@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 transition-all text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Электронная почта:</div>
                  <div className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300">
                    morozov.physics.ege@gmail.com
                  </div>
                </div>
              </a>
            </div>

            {/* Work hours & safety guarantee */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-semibold">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Время для связи: ежедневно с 09:00 до 21:00 (МСК)</span>
              </div>
              <p>
                Занятия проходят в онлайн-формате для школьников из любых городов и часовых поясов РФ.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-700/80 p-6 sm:p-8 shadow-2xl relative">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Форма записи на вводный урок
                    </h3>
                    <span className="text-xs text-cyan-400 font-semibold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      45 мин • Бесплатно
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Ваше имя (родителя или ученика) *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Например, Елена или Михаил"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Номер телефона *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Class */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Класс ученика
                      </label>
                      <select
                        value={formData.studentGrade}
                        onChange={(e) =>
                          setFormData({ ...formData, studentGrade: e.target.value as GradeLevel })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="11">11 класс (ЕГЭ в этом году)</option>
                        <option value="10">10 класс (спокойная подготовка)</option>
                        <option value="9">9 класс (ОГЭ по физике)</option>
                        <option value="8">8 класс (фундамент)</option>
                        <option value="7">7 класс (физика с нуля)</option>
                      </select>
                    </div>

                    {/* Exam Goal */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        Основная цель
                      </label>
                      <select
                        value={formData.examTarget}
                        onChange={(e) =>
                          setFormData({ ...formData, examTarget: e.target.value as ExamTarget })
                        }
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                      >
                        <option value="ege_80plus">ЕГЭ на 80+ баллов (бюджет в топ-вуз)</option>
                        <option value="oge">ОГЭ на оценку «5»</option>
                        <option value="olympiad">Олимпиады (БВИ / перечневые)</option>
                        <option value="school_boost">Исправить школьные оценки / закрыть долги</option>
                        <option value="ege_pass">Сдать ЕГЭ на надежный проходной балл</option>
                      </select>
                    </div>
                  </div>

                  {/* Messenger Choice */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Где вам удобнее связаться?
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'telegram', label: 'Telegram' },
                        { id: 'whatsapp', label: 'WhatsApp' },
                        { id: 'call', label: 'Звонок' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, contactMethod: item.id as any })}
                          className={`py-2 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                            formData.contactMethod === item.id
                              ? 'bg-cyan-500 text-slate-950 shadow-sm font-bold'
                              : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Messenger username if applicable */}
                  {(formData.contactMethod === 'telegram' || formData.contactMethod === 'whatsapp') && (
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-300">
                        {formData.contactMethod === 'telegram' ? 'Юзернейм в Telegram (@username)' : 'Подтвердите номер WhatsApp'}
                      </label>
                      <input
                        type="text"
                        placeholder={formData.contactMethod === 'telegram' ? '@example' : '+7 (999) 000-00-00'}
                        value={formData.messengerUsername || ''}
                        onChange={(e) => setFormData({ ...formData, messengerUsername: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>
                  )}

                  {/* Comment / Questions */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">
                      Комментарий или пожелания по времени (необязательно)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Например: удобны субботы после 15:00, тяжело дается механика и законы сохранения"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Agreement checkbox */}
                  <div className="flex items-start gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="policy-agreement"
                      required
                      checked={formData.agreeToPolicy}
                      onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
                      className="mt-0.5 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500 cursor-pointer"
                    />
                    <label htmlFor="policy-agreement" className="text-[11px] text-slate-400 cursor-pointer">
                      Я согласен(-на) на обработку персональных данных для согласования бесплатного вводного урока.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="submit-booking-form-btn"
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99] disabled:opacity-50"
                  >
                    <Sparkles className="w-4 h-4 text-cyan-200" />
                    <span>{isSubmitting ? 'Отправка заявки...' : 'Записаться на бесплатный пробный урок'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 text-center">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Никаких скрытых платежей. Пробный урок ни к чему не обязывает.</span>
                  </div>
                </form>
              ) : (
                /* Success Screen */
                <div className="py-8 text-center space-y-5 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Заявка успешно принята!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Спасибо, <strong>{formData.name}</strong>! Александр Сергеевич свяжется с вами по номеру{' '}
                      <strong>{formData.phone}</strong> в течение 1–2 часов для выбора удобного дня и времени пробного урока.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 max-w-sm mx-auto space-y-1">
                    <p className="font-semibold text-slate-200">Хотите ускорить ответ?</p>
                    <p>Вы можете сразу написать мне в Telegram с пометкой «Пробный урок»:</p>
                    <a
                      href="https://t.me/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 font-bold hover:underline pt-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Открыть диалог в Telegram</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        studentGrade: '11',
                        examTarget: 'ege_80plus',
                        contactMethod: 'telegram',
                        messengerUsername: '',
                        preferredTime: 'вечер (18:00–21:00 МСК)',
                        comment: '',
                        agreeToPolicy: true,
                      });
                    }}
                    className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                  >
                    Заполнить форму для другого ученика
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
