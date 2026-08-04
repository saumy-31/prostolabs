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
  Code, Zap, Laptop, FileCheck, UserCheck, Layers, HelpCircle
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
    <div className="border border-gray-200/50 rounded-2xl bg-white/70 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-[#0A0A0A] cursor-pointer hover:text-[#2563EB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 transition-colors font-sans group"
      >
        <span className="tracking-tight pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 shrink-0 ${isOpen ? 'bg-blue-50' : 'bg-gray-50 group-hover:bg-blue-50'}`}>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-180 text-[#2563EB]' : 'text-gray-400 group-hover:text-[#2563EB]'}`} 
          />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: easeSaaS }}
          >
            <div className="px-6 pb-6 pt-0 text-[15px] text-[#6B7280] font-medium leading-relaxed border-t border-gray-100/80 mt-1 pt-4">
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
      }, 150)
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

      <div className="relative overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-500/30 selection:text-blue-900">
        
        {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
        <div className="absolute top-0 left-0 right-0 h-[120vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[15%] right-[-5%] w-[35%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-6 pt-24 sm:pt-32 md:pt-40 pb-20 md:pb-24 overflow-hidden text-center">
          <div className="max-w-[1000px] mx-auto relative z-10 space-y-8">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-8 transform-gpu">
                <Sparkles size={16} className="text-[#2563EB]" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">ProstoLabs Engineering Internships</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-8 text-[#0A0A0A] font-sans">
                Work on Real Products. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#2563EB] to-cyan-500">Learn From Real Engineers.</span>
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl text-[#6B7280] max-w-3xl mx-auto leading-[1.6] mb-10 font-medium tracking-tight">
                Bridge the gap between academic theory and production-ready engineering. Gain practical skills through 1-on-1 mentorship, clean code reviews, and live digital products built for global clients.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="group relative w-full sm:w-auto h-14 px-8 rounded-full bg-[#2563EB] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all overflow-hidden shadow-[0_8px_30px_rgba(37,99,235,0.3)] border border-blue-400/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Open Tracks
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </AnimatedSection>

            {/* HERO TRUST BADGES ROW */}
            <AnimatedSection delay={0.15}>
              <div className="pt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-[#0A0A0A]">
                {[
                  { icon: Laptop, text: '100% Remote' },
                  { icon: Layers, text: 'Real Client Projects' },
                  { icon: UserCheck, text: 'Mentor Guided' },
                  { icon: FileCheck, text: 'Completion Certificate' }
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/60 backdrop-blur-md border border-gray-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:-translate-y-0.5 transition-transform cursor-default">
                    <badge.icon size={16} className="text-[#2563EB]" strokeWidth={2.5} />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. WHY JOIN US (BENTO GRID) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative bg-transparent">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Why Join ProstoLabs
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
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
                  <div className="group p-8 rounded-[32px] bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/30 transition-all duration-500 h-full flex flex-col justify-between overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2 group-hover:scale-150 group-hover:bg-blue-500/10 transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-white shadow-sm border border-blue-100 text-[#2563EB] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <benefit.icon size={24} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0A0A0A] mb-3 font-sans tracking-tight">{benefit.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{benefit.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. EXPANDED INTERNSHIP TRACKS (PREMIUM CARDS) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1100px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Available Internship Tracks
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Select a track that matches your learning goals and career trajectory.
              </p>
            </AnimatedSection>

            <div className="space-y-6 sm:space-y-8">
              {internshipPrograms.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.1}>
                  <div className="p-8 sm:p-10 rounded-[32px] bg-white/80 backdrop-blur-xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.08)] hover:border-[#2563EB]/40 transition-all duration-500 group flex flex-col gap-8">
                    
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-gray-100/80 pb-8">
                      <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0A0A] font-sans tracking-tight mb-4 group-hover:text-[#2563EB] transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-3 text-xs sm:text-sm font-semibold text-[#4B5563]">
                          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200/80">
                            <MapPin size={16} className="text-[#2563EB]" strokeWidth={2.5} /> {job.location}
                          </div>
                          <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-xl border border-gray-200/80">
                            <Clock size={16} className="text-[#2563EB]" strokeWidth={2.5} /> Duration: {job.duration}
                          </div>
                        </div>
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="button"
                        aria-label={`Apply for ${job.title}`}
                        onClick={() => handleApplyClick(job.value)}
                        className="h-12 px-8 rounded-full bg-[#0A0A0A] text-white font-bold text-sm shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2 shrink-0 hover:bg-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 w-full md:w-auto"
                      >
                        <span>Apply Now</span>
                        <ArrowRight size={16} />
                      </motion.button>
                    </div>

                    {/* Description */}
                    <p className="text-[15px] sm:text-[17px] text-[#4B5563] leading-[1.7] font-medium max-w-4xl">
                      {job.desc}
                    </p>

                    {/* FEATURE BADGES ROW FOR INTERNSHIP CARDS */}
                    <div className="flex flex-wrap gap-2.5 text-[12px] font-bold">
                      <span className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-700 flex items-center gap-1.5 shadow-sm">
                        <Laptop size={14} className="text-[#2563EB]" /> Remote
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-700 flex items-center gap-1.5 shadow-sm">
                        <FileCheck size={14} className="text-[#2563EB]" /> Certificate
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-700 flex items-center gap-1.5 shadow-sm">
                        <UserCheck size={14} className="text-[#2563EB]" /> Mentorship
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-200/80 text-gray-700 flex items-center gap-1.5 shadow-sm">
                        <Layers size={14} className="text-[#2563EB]" /> Live Projects
                      </span>
                    </div>

                    {/* What You'll Learn & Who Should Apply Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                      {/* What You'll Learn Tags */}
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans">
                          What You'll Learn & Practice
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-3.5 py-1.5 rounded-xl bg-blue-50/70 border border-blue-100 text-[13px] font-bold text-[#2563EB]">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Who Should Apply Tags */}
                      <div className="space-y-4">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest block font-sans">
                          Ideal Applicants
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {job.whoShouldApply.map((applicant, aIdx) => (
                            <span key={aIdx} className="px-3.5 py-1.5 rounded-xl bg-white border border-gray-200/80 text-[13px] font-semibold text-[#0A0A0A] shadow-sm">
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
        {/* 4. WHAT YOU'LL RECEIVE (BENEFITS SECTION) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                <Award size={14} />
                <span>Internship Perks</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                What You'll Receive
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Tangible benefits designed to accelerate your technical career.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { icon: Users, title: '1-on-1 Mentorship', text: 'Direct access to senior developers and designers for guidance, code reviews, and career advice.' },
                { icon: Code, title: 'Real Product Experience', text: 'Work on live web applications, SaaS tools, and AI workflows that go directly into production.' },
                { icon: Award, title: 'Verifiable Certificate', text: 'Receive an official ProstoLabs Completion Certificate and LinkedIn recommendation upon track completion.' },
                { icon: Briefcase, title: 'Portfolio Work Samples', text: 'Build strong, real-world case studies to feature on your resume, GitHub, and portfolio.' },
                { icon: Globe, title: 'Flexible Remote Work', text: 'Complete tasks asynchronously from home with flexible hours designed for students.' },
                { icon: Zap, title: 'Continuous Feedback', text: 'Weekly 1-on-1 check-ins and constructive feedback to refine your engineering standards.' }
              ].map((benefit, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className="p-8 rounded-[32px] bg-white border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/30 transition-all duration-300 h-full flex flex-col justify-between group">
                    <div className="space-y-5">
                      <div className="w-14 h-14 rounded-[20px] bg-gray-50 border border-gray-100 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                        <benefit.icon size={26} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-xl md:text-2xl text-[#0A0A0A] font-sans tracking-tight">{benefit.title}</h3>
                      <p className="text-[15px] text-[#6B7280] leading-relaxed font-medium">{benefit.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. APPLICATION PROCESS (DARK THEME TIMELINE) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-[#0A0A0A] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_top_right,_rgba(37,99,235,0.15)_0%,_transparent_70%)] pointer-events-none" />
          
          <div className="max-w-[1300px] mx-auto relative z-10">
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16 sm:mb-24">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Application Process
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 font-medium">
                A simple 4-step path from application to active building.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                { num: '01', title: 'Submit Form', desc: 'Fill out the online application below with your details and resume.' },
                { num: '02', title: 'Profile Review', desc: 'Our team reviews your background, projects, and track alignment.' },
                { num: '03', title: 'Onboarding Task', desc: 'Shortlisted applicants receive onboarding details and mentor pairing.' },
                { num: '04', title: 'Start Building', desc: 'Begin building real product features under guided 1-on-1 mentorship.' }
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1} className="relative group">
                  <div className="p-8 sm:p-10 rounded-[32px] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 h-full relative z-10">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-lg mb-6 border border-blue-500/30 group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 font-sans tracking-tight text-white">{step.title}</h3>
                    <p className="text-[15px] text-gray-400 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                  {/* Desktop Timeline Connector */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-white/10 z-0" />
                  )}
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. ENRICHED INTERNSHIP APPLICATION FORM */}
        {/* ========================================================================= */}
        <section ref={formRef} className="py-24 md:py-32 px-6 relative bg-white scroll-mt-20">
          <div className="max-w-[850px] mx-auto">
            <AnimatedSection className="text-center mb-16 sm:mb-20">
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Apply for an Internship
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Complete your details below to submit your application directly to our team.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              {isSubmitted ? (
                /* SUCCESS STATE WITH TIMELINE EXPECTATIONS */
                <div className="bg-[#FAFAFA] rounded-[40px] p-10 sm:p-16 border border-gray-200/80 shadow-sm space-y-10">
                  <div className="text-center max-w-lg mx-auto space-y-4">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-emerald-100 shadow-sm">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#0A0A0A] font-sans tracking-tight">Application Received!</h3>
                    <p className="text-base sm:text-lg text-[#6B7280] font-medium leading-relaxed">
                      Thank you for applying to the ProstoLabs Internship Program.
                    </p>
                    <p className="text-sm font-semibold text-[#2563EB] bg-blue-50/80 backdrop-blur-sm p-4 rounded-xl border border-blue-100/80 mt-4">
                      Keep an eye on your inbox. Shortlisted applicants will receive the next steps by email.
                    </p>
                  </div>

                  {/* Next Steps Timeline Box */}
                  <div className="p-8 rounded-[24px] bg-white border border-gray-200/80 shadow-sm max-w-xl mx-auto space-y-6">
                    <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans">
                      What Happens Next & Timeline
                    </span>
                    <div className="space-y-5 text-[15px] font-medium text-gray-700">
                      <div className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">1</span>
                        <span className="leading-relaxed"><strong>Resume Review:</strong> Our team will review your application within 2 to 3 business days.</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">2</span>
                        <span className="leading-relaxed"><strong>Interview/Task:</strong> Shortlisted applicants will receive an email invitation for a brief chat or task.</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="w-6 h-6 rounded-full bg-blue-50 text-[#2563EB] font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">3</span>
                        <span className="leading-relaxed"><strong>Onboarding:</strong> Selected interns will be paired with a lead mentor and onboarded.</span>
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
                  className="space-y-8 p-8 sm:p-12 bg-white/70 backdrop-blur-xl rounded-[40px] border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500"
                >
                  <input type="hidden" name="_subject" value="New Internship Application - ProstoLabs" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/careers?submitted=true` : ''} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="applicant-name" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
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
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                      />
                    </div>
                    
                    {/* Email Address */}
                    <div className="space-y-2">
                      <label htmlFor="applicant-email" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
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
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* College / University */}
                    <div className="space-y-2">
                      <label htmlFor="applicant-college" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                        College / University
                      </label>
                      <input 
                        id="applicant-college"
                        type="text" 
                        name="College / University" 
                        aria-label="College or University"
                        placeholder="e.g. SRM University, IIT, Self-Taught"
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                      />
                    </div>

                    {/* Current Year */}
                    <div className="space-y-2">
                      <label htmlFor="applicant-year" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                        Current Year / Status
                      </label>
                      <div className="relative">
                        <select
                          id="applicant-year"
                          name="Current Year"
                          aria-label="Current Year or Education Status"
                          className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all cursor-pointer appearance-none shadow-sm"
                        >
                          <option value="1st Year">1st Year Student</option>
                          <option value="2nd Year">2nd Year Student</option>
                          <option value="3rd Year">3rd Year Student</option>
                          <option value="4th Year / Final">4th Year / Final Year</option>
                          <option value="Recent Graduate">Recent Graduate</option>
                          <option value="Self-Taught / Switching">Self-Taught / Career Switcher</option>
                        </select>
                        <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                  </div>

                  {/* Select Track */}
                  <div className="space-y-2">
                    <label htmlFor="applicant-position" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
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
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all appearance-none cursor-pointer shadow-sm"
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* LinkedIn Profile */}
                    <div className="space-y-2">
                      <label htmlFor="applicant-linkedin" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                        LinkedIn Profile
                      </label>
                      <input 
                        id="applicant-linkedin"
                        type="url" 
                        name="LinkedIn Profile" 
                        aria-label="LinkedIn Profile URL"
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                      />
                    </div>

                    {/* Portfolio / GitHub */}
                    <div className="space-y-2">
                      <label htmlFor="applicant-portfolio" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                        Portfolio / GitHub URL
                      </label>
                      <input 
                        id="applicant-portfolio"
                        type="url" 
                        name="Portfolio or GitHub" 
                        aria-label="Portfolio or GitHub URL"
                        placeholder="https://github.com/username or site"
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                      />
                    </div>

                  </div>

                  {/* Motivation Text */}
                  <div className="space-y-2">
                    <label htmlFor="applicant-motivation" className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                      Why do you want to join ProstoLabs?
                    </label>
                    <textarea 
                      id="applicant-motivation"
                      name="Why Join ProstoLabs" 
                      rows={4} 
                      aria-label="Motivation for joining ProstoLabs"
                      placeholder="Briefly tell us what you hope to learn during your internship..." 
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-blue-500/30 transition-all resize-none shadow-sm" 
                    />
                  </div>

                  {/* Resume Upload Box */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                      Upload Resume <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-[24px] p-10 text-center bg-[#FAFAFA] transition-all cursor-pointer shadow-sm ${
                        fileName ? 'border-[#2563EB] bg-blue-50/20' : 'border-gray-200/80 hover:border-[#2563EB]/40 hover:bg-white'
                      }`}
                    >
                      {fileName ? (
                        <>
                          <CheckCircle2 className="w-10 h-10 text-[#2563EB] mx-auto mb-3" />
                          <p className="text-sm font-bold text-[#0A0A0A]">Resume Attached</p>
                          <p className="text-[13px] text-[#2563EB] font-medium mt-1">{fileName}</p>
                        </>
                      ) : (
                        <>
                          <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                            <UploadCloud className="w-8 h-8 text-gray-400" />
                          </div>
                          <p className="text-[15px] font-bold text-[#0A0A0A]">Click to upload your resume</p>
                          <p className="text-xs text-[#6B7280] font-medium mt-1.5">PDF, DOC, or DOCX (Max 10MB)</p>
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
                  <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2.5 text-[13px] text-[#6B7280] font-medium bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Your information is strictly confidential.</span>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit" 
                      aria-label="Submit internship application"
                      className="w-full sm:w-auto h-14 px-10 bg-[#0A0A0A] text-white rounded-full font-bold text-sm shadow-[0_8px_20px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-gray-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Submit Application</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                </form>
              )}
            </AnimatedSection>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 7. INTERNSHIP PRINCIPLES (TRUST CARDS) */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-transparent relative border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans mb-3">
                Our Internship Principles
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A0A0A] tracking-[-0.02em] font-sans">
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
                  <div className="p-8 sm:p-10 rounded-[32px] bg-white border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/30 transition-all duration-300 space-y-3 h-full flex flex-col justify-between group">
                    <div className="space-y-5">
                      <div className="w-14 h-14 rounded-[20px] bg-gray-50 border border-gray-100 text-[#2563EB] flex items-center justify-center group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-300">
                        <principle.icon size={26} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-[#0A0A0A] font-sans tracking-tight">
                        {principle.title}
                      </h4>
                      <p className="text-[15px] text-[#6B7280] font-medium leading-relaxed">
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
        {/* 8. FAQ ACCORDION */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-gray-200/50">
          <div className="max-w-[900px] mx-auto">
            <AnimatedSection className="text-center mb-16 sm:mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                <HelpCircle size={14} />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A0A0A] tracking-[-0.03em] mb-6 font-sans leading-[1.1]">
                Questions about joining?
              </h2>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium">
                Everything you need to know about the ProstoLabs Internship Program.
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
        {/* 9. LATEST CAREER & ENGINEERING RESOURCES */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/80 backdrop-blur-sm border border-blue-100/50 text-[#2563EB] font-bold text-xs uppercase tracking-widest mb-6">
                  From Our Journal
                </div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A0A0A] tracking-[-0.03em] font-sans leading-tight">
                  Latest Career & Tech Guides
                </h2>
              </div>
              <Link to="/resources" aria-label="View all publication resources" className="shrink-0">
                <button 
                  type="button"
                  className="rounded-full px-8 h-12 border border-gray-300 text-[#0A0A0A] hover:bg-white hover:border-gray-400 font-bold transition-all shadow-sm flex items-center gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                >
                  <span>View All Resources</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.1}>
                  <Link
                    to={`/resources/${art.slug}`}
                    aria-label={`Read resource: ${art.title}`}
                    className="group flex flex-col h-full overflow-hidden cursor-pointer rounded-[32px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
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

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 10. CONTINUE EXPLORING */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-gray-200/50">
          <div className="max-w-[1300px] mx-auto">
            
            <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-widest block font-sans mb-3">
                Explore ProstoLabs
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0A0A0A] tracking-[-0.02em] font-sans">
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
                    className="p-6 md:p-8 rounded-[32px] bg-[#FAFAFA] border border-gray-200/80 hover:border-[#2563EB]/40 shadow-2xs hover:shadow-[0_20px_40px_rgba(37,99,235,0.08)] hover:bg-white transition-all duration-300 flex flex-col justify-between h-full group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
                  >
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 text-[#0A0A0A] flex items-center justify-center group-hover:bg-blue-50 group-hover:text-[#2563EB] transition-colors duration-300">
                        <card.icon size={22} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-lg md:text-xl font-bold text-[#0A0A0A] font-sans group-hover:text-[#2563EB] transition-colors tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-[14px] text-[#6B7280] font-medium leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-6 mt-6 border-t border-gray-200/60 flex items-center gap-2 text-[13px] font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">
                      <span>{card.cta}</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 11. FINAL CALL TO ACTION BANNER */}
        {/* ========================================================================= */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA]">
          <div className="max-w-[1300px] mx-auto">
            <AnimatedSection className="relative rounded-[40px] overflow-hidden bg-[#0A0A0A] text-white text-center py-20 md:py-28 px-6 sm:px-12 shadow-2xl">
              {/* Premium Gradient Overlays */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.4)_0%,_transparent_70%)] pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none" />
              
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.03em] font-sans leading-[1.1]">
                  Your First Professional <br className="hidden sm:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Project Starts Here.</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                  Join ProstoLabs as an intern and build real-world experience under expert 1-on-1 mentorship.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
                  <button 
                    type="button"
                    onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    aria-label="Scroll to internship application form"
                    className="group relative w-full sm:w-auto h-14 px-8 bg-white text-[#0A0A0A] rounded-full font-bold text-base shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all cursor-pointer overflow-hidden flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
                  >
                    <span>Apply for Internship</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                  <Link to="/resources" aria-label="Explore ProstoLabs career guides and resources">
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="w-full sm:w-auto h-14 px-8 bg-white/10 backdrop-blur-md text-white rounded-full font-bold text-base border border-white/20 hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A]"
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