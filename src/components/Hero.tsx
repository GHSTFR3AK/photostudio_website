import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { Button } from './ui/Button'
import { Placeholder } from './ui/Placeholder'

export const Hero: React.FC = () => {
  const { language } = useLanguage()
  const prefersReduced = useReducedMotion()

  const textVariants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReduced ? 0 : i * 0.12,
        duration: prefersReduced ? 0 : 0.6,
        ease: 'easeOut' as const,
      },
    }),
  }

  return (
    <section
      className="relative bg-wine text-ivory min-h-[90vh] flex items-center overflow-hidden py-16 md:py-24"
      aria-labelledby="hero-heading"
    >
      {/* Decorative Subtle Gold Ambient Glow */}
      <div
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-wine-dark/80 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-[1200px] w-full mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column (Text First) */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          {/* Eyebrow */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-[40px] h-[1px] bg-gold" aria-hidden="true" />
            <span className="text-gold-light text-xs uppercase font-medium tracking-[0.24em]">
              {uiText.hero.eyebrow[language]}
            </span>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            id="hero-heading"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-cormorant text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-semibold leading-[1.08] tracking-tight mb-5"
          >
            {uiText.hero.h1Lead[language]}{' '}
            <span className="italic font-normal text-gold-light">
              {uiText.hero.h1Emphasized[language]}
            </span>{' '}
            {uiText.hero.h1Tail[language]}
          </motion.h1>

          {/* Hindi Line */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-hindi text-xl md:text-2xl text-gold-light/95 italic mb-6 leading-relaxed"
          >
            {uiText.hero.hindiLine}
          </motion.div>

          {/* Paragraph */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="font-sans text-base md:text-lg text-ivory/85 leading-relaxed max-w-xl mb-9"
          >
            {uiText.hero.paragraph[language]}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <Button
              variant="gold"
              href="#portfolio"
              className="px-8 shadow-sm"
            >
              {uiText.hero.ctaWork[language]}
            </Button>

            <Button
              variant="outline-gold"
              href={waLink('Hi Sangeeta Studio, I would like to enquire about your photography services')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8"
            >
              {uiText.hero.ctaWhatsapp[language]}
            </Button>
          </motion.div>
        </div>

        {/* Right Column (Editorial Photo Collage) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Tall Arch-shaped Main Hero Portrait */}
            <div className="sm:row-span-2 relative group overflow-hidden border border-gold/70 shadow-2xl arch-frame bg-wine-dark">
              <div
                className={`w-full h-[400px] sm:h-[480px] overflow-hidden ${
                  prefersReduced ? '' : 'animate-[kenburns_8s_ease-in-out_infinite_alternate]'
                }`}
                style={{
                  animation: prefersReduced ? 'none' : 'kenburns 8s ease-in-out infinite alternate',
                }}
              >
                <Placeholder
                  src="/images/portfolio/wedding-01.webp"
                  alt="Bride in red lehenga, portrait"
                  label="Bridal portrait"
                  sublabel="Royal Editorial"
                  tint="wine-soft"
                  height="h-full"
                  className="w-full h-full arch-frame"
                  eager={true}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-transparent to-transparent pointer-events-none arch-frame" />
              <div className="absolute bottom-4 left-0 right-0 text-center font-cormorant text-sm italic text-gold-light pointer-events-none">
                Sangeeta Bridal Heritage
              </div>
            </div>

            {/* Two smaller rounded photos (couple, baby/birthday) - hidden below 640px */}
            <div className="hidden sm:flex flex-col gap-4">
              {/* Couple photo */}
              <div className="relative overflow-hidden rounded-[16px] border border-gold/40 shadow-lg bg-wine-dark">
                <Placeholder
                  src="/images/portfolio/prewedding-01.webp"
                  alt="Pre-wedding couple portrait"
                  label="Couple shoot"
                  tint="sand"
                  height="h-[230px]"
                  className="w-full rounded-[16px]"
                />
              </div>

              {/* Baby / Birthday photo */}
              <div className="relative overflow-hidden rounded-[16px] border border-gold/40 shadow-lg bg-wine-dark">
                <Placeholder
                  src="/images/portfolio/kids-01.webp"
                  alt="Celebration & birthday portrait"
                  label="Celebrations & kids"
                  tint="sand"
                  height="h-[230px]"
                  className="w-full rounded-[16px]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.0); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  )
}
