'use client';

export type Template = {
  id: string;
  name: string;
  category: string;
  description: string;
  previewColor: string;
  previewLabel: string;
};

type TemplateCardProps = {
  template: Template;
  onSelect: (name: string) => void;
};

export default function TemplateCard({ template, onSelect }: TemplateCardProps) {
  const categoryColors: Record<string, string> = {
    'Restaurant & Café': 'bg-orange-100 text-orange-700',
    'Retail & Shop': 'bg-pink-100 text-pink-700',
    'Services': 'bg-blue-100 text-blue-700',
    'Portfolio': 'bg-gray-100 text-gray-700',
    'Other': 'bg-green-100 text-green-700',
  };

  const badgeClass = categoryColors[template.category] || 'bg-gray-100 text-gray-700';

  return (
    <div className="bg-white rounded-2xl border border-brand-border shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
      <div
        className="h-48 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: template.previewColor }}
      >
        <span className="text-white font-semibold text-lg text-center px-4 leading-snug drop-shadow">
          {template.previewLabel}
        </span>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-brand-dark text-base">{template.name}</h3>
          <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${badgeClass}`}>
            {template.category}
          </span>
        </div>
        <p className="text-sm text-brand-muted leading-relaxed mb-4">{template.description}</p>
        <button
          onClick={() => onSelect(template.name)}
          className="w-full py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-light text-white text-sm font-semibold transition-colors"
        >
          I Want This One
        </button>
      </div>
    </div>
  );
}
