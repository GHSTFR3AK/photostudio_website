import React, { useState, useEffect, useRef } from 'react'
import { Camera, Menu, X, Phone } from 'lucide-react'
import { business, navigationLinks, uiText } from '../data/site'
import { useLanguage } from '../context/LanguageContext'
import { waLink } from '../lib/whatsapp'
import { Button } from './ui/Button'

export const Navbar: React.FC = () => {
  const { language, toggleLanguage } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Esc and handle focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-ivory ${
        isScrolled
          ? 'border-b border-line shadow-sm backdrop-blur-md bg-ivory/95 py-3'
          : 'py-5'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group gold-focus rounded-sm"
          aria-label="Sangeeta Digital Colour Lab & Studio Home"
        >
          <div className="w-10 h-10 rounded-full border border-wine/20 flex items-center justify-center text-wine bg-wine/5 group-hover:bg-wine group-hover:text-ivory transition-colors">
            <Camera className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-cormorant font-bold text-[26px] tracking-[0.08em] text-wine">
              {business.shortName}
            </span>
            <span className="font-sans font-medium text-[11px] uppercase tracking-[0.18em] text-muted mt-1">
              {business.tagline[language]}
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center space-x-7"
          aria-label="Primary Navigation"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-sans font-medium text-ink/80 hover:text-wine transition-colors relative py-1 gold-focus rounded-sm after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-wine hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label[language]}
            </a>
          ))}
        </nav>

        {/* Right Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language Toggle Pill: EN | हिं */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center border border-gold rounded-full px-3 py-1.5 text-xs font-semibold tracking-wider text-ink hover:bg-gold/15 transition-colors cursor-pointer gold-focus"
            aria-label={`Switch language. Current language: ${language.toUpperCase()}`}
          >
            <span className={language === 'en' ? 'text-wine font-bold' : 'text-muted'}>
              EN
            </span>
            <span className="mx-1 text-gold">|</span>
            <span
              className={`font-hindi text-[13px] ${
                language === 'hi' ? 'text-wine font-bold' : 'text-muted'
              }`}
            >
              हिं
            </span>
          </button>

          {/* Primary CTA */}
          <Button
            variant="primary"
            href={waLink('Hi, I want to book a photography shoot with Sangeeta Studio')}
            target="_blank"
            rel="noopener noreferrer"
            ariaLabel={uiText.common.bookShoot[language]}
          >
            {uiText.common.bookShoot[language]}
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Quick Lang Pill */}
          <button
            type="button"
            onClick={toggleLanguage}
            className="flex items-center border border-gold rounded-full px-2.5 py-1 text-xs font-semibold text-ink gold-focus cursor-pointer"
            aria-label="Toggle language"
          >
            <span className={language === 'en' ? 'text-wine font-bold' : 'text-muted'}>
              EN
            </span>
            <span className="mx-1 text-gold">|</span>
            <span className={language === 'hi' ? 'text-wine font-bold font-hindi' : 'text-muted font-hindi'}>
              हिं
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-wine rounded-md gold-focus min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Ivory Overlay */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
          className="fixed inset-0 top-[69px] z-50 bg-ivory flex flex-col justify-between px-6 py-8 overflow-y-auto animate-in fade-in duration-200"
        >
          <div className="flex flex-col space-y-5">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-cormorant text-3xl font-semibold text-wine hover:text-gold-text transition-colors py-1 border-b border-line/60 gold-focus"
              >
                {link.label[language]}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-line flex flex-col gap-3">
            <Button
              variant="primary"
              href={waLink('Hi, I want to book a shoot with Sangeeta Studio')}
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center"
            >
              {uiText.common.bookShoot[language]}
            </Button>

            <Button
              variant="outline-wine"
              href={`tel:${business.phone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-wine" />
              <span>{business.phoneDisplay}</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
