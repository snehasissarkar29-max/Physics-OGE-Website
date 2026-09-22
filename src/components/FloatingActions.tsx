import React, { useState, useEffect } from 'react';
import { Sparkles, Send } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past 400px
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Быстрые действия"
      className="fixed bottom-5 right-4 sm:right-6 z-40 flex items-center gap-2.5 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      {/* Quick Telegram */}
      <a
        href="https://t.me/"
        target="_blank"
        rel="noreferrer"
        className="w-11 h-11 rounded-full bg-[#1c2438] border border-cyan-500/30 text-cyan-400 hover:text-white hover:bg-cyan-600 flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
        title="Быстрый вопрос в Telegram"
      >
        <Send className="w-5 h-5" />
      </a>

      {/* Prominent booking pill */}
      <button
        type="button"
        onClick={onOpenBooking}
        className="group relative inline-flex items-center gap-2 px-4 py-3 rounded-full font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
      >
        <Sparkles className="w-4 h-4 text-cyan-200 animate-pulse" />
        <span>Записаться на пробный урок</span>
        <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-full bg-cyan-950/80 text-[10px] text-cyan-300 border border-cyan-500/30 font-semibold">
          0 ₽
        </span>
      </button>
    </aside>
  );
};
