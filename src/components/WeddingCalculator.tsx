import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check, Sparkles, MessageSquare, ChevronRight } from 'lucide-react'
import { weddingCalculatorSections, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'

export const WeddingCalculator: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()

  // Initial selected state
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string[]>>({
    days: ['2-days'],
    photography: ['candid', 'traditional-photo'],
    cinematography: ['4k-film', 'drone'],
    keepsakes: ['flush-album-1'],
  })

  const toggleOption = (sectionId: string, optionId: string, isMulti: boolean) => {
    setSelectedOptions((prev) => {
      const current = prev[sectionId] || []
      if (!isMulti) {
        return { ...prev, [sectionId]: [optionId] }
      }
      if (current.includes(optionId)) {
        return { ...prev, [sectionId]: current.filter((id) => id !== optionId) }
      } else {
        return { ...prev, [sectionId]: [...current, optionId] }
      }
    })
  }

  // Compile selected items text for WhatsApp
  const getSelectedSummary = () => {
    const list: string[] = []
    weddingCalculatorSections.forEach((sec) => {
      const activeIds = selectedOptions[sec.id] || []
      sec.options
        .filter((opt) => activeIds.includes(opt.id))
        .forEach((opt) => list.push(opt.label.en))
    })
    return list
  }

  const selectedItems = getSelectedSummary()
  const waCustomMessage = `Hi Neeraj ji (Sangeeta Studio), I customized my wedding package with the following preferences:\n\n• ${selectedItems.join(
    '\n• '
  )}\n\nPlease share availability and quotation for my wedding dates.`

  return (
    <section
      id="custom-calculator"
      className="py-16 md:py-24 bg-ivory text-ink scroll-mt-20 border-t border-line"
      aria-labelledby="calculator-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          id="calculator-heading"
          eyebrow={uiText.calculator.eyebrow[language]}
          titleLead={uiText.calculator.h2Lead[language]}
          titleEmphasized={uiText.calculator.h2Emphasized[language]}
          titleTail={uiText.calculator.h2Tail[language]}
          align="center"
          className="mb-3"
        />

        <p className="text-center font-sans text-muted text-sm sm:text-base max-w-xl mx-auto mb-14">
          {uiText.calculator.tagline[language]}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Configuration Options */}
          <div className="lg:col-span-8 space-y-8">
            {weddingCalculatorSections.map((section) => {
              const currentSelected = selectedOptions[section.id] || []

              return (
                <div
                  key={section.id}
                  className="bg-white rounded-[16px] border border-line p-6 shadow-sm"
                >
                  <h3 className="font-cormorant text-2xl font-bold text-wine mb-4 flex items-center justify-between">
                    <span>{section.title[language]}</span>
                    <span className="text-xs uppercase tracking-wider font-sans font-medium text-gold-text">
                      {section.isMulti ? '(Select multiple)' : '(Choose one)'}
                    </span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {section.options.map((opt) => {
                      const isChecked = currentSelected.includes(opt.id)

                      return (
                        <div
                          key={opt.id}
                          onClick={() => toggleOption(section.id, opt.id, !!section.isMulti)}
                          className={`group relative p-4 rounded-[12px] border cursor-pointer transition-all select-none gold-focus ${
                            isChecked
                              ? 'border-wine bg-wine/5 shadow-sm'
                              : 'border-line/80 hover:border-wine/40 bg-sand/20'
                          }`}
                          role="checkbox"
                          aria-checked={isChecked}
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault()
                              toggleOption(section.id, opt.id, !!section.isMulti)
                            }
                          }}
                        >
                          {opt.badge && (
                            <span className="absolute -top-2.5 right-3 bg-gold text-ink text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                              {opt.badge}
                            </span>
                          )}

                          <div className="flex items-start gap-3">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                isChecked
                                  ? 'bg-wine text-ivory'
                                  : 'border border-line bg-white text-transparent group-hover:border-wine'
                              }`}
                            >
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>

                            <div>
                              <p className="font-sans text-sm font-semibold text-ink group-hover:text-wine transition-colors leading-snug">
                                {opt.label[language]}
                              </p>
                              {opt.description && (
                                <p className="font-sans text-xs text-muted mt-1 leading-relaxed">
                                  {opt.description[language]}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Live Selection Summary & WhatsApp Quote CTA */}
          <motion.div
            initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-4 sticky top-24"
          >
            <div className="bg-sand rounded-[20px] border border-line p-6 sm:p-7 shadow-lg">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-line">
                <Sparkles className="w-5 h-5 text-gold-text" />
                <h3 className="font-cormorant text-2xl font-bold text-wine leading-none">
                  Your Bespoke Suite
                </h3>
              </div>

              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest text-muted font-bold mb-3">
                  Selected Inclusions ({selectedItems.length}):
                </p>
                <ul className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                  {selectedItems.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-ink/90 font-medium leading-snug bg-white/70 p-2 rounded-lg border border-line/60"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-wine shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price placeholder notice per rule: no fake prices */}
              <div className="bg-white/90 rounded-xl p-3.5 border border-line mb-6 text-center">
                <span className="text-[11px] uppercase tracking-wider text-muted font-bold block mb-1">
                  Estimated Investment
                </span>
                <span className="font-cormorant text-2xl font-bold text-wine">
                  [₹ Price on Consultation]
                </span>
                <p className="text-[11px] text-muted mt-1">
                  Custom quote based on dates, crew size &amp; venue location
                </p>
              </div>

              {/* Instant WhatsApp Enquiry Button */}
              <Button
                variant="primary"
                href={waLink(waCustomMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center gap-2 shadow-md min-h-[50px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>{uiText.calculator.sendQuote[language]}</span>
                <ChevronRight className="w-4 h-4" />
              </Button>

              <p className="text-center text-[11px] text-muted mt-3">
                Sends full configuration directly to owner Neeraj Saxena on WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
