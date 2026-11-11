import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { UrgentBand } from './components/UrgentBand'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { CinematicReels } from './components/CinematicReels'
import { BeforeAfter } from './components/BeforeAfter'
import { VirtualAlbum } from './components/VirtualAlbum'
import { Packages } from './components/Packages'
import { WeddingCalculator } from './components/WeddingCalculator'
import { Gifts } from './components/Gifts'
import { Printing } from './components/Printing'
import { Testimonials } from './components/Testimonials'
import { Visit } from './components/Visit'
import { Footer } from './components/Footer'
import { WhatsAppFab } from './components/WhatsAppFab'

function MainContent() {
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState<string>('all')

  const handleSelectServiceCategory = (category: string) => {
    setSelectedPortfolioCategory(category)
  }

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-ink selection:bg-gold selection:text-ink">
      {/* 1. Navbar (ivory, sticky at top) */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Hero (wine background) */}
        <Hero />

        {/* 3. Urgent Band (ink background, slim) */}
        <UrgentBand />

        {/* 4. Photography Services (id: services, ivory) */}
        <Services onSelectCategory={handleSelectServiceCategory} />

        {/* 5. Portfolio & Lightbox (id: portfolio, dark gallery background) */}
        <Portfolio
          selectedCategory={selectedPortfolioCategory}
          onSelectCategory={setSelectedPortfolioCategory}
        />

        {/* Standout Feature 2: Cinematic 4K Wedding Reels & Teaser Showcase (sand background) */}
        <CinematicReels />

        {/* 6. Old photo retouching (ivory) */}
        <BeforeAfter />

        {/* Standout Feature 3: Virtual 3D Royal Photobook / Album Page-Turn Experience (gallery dark background) */}
        <VirtualAlbum />

        {/* 7. Wedding packages (id: packages, sand background) */}
        <Packages />

        {/* Standout Feature 4: Interactive Wedding Package & Budget Calculator (ivory background) */}
        <WeddingCalculator />

        {/* 8. Custom gifts (id: gifts, ivory) */}
        <Gifts />

        {/* 9. Printing & framing (id: printing, sand) */}
        <Printing />

        {/* 10. Testimonials (wine) */}
        <Testimonials />

        {/* 11. Visit the studio (id: contact, ivory) */}
        <Visit />
      </main>

      {/* 12. Footer (ink) */}
      <Footer />

      {/* 13. Floating WhatsApp button */}
      <WhatsAppFab />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  )
}
