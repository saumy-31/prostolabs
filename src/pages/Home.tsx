import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { resources } from '../data/resourcesData'
import { 
  Code, Palette, Bot, LineChart, Wrench,
  Briefcase, Zap, Layers, Heart, MessageSquare, Search, Rocket, Headphones,
  ArrowRight, Activity, Target, 
  ShoppingBag, Cloud,
  Sparkles, ShieldCheck, Smartphone, Clock,
  ChevronRight, CheckCircle2, ArrowUpRight
} from 'lucide-react'

export const Home: React.FC = () => {
  const latestArticles = resources.slice(0, 3)
  const featuredArticle = latestArticles[0]
  const secondaryArticles = latestArticles.slice(1, 3)

  const [activeServiceIndex, setActiveServiceIndex] = useState<number>(0)

  // Real 6 Services
  const services = [
    {
      num: '01',
      title: 'Web Applications & Portals',
      desc: 'Custom web portals, SaaS platforms, and enterprise dashboards built for speed.',
      icon: Code,
      tags: ['Web Portals', 'SaaS Platforms', 'Dashboards']
    },
    {
      num: '02',
      title: 'Mobile App Development',
      desc: 'Cross-platform iOS and Android mobile applications with smooth native performance.',
      icon: Smartphone,
      tags: ['iOS', 'Android', 'Cross-Platform']
    },
    {
      num: '03',
      title: 'AI & Machine Learning',
      desc: 'Custom AI chatbots, intelligent workflows, and data automations for your business.',
      icon: Bot,
      tags: ['AI Chatbots', 'Workflow Automation', 'Data Tools']
    },
    {
      num: '04',
      title: 'UI/UX & Product Design',
      desc: 'Intuitive visual layouts designed to guide users seamlessly from start to finish.',
      icon: Palette,
      tags: ['UX Research', 'Visual Design', 'Prototypes']
    },
    {
      num: '05',
      title: 'SEO & Performance',
      desc: 'Technical speed optimization and search configuration to maximize discoverability.',
      icon: LineChart,
      tags: ['Speed Tuning', 'Search Indexing', 'Core Vitals']
    },
    {
      num: '06',
      title: 'Maintenance & Product Care',
      desc: '24/7 server monitoring, security updates, and continuous feature updates.',
      icon: Wrench,
      tags: ['Server Monitoring', 'Security Patches', 'Feature Updates']
    }
  ]

  // Real 6 Process Steps
  const processSteps = [
    { step: '01', title: 'Discover', desc: 'Understand the business, users and goals.', icon: Search },
    { step: '02', title: 'Plan', desc: 'Define the product structure, technology and roadmap.', icon: Target },
    { step: '03', title: 'Design', desc: 'Create the UX/UI and visual system.', icon: Palette },
    { step: '04', title: 'Build', desc: 'Develop and integrate the product.', icon: Code },
    { step: '05', title: 'Launch', desc: 'Test, deploy and optimize.', icon: Rocket },
    { step: '06', title: 'Grow', desc: 'Maintain, improve and scale.', icon: Headphones }
  ]

  // Real 6 Partner Reasons
  const partnerReasons = [
    { num: '01', icon: Briefcase, title: 'Value-Driven Engineering', desc: 'Every product feature is built with clear ROI and user conversion in mind.' },
    { num: '02', icon: Zap, title: 'High-Speed Architecture', desc: 'Optimized code structures ensuring near-instantaneous load times on all devices.' },
    { num: '03', icon: Layers, title: 'Scalable Cloud Setup', desc: 'Built to support growth effortlessly from early adopters to thousands of active users.' },
    { num: '04', icon: MessageSquare, title: 'Direct Developer Access', desc: 'Work directly with your engineers and designers without agency middlemen.' },
    { num: '05', icon: ShieldCheck, title: 'Enterprise Security', desc: 'Built-in SSL encryption, secure API integrations, and data protection standards.' },
    { num: '06', icon: Heart, title: 'Long-Term Partnership', desc: 'We maintain, scale, and update your product long after the initial deployment.' }
  ]

  // Real Tech Stack
  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 
    'Framer Motion', 'Python', 'OpenAI API', 'GraphQL', 
    'PostgreSQL', 'Figma', 'AWS'
  ]

  // Real Industries
  const industries = [
    { name: 'Healthcare', icon: Heart },
    { name: 'SaaS', icon: Cloud },
    { name: 'E-commerce', icon: ShoppingBag },
    { name: 'Finance', icon: Activity },
    { name: 'Startups', icon: Zap },
    { name: 'Education', icon: Target }
  ]

  const ActiveIcon = services[activeServiceIndex].icon

  return (
    <>
      <SEO 
        title="ProstoLabs | Web Development, AI & Digital Solutions"
        description="ProstoLabs engineers custom web applications, mobile apps, AI automations, and UI/UX design to help businesses innovate and grow."
        path="/"
      />

      <div className="relative w-full overflow-x-clip bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-600">
        
        {/* Subtle Ambient Grid Layer */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 top-0 h-[800px] w-full bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-0 right-0 h-[800px] bg-[linear-gradient(to_right,#E2E8F040_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F040_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-16 sm:pb-24">
          <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 text-left space-y-6 z-10">
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-semibold text-blue-600"
              >
                <Sparkles size={14} className="text-blue-600" />
                <span>Web Apps, AI & Digital Solutions</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-[38px] sm:text-[52px] md:text-[62px] lg:text-[68px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950"
              >
                Modern Digital Products Built to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                  Grow Your Business.
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal"
              >
                We design and engineer high-performance web applications, mobile software, AI integrations, and custom platforms tailored to your business goals.
              </motion.p>
              
              {/* Refined Button Row */}
              <motion.div 
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
              >
                <Link to="/start-project" className="w-full sm:w-auto">
                  <button className="group w-full sm:w-auto h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all">
                    <span>Start Your Project</span>
                    <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </Link>
                
                <Link to="/services" className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto h-12 px-7 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm sm:text-base border border-slate-200 shadow-xs transition-colors cursor-pointer flex items-center justify-center">
                    Explore Solutions
                  </button>
                </Link>
              </motion.div>

              {/* Verified Trust Strip */}
              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-medium text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  <span>Production-Grade Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={15} className="text-blue-600" />
                  <span>Direct Senior Engineers</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Product Card (5 Cols) */}
            <div className="lg:col-span-5 relative w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="w-full max-w-[480px] rounded-2xl bg-[#0B1121] border border-slate-800 shadow-xl p-5 sm:p-6 text-white space-y-5 transform-gpu"
              >
                {/* Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-800">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <ShieldCheck size={14} className="text-emerald-400" />
                    <span>prostolabs.com</span>
                  </div>
                </div>

                {/* Dashboard Visualization */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-3.5 w-2/3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md" />
                    <div className="h-2.5 w-5/6 bg-white/10 rounded-md" />
                    <div className="h-2.5 w-1/2 bg-white/5 rounded-md" />
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-1.5 text-xs text-blue-400 font-semibold">
                        <Code size={14} /> Web Platforms
                      </div>
                      <p className="text-xs text-slate-400">Clean Codebase</p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold">
                        <Bot size={14} /> AI Automations
                      </div>
                      <p className="text-xs text-slate-400">Custom Workflows</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Production Ready
                  </span>
                  <span>ProstoLabs Studio</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. ABOUT PROSTOLABS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-y border-slate-200/80">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <AnimatedSection>
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                    About ProstoLabs
                  </span>
                  
                  <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight mt-1">
                    We build digital products that <span className="text-blue-600">scale your business.</span>
                  </h2>
                  
                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    From custom web applications and mobile software to AI automations and websites, we create technology built around your exact operational goals.
                  </p>
                  
                  <div className="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                        <Target size={16} className="text-blue-600" /> Our Mission
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Deliver reliable software and digital tools that increase efficiency and revenue.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-slate-300 transition-colors">
                      <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                        <Activity size={16} className="text-blue-600" /> Our Vision
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Be a premier global technology partner for ambitious, forward-thinking businesses.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:col-span-7">
                <AnimatedSection delay={0.1}>
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md group aspect-[16/10]">
                    <img 
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                      alt="ProstoLabs Team working together" 
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-between">
                      <div>
                        <p className="text-xs font-mono uppercase tracking-wider text-blue-300">Engineering Studio</p>
                        <p className="font-bold text-sm text-white mt-0.5">High-Velocity Collaboration</p>
                      </div>
                      <Link to="/about" className="inline-flex items-center gap-1 text-xs font-bold text-blue-300 hover:text-white transition-colors">
                        <span>Our Studio Culture</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CAPABILITIES / SERVICES */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white relative">
          <div className="max-w-[1280px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Technology solutions for modern growth.
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                End-to-end digital engineering tailored to your industry.
              </p>
            </AnimatedSection>

            {/* Mobile View: High-Quality Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.num} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 shadow-xs">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon size={20} />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">{service.num}</span>
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{service.title}</h3>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed">{service.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Desktop View: Interactive Split */}
            <div className="hidden lg:grid grid-cols-12 gap-10 items-start">
              <div className="col-span-6 divide-y divide-slate-200 border-y border-slate-200">
                {services.map((service, index) => {
                  const isActive = activeServiceIndex === index
                  return (
                    <div 
                      key={service.num}
                      onClick={() => setActiveServiceIndex(index)}
                      onMouseEnter={() => setActiveServiceIndex(index)}
                      className={`py-5 cursor-pointer transition-all flex items-center justify-between group ${
                        isActive ? 'text-slate-950 font-bold' : 'text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      <div className="flex items-baseline gap-4">
                        <span className={`text-xs font-mono font-bold ${isActive ? 'text-blue-600' : 'text-slate-400'}`}>
                          {service.num}
                        </span>
                        <h3 className="text-lg font-bold tracking-tight">{service.title}</h3>
                      </div>
                      <ArrowRight 
                        size={16} 
                        className={`transition-transform duration-200 ${
                          isActive ? 'text-blue-600 translate-x-1 opacity-100' : 'opacity-0 text-slate-400'
                        }`} 
                      />
                    </div>
                  )
                })}
              </div>

              <div className="col-span-6 sticky top-28">
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-xs">
                    <ActiveIcon size={24} />
                  </div>

                  <div>
                    <span className="text-xs font-mono font-bold text-blue-600">Service {services[activeServiceIndex].num}</span>
                    <h4 className="text-2xl font-bold text-slate-950 mt-1 mb-2">
                      {services[activeServiceIndex].title}
                    </h4>
                    <p className="text-base text-slate-600 leading-relaxed">
                      {services[activeServiceIndex].desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {services[activeServiceIndex].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200">
                    <Link to="/services" className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors">
                      <span>Explore Full Capabilities</span>
                      <ChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. WHY CHOOSE PROSTOLABS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1280px] mx-auto">
            
            <div className="max-w-2xl mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                Why companies partner with <span className="text-blue-600">ProstoLabs</span>
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                We handle design, code, security, and cloud infrastructure so you can scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerReasons.map((item, i) => (
                <AnimatedSection key={item.num} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-blue-600">{item.num}</span>
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                          <item.icon size={16} />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PROCESS SECTION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white" id="process">
          <div className="max-w-[1280px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                The Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                A transparent path to launch.
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                We follow a rigorous, high-speed engineering process to turn your concept into a market-ready product.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {processSteps.map((phase, i) => {
                const StepIcon = phase.icon
                return (
                  <AnimatedSection key={phase.step} delay={i * 0.05}>
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-mono font-bold text-blue-600">{phase.step}</span>
                          <StepIcon size={16} className="text-slate-400" />
                        </div>
                        <h3 className="text-base font-bold text-slate-950 mb-1.5">{phase.title}</h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{phase.desc}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                )
              })}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. TECHNOLOGIES & INDUSTRIES */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-t border-slate-200/80">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-6">
              <AnimatedSection>
                <h3 className="text-2xl font-bold text-slate-950 mb-5">Technologies We Master</h3>
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-4 py-2 rounded-xl bg-white border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-800 shadow-2xs hover:border-blue-300 transition-colors select-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-6">
              <AnimatedSection delay={0.1}>
                <h3 className="text-2xl font-bold text-slate-950 mb-5">Industries We Serve</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {industries.map((ind) => (
                    <div 
                      key={ind.name} 
                      className="p-4 rounded-xl bg-white border border-slate-200/90 text-center shadow-2xs flex flex-col items-center gap-2 hover:border-slate-300 transition-colors"
                    >
                      <ind.icon className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-xs text-slate-800">{ind.name}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INSIGHTS / BLOG */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80">
          <div className="max-w-[1280px] mx-auto">
            
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">From Our Journal</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                  Latest Insights & Guides
                </h2>
              </div>
              <Link to="/resources" className="shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors">
                  View All Resources <ArrowRight size={14} />
                </span>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {featuredArticle && (
                <AnimatedSection className="lg:col-span-7">
                  <Link 
                    to={`/resources/${featuredArticle.slug}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 p-6 hover:border-slate-300 transition-colors"
                  >
                    <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-200 mb-5 relative">
                      <img 
                        src={featuredArticle.thumbnail} 
                        alt={featuredArticle.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                      />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-md bg-white text-xs font-bold text-slate-900 shadow-xs">
                        {featuredArticle.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <span>{featuredArticle.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {featuredArticle.readingTime}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-sm text-slate-600 leading-relaxed mb-4 font-normal">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="mt-auto flex items-center gap-1 text-xs font-bold text-blue-600">
                      <span>Read Full Story</span>
                      <ArrowRight size={13} />
                    </div>
                  </Link>
                </AnimatedSection>
              )}

              <div className="lg:col-span-5 flex flex-col gap-4">
                {secondaryArticles.map((art, i) => (
                  <AnimatedSection key={art.slug} delay={i * 0.08} className="flex-1">
                    <Link 
                      to={`/resources/${art.slug}`}
                      className="group flex flex-col sm:flex-row gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors h-full"
                    >
                      <div className="w-full sm:w-36 aspect-[16/10] sm:aspect-square rounded-lg overflow-hidden bg-slate-200 shrink-0 relative">
                        <img 
                          src={art.thumbnail} 
                          alt={art.title} 
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex flex-col justify-between flex-1">
                        <div>
                          <span className="text-[11px] font-semibold text-slate-400">{art.category}</span>
                          <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mt-1 mb-2">
                            {art.title}
                          </h4>
                        </div>
                        <span className="text-xs font-bold text-blue-600 inline-flex items-center gap-1">
                          Read Article <ChevronRight size={12} />
                        </span>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 8. FINAL CTA */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-950 text-white text-center">
          <div className="max-w-[760px] mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Ready to build your next <span className="text-blue-400">digital product?</span>
            </h2>

            <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed">
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