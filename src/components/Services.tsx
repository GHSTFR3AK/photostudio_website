import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { services, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeading } from './ui/SectionHeading'
import { Placeholder } from './ui/Placeholder'

interface ServicesProps {
  onSelectCategory?: (category: string) => void
}

export const Services: React.FC<ServicesProps> = ({ onSelectCategory }) => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()

  const handleCardClick = (category: string) => {
    if (onSelectCategory) {
      onSelectCategory(category)
    }
    const portfolioElem = document.getElementById('portfolio')
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-ivory text-ink scroll-mt-20"
      aria-labelledby="services-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          id="services-heading"
          eyebrow={uiText.services.eyebrow[language]}
          titleLead={uiText.services.h1Lead[language]}
          titleEmphasized={uiText.services.h1Emphasized[language]}
          align="center"
          className="mb-12 md:mb-16"
        />

        {/* 5-Card Grid: 5 columns desktop, 2 tablet, 1 phone / horizontal scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0 : 0.5,
                delay: prefersReduced ? 0 : index * 0.1,
                ease: 'easeOut' as const,
              }}
              onClick={() => handleCardClick(service.portfolioCategory)}
              className="group cursor-pointer bg-white border border-line rounded-[16px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,31,29,0.12)] gold-focus"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleCardClick(service.portfolioCategory)
                }
              }}
              aria-label={`Explore ${service.title.en} photography portfolio`}
            >
              {/* Photo on top (200px tall with hover zoom 1.05) */}
              <div className="h-[200px] w-full overflow-hidden relative bg-sand">
                <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <Placeholder
                    src={service.image}
                    alt={service.alt}
                    label={service.title.en}
                    sublabel={service.title.hi}
                    tint="sand"
                    height="h-full"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Text Padding 20px */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-wine group-hover:text-wine-dark transition-colors leading-tight">
                    {service.title.en}
                  </h3>
                  <p className="font-hindi text-wine text-[15px] mt-1 font-medium">
                    {service.title.hi}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-line/40 flex items-center justify-between text-xs text-gold-text font-medium tracking-wider uppercase">
                  <span>View Gallery</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
