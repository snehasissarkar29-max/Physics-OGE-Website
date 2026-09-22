import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Send, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/physicsData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);
  const [category, setCategory] = useState<'all' | 'parents' | 'online' | 'exams'>('all');

  const filteredItems = FAQ_ITEMS.filter((item) => {
    if (category === 'all') return true;
    return item.category === category;
  });

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#0b0f19] border-b border-slate-800/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-950/70 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider">
            Частые вопросы
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ответы на вопросы родителей и учеников
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Всё, что важно знать об организации процесса, контроле результатов и онлайн-формате.
          </p>
        </div>

        {/* Filter categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'Все вопросы' },
            { id: 'parents', label: 'Родителям' },
            { id: 'online', label: 'Об онлайн-формате' },
            { id: 'exams', label: 'Подготовка к экзаменам' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id as any)}
              className={`px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                category === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md font-bold'
                  : 'bg-slate-900 border border-slate-800 text-slate-300 hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3 mb-12">
          {filteredItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-300' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed animate-in fade-in duration-200">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask Question in Telegram card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">
                Не нашли ответ на свой вопрос?
              </h4>
              <p className="text-xs text-slate-400">
                Напишите лично Александру Сергеевичу — отвечу в течение 1–2 часов.
              </p>
            </div>
          </div>
          <a
            href="https://t.me/"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-slate-700 flex items-center gap-2 shrink-0 transition-all"
          >
            <Send className="w-4 h-4 text-cyan-400" />
            <span>Задать вопрос в Telegram</span>
          </a>
        </div>
      </div>
    </section>
  );
};
