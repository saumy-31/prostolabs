import React, { useState, useRef } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { UploadCloud, ShieldCheck, ChevronDown, CheckCircle2, Sparkles, Send, ArrowRight } from 'lucide-react'

export const StartProject: React.FC = () => {
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

      <div className="relative w-full overflow-x-clip bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-600 min-h-screen">
        
        {/* Subtle Ambient Grid Layer */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 top-0 h-[650px] w-full bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-0 right-0 h-[700px] bg-[linear-gradient(to_right,#E2E8F040_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F040_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <div className="max-w-[880px] mx-auto px-5 sm:px-8 lg:px-12 pt-28 sm:pt-36 pb-20 sm:pb-28 relative z-10">
          
          {/* Header Section */}
          <AnimatedSection className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-blue-600 mb-4">
              <Sparkles size={14} className="text-blue-600" />
              <span>Accepting New Projects</span>
            </div>
            
            <h1 className="text-[36px] sm:text-[50px] md:text-[58px] lg:text-[64px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950 mb-4">
              Tell us about your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                project.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
              Fill out the project brief below. Our technical team will review your requirements and respond with a clear proposal within 24 hours.
            </p>
          </AnimatedSection>

          {/* Form Section */}
          <AnimatedSection delay={0.1}>
            <form 
              action="https://formsubmit.co/careers@flysava.com" 
              method="POST" 
              encType="multipart/form-data"
              className="space-y-8 sm:space-y-10 p-6 sm:p-10 md:p-12 bg-white rounded-3xl border border-slate-200/90 shadow-xs"
            >
              {/* FormSubmit Configuration Fields */}
              <input type="hidden" name="_subject" value="New Project Inquiry - ProstoLabs" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : ''} />

              {/* Section 1: Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-xs flex items-center justify-center">
                    01
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    Contact Information
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="Full Name" 
                      required 
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Company Name <span className="text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
                    </label>
                    <input 
                      type="text" 
                      name="Company Name" 
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email" 
                      name="Email Address" 
                      required 
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                    />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Phone Number <span className="text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
                    </label>
                    <input 
                      type="tel" 
                      name="Phone Number" 
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Project Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-xs flex items-center justify-center">
                    02
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    Project Details
                  </h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Primary Service <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="Service Required" 
                        required 
                        defaultValue="" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer shadow-2xs"
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
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Estimated Budget <span className="text-slate-400 font-normal lowercase tracking-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="Estimated Budget" 
                        defaultValue="" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer shadow-2xs"
                      >
                        <option value="" disabled>Select budget range...</option>
                        <option value="< $1,000">Less than $1,000</option>
                        <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                        <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                        <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                        <option value="$30,000+">$30,000+</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Project Timeline <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select 
                        name="Project Timeline" 
                        required 
                        defaultValue="" 
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all appearance-none cursor-pointer shadow-2xs"
                      >
                        <option value="" disabled>When do you need this completed?</option>
                        <option value="As soon as possible">As soon as possible (Urgent)</option>
                        <option value="1 to 3 months">1 to 3 months</option>
                        <option value="3 to 6 months">3 to 6 months</option>
                        <option value="Flexible / Exploring options">Flexible / Exploring options</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div className="sm:col-span-2 space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 uppercase tracking-wider block">
                      Project Overview <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="Project Description" 
                      required 
                      rows={5} 
                      placeholder="Tell us about the project goals, features required, or problems you are trying to solve..." 
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-1 focus:ring-blue-600 transition-all resize-none shadow-2xs" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Attachments */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <span className="w-7 h-7 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-xs flex items-center justify-center">
                    03
                  </span>
                  <h3 className="text-xl font-bold text-slate-950 tracking-tight">
                    Attachments <span className="text-slate-400 font-normal text-sm tracking-normal">(optional)</span>
                  </h3>
                </div>
                
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-2xl p-6 text-center transition-all cursor-pointer shadow-2xs ${
                    fileName ? 'border-blue-600 bg-blue-50/20' : 'border-slate-200 hover:border-slate-300 bg-slate-50 hover:bg-white'
                  }`}
                >
                  {fileName ? (
                    <>
                      <CheckCircle2 className="w-7 h-7 text-blue-600 mx-auto mb-1.5" />
                      <p className="text-xs font-bold text-slate-900">Attachment Selected</p>
                      <p className="text-xs text-blue-600 font-medium mt-0.5">{fileName}</p>
                    </>
                  ) : (
                    <>
                      <div className="w-11 h-11 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-2 shadow-2xs">
                        <UploadCloud className="w-5 h-5 text-slate-400" />
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-slate-800">Click to upload requirement document or brief</p>
                      <p className="text-[11px] text-slate-500 font-normal mt-0.5">PDF, DOCX, or ZIP (Max 10MB)</p>
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
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 font-normal">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>All information is strictly confidential.</span>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full sm:w-auto h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Submit Project Brief</span>
                  <Send size={15} />
                </button>
              </div>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </>
  )
}