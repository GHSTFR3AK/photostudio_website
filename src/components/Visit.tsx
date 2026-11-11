import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { business, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { Button } from './ui/Button'
import { Placeholder } from './ui/Placeholder'

export const Visit: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()

  const hasValidMapEmbed =
    business.mapsEmbedUrl &&
    !business.mapsEmbedUrl.includes('[GOOGLE_MAPS_EMBED_URL]') &&
    business.mapsEmbedUrl.startsWith('https://')

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-ivory text-ink scroll-mt-20"
      aria-labelledby="visit-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Studio Details & Direct Actions */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReduced ? 0 : 0.6 }}
          className="lg:col-span-6 flex flex-col items-start"
        >
          <span className="text-gold-text text-xs uppercase font-medium tracking-[0.24em] mb-2 block">
            {uiText.visit.eyebrow[language]}
          </span>

          {/* Hindi H2 in Tiro Devanagari */}
          <h2
            id="visit-heading"
            className="font-hindi text-4xl sm:text-5xl font-bold text-wine tracking-tight mb-4"
          >
            {uiText.visit.h2Hindi}
          </h2>

          <div className="w-16 h-[1px] bg-gold mb-8" aria-hidden="true" />

          {/* Contact & Location Rows with Lucide Icons */}
          <div className="space-y-6 mb-8 w-full">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center shrink-0 text-wine border border-line">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted font-semibold">
                  {uiText.visit.addressLabel[language]}
                </p>
                <p className="text-base text-ink font-medium mt-0.5">
                  {business.address}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center shrink-0 text-wine border border-line">
                <Clock className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted font-semibold">
                  {uiText.visit.hoursLabel[language]}
                </p>
                <p className="text-base text-ink font-medium mt-0.5">
                  {business.hours}
                </p>
              </div>
            </div>

            {/* Phone & Owner */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-sand flex items-center justify-center shrink-0 text-wine border border-line">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted font-semibold">
                  {uiText.visit.phoneLabel[language]}
                </p>
                <p className="text-base text-ink font-medium mt-0.5">
                  {business.owner} —{' '}
                  <a
                    href={`tel:${business.phone}`}
                    className="text-wine font-semibold hover:underline"
                  >
                    {business.phoneDisplay}
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Buttons: Call Now & Get Directions */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="primary"
              href={`tel:${business.phone}`}
              className="gap-2 px-7"
            >
              <Phone className="w-4 h-4" />
              <span>{uiText.visit.callNow[language]}</span>
            </Button>

            <Button
              variant="outline-wine"
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2 px-7"
            >
              <Navigation className="w-4 h-4" />
              <span>{uiText.visit.getDirections[language]}</span>
            </Button>
          </div>
        </motion.div>

        {/* Right Column: Google Maps Embed or Graceful Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReduced ? 0 : 0.6 }}
          className="lg:col-span-6 w-full h-[360px] sm:h-[420px] rounded-[16px] overflow-hidden border border-line shadow-md bg-sand"
        >
          {hasValidMapEmbed ? (
            <iframe
              src={business.mapsEmbedUrl}
              title="Sangeeta Studio Location"
              loading="lazy"
              className="w-full h-full border-0 rounded-[16px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
              <MapPin className="w-12 h-12 text-wine/50 mb-3" />
              <Placeholder
                label="Google Maps Location"
                sublabel={business.address}
                tint="sand"
                height="h-auto"
                className="border-none bg-transparent"
              />
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs font-semibold text-wine underline tracking-wider uppercase"
              >
                Open in Maps [GOOGLE_MAPS_URL]
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
