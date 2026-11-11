import React from 'react'
import { uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'

export const UrgentBand: React.FC = () => {
  const { language } = useLanguage()

  return (
    <aside
      className="bg-ink text-ivory border-y border-gold/25 py-3 relative z-20 text-sm"
      aria-label="Urgent Studio Services"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        {/* Left Side: Urgent Passport & Visa Photos */}
        <a
          href={waLink('Hi, I need urgent 1-minute Passport / Visa photos')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-wrap items-center justify-center md:justify-start gap-2.5 gold-focus rounded-full px-2 py-0.5"
        >
          <span className="bg-gold text-ink font-bold text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full inline-block group-hover:brightness-110 transition-all">
            {uiText.urgentBand.badge[language]}
          </span>
          <span className="text-ivory/95 font-medium tracking-wide">
            {uiText.urgentBand.passportText1[language]}{' '}
            <strong className="text-gold-light font-bold">
              {uiText.urgentBand.passportTextTime[language]}
            </strong>
          </span>
        </a>

        {/* Right Side: Rubber Stamps & Hindi Highlight */}
        <a
          href={waLink('Hi, I want to inquire about rubber stamps (Trodat / Dura)')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-wrap items-center justify-center md:justify-end gap-2.5 gold-focus rounded-full px-2 py-0.5"
        >
          <span className="font-hindi text-base text-gold-light font-bold tracking-wide italic">
            "{uiText.urgentBand.hindiStamp}"
          </span>
          <span className="text-ivory/80 font-normal">
            {uiText.urgentBand.stampDetails[language]}
          </span>
        </a>
      </div>
    </aside>
  )
}
