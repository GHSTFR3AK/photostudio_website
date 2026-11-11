import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Play, X, Music2, MapPin, ChevronLeft, ChevronRight } from 'lucide-react'
import { cinematicReelsData, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Placeholder } from './ui/Placeholder'

export const CinematicReels: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()
  const [activeReelIndex, setActiveReelIndex] = useState<number | null>(null)

  const activeReel = activeReelIndex !== null ? cinematicReelsData[activeReelIndex] : null

  return (
    <section
      id="cinematic-reels"
      className="py-16 md:py-24 bg-sand text-ink scroll-mt-20 border-t border-line"
      aria-labelledby="reels-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <SectionHeading
          id="reels-heading"
          eyebrow={uiText.reels.eyebrow[language]}
          titleLead={uiText.reels.h2Lead[language]}
          titleEmphasized={uiText.reels.h2Emphasized[language]}
          align="center"
          className="mb-3"
        />

        <p className="text-center font-sans text-muted text-sm sm:text-base max-w-xl mx-auto mb-12">
          {uiText.reels.tagline[language]}
        </p>

        {/* 4 Vertical Smartphone-Style Reels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cinematicReelsData.map((reel, idx) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0 : 0.45,
                delay: prefersReduced ? 0 : idx * 0.1,
              }}
              onClick={() => setActiveReelIndex(idx)}
              className="group relative bg-[#1A1214] rounded-[20px] overflow-hidden border border-gold/40 shadow-lg cursor-pointer aspect-[9/16] flex flex-col justify-between p-4 gold-focus transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-gold"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setActiveReelIndex(idx)
                }
              }}
              aria-label={`Play cinematic teaser for ${reel.couple}`}
            >
              {/* Background Thumbnail Image with subtle hover zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
                  <Placeholder
                    src={reel.thumbnail}
                    alt={reel.couple}
                    label={reel.couple}
                    sublabel={reel.event.en}
                    tint="gallery"
                    height="h-full"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Gradient Overlays for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/60 pointer-events-none" />

              {/* Top Header Badge */}
              <div className="relative z-10 flex items-center justify-between text-xs text-ivory">
                <span className="bg-wine/80 border border-gold/40 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase backdrop-blur-sm">
                  {reel.duration}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-gold-light">
                  <MapPin className="w-3 h-3 text-gold" />
                  {reel.location[language]}
                </span>
              </div>

              {/* Center Animated Play Icon Button */}
              <div className="relative z-10 self-center my-auto">
                <div className="w-14 h-14 rounded-full bg-gold/90 text-ink flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-gold transition-all duration-300">
                  <Play className="w-6 h-6 fill-ink ml-0.5" />
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="relative z-10 text-ivory">
                <p className="font-cormorant text-2xl font-bold text-ivory leading-tight drop-shadow-md">
                  {reel.couple}
                </p>
                <p className="font-sans text-xs text-gold-light font-medium mt-0.5">
                  {reel.event[language]}
                </p>

                <div className="flex items-center gap-1.5 text-[11px] text-ivory/70 mt-2 pt-2 border-t border-white/20">
                  <Music2 className="w-3.5 h-3.5 text-gold-light shrink-0" />
                  <span className="truncate">{reel.soundtrack}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Screen Vertical Cinema Modal */}
        {activeReel && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Cinematic reel of ${activeReel.couple}`}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveReelIndex(null)}
              className="absolute top-5 right-5 z-50 p-3 rounded-full text-white/80 hover:text-gold hover:bg-white/10 transition-colors gold-focus cursor-pointer"
              aria-label="Close cinematic teaser"
            >
              <X className="w-7 h-7" />
            </button>

            {/* Previous Reel Arrow */}
            <button
              onClick={() =>
                setActiveReelIndex(
                  (prev) =>
                    (prev! - 1 + cinematicReelsData.length) % cinematicReelsData.length
                )
              }
              className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-ivory hover:text-gold hover:bg-white/20 transition-all gold-focus cursor-pointer"
              aria-label="Previous reel"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Vertical Video Stage Card */}
            <div className="relative w-full max-w-[380px] h-[85vh] max-h-[720px] rounded-[24px] overflow-hidden border border-gold/40 shadow-2xl bg-[#1A1214] flex flex-col justify-between p-6">
              {/* Image Frame with Subtle Pulse Zoom */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Placeholder
                  src={activeReel.thumbnail}
                  alt={activeReel.couple}
                  label={activeReel.couple}
                  sublabel={activeReel.event.en}
                  tint="gallery"
                  height="h-full"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/70 pointer-events-none" />

              {/* Simulated Progress Bar */}
              <div className="relative z-10 w-full bg-white/30 h-1 rounded-full overflow-hidden mb-4">
                <div className="bg-gold h-full w-2/3 animate-[progress_8s_linear_infinite]" />
              </div>

              {/* Header Info */}
              <div className="relative z-10 flex items-center justify-between text-white text-xs">
                <div>
                  <h4 className="font-cormorant text-2xl font-bold text-gold-light leading-none">
                    {activeReel.couple}
                  </h4>
                  <p className="text-[11px] text-ivory/80 mt-1">{activeReel.location[language]}</p>
                </div>
                <span className="bg-wine px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-ivory border border-gold/40">
                  4K Cinematic
                </span>
              </div>

              {/* Bottom Actions & Summary */}
              <div className="relative z-10 text-ivory">
                <p className="font-cormorant italic text-base text-ivory/95 leading-relaxed mb-4">
                  "{activeReel.summary[language]}"
                </p>

                <div className="flex items-center gap-2 text-xs text-gold-light mb-5 bg-black/40 p-2.5 rounded-xl border border-white/10">
                  <Music2 className="w-4 h-4 text-gold shrink-0" />
                  <span className="truncate">{activeReel.soundtrack}</span>
                </div>

                <Button
                  variant="gold"
                  href={waLink(
                    `Hi Neeraj ji, I loved the cinematic film of ${activeReel.couple}. I want to inquire about wedding cinematography.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full justify-center text-sm shadow-md"
                >
                  Book Cinematic Wedding Film
                </Button>
              </div>
            </div>

            {/* Next Reel Arrow */}
            <button
              onClick={() =>
                setActiveReelIndex((prev) => (prev! + 1) % cinematicReelsData.length)
              }
              className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-ivory hover:text-gold hover:bg-white/20 transition-all gold-focus cursor-pointer"
              aria-label="Next reel"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  )
}
