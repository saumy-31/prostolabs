import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { 
  Briefcase, Users, Terminal, TrendingUp, 
  MapPin, Clock, ChevronDown, CheckCircle2,
  UploadCloud, ShieldCheck
} from 'lucide-react'

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-6">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-medium group-hover:text-accent transition-colors pr-8">{question}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="shrink-0">
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

export const Careers = () => {
  const formRef = useRef<HTMLElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const location = useLocation()
  const navigate = useNavigate()

  const [selectedPosition, setSelectedPosition] = useState<string>('')
  const [fileName, setFileName] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    if (params.get('submitted') === 'true') {
      setIsSubmitted(true)
      navigate(location.pathname, { replace: true })
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }, 100)
    }
  }, [location, navigate])

  const handleApplyClick = (positionValue: string) => {
    setSelectedPosition(positionValue)
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <>
      <SEO 
        title="Careers | Internship Programs at ProstoLabs"
        description="Join ProstoLabs through our internship programs in Web Development, AI & Machine Learning, UI/UX Design, and Digital Marketing."
        path="/careers"
      />
      <div className="overflow-hidden bg-background">
        
        {/* 1. HERO SECTION */}
        <section className="relative px-6 pt-12 md:pt-16 pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-8">
                Build real-world skills.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent">Shape the digital future.</span>
              </h1>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                Gain practical experience through mentorship, real-world projects, and hands-on learning designed to prepare you for the industry.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 2. WHY JOIN US */}
        <section className="py-24 px-6 bg-surface/50">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Why Join Us</h2>
              <p className="text-xl text-gray-500">Learn, build, and grow through practical industry experience.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Briefcase, title: 'Real Projects', desc: 'Work on meaningful projects that solve real business challenges and strengthen your portfolio.' },
                { icon: Users, title: 'Experienced Mentors', desc: 'Learn directly from experienced professionals through regular feedback and mentorship.' },
                { icon: Terminal, title: 'Practical Learning', desc: 'Gain hands-on experience with modern tools, workflows, and industry best practices.' },
                { icon: TrendingUp, title: 'Career Growth', desc: 'Build practical skills, confidence, and a portfolio that helps you stand out.' }
              ].map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.1}>
                  <div className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 3. INTERNSHIP PROGRAMS */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection className="mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Internship Programs</h2>
              <p className="text-xl text-gray-500">Choose the track that matches your interests and career goals.</p>
            </AnimatedSection>

            <div className="space-y-6">
              {[
                { title: 'Web Development Intern', value: 'Web Development', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' },
                { title: 'UI/UX Design Intern', value: 'UI/UX Design', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' },
                { title: 'AI & Machine Learning Intern', value: 'AI & Machine Learning', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' },
                { title: 'Digital Marketing Intern', value: 'Digital Marketing', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' }
              ].map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.1}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-[2rem] bg-surface border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500">
                        <div className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-lg border border-gray-100">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 bg-background px-3 py-1.5 rounded-lg border border-gray-100">
                          <Clock className="w-4 h-4" /> Duration: {job.duration}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0">
                      <Button 
                        variant="outline" 
                        onClick={() => handleApplyClick(job.value)}
                        className="w-full md:w-auto h-12 px-8 group-hover:bg-primary group-hover:text-white transition-colors border-gray-200"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="py-24 px-6 bg-primary text-white">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection className="mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">How It Works</h2>
              <p className="text-xl text-gray-400">A simple, transparent process to start your journey.</p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { num: '01', title: 'Apply', desc: 'Submit your application through our online form.' },
                { num: '02', title: 'Review', desc: 'Our team reviews your profile and project interests.' },
                { num: '03', title: 'Selection', desc: "If selected, you'll receive onboarding details and mentor allocation." },
                { num: '04', title: 'Start Learning', desc: 'Begin working on practical projects with mentor guidance.' }
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1}>
                  <div className="pt-8 border-t border-white/20 relative group">
                    <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full" />
                    <span className="text-sm font-bold text-accent mb-4 block">Step {step.num}</span>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        

        {/* 6. INTERNSHIP APPLICATION FORM */}
        <section ref={formRef} className="py-24 px-6 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Apply for an Internship</h2>
              <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                Ready to begin your journey? Submit your application below and our team will review it.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              {isSubmitted ? (
                <div className="bg-surface rounded-[2.5rem] p-12 text-center border border-gray-100 shadow-sm">
                  <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Application Submitted</h3>
                  <p className="text-lg text-gray-500 max-w-md mx-auto leading-relaxed mb-2">
                    Thank you for applying to ProstoLabs.
                  </p>
                  <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                    We've successfully received your application. Our team will review it and contact you via email if you're shortlisted.
                  </p>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/careers@flysava.com" 
                  method="POST" 
                  encType="multipart/form-data"
                  className="space-y-8 p-8 md:p-12 bg-surface rounded-[2.5rem] border border-gray-100 shadow-sm"
                >
                  <input type="hidden" name="_subject" value="New Internship Application - ProstoLabs" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/careers?submitted=true` : ''} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-primary">Full Name *</label>
                      <input type="text" name="Full Name" required className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-semibold text-primary">Email Address *</label>
                      <input type="email" name="Email Address" required className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                    </div>

                    <div className="space-y-2 md:col-span-2 relative">
                      <label className="text-sm font-semibold text-primary">Select Position *</label>
                      <div className="relative">
                        <select 
                          name="Position" 
                          required 
                          value={selectedPosition}
                          onChange={(e) => setSelectedPosition(e.target.value)}
                          className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Choose an internship track...</option>
                          <option value="Web Development">Web Development</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="AI & Machine Learning">AI & Machine Learning</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary block mb-2">Upload Resume *</label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-8 text-center bg-white transition-colors cursor-pointer group ${
                        fileName ? 'border-accent bg-accent/5' : 'border-gray-200 hover:bg-gray-50 hover:border-accent/30'
                      }`}
                    >
                      {fileName ? (
                        <>
                          <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-4" />
                          <p className="text-sm font-semibold text-primary mb-1">Resume Attached</p>
                          <p className="text-sm text-accent font-medium">{fileName}</p>
                        </>
                      ) : (
                        <>
                          <UploadCloud className="w-10 h-10 text-gray-300 mx-auto mb-4 group-hover:text-accent transition-colors" />
                          <p className="text-sm font-semibold text-primary mb-1">Click to upload your resume</p>
                          <p className="text-xs text-gray-500">PDF, DOC, or DOCX</p>
                        </>
                      )}
                      <input 
                        type="file" 
                        name="Resume" 
                        required
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                      <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
                      <span>Your data is strictly confidential.</span>
                    </div>
                    <Button type="submit" className="w-full sm:w-auto h-14 px-10 text-lg">Submit Application</Button>
                  </div>
                </form>
              )}
            </AnimatedSection>
          </div>
        </section>

      </div>
    </>
  )
}