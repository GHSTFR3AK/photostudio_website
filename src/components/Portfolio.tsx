import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { portfolio, business, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Lightbox } from './Lightbox'
import { Placeholder } from './ui/Placeholder'

interface PortfolioProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export const Portfolio: React.FC<PortfolioProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filterTabs = [
    { id: 'all', label: uiText.portfolio.filterAll[language] },
    { id: 'wedding', label: uiText.portfolio.filterWedding[language] },
    { id: 'prewedding', label: uiText.portfolio.filterPrewedding[language] },
    { id: 'fashion', label: uiText.portfolio.filterFashion[language] },
    { id: 'kids', label: uiText.portfolio.filterKids[language] },
  ]

  const filteredItems =
    selectedCategory === 'all'
      ? portfolio
      : portfolio.filter((item) => item.category === selectedCategory)

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-gallery text-ivory scroll-mt-20"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header & Filter Controls Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          {/* Heading Left */}
          <SectionHeading
            id="portfolio-heading"
            eyebrow={uiText.portfolio.eyebrow[language]}
            titleLead={uiText.portfolio.h2Lead[language]}
            titleEmphasized={uiText.portfolio.h2Emphasized[language]}
            align="left"
            dark={true}
          />

          {/* Filter Pills Right */}
          <div
            className="flex flex-wrap items-center gap-2.5"
            role="tablist"
            aria-label="Filter portfolio by category"
          >
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold tracking-wider transition-all duration-200 cursor-pointer gold-focus ${
                    isActive
                      ? 'bg-gold text-ink shadow-md scale-105'
                      : 'border border-gold/60 text-ivory/90 hover:bg-gold/15'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Masonry CSS Grid */}
        <motion.div
          layout={!prefersReduced}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[180px]"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => {
              const isTall = item.tall

              return (
                <motion.div
                  key={item.id}
                  layout={!prefersReduced}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: prefersReduced ? 0 : 0.4, ease: 'easeOut' as const }}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative overflow-hidden rounded-[16px] border border-white/10 cursor-pointer bg-sand/5 gold-focus ${
                    isTall ? 'row-span-2' : 'row-span-1'
                  }`}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setLightboxIndex(index)
                    }
                  }}
                  aria-label={`Open photo: ${item.title[language]}`}
                >
                  {/* Image container with 1.05 zoom on hover */}
                  <div className="w-full h-full overflow-hidden">
                    <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
                      <Placeholder
                        src={item.src}
                        alt={item.alt}
                        label={item.title.en}
                        sublabel={item.title.hi}
                        tint="gallery"
                        height="h-full"
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {/* Dark overlay showing category & title */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gallery/90 via-gallery/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                    <span className="text-[11px] uppercase tracking-widest text-gold-light font-semibold mb-1">
                      {item.category.toUpperCase()}
                    </span>
                    <h3 className="font-cormorant text-xl font-medium text-ivory">
                      {item.title[language]}
                    </h3>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Below Button: See more on Instagram */}
        <div className="mt-14 text-center">
          <Button
            variant="outline-gold"
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 border-gold text-gold-light hover:bg-gold/15"
          >
            {uiText.portfolio.instagramCta[language]}
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() =>
            setLightboxIndex((prev) =>
              prev === null || prev === 0 ? filteredItems.length - 1 : prev - 1
            )
          }
          onNext={() =>
            setLightboxIndex((prev) =>
              prev === null || prev === filteredItems.length - 1 ? 0 : prev + 1
            )
          }
        />
      )}
    </section>
  )
}
