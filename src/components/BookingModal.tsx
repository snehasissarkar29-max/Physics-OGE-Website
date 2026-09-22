import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { GradeLevel, ExamTarget, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopicOrPlan?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialTopicOrPlan,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    studentGrade: '11',
    examTarget: 'ege_80plus',
    contactMethod: 'telegram',
    messengerUsername: '',
    preferredTime: 'вечер (18:00–21:00 МСК)',
    comment: initialTopicOrPlan ? `Выбранный тариф/цель: ${initialTopicOrPlan}` : '',
    agreeToPolicy: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialTopicOrPlan) {
      setFormData((prev) => ({
        ...prev,
        comment: `Выбранный тариф/цель: ${initialTopicOrPlan}`,
      }));
    }
  }, [initialTopicOrPlan]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSubmitted(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Пожалуйста, укажите имя и номер телефона');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0f172a] border border-slate-700/80 p-6 sm:p-8 shadow-2xl z-10 my-auto text-left animate-in zoom-in-95 duration-200">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Бесплатное занятие 45 минут</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Запись на пробный урок
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Заполните форму, и преподаватель свяжется с вами для подбора времени.
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-3">
              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Имя (ученика или родителя) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Как к вам обращаться?"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Номер телефона для связи *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+7 (999) 000-00-00"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Класс</label>
                  <select
                    value={formData.studentGrade}
                    onChange={(e) =>
                      setFormData({ ...formData, studentGrade: e.target.value as GradeLevel })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="11">11 класс (ЕГЭ)</option>
                    <option value="10">10 класс</option>
                    <option value="9">9 класс (ОГЭ)</option>
                    <option value="8">8 класс</option>
                    <option value="7">7 класс</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Цель</label>
                  <select
                    value={formData.examTarget}
                    onChange={(e) =>
                      setFormData({ ...formData, examTarget: e.target.value as ExamTarget })
                    }
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="ege_80plus">ЕГЭ 80+ баллов</option>
                    <option value="oge">ОГЭ на оценку 5</option>
                    <option value="olympiad">Олимпиады / БВИ</option>
                    <option value="school_boost">Школьная база</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Предпочтительный способ связи
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'telegram', label: 'Telegram' },
                    { id: 'whatsapp', label: 'WhatsApp' },
                    { id: 'call', label: 'Звонок' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, contactMethod: m.id as any })}
                      className={`py-2 px-2.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                        formData.contactMethod === m.id
                          ? 'bg-cyan-500 text-slate-950 font-bold'
                          : 'bg-slate-950 border border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Комментарий или пожелания
                </label>
                <textarea
                  rows={2}
                  placeholder="Тема, вызывающая сложности, или удобные дни занятий"
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs sm:text-sm focus:border-cyan-500 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-policy"
                  required
                  checked={formData.agreeToPolicy}
                  onChange={(e) => setFormData({ ...formData, agreeToPolicy: e.target.checked })}
                  className="mt-0.5 rounded border-slate-700 bg-slate-900 text-cyan-500 focus:ring-cyan-500"
                />
                <label htmlFor="modal-policy" className="text-[11px] text-slate-400">
                  Согласен(-на) на обработку персональных данных для согласования занятия.
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>{isSubmitting ? 'Отправка...' : 'Записаться на бесплатный пробный урок'}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Бесплатно, без привязки карты и скрытых условий</span>
            </div>
          </form>
        ) : (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">Заявка отправлена!</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Спасибо, {formData.name}! Я свяжусь с вами в ближайшее время (обычно в течение 1–2 часов).
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 cursor-pointer"
            >
              Вернуться на сайт
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
