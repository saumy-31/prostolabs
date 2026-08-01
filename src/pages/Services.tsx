import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { 
  Code, Palette, Bot, Settings, LineChart, CheckCircle2,
  ChevronDown, Wrench, Sparkles, ArrowRight, ShieldCheck,
  Globe, Heart, Cloud, ShoppingBag, Activity, Target, Zap, Cpu,
  Briefcase, Layers, MessageSquare, BookOpen, ArrowUpRight, HelpCircle
} from 'lucide-react'

// --- SAAS EASING CURVE ---
const easeSaaS = [0.16, 1, 0.3, 1] as const

// Structured Data for Easy Scaling to Sub-routes (/services/web-development, etc.)
export interface ServiceItem {
  id: string
  slug: string
  title: string
  icon: any
  tagline: string
  desc: string
  perfectFor: string[]
  processSteps: { step: string; title: string }[]
  bullets: string[]
  relatedResources: { title: string; slug: string }[]
}

const servicesData: ServiceItem[] = [
  {
    id: 'web',
    slug: 'web-development',
    title: 'Web & Software Development',
    icon: Code,
    tagline: 'High-speed, scalable web applications and corporate digital platforms.',
    desc: 'We engineer fast, custom web applications and business websites built to perform under heavy traffic. Every platform is designed around clean component architecture, rapid page loads, and seamless database scaling as your customer base expands.',
    perfectFor: ['Growing SaaS Platforms', 'Enterprise Services', 'Healthcare & Clinics', 'E-Commerce Brands', 'B2B Agencies'],
    processSteps: [
      { step: '01', title: 'Discovery' },
      { step: '02', title: 'Architecture' },
      { step: '03', title: 'Development' },
      { step: '04', title: 'Deployment' }
    ],
    bullets: [
      'Custom Web Applications & Portals',
      'Modern High-Conversion Websites',
      'E-commerce Storefronts',
      'Headless Content Management Systems',
      'API & Third-Party Integrations',
      'Ongoing Technical Scaling & Architecture'
    ],
    relatedResources: [
      { title: 'Web Application vs. Website: What Is the Difference?', slug: 'web-application-vs-website-whats-the-difference' },
      { title: 'How to Choose the Right Technology Stack for Your Business', slug: 'how-to-choose-the-right-technology-stack-for-your-business' },
      { title: 'The Complete Website Development Process Explained', slug: 'complete-website-development-process-step-by-step' }
    ]
  },
  {
    id: 'uiux',
    slug: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    icon: Palette,
    tagline: 'Conversion-focused visual design and intuitive user flows.',
    desc: 'Great design removes cognitive friction and guides visitors naturally toward business conversion. We design crisp, accessible visual interfaces, design token systems, and thumb-friendly mobile layouts that reflect your enterprise brand authority.',
    perfectFor: ['Complex Software Dashboards', 'Mobile Apps', 'Client Portals', 'Service Landing Pages', 'Digital Products'],
    processSteps: [
      { step: '01', title: 'User Mapping' },
      { step: '02', title: 'Wireframing' },
      { step: '03', title: 'UI Polish' },
      { step: '04', title: 'Design System' }
    ],
    bullets: [
      'Interactive Visual Prototypes',
      'User Experience & Interface Design',
      'Mobile & Web Screen Wireframes',
      'Brand & Design Token Systems',
      'Conversion Flow Optimization',
      'User Journey & Navigation Mapping'
    ],
    relatedResources: [
      { title: 'Why Good UI/UX Design Directly Increases Business Conversions', slug: 'why-good-ui-ux-increases-conversions' },
      { title: 'How Good UI/UX Design Directly Builds Customer Trust', slug: 'how-good-ui-ux-design-improves-customer-trust' },
      { title: 'Common Website Mistakes That Silently Destroy Conversions', slug: 'common-website-mistakes-that-reduce-conversions' }
    ]
  },
  {
    id: 'ai',
    slug: 'ai-automation',
    title: 'AI & Smart Automations',
    icon: Bot,
    tagline: 'Intelligent AI assistants, lead routers, and document workflows.',
    desc: 'Save hundreds of operational hours by allowing intelligent AI models to handle repetitive administrative tasks. We train custom AI knowledge models, automated lead qualification assistants, and document processing systems that integrate straight into your software.',
    perfectFor: ['High-Volume Inquiries', 'Customer Support', 'Medical Intake', 'Legal & Professional Services', 'Sales Operations'],
    processSteps: [
      { step: '01', title: 'Data Audit' },
      { step: '02', title: 'AI Training' },
      { step: '03', title: 'API Integration' },
      { step: '04', title: 'Workflow Test' }
    ],
    bullets: [
      'Custom WhatsApp & Web AI Chatbots',
      'Internal Knowledge Base Assistants',
      'Automated Lead Scoring & Routing',
      'OpenAI & Custom LLM Fine-Tuning',
      'Document & Invoice OCR Data Extraction',
      'Tailored AI Operational Workflows'
    ],
    relatedResources: [
      { title: 'Practical AI Automations Every Growing Business Can Implement', slug: 'ai-automation-ideas-every-growing-business-can-implement' },
      { title: 'How Business Workflow Automation Saves Time and Money', slug: 'how-business-workflow-automation-saves-time-and-money' }
    ]
  },
  {
    id: 'marketing',
    slug: 'seo-growth',
    title: 'SEO & Growth Strategy',
    icon: LineChart,
    tagline: 'Technical search optimization and conversion rate engineering.',
    desc: 'Attract qualified, high-intent prospective buyers organically. We resolve technical indexing roadblocks, optimize page rendering speeds, configure structured schema markup, and target buyer-intent keywords to secure page-one search positions.',
    perfectFor: ['Local Service Companies', 'B2B Services', 'Multi-Location Brands', 'Consultancies', 'Niche SaaS'],
    processSteps: [
      { step: '01', title: 'SEO Audit' },
      { step: '02', title: 'On-Page Fixes' },
      { step: '03', title: 'Speed Optimization' },
      { step: '04', title: 'Rank Tracking' }
    ],
    bullets: [
      'Technical SEO Audits & Indexing Setup',
      'Search Engine Ranking & Keyword Strategy',
      'Core Web Vitals & Speed Optimization',
      'Conversion Rate Optimization (CRO)',
      'High-Intent Lead Capture Funnels',
      'Analytics & Search Console Monitoring'
    ],
    relatedResources: [
      { title: 'SEO Basics Every Business Owner Should Know in 2026', slug: 'seo-basics-every-business-owner-should-know' },
      { title: 'Critical SEO Mistakes That Stop Businesses From Ranking', slug: 'seo-mistakes-that-stop-businesses-from-ranking' },
      { title: 'Why Website Load Speed Matters More Than Ever', slug: 'why-website-speed-matters-more-than-ever' }
    ]
  },
  {
    id: 'automation',
    slug: 'workflow-automation',
    title: 'Business Workflow Automation',
    icon: Settings,
    tagline: 'Seamless cross-app integrations that eliminate manual data entry.',
    desc: 'Eliminate duplicate copy-pasting and spreadsheet bloat across your team. We connect your existing web forms, CRM tools, communication channels, and accounting software into automated real-time data pipelines.',
    perfectFor: ['Operational Teams', 'Sales Pipelines', 'Finance & Billing', 'Client Onboarding', 'Multi-App Stacks'],
    processSteps: [
      { step: '01', title: 'Map Steps' },
      { step: '02', title: 'Webhook Setup' },
      { step: '03', title: 'Sync Testing' },
      { step: '04', title: 'Live Launch' }
    ],
    bullets: [
      'Cross-App Real-Time Data Syncing',
      'Custom CRM & Form Webhook Integrations',
      'Instant Lead & WhatsApp Notifications',
      'Automated Invoicing & Receipt Systems',
      'Custom Executive Reporting Dashboards',
      'Operational Efficiency & Time Scaling'
    ],
    relatedResources: [
      { title: 'How Business Workflow Automation Saves Time, Reduces Errors, and Cuts Costs', slug: 'how-business-workflow-automation-saves-time-and-money' }
    ]
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    title: 'Website & Product Maintenance',
    icon: Wrench,
    tagline: '24/7 server monitoring, security updates, and performance care.',
    desc: 'Keep your digital infrastructure bulletproof, fast, and continuously updated. We perform daily encrypted cloud backups, patch critical software vulnerabilities, test lead forms, and guarantee 99.9% uptime for your business.',
    perfectFor: ['Mission-Critical Sites', 'Client Portals', 'Active E-Commerce', 'SaaS Products', 'Busy Corporate Sites'],
    processSteps: [
      { step: '01', title: 'Daily Backup' },
      { step: '02', title: 'Patch Updates' },
      { step: '03', title: 'Speed Check' },
      { step: '04', title: 'Form Verification' }
    ],
    bullets: [
      '24/7 Server Uptime & Health Monitoring',
      'Security Software Patching & SSL Certificates',
      'Core Web Vitals & Page Speed Audits',
      'Daily Off-Site Encrypted Cloud Backups',
      'Database Optimization & Spam Removal',
      'Dedicated Technical Edit Hours'
    ],
    relatedResources: [
      { title: 'Why Ongoing Website Maintenance Is Essential for Business Growth', slug: 'why-website-and-product-maintenance-is-important' },
      { title: 'The Hidden Financial Costs of Ignoring Website Maintenance', slug: 'hidden-costs-of-ignoring-website-maintenance' },
      { title: 'The Ultimate Website Maintenance Checklist Every Business Should Follow', slug: 'website-maintenance-checklist-every-business-should-follow' }
    ]
  }
]

