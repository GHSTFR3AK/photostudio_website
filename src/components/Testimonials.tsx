import React, { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { testimonials, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'

export const Testimonials: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)

  return (
    <section
      className="py-16 md:py-24 bg-wine text-ivory relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Eyebrow & Centered H2 in Ivory */}
        <div className="text-center mb-14">
          <span className="text-gold-light text-xs uppercase font-medium tracking-[0.24em] mb-2 block">
            {uiText.testimonials.eyebrow[language]}
          </span>
          <h2
            id="testimonials-heading"
            className="font-cormorant text-3xl sm:text-4xl md:text-[52px] leading-[1.15] font-semibold text-ivory"
          >
            {uiText.testimonials.h2Lead[language]}{' '}
            <span className="italic font-normal text-gold-light">
              {uiText.testimonials.h2Emphasized[language]}
            </span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" aria-hidden="true" />
        </div>

        {/* Desktop 3-Card Grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: prefersReduced ? 0 : 0.5,
                delay: prefersReduced ? 0 : idx * 0.1,
              }}
              className="bg-wine-dark/50 border border-wine-soft/60 rounded-[16px] p-8 flex flex-col justify-between backdrop-blur-sm"
            >
              <div>
                {/* Large gold opening quote mark */}
                <span
                  className="font-cormorant text-6xl text-gold-light leading-none block mb-2 select-none"
                  aria-hidden="true"
                >
                  “
                </span>
                <p className="font-cormorant italic text-[21px] text-ivory/95 leading-relaxed mb-6">
                  {review.text}
                </p>
              </div>

              <div className="pt-4 border-t border-wine-soft/40">
                <p className="font-sans text-sm font-semibold tracking-wide text-gold-light">
                  {review.name}
                </p>
                <p className="text-xs text-ivory/60 uppercase tracking-widest mt-0.5">
                  {review.event[language]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swipeable Carousel with Dots */}
        <div className="md:hidden">
          <div className="bg-wine-dark/60 border border-wine-soft/60 rounded-[16px] p-6 flex flex-col justify-between min-h-[220px]">
            <div>
              <span
                className="font-cormorant text-5xl text-gold-light leading-none block mb-1 select-none"
                aria-hidden="true"
              >
                “
              </span>
              <p className="font-cormorant italic text-lg sm:text-[21px] text-ivory leading-relaxed mb-4">
                {testimonials[activeMobileIndex].text}
              </p>
            </div>

            <div className="pt-3 border-t border-wine-soft/40 flex items-center justify-between">
              <div>
                <p className="font-sans text-sm font-semibold text-gold-light">
                  {testimonials[activeMobileIndex].name}
                </p>
                <p className="text-[11px] text-ivory/60 uppercase tracking-widest">
                  {testimonials[activeMobileIndex].event[language]}
                </p>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setActiveMobileIndex(dotIdx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeMobileIndex === dotIdx
                        ? 'bg-gold w-6'
                        : 'bg-white/30 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
