import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { resources } from '../data/resourcesData'
import { 
  Plane, Tags, Smartphone, ArrowRight, CheckCircle2, Sparkles, ExternalLink,
  ShieldCheck, Cpu, Clock, ArrowUpRight, BookOpen, Code, Globe, Laptop, Briefcase,
  Zap, Calendar, Compass, Search, ChevronDown
} from 'lucide-react'

// --- FAQ DATA FOR COMPONENT & AUTOMATIC SCHEMA INJECTION ---
const faqData = [
  {
    question: "What is FlySava?",
    answer: "FlySava is a travel platform engineered by ProstoLabs that helps travelers discover affordable flights, explore new destinations, and compare real-time airline fares with a fast, modern user interface."
  },
  {
    question: "How does FlySava find cheap flights?",
    answer: "FlySava aggregates real-time flight route data across global carriers, analyzing route combinations and flexible date calendars to surface optimal fare deals without hidden fees."
  },
  {
    question: "Was FlySava custom built by ProstoLabs?",
    answer: "Yes. FlySava was engineered completely in-house by ProstoLabs as a flagship product, showcasing our frontend performance optimization, API integrations, and mobile-first UX design capabilities."
  },
  {
    question: "Can ProstoLabs build a similar custom web platform for my business?",
    answer: "Yes. We design and develop custom web applications, SaaS products, booking portals, and mobile software tailored to your specific industry and operational workflows."
  }
]

// --- PRODUCT SCHEMA COMPONENT FOR FLYSAVA ---
function FlySavaProductSchema() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "FlySava",
    "image": "https://prostolabs.com/og-image.jpg",
    "description": "Smart flight search and travel discovery platform engineered by ProstoLabs.",
    "brand": {
      "@type": "Brand",
      "name": "ProstoLabs"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://flysava.com"
    }
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(productSchema)}
    </script>
  )
}

