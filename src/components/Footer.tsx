import React from 'react'
import { Phone, MapPin, Camera } from 'lucide-react'
import { business, navigationLinks, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'

export const Footer: React.FC = () => {
  const { language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-ink text-ivory pt-16 pb-12 border-t border-gold/20" aria-label="Footer">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Tagline */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full border border-gold-light/30 flex items-center justify-center text-gold-light bg-white/5">
                <Camera className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-cormorant font-bold text-2xl tracking-[0.08em] text-gold-light">
                  {business.shortName}
                </span>
                <span className="font-sans font-medium text-[10px] uppercase tracking-[0.18em] text-ivory/60 mt-1">
                  {business.tagline[language]}
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-ivory/70 leading-relaxed max-w-sm mb-6">
              {uiText.footer.tagline[language]}
            </p>

            <div className="flex items-center gap-4">
              {/* Instagram link with inline SVG */}
              <a
                href={business.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold-light hover:bg-gold/20 hover:border-gold transition-colors gold-focus"
                aria-label="Follow Sangeeta Studio on Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Call link */}
              <a
                href={`tel:${business.phone}`}
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold-light hover:bg-gold/20 hover:border-gold transition-colors gold-focus"
                aria-label="Call Sangeeta Studio"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-cormorant text-xl font-semibold text-gold-light mb-4">
              {uiText.footer.quickLinks[language]}
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ivory/70 hover:text-gold-light transition-colors inline-block py-0.5 gold-focus rounded-sm"
                  >
                    {link.label[language]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="font-cormorant text-xl font-semibold text-gold-light mb-4">
              {uiText.footer.contact[language]}
            </h4>
            <div className="space-y-3 text-sm text-ivory/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-light shrink-0 mt-0.5" />
                <span>{business.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-light shrink-0" />
                <a
                  href={`tel:${business.phone}`}
                  className="hover:text-gold-light transition-colors"
                >
                  {business.phoneDisplay} ({business.owner})
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-ivory/50 gap-4">
          <p>
            © {currentYear} {business.name.en}. All rights reserved.
          </p>
          <p className="font-serif italic text-gold-light/60">
            Crafted for Royal Celebrations
          </p>
        </div>
      </div>
    </footer>
  )
}
