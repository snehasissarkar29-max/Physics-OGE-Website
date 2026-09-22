import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TeacherProfile } from './components/TeacherProfile';
import { ProgramsSection } from './components/ProgramsSection';
import { LessonFormats } from './components/LessonFormats';
import { ScoreCalculator } from './components/ScoreCalculator';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanOrTopic, setSelectedPlanOrTopic] = useState<string>('');
  const [prefilledContactGoal, setPrefilledContactGoal] = useState<string>('');

  const handleOpenBooking = (topicOrPlan?: string) => {
    if (topicOrPlan) {
      setSelectedPlanOrTopic(topicOrPlan);
    } else {
      setSelectedPlanOrTopic('');
    }
    setIsModalOpen(true);
  };

  const handleScrollToQuiz = () => {
    const el = document.getElementById('quiz');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoalFromCalculator = (goalSummary: string) => {
    setPrefilledContactGoal(goalSummary);
    // Smooth scroll down to contact section or open modal
    const contactSection = document.getElementById('contacts');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      handleOpenBooking(goalSummary);
    }
  };

  const handleQuizResultBooking = (resultText: string) => {
    handleOpenBooking(resultText);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero with high-impact value proposition */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToQuiz={handleScrollToQuiz}
        />

        {/* 2. Teacher Profile: MIPT, Credentials, Methodology */}
        <TeacherProfile onOpenBooking={() => handleOpenBooking('Вводное занятие')} />

        {/* 3. ОГЭ & ЕГЭ Preparation Programs & Syllabi */}
        <ProgramsSection
          onSelectProgram={(programTitle) => handleOpenBooking(programTitle)}
        />

        {/* 4. Lesson Formats: Individual, Mini-Groups, Pairs */}
        <LessonFormats
          onOpenBooking={(formatTitle) => handleOpenBooking(formatTitle)}
        />

        {/* 5. Score Calculator & Preparation Timeline */}
        <ScoreCalculator onOpenBookingWithGoal={handleGoalFromCalculator} />

        {/* 6. Diagnostic Interactive Physics Quiz */}
        <InteractiveQuiz onOpenBookingWithQuiz={handleQuizResultBooking} />

        {/* 7. Pricing & Guarantees */}
        <PricingSection onSelectPlan={(planName) => handleOpenBooking(planName)} />

        {/* 8. Student & Parent Testimonials (Clearly marked placeholder content) */}
        <TestimonialsSection onOpenBooking={() => handleOpenBooking('После отзывов')} />

        {/* 9. FAQ for Parents and Students */}
        <FaqSection />

        {/* 10. Contact & Interactive Booking Form */}
        <ContactSection prefilledGoal={prefilledContactGoal} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Action Button */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />

      {/* Reusable Booking Modal */}
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTopicOrPlan={selectedPlanOrTopic}
      />
    </div>
  );
}
