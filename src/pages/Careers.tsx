import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Helmet } from 'react-helmet-async'
import { 
  Briefcase, Users, Terminal, TrendingUp, 
  MapPin, Clock, ChevronDown, CheckCircle2,
  UploadCloud, ShieldCheck, Sparkles, ArrowRight
} from 'lucide-react'

// Extracted programs array to generate both the UI and the SEO Schema dynamically
const internshipPrograms = [
  { title: 'Web Development Intern', value: 'Web Development', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' },
  { title: 'UI/UX Design Intern', value: 'UI/UX Design', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' },
  { title: 'AI & Machine Learning Intern', value: 'AI & Machine Learning', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' },
  { title: 'Digital Marketing Intern', value: 'Digital Marketing', location: 'Remote', duration: '1 Month • 2 Months • 3 Months' }
]

export const Careers = () => {
  // --- SEO Job Posting Schema Configuration ---
  const jobsSchema = internshipPrograms.map(job => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": `Gain practical experience through mentorship, real-world projects, and hands-on learning as a ${job.title} at ProstoLabs. Duration: ${job.duration}.`,
    "datePosted": "2026-07-17",
    "validThrough": "2026-12-31",
    "employmentType": "INTERN",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "ProstoLabs",
      "sameAs": "https://prostolabs.com",
      "logo": "https://prostolabs.com/logo.png"
    },
    "jobLocationType": "TELECOMMUTE",
    "applicantLocationRequirements": {
      "@type": "Country",
      "name": "India"
    }
  }));

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
        title="Careers & Internships | ProstoLabs"
        description="Join ProstoLabs through our remote internship programs in Web Development, AI & Machine Learning, UI/UX Design, and Digital Marketing."
        path="/careers"
      />
      
      {/* Schema Markup Injection */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jobsSchema)}
        </script>
      </Helmet>

      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden text-center">
          <div className="max-w-[1000px] mx-auto relative z-10">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>ProstoLabs Internship Program</span>
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                Build real-world skills with <br className="hidden sm:block" />
                <span className="text-[#2563EB]">hands-on experience.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                Gain practical skills through 1-on-1 mentorship and live client projects designed to jumpstart your career in technology and design.
              </p>
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. WHY JOIN US */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-y border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Why Join ProstoLabs
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Learn, build, and grow through practical industry experience.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Briefcase, title: 'Real Projects', desc: 'Work on actual applications that solve real business problems and build a strong portfolio.' },
                { icon: Users, title: 'Experienced Mentors', desc: 'Learn directly from lead developers and designers through weekly code reviews.' },
                { icon: Terminal, title: 'Modern Workflows', desc: 'Gain hands-on experience with modern tools like React, TypeScript, Figma, and AI APIs.' },
                { icon: TrendingUp, title: 'Career Growth', desc: 'Develop practical confidence, professional work samples, and a verifiable completion certificate.' }
              ].map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.08}>
                  <div className="p-8 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mb-6">
                        <benefit.icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 font-sans">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{benefit.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. INTERNSHIP PROGRAMS */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1000px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Available Internship Tracks
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Select a track that matches your learning goals.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {internshipPrograms.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.08}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between p-6 sm:p-8 rounded-[24px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 hover:shadow-lg transition-all duration-300 group gap-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors mb-3 font-sans">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2.5 text-xs font-semibold text-[#6B7280]">
                        <div className="flex items-center gap-1.5 bg-[#FAFAFA] px-3 py-1.5 rounded-lg border border-gray-200/80">
                          <MapPin size={14} className="text-[#2563EB]" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1.5 bg-[#FAFAFA] px-3 py-1.5 rounded-lg border border-gray-200/80">
                          <Clock size={14} className="text-[#2563EB]" /> Duration: {job.duration}
                        </div>
                      </div>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleApplyClick(job.value)}
                      className="h-11 px-6 rounded-2xl bg-[#2563EB] text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer shrink-0"
                    >
                      <span>Apply Now</span>
                      <ArrowRight size={14} />
                    </motion.button>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. HOW IT WORKS */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 font-sans">
                Application Process
              </h2>
              <p className="text-base sm:text-lg text-blue-100 font-medium">
                A simple 4-step process to begin your internship.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Submit Form', desc: 'Fill out the online application below with your resume.' },
                { num: '02', title: 'Profile Review', desc: 'Our team reviews your technical background and portfolio.' },
                { num: '03', title: 'Onboarding', desc: "Selected applicants receive onboarding tasks and mentor assignments." },
                { num: '04', title: 'Start Building', desc: 'Begin working on live projects under guided mentorship.' }
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08}>
                  <div className="p-6 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/15 h-full">
                    <span className="text-xs font-bold text-blue-200 mb-3 block">Step {step.num}</span>
                    <h3 className="text-xl font-bold mb-2 font-sans">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. INTERNSHIP APPLICATION FORM */}
        {/* ========================================================================= */}
        <section ref={formRef} className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80 scroll-mt-20">
          <div className="max-w-[800px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Apply for an Internship
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Submit your application below and our team will get in touch.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              {isSubmitted ? (
                <div className="bg-[#FAFAFA] rounded-[32px] p-8 sm:p-12 text-center border border-gray-200/80 shadow-sm">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] mb-3 font-sans">Application Submitted!</h3>
                  <p className="text-sm sm:text-base text-[#6B7280] max-w-md mx-auto leading-relaxed font-medium mb-2">
                    Thank you for applying to ProstoLabs.
                  </p>
                  <p className="text-xs sm:text-sm text-[#6B7280] max-w-md mx-auto leading-relaxed font-medium">
                    Our team will review your resume and contact you via email if you are shortlisted.
                  </p>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/careers@flysava.com" 
                  method="POST" 
                  encType="multipart/form-data"
                  className="space-y-6 p-6 sm:p-10 bg-[#FAFAFA] rounded-[32px] border border-gray-200/80 shadow-sm"
                >
                  <input type="hidden" name="_subject" value="New Internship Application - ProstoLabs" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/careers?submitted=true` : ''} />

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Full Name *</label>
                      <input 
                        type="text" 
                        name="Full Name" 
                        required 
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium focus:outline-none focus:border-[#2563EB] transition-colors" 
                      />
                    </div>
                    
                    <div>
                      <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Email Address *</label>
                      <input 
                        type="email" 
                        name="Email Address" 
                        required 
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium focus:outline-none focus:border-[#2563EB] transition-colors" 
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Select Position *</label>
                      <div className="relative">
                        <select 
                          name="Position" 
                          required 
                          value={selectedPosition}
                          onChange={(e) => setSelectedPosition(e.target.value)}
                          className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium focus:outline-none focus:border-[#2563EB] transition-colors appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Choose an internship track...</option>
                          <option value="Web Development">Web Development</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="AI & Machine Learning">AI & Machine Learning</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Upload Resume *</label>
                      <div 
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-2xl p-6 text-center bg-white transition-all cursor-pointer ${
                          fileName ? 'border-[#2563EB] bg-blue-50/20' : 'border-gray-200/80 hover:border-[#2563EB]/40'
                        }`}
                      >
                        {fileName ? (
                          <>
                            <CheckCircle2 className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
                            <p className="text-xs font-bold text-[#0A0A0A]">Resume Attached</p>
                            <p className="text-xs text-[#2563EB] font-medium">{fileName}</p>
                          </>
                        ) : (
                          <>
                            <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-xs font-bold text-[#0A0A0A]">Click to upload your resume</p>
                            <p className="text-[10px] text-[#6B7280]">PDF, DOC, or DOCX (Max 10MB)</p>
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
                  </div>

                  <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Your information is strictly confidential.</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      className="w-full sm:w-auto h-12 px-8 bg-[#2563EB] text-white rounded-2xl font-bold text-sm shadow-md cursor-pointer"
                    >
                      Submit Application
                    </motion.button>
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