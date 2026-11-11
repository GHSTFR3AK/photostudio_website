export type Language = 'en' | 'hi'

export interface LocalizedString {
  en: string
  hi: string
}

export interface BusinessInfo {
  name: LocalizedString
  shortName: string
  tagline: LocalizedString
  owner: string
  phone: string
  phoneDisplay: string
  whatsapp: string
  address: string
  hours: string
  mapsUrl: string
  mapsEmbedUrl: string
  instagram: string
  yearsInBusiness: string
}

export interface ServiceItem {
  id: string
  title: LocalizedString
  image: string
  alt: string
  portfolioCategory: string
}

export interface PortfolioItem {
  id: string
  src: string
  category: 'wedding' | 'prewedding' | 'fashion' | 'kids'
  title: LocalizedString
  alt: string
  tall?: boolean
}

export interface PackageItem {
  name: string
  tag: string
  price: string
  featured: boolean
  includes: string[]
  enquiryMessage: string
}

export interface GiftItem {
  id: string
  name: LocalizedString
  price: string
  image: string
  alt: string
}

export interface PrintingCategory {
  title: LocalizedString
  items: LocalizedString[]
}

export interface TestimonialItem {
  text: string
  name: string
  event: LocalizedString
}

export const business: BusinessInfo = {
  name: {
    en: 'Sangeeta Digital Colour Lab & Studio',
    hi: 'संगीता डिजिटल कलर लैब एंड स्टूडियो', // TODO: owner to review
  },
  shortName: 'SANGEETA',
  tagline: {
    en: 'DIGITAL COLOUR LAB & STUDIO',
    hi: 'डिजिटल कलर लैब एंड स्टूडियो', // TODO: owner to review
  },
  owner: 'Neeraj Saxena',
  phone: '+919718970255',
  phoneDisplay: '+91 97189 70255',
  whatsapp: '919718970255',
  address: '[SHOP ADDRESS, AREA, CITY – PIN]',
  hours: '[e.g. Mon–Sun, 10:00 AM – 9:00 PM]',
  mapsUrl: '[GOOGLE_MAPS_URL]',
  mapsEmbedUrl: '[GOOGLE_MAPS_EMBED_URL]',
  instagram: '[INSTAGRAM_URL]',
  yearsInBusiness: '[YEARS]',
}

export const navigationLinks = [
  { href: '#portfolio', label: { en: 'Portfolio', hi: 'पोर्टफोलियो' } },
  { href: '#services', label: { en: 'Services', hi: 'सेवाएं' } },
  { href: '#packages', label: { en: 'Packages', hi: 'पैकेज' } },
  { href: '#gifts', label: { en: 'Custom Gifts', hi: 'कस्टम गिफ्ट्स' } },
  { href: '#printing', label: { en: 'Printing', hi: 'प्रिंटिंग' } },
  { href: '#contact', label: { en: 'Contact', hi: 'संपर्क' } },
]

export const services: ServiceItem[] = [
  {
    id: 'wedding',
    title: { en: 'Wedding', hi: 'शादी फोटोग्राफी' },
    image: '/images/services/wedding.webp',
    alt: 'Traditional and Candid Wedding Photography',
    portfolioCategory: 'wedding',
  },
  {
    id: 'pre-wedding',
    title: { en: 'Pre-Wedding', hi: 'प्री-वेडिंग शूट' },
    image: '/images/services/prewedding.webp',
    alt: 'Romantic Pre-Wedding Cinematic Photoshoot',
    portfolioCategory: 'prewedding',
  },
  {
    id: 'fashion',
    title: { en: 'Fashion', hi: 'फैशन फोटोग्राफी' },
    image: '/images/services/fashion.webp',
    alt: 'High Fashion & Editorial Portfolio Shoot',
    portfolioCategory: 'fashion',
  },
  {
    id: 'occasions',
    title: { en: 'Birthday & Occasions', hi: 'जन्मदिन व खास मौके' },
    image: '/images/services/occasions.webp',
    alt: 'Birthday Celebration & Special Occasions',
    portfolioCategory: 'kids',
  },
  {
    id: 'baby-shower',
    title: { en: 'Baby Shower & Events', hi: 'बेबी शॉवर व इवेंट शूट' },
    image: '/images/services/babyshower.webp',
    alt: 'Baby Shower & Family Celebration Events',
    portfolioCategory: 'kids',
  },
]

