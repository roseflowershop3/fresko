'use client';

import { useState, useRef } from 'react';
import TemplateCard, { Template } from '@/components/TemplateCard';
import InquiryForm from '@/components/InquiryForm';
import { ArrowDown } from 'lucide-react';

const TEMPLATES: Template[] = [
  {
    id: '1',
    name: 'The Bistro',
    category: 'Restaurant & Café',
    description: 'A warm, photo-rich layout perfect for restaurants that want to showcase their menu and ambiance.',
    previewColor: '#C8704A',
    previewLabel: 'Restaurant & Café',
  },
  {
    id: '2',
    name: 'The Garden Café',
    category: 'Restaurant & Café',
    description: 'Fresh and inviting design for cafés with an emphasis on bookings, events, and daily specials.',
    previewColor: '#7A9E6E',
    previewLabel: 'Restaurant & Café',
  },
  {
    id: '3',
    name: 'The Boutique',
    category: 'Retail & Shop',
    description: 'Elegant product-focused layout for fashion, lifestyle, or gift shops seeking a premium feel.',
    previewColor: '#C4917A',
    previewLabel: 'Retail & Shop',
  },
  {
    id: '4',
    name: 'The Market',
    category: 'Retail & Shop',
    description: 'Bold and vibrant design for local markets, specialty food stores, or multi-product retailers.',
    previewColor: '#C9923A',
    previewLabel: 'Retail & Shop',
  },
  {
    id: '5',
    name: 'The Consultant',
    category: 'Services',
    description: 'Clean, credibility-first layout for consultants, coaches, and professional service providers.',
    previewColor: '#5B7A8C',
    previewLabel: 'Services',
  },
  {
    id: '6',
    name: 'The Clinic',
    category: 'Services',
    description: 'Trustworthy and calm design built for healthcare, wellness, and personal care businesses.',
    previewColor: '#6A9E8A',
    previewLabel: 'Services',
  },
  {
    id: '7',
    name: 'The Photographer',
    category: 'Portfolio',
    description: 'Full-bleed visual layout designed to let your photography and visual work speak for itself.',
    previewColor: '#4A4A4A',
    previewLabel: 'Portfolio',
  },
  {
    id: '8',
    name: 'The Creative Studio',
    category: 'Portfolio',
    description: 'Structured and expressive portfolio for designers, illustrators, and creative professionals.',
    previewColor: '#7C6B5E',
    previewLabel: 'Portfolio',
  },
  {
    id: '9',
    name: 'The Agency',
    category: 'Other',
    description: 'Versatile, modern layout for agencies, co-working spaces, or any business that defies categories.',
    previewColor: '#3D5A73',
    previewLabel: 'Other',
  },
];

const FILTERS = ['All', 'Restaurant & Café', 'Retail & Shop', 'Services', 'Portfolio', 'Other'];

export default function TemplatesPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const formRef = useRef(null as HTMLDivElement | null);

  const filtered =
    activeFilter === 'All'
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === activeFilter);

  const handleSelect = (name: string) => {
    setSelectedTemplate(name);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <main className="bg-brand-bg min-h-screen">
      <section className="py-16 px-4 text-center bg-white border-b border-brand-border">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight mb-4">
            Find Your Perfect Website Style
          </h1>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            Browse templates built for real businesses. See one you like? I&apos;ll build it for you.
          </p>
        </div>
      </section>

      <section className="py-8 px-4 bg-white sticky top-16 z-30 border-b border-brand-border shadow-sm">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-brand-orange text-white shadow-sm'
                    : 'bg-brand-bg border border-brand-border text-brand-dark hover:border-brand-orange hover:text-brand-orange'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={handleSelect}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-brand-muted">
              No templates found for this category.
            </div>
          )}
        </div>
      </section>

      <section className="py-4 px-4 text-center">
        <a
          href="#inquiry-form"
          onClick={(e) => {
            e.preventDefault();
            formRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-sm text-brand-orange hover:text-brand-orange-light transition-colors font-medium"
        >
          <ArrowDown size={15} />
          Jump to the enquiry form
        </a>
      </section>

      <section
        id="inquiry-form"
        ref={formRef}
        className="py-16 px-4 bg-white border-t border-brand-border"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-2">
              {selectedTemplate
                ? `You selected: ${selectedTemplate}`
                : 'Ready to Get Started?'}
            </h2>
            <p className="text-brand-muted">
              {selectedTemplate
                ? "Great choice! Fill in your details and I'll be in touch within 24 hours."
                : "Tell me about your business and I\u2019ll find the perfect solution for you."}
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-brand-border p-6 sm:p-8 shadow-sm">
            <InquiryForm
              key={selectedTemplate}
              prefilledTemplate={selectedTemplate}
              showTemplateField={true}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
