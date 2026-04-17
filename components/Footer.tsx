import Link from 'next/link';
import { Mail, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1C1C1C' }} className="text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          <div>
            <div className="text-xl font-bold text-brand-orange mb-3">
              [PLATFORM NAME]
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Research-driven websites for real businesses. We study your market before writing a single line of code.
            </p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Navigate
            </div>
            <nav className="flex flex-col gap-2">
              {[
                { label: 'Templates', href: '/templates' },
                { label: 'Contact', href: '/contact' },
                { label: 'Coming Soon', href: '/coming-soon' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
              Get in Touch
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:email@placeholder.com"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail size={15} className="text-brand-orange shrink-0" />
                email@placeholder.com
              </a>
              <a
                href="https://wa.me/300000000000"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <MessageCircle size={15} className="text-brand-orange shrink-0" />
                +30 000 000 0000
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin size={15} className="text-brand-orange shrink-0" />
                Based in Greece, working worldwide
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <span>© 2026 [PLATFORM NAME]. Built with care for businesses everywhere.</span>
          <div className="flex gap-4">
            <Link href="/templates" className="hover:text-white/70 transition-colors">Templates</Link>
            <Link href="/contact" className="hover:text-white/70 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
