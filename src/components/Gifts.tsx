import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { gifts, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Placeholder } from './ui/Placeholder'

export const Gifts: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()

  return (
    <section
      id="gifts"
      className="py-16 md:py-24 bg-ivory text-ink scroll-mt-20"
      aria-labelledby="gifts-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          id="gifts-heading"
          eyebrow={uiText.gifts.eyebrow[language]}
          titleLead={uiText.gifts.h2Lead[language]}
          titleEmphasized={uiText.gifts.h2Emphasized[language]}
          align="center"
          className="mb-3"
        />

        <p className="text-center font-sans text-muted text-sm sm:text-base mb-12 max-w-lg mx-auto">
          {uiText.gifts.subline[language]}
        </p>

        {/* 12 Product Cards Grid (4 / 2 / 1 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0 : 0.4,
                delay: prefersReduced ? 0 : (index % 4) * 0.1,
              }}
              className="group bg-white border border-line rounded-[16px] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(42,31,29,0.12)]"
            >
              {/* Product Photo */}
              <div className="h-[200px] w-full overflow-hidden relative bg-sand/50">
                <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                  <Placeholder
                    src={gift.image}
                    alt={gift.alt}
                    label={gift.name.en}
                    sublabel={gift.name.hi}
                    tint="sand"
                    height="h-full"
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* Product Details & Action (20px padding) */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div className="mb-4">
                  <h3 className="font-cormorant text-2xl font-semibold text-wine group-hover:text-wine-dark transition-colors leading-tight">
                    {gift.name[language]}
                  </h3>
                  <p className="font-sans text-sm font-medium text-ink/75 mt-1">
                    {gift.price}
                  </p>
                </div>

                <Button
                  variant="primary"
                  href={waLink(`Hi, I want to order a ${gift.name.en}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center text-sm min-h-[44px] py-2"
                >
                  {uiText.gifts.orderCta[language]}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
