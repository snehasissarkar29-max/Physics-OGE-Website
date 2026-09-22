import React from 'react';
import { Atom, Send, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070b13] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <Atom className="w-5 h-5" />
              </div>
              <span className="text-white font-bold text-base">Александр Морозов</span>
            </div>
            <p className="leading-relaxed">
              Частный репетитор по физике для школьников 7–11 классов. Подготовка к ОГЭ, ЕГЭ и олимпиадам перечня РСОШ. Выпускник МФТИ.
            </p>
            <div className="text-[11px] text-slate-400">
              Средний балл учеников на ЕГЭ 2025: <strong className="text-cyan-400">84.6</strong>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Навигация</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="#about" className="hover:text-cyan-400 transition-colors">
                  О преподавателе
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-cyan-400 transition-colors">
                  Программы ОГЭ и ЕГЭ
                </a>
              </li>
              <li>
                <a href="#formats" className="hover:text-cyan-400 transition-colors">
                  Форматы занятий (мини-группы и инд.)
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-cyan-400 transition-colors">
                  Калькулятор баллов
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-cyan-400 transition-colors">
                  Стоимость и гарантии
                </a>
              </li>
              <li>
                <a href="#quiz" className="hover:text-cyan-400 transition-colors">
                  Экспресс-тест знаний
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-cyan-400 transition-colors">
                  Отзывы и результаты
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-400 transition-colors">
                  Вопросы и ответы
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contacts */}
          <div className="space-y-2">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Контакты</h4>
            <div className="space-y-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Telegram: @morozov_physics</span>
              </a>
              <a
                href="tel:+79990000000"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>+7 (999) 000-00-00</span>
              </a>
              <a
                href="mailto:morozov.physics.ege@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>morozov.physics.ege@gmail.com</span>
              </a>
              <p className="text-[11px] text-slate-400 pt-1">
                Ежедневно с 09:00 до 21:00 (МСК)
              </p>
            </div>
          </div>

          {/* Col 4: Action & Legal summary */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">Пробный урок</h4>
            <p className="leading-relaxed text-xs">
              Первое диагностическое занятие (45 минут) проходит бесплатно и без обязательств.
            </p>
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              Записаться на урок
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-[11px] pt-1"
            >
              <ArrowUp className="w-3 h-3" />
              <span>Наверх страницы</span>
            </button>
          </div>
        </div>

        {/* Legal text & disclaimer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 2026 Морозов А. С. • Самозанятый преподаватель физики (ИНН 772839485721).
            Электронные чеки формируются в приложении «Мой налог» ФНС РФ.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">
              Политика обработки персональных данных (152-ФЗ)
            </span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">
              Публичная оферта на оказание услуг
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