export const portfolio: PortfolioItem[] = [
  {
    id: 'port-1',
    src: '/images/portfolio/wedding-01.webp',
    category: 'wedding',
    title: { en: 'Royal Bride in Scarlet Lehenga', hi: 'शाही दुल्हन - लाल लहंगा' }, // TODO: owner to review
    alt: 'Bride in red lehenga, portrait',
    tall: true,
  },
  {
    id: 'port-2',
    src: '/images/portfolio/prewedding-01.webp',
    category: 'prewedding',
    title: { en: 'Sunset Serenade', hi: 'गोल्डन ऑवर प्री-वेडिंग' }, // TODO: owner to review
    alt: 'Pre-wedding couple portrait during golden hour',
    tall: false,
  },
  {
    id: 'port-3',
    src: '/images/portfolio/wedding-02.webp',
    category: 'wedding',
    title: { en: 'Varmala Celebration Rituals', hi: 'वरमाला उत्सव' }, // TODO: owner to review
    alt: 'Varmala celebration ceremony with flower petals',
    tall: false,
  },
  {
    id: 'port-4',
    src: '/images/portfolio/fashion-01.webp',
    category: 'fashion',
    title: { en: 'Editorial Haute Couture', hi: 'फैशन एडिटोरियल' }, // TODO: owner to review
    alt: 'High-fashion editorial model styling',
    tall: true,
  },
  {
    id: 'port-5',
    src: '/images/portfolio/kids-01.webp',
    category: 'kids',
    title: { en: 'First Birthday Radiance', hi: 'पहला जन्मदिन उत्सव' }, // TODO: owner to review
    alt: 'Smiling toddler celebrating first birthday celebration',
    tall: false,
  },
  {
    id: 'port-6',
    src: '/images/portfolio/prewedding-02.webp',
    category: 'prewedding',
    title: { en: 'Monochrome Intimacy', hi: 'क्लासिक ब्लैक एंड व्हाइट' }, // TODO: owner to review
    alt: 'Cinematic black and white romantic couple portrait',
    tall: true,
  },
  {
    id: 'port-7',
    src: '/images/portfolio/wedding-03.webp',
    category: 'wedding',
    title: { en: 'The Phere Sacred Vows', hi: 'पवित्र सात फेरे' }, // TODO: owner to review
    alt: 'Sacred fire pheras wedding ritual photography',
    tall: false,
  },
  {
    id: 'port-8',
    src: '/images/portfolio/fashion-02.webp',
    category: 'fashion',
    title: { en: 'Jewellery & Bridal Finery', hi: 'पारंपरिक आभूषण व परिधान' }, // TODO: owner to review
    alt: 'Detailed bridal kundan jewellery and makeup portrait',
    tall: false,
  },
  {
    id: 'port-9',
    src: '/images/portfolio/kids-02.webp',
    category: 'kids',
    title: { en: 'Baby Shower Blessing', hi: 'गोद भराई संस्कार' }, // TODO: owner to review
    alt: 'Expectant parents baby shower joy',
    tall: true,
  },
  {
    id: 'port-10',
    src: '/images/portfolio/wedding-04.webp',
    category: 'wedding',
    title: { en: 'Groom Royal Procession', hi: 'शाही बारात' }, // TODO: owner to review
    alt: 'Groom wedding procession portrait',
    tall: false,
  },
]

export const packages: PackageItem[] = [
  {
    name: 'Silver',
    tag: 'Essential',
    price: '[₹ PRICE]',
    featured: false,
    includes: [
      '[Hours of coverage]',
      '[Number of edited photos]',
      '[Album pages]',
      'Traditional photography & videography',
      'All high-resolution digital files on USB drive',
      'Colour lab digital retouched album',
    ],
    enquiryMessage: 'Hi, I want details of the Silver wedding package',
  },
  {
    name: 'Gold',
    tag: 'Most loved',
    price: '[₹ PRICE]',
    featured: true,
    includes: [
      '[Hours of coverage]',
      'Full traditional + candid photography team',
      'Cinematic teaser film + highlight video',
      'Premium leatherette album with box',
      '[Drone coverage]',
      'Pre-wedding shoot included',
      'Colour-calibrated in-house photo printing',
    ],
    enquiryMessage: 'Hi, I want details of the Gold wedding package',
  },
  {
    name: 'Platinum',
    tag: 'Complete',
    price: '[₹ PRICE]',
    featured: false,
    includes: [
      '[Full multi-day coverage]',
      'Multi-camera 4K cinematography & master film',
      '2 Deluxe flush-mount imported albums for both families',
      'Full drone & crane crew for grand entrances',
      'Same-day live video projection & edit',
      'Complimentary royal framed portraits',
    ],
    enquiryMessage: 'Hi, I want details of the Platinum wedding package',
  },
]

