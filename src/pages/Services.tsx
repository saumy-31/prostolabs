import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Helmet } from 'react-helmet-async'
import { 
  Code, Palette, Bot, Settings, LineChart, CheckCircle2,
  ChevronDown, Wrench, Sparkles, ArrowRight, ShieldCheck,
  Globe, Heart, Cloud, ShoppingBag, Activity, Target, Zap, Cpu
} from 'lucide-react'

// --- SAAS EASING CURVE ---
const easeSaaS = [0.16, 1, 0.3, 1] as const

const servicesData = [
  {
    id: 'web',
    title: 'Web & Software Development',
    icon: Code,
    desc: 'We design and code fast, custom web applications and business websites. Every project is built for high speed, easy navigation, and seamless scaling as your client base expands.',
    bullets: [
      'Custom Web Applications & Portals',
      'Modern High-Conversion Websites',
      'E-commerce Storefronts',
      'Content Management Systems (CMS)',
      'API & Third-Party Integrations',
      'Ongoing Technical Scaling'
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX & Product Design',
    icon: Palette,
    desc: 'Great design makes software easy to use. We create clean, intuitive visual layouts that guide visitors naturally and make it simple for them to take action.',
    bullets: [
      'Interactive Visual Prototypes',
      'User Experience Design',
      'Mobile & Web Screen Wireframes',
      'Brand & Design Systems',
      'Conversion Layout Tuning',
      'User Journey Mapping'
    ]
  },
  {
    id: 'ai',
    title: 'AI & Smart Automations',
    icon: Bot,
    desc: 'Save operational hours by letting intelligent algorithms handle routine tasks. We integrate custom AI assistants, automated lead routers, and smart chatbots into your business software.',
    bullets: [
      'Custom AI Chatbot Integration',
      'Internal Knowledge Assistants',
      'Automated Support Ticket Routing',
      'OpenAI & LLM Setup',
      'Document & Data Extraction',
      'Custom AI Workflows'
    ]
  },
  {
    id: 'marketing',
    title: 'SEO & Growth Strategy',
    icon: LineChart,
    desc: 'Attract qualified visitors to your business. We handle search engine optimization and technical site tuning so Google ranks your products at the top.',
    bullets: [
      'Technical SEO Audits & Setup',
      'Search Engine Ranking Strategy',
      'Page Speed & Performance Tuning',
      'Conversion Rate Optimization',
      'Lead Generation Workflows',
      'Analytics & Tracking Setup'
    ]
  },
  {
    id: 'automation',
    title: 'Business Workflow Automation',
    icon: Settings,
    desc: 'Eliminate manual data entry between separate apps. We connect your software tools directly to your CRM, forms, and email systems to keep data in sync automatically.',
    bullets: [
      'Cross-App Data Syncing',
      'Custom CRM & Form Integrations',
      'Automated Lead Notifications',
      'Automated Invoicing Workflows',
      'Custom Reporting Dashboards',
      'Operational Efficiency Scaling'
    ]
  },
  {
    id: 'maintenance',
    title: 'Website & Product Maintenance',
    icon: Wrench,
    desc: 'Keep your digital assets secure, updated, and running without downtime. We monitor server uptime 24/7, apply critical security patches, and issue instant bug fixes.',
    bullets: [
      '24/7 Uptime & Server Monitoring',
      'Security Updates & SSL Patching',
      'Speed Optimization & Backups',
      'Regular Code Updates',
      'Database Backup & Recovery',
      'Dedicated Technical Support'
    ]
  }
]

export const Services = () => {
  // --- SEO Schema Configuration ---
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ProstoLabs Digital Services",
    "provider": {
      "@type": "Organization",
      "name": "ProstoLabs",
      "url": "https://prostolabs.com/"
    },
    "description": "Technology services including web application development, AI integrations, UI/UX design, and business automation.",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Worldwide"
    }
  };

  const containerRef = useRef<HTMLDivElement>(null)
  const servicesSectionRef = useRef<HTMLElement>(null)
  const location = useLocation()
  
  const [expandedService, setExpandedService] = useState<string | null>(null)
  
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
        description="Explore ProstoLabs' services including custom web development, AI automations, UI/UX design, business workflow automation, and maintenance."
        path="/services"
      />
      
      {/* Schema Markup Injection */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="relative bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900 overflow-hidden" ref={containerRef}>
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden">
          <div className="max-w-[1100px] mx-auto text-center relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>Capabilities & Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                Technology Solutions Built to <br className="hidden md:block" />
                <span className="text-[#2563EB]">Grow Your Business.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                We design and build fast websites, mobile apps, custom web software, and AI automations tailored to your goals.
              </p>
              <Link to="/start-project">
                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: "#1D4ED8" }}
                  whileTap={{ scale: 0.98 }}
                  className="h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-lg shadow-blue-500/25 inline-flex items-center gap-2 cursor-pointer transition-all"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </motion.button>
              </Link>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. EXPANDABLE SERVICES LIST */}
        {/* ========================================================================= */}
        <section ref={servicesSectionRef} className="py-16 md:py-24 px-6 bg-white border-y border-gray-200/80 scroll-mt-20">
          <div className="max-w-[1100px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Our Capabilities
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Click any service below to explore features and deliverables.
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
                          <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] font-sans">{service.title}</h3>
                        </div>
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center transition-transform ${
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
                            transition={{ duration: 0.3, ease: easeSaaS }}
                          >
                            <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-gray-100">
                              <p className="text-sm sm:text-base text-[#6B7280] mb-8 leading-relaxed font-medium">
                                {service.desc}
                              </p>
                              
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                {service.bullets.map((bullet, idx) => (
                                  <div key={idx} className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0" />
                                    <span className="text-xs sm:text-sm text-[#0A0A0A] font-semibold font-sans">{bullet}</span>
                                  </div>
                                ))}
                              </div>
                              
                              <Link to="/start-project" onClick={(e) => e.stopPropagation()}>
                                <motion.button 
                                  whileHover={{ scale: 1.01 }}
                                  whileTap={{ scale: 0.99 }}
                                  className="h-11 px-6 rounded-xl bg-[#2563EB] text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer"
                                >
                                  <span>Start Your Project</span>
                                  <ArrowRight size={14} />
                                </motion.button>
                              </Link>
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
        {/* 3. OUR DEVELOPMENT PROCESS (RESTORED DETAILED TIMELINE) */}
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
        {/* 4. INDUSTRIES WE SERVE */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Industries We Serve
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Tailored solutions for diverse business domains.
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
        {/* 5. FINAL CALL TO ACTION */}
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