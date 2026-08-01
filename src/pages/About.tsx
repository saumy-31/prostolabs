import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { resources } from '../data/resourcesData'
import { 
  Code, Palette, Lightbulb, Target, Activity, Sparkles,
  ChevronDown, CheckCircle2, ShieldCheck, Cpu, Clock,
  ArrowUpRight, ArrowRight, MessageSquare, Layers, Briefcase, Globe,
  BookOpen
} from 'lucide-react'

// --- FAQ DATA FOR COMPONENT & AUTOMATIC SCHEMA INJECTION ---
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

// --- FAQ ACCORDION ITEM COMPONENT ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200/80 rounded-2xl bg-white overflow-hidden transition-all">
      <button
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

export const About = () => {
  const containerRef = useRef(null)
  
  // Sort resources by date (newest first) and grab the top 3
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
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (MEMORABLE & BRAND-FOCUSED STORYTELLING)                  */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden">
          
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
              className="w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] border border-blue-200 rounded-full absolute"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
              className="w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] border border-blue-300 rounded-full absolute border-dashed"
            />
          </div>

          <div className="max-w-[1100px] mx-auto text-center relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>The Engineering Studio</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                Engineering Modern Digital Products for <br className="hidden sm:block" />
                <span className="text-[#2563EB]">Ambitious Businesses Worldwide.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-medium">
                ProstoLabs is an independent technology studio. We pair clean software engineering with functional UI/UX design to build fast, scalable web platforms, AI tools, and digital products that drive long-term business performance.
              </p>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. REALISTIC TRUST METRICS                                                */}
        {/* ========================================================================= */}
        <section className="py-12 px-6 bg-white border-y border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "Custom", label: "Digital Products" },
                { value: "AI-Powered", label: "Workflow Solutions" },
                { value: "Modern", label: "Technology Stack" },
                { value: "Global", label: "Client Collaboration" },
              ].map((stat, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05}>
                  <div className="p-4">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2563EB] tracking-tight font-sans">{stat.value}</p>
                    <p className="text-xs sm:text-sm font-bold text-[#6B7280] mt-2 uppercase tracking-wider">{stat.label}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. WHO WE ARE                                                             */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                A dedicated engineering team focused on technical craft, speed, and business outcomes.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-[28px] bg-white border border-gray-200/80 h-full group hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A] mb-3 font-sans">{item.title}</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. WHY BUSINESSES CHOOSE PROSTOLABS                                       */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>The ProstoLabs Difference</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Why Businesses Choose ProstoLabs
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                We combine technical rigor with commercial awareness to deliver digital assets that perform.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Target, title: 'Business-First Thinking', text: 'Every line of code and UI component is engineered with your conversion paths and commercial goals in mind.' },
                { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct, clear collaboration with lead engineers and designers without account management barriers.' },
                { icon: Cpu, title: 'Performance Focused', text: 'Sub-second mobile rendering speeds and Core Web Vitals optimization built directly into site architecture.' },
                { icon: Layers, title: 'Scalable Architecture', text: 'Modern component-driven setups ready to adapt as active user concurrency and business scope expand.' },
                { icon: ShieldCheck, title: 'Long-Term Partnership', text: 'Ongoing cloud care, security monitoring, and product enhancements long after initial deployment.' },
                { icon: Sparkles, title: 'Continuous Innovation', text: 'Integrating modern web standards, AI engines, and automation tools to keep your business ahead of competitors.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-[28px] bg-[#FAFAFA] border border-gray-200/80 shadow-2xs hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                        <item.icon size={22} />
                      </div>
                      <h3 className="font-bold text-xl text-[#0A0A0A] font-sans">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{item.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. MISSION & VISION                                                       */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* OUR MISSION */}
            <AnimatedSection>
              <div className="p-8 sm:p-12 rounded-[32px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white h-full flex flex-col justify-between shadow-xl">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-blue-100 font-bold text-xs uppercase tracking-wider mb-6 border border-white/20">
                    <Target size={14} />
                    <span>Our Mission</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-sans leading-tight">
                    Building reliable technology that helps businesses grow.
                  </h2>
                  <p className="text-sm sm:text-base text-blue-100 leading-relaxed font-medium">
                    We help companies launch fast, secure, and user-friendly web products that increase lead generation, streamline operational workflows, and deliver lasting brand equity.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* OUR VISION */}
            <AnimatedSection delay={0.15}>
              <div className="p-8 sm:p-12 rounded-[32px] bg-white border border-gray-200/80 text-[#0A0A0A] h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-6">
                    <Activity size={14} />
                    <span>Our Vision</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 font-sans text-[#0A0A0A] leading-tight">
                    Creating a simpler, smarter digital future.
                  </h2>
                  <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                    Our goal is to be a trusted global partner for ambitious companies, delivering clean software platforms and smart AI integrations that produce measurable real-world impact.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. OUR JOURNEY (REALISTIC STORY-DRIVEN MILESTONES)                        */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1000px] mx-auto">
            
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Our Journey
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                How we evolved into an independent web engineering and AI product studio.
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Vertical Center Line */}
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

              {[
                { label: 'Founding', title: 'Establishing ProstoLabs', desc: 'ProstoLabs was established with a focus on pairing clean software architecture with conversion-driven UI/UX design.' },
                { label: 'First Products', title: 'Building Core Web Platforms', desc: 'Engineered custom software applications and web portals for early client partners, setting our baseline for performance.' },
                { label: 'Flagship Product', title: 'Building FlySava', desc: 'Designed and deployed FlySava, a custom aviation web platform featuring automated booking workflows and real-time scheduling.' },
                { label: 'AI Expansion', title: 'Integrating AI & Automations', desc: 'Expanded our capabilities to include custom AI knowledge assistants, automated lead routers, and operational webhooks.' },
                { label: 'Global Collaboration', title: 'Growing Client Partnerships', desc: 'Partnering with businesses internationally as a reliable long-term engineering, design, and cloud support team.' },
              ].map((item, i) => (
                <AnimatedSection 
                  key={i} 
                  delay={i * 0.08} 
                  className={`relative flex items-center justify-between mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-[#2563EB] -translate-x-1/2 outline outline-4 outline-white shadow-md z-10" />
                  
                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block w-5/12" />
                  
                  {/* Timeline Card */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12">
                    <div className="p-6 rounded-[20px] bg-[#FAFAFA] border border-gray-200/80 hover:border-[#2563EB]/40 transition-colors shadow-2xs">
                      <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1 block font-sans">{item.label}</span>
                      <h3 className="text-lg font-bold text-[#0A0A0A] mb-2 font-sans">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. TEAM PHILOSOPHY: HOW WE THINK                                          */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1100px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>Our Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                How We Think
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="p-8 sm:p-12 rounded-[32px] bg-white border border-gray-200/80 shadow-2xs space-y-6 max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-medium">
                  At ProstoLabs, we believe that modern software should be simple to use, fast to render, and straightforward to maintain. We resist unnecessary code bloat and complex technical layers that add cost without improving customer experience.
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-medium">
                  Great engineering is invisible. When a web application loads in milliseconds and guides a client naturally through a purchase or booking path, software becomes a powerful catalyst for commercial growth.
                </p>
                <p className="text-base sm:text-lg text-[#374151] leading-relaxed font-medium">
                  We approach every project not as a one-time transaction, but as a long-term partnership. We succeed when our clients launch fast, eliminate operational friction, and scale confidently.
                </p>
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 8. OUR CORE VALUES                                                        */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>Our Culture</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Our Guiding Principles
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
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
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 h-full shadow-2xs">
                    <CheckCircle2 className="w-8 h-8 text-[#2563EB] mb-4" />
                    <h3 className="font-bold text-lg text-[#0A0A0A] mb-2 font-sans">{val.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{val.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 9. CONTINUE EXPLORING (INTERNAL LINKING DIRECTORY)                        */}
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
                <AnimatedSection key={cIdx} delay={cIdx * 0.08}>
                  <Link
                    to={card.link}
                    aria-label={`${card.cta}: ${card.title}`}
                    className="p-7 rounded-[28px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <card.icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-[#0A0A0A] font-sans group-hover:text-[#2563EB] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
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
        {/* 10. FAQ ACCORDION                                                         */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Everything you need to know about partnering with ProstoLabs.
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
        {/* 11. FEATURED RESOURCES STREAM (DYNAMICALLY SORTED LATEST 3)                */}
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
                <button className="px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-[#0A0A0A] hover:bg-gray-100 font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">
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
        {/* 12. FINAL CALL TO ACTION (CONFIDENCE-BUILDING COPY)                      */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Ready to build your digital product with confidence?
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                  Partner with ProstoLabs to engineer high-speed web apps, custom software, or AI automations. Receive a clear, transparent project proposal today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3.5 pt-2">
                  <Link to="/start-project" aria-label="Start your digital project with ProstoLabs">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto h-12 px-7 bg-white text-[#2563EB] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                      Start Your Project
                    </motion.button>
                  </Link>
                  <Link to="/contact" aria-label="Talk to the ProstoLabs engineering team">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto h-12 px-7 bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                      Talk to Our Team
                    </motion.button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </>
  )
}