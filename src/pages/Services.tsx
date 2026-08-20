import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { 
  Code, Palette, Bot, Settings, LineChart, CheckCircle2,
  ChevronDown, Wrench, Sparkles, ArrowRight, ShieldCheck,
  Globe, Heart, Cloud, ShoppingBag, Activity, Target, Zap, Cpu,
  Briefcase, Layers, MessageSquare, BookOpen, ArrowUpRight, 
} from 'lucide-react'

// Structured Data for Services
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

// FAQ Data
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

export const Services: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const servicesSectionRef = useRef<HTMLElement>(null)
  const location = useLocation()
  
  const [expandedService, setExpandedService] = useState<string | null>('web')
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  useEffect(() => {
    if (location.state && (location.state as { activeService?: string }).activeService) {
      const active = (location.state as { activeService: string }).activeService
      setExpandedService(active)
      
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
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' }
        ]}
        services={servicesData.map((s) => ({
          name: s.title,
          description: s.desc,
          serviceType: s.title
        }))}
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
                <span>Capabilities & Digital Solutions</span>
              </div>

              <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[68px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950">
                Web Development, AI Automation & Digital Solutions for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                  Modern Businesses.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
                We engineer high-speed web applications, custom software, AI workflows, and conversion-first user interfaces designed to scale your operations and drive revenue.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
                <Link to="/start-project" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all">
                    <span>Start Your Project</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
                
                <Link to="/contact" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-12 px-7 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm sm:text-base border border-slate-200 shadow-xs transition-colors cursor-pointer flex items-center justify-center">
                    Talk to Our Team
                  </button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. EXPANDABLE SERVICES LIST */}
        {/* ========================================================================= */}
        <section ref={servicesSectionRef} className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80 scroll-mt-20">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Core Domains
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Our Capabilities
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Click any core domain below to view process steps, deliverables, and guides.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {servicesData.map((service, i) => {
                const isExpanded = expandedService === service.id
                const IconComponent = service.icon

                return (
                  <AnimatedSection key={service.id} delay={i * 0.04}>
                    <div
                      onClick={() => toggleService(service.id)}
                      className={`group cursor-pointer rounded-2xl transition-all duration-200 border ${
                        isExpanded 
                          ? 'bg-slate-50 border-slate-300 shadow-sm' 
                          : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-2xs'
                      }`}
                    >
                      {/* Header */}
                      <div className="p-5 sm:p-6 md:p-8 flex items-center justify-between">
                        <div className="flex items-center gap-4 sm:gap-6">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors shrink-0 shadow-2xs ${
                            isExpanded ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100/70'
                          }`}>
                            <IconComponent size={22} strokeWidth={1.75} />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-950 tracking-tight">{service.title}</h3>
                            <p className="text-xs sm:text-sm text-slate-500 font-normal hidden sm:block mt-0.5">{service.tagline}</p>
                          </div>
                        </div>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                          isExpanded ? 'bg-blue-100/60 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200/70'
                        }`}>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      {/* Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-5 sm:px-6 md:px-8 pb-8 pt-2 border-t border-slate-200/80 space-y-8">
                              
                              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-4xl pt-2">
                                {service.desc}
                              </p>
                              
                              {/* Perfect For */}
                              <div className="p-5 rounded-xl bg-white border border-slate-200/80 space-y-3">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                                  Perfect For
                                </span>
                                <div className="flex flex-wrap gap-2">
                                  {service.perfectFor.map((item, pIdx) => (
                                    <span key={pIdx} className="px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Process Steps */}
                                <div className="space-y-3">
                                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                                    Our Process
                                  </span>
                                  <div className="grid grid-cols-1 gap-2.5">
                                    {service.processSteps.map((ps, sIdx) => (
                                      <div key={sIdx} className="p-3.5 rounded-xl bg-white border border-slate-200/80 flex items-center gap-3.5">
                                        <div className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs font-mono shrink-0">
                                          {ps.step}
                                        </div>
                                        <span className="text-xs sm:text-sm font-semibold text-slate-900">{ps.title}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                {/* Deliverables */}
                                <div className="space-y-3">
                                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                                    What You Get
                                  </span>
                                  <div className="grid grid-cols-1 gap-2.5">
                                    {service.bullets.map((bullet, idx) => (
                                      <div key={idx} className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200/80">
                                        <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                                        <span className="text-xs sm:text-sm font-medium text-slate-800">{bullet}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>

                              {/* Related Guides */}
                              {service.relatedResources.length > 0 && (
                                <div className="pt-6 border-t border-slate-200/80 space-y-3.5">
                                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                                    <BookOpen size={14} className="text-blue-600" />
                                    <span>Related Resources & Guides</span>
                                  </span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {service.relatedResources.map((res, rIdx) => (
                                      <Link
                                        key={rIdx}
                                        to={`/resources/${res.slug}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 text-xs font-semibold text-slate-900 hover:text-blue-600 transition-colors flex items-start justify-between group/res"
                                      >
                                        <span className="leading-snug pr-2">{res.title}</span>
                                        <ArrowUpRight size={14} className="text-slate-400 group-hover/res:text-blue-600 shrink-0 mt-0.5" />
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* CTA */}
                              <div className="pt-2">
                                <Link to="/start-project" onClick={(e) => e.stopPropagation()}>
                                  <button className="h-11 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm flex items-center gap-2 cursor-pointer transition-colors">
                                    <span>Discuss this capability</span>
                                    <ArrowRight size={14} />
                                  </button>
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
        {/* 3. WHY BUSINESSES CHOOSE PROSTOLABS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                The Partnership Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Why Businesses Choose <span className="text-blue-600">ProstoLabs</span>
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                We handle design, engineering, security, and maintenance so you can focus on core growth.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct access to your engineers and designers without account manager middlemen.' },
                { icon: Zap, title: 'Modern Technology Stack', text: 'Hand-crafted React, Next.js, and TypeScript architectures ensuring peak efficiency.' },
                { icon: Layers, title: 'Scalable Architecture', text: 'Code structures built to expand effortlessly as active concurrency and user load grows.' },
                { icon: Cpu, title: 'Performance Focused', text: 'Sub-second mobile page loads and Core Web Vitals optimization engineered out of the box.' },
                { icon: ShieldCheck, title: 'Security First', text: 'Built-in SSL, encrypted database storage, and proactive vulnerability patching.' },
                { icon: Heart, title: 'Long-Term Partnership', text: 'Continuous product care, cloud maintenance, and feature enhancements post-launch.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all h-full flex flex-col justify-between">
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
        {/* 4. DEVELOPMENT PROCESS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[960px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Our Development Process
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                A proven step-by-step process focused on quality, speed, and reliable delivery.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: '01', title: 'Discovery & Research', desc: 'We analyze your business goals, review system requirements, and set clear milestones.' },
                { num: '02', title: 'Architecture & Strategy', desc: 'Selecting the optimal database structure, frontend frameworks, and cloud infrastructure for scale.' },
                { num: '03', title: 'UI/UX Design', desc: 'Creating clean visual prototypes and responsive layouts for your team to review.' },
                { num: '04', title: 'Agile Development', desc: 'Writing modular code in transparent sprints with live staging links for direct testing.' },
                { num: '05', title: 'QA & Security Testing', desc: 'Rigorous automated and manual testing to ensure edge cases are handled and data is secure.' },
                { num: '06', title: 'Deployment & Support', desc: 'Zero-downtime deployment to cloud servers, followed by ongoing retainer support and maintenance.' },
              ].map((step, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 block mb-3">{step.num}</span>
                      <h3 className="text-lg font-bold text-slate-950 mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. INDUSTRIES WE SERVE */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Domains
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Industries We Serve
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Tailored digital engineering for diverse commercial sectors.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
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
                  <AnimatedSection key={i} delay={i * 0.03}>
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 text-center hover:border-slate-300 transition-colors shadow-2xs flex flex-col items-center gap-2">
                      <Icon className="w-5 h-5 text-blue-600" strokeWidth={1.75} />
                      <span className="font-semibold text-xs text-slate-900">{industry.name}</span>
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
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80">
          <div className="max-w-[840px] mx-auto">
            
            <AnimatedSection className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Everything you need to know about our engineering process, scopes, and timelines.
              </p>
            </AnimatedSection>

            <div className="space-y-3.5">
              {faqData.map((faq, fIdx) => (
                <AnimatedSection key={fIdx} delay={fIdx * 0.03}>
                  <div className="rounded-2xl border border-slate-200/80 bg-white shadow-2xs hover:border-slate-300 transition-colors overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                      className="w-full p-5 sm:p-6 text-left flex justify-between items-center font-bold text-base sm:text-lg text-slate-950 cursor-pointer hover:text-blue-600 transition-colors group"
                    >
                      <span className="tracking-tight pr-4">{faq.question}</span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${openFaq === fIdx ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === fIdx ? 'rotate-180' : ''}`} />
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {openFaq === fIdx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                        >
                          <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base font-normal text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
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
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Explore ProstoLabs
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
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
                <AnimatedSection key={cIdx} delay={cIdx * 0.05}>
                  <Link
                    to={card.link}
                    className="p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between h-full group cursor-pointer"
                  >
                    <div className="space-y-3.5">
                      <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-2xs">
                        <card.icon size={20} strokeWidth={1.75} />
                      </div>
                      <h4 className="text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-slate-100 flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600">
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
        {/* 8. FINAL CALL TO ACTION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-950 text-white text-center">
          <div className="max-w-[760px] mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to launch <span className="text-blue-400">your project?</span>
            </h2>
            <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed font-normal">
              Partner with ProstoLabs to design and deploy custom software, web apps, or AI tools. Get a clear project proposal today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Link to="/start-project" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto h-12 px-7 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
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