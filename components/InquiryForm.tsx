'use client';

import { useState } from 'react';
import { CircleCheck as CheckCircle2 } from 'lucide-react';

type InquiryFormProps = {
  prefilledTemplate?: string;
  showTemplateField?: boolean;
};

export default function InquiryForm({ prefilledTemplate = '', showTemplateField = true }: InquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    businessName: '',
    businessType: '',
    templateChosen: prefilledTemplate,
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

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center bg-white rounded-2xl border border-brand-border shadow-sm">
        <CheckCircle2 size={52} className="text-brand-orange mb-4" />
        <h3 className="text-xl font-bold text-brand-dark mb-2">Thank you!</h3>
        <p className="text-brand-muted text-base leading-relaxed">
          I'll be in touch within 24 hours. Looking forward to learning about your business.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-brand-orange hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-brand-border bg-brand-bg/40 text-brand-dark text-sm placeholder:text-brand-muted/70 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange transition-colors';
  const labelClass = 'block text-sm font-medium text-brand-dark mb-1.5';

  return (
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

      {showTemplateField && (
        <div>
          <label className={labelClass}>Template Chosen</label>
          <input
            name="templateChosen"
            type="text"
            placeholder="e.g. The Bistro (or leave blank)"
            value={form.templateChosen}
            onChange={handleChange}
            readOnly={!!prefilledTemplate}
            className={`${inputClass} ${prefilledTemplate ? 'bg-brand-border/30 cursor-default' : ''}`}
          />
        </div>
      )}

      <div>
        <label className={labelClass}>What does your business need? *</label>
        <textarea
          name="needs"
          required
          rows={4}
          placeholder="Tell me about your goals, your customers, what you're looking for in a website..."
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
        Send My Enquiry
      </button>
    </form>
  );
}
