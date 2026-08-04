import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { UploadCloud, ShieldCheck, ChevronDown, CheckCircle2, Sparkles, Send } from 'lucide-react'

export const StartProject = () => {
  // State to track the uploaded file name
  const [fileName, setFileName] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name)
    }
  }

  return (
    <>
      <SEO 
        title="Start Your Project | ProstoLabs"
        description="Tell us about your web development, AI, or software engineering project. Fill out our project brief to get a clear proposal within 24 hours."
        path="/start-project"
      />

      <div className="relative overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-500/30 selection:text-blue-900 min-h-screen">
        
        {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
        <div className="absolute top-0 left-0 right-0 h-[120vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />
        <div className="absolute top-[15%] right-[-5%] w-[35%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply" />

        <div className="max-w-[950px] mx-auto px-6 pt-24 sm:pt-32 md:pt-40 pb-20 md:pb-24 relative z-10">
          
          {/* HEADER SECTION */}
          <AnimatedSection className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-8 transform-gpu">
              <Sparkles size={16} className="text-[#2563EB]" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">Accepting New Projects</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold tracking-[-0.03em] leading-[1.05] mb-6 text-[#0A0A0A] font-sans">
              Tell us about your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-[#2563EB] to-cyan-500">project.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-[#6B7280] max-w-2xl mx-auto leading-[1.6] tracking-tight font-medium">
              Fill out the project brief below. Our technical team will review your requirements and respond with a clear proposal within 24 hours.
            </p>
          </AnimatedSection>

          {/* FORM SECTION */}
          <AnimatedSection delay={0.15}>
            <form 
              action="https://formsubmit.co/careers@flysava.com" 
              method="POST" 
              encType="multipart/form-data"
              className="space-y-10 sm:space-y-12 p-8 sm:p-12 md:p-14 bg-white/70 backdrop-blur-xl rounded-[40px] border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500"
            >
              {/* FormSubmit Configuration Fields */}
              <input type="hidden" name="_subject" value="New Project Inquiry - ProstoLabs" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : ''} />

              {/* Section 1: Contact Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-gray-200/60 pb-5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] font-sans tracking-tight">
                    Contact Information
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="Full Name" 
                      required 
                      placeholder="John Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                      Company Name <span className="text-[#6B7280] font-semibold lowercase tracking-normal">(optional)</span>
                    </label>
                    <input 
                      type="text" 
                      name="Company Name" 
                      placeholder="Acme Inc."
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">Email Address <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      name="Email Address" 
                      required 
                      placeholder="john@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                      Phone Number <span className="text-[#6B7280] font-semibold lowercase tracking-normal">(optional)</span>
                    </label>
                    <input 
                      type="tel" 
                      name="Phone Number" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all shadow-sm" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-gray-200/60 pb-5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] font-sans tracking-tight">
                    Project Details
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">Primary Service <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select 
                        name="Service Required" 
                        required 
                        defaultValue="" 
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all appearance-none cursor-pointer shadow-sm"
                      >
                        <option value="" disabled>Select a primary service...</option>
                        <option value="Web Development">Web & Software Development</option>
                        <option value="UI/UX Design">UI/UX & Product Design</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Digital Marketing">SEO & Growth Strategy</option>
                        <option value="Multiple / Full Stack">Multiple / Full Stack</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">
                      Estimated Budget <span className="text-[#6B7280] font-semibold lowercase tracking-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="Estimated Budget" 
                        defaultValue="" 
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all appearance-none cursor-pointer shadow-sm"
                      >
                        <option value="" disabled>Select budget range...</option>
                        <option value="< $1,000">Less than $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">Project Timeline <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <select 
                        name="Project Timeline" 
                        required 
                        defaultValue="" 
                        className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all appearance-none cursor-pointer shadow-sm"
                      >
                        <option value="" disabled>When do you need this completed?</option>
                        <option value="As soon as possible">As soon as possible (Urgent)</option>
                        <option value="1 to 3 months">1 to 3 months</option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="Flexible / Exploring options">Flexible / Exploring options</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest block font-sans">Project Overview <span className="text-red-500">*</span></label>
                    <textarea 
                      name="Project Description" 
                      required 
                      rows={6} 
                      placeholder="Tell us about the project goals, features required, or problems you are trying to solve..." 
                      className="w-full px-5 py-4 rounded-2xl bg-[#FAFAFA] border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-blue-500/30 transition-all resize-none shadow-sm" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Attachments */}
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-b border-gray-200/60 pb-5">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="text-2xl font-bold text-[#0A0A0A] font-sans tracking-tight">
                    Attachments <span className="text-[#6B7280] font-medium text-lg tracking-normal">(optional)</span>
                  </h3>
                </div>
                
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-[24px] p-10 sm:p-14 text-center transition-all cursor-pointer shadow-sm ${
                    fileName ? 'border-[#2563EB] bg-blue-50/20' : 'border-gray-200/80 hover:border-[#2563EB]/40 bg-[#FAFAFA] hover:bg-white'
                  }`}
                >
                  {fileName ? (
                    <>
                      <CheckCircle2 className="w-10 h-10 text-[#2563EB] mx-auto mb-3" />
                      <p className="text-sm font-bold text-[#0A0A0A]">Attachment Selected</p>
                      <p className="text-[13px] text-[#2563EB] font-medium mt-1">{fileName}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-white border border-gray-100 flex items-center justify-center mx-auto mb-4 shadow-sm">
                        <UploadCloud className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-[15px] font-bold text-[#0A0A0A]">Click to upload requirement document or brief</p>
                      <p className="text-xs text-[#6B7280] font-medium mt-1.5">PDF, DOCX, or ZIP (Max 10MB)</p>
                    </>
                  )}
                  
                  <input 
                    type="file" 
                    name="Attachment" 
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden" 
                    accept=".pdf,.doc,.docx,.zip"
                  />
                </div>
              </div>

              {/* Submit Section */}
              <div className="pt-8 border-t border-gray-100/80 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-2.5 text-[13px] text-[#6B7280] font-medium bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All information is strictly confidential.</span>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full sm:w-auto h-14 px-10 bg-[#0A0A0A] text-white rounded-full font-bold text-sm shadow-[0_8px_20px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2.5 cursor-pointer transition-colors hover:bg-gray-900 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A0A0A] focus-visible:ring-offset-2"
                >
                  <span>Submit Project Brief</span>
                  <Send size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform" />
                </motion.button>
              </div>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </>
  )
}