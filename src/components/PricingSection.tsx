import React from 'react';
import { Check, Sparkles, Shield, Gift, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/physicsData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-20 bg-[#0b0f19] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            Стоимость и тарифы
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Прозрачные цены без скрытых платежей
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Первый пробный урок (45 минут) всегда <strong className="text-white">бесплатный</strong>. Вы платите только тогда, когда убедитесь в качестве преподавания и методики.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;
            return (
              <div
                key={plan.id}
                className={`rounded-2xl flex flex-col justify-between p-6 sm:p-8 relative transition-all ${
                  isPopular
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-cyan-500 shadow-2xl shadow-cyan-500/15 lg:-translate-y-2'
                    : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md flex items-center gap-1.5 uppercase tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Выбор 75% учеников</span>
                  </div>
                )}

                <div className="space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {plan.target}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Price Block */}
                  <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">
                        {plan.pricePerLesson.toLocaleString('ru-RU')} ₽
                      </span>
                      <span className="text-xs text-slate-400">/ 90 минут</span>
                    </div>
                    <div className="text-xs text-slate-300">
                      Абонемент: <strong className="text-white">{plan.monthlyPrice.toLocaleString('ru-RU')} ₽</strong> ({plan.monthlyDiscountNote})
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pt-2">
                    <div className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                      Что входит в тариф:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <div className="p-0.5 rounded-full bg-cyan-500/20 text-cyan-400 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonus */}
                  {plan.bonus && (
                    <div className="p-3 rounded-xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2">
                      <Gift className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>
                        <strong>Бонус:</strong> {plan.bonus}
                      </span>
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer transition-all ${
                      isPopular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                    }`}
                  >
                    <span>Выбрать {plan.name.split(' ')[0].toLowerCase()}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-center text-[11px] text-slate-400 mt-2">
                    Оплата после бесплатного вводного занятия
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantees Box */}
        <div className="rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950/40 border border-slate-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-white">Гарантия 1-го урока</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Если пробное занятие вам не подойдет по любой причине — вы ничего не платите. Никаких условий со звездочкой.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-300 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-white">Официальные чеки</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Оплата через приложение «Мой налог» с предоставлением официального электронного чека самозанятого для налогового вычета 13%.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-500/20 text-indigo-300 shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-white">Заморозка без потерь</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  В случае болезни или соревнований уроки переносятся без сгорания средств при предупреждении за 24 часа.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
