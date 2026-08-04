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

      <div className="relative bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-500/30 selection:text-blue-900 overflow-hidden" ref={containerRef}>
        
        {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
        <div className="absolute top-0 left-0 right-0 h-[120vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[15%] right-[-5%] w-[35%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-6 pt-24 sm:pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden">
          <div className="max-w-[1100px] mx-auto text-center relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-8 transform-gpu">
                <Sparkles size={16} className="text-[#2563EB]" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Capabilities & Digital Solutions</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8 text-[#0A0A0A] font-sans">
                Web Development, AI Automation & Digital Solutions for <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#2563EB] to-cyan-500">Modern Businesses.</span>
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-[1.6] mb-10 font-medium tracking-tight">
                We engineer high-speed web applications, custom software, AI workflows, and conversion-first user interfaces designed to scale your operations and drive revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/start-project" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative w-full sm:w-auto h-14 px-8 rounded-full bg-[#2563EB] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.3)] border border-blue-400/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      Start Your Project
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-14 px-8 rounded-full bg-white/70 backdrop-blur-xl border border-gray-200/80 text-[#0A0A0A] font-bold text-sm sm:text-base hover:bg-white hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer flex items-center justify-center shadow-sm"
                  >
                    Talk to Our Team
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. EXPANDABLE SERVICES LIST (PREMIUM BENTO ACCORDIONS) */}
        {/* ========================================================================= */}
        <section ref={servicesSectionRef} className="py-24 md:py-32 px-6 bg-transparent relative scroll-mt-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          
          <div className="max-w-[1100px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Our Capabilities
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Click any core domain below to view process steps, deliverables, and guides.
              </p>
            </AnimatedSection>

            <div className="space-y-4 sm:space-y-6">
              {servicesData.map((service, i) => {
                const isExpanded = expandedService === service.id

                return (
                  <AnimatedSection key={service.id} delay={i * 0.08}>
                    <div
                      onClick={() => toggleService(service.id)}
                      className={`group cursor-pointer overflow-hidden rounded-[32px] transition-all duration-500 backdrop-blur-xl border ${
                        isExpanded 
                          ? 'bg-white border-[#2563EB]/40 shadow-[0_20px_60px_rgba(37,99,235,0.08)]' 
                          : 'bg-white/60 border-gray-200/80 hover:border-gray-300/80 hover:bg-white/90 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]'
                      }`}
                    >
                      {/* Card Header */}
                      <div className="p-6 sm:p-8 md:p-10 flex items-center justify-between">
                        <div className="flex items-center gap-5 sm:gap-8">
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-sm ${
                            isExpanded ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white scale-105' : 'bg-gradient-to-br from-blue-50 to-white border border-blue-100 text-[#2563EB] group-hover:scale-105'
                          }`}>
                            <service.icon size={28} strokeWidth={1.5} />
                          </div>
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] font-sans tracking-tight mb-1 sm:mb-2">{service.title}</h3>
                            <p className="text-sm sm:text-base text-[#6B7280] font-medium hidden sm:block">{service.tagline}</p>
                          </div>
                        </div>
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-transform duration-500 shrink-0 ${
                          isExpanded ? 'bg-blue-50 rotate-180' : 'bg-gray-50 group-hover:bg-gray-100'
                        }`}>
                          <ChevronDown className={`w-5 h-5 sm:w-6 sm:h-6 ${isExpanded ? 'text-[#2563EB]' : 'text-gray-400 group-hover:text-gray-600'}`} />
                        </div>
                      </div>

                      {/* Card Expand Content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: easeSaaS }}
                          >
                            <div className="px-6 sm:px-8 md:px-10 pb-10 pt-2 border-t border-gray-100/80 space-y-10">
                              
                              {/* Introductory Overview */}
                              <p className="text-[15px] sm:text-[17px] text-[#4B5563] leading-[1.7] font-medium max-w-4xl">
                                {service.desc}
                              </p>
                              
                              {/* Perfect For Badges */}
                              <div className="p-6 rounded-[24px] bg-gray-50/50 border border-gray-100 space-y-4">
                                <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans">
                                  Perfect For
                                </span>
                                <div className="flex flex-wrap gap-2.5">
                                  {service.perfectFor.map((item, pIdx) => (
                                    <span key={pIdx} className="px-4 py-2 rounded-full bg-white border border-gray-200/80 text-sm font-semibold text-[#0A0A0A] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Our Process */}
                                <div className="space-y-4">
                                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans">
                                    Our Process
                                  </span>
                                  <div className="grid grid-cols-1 gap-3">
                                    {service.processSteps.map((ps, sIdx) => (
                                      <div key={sIdx} className="p-4 rounded-[16px] bg-blue-50/30 border border-blue-100/50 flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-white text-[#2563EB] flex items-center justify-center font-bold text-xs shadow-sm">
                                          {ps.step}
                                        </div>
                                        <span className="text-[15px] font-bold text-[#0A0A0A] font-sans">{ps.title}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* What You Get */}
                                <div className="space-y-4">
                                  <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans">
                                    What You Get
                                  </span>
                                  <div className="grid grid-cols-1 gap-3">
                                    {service.bullets.map((bullet, idx) => (
                                      <div key={idx} className="flex items-center gap-3 p-4 rounded-[16px] bg-white border border-gray-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                                        <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                                          <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                                        </div>
                                        <span className="text-[14px] text-[#0A0A0A] font-semibold font-sans">{bullet}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Contextual Related Resources */}
                              {service.relatedResources.length > 0 && (
                                <div className="pt-8 border-t border-gray-100/80 space-y-5">
                                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 font-sans">
                                    <BookOpen size={14} className="text-[#2563EB]" />
                                    <span>Related Resources & Guides</span>
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {service.relatedResources.map((res, rIdx) => (
                                      <Link
                                        key={rIdx}
                                        to={`/resources/${res.slug}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-4 rounded-[16px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 hover:shadow-[0_8px_20px_rgba(37,99,235,0.06)] text-[13px] font-bold text-[#0A0A0A] hover:text-[#2563EB] transition-all flex items-start justify-between group/res cursor-pointer"
                                      >
                                        <span className="leading-snug pr-2">{res.title}</span>
                                        <ArrowUpRight size={16} className="text-gray-400 group-hover/res:text-[#2563EB] shrink-0 mt-0.5 group-hover/res:translate-x-0.5 group-hover/res:-translate-y-0.5 transition-transform" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Primary Action Button */}
                              <div className="pt-4">
                                <Link to="/start-project" onClick={(e) => e.stopPropagation()}>
                                  <motion.button 
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="h-12 px-8 rounded-full bg-[#0A0A0A] text-white font-bold text-sm shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center gap-2 cursor-pointer hover:bg-gray-900 transition-colors group/btn"
                                  >
                                    <span>Discuss this service</span>
                                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
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
        {/* 3. TRUST SIGNALS: THE PARTNERSHIP ADVANTAGE */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                The Partnership Advantage
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Why Businesses Choose <span className="text-[#2563EB]">ProstoLabs</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
        {/* 4. DEVELOPMENT PROCESS (DARK THEME / LINEAR AESTHETIC) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1000px] mx-auto relative z-10">
            <AnimatedSection className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Our Development Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-medium max-w-2xl mx-auto">
                A proven step-by-step process focused on quality, speed, and reliable delivery.
              </p>
            </AnimatedSection>

            <div className="relative">
              {/* Glowing Vertical Timeline Line */}
              <div className="absolute left-[24px] sm:left-[36px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />

              {[
                { num: '01', title: 'Discovery & Research', desc: 'We analyze your business goals, review system requirements, and set clear milestones.' },
                { num: '02', title: 'Architecture & Strategy', desc: 'Selecting the optimal database structure, frontend frameworks, and cloud infrastructure for scale.' },
                { num: '03', title: 'UI/UX Design', desc: 'Creating clean visual prototypes and responsive layouts for your team to review.' },
                { num: '04', title: 'Agile Development', desc: 'Writing modular code in transparent sprints with live staging links for direct testing.' },
                { num: '05', title: 'QA & Security Testing', desc: 'Rigorous automated and manual testing to ensure edge cases are handled and data is secure.' },
                { num: '06', title: 'Deployment & Support', desc: 'Zero-downtime deployment to cloud servers, followed by ongoing retainer support and maintenance.' },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="relative pl-16 sm:pl-28 mb-12 sm:mb-16 last:mb-0 group">
                  {/* Glowing Node */}
                  <div className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#0A0A0A] border-2 border-gray-800 group-hover:border-blue-500 flex items-center justify-center font-bold text-gray-400 group-hover:text-blue-400 text-sm sm:text-lg shadow-[0_0_20px_rgba(0,0,0,0.5)] z-10 transition-colors duration-500">
                    {step.num}
                    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  {/* Content Card */}
                  <div className="p-8 sm:p-10 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 font-sans tracking-tight text-white">{step.title}</h3>
                    <p className="text-[15px] sm:text-[17px] text-gray-400 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. INDUSTRIES WE SERVE */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-white border-b border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Tailored digital engineering for diverse commercial domains.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
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
                  <AnimatedSection key={i} delay={i * 0.05}>
                    <div className="p-6 sm:p-8 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 text-center hover:bg-white hover:border-transparent hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-default relative overflow-hidden">
                      {/* Hover Inner Glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <Icon className="relative z-10 w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-[#2563EB] transition-colors" strokeWidth={1.5} />
                      <span className="relative z-10 font-bold text-sm text-[#0A0A0A] font-sans">{industry.name}</span>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. FAQ SECTION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-[#FAFAFA]">
          <div className="max-w-[900px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                <HelpCircle size={14} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Common Questions
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Everything you need to know about our web engineering process, budgets, and delivery timelines.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {faqData.map((faq, fIdx) => (
                <AnimatedSection key={fIdx} delay={fIdx * 0.05}>
                  <div className="rounded-2xl border border-gray-200/50 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                      className="w-full p-6 text-left flex justify-between items-center font-bold text-base md:text-lg text-[#0A0A0A] cursor-pointer hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 transition-colors font-sans group"
                    >
                      <span className="tracking-tight pr-4">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${openFaq === fIdx ? 'bg-blue-50' : 'bg-gray-50 group-hover:bg-blue-50'}`}>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openFaq === fIdx ? 'rotate-180 text-[#2563EB]' : 'text-gray-400 group-hover:text-[#2563EB]'}`} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === fIdx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: easeSaaS }}
                        >
                          <div className="px-6 pb-6 pt-0 text-[15px] font-medium text-[#6B7280] leading-relaxed border-t border-gray-100/80 mt-1 pt-4">
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
        {/* 7. EXPLORE MORE */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-white border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans mb-3">
                Explore ProstoLabs
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-[-0.02em] font-sans">
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
                <AnimatedSection key={cIdx} delay={cIdx * 0.1}>
                  <Link
                    to={card.link}
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
        {/* 8. FINAL CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[40px] overflow-hidden bg-[#0A0A0A] text-white text-center py-20 md:py-28 px-6 sm:px-12 shadow-2xl">
              {/* Premium Gradient Overlays */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.4)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] font-sans leading-[1.1]">
                  Ready to launch <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">your project?</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  Partner with ProstoLabs to design and deploy custom software, web apps, or AI tools. Get a clear project proposal today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Link to="/start-project">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full sm:w-auto h-14 px-8 bg-white text-[#0A0A0A] rounded-full font-bold text-base shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all cursor-pointer overflow-hidden flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link to="/contact">
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