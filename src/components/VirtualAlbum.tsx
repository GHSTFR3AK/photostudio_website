import React, { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, BookOpen, Sparkles } from 'lucide-react'
import { virtualAlbumPages, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Placeholder } from './ui/Placeholder'

export const VirtualAlbum: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()
  const [currentPageIndex, setCurrentPageIndex] = useState(0)

  const currentPage = virtualAlbumPages[currentPageIndex]

  const handleNext = () => {
    setCurrentPageIndex((prev) => (prev + 1) % virtualAlbumPages.length)
  }

  const handlePrev = () => {
    setCurrentPageIndex((prev) => (prev - 1 + virtualAlbumPages.length) % virtualAlbumPages.length)
  }

  return (
    <section
      id="virtual-album"
      className="py-16 md:py-24 bg-gallery text-ivory scroll-mt-20 overflow-hidden relative"
      aria-labelledby="album-heading"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-wine/25 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <SectionHeading
          id="album-heading"
          eyebrow={uiText.album.eyebrow[language]}
          titleLead={uiText.album.h2Lead[language]}
          titleEmphasized={uiText.album.h2Emphasized[language]}
          align="center"
          dark={true}
          className="mb-3"
        />

        <p className="text-center font-sans text-ivory/70 text-sm sm:text-base max-w-xl mx-auto mb-12">
          {uiText.album.tagline[language]}
        </p>

        {/* Photobook Stage */}
        <div className="max-w-4xl mx-auto">
          {/* Virtual Photobook Spread with Leatherette Spine and Gold Corner Accents */}
          <div className="relative bg-[#221619] border-2 border-gold/40 rounded-[20px] p-4 sm:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
            {/* Gold Corner Embellishments */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-gold pointer-events-none" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-gold pointer-events-none" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-gold pointer-events-none" />

            {/* Inner Book Spread */}
            <div className="bg-[#FAF7F2] text-ink rounded-[14px] p-4 sm:p-7 shadow-inner min-h-[380px] sm:min-h-[460px] flex flex-col justify-between relative overflow-hidden">
              {/* Central Spine Fold Shadow */}
              <div
                className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/10 via-black/25 to-black/10 pointer-events-none z-20"
                aria-hidden="true"
              />

              {/* Page Content Animation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage.pageNumber}
                  initial={{ opacity: 0, rotateY: prefersReduced ? 0 : 8, scale: 0.98 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: prefersReduced ? 0 : -8, scale: 0.98 }}
                  transition={{ duration: prefersReduced ? 0 : 0.45, ease: 'easeOut' as const }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center flex-1 z-10"
                >
                  {/* Left Side: Photo with Gold Frame Border */}
                  <div className="w-full h-[260px] sm:h-[350px] rounded-[10px] overflow-hidden border border-line shadow-md relative bg-sand">
                    <Placeholder
                      src={currentPage.image}
                      alt={currentPage.title.en}
                      label={currentPage.title.en}
                      sublabel={currentPage.caption.hi}
                      tint="sand"
                      height="h-full"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Right Side: Editorial Page Typography */}
                  <div className="flex flex-col justify-center px-2 sm:px-6">
                    <div className="flex items-center gap-2 text-gold-text text-xs uppercase tracking-widest font-semibold mb-2">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Sangeeta Royal Collection</span>
                    </div>

                    <h3 className="font-cormorant text-3xl sm:text-4xl font-bold text-wine leading-tight mb-4">
                      {currentPage.title[language]}
                    </h3>

                    <div className="w-12 h-[1px] bg-gold mb-4" aria-hidden="true" />

                    <p className="font-cormorant italic text-lg sm:text-xl text-ink/80 leading-relaxed mb-6">
                      "{currentPage.caption[language]}"
                    </p>

                    <div className="flex items-center gap-2 text-xs text-muted font-sans font-medium">
                      <BookOpen className="w-4 h-4 text-wine" />
                      <span>Lay-flat Italian Archival Velvet • Anti-fade 100yr Guarantee</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Bottom Pagination & Page Number */}
              <div className="flex items-center justify-between pt-4 border-t border-line/60 z-10 text-xs font-semibold text-muted">
                <span>
                  {uiText.album.pageLabel[language]} {currentPage.pageNumber} of {virtualAlbumPages.length}
                </span>

                <div className="flex items-center gap-2">
                  {virtualAlbumPages.map((p, idx) => (
                    <button
                      key={p.pageNumber}
                      onClick={() => setCurrentPageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all gold-focus cursor-pointer ${
                        currentPageIndex === idx
                          ? 'bg-wine w-6'
                          : 'bg-line hover:bg-wine/40'
                      }`}
                      aria-label={`Go to page ${idx + 1}`}
                    />
                  ))}
                </div>

                <span className="font-serif italic text-wine">Sangeeta Studio Heirloom</span>
              </div>
            </div>

            {/* Book Flip Prev / Next Arrows */}
            <button
              onClick={handlePrev}
              className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold text-ink flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all gold-focus cursor-pointer z-30"
              aria-label="Previous album page"
            >
              <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-gold text-ink flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all gold-focus cursor-pointer z-30"
              aria-label="Next album page"
            >
              <ChevronRight className="w-6 h-6 stroke-[2.5]" />
            </button>
          </div>

          {/* Under-Album Order CTA */}
          <div className="mt-10 text-center">
            <Button
              variant="outline-gold"
              href={waLink('Hi Sangeeta Studio, I want to enquire about creating a luxury wedding photobook')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 shadow-sm"
            >
              {uiText.album.customiseAlbum[language]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
