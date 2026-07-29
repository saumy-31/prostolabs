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

      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
        <div className="max-w-[900px] mx-auto px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24">
          
          {/* HEADER SECTION */}
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
              <Sparkles size={14} className="text-[#2563EB]" />
              <span>Accepting New Projects</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
              Tell us about your <br />
              <span className="text-[#2563EB]">project.</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-medium">
              Fill out the project brief below. Our technical team will review your requirements and respond with a clear proposal within 24 hours.
            </p>
          </AnimatedSection>

          {/* FORM SECTION */}
          <AnimatedSection delay={0.15}>
            <form 
              action="https://formsubmit.co/careers@flysava.com" 
              method="POST" 
              encType="multipart/form-data"
              className="space-y-8 sm:space-y-10 p-6 sm:p-10 md:p-12 bg-white rounded-[32px] border border-gray-200/80 shadow-xl shadow-gray-200/40"
            >
              {/* FormSubmit Configuration Fields */}
              <input type="hidden" name="_subject" value="New Project Inquiry - ProstoLabs" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : ''} />

              {/* Section 1: Contact Info */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#0A0A0A] border-b border-gray-200/80 pb-3 font-sans">
                  1. Contact Information
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Full Name *</label>
                    <input 
                      type="text" 
                      name="Full Name" 
                      required 
                      placeholder="John Doe"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">
                      Company Name <span className="text-[#6B7280] font-normal lowercase">(optional)</span>
                    </label>
                    <input 
                      type="text" 
                      name="Company Name" 
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Email Address *</label>
                    <input 
                      type="email" 
                      name="Email Address" 
                      required 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors" 
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">
                      Phone Number <span className="text-[#6B7280] font-normal lowercase">(optional)</span>
                    </label>
                    <input 
                      type="tel" 
                      name="Phone Number" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#0A0A0A] border-b border-gray-200/80 pb-3 font-sans">
                  2. Project Details
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Primary Service *</label>
                    <div className="relative">
                      <select 
                        name="Service Required" 
                        required 
                        defaultValue="" 
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors appearance-none cursor-pointer"
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
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">
                      Estimated Budget <span className="text-[#6B7280] font-normal lowercase">(optional)</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="Estimated Budget" 
                        defaultValue="" 
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select budget range...</option>
                        <option value="< $1,000">Less than $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Project Timeline *</label>
                    <div className="relative">
                      <select 
                        name="Project Timeline" 
                        required 
                        defaultValue="" 
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled>When do you need this completed?</option>
                        <option value="As soon as possible">As soon as possible (Urgent)</option>
                        <option value="1 to 3 months">1 to 3 months</option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="Flexible / Exploring options">Flexible / Exploring options</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider mb-2 block font-sans">Project Overview *</label>
                    <textarea 
                      name="Project Description" 
                      required 
                      rows={5} 
                      placeholder="Tell us about the project goals, features required, or problems you are trying to solve..." 
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors resize-none" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Attachments */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[#0A0A0A] border-b border-gray-200/80 pb-3 font-sans">
                  3. Attachments <span className="text-[#6B7280] font-normal text-sm lowercase">(optional)</span>
                </h3>
                
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center bg-[#FAFAFA] transition-all cursor-pointer ${
                    fileName ? 'border-[#2563EB] bg-blue-50/20' : 'border-gray-200/80 hover:border-[#2563EB]/40 hover:bg-white'
                  }`}
                >
                  {fileName ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
                      <p className="text-xs font-bold text-[#0A0A0A]">Attachment Selected</p>
                      <p className="text-xs text-[#2563EB] font-medium">{fileName}</p>
                    </>
                  ) : (
                    <>
                      <UploadCloud className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-xs font-bold text-[#0A0A0A]">Click to upload requirement document or brief</p>
                      <p className="text-[10px] text-[#6B7280]">PDF, DOCX, or ZIP (Max 10MB)</p>
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
              <div className="pt-6 border-t border-gray-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-[#6B7280] font-medium">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All information is strictly confidential.</span>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full sm:w-auto h-12 px-8 bg-[#2563EB] text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-[#1D4ED8]"
                >
                  <Send size={16} />
                  <span>Submit Project Brief</span>
                </motion.button>
              </div>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </>
  )
}