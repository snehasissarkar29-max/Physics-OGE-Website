export type GradeLevel = '7' | '8' | '9' | '10' | '11';

export type ExamTarget = 'oge' | 'ege_80plus' | 'ege_pass' | 'olympiad' | 'school_boost';

export interface ProgramTopic {
  title: string;
  description: string;
  hours: number;
}

export interface Program {
  id: string;
  title: string;
  subtitle: string;
  targetGrades: string;
  targetScore: string;
  badge: string;
  iconName: string;
  description: string;
  features: string[];
  topics: ProgramTopic[];
  idealFor: string;
  recommendedIntensity: string;
}

export interface LessonFormat {
  id: string;
  title: string;
  badge?: string;
  groupSize: string;
  description: string;
  pros: string[];
  equipmentNeeded: string[];
  pricePerHour: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  target: string;
  popular?: boolean;
  pricePerLesson: number;
  monthlyPrice: number;
  monthlyDiscountNote?: string;
  lessonsPerWeek: string;
  lessonDurationMinutes: number;
  features: string[];
  bonus: string;
}

export interface Testimonial {
  id: string;
  authorName: string;
  role: 'student' | 'parent';
  year: string;
  examType: 'ЕГЭ' | 'ОГЭ';
  beforeScore: string;
  afterScore: string;
  university?: string;
  text: string;
  parentFeedback?: string;
  verified: boolean;
  avatarColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'parents' | 'online' | 'exams';
}

export interface QuizQuestion {
  id: number;
  grade: 'oge' | 'ege';
  question: string;
  options: {
    label: string;
    text: string;
    isCorrect: boolean;
  }[];
  explanation: string;
  formulaNote?: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  studentGrade: GradeLevel;
  examTarget: ExamTarget;
  contactMethod: 'telegram' | 'whatsapp' | 'call';
  messengerUsername?: string;
  preferredTime: string;
  comment?: string;
  agreeToPolicy: boolean;
}
