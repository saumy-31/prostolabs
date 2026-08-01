import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { resources } from '../data/resourcesData'
import { 
  Mail, Sparkles, MessageSquare, ShieldCheck, Instagram, Briefcase, 
  ArrowRight, ArrowUpRight, ChevronDown, CheckCircle2, Zap, Clock, 
  Target, Layers, Cpu, Heart, BookOpen, Code, Globe
} from 'lucide-react'

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

export const Contact = () => {
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
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* ========================================================================= */}
        {/* 1. HERO & FORM SECTION                                                    */}
        {/* ========================================================================= */}
        <div className="max-w-[1300px] mx-auto px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* LEFT COLUMN: HERO TEXT & CONTACT CARDS */}
            <div className="lg:col-span-6 space-y-8">
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                  <Sparkles size={14} className="text-[#2563EB]" />
                  <span>Start a Conversation</span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                  Talk With the <br />
                  <span className="text-[#2563EB]">ProstoLabs Team.</span>
                </h1>

                <p className="text-base sm:text-lg text-[#6B7280] mb-8 max-w-lg font-medium leading-relaxed">
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
                    className="group p-5 rounded-[24px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0A0A0A] font-sans">General Email</h3>
                        <p className="text-xs text-[#6B7280] font-medium mt-0.5">Quick questions & notes</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                      <span className="truncate">hello@prostolabs.com</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                  </a>

                  {/* Card 2: Business Inquiries */}
                  <a 
                    href="mailto:biz@prostolabs.com"
                    aria-label="Send email for business inquiries to biz@prostolabs.com"
                    className="group p-5 rounded-[24px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0A0A0A] font-sans">Business Inquiries</h3>
                        <p className="text-xs text-[#6B7280] font-medium mt-0.5">Partnerships & retainers</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                      <span className="truncate">biz@prostolabs.com</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                  </a>

                  {/* Card 3: Start a Project */}
                  <Link 
                    to="/start-project"
                    aria-label="Navigate to project intake planner"
                    className="group p-5 rounded-[24px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Zap size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0A0A0A] font-sans">Start a Project</h3>
                        <p className="text-xs text-[#6B7280] font-medium mt-0.5">Guided project planner</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                      <span>Project Planner</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform shrink-0" />
                    </div>
                  </Link>

                  {/* Card 4: Instagram */}
                  <a 
                    href="https://instagram.com/prostolabs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Visit ProstoLabs on Instagram"
                    className="group p-5 rounded-[24px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Instagram size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-[#0A0A0A] font-sans">Instagram</h3>
                        <p className="text-xs text-[#6B7280] font-medium mt-0.5">Design & culture updates</p>
                      </div>
                    </div>
                    <div className="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                      <span>@prostolabs</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                  </a>

                </div>
              </AnimatedSection>
            </div>

            {/* RIGHT COLUMN: ACCESSIBLE CONTACT FORM */}
            <div className="lg:col-span-6">
              <AnimatedSection delay={0.15}>
                <form 
                  action="https://formsubmit.co/hello@prostolabs.com" 
                  method="POST"
                  className="space-y-5 p-6 sm:p-10 bg-white rounded-[32px] border border-gray-200/80 shadow-lg shadow-gray-200/50"
                >
                  {/* FormSubmit Configuration Fields */}
                  <input type="hidden" name="_subject" value="New General Inquiry - ProstoLabs" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/contact?submitted=true` : ''} />

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
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
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20 transition-all" 
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
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
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20 transition-all" 
                    />
                  </div>

                  {/* Service Interested In Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-service" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                      Service Interested In
                    </label>
                    <select
                      id="contact-service"
                      name="Service Interested In"
                      aria-label="Service Interested In"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20 transition-all cursor-pointer"
                    >
                      <option value="Web Development">Web Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="SEO">SEO & Growth</option>
                      <option value="Maintenance">Website Maintenance</option>
                      <option value="Other">Other Inquiry</option>
                    </select>
                  </div>

                  {/* Estimated Budget Dropdown */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-budget" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                      Estimated Budget
                    </label>
                    <select
                      id="contact-budget"
                      name="Estimated Budget"
                      aria-label="Estimated Budget"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20 transition-all cursor-pointer"
                    >
                      <option value="Not Sure">Not Sure Yet</option>
                      <option value="Under $1,000">Under $1,000</option>
                      <option value="$1,000–5,000">$1,000 – $5,000</option>
                      <option value="$5,000–10,000">$5,000 – $10,000</option>
                      <option value="$10,000+">$10,000+</option>
                    </select>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                      Message <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea 
                      id="contact-message"
                      name="Message" 
                      required 
                      rows={4} 
                      aria-label="Message details"
                      placeholder="Tell us about your project goals or questions..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none" 
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <motion.button 
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit" 
                      aria-label="Send message to ProstoLabs"
                      className="w-full h-12 bg-[#2563EB] text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-[#1D4ED8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                    >
                      <MessageSquare size={16} />
                      <span>Send Message</span>
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280] font-medium pt-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>We respect your privacy. Zero spam guaranteed.</span>
                  </div>
                </form>
              </AnimatedSection>
            </div>

          </div>
        </div>


        {/* ========================================================================= */}
        {/* 2. WHAT HAPPENS NEXT (MINIMALIST TIMELINE)                                */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <Clock size={14} />
                <span>Clear Next Steps</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                What Happens Next
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Our simple, transparent process from inquiry to kickoff.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { step: '01', title: 'Share Your Project', desc: 'Send us your project scope, goals, and technical requirements.' },
                { step: '02', title: 'We Review Requirements', desc: 'Our lead engineers analyze your needs and map out functional solutions.' },
                { step: '03', title: 'Tailored Proposal', desc: 'Receive a clear proposal covering architecture, scope, and timeline.' },
                { step: '04', title: 'Project Kickoff', desc: 'Establish direct communication channels and begin engineering.' }
              ].map((phase, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-6 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 h-full flex flex-col justify-between shadow-2xs relative">
                    <div>
                      <span className="text-2xl font-black text-[#2563EB] font-mono block mb-3">{phase.step}</span>
                      <h3 className="font-bold text-lg text-[#0A0A0A] mb-2 font-sans">{phase.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{phase.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. WHY WORK WITH US                                                       */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>The Partnership Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Why Work With Us
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
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
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-[28px] bg-white border border-gray-200/80 shadow-2xs hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 h-full flex flex-col justify-between">
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
        {/* 4. FAQ ACCORDION                                                         */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
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
        {/* 5. CONTINUE EXPLORING (INTERNAL LINKING DIRECTORY)                        */}
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
        {/* 6. FEATURED RESOURCES STREAM (DYNAMICALLY SORTED LATEST 3)                */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
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
                    className="group rounded-[28px] bg-[#FAFAFA] border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden cursor-pointer h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
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
        {/* 7. FINAL CALL TO ACTION (CONFIDENCE-BUILDING COPY)                        */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Ready to Build Something Exceptional?
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                  Partner with ProstoLabs to design and deploy custom web software, AI tools, or scalable digital platforms. Receive a clear, transparent proposal today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3.5 pt-2">
                  <Link to="/start-project" aria-label="Start your project with ProstoLabs">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-12 px-7 bg-white text-[#2563EB] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                      Start Your Project
                    </motion.button>
                  </Link>
                  <Link to="/resources" aria-label="Explore ProstoLabs free resources">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-12 px-7 bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
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