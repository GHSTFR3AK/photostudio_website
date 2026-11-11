import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { printing, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'

export const Printing: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()

  const categories = [
    {
      title: uiText.printing.col1Title[language],
      items: printing.printing,
    },
    {
      title: uiText.printing.col2Title[language],
      items: printing.photoAndFrames,
    },
    {
      title: uiText.printing.col3Title[language],
      items: printing.cardsAndStamps,
    },
  ]

  return (
    <section
      id="printing"
      className="py-16 md:py-24 bg-sand text-ink scroll-mt-20"
      aria-labelledby="printing-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left Column: Heading & Paragraph */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReduced ? 0 : 0.6 }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <SectionHeading
            id="printing-heading"
            eyebrow={uiText.printing.eyebrow[language]}
            titleLead={uiText.printing.h2Lead[language]}
            titleEmphasized={uiText.printing.h2Emphasized[language]}
            align="left"
            className="mb-6"
          />

          <p className="font-sans text-muted text-base leading-relaxed mb-8">
            {uiText.printing.paragraph[language]}
          </p>

          <Button
            variant="outline-wine"
            href={waLink('Hi, I want to inquire about printing, stamps and framing services')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7"
          >
            {uiText.common.bookShoot[language] === 'शूट बुक करें'
              ? 'प्रिंटिंग के लिए संपर्क करें'
              : 'Enquire for Printing'}
          </Button>
        </motion.div>

        {/* Right Column: 3 Grouped Lists as Small Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0 : 0.5,
                delay: prefersReduced ? 0 : idx * 0.1,
              }}
              className="bg-white rounded-[16px] border border-line p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-cormorant text-xl font-bold text-wine pb-3 border-b border-line mb-4">
                {cat.title}
              </h3>

              <ul className="space-y-2.5">
                {cat.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-2.5 text-[13px] text-ink/85 leading-snug"
                  >
                    {/* Gold dot before each item */}
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-gold shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item[language]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
