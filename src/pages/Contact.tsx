import { useState, useEffect } from 'react'
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

// --- SAAS EASING CURVE ---
const easeSaaS = [0.16, 1, 0.3, 1] as const

// --- FAQ DATA FOR COMPONENT & AUTOMATIC SCHEMA GENERATION ---
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

export const Contact = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Check URL parameters for successful form submission
  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('submitted') === 'true') {
      setIsSubmitted(true)
      // Clean up the URL
      navigate(location.pathname, { replace: true })
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location, navigate])

  // Sort resources by date (newest first) and grab the top 3
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
      
      <div className="relative overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-500/30 selection:text-blue-900">
        
        {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
        <div className="absolute top-0 left-0 right-0 h-[120vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[15%] right-[-5%] w-[35%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />

        {/* ========================================================================= */}
        {/* 1. HERO & FORM SECTION */}
        {/* ========================================================================= */}
        <div className="max-w-[1300px] mx-auto px-6 pt-24 sm:pt-32 md:pt-40 pb-20 md:pb-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: HERO TEXT & CONTACT CARDS */}
            <div className="lg:col-span-6 space-y-10">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-8 transform-gpu">
                  <Sparkles size={16} className="text-[#2563EB]" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Start a Conversation</span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 text-[#0A0A0A] font-sans">
                  Talk With the <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#2563EB] to-cyan-500">ProstoLabs Team.</span>
                </h1>

                <p className="text-lg sm:text-xl text-[#6B7280] mb-10 max-w-lg font-medium leading-[1.6] tracking-tight">
                  Have a web development project in mind, an AI automation requirement, or a partnership proposal? Share your goals with us and receive a tailored response within 24 hours.
                </p>
              </AnimatedSection>
              
              {/* 4 PREMIUM CONTACT CARDS */}
              <AnimatedSection delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Card 1: Email */}
                  <a 
                    href="mailto:hello@prostolabs.com"
                    aria-label="Send email to hello@prostolabs.com"
                    className="group p-6 rounded-[28px] bg-white/60 backdrop-blur-xl border border-gray-200/80 hover:border-[#2563EB]/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="space-y-4 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Mail size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[17px] text-[#0A0A0A] font-sans tracking-tight">General Email</h3>
                        <p className="text-[13px] text-[#6B7280] font-medium mt-1">Quick questions & notes</p>
                      </div>
                    </div>
                    <div className="pt-5 mt-4 border-t border-gray-200/60 flex items-center justify-between text-[13px] font-bold text-[#2563EB] relative z-10">
                      <span className="truncate">hello@prostolabs.com</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                    </div>
                  </a>

                  {/* Card 2: Business Inquiries */}
                  <a 
                    href="mailto:biz@prostolabs.com"
                    aria-label="Send email for business inquiries to biz@prostolabs.com"
                    className="group p-6 rounded-[28px] bg-white/60 backdrop-blur-xl border border-gray-200/80 hover:border-[#2563EB]/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="space-y-4 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Briefcase size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[17px] text-[#0A0A0A] font-sans tracking-tight">Business Inquiries</h3>
                        <p className="text-[13px] text-[#6B7280] font-medium mt-1">Partnerships & retainers</p>
                      </div>
                    </div>
                    <div className="pt-5 mt-4 border-t border-gray-200/60 flex items-center justify-between text-[13px] font-bold text-[#2563EB] relative z-10">
                      <span className="truncate">biz@prostolabs.com</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                    </div>
                  </a>

                  {/* Card 3: Start a Project */}
                  <Link 
                    to="/start-project"
                    aria-label="Navigate to project intake planner"
                    className="group p-6 rounded-[28px] bg-white/60 backdrop-blur-xl border border-gray-200/80 hover:border-[#2563EB]/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="space-y-4 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[17px] text-[#0A0A0A] font-sans tracking-tight">Start a Project</h3>
                        <p className="text-[13px] text-[#6B7280] font-medium mt-1">Guided project planner</p>
                      </div>
                    </div>
                    <div className="pt-5 mt-4 border-t border-gray-200/60 flex items-center justify-between text-[13px] font-bold text-[#2563EB] relative z-10">
                      <span>Project Planner</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  </Link>

                  {/* Card 4: Instagram */}
                  <a 
                    href="https://instagram.com/prostolabs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit ProstoLabs on Instagram"
                    className="group p-6 rounded-[28px] bg-white/60 backdrop-blur-xl border border-gray-200/80 hover:border-[#2563EB]/40 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_30px_rgba(37,99,235,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />
                    <div className="space-y-4 relative z-10">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Instagram size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-[17px] text-[#0A0A0A] font-sans tracking-tight">Instagram</h3>
                        <p className="text-[13px] text-[#6B7280] font-medium mt-1">Design & culture updates</p>
                      </div>
                    </div>
                    <div className="pt-5 mt-4 border-t border-gray-200/60 flex items-center justify-between text-[13px] font-bold text-[#2563EB] relative z-10">
                      <span>@prostolabs</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform shrink-0" />
                    </div>
                  </a>

                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN: ACCESSIBLE CONTACT FORM */}
            <div className="lg:col-span-6">
              <AnimatedSection delay={0.15}>
                {isSubmitted ? (
                  /* SUCCESS STATE */
                  <div className="bg-white/70 backdrop-blur-xl rounded-[40px] p-10 sm:p-14 border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center space-y-6">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-emerald-100 shadow-sm">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#0A0A0A] font-sans tracking-tight">Message Sent!</h3>
                    <p className="text-base text-[#6B7280] font-medium leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out to ProstoLabs. Our engineering team will review your inquiry and get back to you within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2563EB] hover:text-blue-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  /* PREMIUM FORM */
                  <form 
                    action="https://formsubmit.co/hello@prostolabs.com" 
                    method="POST"
                    className="space-y-6 p-8 sm:p-12 bg-white/70 backdrop-blur-xl rounded-[40px] border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500"
                  >
                    {/* FormSubmit Configuration Fields */}
                    <input type="hidden" name="_subject" value="New General Inquiry - ProstoLabs" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/contact?submitted=true` : ''} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name Input */}
                      <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                          Your Name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input 
                          id="contact-name"
                          type="text" 
                          name="Name" 
                          required 
                          autoComplete="name"
                          aria-label="Your Name"
                          placeholder="John Doe" 
                          className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                        />
                      </div>

                      {/* Email Input */}
                      <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                          Email Address <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input 
                          id="contact-email"
                          type="email" 
                          name="Email Address" 
                          required 
                          autoComplete="email"
                          aria-label="Email Address"
                          placeholder="john@company.com" 
                          className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                        />
                      </div>
                    </div>

                    {/* Service Interested In Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="contact-service" className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                        Service Interested In
                      </label>
                      <div className="relative">
                        <select
                          id="contact-service"
                          name="Service Interested In"
                          aria-label="Service Interested In"
                          className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer appearance-none shadow-sm"
                        >
                          <option value="Web Development">Web Development</option>
                          <option value="AI Automation">AI Automation</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="SEO">SEO & Growth</option>
                          <option value="Maintenance">Website Maintenance</option>
                          <option value="Other">Other Inquiry</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Estimated Budget Dropdown */}
                    <div className="space-y-2">
                      <label htmlFor="contact-budget" className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          id="contact-budget"
                          name="Estimated Budget"
                          aria-label="Estimated Budget"
                          className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer appearance-none shadow-sm"
                        >
                          <option value="Not Sure">Not Sure Yet</option>
                          <option value="Under $1,000">Under $1,000</option>
                          <option value="$1,000–5,000">$1,000 – $5,000</option>
                          <option value="$5,000–10,000">$5,000 – $10,000</option>
                          <option value="$10,000+">$10,000+</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                        Message <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <textarea 
                        id="contact-message"
                        name="Message" 
                        required 
                        rows={4} 
                        aria-label="Message details"
                        placeholder="Tell us about your project goals or questions..." 
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all resize-none shadow-sm" 
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-2.5 text-[13px] text-[#6B7280] font-medium bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Zero spam guaranteed.</span>
                      </div>
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit" 
                        aria-label="Send message to ProstoLabs"
                        className="w-full sm:w-auto h-14 px-8 bg-[#0A0A0A] text-white rounded-full font-bold text-sm shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 group/btn"
                      >
                        <MessageSquare size={16} />
                        <span>Send Message</span>
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform ml-1 hidden sm:block" />
                      </motion.button>
                    </div>
                  </form>
                )}
              </AnimatedSection>
            </div>

          </div>
        </div>


        {/* ========================================================================= */}
        {/* 2. WHAT HAPPENS NEXT (DARK TIMELINE) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15)_0%,_transparent_60%)] pointer-events-none" />
          
          <div className="max-w-[1300px] mx-auto relative z-10">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                What Happens Next
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-medium">
                Our simple, transparent process from inquiry to kickoff.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {/* Desktop Horizontal Line */}
              <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-0" />

              {[
                { step: '01', title: 'Share Your Project', desc: 'Send us your project scope, goals, and technical requirements.' },
                { step: '02', title: 'We Review Requirements', desc: 'Our lead engineers analyze your needs and map out functional solutions.' },
                { step: '03', title: 'Tailored Proposal', desc: 'Receive a clear proposal covering architecture, scope, and timeline.' },
                { step: '04', title: 'Project Kickoff', desc: 'Establish direct communication channels and begin engineering.' }
              ].map((phase, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="relative z-10 group">
                  <div className="p-8 sm:p-10 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between hover:bg-white/10">
                    <div>
                      <div className="w-16 h-16 rounded-full bg-[#0A0A0A] border-2 border-gray-800 group-hover:border-blue-500 flex items-center justify-center text-xl font-bold text-gray-400 group-hover:text-blue-400 mb-8 transition-colors duration-500 shadow-[0_0_20px_rgba(0,0,0,0.5)] mx-auto lg:mx-0 relative">
                        {phase.step}
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      <h3 className="font-bold text-xl md:text-2xl text-white mb-3 font-sans tracking-tight text-center lg:text-left">{phase.title}</h3>
                      <p className="text-[15px] text-gray-400 leading-relaxed font-medium text-center lg:text-left">{phase.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. WHY WORK WITH US (BENTO GRID) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-white border-b border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                The Partnership Advantage
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Why Work With Us
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                We handle design, engineering, and infrastructure so you can focus on core business growth.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct, open access to lead developers and designers throughout your project.' },
                { icon: Target, title: 'Business-Focused Strategy', text: 'Every feature is built to solve operational friction and maximize customer conversion.' },
                { icon: Cpu, title: 'Modern Technology', text: 'Hand-crafted React, Next.js, and TypeScript architectures engineered for extreme speed.' },
                { icon: Clock, title: 'Fast Response', text: 'Guaranteed 24-hour response times during discovery and ongoing development.' },
                { icon: Heart, title: 'Long-Term Partnership', text: 'Continuous technical care, cloud maintenance, and feature enhancements post-launch.' },
                { icon: Layers, title: 'Scalable Solutions', text: 'Software structures built from day one to support growing user traffic effortlessly.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="group relative p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/30 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 group-hover:bg-blue-500/10 transition-all duration-500" />
                    <div className="relative z-10 space-y-5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
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
        {/* 4. FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-[#FAFAFA]">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Frequently Asked Questions
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Everything you need to know about initiating a project with ProstoLabs.
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
        {/* 5. CONTINUE EXPLORING */}
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
        {/* 6. FEATURED RESOURCES STREAM */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-[#FAFAFA] border-t border-gray-200/50">
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
              <Link to="/resources" aria-label="View all publication resources" className="shrink-0">
                <button 
                  type="button"
                  className="rounded-full px-8 h-12 border border-gray-300 text-[#0A0A0A] hover:bg-white hover:border-gray-400 font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  <span>View All Resources</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.1}>
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
        {/* 7. FINAL CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[40px] overflow-hidden bg-[#0A0A0A] text-white text-center py-20 md:py-28 px-6 sm:px-12 shadow-2xl">
              {/* Premium Gradient Overlays */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.4)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] font-sans leading-[1.1]">
                  Ready to Build Something <br className="hidden sm:block" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Exceptional?</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  Partner with ProstoLabs to design and deploy custom web software, AI tools, or scalable digital platforms. Receive a clear, transparent proposal today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Link to="/start-project" aria-label="Start your project with ProstoLabs">
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
                  <Link to="/resources" aria-label="Explore ProstoLabs free resources">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-14 px-8 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base border border-white/20 hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                    >
                      Explore Our Resources
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