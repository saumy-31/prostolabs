import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { useRef } from 'react'
import { 
  Code, Palette, Lightbulb, PenTool, Eye, Users, 
  Shield, BookOpen, Briefcase, Layers, Zap, Handshake, 
  MessageSquare, Cpu, Cloud, Layout, CheckCircle2, Bot,
  MonitorSmartphone, Server, ArrowRight, FileType2 // <--- Added this here
} from 'lucide-react'

export const About = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])

  return (
    <>
    <SEO 
      title="About ProstoLabs | Building Digital Products That Drive Growth"
      description="Learn about ProstoLabs, our mission, vision, and commitment to creating scalable digital products through innovation, design, and engineering."
      path="/about"
    />
    <div className="overflow-hidden bg-background" ref={containerRef}>
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-20 pb-20 overflow-hidden">
        {/* Abstract Animated Background */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] border-[1px] border-gray-200 rounded-full absolute"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
            className="w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] border-[1px] border-gray-200 rounded-full absolute border-dashed"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <AnimatedSection>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">Digital Frontier.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              We are a collective of engineers, designers, and strategists obsessed with building products that redefine what's possible on the web.
            </p>
          </AnimatedSection>
        </div>
      </section>

      

      {/* 3. WHO WE ARE */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Who We Are</h2>
            <p className="text-xl text-gray-500 max-w-2xl">A multi-disciplinary technology firm bridging the gap between complex engineering and human-centric design.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Code, title: "Engineering Excellence", desc: "We write clean, modular, and performant code. Our architectures are built to handle massive scale without compromising on speed." },
              { icon: Palette, title: "Premium Design", desc: "Design is how it works. We craft interfaces that guide users naturally, utilizing whitespace, typography, and motion to build trust." },
              { icon: Lightbulb, title: "Forward Innovation", desc: "We actively integrate emerging technologies, from custom LLM wrappers to predictive algorithms, keeping you ahead of the curve." }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-10 rounded-3xl bg-surface border border-gray-100 h-full group hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center mb-8 group-hover:-translate-y-2 transition-transform duration-500">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MISSION */}
      <section className="py-32 px-6 bg-primary text-white overflow-hidden relative">
        {/* Abstract Dark SVG Graphic */}
        <motion.div style={{ y: y1 }} className="absolute right-0 top-0 opacity-10 pointer-events-none hidden lg:block">
          <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="300" cy="300" r="299" stroke="white" strokeWidth="2"/>
            <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="2" strokeDasharray="10 10"/>
            <circle cx="300" cy="300" r="100" stroke="white" strokeWidth="2"/>
          </svg>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-6 block">Our Mission</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Building technology that helps businesses grow.
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed border-l-2 border-accent pl-8">
              We help businesses build scalable websites, intelligent applications, and digital experiences that create lasting value.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. VISION */}
      <section className="py-32 px-6 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <AnimatedSection>
            <div className="aspect-square w-full max-w-md mx-auto relative flex items-center justify-center">
              {/* Abstract Vision Graphic */}
              <motion.div 
                animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/5 rounded-[3rem] blur-xl"
              />
              <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full p-8">
                <motion.div initial={{ height: "0%" }} whileInView={{ height: "100%" }} transition={{ duration: 1 }} className="bg-primary rounded-2xl" />
                <motion.div initial={{ height: "0%" }} whileInView={{ height: "60%" }} transition={{ duration: 1, delay: 0.2 }} className="bg-accent rounded-2xl self-end" />
                <motion.div initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.4 }} className="bg-gray-300 rounded-2xl col-span-2 h-32" />
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-6 block">Our Vision</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Creating a smarter digital future.
            </h2>
            <p className="text-xl text-gray-500 leading-relaxed">
              Our vision is to empower businesses with modern technology, exceptional design, and innovative solutions that create lasting impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      

      {/* 7. OUR JOURNEY (Timeline) */}
      <section className="py-32 px-6 bg-primary text-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400">The milestones that shaped our methodology.</p>
          </AnimatedSection>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

            {[
              { year: 'Phase I', title: 'The Idea', desc: 'ProstoLabs was founded to bridge the gap between premium design and complex software engineering.' },
              { year: 'Phase II', title: 'First Client Partnership', desc: 'Successfully delivered our first enterprise-scale application, setting the standard for our future work.' },
              { year: 'Phase III', title: 'Growing the Collective', desc: 'Expanded our team with top-tier talent across UI/UX, full-stack development, and AI integration.' },
              { year: 'Phase IV', title: 'Building Digital Ecosystems', desc: 'Transitioned from isolated projects to acting as the core technology partner for global businesses.' },
              { year: 'Phase V', title: 'Future Vision', desc: 'Continuing to pioneer scalable architectures and seamlessly integrating AI into daily business operations.' },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className={`relative flex items-center justify-between mb-16 md:mb-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                {/* Timeline Dot */}
                <div className="absolute left-[15px] md:left-1/2 w-4 h-4 rounded-full bg-accent -translate-x-1/2 outline outline-4 outline-primary z-10" />
                
                {/* Empty Space for alignment on desktop */}
                <div className="hidden md:block w-5/12" />
                
                {/* Content */}
                <div className="w-full pl-12 md:pl-0 md:w-5/12">
                  <span className="text-accent font-bold text-sm mb-2 block">{item.year}</span>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY BUSINESSES CHOOSE US */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Businesses Choose Us</h2>
            <p className="text-xl text-gray-500">We deliver peace of mind alongside premium software.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Briefcase, title: 'Business-First Mindset', text: 'We optimize for ROI, not just lines of code.' },
              { icon: Layers, title: 'Scalable Architecture', text: 'Built to handle 100 or 1,000,000 active users.' },
              { icon: MonitorSmartphone, title: 'Premium Design', text: 'Aesthetics that build trust and drive conversion.' },
              { icon: Zap, title: 'Performance Optimization', text: 'Lightning-fast load times and Lighthouse scores.' },
              { icon: Handshake, title: 'Long-Term Partnership', text: 'We maintain and scale your product post-launch.' },
              { icon: MessageSquare, title: 'Transparent Communication', text: 'Direct lines to your lead engineers and designers.' },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="p-8 rounded-2xl bg-surface border border-gray-100 flex items-start gap-4">
                  <feature.icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. TECHNOLOGIES WE LOVE */}
      <section className="py-32 px-6 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedSection className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-6">Technologies We Love</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">We use a strict, modern tech stack to ensure reliability, security, and developer velocity.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'React', icon: Code },
              { name: 'TypeScript', icon: FileType2 },
              { name: 'Node.js', icon: Server },
              { name: 'Python', icon: Code },
              { name: 'AI Solutions', icon: Bot },
              { name: 'Figma', icon: Palette },
              { name: 'Tailwind CSS', icon: Layout },
              { name: 'Cloud Native', icon: Cloud },
            ].map((tech, i) => {
              // React requires dynamic components to start with a Capital letter
              const Icon = tech.icon; 
              
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-background border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 group cursor-default">
                    <Icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                    <span className="font-semibold text-sm">{tech.name}</span>
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* 10. OUR WORKING PRINCIPLES (Process) */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How We Build</h2>
            <p className="text-xl text-gray-500">A systematic approach to eliminating risk and ensuring success.</p>
          </AnimatedSection>

          <div className="flex flex-col lg:flex-row items-start justify-between relative">
            <div className="hidden lg:block absolute top-12 left-10 right-10 h-[2px] bg-gray-100 z-0" />
            
            {[
              { step: '01', title: 'Discover', desc: 'Understanding your business logic.' },
              { step: '02', title: 'Strategy', desc: 'Architecting the solution.' },
              { step: '03', title: 'Design', desc: 'Crafting the interface.' },
              { step: '04', title: 'Dev', desc: 'Writing scalable code.' },
              { step: '05', title: 'Launch', desc: 'Zero-downtime deployment.' },
              { step: '06', title: 'Iterate', desc: 'Continuous improvement.' },
            ].map((process, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative z-10 flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-4 mb-8 lg:mb-0 w-full lg:w-1/6">
                <div className="w-12 h-12 rounded-full bg-surface border-4 border-white shadow-sm flex items-center justify-center font-bold text-accent shrink-0">
                  {process.step}
                </div>
                <div className="text-left lg:text-center">
                  <h4 className="font-bold mb-1">{process.title}</h4>
                  <p className="text-sm text-gray-500">{process.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      

      {/* 13. FINAL CALL TO ACTION */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="relative rounded-[3rem] overflow-hidden bg-primary text-white text-center py-24 px-6 md:px-12">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9zdmc+')] opacity-50 mix-blend-overlay" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Let's Build Something <br/> <span className="text-accent">Exceptional.</span></h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Whether you need a complete digital transformation or a highly specialized engineering team, we are ready.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">Start Your Project</Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/20 hover:bg-white/10 hover:border-white">Contact Us</Button>
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