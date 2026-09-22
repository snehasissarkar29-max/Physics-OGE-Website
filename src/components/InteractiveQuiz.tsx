import React, { useState } from 'react';
import { HelpCircle, CheckCircle, XCircle, ArrowRight, RotateCcw, Sparkles, Lightbulb } from 'lucide-react';
import { DIAGNOSTIC_QUESTIONS } from '../data/physicsData';

interface InteractiveQuizProps {
  onOpenBookingWithQuiz: (scoreText: string) => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({ onOpenBookingWithQuiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = DIAGNOSTIC_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOptionIndex(index);
    setIsAnswered(true);

    if (currentQ.options[index].isCorrect) {
      setCorrectAnswersCount((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < DIAGNOSTIC_QUESTIONS.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswered(false);
    setCorrectAnswersCount(0);
    setQuizFinished(false);
  };

  const handleTrialBooking = () => {
    const summary = `Результат экспресс-теста: ${correctAnswersCount} из ${DIAGNOSTIC_QUESTIONS.length} правильных ответов`;
    onOpenBookingWithQuiz(summary);
  };

  return (
    <section id="quiz" className="py-20 bg-[#0d1322] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-950/70 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            Интерактивный тест
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Проверьте физическую интуицию за 2 минуты
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Попробуйте решить 3 типичные задачи-ловушки из первой части ЕГЭ, на которых чаще всего спотыкаются школьники.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {!quizFinished ? (
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
              {/* Progress Bar & Question Counter */}
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-4">
                <span className="font-semibold text-cyan-400">
                  Вопрос {currentQuestionIndex + 1} из {DIAGNOSTIC_QUESTIONS.length}
                </span>
                <div className="flex items-center gap-1.5">
                  {DIAGNOSTIC_QUESTIONS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentQuestionIndex
                          ? 'w-6 bg-cyan-400'
                          : idx < currentQuestionIndex
                          ? 'w-3 bg-emerald-500'
                          : 'w-3 bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, idx) => {
                  let buttonStyle =
                    'bg-slate-950/70 border-slate-800 text-slate-200 hover:border-slate-600 hover:bg-slate-800/60';

                  if (isAnswered) {
                    if (option.isCorrect) {
                      buttonStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-200';
                    } else if (selectedOptionIndex === idx) {
                      buttonStyle = 'bg-rose-950/60 border-rose-500 text-rose-200';
                    } else {
                      buttonStyle = 'bg-slate-950/40 border-slate-800/40 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start justify-between gap-3 cursor-pointer ${buttonStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-md bg-slate-800/80 border border-slate-700 flex items-center justify-center shrink-0 font-bold text-xs">
                          {option.label}
                        </span>
                        <span className="leading-snug pt-0.5">{option.text}</span>
                      </div>
                      {isAnswered && option.isCorrect && (
                        <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      )}
                      {isAnswered && selectedOptionIndex === idx && !option.isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation Reveal */}
              {isAnswered && (
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
                    <Lightbulb className="w-4 h-4" />
                    <span>Пояснение преподавателя:</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                  {currentQ.formulaNote && (
                    <div className="text-xs font-mono text-cyan-300 bg-slate-900/80 p-2 rounded-lg border border-slate-800 mt-2">
                      💡 {currentQ.formulaNote}
                    </div>
                  )}
                  <div className="pt-3 flex justify-end">
                    <button
                      type="button"
                      onClick={handleNextQuestion}
                      className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 flex items-center gap-2 cursor-pointer"
                    >
                      <span>
                        {currentQuestionIndex + 1 < DIAGNOSTIC_QUESTIONS.length
                          ? 'Следующий вопрос'
                          : 'Посмотреть результат'}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed Screen */
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-8 text-center space-y-6 shadow-2xl">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-extrabold text-white">
                  Ваш результат: {correctAnswersCount} из {DIAGNOSTIC_QUESTIONS.length}
                </h3>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
                  {correctAnswersCount === 3 &&
                    'Великолепная физическая интуиция! У вас есть прочный фундамент для выхода на 90+ баллов на ЕГЭ или призовых мест на олимпиадах. Осталось отточить оформление С-части.'}
                  {correctAnswersCount === 2 &&
                    'Хороший уровень логики! Вы понимаете общие принципы, но споткнулись на классической ловушке экзаменаторов. Своевременный разбор критериев ФИПИ быстро устранит эти ошибки.'}
                  {correctAnswersCount <= 1 &&
                    'Экзаменационные ловушки сработали. В школьных учебниках такие тонкости часто опускают, из-за чего теряются первичные баллы. На пробном уроке мы разберем эти темы наглядно и без зубрежки.'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 max-w-md mx-auto text-xs text-slate-400">
                <span>
                  Хотите подробный разбор всех номеров и персональный план подготовки к экзамену?
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleTrialBooking}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-cyan-200" />
                  <span>Обсудить результат на пробном уроке</span>
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Пройти заново</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
