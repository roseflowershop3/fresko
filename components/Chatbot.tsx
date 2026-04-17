'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, X, ChevronRight } from 'lucide-react';

type Message = {
  id: string;
  from: 'bot' | 'user';
  text: string;
};

type Step = 'start' | 'need' | 'presence' | 'budget' | 'recommendation';

const STEPS: Record<Step, { question: string; options: string[] }> = {
  start: {
    question: "Hi! I'm here to help you figure out the best option for your business. First — what type of business do you have?",
    options: ['Restaurant/Café', 'Retail Shop', 'Service Provider', 'Freelancer/Portfolio', 'Other'],
  },
  need: {
    question: "Great! What's the main thing you need your website to do?",
    options: ['Show my work', 'Sell products online', 'Get more bookings', 'Build credibility', "I'm not sure yet"],
  },
  presence: {
    question: "Do you already have a website or social media presence?",
    options: ['Yes, I need an upgrade', 'No, starting fresh', 'Just social media'],
  },
  budget: {
    question: "What's your rough budget for this project?",
    options: ['Under €500', '€500–€1,500', '€1,500–€3,000', 'Not sure yet'],
  },
  recommendation: { question: '', options: [] },
};

const STEP_ORDER: Step[] = ['start', 'need', 'presence', 'budget', 'recommendation'];

type RecommendationType = {
  text: string;
  buttons: { label: string; href: string }[];
};

function getRecommendation(budget: string): RecommendationType {
  switch (budget) {
    case 'Under €500':
      return {
        text: "Based on what you told me, the best option for you is browsing our template gallery and choosing a style you love. It's affordable and gets you online fast.",
        buttons: [{ label: 'Browse Templates', href: '/templates' }],
      };
    case '€500–€1,500':
      return {
        text: "You're in a great range for a fully custom website built around your business needs. I'd recommend getting in touch directly so we can talk through exactly what you need.",
        buttons: [{ label: "Let's Talk", href: '/contact' }],
      };
    case '€1,500–€3,000':
      return {
        text: "With this budget we can build something really powerful for your business. Let\u2019s have a proper conversation.",
        buttons: [{ label: "Let's Talk", href: '/contact' }],
      };
    default:
      return {
        text: "No problem at all — start by browsing templates to get a feel for what\u2019s possible, or jump straight into a conversation.",
        buttons: [
          { label: 'Browse Templates', href: '/templates' },
          { label: "Let's Talk", href: '/contact' },
        ],
      };
  }
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentStep, setCurrentStep] = useState<Step>('start');
  const [recommendation, setRecommendation] = useState<RecommendationType | null>(null);
  const [started, setStarted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOpen = () => {
    setOpen(true);
    if (!started) {
      setStarted(true);
      setMessages([
        {
          id: 'bot-0',
          from: 'bot',
          text: STEPS.start.question,
        },
      ]);
    }
  };

  const addMessage = (msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  };

  const handleOption = (option: string) => {
    addMessage({ id: `user-${Date.now()}`, from: 'user', text: option });

    const idx = STEP_ORDER.indexOf(currentStep);
    const nextStep = STEP_ORDER[idx + 1];

    if (currentStep === 'budget') {
      const rec = getRecommendation(option);
      setRecommendation(rec);
      setTimeout(() => {
        addMessage({ id: `bot-${Date.now()}`, from: 'bot', text: rec.text });
        setCurrentStep('recommendation');
      }, 500);
    } else if (nextStep) {
      setTimeout(() => {
        addMessage({ id: `bot-${Date.now()}`, from: 'bot', text: STEPS[nextStep].question });
        setCurrentStep(nextStep);
      }, 500);
    }
  };

  const handleReset = () => {
    setMessages([{ id: 'bot-0', from: 'bot', text: STEPS.start.question }]);
    setCurrentStep('start');
    setRecommendation(null);
  };

  const currentOptions = currentStep !== 'recommendation' ? STEPS[currentStep].options : [];

  return (
    <>
      <button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-orange hover:bg-brand-orange-light shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
        aria-label="Open chat"
      >
        <MessageCircle size={24} className="text-white" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[520px] bg-white rounded-2xl shadow-2xl flex flex-col border border-brand-border animate-slide-up overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-brand-orange rounded-t-2xl">
            <div>
              <p className="text-white font-semibold text-sm">Not sure what you need? Let me help</p>
              <p className="text-white/80 text-xs mt-0.5">Answer 4 quick questions</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-brand-bg/30">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.from === 'bot'
                      ? 'bg-white text-brand-dark border border-brand-border shadow-sm rounded-tl-sm'
                      : 'bg-brand-orange text-white rounded-tr-sm'
                  }`}
                >
                  {msg.text}
                  {msg.from === 'bot' && currentStep === 'recommendation' && recommendation && msg.id === messages[messages.length - 1]?.id && (
                    <div className="mt-3 flex flex-col gap-2">
                      {recommendation.buttons.map((btn) => (
                        <Link
                          key={btn.href}
                          href={btn.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-center gap-1 px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-semibold hover:bg-brand-orange-light transition-colors"
                        >
                          {btn.label} <ChevronRight size={13} />
                        </Link>
                      ))}
                      <button
                        onClick={handleReset}
                        className="text-xs text-brand-muted hover:text-brand-dark transition-colors text-center mt-1"
                      >
                        Start over
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {currentOptions.length > 0 && (
            <div className="p-3 border-t border-brand-border bg-white">
              <div className="flex flex-wrap gap-2">
                {currentOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => handleOption(opt)}
                    className="px-3 py-1.5 rounded-full border border-brand-border text-xs font-medium text-brand-dark hover:border-brand-orange hover:text-brand-orange hover:bg-brand-bg transition-all"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
