import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { resources } from '../data/resourcesData'
import { 
  Mail, Sparkles, MessageSquare, ShieldCheck, Instagram, Briefcase, 
  ArrowRight, ArrowUpRight, ChevronDown, Zap, Clock, 
  Target, Layers, Cpu, Heart, BookOpen, Code, Globe, CheckCircle2
} from 'lucide-react'

// FAQ Data for Component & Schema Injection
const faqData = [
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We review every project request promptly and guarantee a detailed response from our technical team within 24 business hours."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. ProstoLabs operates as a remote-first studio, partnering with ambitious companies, SaaS founders, and clinics globally across multiple time zones."
  },
  {
    question: "Can you redesign or modernize our existing website or software?",
    answer: "Absolutely. We frequently help companies upgrade outdated legacy sites, improve mobile rendering speed, refactor codebases to modern React/Next.js frameworks, and optimize user conversion funnels."
  },
  {
    question: "Can I request UI/UX design services only?",
    answer: "Yes. We offer standalone UI/UX design, interactive visual prototyping, and complete design system engineering for web and mobile products."
  },
  {
    question: "How do projects begin?",
    answer: "After an initial discovery conversation and requirements review, we provide a transparent, fixed-scope proposal. Once approved, we establish project channels and schedule kickoff immediately."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200/80 rounded-2xl bg-white shadow-2xs hover:border-slate-300 transition-colors overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 cursor-pointer hover:text-blue-600 transition-colors group"
      >
        <span className="tracking-tight pr-4">{question}</span>
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

export const Contact: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('submitted') === 'true') {
      setIsSubmitted(true)
      navigate(location.pathname, { replace: true })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location, navigate])

  const latestArticles = [...resources]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

  return (
    <>
      <SEO 
        title="Contact ProstoLabs | Talk With Our Engineering Team"
        description="Get in touch with ProstoLabs to discuss custom web application development, AI integrations, UI/UX design, or ongoing product maintenance."
        path="/contact"
        faq={faqData}
      />
      
      <div className="relative w-full overflow-x-clip bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-600">
        
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
        {/* 1. HERO & FORM SECTION */}
        {/* ========================================================================= */}
        <section className="relative px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28">
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative z-10">
            
            {/* Left Column: Contact Channels */}
            <div className="lg:col-span-6 space-y-8">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-blue-600 mb-4">
                  <Sparkles size={14} className="text-blue-600" />
                  <span>Start a Conversation</span>
                </div>

                <h1 className="text-[36px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950 mb-4">
                  Talk With the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                    ProstoLabs Team.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-lg leading-relaxed font-normal">
                  Have a web development project in mind, an AI automation requirement, or a partnership proposal? Share your goals with us and receive a tailored response within 24 hours.
                </p>
              </AnimatedSection>
              
              {/* Contact Cards */}
              <AnimatedSection delay={0.08}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  
                  {/* Card 1: General Email */}
                  <a 
                    href="mailto:hello@prostolabs.com"
                    aria-label="Send email to hello@prostolabs.com"
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                        <Mail size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-950 tracking-tight">General Email</h3>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Quick questions & notes</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span className="truncate">hello@prostolabs.com</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                  </a>

                  {/* Card 2: Business Inquiries */}
                  <a 
                    href="mailto:biz@prostolabs.com"
                    aria-label="Send email for business inquiries to biz@prostolabs.com"
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                        <Briefcase size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-950 tracking-tight">Business Inquiries</h3>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Partnerships & retainers</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span className="truncate">biz@prostolabs.com</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                  </a>

                  {/* Card 3: Project Planner */}
                  <Link 
                    to="/start-project"
                    aria-label="Navigate to project intake planner"
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                        <Zap size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-950 tracking-tight">Start a Project</h3>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Guided scope planner</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>Project Planner</span>
                      <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform shrink-0" />
                    </div>
                  </Link>

                  {/* Card 4: Instagram */}
                  <a 
                    href="https://instagram.com/prostolabs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit ProstoLabs on Instagram"
                    className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                        <Instagram size={18} strokeWidth={1.75} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-slate-950 tracking-tight">Instagram</h3>
                        <p className="text-xs text-slate-500 font-normal mt-0.5">Design & culture updates</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                      <span>@prostolabs</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                  </a>

                </div>
              </AnimatedSection>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-6">
              <AnimatedSection delay={0.12}>
                {isSubmitted ? (
                  <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs text-center space-y-5">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-2xs">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight">Message Sent!</h3>
                    <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto font-normal">
                      Thank you for reaching out to ProstoLabs. Our engineering team will review your inquiry and get back to you within 24 business hours.
                    </p>
                    <button 
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <span>Send another message</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                ) : (
                  <form 
                    action="https://formsubmit.co/hello@prostolabs.com" 
                    method="POST"
                    className="space-y-5 p-6 sm:p-9 bg-white rounded-3xl border border-slate-200/90 shadow-xs"
                  >
                    <input type="hidden" name="_subject" value="New General Inquiry - ProstoLabs" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/contact?submitted=true` : ''} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-name" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                          Your Name <span className="text-red-500">*</span>
                        </label>
                        <input 
                          id="contact-name"
                          type="text" 
                          name="Name" 
                          required 
                          autoComplete="name"
                          placeholder="John Doe" 
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="contact-email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input 
                          id="contact-email"
                          type="email" 
                          name="Email Address" 
                          required 
                          autoComplete="email"
                          placeholder="john@company.com" 
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-service" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          name="Service Interested In"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer appearance-none shadow-2xs"
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="AI Automation">AI Automation</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="SEO">SEO & Growth</option>
                          <option value="Maintenance">Website Maintenance</option>
                          <option value="Other">Other Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Budget */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-budget" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          id="contact-budget"
                          name="Estimated Budget"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer appearance-none shadow-2xs"
                        >
                          <option value="Not Sure">Not Sure Yet</option>
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000–5,000">$1,000 – $5,000</option>
                          <option value="$5,000–10,000">$5,000 – $10,000</option>
                          <option value="$10,000+">$10,000+</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-message" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea 
                        id="contact-message"
                        name="Message" 
                        required 
                        rows={4} 
                        placeholder="Tell us about your project goals or questions..." 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all resize-none shadow-2xs" 
                      />
                    </div>

                    {/* Submit */}
                    <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-slate-500 font-normal">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Zero spam guaranteed.</span>
                      </div>
                      <button 
                        type="submit" 
                        className="w-full sm:w-auto h-12 px-7 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <MessageSquare size={15} />
                        <span>Send Message</span>
                        <ArrowRight size={15} />
                      </button>
                    </div>
                  </form>
                )}
              </AnimatedSection>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WHAT HAPPENS NEXT */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                What Happens Next
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Our simple, transparent process from inquiry to kickoff.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Share Your Project', desc: 'Send us your project scope, goals, and technical requirements.' },
                { step: '02', title: 'We Review Requirements', desc: 'Our lead engineers analyze your needs and map out functional solutions.' },
                { step: '03', title: 'Tailored Proposal', desc: 'Receive a clear proposal covering architecture, scope, and timeline.' },
                { step: '04', title: 'Project Kickoff', desc: 'Establish direct communication channels and begin engineering.' }
              ].map((phase, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-colors h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 block mb-3">{phase.step}</span>
                      <h3 className="text-lg font-bold text-slate-950 mb-2 tracking-tight">{phase.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{phase.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. WHY WORK WITH US */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                The Partnership Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Why Work With Us
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                We handle design, engineering, and infrastructure so you can focus on core business growth.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct, open access to lead developers and designers throughout your project.' },
                { icon: Target, title: 'Business-Focused Strategy', text: 'Every feature is built to solve operational friction and maximize customer conversion.' },
                { icon: Cpu, title: 'Modern Technology', text: 'Hand-crafted React, Next.js, and TypeScript architectures engineered for extreme speed.' },
                { icon: Clock, title: 'Fast Response', text: 'Guaranteed 24-hour response times during discovery and ongoing development.' },
                { icon: Heart, title: 'Long-Term Partnership', text: 'Continuous technical care, cloud maintenance, and feature enhancements post-launch.' },
                { icon: Layers, title: 'Scalable Solutions', text: 'Software structures built from day one to support growing user traffic effortlessly.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 shadow-2xs">
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
        {/* 4. FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[840px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Everything you need to know about initiating a project with ProstoLabs.
              </p>
            </AnimatedSection>

            <div className="space-y-3.5">
              {faqData.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.03}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CONTINUE EXPLORING */}
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  title: 'Core Services',
                  desc: 'Explore custom web development, AI automations, and ongoing maintenance.',
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
                  title: 'Our Products',
                  desc: 'Discover FlySava, our flagship luxury aviation web platform.',
                  link: '/flysava',
                  cta: 'Explore FlySava',
                  icon: Globe
                }
              ].map((card, cIdx) => (
                <AnimatedSection key={cIdx} delay={cIdx * 0.04}>
                  <Link
                    to={card.link}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between h-full group cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-2xs">
                        <card.icon size={18} strokeWidth={1.75} />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center gap-1 text-xs font-bold text-blue-600">
                      <span>{card.cta}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. LATEST RESOURCES */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">From Our Journal</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                  Featured Resources
                </h2>
              </div>
              <Link to="/resources" className="shrink-0">
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
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200/90 p-5 hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-slate-100 relative rounded-xl mb-4">
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
        {/* 7. FINAL CTA */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-950 text-white text-center">
          <div className="max-w-[760px] mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to Build Something <br className="hidden sm:block" /> <span className="text-blue-400">Exceptional?</span>
            </h2>
            <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed font-normal">
              Partner with ProstoLabs to design and deploy custom web software, AI tools, or scalable digital platforms. Receive a clear, transparent proposal today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link to="/start-project" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-7 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/resources" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-7 bg-white/10 hover:bg-white/15 text-white rounded-full font-semibold text-sm sm:text-base border border-white/15 transition-all cursor-pointer flex items-center justify-center">
                  Explore Our Resources
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}