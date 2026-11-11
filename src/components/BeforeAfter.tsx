import React, { useState, useRef, useCallback } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { SectionHeading } from './ui/SectionHeading'
import { Button } from './ui/Button'
import { Placeholder } from './ui/Placeholder'

export const BeforeAfter: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percent)
  }, [])

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    handleMove(e.clientX)
  }

  return (
    <section
      className="py-16 md:py-24 bg-ivory text-ink scroll-mt-20 overflow-hidden"
      aria-labelledby="retouch-heading"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' as const }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <SectionHeading
            id="retouch-heading"
            eyebrow={uiText.beforeAfter.eyebrow[language]}
            titleLead={uiText.beforeAfter.h2Lead[language]}
            titleEmphasized={uiText.beforeAfter.h2Emphasized[language]}
            align="left"
            className="mb-6"
          />

          <p className="font-sans text-muted text-base leading-relaxed mb-8">
            {uiText.beforeAfter.paragraph[language]}
          </p>

          <Button
            variant="primary"
            href={waLink('Hi, I have an old/damaged photo I would like restored and printed')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 shadow-sm"
          >
            {uiText.beforeAfter.cta[language]}
          </Button>
        </motion.div>

        {/* Right Column: Interactive Before / After Slider */}
        <motion.div
          initial={{ opacity: 0, x: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: prefersReduced ? 0 : 0.6, ease: 'easeOut' as const }}
          className="lg:col-span-7"
        >
          <div
            ref={containerRef}
            className="relative w-full h-[360px] sm:h-[440px] rounded-[16px] overflow-hidden select-none border border-line shadow-lg bg-sand cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* "AFTER" (Restored) Image - Full width underlayer */}
            <div className="absolute inset-0 w-full h-full">
              <Placeholder
                src="/images/retouch/after.webp"
                alt="Restored vibrant archival photo"
                label="Restored / After portrait"
                sublabel="Digitally Enhanced &amp; Retouched"
                tint="sand"
                height="h-full"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-4 right-4 bg-ink/75 text-ivory text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm pointer-events-none">
                {uiText.beforeAfter.afterLabel[language]}
              </span>
            </div>

            {/* "BEFORE" (Faded / Damaged) Image - Clipped top layer */}
            <div
              className="absolute inset-0 h-full overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="absolute inset-0 w-[100vw] max-w-[700px] h-full filter sepia-[0.35] brightness-90">
                <Placeholder
                  src="/images/retouch/before.webp"
                  alt="Original faded damaged portrait photo"
                  label="Faded / Before portrait"
                  sublabel="Original Damaged State"
                  tint="wine-soft"
                  height="h-full"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute bottom-4 left-4 bg-wine/85 text-ivory text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm pointer-events-none">
                {uiText.beforeAfter.beforeLabel[language]}
              </span>
            </div>

            {/* Vertical Ivory Divider with Round Gold Handle */}
            <div
              className="absolute top-0 bottom-0 w-[2px] bg-ivory shadow-lg flex items-center justify-center -ml-[1px] pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-10 h-10 rounded-full bg-gold border-2 border-ivory text-ink flex items-center justify-center shadow-xl text-xs font-bold font-sans">
                ⇄
              </div>
            </div>

            {/* Hidden Accessibility Range Input for Keyboard & Screen Readers */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full"
              aria-label="Before and after photo restoration comparison slider. Use left and right arrow keys to adjust."
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          <p className="text-center text-xs text-muted mt-3">
            Drag the handle or use ← / → arrow keys to compare restoration quality
          </p>
        </motion.div>
      </div>
    </section>
  )
}
