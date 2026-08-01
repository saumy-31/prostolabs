import { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { resources } from '../data/resourcesData'
import { 
  Briefcase, Users, Terminal, TrendingUp, 
  MapPin, Clock, ChevronDown, CheckCircle2,
  UploadCloud, ShieldCheck, Sparkles, ArrowRight,
  Award, Globe, ArrowUpRight, BookOpen,
  Code, Zap, Laptop, FileCheck, UserCheck, Layers
} from 'lucide-react'

// --- SAAS EASING CURVE ---
const easeSaaS = [0.16, 1, 0.3, 1] as const

// --- INTERNSHIP PROGRAM DATA STRUCTURE ---
export interface InternshipTrack {
  id: string
  title: string
  value: string
  location: string
  duration: string
  desc: string
  skills: string[]
  whoShouldApply: string[]
}

const internshipPrograms: InternshipTrack[] = [
  { 
    id: 'web-dev',
    title: 'Web Development Intern', 
    value: 'Web Development', 
    location: 'Remote', 
    duration: '1 Month • 2 Months • 3 Months',
    desc: 'Work alongside core engineers to build performant, responsive web applications, component libraries, and API integrations using modern React ecosystems.',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Git & GitHub', 'REST APIs', 'Page Speed Optimization'],
    whoShouldApply: ['Computer Science Students', 'Frontend Enthusiasts', 'Self-Taught React Developers']
  },
  { 
    id: 'ui-ux',
    title: 'UI/UX Design Intern', 
    value: 'UI/UX Design', 
    location: 'Remote', 
    duration: '1 Month • 2 Months • 3 Months',
    desc: 'Craft intuitive, accessible visual interfaces, design token systems, and interactive prototypes for SaaS dashboards, mobile screens, and web platforms.',
    skills: ['Figma', 'Wireframing', 'Design Systems', 'Interactive Prototyping', 'User Research', 'Mobile Ergonomics'],
    whoShouldApply: ['Product Design Students', 'Visual Designers', 'UX Researchers']
  },
  { 
    id: 'ai-ml',
    title: 'AI & Machine Learning Intern', 
    value: 'AI & Machine Learning', 
    location: 'Remote', 
    duration: '1 Month • 2 Months • 3 Months',
    desc: 'Integrate OpenAI models, build vector knowledge retrievers, and construct automated lead parsing workflows for live business web applications.',
    skills: ['Python', 'OpenAI API', 'Vector Databases', 'Prompt Engineering', 'LangChain', 'JSON Workflows'],
    whoShouldApply: ['AI/ML Enthusiasts', 'Backend Developers', 'Data Science Students']
  },
  { 
    id: 'marketing',
    title: 'Digital Marketing Intern', 
    value: 'Digital Marketing', 
    location: 'Remote', 
    duration: '1 Month • 2 Months • 3 Months',
    desc: 'Learn high-intent SEO, search engine ranking strategies, content distribution workflows, and conversion rate optimization for technical digital services.',
    skills: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'Google Analytics', 'Conversion Optimization', 'Social Media'],
    whoShouldApply: ['Marketing Students', 'Content Creators', 'SEO Aspirants']
  }
]

// --- FAQ DATA FOR COMPONENT & AUTOMATIC SCHEMA GENERATION ---
const faqData = [
  {
    question: "Is the internship program fully remote?",
    answer: "Yes, all ProstoLabs internship tracks are 100% remote. You can participate from anywhere with a stable internet connection and computer setup."
  },
  {
    question: "Will I receive an official completion certificate and recommendation?",
    answer: "Yes. Every intern who successfully completes their track receives a verifiable ProstoLabs Completion Certificate, a LinkedIn skill endorsement, and a official letter of recommendation based on performance."
  },
  {
    question: "Are these internships paid?",
    answer: "We offer both learning-focused mentorship internships and performance-stipend tracks. Exceptional interns working on client deliverables receive performance bonuses and priority consideration for full-time junior positions."
  },
  {
    question: "Do beginners qualify for the internship tracks?",
    answer: "Yes. While basic foundational knowledge in your chosen field is required (e.g., HTML/CSS for web dev, basic Figma for design), our structured 1-on-1 mentorship is designed to elevate your skills to a professional standard."
  },
  {
    question: "Can I extend my internship duration?",
    answer: "Yes. Based on performance reviews, learning goals, and project availability, interns can request to extend their track from 1 month up to 3 or 6 months."
  }
]

