'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CircleCheck as CheckCircle2, ArrowRight } from 'lucide-react';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <main className="bg-brand-bg min-h-screen">
      <section className="py-24 px-4 flex flex-col items-center text-center">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            <span className="text-xs font-semibold text-brand-orange">In development</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark tracking-tight mb-5">
            Something Exciting Is Coming
          </h1>
          <p className="text-brand-muted text-lg leading-relaxed mb-10">
            This feature is currently in development. Be the first to know when it launches.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8">
              <CheckCircle2 size={48} className="text-brand-orange" />
              <p className="text-lg font-semibold text-brand-dark">You&apos;re on the list!</p>
              <p className="text-brand-muted text-sm">We&apos;ll be in touch as soon as it launches.</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-brand-border bg-white text-brand-dark text-sm placeholder:text-brand-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-colors shadow-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white text-sm font-semibold transition-colors shadow-sm whitespace-nowrap"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-xl font-bold text-brand-dark mb-8">
            Here&apos;s what we&apos;re building
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-brand-border p-7 shadow-sm">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="font-bold text-brand-dark text-base mb-2">Step-by-Step Builder</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Build your own website without any coding knowledge. Choose layouts, add your content, and launch — all guided step by step.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-brand-border p-7 shadow-sm">
              <div className="text-3xl mb-4">✨</div>
              <h3 className="font-bold text-brand-dark text-base mb-2">AI Website Creator</h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Describe your business in plain language and watch a complete website draft generate in real time — tailored to your market.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-xl mx-auto text-center bg-white rounded-2xl border border-brand-border p-10 shadow-sm">
          <p className="text-base text-brand-dark font-medium mb-2">
            In the meantime, browse our templates or get in touch
          </p>
          <p className="text-sm text-brand-muted mb-8">
            You don&apos;t have to wait — there are great options available right now.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/templates"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white text-sm font-semibold transition-all shadow-sm"
            >
              Browse Templates
              <ArrowRight size={14} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white text-sm font-semibold transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
