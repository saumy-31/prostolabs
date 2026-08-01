import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { resources } from '../data/resourcesData'
import { 
  Code, Palette, Bot, LineChart, Wrench,
  Briefcase, Zap, Layers, Heart, MessageSquare, Search, Rocket, Headphones,
  ArrowRight, Activity, Target, 
  ShoppingBag, Cloud,
  Sparkles, BarChart3, ShieldCheck, Smartphone, Clock, ArrowUpRight, BookOpen
} from 'lucide-react'

// --- SAAS EASING CURVE ---
const easeSaaS = [0.16, 1, 0.3, 1] as const

export const Home = () => {
  // Get 3 latest articles for the homepage stream
  const latestArticles = resources.slice(0, 3)

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
        title="ProstoLabs | Web Development, AI & Digital Solutions"
        description="ProstoLabs engineers custom web applications, mobile apps, AI automations, and UI/UX design to help businesses innovate and grow."
        path="/"
      />

      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (UNTOUCHED - IMAGE PRESERVED) */}
        {/* ========================================================================= */}
        <section 
          onMouseMove={handleMouseMove}
          className="relative flex justify-center px-6 pt-20 sm:pt-24 pb-12 md:pb-16 overflow-hidden"
        >
          {/* Subtle Ambient Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.06)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 -mt-2 sm:-mt-4">
            
            {/* HERO TEXT COLUMN */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-4 sm:mb-5 transform-gpu"
              >
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>Web Apps, AI & Digital Solutions</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: easeSaaS }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-[#0A0A0A] mb-6 font-sans transform-gpu"
              >
                Modern Digital Products Built to <span className="text-[#2563EB]">Grow Your Business.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-xl mb-8 leading-relaxed font-medium transform-gpu"
              >
                We design and engineer high-performance web applications, mobile software, AI integrations, and custom platforms tailored to your business goals.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3.5"
              >
                <Link to="/start-project" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02, backgroundColor: "#1D4ED8" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Start Your Project</span>
                    <ArrowRight size={16} />
                  </motion.button>
                </Link>
                <Link to="/services" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-white border border-gray-200 text-[#0A0A0A] font-bold text-sm hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center"
                  >
                    Explore Solutions
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* HERO INTERACTIVE ILLUSTRATION */}
            <div className="relative w-full h-[300px] sm:h-[420px] md:h-[480px] flex items-center justify-center perspective-[1200px] mt-4 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/15 via-blue-400/10 to-cyan-400/5 blur-3xl rounded-full scale-90 opacity-70" />
              
              <motion.div
                style={{ rotateX, rotateY, x: translateXBase, y: translateYBase }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: easeSaaS }}
                className="relative z-10 w-full max-w-[500px] aspect-[4/3] bg-[#090D16] border border-gray-800 rounded-[24px] shadow-2xl p-2.5 sm:p-4 flex flex-col justify-between overflow-hidden transform-gpu"
              >
                <div className="w-full h-full bg-[#0F172A] rounded-2xl p-3 sm:p-5 flex flex-col justify-between border border-white/10 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] sm:text-xs font-mono text-gray-300 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>prostolabs.com</span>
                    </div>
                  </div>

                  <div className="space-y-3 my-auto">
                    <div className="w-3/4 h-3 bg-gradient-to-r from-blue-400 to-indigo-300 rounded-full" />
                    <div className="w-1/2 h-2.5 bg-white/40 rounded-full" />
                    <div className="w-5/6 h-2.5 bg-white/20 rounded-full" />
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
                    <div className="h-10 bg-white/5 rounded-lg p-2 flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-blue-500/50" />
                      <div className="w-10 h-1.5 bg-white/40 rounded" />
                    </div>
                    <div className="h-10 bg-white/5 rounded-lg p-2 flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-emerald-500/50" />
                      <div className="w-10 h-1.5 bg-white/40 rounded" />
                    </div>
                    <div className="h-10 bg-white/5 rounded-lg p-2 flex items-center gap-2">
                      <div className="w-3 h-3 rounded bg-amber-500/50" />
                      <div className="w-10 h-1.5 bg-white/40 rounded" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Performance Pill */}
              <motion.div
                style={{ x: translateXFloat1, y: translateYFloat1 }}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="hidden sm:flex absolute top-6 right-0 lg:-right-6 z-20 bg-white p-3.5 rounded-2xl shadow-xl border border-gray-200/90 items-center gap-3.5"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Performance Score</p>
                  <p className="text-base font-extrabold text-[#0A0A0A]">99 / 100</p>
                </div>
              </motion.div>

              {/* Floating AI Pill */}
              <motion.div
                style={{ x: translateXFloat2, y: translateYFloat2 }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="hidden sm:flex absolute bottom-8 left-0 lg:-left-6 z-30 bg-[#2563EB] text-white p-3.5 rounded-2xl shadow-xl items-center gap-3"
              >
                <Bot className="w-5 h-5 text-blue-200" />
                <div>
                  <p className="text-xs font-bold">AI Automations</p>
                  <p className="text-[10px] text-blue-100">Live Workflow Active</p>
                </div>
              </motion.div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. ABOUT PROSTOLABS SECTION (TEAM IMAGE HIDDEN ON MOBILE USING hidden md:block) */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-y border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              <AnimatedSection>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-4">
                  <span>About ProstoLabs</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-6 leading-tight font-sans">
                  We build digital products that <span className="text-[#2563EB]">scale your business.</span>
                </h2>
                <p className="text-base sm:text-lg text-[#6B7280] mb-8 leading-relaxed font-medium">
                  From custom web applications and mobile software to AI automations and websites, we create technology built around your exact operational goals.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h3 className="font-bold text-base text-[#0A0A0A] mb-1.5 flex items-center gap-2">
                      <Target className="w-5 h-5 text-[#2563EB]" /> Our Mission
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">
                      Deliver reliable software and digital tools that increase efficiency and revenue.
                    </p>
                  </div>
                  
                  <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/80">
                    <h3 className="font-bold text-base text-[#0A0A0A] mb-1.5 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-[#2563EB]" /> Our Vision
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">
                      Be a premier global technology partner for ambitious, forward-thinking businesses.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* TEAM IMAGE: Hidden on mobile (<768px) with 'hidden md:block', visible on tablet and desktop */}
              <AnimatedSection delay={0.2} className="hidden md:block">
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-gray-100 border border-gray-200/90 shadow-lg group">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="ProstoLabs Team working together" 
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. SERVICES SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <span>Core Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Technology solutions for modern growth.
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                End-to-end digital engineering tailored to your industry.
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Web Applications & Portals', icon: Code, desc: 'Custom web portals, SaaS platforms, and enterprise dashboards built for speed.' },
                { title: 'Mobile App Development', icon: Smartphone, desc: 'Cross-platform iOS and Android mobile applications with smooth native performance.' },
                { title: 'AI & Machine Learning', icon: Bot, desc: 'Custom AI chatbots, intelligent workflows, and data automations for your business.' },
                { title: 'UI/UX & Product Design', icon: Palette, desc: 'Intuitive visual layouts designed to guide users seamlessly from start to finish.' },
                { title: 'SEO & Performance', icon: LineChart, desc: 'Technical speed optimization and search configuration to maximize discoverability.' },
                { title: 'Maintenance & Product Care', icon: Wrench, desc: '24/7 server monitoring, security updates, and continuous feature updates.' },
              ].map((service, i) => (
                <AnimatedSection key={service.title} delay={i * 0.08}>
                  <div className="group p-8 rounded-[28px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <service.icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A] mb-2.5 font-sans">{service.title}</h3>
                      <p className="text-sm text-[#6B7280] leading-relaxed font-medium">{service.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link to="/services">
                <Button variant="outline" className="border-gray-300 text-[#0A0A0A] hover:bg-gray-100">
                  Explore All Capabilities <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. WHY CHOOSE PROSTOLABS SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Why companies partner with ProstoLabs
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                We handle design, code, security, and cloud infrastructure so you can scale.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Briefcase, title: 'Value-Driven Engineering', text: 'Every product feature is built with clear ROI and user conversion in mind.' },
                { icon: Zap, title: 'High-Speed Architecture', text: 'Optimized code structures ensuring near-instantaneous load times on all devices.' },
                { icon: Layers, title: 'Scalable Cloud Setup', text: 'Built to support growth effortlessly from early adopters to thousands of active users.' },
                { icon: MessageSquare, title: 'Direct Developer Access', text: 'Work directly with your engineers and designers without agency middlemen.' },
                { icon: ShieldCheck, title: 'Enterprise Security', text: 'Built-in SSL encryption, secure API integrations, and data protection standards.' },
                { icon: Heart, title: 'Long-Term Partnership', text: 'We maintain, scale, and update your product long after the initial deployment.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.08} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#0A0A0A] mb-1 font-sans">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. OUR PROCESS SECTION (PREMIUM ROADMAP) */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-32 px-6 bg-[#FAFAFA] relative overflow-hidden" id="process">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(#2563EB 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
          
          <div className="max-w-[1300px] mx-auto relative">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
              <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-4">
                <span>The Roadmap</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-4 font-sans">
                A transparent path to launch.
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium px-4">
                We follow a rigorous, high-speed engineering process to turn your concept into a market-ready product.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative">
              {[
                { step: '01', title: 'Discover', desc: 'Requirements analysis and goal setting.', icon: Search },
                { step: '02', title: 'Plan', desc: 'Architecture mapping and flow design.', icon: Target },
                { step: '03', title: 'Design', desc: 'UI/UX prototyping and visual drafting.', icon: Palette },
                { step: '04', title: 'Build', desc: 'High-performance engineering.', icon: Code },
                { step: '05', title: 'Test', desc: 'QA, performance, and security audits.', icon: ShieldCheck },
                { step: '06', title: 'Deploy', desc: 'Cloud infrastructure launch.', icon: Rocket },
                { step: '07', title: 'Support', desc: 'Maintenance and active scaling.', icon: Headphones },
              ].map((phase, i) => {
                const IconComp = phase.icon
                return (
                  <AnimatedSection key={phase.step} delay={i * 0.08} className="relative">
                    <motion.div 
                      whileHover={{ y: -8 }}
                      className="group p-6 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:border-[#2563EB]/30 transition-all duration-300 h-full flex flex-col"
                    >
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                          <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center font-black text-sm shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                            {phase.step}
                          </div>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                          <IconComp size={20} />
                        </div>
                        <div>
                          <h3 className="text-sm font-black text-[#0A0A0A] mb-2 font-sans">{phase.title}</h3>
                          <p className="text-[11px] sm:text-xs text-[#6B7280] font-medium leading-relaxed">{phase.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                    {/* Desktop Connector Line */}
                    {i < 6 && (
                      <div className="hidden lg:block absolute top-[90px] -right-4 w-8 h-px bg-gray-200 z-0" />
                    )}
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. TECHNOLOGIES & INDUSTRIES SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* TECHNOLOGIES WE MASTER */}
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] mb-6 sm:mb-8 font-sans">
                Technologies We Master
              </h2>
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {[
                  'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 
                  'Framer Motion', 'Python', 'OpenAI API', 'GraphQL', 
                  'PostgreSQL', 'Figma', 'AWS'
                ].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2.5 rounded-full bg-gray-50 border border-gray-200/80 text-xs sm:text-sm font-semibold text-[#0A0A0A] hover:border-[#2563EB] hover:text-[#2563EB] hover:bg-blue-50/50 transition-all duration-200 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* INDUSTRIES WE SERVE */}
            <AnimatedSection delay={0.15}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] mb-6 sm:mb-8 font-sans">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {[
                  { name: 'Healthcare', icon: Heart },
                  { name: 'SaaS', icon: Cloud },
                  { name: 'E-commerce', icon: ShoppingBag },
                  { name: 'Finance', icon: Activity },
                  { name: 'Startups', icon: Zap },
                  { name: 'Education', icon: Target },
                ].map((industry) => (
                  <div 
                    key={industry.name} 
                    className="p-5 sm:p-6 rounded-[20px] bg-white border border-gray-200/80 text-center hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300 group cursor-default"
                  >
                    <industry.icon className="w-7 h-7 sm:w-8 sm:h-8 mx-auto mb-3 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
                    <span className="font-bold text-xs sm:text-sm text-[#0A0A0A] font-sans">{industry.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. LATEST RESOURCES SECTION */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                  <span>From Our Journal</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                  Latest Insights & Guides
                </h2>
              </div>
              <Link to="/resources">
                <Button variant="outline" className="border-gray-300 text-[#0A0A0A] hover:bg-gray-100 font-bold text-xs">
                  View All Resources <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.1}>
                  <Link
                    to={`/resources/${art.slug}`}
                    className="group rounded-[28px] bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
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
                      <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors leading-snug">
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

            {/* SECONDARY RESOURCE CTA */}
            <AnimatedSection delay={0.2} className="mt-12 text-center">
              <p className="text-sm font-semibold text-gray-500">
                Not ready to start?{' '}
                <Link to="/resources" className="text-[#2563EB] hover:underline font-bold inline-flex items-center gap-1">
                  Explore our free resources <BookOpen size={14} />
                </Link>
              </p>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 8. FINAL CTA BANNER */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Ready to build your next digital product?
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