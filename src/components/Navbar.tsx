import React, { useState, useEffect } from 'react';
import { Atom, Menu, X, Phone, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (preferredProgram?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'О преподавателе', href: '#about' },
    { name: 'Программы', href: '#programs' },
    { name: 'Форматы', href: '#formats' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Стоимость', href: '#pricing' },
    { name: 'Тест знаний', href: '#quiz' },
    { name: 'Отзывы', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            id="brand-logo"
            className="flex items-center gap-3 group text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-200">
              <Atom className="w-6 h-6 text-white animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight">
                  Александр Морозов
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[11px] font-semibold tracking-wide uppercase bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 rounded-md">
                  МФТИ
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden xs:block">
                Физика • ОГЭ и ЕГЭ • 7–11 классы
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-cyan-400 transition-colors duration-150 py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://t.me/"
              target="_blank"
              rel="noreferrer"
              id="header-tg-link"
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-cyan-300 transition-colors px-2.5 py-1.5 rounded-lg border border-slate-800 hover:border-cyan-500/30 bg-slate-900/60"
            >
              <Send className="w-3.5 h-3.5 text-cyan-400" />
              <span>Telegram</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="header-cta-btn"
              type="button"
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
              <span>Записаться на пробный урок</span>
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={() => onOpenBooking()}
              id="mobile-header-quick-cta"
              type="button"
              className="md:hidden px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-sm"
            >
              Пробный урок
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle"
              type="button"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Открыть меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="xl:hidden bg-[#0e1424] border-b border-slate-800 px-5 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-200"
        >
          <div className="grid grid-cols-2 gap-2 text-sm pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1">
              <span>Связь для родителей и учеников:</span>
              <span className="text-cyan-400 font-medium">+7 (999) 000-00-00</span>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              id="mobile-drawer-cta-btn"
              type="button"
              className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Записаться на бесплатный пробный урок</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
