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
  Sparkles, BarChart3, ShieldCheck, Smartphone, Clock, BookOpen
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

  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10])
  
  const translateXBase = useTransform(springX, [-0.5, 0.5], [-20, 20])
  const translateYBase = useTransform(springY, [-0.5, 0.5], [-20, 20])
  
  const translateXFloat1 = useTransform(springX, [-0.5, 0.5], [40, -40])
  const translateYFloat1 = useTransform(springY, [-0.5, 0.5], [40, -40])
  
  const translateXFloat2 = useTransform(springX, [-0.5, 0.5], [-50, 50])
  const translateYFloat2 = useTransform(springY, [-0.5, 0.5], [-50, 50])

  return (
    <>
      <SEO 
        title="ProstoLabs | Web Development, AI & Digital Solutions"
        description="ProstoLabs engineers custom web applications, mobile apps, AI automations, and UI/UX design to help businesses innovate and grow."
        path="/"
      />

      <div className="relative overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-500/30 selection:text-blue-900">
        
        {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
        <div className="absolute top-0 left-0 right-0 h-[100vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[20%] right-[-10%] w-[30%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section 
          onMouseMove={handleMouseMove}
          className="relative flex justify-center px-6 pt-24 sm:pt-32 pb-16 md:pb-24 overflow-visible"
        >
          <div className="max-w-[1300px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* HERO TEXT COLUMN */}
            <div className="text-left relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeSaaS }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-6 sm:mb-8 transform-gpu"
              >
                <Sparkles size={16} className="text-[#2563EB]" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Web Apps, AI & Digital Solutions</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: easeSaaS }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0A0A0A] mb-8 transform-gpu"
              >
                Modern Digital Products Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#2563EB] to-cyan-500">Grow Your Business.</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeSaaS }}
                className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-xl mb-10 leading-[1.6] font-medium transform-gpu tracking-tight"
              >
                We design and engineer high-performance web applications, mobile software, AI integrations, and custom platforms tailored to your business goals.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: easeSaaS }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
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
                <Link to="/services" className="w-full sm:w-auto">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto h-14 px-8 rounded-full bg-white/70 backdrop-blur-xl border border-gray-200/80 text-[#0A0A0A] font-bold text-sm sm:text-base hover:bg-white hover:shadow-lg hover:border-gray-300 transition-all cursor-pointer flex items-center justify-center shadow-sm"
                  >
                    Explore Solutions
                  </motion.button>
                </Link>
              </motion.div>
            </div>

            {/* HERO INTERACTIVE 3D ILLUSTRATION */}
            <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] flex items-center justify-center perspective-[1200px] mt-8 lg:mt-0">
              {/* Animated Glowing Aura */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.4, 0.6, 0.4]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-400/10 to-purple-500/10 blur-[80px] rounded-full scale-90" 
              />
              
              <motion.div
                style={{ rotateX, rotateY, x: translateXBase, y: translateYBase }}
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: easeSaaS }}
                className="relative z-10 w-full max-w-[540px] aspect-[4/3] rounded-[32px] p-[1px] bg-gradient-to-b from-white/40 to-white/0 shadow-2xl transform-gpu"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-[#0B1121] to-[#121B33] rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                  {/* Subtle Inner Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />
                  
                  <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between relative z-10">
                    {/* macOS Style Header */}
                    <div className="flex items-center justify-between pb-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                        <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]" />
                      </div>
                      <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>prostolabs.com</span>
                      </div>
                    </div>

                    <div className="space-y-4 my-auto w-4/5">
                      <div className="w-full h-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
                      <div className="w-2/3 h-3 bg-white/20 rounded-full backdrop-blur-sm" />
                      <div className="w-5/6 h-3 bg-white/10 rounded-full backdrop-blur-sm" />
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4">
                      {[
                        { color: 'bg-blue-500' },
                        { color: 'bg-emerald-500' },
                        { color: 'bg-purple-500' }
                      ].map((item, i) => (
                        <div key={i} className="h-12 bg-white/5 backdrop-blur-md rounded-xl p-3 flex items-center gap-3 border border-white/5 hover:bg-white/10 transition-colors cursor-default">
                          <div className={`w-3.5 h-3.5 rounded-full ${item.color} shadow-[0_0_10px_currentColor] opacity-80`} />
                          <div className="w-full h-2 bg-white/20 rounded-full" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Performance Pill */}
              <motion.div
                style={{ x: translateXFloat1, y: translateYFloat1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: easeSaaS }}
                className="hidden sm:flex absolute top-10 -right-4 lg:-right-12 z-30 bg-white/80 backdrop-blur-xl p-4 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-600 flex items-center justify-center font-bold group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-0.5">Performance Score</p>
                  <p className="text-xl font-extrabold text-[#0A0A0A]">99 <span className="text-gray-400 text-sm font-medium">/ 100</span></p>
                </div>
              </motion.div>

              {/* Floating AI Pill */}
              <motion.div
                style={{ x: translateXFloat2, y: translateYFloat2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: easeSaaS }}
                className="hidden sm:flex absolute bottom-12 -left-4 lg:-left-12 z-30 bg-gradient-to-r from-[#2563EB] to-blue-600 text-white p-4 rounded-3xl shadow-[0_15px_30px_rgba(37,99,235,0.3)] border border-blue-400/30 items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold tracking-wide">AI Automations</p>
                  <p className="text-xs text-blue-200/90 font-medium flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live Workflow Active
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. ABOUT PROSTOLABS SECTION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative">
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              <AnimatedSection>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500" /> About ProstoLabs
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-8 leading-[1.1] font-sans">
                  We build digital products that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">scale your business.</span>
                </h2>
                <p className="text-lg sm:text-xl text-[#6B7280] mb-10 leading-relaxed font-medium">
                  From custom web applications and mobile software to AI automations and websites, we create technology built around your exact operational goals.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group p-6 rounded-[24px] bg-white/60 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <h3 className="font-bold text-lg text-[#0A0A0A] mb-3 flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-50 text-[#2563EB] group-hover:scale-110 transition-transform">
                        <Target className="w-5 h-5" />
                      </div> 
                      Our Mission
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
                      Deliver reliable software and digital tools that increase efficiency and revenue.
                    </p>
                  </div>
                  
                  <div className="group p-6 rounded-[24px] bg-white/60 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                    <h3 className="font-bold text-lg text-[#0A0A0A] mb-3 flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-blue-50 text-[#2563EB] group-hover:scale-110 transition-transform">
                        <Activity className="w-5 h-5" />
                      </div> 
                      Our Vision
                    </h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed font-medium">
                      Be a premier global technology partner for ambitious, forward-thinking businesses.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              {/* TEAM IMAGE */}
              <AnimatedSection delay={0.2} className="hidden md:block relative">
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-white opacity-50 rounded-[40px] blur-2xl" />
                
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden bg-white border border-gray-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)] group">
                  <motion.img 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                    alt="ProstoLabs Team working together" 
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80" />
                  
                  {/* Glass floating card over image */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="font-bold text-lg">Collaborative Engineering</p>
                    <p className="text-sm text-white/80 font-medium">Building with precision and purpose.</p>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. SERVICES SECTION (PREMIUM BENTO GRID) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                Core Capabilities
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Technology solutions for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">modern growth.</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <div className="group relative p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-gray-200/80 hover:border-[#2563EB]/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] transition-all duration-500 h-full flex flex-col justify-between overflow-hidden">
                    {/* Subtle Hover Gradient Blob */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 group-hover:bg-blue-500/10 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-sm text-[#2563EB] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                        <service.icon size={26} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-3 font-sans tracking-tight">{service.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{service.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Link to="/services">
                <Button variant="outline" className="rounded-full px-8 h-12 border-gray-300 text-[#0A0A0A] hover:bg-gray-100 hover:border-gray-400 font-bold transition-all shadow-sm">
                  Explore All Capabilities <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. WHY CHOOSE PROSTOLABS SECTION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative">
          {/* Section Divider/Accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Why companies partner with <span className="text-[#2563EB]">ProstoLabs</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                We handle design, code, security, and cloud infrastructure so you can scale.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              {[
                { icon: Briefcase, title: 'Value-Driven Engineering', text: 'Every product feature is built with clear ROI and user conversion in mind.' },
                { icon: Zap, title: 'High-Speed Architecture', text: 'Optimized code structures ensuring near-instantaneous load times on all devices.' },
                { icon: Layers, title: 'Scalable Cloud Setup', text: 'Built to support growth effortlessly from early adopters to thousands of active users.' },
                { icon: MessageSquare, title: 'Direct Developer Access', text: 'Work directly with your engineers and designers without agency middlemen.' },
                { icon: ShieldCheck, title: 'Enterprise Security', text: 'Built-in SSL encryption, secure API integrations, and data protection standards.' },
                { icon: Heart, title: 'Long-Term Partnership', text: 'We maintain, scale, and update your product long after the initial deployment.' },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 0.1} className="flex flex-col sm:flex-row gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-[20px] bg-white border border-gray-200 shadow-sm text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-bold text-xl text-[#0A0A0A] mb-2 font-sans tracking-tight">{item.title}</h3>
                    <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{item.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. OUR PROCESS SECTION (LINEAR STYLE) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative overflow-hidden bg-white" id="process">
          {/* Subtle Linear Gradients Background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(37,99,235,0.03)_0%,_transparent_50%)] pointer-events-none" />
          
          <div className="max-w-[1300px] mx-auto relative z-10">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-20 sm:mb-28">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 text-[#0A0A0A] font-bold text-xs uppercase tracking-widest mb-6">
                The Roadmap
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                A transparent path to launch.
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium px-4">
                We follow a rigorous, high-speed engineering process to turn your concept into a market-ready product.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative">
              {/* Animated Continuous Line for Desktop */}
              <div className="hidden lg:block absolute top-[48px] left-[5%] right-[5%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              
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
                  <AnimatedSection key={phase.step} delay={i * 0.1} className="relative z-10">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="group pt-8 pb-6 px-4 rounded-3xl bg-transparent hover:bg-gray-50/50 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 h-full flex flex-col items-center border border-transparent hover:border-gray-100"
                    >
                      <div className="relative mb-6">
                        {/* Circle Indicator on the line */}
                        <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 text-[#0A0A0A] flex items-center justify-center font-bold text-sm shadow-sm group-hover:border-[#2563EB] group-hover:text-[#2563EB] transition-colors duration-300 relative z-10">
                          {phase.step}
                        </div>
                        {/* Glow Behind Circle */}
                        <div className="absolute inset-0 rounded-full bg-blue-500 blur-md opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                      </div>
                      
                      <div className="w-10 h-10 rounded-2xl bg-gray-50 text-gray-500 flex items-center justify-center mb-4 group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors duration-300">
                        <IconComp size={20} strokeWidth={2} />
                      </div>
                      
                      <div className="text-center">
                        <h3 className="text-base font-bold text-[#0A0A0A] mb-2 font-sans">{phase.title}</h3>
                        <p className="text-[13px] text-[#6B7280] font-medium leading-relaxed">{phase.desc}</p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                )
              })}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. TECHNOLOGIES & INDUSTRIES SECTION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* TECHNOLOGIES WE MASTER */}
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] mb-8 font-sans tracking-tight">
                Technologies We Master
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 
                  'Framer Motion', 'Python', 'OpenAI API', 'GraphQL', 
                  'PostgreSQL', 'Figma', 'AWS'
                ].map((tech) => (
                  <span 
                    key={tech} 
                    className="px-5 py-3 rounded-full bg-white/60 backdrop-blur-md border border-gray-200 shadow-sm text-sm font-semibold text-[#0A0A0A] hover:border-[#2563EB]/50 hover:shadow-[0_4px_15px_rgba(37,99,235,0.1)] hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </AnimatedSection>

            {/* INDUSTRIES WE SERVE */}
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A0A0A] mb-8 font-sans tracking-tight">
                Industries We Serve
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                    className="p-6 rounded-[24px] bg-white border border-gray-200/80 text-center hover:border-transparent hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 group cursor-default relative overflow-hidden"
                  >
                    {/* Hover Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <industry.icon className="relative z-10 w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-[#2563EB] transition-colors" strokeWidth={1.5} />
                    <span className="relative z-10 font-bold text-sm text-[#0A0A0A] font-sans">{industry.name}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. LATEST RESOURCES SECTION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                  From Our Journal
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A0A0A] tracking-[-0.03em] font-sans leading-tight">
                  Latest Insights & Guides
                </h2>
              </div>
              <Link to="/resources" className="shrink-0">
                <Button variant="outline" className="rounded-full px-8 h-12 border-gray-300 text-[#0A0A0A] hover:bg-gray-100 hover:border-gray-400 font-bold transition-all shadow-sm">
                  View All Resources <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.15}>
                  <Link
                    to={`/resources/${art.slug}`}
                    className="group flex flex-col h-full overflow-hidden cursor-pointer rounded-[32px]"
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

            {/* SECONDARY RESOURCE CTA */}
            <AnimatedSection delay={0.2} className="mt-16 text-center">
              <p className="text-[15px] font-semibold text-gray-500">
                Not ready to start?{' '}
                <Link to="/resources" className="text-[#2563EB] hover:text-blue-700 font-bold inline-flex items-center gap-1.5 transition-colors relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-current after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                  Explore our free resources <BookOpen size={16} />
                </Link>
              </p>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 8. FINAL CTA BANNER */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[40px] overflow-hidden bg-[#0A0A0A] text-white text-center py-20 md:py-28 px-6 sm:px-12 shadow-2xl">
              {/* Premium Gradient Overlays */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.4)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] font-sans leading-[1.1]">
                  Ready to build your next <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">digital product?</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  Partner with ProstoLabs to design and deploy custom software, web apps, or AI tools. Get a clear project proposal today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <Link to="/start-project">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative w-full sm:w-auto h-14 px-8 bg-white text-[#0A0A0A] rounded-full font-bold text-base shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all cursor-pointer overflow-hidden flex items-center justify-center gap-2"
                    >
                      <span>Start Your Project</span>
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full sm:w-auto h-14 px-8 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base border border-white/20 hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center"
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