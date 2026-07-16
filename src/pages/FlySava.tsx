import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { Plane, Tags, Map, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { SEO } from '../components/seo/SEO'

export const FlySava = () => {
  // Smooth scroll for the secondary "Learn More" button
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
    <div className="overflow-hidden bg-background">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-16 md:pt-24 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gray-100 text-sm font-medium mb-8">
               <span className="w-2 h-2 rounded-full bg-accent" />
               A ProstoLabs Product
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
              FlySava
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-10">
              FlySava is a travel platform built by ProstoLabs, helping travelers discover affordable flights, explore destinations, and travel smarter.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="https://flysava.com" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2">
                  Visit FlySava <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <Button variant="secondary" size="lg" onClick={scrollToDetails} className="w-full sm:w-auto h-14 px-8 text-lg">
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. ABOUT FLYSAVA */}
      <section id="about-flysava" className="py-24 px-6 bg-surface/50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Smarter Travel, Engineered.</h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-12">
              We built FlySava to eliminate the friction from travel planning. By leveraging advanced aggregation algorithms and an incredibly intuitive user interface, we empower travelers to save both time and money when searching for their next journey.
            </p>
            
            {/* New Highlight Stats Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 pt-10 border-t border-gray-200/80">
              <div className="flex items-center gap-2.5 text-gray-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Affordable Flight Deals</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2.5 text-gray-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Real-Time Fare Comparison</span>
              </div>
              <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div className="flex items-center gap-2.5 text-gray-700 font-semibold">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Fast & Simple Experience</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. KEY HIGHLIGHTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Highlights</h2>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Affordable Flight Discovery', icon: Plane, desc: 'Find the absolute best routes at the lowest possible price points.' },
              { title: 'Smart Fare Comparison', icon: Tags, desc: 'Transparent pricing with no hidden fees, powered by real-time data.' },
              { title: 'Travel Inspiration', icon: Map, desc: 'Curated destinations and intuitive search tools to spark your next adventure.' },
              { title: 'Modern User Experience', icon: Smartphone, desc: 'A blazing-fast, responsive interface designed for seamless booking.' },
            ].map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.1}>
                {/* Updated Premium Hover Interaction */}
                <div className="group p-10 rounded-3xl bg-surface border border-gray-100 hover:bg-white hover:border-accent/30 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 h-full cursor-default">
                  <feature.icon className="w-10 h-10 text-accent mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection className="p-12 md:p-20 bg-primary text-white rounded-[3rem] relative overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent pointer-events-none" />
             <div className="relative z-10">
               <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Ready to find your next flight?</h2>
               <a href="https://flysava.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                 <Button size="lg" className="bg-white text-primary hover:bg-gray-100 gap-2 px-8 h-14 text-lg">
                   Visit FlySava <ArrowRight className="w-5 h-5" />
                 </Button>
               </a>
             </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
    </>
  )
}