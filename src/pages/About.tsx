import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { resources } from '../data/resourcesData'
import { 
  Code, Palette, Lightbulb, Target, Activity, Sparkles,
  ChevronDown, CheckCircle2, ShieldCheck, Cpu, Clock, ArrowRight, 
  MessageSquare, Layers, Globe, BookOpen, 
} from 'lucide-react'

// Real FAQ Data & Schema Injection
const faqData = [
  {
    question: "What types of digital products does ProstoLabs build?",
    answer: "We design and develop custom web applications, enterprise client portals, mobile applications, high-performance marketing websites, and AI automation workflows tailored to your business operations."
  },
  {
    question: "How long does a typical project take from discovery to launch?",
    answer: "Project timelines vary by functional scope. Custom business websites typically take 2 to 4 weeks, while complex custom web applications and multi-role software platforms range from 6 to 10 weeks."
  },
  {
    question: "Do you provide ongoing technical support and maintenance after launch?",
    answer: "Yes. ProstoLabs offers comprehensive monthly maintenance plans covering 24/7 uptime monitoring, daily encrypted cloud backups, security patching, Core Web Vitals optimization, and dedicated support hours."
  },
  {
    question: "How do we communicate with your team during development?",
    answer: "You work directly with your lead engineers and designers via direct messaging channels (Slack/WhatsApp), paired with weekly video updates and live staging preview links throughout the project lifecycle."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200/80 rounded-2xl bg-white shadow-2xs hover:border-slate-300 transition-colors overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 cursor-pointer hover:text-blue-600 transition-colors group"
      >
        <span className="tracking-tight">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const latestArticles = [...resources]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <>
      <SEO 
        title="About ProstoLabs | Digital Product Studio & Web Engineering"
        description="Learn about ProstoLabs—our engineering philosophy, product journey, values, and commitment to building fast, high-performance web products for growing businesses worldwide."
        path="/about"
        faq={faqData}
      />
      
      <div className="relative w-full overflow-x-clip bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-600" ref={containerRef}>
        
        {/* Subtle Ambient Grid Layer */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 top-0 h-[650px] w-full bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-0 right-0 h-[700px] bg-[linear-gradient(to_right,#E2E8F040_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F040_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-16 sm:pb-20 text-center">
          <div className="max-w-[1000px] mx-auto relative z-10 space-y-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-blue-600 mb-2">
                <Sparkles size={14} className="text-blue-600" />
                <span>The Engineering Studio</span>
              </div>

              <h1 className="text-[36px] sm:text-[52px] md:text-[62px] lg:text-[70px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950">
                Engineering Modern Digital Products for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                  Ambitious Businesses Worldwide.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
                ProstoLabs is an independent technology studio. We pair clean software engineering with functional UI/UX design to build fast, scalable web platforms, AI tools, and digital products that drive long-term business performance.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. REALISTIC TRUST METRICS */}
        {/* ========================================================================= */}
        <section className="py-6 px-5 sm:px-8 lg:px-12 relative z-20">
          <div className="max-w-[1240px] mx-auto">
            <div className="bg-white border border-slate-200/90 rounded-2xl shadow-xs p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
                {[
                  { value: "Custom", label: "Digital Products" },
                  { value: "AI-Powered", label: "Workflow Solutions" },
                  { value: "Modern", label: "Technology Stack" },
                  { value: "Global", label: "Client Collaboration" },
                ].map((stat, idx) => (
                  <div key={idx} className="pt-4 md:pt-0 px-3">
                    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHO WE ARE */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                A dedicated engineering team focused on technical craft, speed, and business outcomes.
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Code, 
                  title: "Engineering Craft", 
                  desc: "We write clean, modular, and performant code using modern frameworks. Our software architectures are built from day one to run fast and scale seamlessly." 
                },
                { 
                  icon: Palette, 
                  title: "Functional Design", 
                  desc: "Design is about usability and clarity. We craft visual interfaces that guide users naturally, project brand authority, and increase lead conversions." 
                },
                { 
                  icon: Lightbulb, 
                  title: "Smart Automations", 
                  desc: "We integrate practical AI engines and automated workflows that eliminate manual operational tasks, saving your team valuable weekly working hours." 
                }
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-5 shadow-2xs">
                        <item.icon size={22} strokeWidth={1.75} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-950 mb-2.5 tracking-tight">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHY BUSINESSES CHOOSE PROSTOLABS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                The ProstoLabs Difference
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Why Businesses Choose <span className="text-blue-600">ProstoLabs</span>
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                We combine technical rigor with commercial awareness to deliver digital assets that perform.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Target, title: 'Business-First Thinking', text: 'Every line of code and UI component is engineered with your conversion paths and commercial goals in mind.' },
                { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct, clear collaboration with lead engineers and designers without account management barriers.' },
                { icon: Cpu, title: 'Performance Focused', text: 'Sub-second mobile rendering speeds and Core Web Vitals optimization built directly into site architecture.' },
                { icon: Layers, title: 'Scalable Architecture', text: 'Modern component-driven setups ready to adapt as active user concurrency and business scope expand.' },
                { icon: ShieldCheck, title: 'Long-Term Partnership', text: 'Ongoing cloud care, security monitoring, and product enhancements long after initial deployment.' },
                { icon: Sparkles, title: 'Continuous Innovation', text: 'Integrating modern web standards, AI engines, and automation tools to keep your business ahead of competitors.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                        <item.icon size={20} strokeWidth={1.75} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-950 mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. MISSION & VISION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white relative">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Our Mission */}
            <AnimatedSection>
              <div className="p-8 sm:p-10 rounded-3xl bg-blue-600 text-white h-full flex flex-col justify-between shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-white font-semibold text-xs uppercase tracking-wider mb-6 border border-white/20">
                    <Target size={14} />
                    <span>Our Mission</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4 leading-tight">
                    Building reliable technology that helps businesses grow.
                  </h3>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-normal">
                    We help companies launch fast, secure, and user-friendly web products that increase lead generation, streamline operational workflows, and deliver lasting brand equity.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Our Vision */}
            <AnimatedSection delay={0.1}>
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 text-slate-950 h-full flex flex-col justify-between shadow-2xs">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-blue-600 font-semibold text-xs uppercase tracking-wider mb-6 shadow-2xs">
                    <Activity size={14} />
                    <span>Our Vision</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 mb-4 leading-tight">
                    Creating a simpler, smarter digital future.
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    Our goal is to be a trusted global partner for ambitious companies, delivering clean software platforms and smart AI integrations that produce measurable real-world impact.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>

       {/* ========================================================================= */}
{/* 6. OUR JOURNEY (BALANCED TIMELINE & HOVER ANIMATION) */}
{/* ========================================================================= */}
<section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
  <div className="max-w-[1000px] mx-auto">
    
    <AnimatedSection className="text-center mb-16 sm:mb-20">
      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
        Timeline
      </span>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
        Our Journey
      </h2>
      <p className="text-base text-slate-600 font-normal mt-2">
        How we evolved into an independent web engineering and AI product studio.
      </p>
    </AnimatedSection>

    <div className="relative">
      {/* Central Spine Line */}
      <div 
        aria-hidden="true" 
        className="absolute left-[17px] sm:left-1/2 top-4 bottom-4 w-px bg-slate-300 -translate-x-1/2" 
      />

      <div className="space-y-12 sm:space-y-16">
        {[
          { label: 'Founding', title: 'Establishing ProstoLabs', desc: 'ProstoLabs was established with a focus on pairing clean software architecture with conversion-driven UI/UX design.' },
          { label: 'First Products', title: 'Building Core Web Platforms', desc: 'Engineered custom software applications and web portals for early client partners, setting our baseline for performance.' },
          { label: 'Flagship Product', title: 'Building FlySava', desc: 'Designed and deployed FlySava, a custom aviation web platform featuring automated booking workflows and real-time scheduling.' },
          { label: 'AI Expansion', title: 'Integrating AI & Automations', desc: 'Expanded our capabilities to include custom AI knowledge assistants, automated lead routers, and operational webhooks.' },
          { label: 'Global Collaboration', title: 'Growing Client Partnerships', desc: 'Partnering with businesses internationally as a reliable long-term engineering, design, and cloud support team.' },
        ].map((item, i) => {
          const isEven = i % 2 === 0
          return (
            <AnimatedSection 
              key={item.label} 
              delay={i * 0.06}
              className="relative flex items-center"
            >
              {/* Central Node Indicator */}
              <div className="absolute left-[17px] sm:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-blue-600 -translate-x-1/2 z-10 shadow-xs transition-transform duration-300 group-hover:scale-125" />

              {/* Responsive Alternating Grid */}
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-0 items-center">
                
                {/* Left Column */}
                <div className={`w-full ${isEven ? 'sm:text-right pr-0 sm:pr-10 lg:pr-14 pl-10 sm:pl-0' : 'hidden sm:block'}`}>
                  {isEven && (
                    <motion.div 
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all text-left inline-block w-full"
                    >
                      <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block mb-1.5 font-mono">
                        {item.label}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Right Column */}
                <div className={`w-full ${!isEven ? 'pl-10 sm:pl-10 lg:pl-14' : 'hidden sm:block'}`}>
                  {!isEven && (
                    <motion.div 
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all text-left inline-block w-full"
                    >
                      <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider block mb-1.5 font-mono">
                        {item.label}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-950 mb-2 tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </motion.div>
                  )}
                </div>

              </div>
            </AnimatedSection>
          )
        })}
      </div>

    </div>

  </div>
</section>

        {/* ========================================================================= */}
        {/* 7. TEAM PHILOSOPHY: HOW WE THINK */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[900px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                How We Think
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xs space-y-6">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  At ProstoLabs, we believe that modern software should be simple to use, fast to render, and straightforward to maintain. We resist unnecessary code bloat and complex technical layers that add cost without improving customer experience.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  Great engineering is invisible. When a web application loads in milliseconds and guides a client naturally through a purchase or booking path, software becomes a powerful catalyst for commercial growth.
                </p>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  We approach every project not as a one-time transaction, but as a long-term partnership. We succeed when our clients launch fast, eliminate operational friction, and scale confidently.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. OUR CORE VALUES */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Our Culture
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Our Guiding Principles
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                How we operate and collaborate with every client partner.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "No Corporate Jargon", desc: "We speak plainly and explain technical decisions in straightforward, actionable language." },
                { title: "Transparent Scope", desc: "Clear milestone deliverables, predictable timelines, and zero unexpected invoice surprises." },
                { title: "Security by Default", desc: "SSL encryption, secure API endpoints, and data privacy protocols engineered into every product." },
                { title: "Speed & Performance", desc: "Every line of code is optimized so your software loads in sub-seconds on all mobile screens." }
              ].map((val, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all h-full">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <CheckCircle2 size={20} strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-lg text-slate-950 mb-2 tracking-tight">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{val.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. CONTINUE EXPLORING */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Explore ProstoLabs
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
                Continue Exploring
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Core Services',
                  desc: 'Explore our full capabilities in custom web engineering, AI automations, and ongoing site care.',
                  link: '/services',
                  cta: 'View Services',
                  icon: Code
                },
                {
                  title: 'Resources & Journal',
                  desc: 'Read in-depth technical guides, web architecture frameworks, and business automation strategies.',
                  link: '/resources',
                  cta: 'Explore Resources',
                  icon: BookOpen
                },
                {
                  title: 'Our Products',
                  desc: 'Discover FlySava, our flagship luxury aviation platform engineered for instant online booking workflows.',
                  link: '/flysava',
                  cta: 'Explore FlySava',
                  icon: Globe
                }
              ].map((card, cIdx) => (
                <AnimatedSection key={cIdx} delay={cIdx * 0.05}>
                  <Link
                    to={card.link}
                    aria-label={`${card.cta}: ${card.title}`}
                    className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between h-full group cursor-pointer"
                  >
                    <div className="space-y-3.5">
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-2xs">
                        <card.icon size={20} strokeWidth={1.75} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-slate-200/70 flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600">
                      <span>{card.cta}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 10. FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-t border-slate-200/80">
          <div className="max-w-[840px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Everything you need to know about partnering with ProstoLabs.
              </p>
            </AnimatedSection>

            <div className="space-y-3.5">
              {faqData.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.04}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. FEATURED RESOURCES */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">From Our Journal</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                  Featured Resources
                </h2>
              </div>
              <Link to="/resources" className="shrink-0" aria-label="View all publication resources">
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700">
                  View All Resources <ArrowRight size={14} />
                </span>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.05}>
                  <Link
                    to={`/resources/${art.slug}`}
                    aria-label={`Read resource: ${art.title}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 p-5 hover:border-slate-300 transition-colors"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-slate-200 relative rounded-xl mb-4">
                      <img 
                        src={art.thumbnail} 
                        alt={art.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-300" 
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white text-[11px] font-bold text-slate-900 shadow-2xs">
                        {art.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {art.readingTime}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                        {art.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2 mb-4">
                        {art.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-1 text-xs font-bold text-blue-600">
                        <span>Read Story</span>
                        <ArrowRight size={13} />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 12. FINAL CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-950 text-white text-center">
          <div className="max-w-[760px] mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to build your digital product <span className="text-blue-400">with confidence?</span>
            </h2>
            <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed font-normal">
              Partner with ProstoLabs to engineer high-speed web apps, custom software, or AI automations. Receive a clear, transparent project proposal today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link to="/start-project" aria-label="Start your digital project with ProstoLabs" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-7 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/contact" aria-label="Talk to the ProstoLabs engineering team" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-7 bg-white/10 hover:bg-white/15 text-white rounded-full font-semibold text-sm sm:text-base border border-white/15 transition-all cursor-pointer flex items-center justify-center">
                  Talk to Our Team
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}