// --- REUSABLE JOB POSTING SCHEMA COMPONENT WITH DYNAMIC VALIDITY ---
function JobPostingSchema({ jobs }: { jobs: InternshipTrack[] }) {
  // Dynamically calculate validThrough date (End of current year + 1 year) so it never expires
  const currentYear = new Date().getFullYear()
  const dynamicValidThrough = `${currentYear + 1}-12-31`

  const jobsSchema = jobs.map(job => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": `${job.desc} Learn: ${job.skills.join(', ')}. Duration: ${job.duration}.`,
    "datePosted": `${currentYear}-01-01`,
    "validThrough": dynamicValidThrough,
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
  }))

  return (
    <script type="application/ld+json">
      {JSON.stringify(jobsSchema)}
    </script>
  )
}

// --- FAQ ACCORDION ITEM COMPONENT ---
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200/80 rounded-2xl bg-white overflow-hidden transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0A0A0A] cursor-pointer hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 transition-colors font-sans"
      >
        <span>{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-[#2563EB] transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className="px-6 pb-6 text-sm md:text-base text-[#6B7280] font-medium leading-relaxed border-t border-gray-100 pt-4">
              {answer}
            </div>
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

  // Sort resources by date (newest first) and grab the top 3
  const latestArticles = [...resources]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3)

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
        description="Launch your engineering and design career with ProstoLabs. Hands-on remote internship tracks in Web Development, AI & Machine Learning, UI/UX Design, and Digital Marketing."
        path="/careers"
        faq={faqData}
      />
      
      {/* Dynamic Schema Injection without Helmet */}
      <JobPostingSchema jobs={internshipPrograms} />

      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (ASPIRATIONAL & BRAND-FOCUSED)                            */}
        {/* ========================================================================= */}
        <section className="relative px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden text-center">
          <div className="max-w-[1000px] mx-auto relative z-10 space-y-8">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
                <Sparkles size={14} className="text-[#2563EB]" />
                <span>ProstoLabs Engineering Internships</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
                Work on Real Products. <br className="hidden sm:block" />
                <span className="text-[#2563EB]">Learn From Real Engineers.</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
                Bridge the gap between academic theory and production-ready engineering. Gain practical skills through 1-on-1 mentorship, clean code reviews, and live digital products built for global clients.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <button
                  type="button"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  <span>Explore Open Tracks</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </AnimatedSection>

            {/* HERO TRUST BADGES ROW */}
            <AnimatedSection delay={0.15}>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#0A0A0A]">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                  <Laptop size={15} className="text-[#2563EB]" />
                  <span>100% Remote</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                  <Layers size={15} className="text-[#2563EB]" />
                  <span>Real Client Projects</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                  <UserCheck size={15} className="text-[#2563EB]" />
                  <span>Mentor Guided</span>
                </div>
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-gray-200/80 shadow-2xs">
                  <FileCheck size={15} className="text-[#2563EB]" />
                  <span>Completion Certificate</span>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. WHY JOIN US                                                            */}
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
                { icon: Briefcase, title: 'Real Products', desc: 'Work on actual applications that solve real business problems and build a verified portfolio.' },
                { icon: Users, title: 'Direct Mentorship', desc: 'Learn directly from senior engineers and product designers through weekly code reviews.' },
                { icon: Terminal, title: 'Modern Workflows', desc: 'Gain hands-on experience with modern tech stacks like React, TypeScript, Tailwind, Figma, and AI APIs.' },
                { icon: TrendingUp, title: 'Career Growth', desc: 'Develop practical confidence, work samples, and a verifiable completion certificate.' }
              ].map((benefit, i) => (
                <AnimatedSection key={benefit.title} delay={i * 0.08}>
                  <div className="p-8 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 shadow-2xs hover:shadow-md transition-shadow h-full flex flex-col justify-between">
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
        {/* 3. EXPANDED INTERNSHIP TRACKS                                            */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1100px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Available Internship Tracks
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Select a track that matches your learning goals and career trajectory.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {internshipPrograms.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.08}>
                  <div className="p-6 sm:p-8 rounded-[28px] bg-white border border-gray-200/80 hover:border-[#2563EB]/40 hover:shadow-xl transition-all duration-300 group space-y-6">
                    
                    {/* Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-5">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors font-sans">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-2.5 text-xs font-semibold text-[#6B7280] mt-2">
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
                        type="button"
                        aria-label={`Apply for ${job.title}`}
                        onClick={() => handleApplyClick(job.value)}
                        className="h-11 px-6 rounded-2xl bg-[#2563EB] text-white font-bold text-xs shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer shrink-0 hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                      >
                        <span>Apply Now</span>
                        <ArrowRight size={14} />
                      </motion.button>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">
                      {job.desc}
                    </p>

                    {/* FEATURE BADGES ROW FOR INTERNSHIP CARDS */}
                    <div className="flex flex-wrap gap-2 text-[11px] font-bold">
                      <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 text-gray-700 flex items-center gap-1">
                        <Laptop size={12} className="text-[#2563EB]" /> Remote
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 text-gray-700 flex items-center gap-1">
                        <FileCheck size={12} className="text-[#2563EB]" /> Certificate
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 text-gray-700 flex items-center gap-1">
                        <UserCheck size={12} className="text-[#2563EB]" /> Mentorship
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-gray-100 border border-gray-200 text-gray-700 flex items-center gap-1">
                        <Layers size={12} className="text-[#2563EB]" /> Live Projects
                      </span>
                    </div>

                    {/* What You'll Learn & Who Should Apply Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-gray-100">
                      
                      {/* What You'll Learn Tags */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans">
                          What You'll Learn & Practice
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-2.5 py-1 rounded-lg bg-blue-50/70 border border-blue-100 text-xs font-bold text-[#2563EB]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Who Should Apply Tags */}
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block font-sans">
                          Ideal Applicants
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {job.whoShouldApply.map((applicant, aIdx) => (
                            <span key={aIdx} className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200/80 text-xs font-semibold text-[#0A0A0A]">
                              {applicant}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. WHAT YOU'LL RECEIVE (BENEFITS SECTION)                                */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                <Award size={14} />
                <span>Internship Perks</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                What You'll Receive
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Tangible benefits designed to accelerate your technical career.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Users, title: '1-on-1 Mentorship', text: 'Direct access to senior developers and designers for guidance, code reviews, and career advice.' },
                { icon: Code, title: 'Real Product Experience', text: 'Work on live web applications, SaaS tools, and AI workflows that go directly into production.' },
                { icon: Award, title: 'Verifiable Certificate', text: 'Receive an official ProstoLabs Completion Certificate and LinkedIn recommendation upon track completion.' },
                { icon: Briefcase, title: 'Portfolio Work Samples', text: 'Build strong, real-world case studies to feature on your resume, GitHub, and portfolio.' },
                { icon: Globe, title: 'Flexible Remote Work', text: 'Complete tasks asynchronously from home with flexible hours designed for students.' },
                { icon: Zap, title: 'Continuous Feedback', text: 'Weekly 1-on-1 check-ins and constructive feedback to refine your engineering standards.' }
              ].map((benefit, i) => (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="p-8 rounded-[28px] bg-[#FAFAFA] border border-gray-200/80 shadow-2xs hover:shadow-lg hover:border-[#2563EB]/30 transition-all duration-300 h-full flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                        <benefit.icon size={22} />
                      </div>
                      <h3 className="font-bold text-xl text-[#0A0A0A] font-sans">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium">{benefit.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. APPLICATION PROCESS (TIMELINE WITH CONNECTORS)                        */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white overflow-hidden">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-3 font-sans">
                Application Process
              </h2>
              <p className="text-base sm:text-lg text-blue-100 font-medium">
                A simple 4-step path from application to active building.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { num: '01', title: 'Submit Form', desc: 'Fill out the online application below with your details and resume.' },
                { num: '02', title: 'Profile Review', desc: 'Our team reviews your background, projects, and track alignment.' },
                { num: '03', title: 'Onboarding Task', desc: 'Shortlisted applicants receive onboarding details and mentor pairing.' },
                { num: '04', title: 'Start Building', desc: 'Begin building real product features under guided 1-on-1 mentorship.' }
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.08} className="relative">
                  <div className="p-6 rounded-[24px] bg-white/10 backdrop-blur-md border border-white/15 h-full relative z-10">
                    <span className="text-xs font-bold text-blue-200 mb-3 block">Step {step.num}</span>
                    <h3 className="text-xl font-bold mb-2 font-sans">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-blue-100 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                  {/* Desktop Timeline Connector */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-white/20 z-0" />
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. ENRICHED INTERNSHIP APPLICATION FORM                                 */}
        {/* ========================================================================= */}
        <section ref={formRef} className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80 scroll-mt-20">
          <div className="max-w-[850px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Apply for an Internship
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Complete your details below to submit your application directly to our team.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              {isSubmitted ? (
                /* IMPROVED SUCCESS STATE WITH TIMELINE EXPECTATIONS & REASSURING SENTENCE */
                <div className="bg-[#FAFAFA] rounded-[32px] p-8 sm:p-12 border border-gray-200/80 shadow-sm space-y-8">
                  <div className="text-center max-w-md mx-auto space-y-3">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#0A0A0A] font-sans">Application Received!</h3>
                    <p className="text-sm sm:text-base text-[#6B7280] font-medium leading-relaxed">
                      Thank you for applying to the ProstoLabs Internship Program.
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-[#2563EB] bg-blue-50 p-3 rounded-xl border border-blue-100">
                      Keep an eye on your inbox. Shortlisted applicants will receive the next steps by email.
                    </p>
                  </div>

                  {/* Next Steps Timeline Box */}
                  <div className="p-6 rounded-2xl bg-white border border-gray-200/80 space-y-4 max-w-lg mx-auto">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans">
                      What Happens Next & Timeline
                    </span>
                    <div className="space-y-3 text-xs sm:text-sm font-medium text-gray-700">
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                        <span><strong>Resume Review:</strong> Our team will review your application within 2 to 3 business days.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                        <span><strong>Interview/Task:</strong> Shortlisted applicants will receive an email invitation for a brief chat or task.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                        <span><strong>Onboarding:</strong> Selected interns will be paired with a lead mentor and onboarded.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* ACCESSIBLE FORM ENRICHED WITH ADDITIONAL FIELDS */
                <form 
                  action="https://formsubmit.co/hello@prostolabs.com" 
                  method="POST" 
                  encType="multipart/form-data"
                  className="space-y-6 p-6 sm:p-10 bg-[#FAFAFA] rounded-[32px] border border-gray-200/80 shadow-sm"
                >
                  <input type="hidden" name="_subject" value="New Internship Application - ProstoLabs" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/careers?submitted=true` : ''} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-name" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                        Full Name <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input 
                        id="applicant-name"
                        type="text" 
                        name="Full Name" 
                        required 
                        autoComplete="name"
                        aria-label="Full Name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all" 
                      />
                    </div>
                    
                    {/* Email Address */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-email" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                        Email Address <span className="text-red-500" aria-hidden="true">*</span>
                      </label>
                      <input 
                        id="applicant-email"
                        type="email" 
                        name="Email Address" 
                        required 
                        autoComplete="email"
                        aria-label="Email Address"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all" 
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* College / University */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-college" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                        College / University
                      </label>
                      <input 
                        id="applicant-college"
                        type="text" 
                        name="College / University" 
                        aria-label="College or University"
                        placeholder="e.g. SRM University, IIT, Self-Taught"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all" 
                      />
                    </div>

                    {/* Current Year */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-year" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                        Current Year / Status
                      </label>
                      <select
                        id="applicant-year"
                        name="Current Year"
                        aria-label="Current Year or Education Status"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all cursor-pointer"
                      >
                        <option value="1st Year">1st Year Student</option>
                        <option value="2nd Year">2nd Year Student</option>
                        <option value="3rd Year">3rd Year Student</option>
                        <option value="4th Year / Final">4th Year / Final Year</option>
                        <option value="Recent Graduate">Recent Graduate</option>
                        <option value="Self-Taught / Switching">Self-Taught / Career Switcher</option>
                      </select>
                    </div>

                  </div>

                  {/* Select Track */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-position" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                      Select Internship Track <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        id="applicant-position"
                        name="Position" 
                        required 
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        aria-label="Select Internship Track"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all appearance-none cursor-pointer"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* LinkedIn Profile */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-linkedin" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                        LinkedIn Profile
                      </label>
                      <input 
                        id="applicant-linkedin"
                        type="url" 
                        name="LinkedIn Profile" 
                        aria-label="LinkedIn Profile URL"
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all" 
                      />
                    </div>

                    {/* Portfolio / GitHub */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-portfolio" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                        Portfolio / GitHub URL
                      </label>
                      <input 
                        id="applicant-portfolio"
                        type="url" 
                        name="Portfolio or GitHub" 
                        aria-label="Portfolio or GitHub URL"
                        placeholder="https://github.com/username or site"
                        className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all" 
                      />
                    </div>

                  </div>

                  {/* Motivation Text */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-motivation" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                      Why do you want to join ProstoLabs?
                    </label>
                    <textarea 
                      id="applicant-motivation"
                      name="Why Join ProstoLabs" 
                      rows={3} 
                      aria-label="Motivation for joining ProstoLabs"
                      placeholder="Briefly tell us what you hope to learn during your internship..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-white border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all resize-none" 
                    />
                  </div>

                  {/* Resume Upload Box */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                      Upload Resume <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
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
                        id="applicant-resume"
                        type="file" 
                        name="Resume" 
                        required
                        aria-label="Upload Resume"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden" 
                        accept=".pdf,.doc,.docx"
                      />
                    </div>
                  </div>

                  {/* Form Footer */}
                  <div className="pt-4 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Your information is strictly confidential.</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      aria-label="Submit internship application"
                      className="w-full sm:w-auto h-12 px-8 bg-[#2563EB] text-white rounded-2xl font-bold text-sm shadow-md cursor-pointer hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                    >
                      Submit Application
                    </motion.button>
                  </div>

                </form>
              )}
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. INTERNSHIP PRINCIPLES (TRUST CARDS)                                   */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans mb-1">
                Our Internship Principles
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                How We Treat Our Interns
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Learn by Building',
                  desc: 'No coffee runs or dummy work. Interns contribute code, visual assets, and research to active digital products.',
                  icon: Code
                },
                {
                  title: 'Mentorship Over Micromanagement',
                  desc: 'We provide structured guidance and weekly reviews while giving you freedom to solve engineering challenges.',
                  icon: Users
                },
                {
                  title: 'Professional Growth',
                  desc: 'Our primary goal is elevating your skill set so you leave with a verified portfolio and job-ready confidence.',
                  icon: TrendingUp
                }
              ].map((principle, pIdx) => (
                <AnimatedSection key={pIdx} delay={pIdx * 0.08}>
                  <div className="p-7 rounded-[28px] bg-white border border-gray-200/80 shadow-2xs space-y-3 h-full flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center">
                        <principle.icon size={20} />
                      </div>
                      <h4 className="text-lg font-bold text-[#0A0A0A] font-sans">
                        {principle.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B7280] font-medium leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 8. CONTINUE EXPLORING (INTERNAL LINKING DIRECTORY)                        */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-20 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider block font-sans mb-1">
                Explore ProstoLabs
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                Continue Exploring
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: 'About ProstoLabs',
                  desc: 'Learn about our engineering philosophy, core values, and team culture.',
                  link: '/about',
                  cta: 'Learn Our Story',
                  icon: Briefcase
                },
                {
                  title: 'Resources & Journal',
                  desc: 'Read technical guides, web architecture frameworks, and automation advice.',
                  link: '/resources',
                  cta: 'Explore Resources',
                  icon: BookOpen
                },
                {
                  title: 'Core Services',
                  desc: 'Explore custom web development, AI automations, and ongoing maintenance.',
                  link: '/services',
                  cta: 'View Services',
                  icon: Zap
                },
                {
                  title: 'Our Products',
                  desc: 'Discover FlySava, our flagship luxury aviation web platform.',
                  link: '/flysava',
                  cta: 'Explore FlySava',
                  icon: Globe
                }
              ].map((card, cIdx) => (
                <AnimatedSection key={cIdx} delay={cIdx * 0.06}>
                  <Link
                    to={card.link}
                    aria-label={`${card.cta}: ${card.title}`}
                    className="p-6 rounded-[24px] bg-[#FAFAFA] border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center group-hover:scale-105 transition-transform">
                        <card.icon size={20} />
                      </div>
                      <h4 className="text-base font-bold text-[#0A0A0A] font-sans group-hover:text-[#2563EB] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-xs text-[#6B7280] font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-200/60 flex items-center gap-1.5 text-xs font-bold text-[#2563EB]">
                      <span>{card.cta}</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 9. FAQ ACCORDION                                                         */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA] border-t border-gray-200/80">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight mb-3 font-sans">
                Frequently Asked Questions
              </h2>
              <p className="text-base sm:text-lg text-[#6B7280] font-medium">
                Everything you need to know about joining the ProstoLabs Internship Program.
              </p>
            </AnimatedSection>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.05}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 10. LATEST CAREER & ENGINEERING RESOURCES                                 */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-white border-t border-gray-200/80">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#2563EB] font-bold text-xs uppercase tracking-wider mb-3">
                  <span>From Our Journal</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-tight font-sans">
                  Latest Career & Tech Guides
                </h2>
              </div>
              <Link to="/resources" aria-label="View all publication resources">
                <button 
                  type="button"
                  className="px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-[#0A0A0A] hover:bg-gray-100 font-bold text-xs flex items-center gap-2 cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  <span>View All Resources</span>
                  <ArrowRight size={14} />
                </button>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.1}>
                  <Link
                    to={`/resources/${art.slug}`}
                    aria-label={`Read resource: ${art.title}`}
                    className="group rounded-[28px] bg-[#FAFAFA] border border-gray-200/90 shadow-2xs hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden cursor-pointer h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
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
                      <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors leading-snug font-sans">
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

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 11. FINAL CALL TO ACTION BANNER                                           */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A] text-white text-center py-16 md:py-20 px-6 sm:px-12 shadow-xl">
              <div className="relative z-10 max-w-2xl mx-auto space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans leading-tight">
                  Your First Professional Project Starts Here.
                </h2>
                <p className="text-sm sm:text-base text-blue-100 font-medium leading-relaxed">
                  Join ProstoLabs as an intern and build real-world experience under expert 1-on-1 mentorship.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3.5 pt-2">
                  <button 
                    type="button"
                    onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    aria-label="Scroll to internship application form"
                    className="w-full sm:w-auto h-12 px-7 bg-white text-[#2563EB] rounded-2xl font-bold text-sm shadow-md hover:bg-blue-50 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                  >
                    Apply for Internship
                  </button>
                  <Link to="/resources" aria-label="Explore ProstoLabs career guides and resources">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-12 px-7 bg-white/10 text-white rounded-2xl font-bold text-sm border border-white/20 hover:bg-white/20 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
                    >
                      Explore Our Resources
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