// FAQ Data for Component & Automatic Schema Injection
const faqData = [
  {
    question: 'How long does a web development or software project take?',
    answer: 'Standard custom websites take 2 to 4 weeks from discovery to deployment. Custom web applications, portals, or multi-role software platforms typically range from 4 to 8 weeks depending on integration complexity.'
  },
  {
    question: 'How much does a custom business website cost?',
    answer: 'Project costs depend on your required functional scope, design complexity, and automated integrations. We provide transparent, fixed-scope proposals with zero hidden fees.'
  },
  {
    question: 'Do you redesign and modernize existing websites and software?',
    answer: 'Yes. We frequently help companies upgrade outdated legacy websites, improve mobile rendering speed, refactor codebases to modern React/Next.js frameworks, and optimize user conversion funnels.'
  },
  {
    question: 'Can you build custom AI automations for our existing software stack?',
    answer: 'Absolutely. We connect custom AI assistants, automated WhatsApp lead routers, and LLM knowledge workflows directly into your current CRM, website, or custom database via secure APIs.'
  },
  {
    question: 'Do you provide ongoing website and product maintenance after launch?',
    answer: 'Yes. ProstoLabs provides comprehensive monthly maintenance care plans covering 24/7 server monitoring, daily encrypted cloud backups, security patching, speed audits, and dedicated support hours.'
  },
  {
    question: 'Do you partner with international clients outside your local region?',
    answer: 'Yes. ProstoLabs serves growing businesses, SaaS companies, clinics, and professional firms globally, maintaining clear digital communication and milestone transparency.'
  }
]

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const servicesSectionRef = useRef<HTMLElement>(null)
  const location = useLocation()
  
  const [expandedService, setExpandedService] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  useEffect(() => {
    if (location.state && location.state.activeService) {
      setExpandedService(location.state.activeService)
      
      setTimeout(() => {
        servicesSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        window.history.replaceState({}, document.title)
      }, 150)
    }
  }, [location.state])

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id)
  }

  return (
    <>
      <SEO 
        title="Our Services | Web Development, AI & Software Solutions"
        description="Explore ProstoLabs' core capabilities: custom web application engineering, AI automations, UI/UX design, business workflow automation, and 24/7 website care."
        path="/services"
        faq={faqData}
      />

      <div className="relative bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden" ref={containerRef}>
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (SEARCH-INTENT FOCUSED & PREMIUM)                        */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden">
          <div className="max-w-[1100px] mx-auto text-center relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>Capabilities & Digital Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                Web Development, AI Automation & Digital Solutions for <span className="text-[#2563EB]">Modern Businesses.</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                We engineer high-speed web applications, custom software, AI workflows, and conversion-first user interfaces designed to scale your operations and drive revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <Link to="/start-project">
                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: "#1D4ED8" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-lg shadow-blue-500/25 inline-flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-white border border-gray-200 text-[#0A0A0A] font-bold text-sm hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center"
                  >
                    Talk to Our Team
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. EXPANDABLE SERVICES LIST (RICHER CONTENT & RELATED RESOURCES)         */}
        {/* ========================================================================= */}
        <section ref={servicesSectionRef} className="py-16 md:py-24 px-6 bg-white border-y border-gray-200/80 scroll-mt-20">
          <div className="max-w-[1100px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Our Capabilities
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Click any core domain below to view process steps, deliverables, and guides.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {servicesData.map((service, i) => {
                const isExpanded = expandedService === service.id

                return (
                  <AnimatedSection key={service.id} delay={i * 0.05}>
                    <div
                      onClick={() => toggleService(service.id)}
                      className={`group cursor-pointer overflow-hidden rounded-[24px] border transition-all duration-300 ${
                        isExpanded 
                          ? 'bg-white border-[#2563EB] shadow-xl' 
                          : 'bg-[#FAFAFA] border-gray-200/80 hover:border-gray-300 hover:bg-white'
                      }`}
                    >
                      {/* Card Header */}
                      <div className="p-6 sm:p-8 flex items-center justify-between">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                            isExpanded ? 'bg-[#2563EB] text-white' : 'bg-blue-50 text-[#2563EB]'
                          }`}>
                            <service.icon size={22} />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] font-sans">{service.title}</h3>
                            <p className="text-xs sm:text-sm text-[#6B7280] font-medium hidden sm:block mt-0.5">{service.tagline}</p>
                          </div>
                        </div>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform shrink-0 ${
                          isExpanded ? 'bg-blue-50 rotate-180' : 'bg-gray-100 group-hover:bg-gray-200'
                        }`}>
                          <ChevronDown className={`w-5 h-5 ${isExpanded ? 'text-[#2563EB]' : 'text-gray-500'}`} />
                        </div>
                      </div>

                      {/* Card Expand Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: easeSaaS }}
                          >
                            <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-gray-100 space-y-8">
                              
                              {/* Introductory Overview */}
                              <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                                {service.desc}
                              </p>
                              
                              {/* Perfect For Badges */}
                              <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200/80 space-y-2.5">
                                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans">
                                  Perfect For
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {service.perfectFor.map((item, pIdx) => (
                                    <span key={pIdx} className="px-3 py-1 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-[#0A0A0A] shadow-2xs">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Our Process - Mini 4 Steps */}
                              <div className="space-y-3">
                                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans">
                                  Our Process
                                </span>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                  {service.processSteps.map((ps, sIdx) => (
                                    <div key={sIdx} className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center gap-2.5">
                                      <span className="text-xs font-black text-[#2563EB] font-mono">{ps.step}</span>
                                      <span className="text-xs font-bold text-[#0A0A0A] font-sans">{ps.title}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* What You Get - Deliverable Checkcards */}
                              <div className="space-y-3">
                                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans">
                                  What You Get
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                  {service.bullets.map((bullet, idx) => (
                                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                                      <span className="text-xs sm:text-sm text-[#0A0A0A] font-semibold font-sans">{bullet}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Contextual Related Resources */}
                              {service.relatedResources.length > 0 && (
                                <div className="pt-2 border-t border-gray-100 space-y-3">
                                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 font-sans">
                                    <BookOpen size={13} className="text-[#2563EB]" />
                                    <span>Related Resources & Guides</span>
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                    {service.relatedResources.map((res, rIdx) => (
                                      <Link
                                        key={rIdx}
                                        to={`/resources/${res.slug}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-3 rounded-xl bg-gray-50 hover:bg-blue-50/60 border border-gray-200/80 hover:border-[#2563EB]/40 text-xs font-bold text-[#0A0A0A] hover:text-[#2563EB] transition-all flex items-center justify-between group/res cursor-pointer"
                                      >
                                        <span className="line-clamp-1">{res.title}</span>
                                        <ArrowUpRight size={14} className="text-gray-400 group-hover/res:text-[#2563EB] shrink-0 ml-2" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Primary Action Button */}
                              <div className="pt-2">
                                <Link to="/start-project" onClick={(e) => e.stopPropagation()}>
                                  <motion.button 
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    className="h-11 px-6 rounded-xl bg-[#2563EB] text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer hover:bg-blue-600 transition-colors"
                                  >
                                    <span>Start Your Project</span>
                                    <ArrowRight size={14} />
                                  </motion.button>
                                </Link>
                              </div>

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. TRUST SIGNALS: WHY BUSINESSES CHOOSE PROSTOLABS                       */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>The Partnership Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Why Businesses Choose ProstoLabs
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                We handle design, engineering, security, and maintenance so you can focus on core growth.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct access to your engineers and designers without account manager middlemen.' },
                { icon: Zap, title: 'Modern Technology Stack', text: 'Hand-crafted React, Next.js, and TypeScript architectures ensuring peak efficiency.' },
                { icon: Layers, title: 'Scalable Architecture', text: 'Code structures built to expand effortlessly as active concurrency and user load grows.' },
                { icon: Cpu, title: 'Performance Focused', text: 'Sub-second mobile page loads and Core Web Vitals optimization engineered out of the box.' },
                { icon: ShieldCheck, title: 'Security First', text: 'Built-in SSL, encrypted database storage, and proactive vulnerability patching.' },
                { icon: Heart, title: 'Long-Term Partnership', text: 'Continuous product care, cloud maintenance, and feature enhancements post-launch.' },
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
        {/* 4. DEVELOPMENT PROCESS (RESTORED DETAILED TIMELINE)                      */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white overflow-hidden">
          <div className="max-w-[1000px] mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 font-sans">
                Our Development Process
              </h2>
              <p className="text-base sm:text-lg text-blue-100 font-medium max-w-2xl mx-auto">
                A proven step-by-step process focused on quality, speed, and reliable delivery.
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute left-[20px] sm:left-[30px] top-0 bottom-0 w-[2px] bg-white/20" />

              {[
                { num: '01', title: 'Discovery & Research', desc: 'We analyze your business goals, review system requirements, and set clear milestones.' },
                { num: '02', title: 'Architecture & Strategy', desc: 'Selecting the optimal database structure, frontend frameworks, and cloud infrastructure for scale.' },
                { num: '03', title: 'UI/UX Design', desc: 'Creating clean visual prototypes and responsive layouts for your team to review.' },
                { num: '04', title: 'Agile Development', desc: 'Writing modular code in transparent sprints with live staging links for direct testing.' },
                { num: '05', title: 'QA & Security Testing', desc: 'Rigorous automated and manual testing to ensure edge cases are handled and data is secure.' },
                { num: '06', title: 'Deployment & Support', desc: 'Zero-downtime deployment to cloud servers, followed by ongoing retainer support and maintenance.' },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.08} className="relative pl-14 sm:pl-20 mb-10 sm:mb-14 last:mb-0">
                  <div className="absolute left-0 top-0 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/30 flex items-center justify-center font-bold text-white text-xs sm:text-base backdrop-blur-md shadow-lg z-10">
                    {step.num}
                  </div>
                  <div className="p-6 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/15">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 font-sans text-white">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. INDUSTRIES WE SERVE                                                   */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Industries We Serve
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Tailored digital engineering for diverse commercial domains.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Healthcare', icon: Heart },
                { name: 'SaaS', icon: Cloud },
                { name: 'E-Commerce', icon: ShoppingBag },
                { name: 'Finance', icon: Activity },
                { name: 'Education', icon: Target },
                { name: 'Travel', icon: Globe },
                { name: 'Real Estate', icon: ShieldCheck },
                { name: 'Logistics', icon: Settings },
                { name: 'Startups', icon: Zap },
                { name: 'Fitness', icon: Cpu }
              ].map((industry, i) => {
                const Icon = industry.icon
                return (
                  <AnimatedSection key={i} delay={i * 0.04}>
                    <div className="p-5 rounded-[20px] bg-[#FAFAFA] border border-gray-200/80 text-center hover:bg-white hover:border-[#2563EB]/40 hover:shadow-md transition-all duration-200 group cursor-default">
                      <Icon className="w-6 h-6 mx-auto mb-2 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
                      <span className="font-bold text-xs sm:text-sm text-[#0A0A0A] font-sans">{industry.name}</span>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. FAQ SECTION (WITH ACCORDIONS & AUTOMATIC SCHEMA)                       */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[900px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <HelpCircle size={14} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Common Questions About Working Together
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Everything you need to know about our web engineering process, budgets, and delivery timelines.
              </p>
            </AnimatedSection>

            <div className="space-y-3.5">
              {faqData.map((faq, fIdx) => (
                <AnimatedSection key={fIdx} delay={fIdx * 0.04}>
                  <div className="rounded-2xl border border-gray-200/80 bg-white overflow-hidden shadow-2xs">
                    <button
                      onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                      className="w-full p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-[#0A0A0A] flex justify-between items-center cursor-pointer hover:text-[#2563EB] transition-colors font-sans"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 shrink-0 transition-transform duration-200 ${
                        openFaq === fIdx ? 'rotate-180 text-[#2563EB]' : ''
                      }`} />
                    </button>
                    <AnimatePresence>
                      {openFaq === fIdx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: easeSaaS }}
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm font-medium text-[#6B7280] leading-relaxed border-t border-gray-100 mt-1 pt-4">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. EXPLORE MORE (INTERNAL LINKING DIRECTORY)                             */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans mb-1">
                Explore ProstoLabs
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                Discover More About Our Ecosystem
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Resources & Journal',
                  desc: 'Read in-depth technical guides, web architecture frameworks, and business automation strategies.',
                  link: '/resources',
                  cta: 'Explore Resources',
                  icon: BookOpen
                },
                {
                  title: 'About ProstoLabs',
                  desc: 'Learn about our engineering philosophy, core team values, and client partnership model.',
                  link: '/about',
                  cta: 'Learn Our Story',
                  icon: Briefcase
                },
                {
                  title: 'FlySava Showcase',
                  desc: 'Explore our flagship luxury aviation web platform engineered for real-time customer bookings.',
                  link: '/flysava',
                  cta: 'View Case Study',
                  icon: Globe
                }
              ].map((card, cIdx) => (
                <AnimatedSection key={cIdx} delay={cIdx * 0.08}>
                  <Link
                    to={card.link}
                    className="p-7 rounded-[28px] bg-[#FAFAFA] hover:bg-white border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer"
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
        {/* 8. FINAL CALL TO ACTION                                                  */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Ready to launch your project?
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                  Partner with ProstoLabs to design and deploy custom software, web apps, or AI tools. Get a clear project proposal today.
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