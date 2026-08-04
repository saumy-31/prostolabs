import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'

import { 
  Plane, Tags, Smartphone, ArrowRight, CheckCircle2, Sparkles, ExternalLink,
  ShieldCheck, Cpu, ArrowUpRight, BookOpen, Code, Globe,  Briefcase,
  Zap, Calendar, Compass, Search, ChevronDown, HelpCircle
} from 'lucide-react'

// --- SAAS EASING CURVE ---
const easeSaaS = [0.16, 1, 0.3, 1] as const

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
    <div className="border border-gray-200/50 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0A0A0A] cursor-pointer hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 transition-colors font-sans group"
      >
        <span className="tracking-tight pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${isOpen ? 'bg-blue-50' : 'bg-gray-50 group-hover:bg-blue-50'}`}>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180 text-[#2563EB]' : 'text-gray-400 group-hover:text-[#2563EB]'}`} 
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeSaaS }}
          >
            <div className="px-6 pb-6 pt-0 text-[15px] text-[#6B7280] font-medium leading-relaxed border-t border-gray-100/80 mt-1 pt-4">
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
      
      <div className="relative overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-500/30 selection:text-blue-900">
        
        {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
        <div className="absolute top-0 left-0 right-0 h-[120vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[15%] right-[-5%] w-[35%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative px-6 pt-24 sm:pt-32 md:pt-40 pb-16 md:pb-20 overflow-hidden text-center z-10">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-8 transform-gpu">
                <Sparkles size={16} className="text-[#2563EB]" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Featured Product • Built by ProstoLabs</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8 text-[#0A0A0A] font-sans">
                Travel Smarter. Book Better. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#2563EB] to-cyan-500">The Modern Way to Fly.</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-[1.6] mb-10 font-medium tracking-tight">
                FlySava is an intelligent travel search engine engineered by ProstoLabs. It eliminates flight booking friction by delivering real-time fare aggregation, flexible date matrices, and sub-second route search speeds.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.15}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
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
                    className="group relative w-full sm:w-auto h-14 px-8 rounded-full bg-[#2563EB] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer transition-all overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.3)] border border-blue-400/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      Visit FlySava
                      <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </motion.button>
                </a>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={scrollToDetails} 
                  aria-label="Explore FlySava features and technical architecture"
                  className="w-full sm:w-auto h-14 px-8 rounded-full bg-white/70 backdrop-blur-xl border border-gray-200/80 text-[#0A0A0A] font-bold text-sm sm:text-base hover:bg-white hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer flex items-center justify-center shadow-sm"
                >
                  Explore Features
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. PRODUCT PREVIEW (GLASSMORPHISM BROWSER & MOBILE MOCKUPS) */}
        {/* ========================================================================= */}
        <section className="px-6 pb-24 md:pb-32 relative z-20">
          <div className="max-w-[1200px] mx-auto">
            <AnimatedSection delay={0.2}>
              <div className="relative rounded-[40px] bg-[#050505] p-[1px] shadow-[0_30px_100px_rgba(0,0,0,0.4)] overflow-hidden group">
                
                {/* Outer Glow Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-transparent to-cyan-500/30 opacity-50" />
                
                <div className="relative rounded-[40px] bg-gradient-to-b from-gray-900 to-[#0A0F1C] p-4 sm:p-8 md:p-12 overflow-hidden border border-white/5">
                  
                  {/* Background Radial Glow Inside Mockup */}
                  <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
                  <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                  {/* Desktop Mockup Header Bar */}
                  <div className="flex items-center justify-between pb-6 mb-8 relative z-10">
                    <div className="flex items-center gap-2.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] border border-[#E0443E]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] border border-[#DEA123]" />
                      <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-[inset_0_1px_2px_rgba(255,255,255,0.3)] border border-[#1AAB29]" />
                    </div>
                    <div className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-xs font-mono text-gray-300 flex items-center gap-2.5 shadow-inner flex-1 max-w-sm mx-4 justify-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>https://flysava.com</span>
                    </div>
                    <div className="text-[10px] font-bold text-blue-400 font-mono tracking-widest hidden md:block px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      PROSTOLABS CORE ENGINE
                    </div>
                  </div>

                  {/* Main Dashboard Interactive Preview Canvas */}
                  <div className="relative rounded-[32px] bg-white/5 border border-white/10 p-6 sm:p-10 text-white space-y-10 backdrop-blur-2xl shadow-2xl z-10">
                    
                    {/* Flight Search Widget Header Mockup */}
                    <div className="space-y-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
                        <div>
                          <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-widest block mb-2">Live Product Preview</span>
                          <h2 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight">Find & Compare Flight Deals</h2>
                        </div>
                        <div className="flex items-center gap-2.5 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-xs font-bold text-blue-300">
                          <Plane size={16} className="animate-pulse" />
                          <span>Real-Time Route Engine Active</span>
                        </div>
                      </div>

                      {/* Flight Search Bar Mockup Controls */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5 hover:bg-white/10 transition-colors cursor-pointer">
                          <span className="text-gray-400 font-mono block text-[10px] tracking-wider">DEPARTING FROM</span>
                          <span className="font-bold text-white text-[15px]">Bengaluru (BLR)</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5 hover:bg-white/10 transition-colors cursor-pointer">
                          <span className="text-gray-400 font-mono block text-[10px] tracking-wider">DESTINATION</span>
                          <span className="font-bold text-white text-[15px]">London (LHR)</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-1.5 hover:bg-white/10 transition-colors cursor-pointer">
                          <span className="text-gray-400 font-mono block text-[10px] tracking-wider">DATES</span>
                          <span className="font-bold text-white text-[15px]">Flexible Date Matrix</span>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#2563EB] text-white flex items-center justify-center font-bold text-[15px] shadow-lg shadow-blue-500/30 gap-2.5 cursor-pointer hover:bg-blue-600 transition-colors">
                          <Search size={18} />
                          <span>Search Fares</span>
                        </div>
                      </div>
                    </div>

                    {/* Flight Results Stream Cards Mockup */}
                    <div className="space-y-4">
                      <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/10 transition-colors cursor-pointer">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center font-bold text-blue-300">
                            BA
                          </div>
                          <div>
                            <p className="font-bold text-white text-base">Non-stop Flight • 9h 45m</p>
                            <p className="text-gray-400 text-xs font-medium mt-0.5">Direct Route • Daily Availability</p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right">
                          <span className="text-emerald-400 font-extrabold text-base block">Best Fare Deal</span>
                          <span className="text-gray-400 text-[11px] uppercase tracking-wider font-mono mt-0.5 block">Real-Time Aggregation</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. WHY WE BUILT FLYSAVA */}
        {/* ========================================================================= */}
        <section id="about-flysava" className="py-24 md:py-32 px-6 bg-white border-t border-gray-200/50 scroll-mt-20">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500" /> Product Story
                </div>
                
                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-8 leading-[1.1] font-sans">
                  Why ProstoLabs Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">FlySava.</span>
                </h2>
                
                <div className="space-y-6 text-lg text-[#4B5563] font-medium leading-[1.7]">
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

              <AnimatedSection delay={0.2}>
                <div className="p-8 sm:p-12 rounded-[40px] bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 space-y-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl" />
                  
                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans relative z-10">
                    Product Achievements
                  </span>
                  
                  <div className="space-y-6 relative z-10">
                    {[
                      { title: 'Sub-Second Search Engine', desc: 'Optimized API polling mechanics that render flight options without screen lag.' },
                      { title: 'Mobile-First Ergonomics', desc: 'Thumb-friendly search controls engineered for effortless smartphone use.' },
                      { title: 'Transparent Fare Pricing', desc: 'Clear cost breakdowns without deceptive hidden add-ons or popups.' },
                      { title: 'Scalable Cloud Architecture', desc: 'Built on serverless edge networks capable of handling high concurrency.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50/50 border border-gray-100/80 hover:bg-white transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-[17px] text-[#0A0A0A] font-sans tracking-tight mb-1">{item.title}</h3>
                          <p className="text-[14px] text-[#6B7280] font-medium leading-relaxed">{item.desc}</p>
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
        {/* 4. PRODUCT FEATURES (BENTO GRID) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-transparent relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                Core Capabilities
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Engineered for Modern Travelers
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
                  title: 'Transparent Pricing', 
                  badge: 'Zero Hidden Fees',
                  icon: Tags, 
                  desc: 'Provides clear cost breakdowns across routes without surprise booking fees or aggressive popups.' 
                },
                { 
                  title: 'Travel Inspiration', 
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
                <AnimatedSection key={feature.title} delay={i * 0.1}>
                  <div className="group relative p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/30 transition-all duration-500 h-full flex flex-col overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 group-hover:bg-blue-500/10 transition-all duration-500" />
                    
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                          <feature.icon size={26} strokeWidth={1.5} />
                        </div>
                        <span className="px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-[10px] font-bold text-[#2563EB] uppercase tracking-widest shadow-sm">
                          {feature.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#0A0A0A] font-sans tracking-tight mb-3">{feature.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium mt-auto">{feature.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. PRODUCT EXPERIENCE */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                User-Centric Design
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Designed Around Travelers
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-[32px] bg-[#FAFAFA] border border-gray-200/80 hover:bg-white hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:border-transparent transition-all duration-300 h-full flex flex-col justify-between group cursor-default">
                    <div className="space-y-5">
                      <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 shadow-sm text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                        <item.icon size={22} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-xl text-[#0A0A0A] font-sans tracking-tight">{item.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. ELEGANT TECHNOLOGY STACK BADGES */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-transparent relative border-t border-gray-200/50">
          <div className="max-w-[1100px] mx-auto text-center">
            
            <AnimatedSection className="max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans mb-3">
                Under The Hood
              </span>
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] tracking-[-0.02em] font-sans">
                Engineered With Modern Web Standards
              </h3>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="flex flex-wrap items-center justify-center gap-4">
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
                    className="px-6 py-3.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm text-[15px] font-bold text-[#0A0A0A] hover:border-[#2563EB]/50 hover:shadow-[0_8px_20px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </section>




        {/* ========================================================================= */}
        {/* 8. ENGINEERING PROCESS TIMELINE (DARK THEME) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1300px] mx-auto relative z-10">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Product Engineering Timeline
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-medium">
                How ProstoLabs took FlySava from concept to live deployment.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
              {/* Desktop Horizontal Line */}
              <div className="hidden lg:block absolute top-[32px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0" />

              {[
                { step: '01', title: 'Research', desc: 'Traveler friction points and flight API review.' },
                { step: '02', title: 'UX Design', desc: 'Mobile-first wireframes and interactive UI prototypes.' },
                { step: '03', title: 'Development', desc: 'React/Next.js frontend and real-time API integrations.' },
                { step: '04', title: 'Testing', desc: 'Core Web Vitals audits and responsive QA testing.' },
                { step: '05', title: 'Launch', desc: 'Deployment to edge networks with global caching.' }
              ].map((phase, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="relative z-10 group">
                  <div className="p-8 sm:p-10 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 h-full flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border-2 border-gray-800 group-hover:border-blue-500 flex items-center justify-center text-lg font-bold text-gray-400 group-hover:text-blue-400 mb-6 transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative">
                      {phase.step}
                      <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <h3 className="text-xl font-bold font-sans text-white tracking-tight mb-3">{phase.title}</h3>
                    <p className="text-[14px] text-gray-400 font-medium leading-relaxed">{phase.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 9. QUALITATIVE ACHIEVEMENTS & RESULTS */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                Engineered Quality
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Product Outcomes
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-[32px] bg-[#FAFAFA] border border-gray-200/80 shadow-2xs hover:shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:bg-white transition-all duration-300 h-full space-y-4 cursor-default">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-6 h-6 text-[#2563EB]" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-xl text-[#0A0A0A] font-sans tracking-tight">{res.title}</h3>
                    <p className="text-[15px] text-[#6B7280] font-medium leading-relaxed">{res.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 10. FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-transparent">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                <HelpCircle size={14} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Questions about FlySava?
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
        {/* 11. CONTINUE EXPLORING */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-white border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans mb-3">
                Explore ProstoLabs
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-[-0.02em] font-sans">
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
                    className="p-8 md:p-10 rounded-[32px] bg-white/70 backdrop-blur-xl border border-gray-200/80 hover:border-[#2563EB]/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 text-[#0A0A0A] flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors duration-300">
                        <card.icon size={22} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#0A0A0A] font-sans group-hover:text-[#2563EB] transition-colors tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-[15px] text-[#6B7280] font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-8 border-t border-gray-200/60 flex items-center gap-2 text-[13px] font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">
                      <span>{card.cta}</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 12. FINAL CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-transparent">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[40px] overflow-hidden bg-[#0A0A0A] text-white text-center py-20 md:py-28 px-6 sm:px-12 shadow-2xl">
              {/* Premium Gradient Overlays */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.4)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] font-sans leading-[1.1]">
                  Ready to Build Your Own <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Product?</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  Partner with ProstoLabs to design and deploy custom web software, SaaS platforms, or AI integrations tailored to your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Link to="/start-project" aria-label="Start your digital project with ProstoLabs">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="group relative w-full sm:w-auto h-14 px-8 bg-white text-[#0A0A0A] rounded-full font-bold text-base shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all cursor-pointer overflow-hidden flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <a href="https://flysava.com" target="_blank" rel="noopener noreferrer" aria-label="Visit FlySava external site">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-14 px-8 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base border border-white/20 hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                    >
                      <span>Visit FlySava</span>
                      <ExternalLink size={16} />
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