import Link from 'next/link';
import { Search, MapPin, TrendingUp, ArrowRight, Star } from 'lucide-react';

const optionCards = [
  {
    emoji: '🎨',
    title: 'Browse Templates',
    description:
      "See real websites built for businesses like yours. Pick a style you love and I'll build it for you.",
    button: 'Explore Templates',
    href: '/templates',
    active: true,
    badge: null,
  },
  {
    emoji: '🛠️',
    title: 'Build Step by Step',
    description:
      "Not sure where to start? I'll guide you through every decision — no technical knowledge needed.",
    button: 'Join the Waitlist',
    href: '/coming-soon',
    active: false,
    badge: 'Coming Soon',
  },
  {
    emoji: '✨',
    title: 'AI Website Creator',
    description:
      'Describe your business and watch a complete website draft come to life in minutes.',
    button: 'Join the Waitlist',
    href: '/coming-soon',
    active: false,
    badge: 'Coming Soon',
  },
  {
    emoji: '💬',
    title: "Let's Talk Directly",
    description:
      "Have something specific in mind? Skip the steps and tell me exactly what your business needs.",
    button: 'Get in Touch',
    href: '/contact',
    active: true,
    badge: null,
  },
];

const differentiators = [
  {
    icon: Search,
    title: 'Market Research First',
    text: 'Before I write a single line of code, I research your local market, your competitors, and what makes your business unique.',
  },
  {
    icon: MapPin,
    title: 'Built for Your Location',
    text: 'I study the area your business operates in to understand what your customers expect and how to attract more of them.',
  },
  {
    icon: TrendingUp,
    title: 'Designed to Grow With You',
    text: 'Every website I build includes marketing thinking built in — not added as an afterthought.',
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-brand-bg min-h-[88vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8">
            <Star size={13} className="text-brand-orange fill-brand-orange" />
            <span className="text-xs font-semibold text-brand-orange">Research-driven web solutions</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight mb-6">
            Your Business Deserves a Website That Actually{' '}
            <span className="text-brand-orange">Works For You</span>
          </h1>

          <p className="text-lg sm:text-xl text-brand-muted leading-relaxed mb-10 max-w-2xl mx-auto">
            I don&apos;t just build websites — I research your market, study your competitors, and create
            a digital presence that helps your business grow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Browse Templates
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold text-base transition-all"
            >
              Let&apos;s Talk
            </Link>
          </div>

          <p className="text-sm text-brand-muted/80">
            Trusted by local businesses across Greece and beyond
          </p>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-3 tracking-tight">
              How Would You Like to Get Started?
            </h2>
            <p className="text-brand-muted text-base sm:text-lg">
              Choose the path that fits where you are right now.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {optionCards.map((card) => (
              <div
                key={card.title}
                className={`relative rounded-2xl border p-7 flex flex-col gap-4 transition-all duration-200 ${
                  card.active
                    ? 'bg-white border-brand-border shadow-sm hover:shadow-md hover:-translate-y-0.5'
                    : 'bg-brand-bg/60 border-brand-border/60 opacity-80'
                }`}
              >
                {card.badge && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                    {card.badge}
                  </span>
                )}
                <div className="text-4xl">{card.emoji}</div>
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-2">{card.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{card.description}</p>
                </div>
                <div className="mt-auto pt-2">
                  <Link
                    href={card.href}
                    className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      card.active
                        ? 'bg-brand-orange hover:bg-brand-orange-light text-white'
                        : 'bg-white border border-brand-border text-brand-dark hover:border-brand-orange hover:text-brand-orange'
                    }`}
                  >
                    {card.button}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-bg">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark mb-3 tracking-tight">
              This Isn&apos;t Just Website Building
            </h2>
            <p className="text-brand-muted text-base sm:text-lg max-w-2xl mx-auto">
              Every project starts with understanding your business, your market, and your customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-brand-border p-7 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-orange/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-dark text-base mb-2">{item.title}</h3>
                <p className="text-sm text-brand-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white border-t border-brand-border">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-3">
            Ready to get started?
          </h2>
          <p className="text-brand-muted mb-8">
            Browse templates, or reach out directly — I respond to every message personally.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-sm transition-all shadow-md"
            >
              Explore Templates
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-semibold text-sm transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
