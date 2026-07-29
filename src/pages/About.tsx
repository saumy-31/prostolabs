import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { 
  Code, Palette, Lightbulb, Briefcase, Layers, Zap, Handshake, 
  MessageSquare, Cloud, Layout, Bot, MonitorSmartphone, Server, 
  FileType2, Target, Activity, ShieldCheck, ArrowRight, Sparkles,
  ChevronDown, CheckCircle2
} from 'lucide-react'

// --- FAQ ACCORDION ITEM COMPONENT ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200/80 rounded-2xl bg-white overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0A0A0A] cursor-pointer hover:text-[#2563EB] transition-colors"
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

  return (
    <>
      <SEO 
        title="About ProstoLabs | Web Development, AI & Digital Products"
        description="Learn about ProstoLabs—our mission, values, journey, and commitment to building fast, high-quality digital products for growing businesses."
        path="/about"
      />
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900" ref={containerRef}>
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
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
                <span>About ProstoLabs</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                We build digital products that <br className="hidden sm:block" />
                <span className="text-[#2563EB]">grow your business.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-medium">
                ProstoLabs is a team of designers, engineers, and problem solvers. We help companies design, code, and launch custom web applications, mobile software, and AI tools.
              </p>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. IMPACT METRICS BAR */}
        {/* ========================================================================= */}
        <section className="py-12 px-6 bg-white border-y border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "100%", label: "Client Satisfaction" },
                { value: "< 1s", label: "Average Load Speed" },
                { value: "99.9%", label: "Guaranteed Uptime" },
                { value: "24/7", label: "Monitoring & Care" },
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
        {/* 3. WHO WE ARE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Who We Are
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                A dedicated engineering studio focused on clean execution and real results.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Code, 
                  title: "Engineering Excellence", 
                  desc: "We write clean, modular, and performant code. Our software architectures are built to run fast and scale seamlessly." 
                },
                { 
                  icon: Palette, 
                  title: "Thoughtful Design", 
                  desc: "Design is about usability. We create visual interfaces that guide users naturally, build trust, and increase conversions." 
                },
                { 
                  icon: Lightbulb, 
                  title: "Smart Automation", 
                  desc: "We integrate practical AI tools and smart workflows that save time, eliminate manual work, and improve efficiency." 
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
        {/* 4. MISSION & VISION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
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
                    We help companies launch fast, secure, and user-friendly web products that increase lead generation, streamline operations, and deliver long-term value.
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
                    Our goal is to be a trusted global partner for growing companies, delivering exceptional web technology and AI solutions that bring real, measurable impact.
                  </p>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. OUR JOURNEY (TIMELINE) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1000px] mx-auto">
            
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Our Journey
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                How we evolved into a full-service web development and AI studio.
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Vertical Center Line */}
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 -translate-x-1/2" />

              {[
                { year: 'Phase I', title: 'The Launch', desc: 'ProstoLabs was founded to connect modern UI design with scalable web software.' },
                { year: 'Phase II', title: 'First Core Products', desc: 'Successfully engineered custom platforms for early clients, setting our standard for performance.' },
                { year: 'Phase III', title: 'Expanding the Team', desc: 'Added specialists in React, mobile applications, cloud infrastructure, and AI workflow automation.' },
                { year: 'Phase IV', title: 'AI & Automation', desc: 'Integrated AI capabilities directly into web apps and customer support systems.' },
                { year: 'Phase V', title: 'Global Operations', desc: 'Partnering with businesses worldwide as their primary software design and development engine.' },
              ].map((item, i) => (
                <AnimatedSection 
                  key={i} 
                  delay={i * 0.08} 
                  className={`relative flex items-center justify-between mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-[#2563EB] -translate-x-1/2 outline outline-4 outline-[#FAFAFA] shadow-md z-10" />
                  
                  {/* Spacer for desktop layout balance */}
                  <div className="hidden md:block w-5/12" />
                  
                  {/* Timeline Card */}
                  <div className="w-full pl-12 md:pl-0 md:w-5/12">
                    <div className="p-6 rounded-[20px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 transition-colors shadow-sm">
                      <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider mb-1 block">{item.year}</span>
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
        {/* 6. HOW WE BUILD (PROCESS) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                How We Build
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                A simple 6-step approach to launching your product on time.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {[
                { step: '01', title: 'Discover', desc: 'Understanding your business requirements.' },
                { step: '02', title: 'Plan', desc: 'Mapping user flows and software layout.' },
                { step: '03', title: 'Design', desc: 'Crafting clean UI wireframes and screens.' },
                { step: '04', title: 'Code', desc: 'Writing fast, secure, and modular code.' },
                { step: '05', title: 'Launch', desc: 'Testing and zero-downtime deployment.' },
                { step: '06', title: 'Support', desc: 'Ongoing updates and feature maintenance.' },
              ].map((process, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-5 rounded-[20px] bg-[#FAFAFA] border border-gray-200/80 h-full flex flex-col justify-between hover:border-[#2563EB]/40 transition-colors">
                    <span className="text-xs font-bold text-[#2563EB] mb-3 block">{process.step}</span>
                    <div>
                      <h4 className="font-bold text-sm text-[#0A0A0A] mb-1 font-sans">{process.title}</h4>
                      <p className="text-xs text-[#6B7280] font-medium leading-relaxed">{process.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. OUR CORE VALUES */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
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
                { title: "No Corporate Jargon", desc: "We speak plainly and explain complex technical details in simple language." },
                { title: "Transparent Pricing", desc: "Clear scopes, fixed timelines, and no unexpected invoice surprises." },
                { title: "Security by Default", desc: "SSL encryption, API authentication, and data protection baked into every product." },
                { title: "Speed & Reliability", desc: "Every line of code is optimized so your software loads fast on all screens." }
              ].map((val, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-[24px] bg-white border border-gray-200/80 h-full shadow-sm">
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
        {/* 8. FAQ ACCORDION */}
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
              {[
                { 
                  q: "What types of products do you build?", 
                  a: "We design and develop custom websites, complex web applications, cross-platform mobile apps, and custom AI tools tailored to your operational workflows." 
                },
                { 
                  q: "How long does a typical project take?", 
                  a: "Project timelines vary by scope. Standard websites and landing pages take 2 to 4 weeks, while complex web portals and software apps take 6 to 12 weeks." 
                },
                { 
                  q: "Do you provide maintenance after launch?", 
                  a: "Yes! We offer ongoing product care packages that cover security updates, 24/7 server monitoring, speed optimization, and feature updates." 
                },
                { 
                  q: "How do we communicate during development?", 
                  a: "You will have direct access to your lead developers and designers via Slack/WhatsApp, along with weekly video updates and live preview staging links." 
                }
              ].map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05}>
                  <FAQItem question={faq.q} answer={faq.a} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 9. FINAL CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Let's build something great together.
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                  Whether you need a custom web app, mobile software, or an AI integration, our team is ready to deliver.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3.5 pt-2">
                  <Link to="/start-project">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto h-12 px-7 bg-white text-[#2563EB] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-50 transition-colors cursor-pointer"
                    >
                      Start Your Project
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto h-12 px-7 bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      Contact Us
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