// --- FAQ ACCORDION ITEM COMPONENT ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200/80 rounded-2xl bg-white overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0A0A0A] cursor-pointer hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 transition-colors font-sans"
      >
        <span>{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#2563EB] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="px-6 pb-6 text-sm md:text-base text-[#6B7280] font-medium leading-relaxed border-t border-gray-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const FlySava = () => {
  const scrollToDetails = () => {
    document.getElementById('about-flysava')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Sort resources by date (newest first) and grab the top 3
  const latestArticles = [...resources]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <>
      <SEO 
        title="FlySava | Smart Flight Search & Travel Discovery"
        description="Explore FlySava—a flagship travel platform engineered by ProstoLabs. Discover affordable flights, real-time fare comparisons, and seamless mobile travel booking."
        path="/flysava"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/services" },
          { name: "FlySava", path: "/flysava" }
        ]}
        faq={faqData}
      />

      {/* Structured Product Schema */}
      <FlySavaProductSchema />
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (FLAGSHIP PRODUCT LAUNCH)                                 */}
        {/* ========================================================================= */}
        <section className="relative px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden text-center">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>Featured Product • Built by ProstoLabs</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                Travel Smarter. Book Better. <br className="hidden sm:block" />
                <span className="text-[#2563EB]">The Modern Way to Discover Flights.</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                FlySava is an intelligent travel search engine engineered by ProstoLabs. It eliminates flight booking friction by delivering real-time fare aggregation, flexible date matrices, and sub-second route search speeds.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.15}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
                <a 
                  href="https://flysava.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Visit FlySava external website"
                  className="w-full sm:w-auto"
                >
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <span>Visit FlySava</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </a>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={scrollToDetails} 
                  aria-label="Explore FlySava features and technical architecture"
                  className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-white border border-gray-200/80 text-[#0A0A0A] font-bold text-sm hover:bg-gray-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  Explore Features
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. PRODUCT PREVIEW (GLASSMORPHISM BROWSER & MOBILE MOCKUPS)               */}
        {/* ========================================================================= */}
        <section className="px-6 pb-16 md:pb-24">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-[32px] bg-gradient-to-tr from-gray-900 via-gray-950 to-blue-950 p-4 sm:p-8 md:p-10 border border-gray-800 shadow-2xl overflow-hidden">
                
                {/* Background Radial Glow */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Desktop Mockup Header Bar */}
                <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6 relative z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-4 py-1 rounded-lg bg-gray-900/90 border border-gray-800 text-xs font-mono text-gray-400 flex items-center gap-2 shadow-inner">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>https://flysava.com</span>
                  </div>
                  <div className="text-xs font-bold text-blue-400 font-mono hidden sm:block">
                    PROSTOLABS CORE ENGINE
                  </div>
                </div>

                {/* Main Dashboard Interactive Preview Canvas */}
                <div className="relative rounded-2xl bg-gray-900/90 border border-gray-800/80 p-6 sm:p-8 text-white space-y-8 backdrop-blur-xl shadow-2xl z-10">
                  
                  {/* Flight Search Widget Header Mockup */}
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
                      <div>
                        <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">Live Product Preview</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold font-sans">Find & Compare Flight Deals</h2>
                      </div>
                      <div className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-300">
                        <Plane size={14} className="animate-pulse" />
                        <span>Real-Time Route Engine Active</span>
                      </div>
                    </div>

                    {/* Flight Search Bar Mockup Controls */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div className="p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/80 text-xs space-y-1">
                        <span className="text-gray-400 font-mono block text-[10px]">DEPARTING FROM</span>
                        <span className="font-bold text-white text-sm">Bengaluru (BLR)</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/80 text-xs space-y-1">
                        <span className="text-gray-400 font-mono block text-[10px]">DESTINATION</span>
                        <span className="font-bold text-white text-sm">London (LHR)</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/80 text-xs space-y-1">
                        <span className="text-gray-400 font-mono block text-[10px]">DATES</span>
                        <span className="font-bold text-white text-sm">Flexible Date Matrix</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-500/30 gap-2 cursor-pointer">
                        <Search size={14} />
                        <span>Search Best Fares</span>
                      </div>
                    </div>
                  </div>

                  {/* Flight Results Stream Cards Mockup */}
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-between gap-4 text-xs font-medium">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-bold text-blue-300">
                          BA
                        </div>
                        <div>
                          <p className="font-bold text-white">Non-stop Flight • 9h 45m</p>
                          <p className="text-gray-400 text-[11px]">Direct Route • Daily Availability</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-emerald-400 font-extrabold text-sm block">Best Fare Deal</span>
                        <span className="text-gray-400 text-[10px]">Real-Time Aggregation</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. WHY WE BUILT FLYSAVA (AUTHENTIC STORYTELLING)                          */}
        {/* ========================================================================= */}
        <section id="about-flysava" className="py-16 md:py-24 px-6 bg-white border-y border-gray-200/80 scroll-mt-20">
          <div className="max-w-[1100px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <AnimatedSection>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-4">
                  <span>Product Story</span>
                </div>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-6 leading-tight font-sans">
                  Why ProstoLabs Engineered <span className="text-[#2563EB]">FlySava.</span>
                </h2>
                
                <div className="space-y-4 text-base sm:text-lg text-[#6B7280] font-medium leading-relaxed">
                  <p>
                    Online flight search platforms have grown increasingly crowded with distracting ads, slow page reloads, hidden booking fees, and confusing user interfaces that frustrate travelers.
                  </p>
                  <p>
                    ProstoLabs built FlySava as an in-house flagship product to demonstrate what a modern flight discovery tool should feel like: sub-second mobile page loads, transparent fare comparisons, and an effortless user interface.
                  </p>
                  <p>
                    By combining real-time API integrations with modern React architecture, FlySava showcases ProstoLabs’ capacity to design, build, and deploy complex consumer software products at scale.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <div className="p-8 sm:p-10 rounded-[32px] bg-[#FAFAFA] border border-gray-200/80 shadow-2xs space-y-6">
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans">
                    Product Achievements
                  </span>
                  
                  <div className="space-y-4">
                    {[
                      { title: 'Sub-Second Search Engine', desc: 'Optimized API polling mechanics that render flight options without screen lag.' },
                      { title: 'Mobile-First Ergonomics', desc: 'Thumb-friendly search controls engineered for effortless smartphone use.' },
                      { title: 'Transparent Fare Pricing', desc: 'Clear cost breakdowns without deceptive hidden add-ons or popups.' },
                      { title: 'Scalable Cloud Architecture', desc: 'Built on serverless edge networks capable of handling high concurrency.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#2563EB] shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-sm text-[#0A0A0A] font-sans">{item.title}</h3>
                          <p className="text-xs text-[#6B7280] font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. PRODUCT FEATURES (6 CARDS WITH HIGHLIGHT BADGES)                      */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Engineered for Modern Travelers
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Six key product capabilities that set FlySava apart.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { 
                  title: 'Smart Flight Search', 
                  badge: 'Real-Time Routes',
                  icon: Plane, 
                  desc: 'Aggregates real-time flight schedules and fare comparisons across major global airlines instantly.' 
                },
                { 
                  title: 'Flexible Date Matrix', 
                  badge: 'Fare Calendar',
                  icon: Calendar, 
                  desc: 'Compares prices across adjacent travel dates so users can identify the cheapest departure days.' 
                },
                { 
                  title: 'Transparent Price Comparison', 
                  badge: 'Zero Hidden Fees',
                  icon: Tags, 
                  desc: 'Provides clear cost breakdowns across routes without surprise booking fees or aggressive popups.' 
                },
                { 
                  title: 'Travel & Route Inspiration', 
                  badge: 'Destination Guides',
                  icon: Compass, 
                  desc: 'Curated flight deals and destination guides designed to spark new trip ideas for budget travelers.' 
                },
                { 
                  title: 'Sub-Second Performance', 
                  badge: 'Fast Rendering',
                  icon: Zap, 
                  desc: 'Hand-crafted React front-end architecture delivering instant UI updates and high PageSpeed scores.' 
                },
                { 
                  title: 'Mobile-First Experience', 
                  badge: '100% Responsive',
                  icon: Smartphone, 
                  desc: 'Fully optimized for mobile viewports, allowing users to search and compare flights effortlessly on the go.' 
                },
              ].map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.08}>
                  <div className="p-8 rounded-[28px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <feature.icon size={22} />
                        </div>
                        <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-[10px] font-extrabold text-[#2563EB] uppercase tracking-wider">
                          {feature.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A] font-sans">{feature.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. PRODUCT EXPERIENCE                                                     */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>User-Centric Design</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Designed Around Travelers
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                How intentional UX decisions make flight search effortless.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Zap, title: 'Instant UI Response', desc: 'Zero full-page reloads. Input changes update flight routes dynamically in real time.' },
                { icon: Smartphone, title: 'Thumb-Friendly Controls', desc: 'Search inputs and filters positioned within natural mobile thumb reach for single-hand use.' },
                { icon: ShieldCheck, title: 'Accessible Contrast', desc: 'High-contrast typography and clear layout hierarchy conforming to WCAG standards.' },
                { icon: Cpu, title: 'Lightweight Payload', desc: 'Minified scripts and compressed media assets ensuring smooth operation on slow networks.' }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-6 sm:p-8 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 shadow-2xs h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                        <item.icon size={20} />
                      </div>
                      <h3 className="font-bold text-lg text-[#0A0A0A] font-sans">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. ELEGANT TECHNOLOGY STACK BADGES                                        */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1100px] mx-auto text-center">
            
            <AnimatedSection className="max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans mb-1">
                Under The Hood
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                Engineered With Modern Web Standards
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  'React Ecosystem', 
                  'TypeScript', 
                  'Vite Build Pipeline', 
                  'Tailwind CSS', 
                  'Framer Motion', 
                  'Serverless Edge Delivery', 
                  'SEO Schema Architecture', 
                  'Real-Time API Parsing'
                ].map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2.5 rounded-2xl bg-white border border-gray-200/80 text-xs font-bold text-[#0A0A0A] shadow-2xs hover:border-[#2563EB] hover:text-[#2563EB] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. PRODUCT GALLERY (RESPONSIVE MOCKUP SCREENS)                           */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>Visual Gallery</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Multi-Device Experience
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Seamless design across desktop, tablet, and mobile viewports.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: 'Desktop Search Engine', device: 'Desktop View', desc: 'Full-featured flight comparison matrix with filter sidebars.', icon: Laptop },
                { title: 'Tablet Route Explorer', device: 'Tablet View', desc: 'Adaptive layout optimized for touch interaction.', icon: Globe },
                { title: 'Mobile Travel Companion', device: 'Mobile View', desc: 'Thumb-friendly search controls for flight bookings on the go.', icon: Smartphone }
              ].map((item, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className="group rounded-[28px] bg-[#FAFAFA] border border-gray-200/80 p-6 shadow-2xs hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 space-y-4">
                    <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gray-900 to-blue-950 border border-gray-800 p-4 flex flex-col justify-between overflow-hidden relative">
                      <div className="flex items-center justify-between text-white/60 text-[10px] font-mono">
                        <span>{item.device}</span>
                        <item.icon size={14} className="text-blue-400" />
                      </div>
                      <div className="my-auto space-y-2 text-white">
                        <div className="w-10 h-2 rounded bg-blue-500/80" />
                        <div className="w-3/4 h-1.5 rounded bg-white/40" />
                        <div className="w-1/2 h-1.5 rounded bg-white/20" />
                      </div>
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[9px] text-gray-300 font-mono">
                        flysava.com/search
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0A0A0A] font-sans group-hover:text-[#2563EB] transition-colors">{item.title}</h3>
                      <p className="text-xs text-[#6B7280] font-medium mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 8. ENGINEERING PROCESS TIMELINE                                           */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white">
          <div className="max-w-[1100px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 font-sans">
                Product Engineering Timeline
              </h2>
              <p className="text-base sm:text-lg text-blue-100 font-medium">
                How ProstoLabs took FlySava from concept to live deployment.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { step: '01', title: 'Research', desc: 'Traveler friction points and flight API review.' },
                { step: '02', title: 'UX Design', desc: 'Mobile-first wireframes and interactive UI prototypes.' },
                { step: '03', title: 'Development', desc: 'React/Next.js frontend and real-time API integrations.' },
                { step: '04', title: 'Testing', desc: 'Core Web Vitals audits and responsive QA testing.' },
                { step: '05', title: 'Launch', desc: 'Deployment to edge networks with global caching.' }
              ].map((phase, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/15 h-full space-y-3">
                    <span className="text-xs font-mono font-bold text-blue-200 block">Step {phase.step}</span>
                    <h3 className="text-lg font-bold font-sans text-white">{phase.title}</h3>
                    <p className="text-xs text-blue-100 font-medium leading-relaxed">{phase.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 9. QUALITATIVE ACHIEVEMENTS & RESULTS                                     */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>Engineered Quality</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Product Outcomes
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Qualitative benchmarks achieved by FlySava.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Sub-Second Speed', desc: 'Near-instantaneous UI route rendering on mobile connections.' },
                { title: 'Responsive Design', desc: '100% fluid layouts conforming across all screen sizes.' },
                { title: 'SEO-First Structure', desc: 'Semantic HTML markup and structured JSON-LD data for search crawlers.' },
                { title: 'Scalable Foundation', desc: 'Clean React code ready to accommodate future feature integrations.' }
              ].map((res, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 shadow-2xs h-full space-y-2">
                    <CheckCircle2 className="w-6 h-6 text-[#2563EB] mb-2" />
                    <h3 className="font-bold text-base text-[#0A0A0A] font-sans">{res.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed">{res.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 10. CONTINUE EXPLORING (INTERNAL LINKING DIRECTORY)                       */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans mb-1">
                Explore ProstoLabs
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                Continue Exploring
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: 'Core Services',
                  desc: 'Explore custom web development, AI automations, and ongoing site care.',
                  link: '/services',
                  cta: 'View Services',
                  icon: Code
                },
                {
                  title: 'Resources & Journal',
                  desc: 'Read technical guides, web architecture frameworks, and automation advice.',
                  link: '/resources',
                  cta: 'Explore Resources',
                  icon: BookOpen
                },
                {
                  title: 'About ProstoLabs',
                  desc: 'Learn about our engineering philosophy, core values, and team culture.',
                  link: '/about',
                  cta: 'Learn Our Story',
                  icon: Briefcase
                },
                {
                  title: 'Contact Our Team',
                  desc: 'Discuss your upcoming software, web app, or AI project with our team.',
                  link: '/contact',
                  cta: 'Get in Touch',
                  icon: Globe
                }
              ].map((card, cIdx) => (
                <AnimatedSection key={cIdx} delay={cIdx * 0.06}>
                  <Link
                    to={card.link}
                    aria-label={`${card.cta}: ${card.title}`}
                    className="p-6 rounded-[24px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <card.icon size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#0A0A0A] font-sans group-hover:text-[#2563EB] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-[#6B7280] font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
                      <span>{card.cta}</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 11. FAQ ACCORDION                                                        */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Learn more about FlySava and ProstoLabs product engineering.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 12. FEATURED RESOURCES STREAM (DYNAMICALLY SORTED LATEST 3)               */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                  <span>From Our Journal</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                  Featured Resources
                </h2>
              </div>
              <Link to="/resources" aria-label="View all publication resources">
                <button 
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-[#0A0A0A] hover:bg-gray-100 font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  <span>View All Resources</span>
                  <ArrowRight size={14} />
                </button>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.1}>
                  <Link
                    to={`/resources/${art.slug}`}
                    aria-label={`Read resource: ${art.title}`}
                    className="group rounded-[28px] bg-white border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden cursor-pointer h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <div className="space-y-4">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
                        <img 
                          src={art.thumbnail} 
                          alt={art.title} 
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" 
                        />
                      </div>
                      <div className="flex items-center justify-between text-xs font-bold">
                        <span className="text-[#2563EB]">{art.category}</span>
                        <span className="text-gray-400 flex items-center gap-1"><Clock size={12} /> {art.readingTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors leading-snug font-sans">
                        {art.title}
                      </h3>
                      <p className="text-xs text-[#6B7280] font-medium leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400">
                      <span>{art.date}</span>
                      <span className="text-[#2563EB] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        <span>Read Story</span>
                        <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 13. FINAL CALL TO ACTION                                                  */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Ready to Build Your Own Digital Product?
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                  Partner with ProstoLabs to design and deploy custom web software, SaaS platforms, or AI integrations tailored to your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3.5 pt-2">
                  <Link to="/start-project" aria-label="Start your digital project with ProstoLabs">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-12 px-7 bg-white text-[#2563EB] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                      Start Your Project
                    </motion.button>
                  </Link>
                  <a href="https://flysava.com" target="_blank" rel="noopener noreferrer" aria-label="Visit FlySava external site">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-12 px-7 bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 flex items-center justify-center gap-2"
                    >
                      <span>Visit FlySava</span>
                      <ExternalLink size={14} />
                    </motion.button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </>
  )
}