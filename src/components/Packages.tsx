import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { packages, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'

export const Packages: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="packages"
      className="py-16 md:py-24 bg-sand text-ink scroll-mt-20"
      aria-labelledby="packages-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          id="packages-heading"
          eyebrow={uiText.packages.eyebrow[language]}
          titleLead={uiText.packages.h2Lead[language]}
          titleEmphasized={uiText.packages.h2Emphasized[language]}
          align="center"
          className="mb-14"
        />

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => {
            const isFeatured = pkg.featured

            return (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: prefersReduced ? 0 : 0.5,
                  delay: prefersReduced ? 0 : index * 0.12,
                }}
                className={`relative bg-white rounded-[16px] p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,31,29,0.12)] ${
                  isFeatured
                    ? 'border-2 border-wine lg:-my-2 shadow-md lg:py-10 z-10'
                    : 'border border-line'
                }`}
              >
                {/* Most Loved Ribbon for Gold Package */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-wine text-ivory text-xs font-semibold tracking-widest uppercase py-1 px-4 rounded-full shadow">
                    {pkg.tag}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-cormorant text-[40px] font-semibold text-wine leading-tight">
                      {pkg.name}
                    </h3>
                    {!isFeatured && (
                      <span className="text-xs font-semibold text-gold-text uppercase tracking-widest">
                        {pkg.tag}
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="font-cormorant text-2xl font-bold text-ink mb-4">
                    {pkg.price}
                  </div>

                  {/* Gold Rule */}
                  <div className="w-12 h-[1px] bg-gold mb-6" aria-hidden="true" />

                  {/* Checklist of inclusions */}
                  <ul className="space-y-3.5 mb-8">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-ink/85 leading-snug">
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center shrink-0 text-gold-text">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Enquire Button */}
                <Button
                  variant={isFeatured ? 'primary' : 'outline-wine'}
                  href={waLink(pkg.enquiryMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center"
                >
                  {uiText.packages.enquireCta[language]}
                </Button>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
