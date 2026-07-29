import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Plane, Tags, Map, Smartphone, ArrowRight, CheckCircle2, Sparkles, ExternalLink } from 'lucide-react'
import { SEO } from '../components/seo/SEO'

export const FlySava = () => {
  const scrollToDetails = () => {
    document.getElementById('about-flysava')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <SEO 
        title="FlySava | Smart Flight Search by ProstoLabs"
        description="FlySava helps travelers discover affordable flights with a fast, modern, and intelligent flight search experience."
        path="/flysava"
      />
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden text-center">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>Featured Product by ProstoLabs</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                FlySava
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                FlySava is a travel platform engineered by ProstoLabs, helping travelers discover affordable flights, explore new destinations, and travel smarter.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={0.15}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
                <a 
                  href="https://flysava.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full sm:w-auto"
                >
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Visit FlySava</span>
                    <ExternalLink size={16} />
                  </motion.button>
                </a>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={scrollToDetails} 
                  className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-white border border-gray-200/80 text-[#0A0A0A] font-bold text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Learn More
                </motion.button>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. ABOUT FLYSAVA */}
        {/* ========================================================================= */}
        <section id="about-flysava" className="py-16 md:py-24 px-6 bg-white border-y border-gray-200/80 scroll-mt-20">
          <div className="max-w-[1000px] mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-4 font-sans">
                Smarter Travel, Engineered.
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
                We engineered FlySava to streamline flight discovery. Combining real-time route aggregation with a fast, modern user interface, we empower travelers to save both time and money.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 pt-8 border-t border-gray-200/80">
                <div className="flex items-center gap-2 text-[#0A0A0A] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <span>Affordable Flight Deals</span>
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300" />
                <div className="flex items-center gap-2 text-[#0A0A0A] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <span>Real-Time Fare Comparison</span>
                </div>
                <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300" />
                <div className="flex items-center gap-2 text-[#0A0A0A] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
                  <span>Fast & Simple Search</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. KEY HIGHLIGHTS */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="mb-12 sm:mb-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Key Highlights
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Why travelers choose FlySava for flight discovery.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { title: 'Affordable Flight Discovery', icon: Plane, desc: 'Discover optimal travel routes at competitive prices.' },
                { title: 'Transparent Fare Search', icon: Tags, desc: 'Real-time fare data with clear pricing breakdown.' },
                { title: 'Destination Inspiration', icon: Map, desc: 'Curated travel guides and routes to spark your next trip.' },
                { title: 'Modern User Experience', icon: Smartphone, desc: 'A blazing-fast interface built for desktop and mobile.' },
              ].map((feature, i) => (
                <AnimatedSection key={feature.title} delay={i * 0.08}>
                  <div className="p-8 rounded-[24px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                        <feature.icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 font-sans">{feature.title}</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Ready to find your next flight?
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                  Explore affordable flight options and destinations on FlySava today.
                </p>
                <div className="pt-2">
                  <a href="https://flysava.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="h-12 px-8 bg-white text-[#2563EB] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-50 transition-colors cursor-pointer inline-flex items-center gap-2"
                    >
                      <span>Visit FlySava</span>
                      <ArrowRight size={16} />
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