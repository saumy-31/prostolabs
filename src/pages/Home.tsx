import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { 
  Code, Palette, Bot, LineChart, Settings, 
  Briefcase, Zap, Layers, Heart, MessageSquare,
  ArrowRight, ChevronDown, Activity, Target, 
  ShoppingBag, Cloud, Database, Server, 
  Sparkles, Layout, BarChart3, MousePointer2
} from 'lucide-react'

// --- FAQ Accordion Component ---
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-medium group-hover:text-accent transition-colors">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-accent" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-gray-500 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const Home = () => {
  // --- Hero Mouse Parallax Configuration ---
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e
    const { width, height, left, top } = currentTarget.getBoundingClientRect()
    mouseX.set((clientX - left) / width - 0.5)
    mouseY.set((clientY - top) / height - 0.5)
  }

  const springConfig = { stiffness: 70, damping: 20, bounce: 0 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])
  
  const translateXBase = useTransform(springX, [-0.5, 0.5], [-15, 15])
  const translateYBase = useTransform(springY, [-0.5, 0.5], [-15, 15])
  
  const translateXFloat1 = useTransform(springX, [-0.5, 0.5], [30, -30])
  const translateYFloat1 = useTransform(springY, [-0.5, 0.5], [30, -30])
  
  const translateXFloat2 = useTransform(springX, [-0.5, 0.5], [-40, 40])
  const translateYFloat2 = useTransform(springY, [-0.5, 0.5], [-40, 40])

  return (
    <>
      <SEO 
        title="ProstoLabs | Premium Web Development, AI & Digital Solutions"
        description="ProstoLabs builds premium websites, AI solutions, UI/UX experiences, and digital products that help businesses grow through modern technology."
        path="/"
        keywords="ProstoLabs, Web Development, AI Solutions, UI UX Design, Digital Marketing, Software Company, Technology Agency, India"
      />
      <div className="overflow-hidden bg-background">
        
        {/* 1. HERO SECTION */}
        <section 
          onMouseMove={handleMouseMove}
          className="relative flex justify-center px-6 pt-6 lg:pt-10 pb-16 lg:pb-12 overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start relative z-10">
            
            <div className="text-left mt-0 lg:mt-4">
              <motion.div
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gray-100 text-sm font-medium mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Empowering Global Enterprises
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-6"
              >
                Building Digital <br className="hidden md:block" />
                Experiences That <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">Drive Business.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, filter: 'blur(10px)' }}
                animate={{ opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-500 max-w-xl mb-10 leading-relaxed"
              >
                We design and build modern digital experiences that help businesses grow, innovate, and stay ahead in an ever-evolving digital world.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link to="/start-project" className="w-full sm:w-auto"><Button size="lg" className="w-full">Start a Project</Button></Link>
                <Link to="/services" className="w-full sm:w-auto"><Button variant="secondary" size="lg" className="w-full">Explore Services</Button></Link>
              </motion.div>
            </div>

            {/* FIX: Reduced lg:h-[600px] to lg:h-[480px] to remove the invisible dead zone */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[480px] flex items-center justify-center perspective-[1200px] hidden sm:flex mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 blur-3xl rounded-full scale-75 opacity-70" />
              
              <motion.div
                style={{ rotateX, rotateY, x: translateXBase, y: translateYBase }}
                initial={{ opacity: 0, scale: 0.9, filter: 'blur(15px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 w-full max-w-[500px] aspect-[4/3] bg-white/70 backdrop-blur-2xl border border-white rounded-2xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] flex overflow-hidden transform-style-3d"
              >
                <div className="w-16 sm:w-48 bg-surface/50 border-r border-gray-100 flex flex-col items-center sm:items-start p-4 gap-6">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center sm:w-full sm:justify-start sm:px-2 gap-2">
                    <Layout className="w-4 h-4 text-primary" />
                    <span className="hidden sm:block text-xs font-semibold">Dashboard</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center sm:w-full sm:justify-start sm:px-2 gap-2 opacity-50">
                    <Database className="w-4 h-4 text-primary" />
                    <span className="hidden sm:block text-xs font-semibold">Database</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center sm:w-full sm:justify-start sm:px-2 gap-2 opacity-50">
                    <Server className="w-4 h-4 text-primary" />
                    <span className="hidden sm:block text-xs font-semibold">Server</span>
                  </div>
                </div>

                <div className="flex-1 p-6 flex flex-col gap-6 bg-white/40">
                  <div className="flex justify-between items-center w-full">
                    <div className="w-24 h-4 bg-gray-200 rounded-full" />
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                  </div>

                  <div className="bg-[#111111] rounded-xl p-4 shadow-inner text-[10px] sm:text-xs font-mono leading-relaxed overflow-hidden">
                    <div className="flex gap-1.5 mb-3">
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-700" />
                    </div>
                    <span className="text-[#FF7B72]">export const</span> <span className="text-[#79C0FF]">SystemArchitecture</span> <span className="text-white">=</span> <span className="text-[#D2A8FF]">()</span> <span className="text-[#FF7B72]">{`=>`}</span> <span className="text-[#D2A8FF]">{`{`}</span><br/>
                    &nbsp;&nbsp;<span className="text-[#FF7B72]">return</span> <span className="text-[#8B949E]">(</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EE787]">&lt;EnterpriseScale</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">users</span>=<span className="text-[#A5D6FF]">"1,000,000+"</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#79C0FF]">latency</span>=<span className="text-[#A5D6FF]">"&lt;10ms"</span><br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#7EE787]">/&gt;</span><br/>
                    &nbsp;&nbsp;<span className="text-[#8B949E]">)</span><br/>
                    <span className="text-[#D2A8FF]">{`}`}</span>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <div className="flex-1 h-20 bg-surface rounded-xl border border-gray-100 flex items-end p-2 gap-1.5">
                      {[40, 70, 45, 90, 65, 80].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                          className="flex-1 bg-primary/10 rounded-t-sm"
                        />
                      ))}
                    </div>
                    <div className="w-20 h-20 bg-accent/10 rounded-xl border border-accent/20 flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                style={{ x: translateXFloat1, y: translateYFloat1 }}
                initial={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                className="absolute top-10 right-0 lg:-right-8 z-20 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Conversion Rate</p>
                  <p className="text-lg font-bold text-primary">+42.8%</p>
                </div>
              </motion.div>

              <motion.div
                style={{ x: translateXFloat2, y: translateYFloat2 }}
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
                className="absolute bottom-16 left-0 lg:-left-12 z-30 bg-primary text-white p-4 rounded-xl shadow-2xl border border-gray-800 flex items-center gap-3"
              >
                <Bot className="w-5 h-5 text-accent" />
                <div>
                  <p className="text-sm font-semibold">AI Workflow Active</p>
                  <p className="text-xs text-gray-400">Processing 12k tasks/s</p>
                </div>
              </motion.div>

              <motion.div
                style={{ x: translateXBase, y: translateYBase }}
                animate={{ x: [0, 150, 50, 0], y: [0, -100, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/3 z-40 text-black pointer-events-none drop-shadow-md"
              >
                <MousePointer2 className="w-6 h-6 fill-white" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT PROSTOLABS */}
        {/* FIX: Tightened the top padding to pull the section up */}
        <section className="pt-16 lg:pt-12 pb-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <AnimatedSection>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-tight">
                  Building technology that drives  <span className="text-accent">businesses grow.</span>
                </h2>
                <p className="text-xl text-gray-500 mb-8 leading-relaxed">
                  ProstoLabs helps businesses build modern digital products through design, engineering, AI, and innovation. We create scalable solutions that deliver real business value.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Target className="w-5 h-5 text-accent"/> Our Mission</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">To build innovative digital solutions that help businesses grow.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2"><Activity className="w-5 h-5 text-accent"/> Our Vision</h4>
                    <p className="text-gray-500 text-sm leading-relaxed"> To become a trusted global technology company known for quality, innovation, and impact.</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="relative aspect-square rounded-3xl overflow-hidden bg-surface border border-gray-100 flex items-center justify-center group shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="ProstoLabs Engineering Team" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* 3. SERVICES */}
        <section className="py-24 px-6 bg-primary text-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-20 md:flex justify-between items-end">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Expertise built on precision.</h2>
                <p className="text-xl text-gray-400">End-to-end capabilities tailored for modern enterprises.</p>
              </div>
              <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-medium">
                View All Services <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Website Development', icon: Code, desc: 'Production-ready, scalable architectures utilizing modern React frameworks.' },
                { title: 'UI/UX Design', icon: Palette, desc: 'Interfaces that blend utility with elegance, focused entirely on user conversion.' },
                { title: 'AI & Machine Learning', icon: Bot, desc: 'Custom LLMs and predictive analytics tailored to your proprietary data.' },
                { title: 'Digital Marketing', icon: LineChart, desc: 'Data-driven growth strategies, SEO, and technical performance optimization.' },
                { title: 'Business Automation', icon: Settings, desc: 'Algorithmic workflows that eliminate manual operational bottlenecks.' },
              ].map((service, i) => (
                <AnimatedSection key={service.title} delay={i * 0.1} className={i === 4 ? "md:col-span-2 lg:col-span-1" : ""}>
                  <div className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer h-full">
                    <service.icon className="w-10 h-10 text-accent mb-8 transition-transform duration-500 group-hover:-translate-y-2" />
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE PROSTOLABS */}
        <section className="py-24 px-6 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">The ProstoLabs Advantage</h2>
              <p className="text-xl text-gray-500">We don't just take orders. We act as your strategic technical partner.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {[
                { icon: Briefcase, title: 'Business-First Approach', text: 'We analyze your business model before writing a single line of code to ensure positive ROI.' },
                { icon: Layers, title: 'Modern Technology Stack', text: 'We exclusively use bleeding-edge, production-tested frameworks to guarantee longevity.' },
                { icon: Cloud, title: 'Scalable Architecture', text: 'Infrastructure designed to handle your growth from 100 to 1,000,000 active users.' },
                { icon: Zap, title: 'Performance Focused', text: 'Milliseconds matter. We optimize for perfect Lighthouse scores and instantaneous load times.' },
                { icon: Heart, title: 'Long-Term Partnership', text: 'We maintain, scale, and iterate on your product long after the initial launch date.' },
                { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct access to your lead engineers and designers. No account manager middle-men.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-background border border-gray-100 shadow-sm flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OUR PROCESS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Engineering Lifecycle</h2>
              <p className="text-xl text-gray-500">A meticulously refined process ensuring flawless delivery.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Discover', desc: 'Requirements gathering and feasibility analysis.' },
                { step: '02', title: 'Strategy', desc: 'Architecture planning and technical documentation.' },
                { step: '03', title: 'Design', desc: 'Wireframing, prototyping, and high-fidelity UI.' },
                { step: '04', title: 'Development', desc: 'Agile sprints with clean, modular coding.' },
                { step: '05', title: 'Testing', desc: 'Rigorous QA, security, and performance audits.' },
                { step: '06', title: 'Launch', desc: 'Zero-downtime deployment and CI/CD setup.' },
                { step: '07', title: 'Support', desc: 'Ongoing maintenance, scaling, and feature iterations.' },
              ].map((phase, i) => (
                <AnimatedSection key={phase.step} delay={i * 0.1}>
                  <div className="pt-8 border-t border-gray-200 relative group">
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
                    <span className="text-sm font-bold text-accent mb-4 block">{phase.step}</span>
                    <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                    <p className="text-gray-500">{phase.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 6. TECHNOLOGIES & INDUSTRIES (Split Grid) */}
        <section className="py-24 px-6 bg-surface overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-10">Technologies We Master</h2>
              <div className="flex flex-wrap gap-3">
                {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Python', 'OpenAI API', 'GraphQL', 'PostgreSQL', 'Figma', 'AWS'].map((tech) => (
                  <span key={tech} className="px-5 py-3 rounded-full bg-background border border-gray-100 text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl font-bold mb-10">Industries We Serve</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Healthcare', icon: Heart },
                  { name: 'SaaS', icon: Cloud },
                  { name: 'E-commerce', icon: ShoppingBag },
                  { name: 'Finance', icon: Activity },
                  { name: 'Startups', icon: Zap },
                  { name: 'Education', icon: Target },
                ].map((industry) => (
                  <div key={industry.name} className="p-6 rounded-2xl bg-background border border-gray-100 text-center hover:bg-primary hover:text-white transition-all duration-300 group">
                    <industry.icon className="w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-accent transition-colors" />
                    <span className="font-semibold text-sm">{industry.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="relative rounded-[3rem] overflow-hidden bg-primary text-white text-center py-24 px-6 md:px-12">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9zdmc+')] opacity-50 mix-blend-overlay" />
              
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Let's Build Something <br/> <span className="text-accent">Extraordinary.</span></h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Ready to transform your digital presence? Partner with ProstoLabs to architect the future of your business.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link to="/start-project">
                    <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">Start Your Project</Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white">Contact Sales</Button>
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