export const gifts: GiftItem[] = [
  {
    id: 'magic-mug',
    name: { en: 'Magic Mug', hi: 'मैजिक मग' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/magic-mug.webp',
    alt: 'Heat-reveal personalised ceramic magic mug',
  },
  {
    id: 'white-mug',
    name: { en: 'White Mug', hi: 'व्हाइट सिरेमिक मग' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/white-mug.webp',
    alt: 'Custom photo printed white glossy ceramic mug',
  },
  {
    id: 'led-photo-pillow',
    name: { en: 'LED Photo Pillow', hi: 'एलईडी फोटो पिलो' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/led-photo-pillow.webp',
    alt: 'Illuminated LED custom printed cushion',
  },
  {
    id: 'magic-pillow',
    name: { en: 'Magic Pillow', hi: 'मैजिक सेक्विन पिलो' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/magic-pillow.webp',
    alt: 'Reversible sequin magic photo pillow',
  },
  {
    id: 'normal-pillow',
    name: { en: 'Normal Pillow', hi: 'सैटिन फोटो पिलो' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/normal-pillow.webp',
    alt: 'Soft satin square personalised photo pillow',
  },
  {
    id: 'crystal-photo-gift',
    name: { en: 'Crystal Photo Gift', hi: 'क्रिस्टल फोटो गिफ्ट' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/crystal-photo-gift.webp',
    alt: 'Laser engraved 3D glass crystal photo keepsake',
  },
  {
    id: 'led-magic-mirror',
    name: { en: 'LED Magic Mirror', hi: 'एलईडी मैजिक मिरर' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/led-magic-mirror.webp',
    alt: 'Vanity mirror turning into illuminated photo frame',
  },
  {
    id: '3d-mobile-cover',
    name: { en: '3D Mobile Cover', hi: '3D मोबाइल कवर' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/3d-mobile-cover.webp',
    alt: 'Custom sublimated full-wrap phone cover',
  },
  {
    id: 'photo-keychain',
    name: { en: 'Photo Keychain', hi: 'फोटो की-चेन' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/photo-keychain.webp',
    alt: 'Metallic and acrylic double-sided photo keychain',
  },
  {
    id: 'wooden-photo-gift',
    name: { en: 'Wooden Photo Gift', hi: 'वुडन फोटो गिफ्ट' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/wooden-photo-gift.webp',
    alt: 'Handcrafted birch wood engraved photo plaque',
  },
  {
    id: 'custom-t-shirt',
    name: { en: 'Custom T-Shirt', hi: 'कस्टम टी-शर्ट' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/custom-t-shirt.webp',
    alt: '100% cotton personalised graphic photo t-shirt',
  },
  {
    id: 'eco-bag',
    name: { en: 'Eco Bag', hi: 'इको बैग' },
    price: 'from [₹ PRICE]',
    image: '/images/gifts/eco-bag.webp',
    alt: 'Custom screen printed durable canvas tote eco bag',
  },
]

export const printing = {
  printing: [
    { en: 'Letterheads', hi: 'लेटरहेड्स' }, // TODO: owner to review
    { en: 'Visiting / Business Cards', hi: 'विजिटिंग / बिजनेस कार्ड्स' }, // TODO: owner to review
    { en: 'Posters', hi: 'पोस्टर्स' }, // TODO: owner to review
    { en: 'Printouts', hi: 'प्रिंटआउट्स' }, // TODO: owner to review
    { en: 'Brochures', hi: 'ब्रोशर्स' }, // TODO: owner to review
    { en: 'Catalogues', hi: 'कैटलॉग्स' }, // TODO: owner to review
    { en: 'Leaflets & Flyers', hi: 'लीफलेट्स व फ्लायर्स' }, // TODO: owner to review
    { en: 'Tarpaulin & Flex', hi: 'तिरपाल व फ्लैक्स बोर्ड' }, // TODO: owner to review
    { en: 'Stickers & Labels', hi: 'स्टिकर्स व लेबल्स' }, // TODO: owner to review
    { en: 'Wedding Cards', hi: 'शादी के कार्ड' }, // TODO: owner to review
  ],
  photoAndFrames: [
    { en: 'Photo Album Printing', hi: 'फोटो एल्बम प्रिंटिंग' }, // TODO: owner to review
    { en: 'Photo Frames', hi: 'डिजिटल फोटो फ्रेम्स' }, // TODO: owner to review
    { en: 'Invitation Cards', hi: 'निमंत्रण पत्र' }, // TODO: owner to review
    { en: 'Old Photo Retouching', hi: 'पुरानी फोटो रीस्टोरेशन' }, // TODO: owner to review
  ],
  cardsAndStamps: [
    { en: 'PVC / ID Cards', hi: 'पीवीसी / आईडी कार्ड' }, // TODO: owner to review
    { en: 'ID Card Holders & Lanyards', hi: 'आईडी कार्ड होल्डर्स व डोरी' }, // TODO: owner to review
    { en: 'Rubber Stamps', hi: 'रबर स्टैम्प्स' }, // TODO: owner to review
    { en: 'Self-inking Stamps', hi: 'सेल्फ-इंकिंग स्टैम्प' }, // TODO: owner to review
    { en: 'Trodat & Dura Pre-inked', hi: 'ट्रोडैट व ड्यूरा प्री-इंक स्टैम्प' }, // TODO: owner to review
    { en: 'Social Media Poster Design', hi: 'सोशल मीडिया पोस्टर डिजाइन' }, // TODO: owner to review
  ],
}

export const testimonials: TestimonialItem[] = [
  {
    text: '[Paste a real customer review here]',
    name: '[CUSTOMER NAME]',
    event: { en: 'Wedding', hi: 'शादी' },
  },
  {
    text: '[Paste a real customer review here]',
    name: '[CUSTOMER NAME]',
    event: { en: 'Wedding', hi: 'शादी' },
  },
  {
    text: '[Paste a real customer review here]',
    name: '[CUSTOMER NAME]',
    event: { en: 'Wedding', hi: 'शादी' },
  },
]

export const uiText = {
  hero: {
    eyebrow: {
      en: 'WEDDING · PRE-WEDDING · FASHION',
      hi: 'वेडिंग · प्री-वेडिंग · फैशन', // TODO: owner to review
    },
    h1Lead: { en: 'Capturing your', hi: 'आपके' },
    h1Emphasized: { en: 'forever,', hi: 'अनमोल पलों को,' }, // TODO: owner to review
    h1Tail: { en: 'one frame at a time.', hi: 'सदा के लिए संजोएं।' }, // TODO: owner to review
    hindiLine: 'आपके यादगार पलों को हमेशा के लिए संजोएं',
    paragraph: {
      en: 'Sangeeta Studio photographs weddings, birthdays and family celebrations — and prints them beautifully in our own colour lab. [YEARS IN BUSINESS]',
      hi: 'संगीता स्टूडियो शादियों, जन्मदिनों व पारिवारिक उत्सवों की यादगार तस्वीरें कैद करता है — और हमारी अपनी कलर लैब में उन्हें जीवंत प्रिंट करता है। [YEARS IN BUSINESS]', // TODO: owner to review
    },
    ctaWork: { en: 'View Our Work', hi: 'हमारा काम देखें' },
    ctaWhatsapp: { en: 'WhatsApp Us', hi: 'व्हाट्सएप करें' },
  },
  urgentBand: {
    badge: { en: 'URGENT', hi: 'तत्काल' },
    passportText1: { en: 'Passport & Visa photos ready in', hi: 'पासपोर्ट और वीजा फोटो तैयार मात्र' },
    passportTextTime: { en: '1 minute', hi: '1 मिनट में' },
    hindiStamp: 'मोहरे ही मोहरे',
    stampDetails: {
      en: 'Self-inking & pre-inked stamps · Trodat · Dura',
      hi: 'सेल्फ-इंकिंग व प्री-इंक्ड मोहरें · ट्रोडैट · ड्यूरा', // TODO: owner to review
    },
  },
  services: {
    eyebrow: { en: 'What we shoot', hi: 'हमारी सेवाएं' },
    h1Lead: { en: 'Photography', hi: 'फोटोग्राफी' },
    h1Emphasized: { en: 'Services', hi: 'सेवाएं' },
  },
  portfolio: {
    eyebrow: { en: 'Portfolio', hi: 'पोर्टफोलियो' },
    h2Lead: { en: 'Moments we’ve', hi: 'संजोए गए' },
    h2Emphasized: { en: 'framed', hi: 'खास पल' },
    filterAll: { en: 'All', hi: 'सभी' },
    filterWedding: { en: 'Wedding', hi: 'शादी' },
    filterPrewedding: { en: 'Pre-Wedding', hi: 'प्री-वेडिंग' },
    filterFashion: { en: 'Fashion', hi: 'फैशन' },
    filterKids: { en: 'Kids', hi: 'बच्चे व उत्सव' },
    instagramCta: { en: 'See more on Instagram', hi: 'इंस्टाग्राम पर और देखें' },
  },
  beforeAfter: {
    eyebrow: { en: 'Old Photo Retouching', hi: 'पुरानी फोटो बहाली' },
    h2Lead: { en: 'Bring faded memories', hi: 'धुंधली यादों को' },
    h2Emphasized: { en: 'back to life', hi: 'फिर से जीवंत बनाएं' },
    paragraph: {
      en: 'Have ancestral portraits damaged by moisture, sun or age? Our digital restoration artists painstakingly restore scratches, tears, discolouration, and missing details while preserving genuine vintage warmth.',
      hi: 'क्या आपके पास पुरानी, कटी-फटी या फीकी पड़ चुकी पारिवारिक तस्वीरें हैं? हमारे कुशल कलाकार बिना स्वाभाविकता खोए आपकी कीमती यादों को नए जैसा रूप देते हैं।', // TODO: owner to review
    },
    cta: { en: 'Restore a photo', hi: 'फोटो ठीक करवाएं' },
    beforeLabel: { en: 'Before', hi: 'पहले' },
    afterLabel: { en: 'After', hi: 'बाद में' },
  },
  packages: {
    eyebrow: { en: 'Wedding Packages', hi: 'वेडिंग पैकेज' },
    h2Lead: { en: 'Choose your', hi: 'अपनी पसंद का' },
    h2Emphasized: { en: 'story', hi: 'पैकेज चुनें' },
    enquireCta: { en: 'Enquire on WhatsApp', hi: 'व्हाट्सएप पर पूछताछ करें' },
  },
  gifts: {
    eyebrow: { en: 'Customised Printing', hi: 'कस्टमाइज्ड प्रिंटिंग' },
    h2Lead: { en: 'Gifts with your', hi: 'अपनी यादों से सजे' },
    h2Emphasized: { en: 'photo', hi: 'उपहार' },
    subline: {
      en: 'Pick a gift, tap order, and send us your photo on WhatsApp.',
      hi: 'गिफ्ट चुनें, ऑर्डर पर टैप करें और फोटो हमें व्हाट्सएप पर भेजें।',
    },
    orderCta: { en: 'Order on WhatsApp', hi: 'व्हाट्सएप पर ऑर्डर करें' },
  },
  printing: {
    eyebrow: { en: 'Print Shop', hi: 'प्रिंट शॉप' },
    h2Lead: { en: 'Printing & framing,', hi: 'प्रिंटिंग व फ्रेमिंग,' },
    h2Emphasized: { en: 'done in-house', hi: 'हमारी अपनी लैब में' },
    paragraph: {
      en: 'From crystal-clear photo lab prints to high-speed commercial stationery, flex banners, and precision rubber stamps. Every order is crafted under one roof with fast turnaround and strict quality checks.',
      hi: 'लैब क्वालिटी फोटो प्रिंट्स से लेकर बिजनेस कार्ड्स, फ्लेक्स बैनर और प्री-इंक्ड मोहरें। हर काम अत्याधुनिक मशीनों द्वारा सीधे हमारी अपनी शॉप में तैयार किया जाता है।', // TODO: owner to review
    },
    col1Title: { en: 'Printing & Offset', hi: 'प्रिंटिंग व ऑफसेट' },
    col2Title: { en: 'Photo & Frames', hi: 'फोटो व फ्रेम्स' },
    col3Title: { en: 'Cards & Stamps', hi: 'कार्ड्स व मोहरें' },
  },
  testimonials: {
    eyebrow: { en: 'Client Love', hi: 'ग्राहकों का विश्वास' },
    h2Lead: { en: 'Kind words from our', hi: 'हमारे प्रिय परिवारों के' },
    h2Emphasized: { en: 'families', hi: 'अनमोल शब्द' },
  },
  visit: {
    eyebrow: { en: 'Visit the Studio', hi: 'स्टूडियो पधारें' },
    h2Hindi: 'संगीता स्टूडियो',
    addressLabel: { en: 'Address', hi: 'पता' },
    hoursLabel: { en: 'Hours', hi: 'समय' },
    phoneLabel: { en: 'Phone', hi: 'फोन' },
    callNow: { en: 'Call Now', hi: 'अभी कॉल करें' },
    getDirections: { en: 'Get Directions', hi: 'रास्ता देखें' },
  },
  footer: {
    tagline: {
      en: 'Royal wedding photography, portraiture, custom photo gifting and in-house digital colour lab services.',
      hi: 'शाही वेडिंग फोटोग्राफी, पोर्ट्रेट, कस्टमाइज्ड गिफ्ट्स और इन-हाउस डिजिटल कलर लैब सेवाएं।', // TODO: owner to review
    },
    quickLinks: { en: 'Quick Links', hi: 'मुख्य लिंक्स' },
    contact: { en: 'Contact', hi: 'संपर्क' },
    copyright: {
      en: '© Sangeeta Digital Colour Lab & Studio. All rights reserved.',
      hi: '© संगीता डिजिटल कलर लैब एंड स्टूडियो. सर्वाधिकार सुरक्षित.', // TODO: owner to review
    },
  },
  common: {
    bookShoot: { en: 'Book a Shoot', hi: 'शूट बुक करें' },
    whatsappChat: { en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर चैट करें' },
    toggleLang: { en: 'हिं', hi: 'EN' },
  },
  passportSpec: {
    eyebrow: { en: 'Instant Visa Studio', hi: 'तत्काल वीजा फोटो स्टूडियो' },
    h2Lead: { en: 'Official Passport &', hi: 'सरकारी पासपोर्ट व' },
    h2Emphasized: { en: 'Visa Specifications', hi: 'वीजा फोटो गाइड' },
    tagline: {
      en: 'Guaranteed 100% Embassy & VFS compliance. Precision cut, printed on archival glossy paper in 1 minute.',
      hi: 'दूतावास व वीएफएस मानकों के अनुसार 100% स्वीकृत। सटीक कटिंग और 1 मिनट में प्रीमियम ग्लॉसी प्रिंट।',
    },
    ctaDirect: { en: 'Get 1-Min Visa Photos', hi: '1 मिनट में फोटो बनवाएं' },
  },
  calculator: {
    eyebrow: { en: 'Custom Package Builder', hi: 'कस्टम पैकेज बिल्डर' },
    h2Lead: { en: 'Design your own', hi: 'अपनी पसंद का' },
    h2Emphasized: { en: 'royal wedding', hi: 'वेडिंग पैकेज' },
    h2Tail: { en: 'coverage', hi: 'तैयार करें' },
    tagline: {
      en: 'Select your events, camera crew, and luxury albums. Get an instant tailored WhatsApp breakdown with owner Neeraj Saxena.',
      hi: 'अपने कार्यक्रम, कैमरा टीम और एल्बम चुनें। सीधे व्हाट्सएप पर त्वरित विवरण प्राप्त करें।',
    },
    sendQuote: { en: 'Enquire for This Configuration', hi: 'इस पैकेज के लिए पूछताछ करें' },
  },
  album: {
    eyebrow: { en: 'Luxury Keepsake', hi: 'शाही यादगार' },
    h2Lead: { en: 'Turn the pages of', hi: 'रॉयल फोटो एल्बम का' },
    h2Emphasized: { en: 'forever', hi: 'अनोखा अनुभव' },
    tagline: {
      en: 'Experience our handcrafted lay-flat flush mount albums printed with Italian non-tear velvet and gold-embossed covers.',
      hi: 'इटैलियन नॉन-टीयर वेलवेट पेपर और सोने के नक्काशीदार कवर्स से सजे हमारे हस्तनिर्मित एल्बम की झलक देखें।',
    },
    nextPage: { en: 'Next Page', hi: 'अगला पेज' },
    prevPage: { en: 'Previous Page', hi: 'पिछला पेज' },
    pageLabel: { en: 'Page', hi: 'पेज' },
    customiseAlbum: { en: 'Order Custom Wedding Album', hi: 'कस्टम वेडिंग एल्बम ऑर्डर करें' },
  },
  reels: {
    eyebrow: { en: 'Cinematography', hi: 'सिनेमैटोग्राफी' },
    h2Lead: { en: 'Moments in motion —', hi: 'यादों का जीवंत सफर —' },
    h2Emphasized: { en: 'cinematic reels', hi: 'वेडिंग रील्स' },
    tagline: {
      en: 'Experience the grandeur, laughter and sacred rituals captured through our 4K cinematic lenses.',
      hi: 'हमारे 4K सिनेमैटिक कैमरों द्वारा कैद की गई भव्यता, खुशियां और सात फेरों की पावन रस्में।',
    },
  },
}

export interface PassportSpecItem {
  id: string
  country: LocalizedString
  flag: string
  sizeMm: string
  sizeInch: string
  bgColour: LocalizedString
  faceCoverage: string
  requirements: LocalizedString[]
  digitalSpec: string
}

export const passportSpecs: PassportSpecItem[] = [
  {
    id: 'india',
    country: { en: 'India Passport & Police Verification', hi: 'भारतीय पासपोर्ट व पुलिस सत्यापन' },
    flag: '🇮🇳',
    sizeMm: '35 mm × 45 mm',
    sizeInch: '1.38" × 1.77"',
    bgColour: { en: 'Plain Light/White Background', hi: 'हल्का या सफेद बैकग्राउंड' },
    faceCoverage: '70% – 80% (32mm to 36mm)',
    digitalSpec: '600 DPI, JPEG format, under 200 KB',
    requirements: [
      { en: 'Ears visible, neutral facial expression', hi: 'दोनों कान साफ दिखें, सीधा चेहरा' },
      { en: 'Dark clothes recommended, avoid white shirts', hi: 'गहरे रंग के कपड़े पहनें, सफेद से बचें' },
      { en: 'No reflections on spectacles, matte finish print', hi: 'चश्मे पर चमक न हो, मैट प्रिंट' },
    ],
  },
  {
    id: 'us-visa',
    country: { en: 'USA Visa (DS-160) & OCI / Green Card', hi: 'यूएसए वीजा (DS-160) व ओसीआई' },
    flag: '🇺🇸',
    sizeMm: '51 mm × 51 mm',
    sizeInch: '2" × 2" (Square)',
    bgColour: { en: 'Pure Off-White / White Background', hi: 'शुद्ध सफेद बैकग्राउंड' },
    faceCoverage: '50% – 69% of total height',
    digitalSpec: '600×600 px min, up to 1200×1200 px, sRGB',
    requirements: [
      { en: 'No eyeglasses allowed under US State Dept rule', hi: 'अमेरिकी नियमों के अनुसार चश्मा वर्जित है' },
      { en: 'Both ears fully exposed, natural skin tone', hi: 'दोनों कान पूरी तरह खुले, स्वाभाविक रंग' },
      { en: 'Includes digital soft-copy formatted for DS-160 upload', hi: 'DS-160 पोर्टल के लिए सॉफ्ट कॉपी शामिल' },
    ],
  },
  {
    id: 'schengen',
    country: { en: 'Schengen European Visa (France, Germany, Italy, etc.)', hi: 'शेंगेन यूरोप वीजा (फ्रांस, जर्मनी, आदि)' },
    flag: '🇪🇺',
    sizeMm: '35 mm × 45 mm',
    sizeInch: '1.38" × 1.77"',
    bgColour: { en: 'Neutral Light Grey / White Background', hi: 'हल्का स्लेटी / सफेद बैकग्राउंड' },
    faceCoverage: '70% – 80% (32mm to 36mm from chin to crown)',
    digitalSpec: '300 DPI, sharp focus, no flash shadows',
    requirements: [
      { en: 'Strict VFS biometric compliance guaranteed', hi: 'VFS बायोमेट्रिक मानकों के 100% अनुरूप' },
      { en: 'No uniform-style clothing, plain formal wear', hi: 'सादे फॉर्मल कपड़े, कोई वर्दी नहीं' },
      { en: 'Printed on lab-grade archival photographic paper', hi: 'लैब-ग्रेड फोटोग्राफिक पेपर पर प्रिंट' },
    ],
  },
  {
    id: 'canada',
    country: { en: 'Canada Tourist Visa, PR & Study Permit', hi: 'कनाडा वीजा, पीआर व स्टडी परमिट' },
    flag: '🇨🇦',
    sizeMm: '50 mm × 70 mm',
    sizeInch: '2" × 2.75"',
    bgColour: { en: 'Pure White Background without shadows', hi: 'बिना परछाई का शुद्ध सफेद बैकग्राउंड' },
    faceCoverage: '31mm to 36mm face height',
    digitalSpec: 'Min 420×540 px, Studio details stamped on back',
    requirements: [
      { en: 'Reverse side stamped with Studio Name & Date as mandated', hi: 'कनाडा नियम अनुसार पीछे स्टूडियो की मुहर व तारीख' },
      { en: 'Mouth closed, strictly neutral expression', hi: 'मुंह बंद, एकदम शांत भाव' },
      { en: 'Both digital copy and 2 physical prints provided', hi: 'डिजिटल कॉपी व 2 ओरिजिनल प्रिंट्स' },
    ],
  },
  {
    id: 'dubai',
    country: { en: 'UAE / Dubai Tourist, Residence & Golden Visa', hi: 'यूएई / दुबई वीजा व गोल्डन वीजा' },
    flag: '🇦🇪',
    sizeMm: '43 mm × 55 mm or 35 mm × 45 mm',
    sizeInch: '1.7" × 2.16"',
    bgColour: { en: 'Clean Crisp White Background', hi: 'स्पष्ट सफेद बैकग्राउंड' },
    faceCoverage: '75% face focus with clear shoulder view',
    digitalSpec: 'High-res 300 DPI, compliant with ICP / GDRFA portal',
    requirements: [
      { en: 'Accepted on all UAE ICP / Amer / GDRFA portals', hi: 'सभी यूएई सरकारी पोर्टल्स पर मान्य' },
      { en: 'Instant WhatsApp delivery of cropped digital file', hi: 'व्हाट्सएप पर तुरंत डिजिटल फाइल उपलब्ध' },
      { en: 'Fast print in 1 minute at our lab', hi: 'हमारी लैब में मात्र 1 मिनट में प्रिंट' },
    ],
  },
  {
    id: 'infant',
    country: { en: 'Baby & Toddler Passport (Newborn to 5 yrs)', hi: 'नवजात शिशु व बच्चों का पासपोर्ट फोटो' },
    flag: '👶',
    sizeMm: '35 mm × 45 mm or 51 mm × 51 mm',
    sizeInch: 'Custom depending on country',
    bgColour: { en: 'Seamless White Backdrop', hi: 'सफेद बैकड्रॉप' },
    faceCoverage: 'Baby face fully centered, open eyes',
    digitalSpec: 'High-speed flicker-free soft flash setup',
    requirements: [
      { en: 'Gentle, patient studio environment with parent assistance', hi: 'बच्चों के अनुकूल व धैर्यपूर्ण माहौल' },
      { en: 'No hands, toys or parent visible in frame', hi: 'फ्रेम में खिलौने या माता-पिता का हाथ न दिखे' },
      { en: 'Guaranteed PSK / Embassy acceptance', hi: 'पासपोर्ट सेवा केंद्र द्वारा स्वीकृत' },
    ],
  },
]

export interface CalculatorOption {
  id: string
  label: LocalizedString
  description?: LocalizedString
  priceTag?: string
  badge?: string
}

export interface CalculatorSection {
  id: string
  title: LocalizedString
  isMulti?: boolean
  options: CalculatorOption[]
}

export const weddingCalculatorSections: CalculatorSection[] = [
  {
    id: 'days',
    title: { en: '1. Celebration Scope & Days', hi: '1. समारोह के दिन' },
    isMulti: false,
    options: [
      {
        id: '1-day',
        label: { en: '1 Day (Wedding & Reception)', hi: '1 दिन (शादी व रिसेप्शन)' },
        description: { en: 'Full single-day coverage from baraat to vidai', hi: 'बारात से विदाई तक पूरा दिन' },
      },
      {
        id: '2-days',
        label: { en: '2 Days (Mehendi / Sangeet + Wedding)', hi: '2 दिन (मेहंदी/संगीत + शादी)' },
        description: { en: 'Evening sangeet celebration + next day royal wedding', hi: 'शाम का संगीत उत्सव + मुख्य विवाह' },
        badge: 'Popular',
      },
      {
        id: '3-days',
        label: { en: '3+ Days (Haldi, Mehendi, Sangeet & Royal Wedding)', hi: '3+ दिन (हल्दी, संगीत व भव्य विवाह)' },
        description: { en: 'Complete multi-day destination & palace wedding saga', hi: 'संपूर्ण बहु-दिवसीय विवाह उत्सव' },
      },
    ],
  },
  {
    id: 'photography',
    title: { en: '2. Photography Team Style', hi: '2. फोटोग्राफी टीम' },
    isMulti: true,
    options: [
      {
        id: 'candid',
        label: { en: 'Master Candid Photographer', hi: 'मास्टर कैंडिड फोटोग्राफर' },
        description: { en: 'Emotional, unposed, award-winning editorial frames', hi: 'स्वाभाविक व भावपूर्ण कैंडिड मोमेंट्स' },
        badge: 'Recommended',
      },
      {
        id: 'traditional-photo',
        label: { en: 'Traditional Stage & Family Photographer', hi: 'पारंपरिक स्टेज फोटोग्राफर' },
        description: { en: 'Every family member & guest portrait catalogued', hi: 'सभी परिजनों व मेहमानों के स्टेज पोर्ट्रेट' },
      },
      {
        id: 'prewedding',
        label: { en: 'Couples Outdoor Pre-Wedding Shoot', hi: 'आउटडोर प्री-वेडिंग शूट' },
        description: { en: 'Sunset photoshoot with conceptual styling & music reel', hi: 'गोल्डन ऑवर फोटोशूट व सिनेमैटिक रील' },
      },
    ],
  },
  {
    id: 'cinematography',
    title: { en: '3. Video & Cinematography Crew', hi: '3. सिनेमैटोग्राफी व वीडियो' },
    isMulti: true,
    options: [
      {
        id: '4k-film',
        label: { en: '4K Cinematic Teaser & Highlight Film (3-5 min)', hi: '4K सिनेमैटिक टीजर व फिल्म' },
        description: { en: 'Bollywood-grade colour grading, sound design & songs', hi: 'सिनेमा जैसी कलर ग्रेडिंग व संगीत' },
        badge: 'Must Have',
      },
      {
        id: 'drone',
        label: { en: 'Aerial Drone 4K Coverage', hi: 'ड्रोन एरियल 4K कवरेज' },
        description: { en: 'Grand bird-eye views of baraat, fireworks & venue', hi: 'बारात, आतिशबाजी व वेन्यू के विहंगम दृश्य' },
      },
      {
        id: 'traditional-video',
        label: { en: 'Full Traditional Video (Full Ceremony)', hi: 'फुल पारंपरिक वीडियो' },
        description: { en: 'Complete chronological documentary of every ritual', hi: 'सभी रस्मों का क्रमबद्ध पूरा वीडियो' },
      },
      {
        id: 'live-screen',
        label: { en: 'Live LED Wall Streaming Setup', hi: 'लाइव एलईडी वॉल स्ट्रीमिंग' },
        description: { en: 'Instant live multi-camera broadcast for large guests', hi: 'बड़े वेन्यू के लिए लाइव मल्टी-कैमरा प्रसारण' },
      },
    ],
  },
  {
    id: 'keepsakes',
    title: { en: '4. Luxury Albums & Keepsakes', hi: '4. रॉयल एल्बम व गिफ्ट्स' },
    isMulti: true,
    options: [
      {
        id: 'flush-album-1',
        label: { en: '1 Deluxe Velvet Flush-Mount Album (40 Pages)', hi: '1 डीलक्स वेलवेट एल्बम (40 पेज)' },
        description: { en: 'Handcrafted leatherette box, metallic embossing', hi: 'हस्तनिर्मित लेदर बॉक्स व गोल्ड एम्बॉसिंग' },
        badge: 'Top Quality',
      },
      {
        id: 'parent-albums',
        label: { en: 'Twin Parents Albums (2 Mini Keepsake Books)', hi: 'माता-पिता के लिए 2 एल्बम' },
        description: { en: 'Cherished heirloom editions for both families', hi: 'दोनों परिवारों के लिए विशेष प्रतियां' },
      },
      {
        id: 'framed-canvas',
        label: { en: 'Large 24"×36" Royal Framed Canvas Portrait', hi: '24"×36" रॉयल फ्रेम कैनवास' },
        description: { en: 'Museum-grade canvas ready for your living room', hi: 'लिविंग रूम के लिए भव्य कैनवास फ्रेम' },
      },
    ],
  },
]

export interface AlbumPageItem {
  pageNumber: number
  title: LocalizedString
  caption: LocalizedString
  image: string
  layout: 'portrait' | 'landscape' | 'dual'
}

export const virtualAlbumPages: AlbumPageItem[] = [
  {
    pageNumber: 1,
    title: { en: 'The Royal Awakening', hi: 'शाही दुल्हन' },
    caption: { en: 'Scarlet silk, heirloom kundan & the quiet moments of bridal elegance.', hi: 'लाल रेशम, कुंदन और दुल्हन की मंद मुस्कान।' },
    image: '/images/portfolio/wedding-01.webp',
    layout: 'portrait',
  },
  {
    pageNumber: 2,
    title: { en: 'Golden Hour Serenade', hi: 'सूर्यास्त की मधुर यादें' },
    caption: { en: 'Amidst heritage arches and warm sun, two souls embark on their forever.', hi: 'शाही छतरियों और ढलती सुनहरी धूप में अमर प्रेम।' },
    image: '/images/portfolio/prewedding-01.webp',
    layout: 'landscape',
  },
  {
    pageNumber: 3,
    title: { en: 'The Sacred Varmala', hi: 'पावन वरमाला' },
    caption: { en: 'Rose petals drifting through the air as vows turn into eternal destinies.', hi: 'गुलाब की पंखुड़ियों की बारिश में सात जन्मों का बंधन।' },
    image: '/images/portfolio/wedding-02.webp',
    layout: 'landscape',
  },
  {
    pageNumber: 4,
    title: { en: 'Haute Couture Brilliance', hi: 'शाही परिधान' },
    caption: { en: 'Deep velvet and gold zardozi captured with Vogue-editorial finesse.', hi: 'गहरे वेलवेट और सोने के तारों से सजी नफासत।' },
    image: '/images/portfolio/fashion-01.webp',
    layout: 'portrait',
  },
  {
    pageNumber: 5,
    title: { en: 'Celebrations & Generations', hi: 'पीढ़ियों का उल्लास' },
    caption: { en: 'A mother’s blessing, a grandmother’s smile — printed for eternity.', hi: 'माता का आशीर्वाद, दादी की दुआएं — सदा के लिए अमर।' },
    image: '/images/portfolio/kids-02.webp',
    layout: 'portrait',
  },
]

export interface CinematicReelItem {
  id: string
  couple: string
  event: LocalizedString
  duration: string
  thumbnail: string
  location: LocalizedString
  soundtrack: string
  summary: LocalizedString
}

export const cinematicReelsData: CinematicReelItem[] = [
  {
    id: 'reel-1',
    couple: 'Ananya & Siddharth',
    event: { en: 'Royal Palace Wedding', hi: 'शाही राजमहल विवाह' },
    duration: '0:45',
    thumbnail: '/images/portfolio/wedding-01.webp',
    location: { en: 'Udaivilas Palace', hi: 'उदयविलास पैलेस' },
    soundtrack: 'Kudmayi (Royal Acoustic)',
    summary: {
      en: 'A grand royal entrance, fireworks over the palace lake, and emotional vidai moments.',
      hi: 'भव्य शाही बारात, महल पर आतिशबाजी और भावुक विदाई के दिल छू लेने वाले दृश्य।',
    },
  },
  {
    id: 'reel-2',
    couple: 'Rohan & Tanvi',
    event: { en: 'Sunset Pre-Wedding Film', hi: 'गोल्डन ऑवर प्री-वेडिंग' },
    duration: '0:38',
    thumbnail: '/images/portfolio/prewedding-01.webp',
    location: { en: 'Heritage Fort', hi: 'हेरिटेज फोर्ट' },
    soundtrack: 'Kesariya (Flute & Sitar Ensemble)',
    summary: {
      en: 'Cinematic drone tracking shots across sand dunes and sandstone royal corridors.',
      hi: 'रेत के धोरों और बलुआ पत्थर के शाही गलियारों में ड्रोन से कैद किया गया रोमांस।',
    },
  },
  {
    id: 'reel-3',
    couple: 'Kabir & Meera',
    event: { en: 'Varmala Celebration Teaser', hi: 'वरमाला उत्सव टीजर' },
    duration: '0:52',
    thumbnail: '/images/portfolio/wedding-02.webp',
    location: { en: 'The Grand Ballroom', hi: 'द ग्रैंड बॉलरूम' },
    soundtrack: 'Mangalyam (Sacred Chants)',
    summary: {
      en: 'Slow-motion shower of 100 kg rose petals as the sacred garland is exchanged.',
      hi: 'वरमाला के दौरान 100 किलो गुलाब की पंखुड़ियों की बारिश का स्लो-मोशन दृश्य।',
    },
  },
  {
    id: 'reel-4',
    couple: 'Arjun & Radhika',
    event: { en: 'Haute Bridal Couture', hi: 'हाउते ब्राइडल फैशन' },
    duration: '0:35',
    thumbnail: '/images/portfolio/fashion-01.webp',
    location: { en: 'Studio Sangeeta', hi: 'स्टूडियो संगीता' },
    soundtrack: 'Sufi Soul Beats',
    summary: {
      en: 'Jewellery micro-details, emerald glow, and velvet draping in high drama studio lighting.',
      hi: 'कुंदन आभूषणों की बारीकी और पन्ना-हरे वेलवेट की भव्यता का सम्मोहक रूप।',
    },
  },
]

