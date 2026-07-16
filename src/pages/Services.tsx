import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { 
  Code, Palette, Bot, Settings, LineChart, CheckCircle2,
  ChevronDown, Wrench
} from 'lucide-react'

const servicesData = [
  {
    id: 'web',
    title: 'Web Development',
    icon: Code,
    desc: 'We construct robust, high-performance web applications using modern, production-tested frameworks. Our codebases are strictly typed, aggressively optimized for speed, and architected to scale seamlessly as your user base expands.',
    bullets: [
      'Custom Business Websites',
      'Enterprise Web Applications',
      'Headless E-commerce Solutions',
      'CMS Development & Migration',
      'Third-Party API Integrations',
      'Ongoing Maintenance & Scaling'
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX & Product Design',
    icon: Palette,
    desc: 'Design is the fundamental bridge between your software and your user. We craft intuitive, frictionless interfaces anchored in psychological principles to maximize user retention and conversion metrics.',
    bullets: [
      'High-Fidelity Prototyping',
      'User Interface Design',
      'User Experience Research',
      'Comprehensive Design Systems',
      'Wireframing & Journey Mapping',
      'Interactive Micro-Animations'
    ]
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    icon: Bot,
    desc: 'Stop doing manual work that an algorithm can handle. We integrate custom Large Language Models (LLMs) and predictive machine learning architectures directly into your proprietary data workflows to automate tasks and extract insights.',
    bullets: [
      'Custom LLM Integration',
      'Internal Knowledge Chatbots',
      'Predictive Data Analytics',
      'Automated Support Routing',
      'OpenAI API Implementation',
      'Algorithm Fine-Tuning'
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: LineChart,
    desc: 'Data-driven growth strategies designed to increase your digital footprint. We handle technical performance optimization to ensure your digital products reach the right enterprise buyers at exactly the right time.',
    bullets: [
      'Technical SEO Optimization',
      'Performance Marketing',
      'Conversion Rate Optimization',
      'Data Analytics & Tracking',
      'Growth Strategy Consulting',
      'B2B Lead Generation'
    ]
  },
  {
    id: 'automation',
    title: 'Business Automation',
    icon: Settings,
    desc: 'Eliminate manual, repetitive operational bottlenecks. We engineer custom algorithmic workflows that connect your disjointed software stack, saving your team thousands of manual labor hours.',
    bullets: [
      'Workflow Automation',
      'Custom ERP Integrations',
      'Cross-Platform Data Sync',
      'Automated Reporting',
      'CRM Customization',
      'Operational Scaling'
    ]
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    icon: Wrench,
    desc: 'Proactive monitoring, security patching, and continuous optimization for flawless uptime. We ensure your digital assets remain secure, highly performant, and up-to-date long after the initial launch.',
    bullets: [
      '24/7 Uptime Monitoring',
      'Security & Vulnerability Patching',
      'Performance Tuning',
      'Codebase Refactoring',
      'Regular Backups & Recovery',
      'Dedicated Technical Support'
    ]
  }
]

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const servicesSectionRef = useRef<HTMLElement>(null)
  const location = useLocation()
  
  // Starts collapsed by default
  const [expandedService, setExpandedService] = useState<string | null>(null)
  
  // Intercept the Router state when the page loads
  useEffect(() => {
    if (location.state && location.state.activeService) {
      // 1. Expand the target accordion immediately
      setExpandedService(location.state.activeService)
      
      // 2. Wait 150ms for the DOM and standard routing to settle, then glide down smoothly
      setTimeout(() => {
        servicesSectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
        
        // Clean up state so refreshing doesn't re-trigger it unnecessarily
        window.history.replaceState({}, document.title)
      }, 150)
    }
  }, [location.state])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })
  
  const progressBarHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const progressOpacity = useTransform(scrollYProgress, [0, 0.9, 0.98], [1, 1, 0])

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id)
  }

  return (
    <>
    <SEO 
      title="Our Services | Web Development, AI, UI/UX & Digital Marketing"
      description="Explore ProstoLabs' technology services including website development, AI solutions, UI/UX design, business automation, and digital marketing."
      path="/services"
    />
    <div className="relative bg-background overflow-hidden" ref={containerRef}>
      
      {/* Scroll Progress Indicator (Desktop Only) */}
      <motion.div 
        style={{ opacity: progressOpacity }}
        className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 w-[2px] h-[300px] bg-gray-100 z-50 rounded-full overflow-hidden"
      >
        <motion.div 
          className="w-full bg-accent rounded-full"
          style={{ height: progressBarHeight }}
        />
      </motion.div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-12 md:pt-16 pb-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="4" height="4" patternUnits="userSpaceOnUse">
                <path d="M 4 0 L 0 0 0 4" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 pl-0 lg:pl-12">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gray-100 text-sm font-medium mb-8">
              Capabilities & Solutions
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8">
              Engineering Digital <br className="hidden md:block" />
              Products That <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">Drive Growth.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12">
              We build modern websites, intelligent software, and AI-powered solutions that help businesses grow and operate more efficiently.
            </p>
            <Link to="/start-project">
              <Button size="lg" className="w-full sm:w-auto">Start Your Project</Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. EXPANDABLE CAPABILITIES */}
      <section ref={servicesSectionRef} className="py-24 px-6 bg-surface scroll-mt-24">
        <div className="max-w-4xl mx-auto pl-0 lg:pl-12">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h2>
            <p className="text-xl text-gray-500 max-w-2xl">Modern technology solutions tailored to your business.</p>
          </AnimatedSection>

          <div className="space-y-6">
            {servicesData.map((service, i) => {
              const isExpanded = expandedService === service.id

              return (
                <AnimatedSection key={service.id} delay={i * 0.1}>
                  <motion.div
                    layout
                    onClick={() => toggleService(service.id)}
                    className={`group cursor-pointer overflow-hidden rounded-[2rem] border transition-all duration-500 ${
                      isExpanded 
                        ? 'bg-background border-accent/30 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)]' 
                        : 'bg-background/50 border-gray-100 hover:border-gray-300 hover:shadow-lg hover:bg-background'
                    }`}
                  >
                    {/* Card Header */}
                    <motion.div layout className="p-8 md:p-10 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${
                          isExpanded ? 'bg-primary text-white' : 'bg-surface text-primary group-hover:bg-primary/5'
                        }`}>
                          <service.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold">{service.title}</h3>
                      </div>
                      <motion.div 
                        animate={{ rotate: isExpanded ? 180 : 0 }} 
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          isExpanded ? 'bg-accent/10' : 'bg-surface group-hover:bg-gray-200'
                        }`}
                      >
                        <ChevronDown className={`w-5 h-5 ${isExpanded ? 'text-accent' : 'text-gray-400 group-hover:text-primary'}`} />
                      </motion.div>
                    </motion.div>

                    {/* Card Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-8 md:px-10 pb-10 border-t border-gray-100 mt-2 pt-8">
                            <p className="text-lg text-gray-500 mb-10 max-w-3xl leading-relaxed">
                              {service.desc}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                              {service.bullets.map((bullet, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                                  <span className="text-gray-700 font-medium">{bullet}</span>
                                </div>
                              ))}
                            </div>
                            
                            <Link to="/start-project" onClick={(e) => e.stopPropagation()}>
                              <Button variant="primary">Start Your Project</Button>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. OUR PROCESS TIMELINE */}
      <section className="py-24 px-6 bg-primary text-white overflow-hidden">
        <div className="max-w-4xl mx-auto pl-0 lg:pl-12">
          <AnimatedSection className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-400">A proven process focused on quality, transparency, and reliable delivery.</p>
          </AnimatedSection>

          <div className="relative">
            <div className="absolute left-[23px] md:left-[39px] top-0 bottom-0 w-[2px] bg-white/10" />

            {[
              { num: '01', title: 'Discovery & Research', desc: 'We analyze your business model, audit existing legacy systems, and define strict KPIs for the project.' },
              { num: '02', title: 'Architecture & Strategy', desc: 'Selecting the optimal database structure, frontend frameworks, and cloud infrastructure for scale.' },
              { num: '03', title: 'UI/UX Design', desc: 'Drafting high-fidelity prototypes and establishing a cohesive design system for the development team.' },
              { num: '04', title: 'Agile Development', desc: 'Writing clean, modular code in strict two-week sprints with complete transparency and staging access.' },
              { num: '05', title: 'QA & Security Testing', desc: 'Rigorous automated and manual testing to ensure edge cases are handled and data is secure.' },
              { num: '06', title: 'Deployment & Support', desc: 'Zero-downtime CI/CD deployment to production, followed by ongoing retainer support and scaling.' },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative pl-20 md:pl-32 mb-16 last:mb-0">
                <div className="absolute left-0 top-1 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/5 border border-white/20 flex items-center justify-center font-bold text-accent text-sm md:text-xl backdrop-blur-sm z-10">
                  {step.num}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 pt-1 md:pt-4">{step.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto pl-0 lg:pl-12">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Industries We Empower</h2>
            <p className="text-xl text-gray-500">Domain expertise across diverse corporate sectors.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Healthcare', 'SaaS', 'E-Commerce', 'Finance', 'Education', 'Travel', 'Real Estate', 'Logistics', 'Startups', 'Fitness'].map((industry, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="px-6 py-8 rounded-2xl bg-surface border border-gray-100 text-center hover:bg-primary hover:text-white transition-colors duration-300 cursor-default font-semibold">
                  {industry}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA (With Mobile Padding Fixes) */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto pl-0 lg:pl-12">
          <AnimatedSection className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-primary text-white text-center py-16 md:py-24 px-6 md:px-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9zdmc+')] opacity-50 mix-blend-overlay" />
            
            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 md:mb-8">
                Ready to build something <br className="hidden sm:block"/> <span className="text-accent">exceptional?</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto">
                Schedule a technical discovery call to discuss how ProstoLabs can architect your next phase of growth.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/start-project">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">Start Your Project</Button>
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