import React, { useState, useRef, useEffect } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { SEO } from '../components/seo/SEO'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { resources } from '../data/resourcesData'
import { 
  Briefcase, Users, Terminal, TrendingUp, 
  MapPin, Clock, ChevronDown, CheckCircle2,
  UploadCloud, ShieldCheck, Sparkles, ArrowRight,
  Award, Globe, BookOpen,
  Code, Zap, Laptop, FileCheck, UserCheck, Layers, 
} from 'lucide-react'

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

// --- FAQ DATA ---
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

// --- JOB POSTING SCHEMA INJECTION ---
function JobPostingSchema({ jobs }: { jobs: InternshipTrack[] }) {
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-slate-200/80 rounded-2xl bg-white shadow-2xs hover:border-slate-300 transition-colors overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`Toggle answer for: ${question}`}
        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-slate-900 cursor-pointer hover:text-blue-600 transition-colors group"
      >
        <span className="tracking-tight pr-4">{question}</span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0 ${isOpen ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-t border-slate-100 pt-4">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const Careers: React.FC = () => {
  const formRef = useRef<HTMLElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const location = useLocation()
  const navigate = useNavigate()

  const [selectedPosition, setSelectedPosition] = useState<string>('')
  const [fileName, setFileName] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
      
      <JobPostingSchema jobs={internshipPrograms} />

      <div className="relative w-full overflow-x-clip bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-600">
        
        {/* Subtle Ambient Grid Layer */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 top-0 h-[650px] w-full bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-0 right-0 h-[700px] bg-[linear-gradient(to_right,#E2E8F040_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F040_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        {/* ========================================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative flex items-center justify-center px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-16 sm:pb-20 text-center">
          <div className="max-w-[1000px] mx-auto relative z-10 space-y-6">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-blue-600 mb-2">
                <Sparkles size={14} className="text-blue-600" />
                <span>ProstoLabs Engineering Internships</span>
              </div>

              <h1 className="text-[36px] sm:text-[50px] md:text-[60px] lg:text-[68px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950">
                Work on Real Products.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                  Learn From Real Engineers.
                </span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-normal pt-2">
                Bridge the gap between academic theory and production-ready engineering. Gain practical skills through 1-on-1 mentorship, clean code reviews, and live digital products built for global clients.
              </p>

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="w-full sm:w-auto h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer shadow-[0_2px_12px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] transition-all"
                >
                  <span>Explore Open Tracks</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </AnimatedSection>

            {/* Badges Strip */}
            <AnimatedSection delay={0.1}>
              <div className="pt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-semibold text-slate-700">
                {[
                  { icon: Laptop, text: '100% Remote' },
                  { icon: Layers, text: 'Real Client Projects' },
                  { icon: UserCheck, text: 'Mentor Guided' },
                  { icon: FileCheck, text: 'Completion Certificate' }
                ].map((badge, idx) => (
                  <div key={idx} className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
                    <badge.icon size={15} className="text-blue-600" />
                    <span>{badge.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WHY JOIN US */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Growth & Experience
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Why Join ProstoLabs
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
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
                <AnimatedSection key={benefit.title} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-5 shadow-2xs">
                        <benefit.icon size={20} strokeWidth={1.75} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-950 mb-2 tracking-tight">{benefit.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{benefit.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. INTERNSHIP TRACKS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1100px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Open Tracks
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Available Internship Tracks
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Select a track that matches your learning goals and career trajectory.
              </p>
            </AnimatedSection>

            <div className="space-y-6">
              {internshipPrograms.map((job, i) => (
                <AnimatedSection key={job.title} delay={i * 0.06}>
                  <div className="p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all flex flex-col gap-6">
                    
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-600">
                          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                            <MapPin size={14} className="text-blue-600" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-200">
                            <Clock size={14} className="text-blue-600" /> Duration: {job.duration}
                          </span>
                        </div>
                      </div>

                      <button 
                        type="button"
                        onClick={() => handleApplyClick(job.value)}
                        className="h-11 px-6 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shrink-0 transition-colors cursor-pointer w-full md:w-auto"
                      >
                        <span>Apply for Track</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {job.desc}
                    </p>

                    {/* Skill Tags Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                      <div className="space-y-2.5">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                          What You&apos;ll Practice
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map((skill, sIdx) => (
                            <span key={sIdx} className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2.5">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                          Ideal Candidates
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {job.whoShouldApply.map((applicant, aIdx) => (
                            <span key={aIdx} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700">
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
        {/* 4. PERKS SECTION */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Internship Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                What You&apos;ll Receive
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Tangible benefits designed to accelerate your technical career.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: '1-on-1 Mentorship', text: 'Direct access to senior developers and designers for guidance, code reviews, and career advice.' },
                { icon: Code, title: 'Real Product Experience', text: 'Work on live web applications, SaaS tools, and AI workflows that go directly into production.' },
                { icon: Award, title: 'Verifiable Certificate', text: 'Receive an official ProstoLabs Completion Certificate and LinkedIn recommendation upon track completion.' },
                { icon: Briefcase, title: 'Portfolio Work Samples', text: 'Build strong, real-world case studies to feature on your resume, GitHub, and portfolio.' },
                { icon: Globe, title: 'Flexible Remote Work', text: 'Complete tasks asynchronously from home with flexible hours designed for students.' },
                { icon: Zap, title: 'Continuous Feedback', text: 'Weekly 1-on-1 check-ins and constructive feedback to refine your engineering standards.' }
              ].map((benefit, i) => (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                        <benefit.icon size={20} strokeWidth={1.75} />
                      </div>
                      <h3 className="font-bold text-lg text-slate-950 mb-2 tracking-tight">{benefit.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">{benefit.text}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. APPLICATION PROCESS */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12 sm:mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Application Process
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                A structured 4-step path from application to active building.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { num: '01', title: 'Submit Form', desc: 'Fill out the online application below with your details and resume.' },
                { num: '02', title: 'Profile Review', desc: 'Our team reviews your background, projects, and track alignment.' },
                { num: '03', title: 'Onboarding Task', desc: 'Shortlisted applicants receive onboarding details and mentor pairing.' },
                { num: '04', title: 'Start Building', desc: 'Begin building real product features under guided 1-on-1 mentorship.' }
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs h-full flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-mono font-bold text-blue-600 block mb-3">{step.num}</span>
                      <h3 className="text-lg font-bold text-slate-950 mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">{step.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. APPLICATION FORM */}
        {/* ========================================================================= */}
        <section ref={formRef} className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white scroll-mt-20">
          <div className="max-w-[760px] mx-auto">
            
            <AnimatedSection className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Application
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                Apply for an Internship
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Complete your details below to submit your application directly to our team.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.08}>
              {isSubmitted ? (
                <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xs space-y-6">
                  <div className="text-center max-w-md mx-auto space-y-3">
                    <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-200 shadow-2xs">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-950 tracking-tight">Application Received</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Thank you for applying to the ProstoLabs Internship Program. Keep an eye on your inbox for updates.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block">
                      Next Steps
                    </span>
                    <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 font-mono">1</span>
                        <span><strong>Resume Review:</strong> Our team reviews applications within 2–3 business days.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 font-mono">2</span>
                        <span><strong>Interview/Task:</strong> Shortlisted applicants receive an invite for a brief review.</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 font-mono">3</span>
                        <span><strong>Onboarding:</strong> Selected interns are paired with lead mentors.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form 
                  action="https://formsubmit.co/hello@prostolabs.com" 
                  method="POST" 
                  encType="multipart/form-data"
                  className="space-y-6 p-6 sm:p-10 bg-slate-50 rounded-3xl border border-slate-200/90 shadow-xs"
                >
                  <input type="hidden" name="_subject" value="New Internship Application - ProstoLabs" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/careers?submitted=true` : ''} />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-name" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="applicant-name"
                        type="text" 
                        name="Full Name" 
                        required 
                        autoComplete="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-email" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input 
                        id="applicant-email"
                        type="email" 
                        name="Email Address" 
                        required 
                        autoComplete="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* College */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-college" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        College / University
                      </label>
                      <input 
                        id="applicant-college"
                        type="text" 
                        name="College / University" 
                        placeholder="e.g. SRM, IIT, Self-Taught"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                      />
                    </div>

                    {/* Status */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-year" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        Current Status
                      </label>
                      <div className="relative">
                        <select
                          id="applicant-year"
                          name="Current Year"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all cursor-pointer appearance-none shadow-2xs"
                        >
                          <option value="1st Year">1st Year Student</option>
                          <option value="2nd Year">2nd Year Student</option>
                          <option value="3rd Year">3rd Year Student</option>
                          <option value="4th Year / Final">4th Year / Final Year</option>
                          <option value="Recent Graduate">Recent Graduate</option>
                          <option value="Self-Taught / Switching">Self-Taught / Career Switcher</option>
                        </select>
                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Track Selection */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-position" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Select Internship Track <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        id="applicant-position"
                        name="Position" 
                        required 
                        value={selectedPosition}
                        onChange={(e) => setSelectedPosition(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer shadow-2xs"
                      >
                        <option value="" disabled>Choose an internship track...</option>
                        <option value="Web Development">Web Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* LinkedIn */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-linkedin" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        LinkedIn Profile
                      </label>
                      <input 
                        id="applicant-linkedin"
                        type="url" 
                        name="LinkedIn Profile" 
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                      />
                    </div>

                    {/* Portfolio/GitHub */}
                    <div className="space-y-1.5">
                      <label htmlFor="applicant-portfolio" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                        Portfolio / GitHub URL
                      </label>
                      <input 
                        id="applicant-portfolio"
                        type="url" 
                        name="Portfolio or GitHub" 
                        placeholder="https://github.com/username"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                      />
                    </div>
                  </div>

                  {/* Motivation */}
                  <div className="space-y-1.5">
                    <label htmlFor="applicant-motivation" className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Why do you want to join ProstoLabs?
                    </label>
                    <textarea 
                      id="applicant-motivation"
                      name="Why Join ProstoLabs" 
                      rows={3} 
                      placeholder="Briefly tell us what you hope to learn during your internship..." 
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none shadow-2xs" 
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Upload Resume <span className="text-red-500">*</span>
                    </label>
                    <div 
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center bg-white transition-all cursor-pointer shadow-2xs ${
                        fileName ? 'border-blue-600 bg-blue-50/20' : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {fileName ? (
                        <>
                          <CheckCircle2 className="w-7 h-7 text-blue-600 mx-auto mb-1.5" />
                          <p className="text-xs font-bold text-slate-900">Resume Attached</p>
                          <p className="text-xs text-blue-600 font-medium mt-0.5">{fileName}</p>
                        </>
                      ) : (
                        <>
                          <div className="w-11 h-11 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center mx-auto mb-2">
                            <UploadCloud className="w-5 h-5 text-slate-400" />
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-slate-800">Click to upload your resume</p>
                          <p className="text-[11px] text-slate-500 font-normal mt-0.5">PDF, DOC, or DOCX (Max 10MB)</p>
                        </>
                      )}
                      <input 
                        id="applicant-resume"
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

                  {/* Footer */}
                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-xs text-slate-500 font-normal">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Your data is confidential.</span>
                    </div>
                    <button 
                      type="submit" 
                      className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Submit Application</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>

                </form>
              )}
            </AnimatedSection>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 7. INTERNSHIP PRINCIPLES */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-y border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Culture
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
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
                <AnimatedSection key={pIdx} delay={pIdx * 0.05}>
                  <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                        <principle.icon size={20} strokeWidth={1.75} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-950 tracking-tight mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
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
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white">
          <div className="max-w-[840px] mx-auto">
            <AnimatedSection className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                FAQ
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
                Questions about joining?
              </h2>
              <p className="text-base text-slate-600 font-normal mt-2">
                Everything you need to know about the ProstoLabs Internship Program.
              </p>
            </AnimatedSection>

            <div className="space-y-3.5">
              {faqData.map((faq, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.03}>
                  <FAQItem question={faq.question} answer={faq.answer} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 9. LATEST RESOURCES */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-100/70 border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">From Our Journal</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mt-1">
                  Latest Career & Tech Guides
                </h2>
              </div>
              <Link to="/resources" className="shrink-0">
                <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700">
                  View All Resources <ArrowRight size={14} />
                </span>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestArticles.map((art, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.05}>
                  <Link
                    to={`/resources/${art.slug}`}
                    className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white border border-slate-200/90 p-5 hover:border-slate-300 transition-colors shadow-2xs"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-slate-100 relative rounded-xl mb-4">
                      <img 
                        src={art.thumbnail} 
                        alt={art.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-300" 
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-white text-[11px] font-bold text-slate-900 shadow-2xs">
                        {art.category}
                      </span>
                    </div>
                    
                    <div className="flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {art.readingTime}</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug mb-2">
                        {art.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-2 mb-4">
                        {art.excerpt}
                      </p>
                      
                      <div className="mt-auto flex items-center gap-1 text-xs font-bold text-blue-600">
                        <span>Read Story</span>
                        <ArrowRight size={13} />
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
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80">
          <div className="max-w-[1240px] mx-auto">
            
            <AnimatedSection className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                Explore ProstoLabs
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-1">
                Continue Exploring
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <AnimatedSection key={cIdx} delay={cIdx * 0.04}>
                  <Link
                    to={card.link}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between h-full group cursor-pointer"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center shadow-2xs">
                        <card.icon size={18} strokeWidth={1.75} />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-slate-950 group-hover:text-blue-600 transition-colors tracking-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-slate-200/70 flex items-center gap-1 text-xs font-bold text-blue-600">
                      <span>{card.cta}</span>
                      <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 11. FINAL CTA */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-slate-950 text-white text-center">
          <div className="max-w-[760px] mx-auto space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Your First Professional <br className="hidden sm:block" /> <span className="text-blue-400">Project Starts Here.</span>
            </h2>
            <p className="text-base text-slate-400 max-w-lg mx-auto leading-relaxed font-normal">
              Join ProstoLabs as an intern and build real-world experience under expert 1-on-1 mentorship.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button 
                type="button"
                onClick={() => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="w-full sm:w-auto h-12 px-7 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply for Internship</span>
                <ArrowRight size={16} />
              </button>
              <Link to="/resources" className="w-full sm:w-auto">
                <button 
                  type="button"
                  className="w-full sm:w-auto h-12 px-7 bg-white/10 hover:bg-white/15 text-white rounded-full font-semibold text-sm sm:text-base border border-white/15 transition-all cursor-pointer flex items-center justify-center"
                >
                  Explore Our Resources
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}