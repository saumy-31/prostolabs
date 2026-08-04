import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { resources } from '../data/resourcesData'
import { 
  Code, Palette, Lightbulb, Target, Activity, Sparkles,
  ChevronDown, CheckCircle2, ShieldCheck, Cpu, Clock, ArrowRight, MessageSquare, Layers, Globe,
  BookOpen
} from 'lucide-react'

// --- SAAS EASING CURVE ---
const easeSaaS = [0.16, 1, 0.3, 1] as const

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
    <div className="border border-gray-200/50 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0A0A0A] cursor-pointer hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 transition-colors font-sans group"
      >
        <span className="tracking-tight">{question}</span>
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
            <div className="px-6 pb-6 text-sm md:text-[15px] text-[#6B7280] font-medium leading-relaxed border-t border-gray-100/80 pt-4">
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
      
      <div className="relative overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-500/30 selection:text-blue-900" ref={containerRef}>
        
        {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
        <div className="absolute top-0 left-0 right-0 h-[120vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[20%] left-[-10%] w-[30%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-6 pt-24 sm:pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">
          
          {/* Animated 3D-like Rings */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.02, 1] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="w-[80vw] h-[80vw] max-w-[700px] max-h-[700px] border-[1.5px] border-blue-200/50 rounded-full absolute shadow-[0_0_50px_rgba(37,99,235,0.1)]"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.05, 1] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              className="w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] border border-blue-300/40 rounded-full absolute border-dashed shadow-[inset_0_0_40px_rgba(37,99,235,0.05)]"
            />
            <div className="w-[40vw] h-[40vw] max-w-[300px] max-h-[300px] bg-gradient-to-tr from-blue-500/5 to-cyan-400/5 rounded-full absolute blur-3xl" />
          </div>

          <div className="max-w-[1100px] mx-auto text-center relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-8 transform-gpu">
                <Sparkles size={16} className="text-[#2563EB]" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">The Engineering Studio</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-[80px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8 text-[#0A0A0A] font-sans">
                Engineering Modern Digital Products for <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#2563EB] to-cyan-500">Ambitious Businesses Worldwide.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-[1.6] font-medium tracking-tight">
                ProstoLabs is an independent technology studio. We pair clean software engineering with functional UI/UX design to build fast, scalable web platforms, AI tools, and digital products that drive long-term business performance.
              </p>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. REALISTIC TRUST METRICS */}
        {/* ========================================================================= */}
        <section className="py-12 px-6 relative z-20 -mt-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white/60 backdrop-blur-xl border border-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-200/50">
                {[
                  { value: "Custom", label: "Digital Products" },
                  { value: "AI-Powered", label: "Workflow Solutions" },
                  { value: "Modern", label: "Technology Stack" },
                  { value: "Global", label: "Client Collaboration" },
                ].map((stat, idx) => (
                  <AnimatedSection key={idx} delay={idx * 0.05} className="px-4 hover:scale-105 transition-transform duration-500">
                    <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-700 to-blue-500 tracking-tight font-sans mb-1">{stat.value}</p>
                    <p className="text-[11px] sm:text-xs font-bold text-[#6B7280] mt-2 uppercase tracking-widest">{stat.label}</p>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. WHO WE ARE */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Who We Are
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                A dedicated engineering team focused on technical craft, speed, and business outcomes.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
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
                  <div className="group relative p-8 md:p-10 rounded-[32px] bg-white/70 backdrop-blur-xl border border-gray-200/80 h-full hover:shadow-[0_20px_40px_rgba(37,99,235,0.06)] hover:border-[#2563EB]/30 transition-all duration-500 flex flex-col justify-between overflow-hidden">
                    {/* Hover Glow Blob */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 group-hover:bg-blue-500/10 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#0A0A0A] mb-4 font-sans tracking-tight">{item.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{item.desc}</p>
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
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                The ProstoLabs Difference
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Why Businesses Choose <span className="text-[#2563EB]">ProstoLabs</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-[32px] bg-white border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/30 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div className="space-y-5">
                      <div className="w-14 h-14 rounded-[20px] bg-gray-50 border border-gray-100 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                        <item.icon size={26} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-xl md:text-2xl text-[#0A0A0A] font-sans tracking-tight">{item.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{item.text}</p>
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
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* OUR MISSION */}
            <AnimatedSection>
              <div className="relative p-10 sm:p-14 rounded-[40px] bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white h-full flex flex-col justify-between shadow-[0_20px_50px_rgba(37,99,235,0.2)] overflow-hidden">
                {/* Decorative Mesh Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)] pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest mb-8 border border-white/20">
                    <Target size={14} />
                    <span>Our Mission</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-6 font-sans leading-[1.15]">
                    Building reliable technology that helps businesses grow.
                  </h2>
                  <p className="text-[15px] sm:text-[17px] text-blue-100/90 leading-relaxed font-medium">
                    We help companies launch fast, secure, and user-friendly web products that increase lead generation, streamline operational workflows, and deliver lasting brand equity.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* OUR VISION */}
            <AnimatedSection delay={0.15}>
              <div className="relative p-10 sm:p-14 rounded-[40px] bg-white/70 backdrop-blur-xl border border-gray-200/80 text-[#0A0A0A] h-full flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-8">
                    <Activity size={14} />
                    <span>Our Vision</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] mb-6 font-sans text-[#0A0A0A] leading-[1.15]">
                    Creating a simpler, smarter digital future.
                  </h2>
                  <p className="text-[15px] sm:text-[17px] text-[#6B7280] leading-relaxed font-medium">
                    Our goal is to be a trusted global partner for ambitious companies, delivering clean software platforms and smart AI integrations that produce measurable real-world impact.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. OUR JOURNEY */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1000px] mx-auto">
            
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Our Journey
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                How we evolved into an independent web engineering and AI product studio.
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Animated Vertical Line */}
              <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-200 to-transparent -translate-x-1/2" />

              {[
                { label: 'Founding', title: 'Establishing ProstoLabs', desc: 'ProstoLabs was established with a focus on pairing clean software architecture with conversion-driven UI/UX design.' },
                { label: 'First Products', title: 'Building Core Web Platforms', desc: 'Engineered custom software applications and web portals for early client partners, setting our baseline for performance.' },
                { label: 'Flagship Product', title: 'Building FlySava', desc: 'Designed and deployed FlySava, a custom aviation web platform featuring automated booking workflows and real-time scheduling.' },
                { label: 'AI Expansion', title: 'Integrating AI & Automations', desc: 'Expanded our capabilities to include custom AI knowledge assistants, automated lead routers, and operational webhooks.' },
                { label: 'Global Collaboration', title: 'Growing Client Partnerships', desc: 'Partnering with businesses internationally as a reliable long-term engineering, design, and cloud support team.' },
              ].map((item, i) => (
                <AnimatedSection 
                  key={i} 
                  delay={i * 0.1} 
                  className={`relative flex items-center justify-between mb-16 md:mb-20 group ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-[19px] md:left-1/2 w-5 h-5 rounded-full bg-white border-[4px] border-blue-100 group-hover:border-[#2563EB] -translate-x-1/2 shadow-sm z-10 transition-colors duration-300">
                    <div className="absolute inset-0 bg-[#2563EB] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </div>
                  
                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block w-5/12" />
                  
                  {/* Timeline Card */}
                  <div className="w-full pl-14 md:pl-0 md:w-5/12">
                    <div className="p-8 rounded-[28px] bg-white/60 backdrop-blur-md border border-gray-200/80 hover:border-[#2563EB]/40 transition-all duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.06)] group-hover:-translate-y-1">
                      <span className="text-[11px] font-bold text-[#2563EB] uppercase tracking-widest mb-3 block font-sans">{item.label}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-3 font-sans tracking-tight">{item.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. TEAM PHILOSOPHY: HOW WE THINK */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1100px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest mb-6">
                Our Philosophy
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] font-sans leading-[1.1]">
                How We Think
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="relative p-10 sm:p-16 rounded-[40px] bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-4xl mx-auto overflow-hidden">
                {/* Decorative Quote Mark Watermark */}
                <div className="absolute top-4 left-6 text-[180px] leading-none text-blue-50/50 font-serif font-black select-none pointer-events-none">
                  "
                </div>
                
                <div className="relative z-10 space-y-8">
                  <p className="text-lg md:text-xl text-[#374151] leading-[1.7] font-medium">
                    At ProstoLabs, we believe that modern software should be simple to use, fast to render, and straightforward to maintain. We resist unnecessary code bloat and complex technical layers that add cost without improving customer experience.
                  </p>
                  <p className="text-lg md:text-xl text-[#374151] leading-[1.7] font-medium">
                    Great engineering is invisible. When a web application loads in milliseconds and guides a client naturally through a purchase or booking path, software becomes a powerful catalyst for commercial growth.
                  </p>
                  <p className="text-lg md:text-xl text-[#374151] leading-[1.7] font-medium">
                    We approach every project not as a one-time transaction, but as a long-term partnership. We succeed when our clients launch fast, eliminate operational friction, and scale confidently.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 8. OUR CORE VALUES */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                Our Culture
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Our Guiding Principles
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-[32px] bg-[#FAFAFA] border border-gray-200/60 h-full hover:bg-white hover:shadow-[0_15px_30px_rgba(0,0,0,0.05)] hover:border-gray-200 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-6 h-6 text-[#2563EB]" strokeWidth={2} />
                    </div>
                    <h3 className="font-bold text-xl text-[#0A0A0A] mb-3 font-sans tracking-tight">{val.title}</h3>
                    <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{val.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 9. CONTINUE EXPLORING */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans mb-3">
                Explore ProstoLabs
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-[-0.02em] font-sans">
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
                <AnimatedSection key={cIdx} delay={cIdx * 0.1}>
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

                    <div className="pt-6 mt-8 border-t border-gray-200/60 flex items-center gap-2 text-sm font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">
                      <span>{card.cta}</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
        {/* 11. FEATURED RESOURCES STREAM */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50 bg-white">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                  From Our Journal
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A0A0A] tracking-[-0.03em] font-sans leading-tight">
                  Featured Resources
                </h2>
              </div>
              <Link to="/resources" className="shrink-0" aria-label="View all publication resources">
                <button className="rounded-full px-8 h-12 border border-gray-300 text-[#0A0A0A] hover:bg-gray-50 hover:border-gray-400 font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2">
                  <span>View All Resources</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.15}>
                  <Link
                    to={`/resources/${art.slug}`}
                    aria-label={`Read resource: ${art.title}`}
                    className="group flex flex-col h-full overflow-hidden cursor-pointer rounded-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative rounded-[32px] mb-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <img 
                        src={art.thumbnail} 
                        alt={art.title} 
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-bold text-[#0A0A0A] shadow-sm">
                          {art.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col flex-grow px-2">
                      <div className="flex items-center gap-3 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                        <span>{art.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1.5"><Clock size={12} /> {art.readingTime}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors leading-[1.3] mb-4 tracking-tight">
                        {art.title}
                      </h3>
                      <p className="text-[15px] text-[#6B7280] font-medium leading-relaxed line-clamp-3 mb-6">
                        {art.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-2 text-sm font-bold text-[#2563EB] group-hover:gap-3 transition-all">
                        <span>Read Story</span>
                        <ArrowRight size={16} />
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
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[40px] overflow-hidden bg-[#0A0A0A] text-white text-center py-20 md:py-28 px-6 sm:px-12 shadow-2xl">
              {/* Premium Gradient Overlays */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.4)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] font-sans leading-[1.1]">
                  Ready to build your digital product <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">with confidence?</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  Partner with ProstoLabs to engineer high-speed web apps, custom software, or AI automations. Receive a clear, transparent project proposal today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Link to="/start-project" aria-label="Start your digital project with ProstoLabs">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full sm:w-auto h-14 px-8 bg-white text-[#0A0A0A] rounded-full font-bold text-base shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all cursor-pointer overflow-hidden flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link to="/contact" aria-label="Talk to the ProstoLabs engineering team">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto h-14 px-8 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base border border-white/20 hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
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