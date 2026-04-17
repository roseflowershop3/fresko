'use client';

import { useState } from 'react';
import { Mail, MessageCircle, MapPin, CircleCheck as CheckCircle2 } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    businessType: '',
    needs: '',
    budget: '',
    contactMethod: 'Email',
    contactDetails: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/40 text-brand-dark text-sm placeholder:text-brand-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-colors';
  const labelClass = 'block text-sm font-medium text-brand-dark mb-1.5';

  return (
    <main className="bg-brand-bg min-h-screen">
      <section className="py-16 px-4 text-center bg-white border-b border-brand-border">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Let&apos;s Talk About Your Business
          </h1>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            Tell me what you&apos;re building and I&apos;ll tell you exactly how I can help.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 size={52} className="text-brand-orange mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark mb-2">Message sent!</h3>
                  <p className="text-brand-muted leading-relaxed max-w-sm">
                    Thank you for reaching out. I personally read every message and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm text-brand-orange hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Full Name *</label>
                      <input
                        name="fullName"
                        type="text"
                        required
                        placeholder="Jane Smith"
                        value={form.fullName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Business Name *</label>
                      <input
                        name="businessName"
                        type="text"
                        required
                        placeholder="My Business Ltd."
                        value={form.businessName}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Business Type</label>
                    <select
                      name="businessType"
                      value={form.businessType}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select your business type...</option>
                      <option value="Restaurant/Café">Restaurant / Café</option>
                      <option value="Retail">Retail</option>
                      <option value="Services">Services</option>
                      <option value="Portfolio">Portfolio</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>What does your business need? *</label>
                    <textarea
                      name="needs"
                      required
                      rows={4}
                      placeholder="Tell me about your goals, your customers, and what you're looking for..."
                      value={form.needs}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select your budget...</option>
                      <option value="Under €500">Under €500</option>
                      <option value="€500–€1,500">€500 – €1,500</option>
                      <option value="€1,500–€3,000">€1,500 – €3,000</option>
                      <option value="€3,000+">€3,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Preferred Contact Method</label>
                    <div className="flex gap-4 mt-1">
                      {['Email', 'WhatsApp', 'Phone'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="contactMethod"
                            value={method}
                            checked={form.contactMethod === method}
                            onChange={handleChange}
                            className="accent-brand-orange"
                          />
                          <span className="text-sm text-brand-dark">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Contact Details *</label>
                    <input
                      name="contactDetails"
                      type="text"
                      required
                      placeholder="Your email, phone, or WhatsApp number"
                      value={form.contactDetails}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white font-semibold text-sm transition-colors shadow-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-2xl border border-brand-border p-6 shadow-sm">
              <h2 className="font-bold text-brand-dark text-base mb-4">Contact Details</h2>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:email@placeholder.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Mail size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted mb-0.5">Email</p>
                    <p className="text-sm font-medium text-brand-dark group-hover:text-brand-orange transition-colors">
                      email@placeholder.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/300000000000"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted mb-0.5">WhatsApp</p>
                    <p className="text-sm font-medium text-brand-dark group-hover:text-brand-orange transition-colors">
                      +30 000 000 0000
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin size={16} className="text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-muted mb-0.5">Location</p>
                    <p className="text-sm font-medium text-brand-dark">
                      Based in Greece, working with businesses worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6">
              <p className="text-sm text-brand-dark leading-relaxed">
                I personally read every message and respond within 24 hours. No automated responses,
                no sales team — just a direct conversation with the person building your website.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-xs font-bold">
                  P
                </div>
                <div>
                  <p className="text-xs font-semibold text-brand-dark">Personal Response</p>
                  <p className="text-xs text-brand-muted">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
