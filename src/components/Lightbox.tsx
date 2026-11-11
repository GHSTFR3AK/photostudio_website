import React, { useEffect, useRef, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { PortfolioItem } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { Placeholder } from './ui/Placeholder'

interface LightboxProps {
  items: PortfolioItem[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const { language } = useLanguage()
  const currentItem = items[currentIndex]
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    // Focus close button initially
    const closeBtn = modalRef.current?.querySelector('button')
    closeBtn?.focus()

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    const distance = touchStartX.current - touchEndX.current
    const isSwipeLeft = distance > 50
    const isSwipeRight = distance < -50

    if (isSwipeLeft) {
      onNext()
    } else if (isSwipeRight) {
      onPrev()
    }
    touchStartX.current = null
    touchEndX.current = null
  }

  if (!currentItem) return null

  return (
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
      className="fixed inset-0 z-50 bg-[#1A1214]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Top Header Controls */}
      <div className="flex items-center justify-between text-ivory w-full max-w-6xl mx-auto z-10">
        <div className="flex flex-col">
          <span className="font-cormorant text-2xl font-semibold text-gold-light">
            {currentItem.title[language]}
          </span>
          <span className="text-xs uppercase tracking-widest text-ivory/60 mt-0.5">
            {currentItem.category.toUpperCase()} • {currentIndex + 1} / {items.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-3 rounded-full text-ivory hover:text-gold-light hover:bg-white/10 transition-colors gold-focus cursor-pointer"
          aria-label="Close Lightbox (Esc)"
        >
          <X className="w-7 h-7" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center my-4 max-w-5xl w-full mx-auto overflow-hidden">
        {/* Prev Arrow */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-ivory border border-gold/40 hover:text-gold-light transition-all gold-focus cursor-pointer"
          aria-label="Previous photo (Left arrow key)"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        {/* Display Image with Tasteful Tinted Fallback */}
        <div className="max-h-[75vh] max-w-full flex items-center justify-center">
          <Placeholder
            src={currentItem.src}
            alt={currentItem.alt}
            label={currentItem.title.en}
            sublabel={currentItem.title.hi}
            tint="gallery"
            height="h-[65vh] w-[80vw] max-w-3xl"
            className="rounded-[12px] border border-gold/40 shadow-2xl object-contain"
          />
        </div>

        {/* Next Arrow */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 text-ivory border border-gold/40 hover:text-gold-light transition-all gold-focus cursor-pointer"
          aria-label="Next photo (Right arrow key)"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Footer Info & Instructions */}
      <div className="text-center text-xs text-ivory/50">
        <span className="hidden sm:inline">
          Use ← and → arrow keys to navigate • Press Esc to close
        </span>
        <span className="sm:hidden">Swipe left or right to browse photos</span>
      </div>
    </div>
  )
}
