import { useState, useRef } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { UploadCloud, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react'

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
    <div className="max-w-4xl mx-auto px-6 pt-12 md:pt-16 pb-24">
      <AnimatedSection className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-gray-100 text-sm font-medium mb-8">
           <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
           Accepting New Projects
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">Tell us about your <span className="text-accent">project.</span></h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Fill out the brief below to help us understand your requirements. Our technical leads will review your submission and schedule a discovery call within 24 hours.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        {/* IMPORTANT FORM SUBMIT INSTRUCTIONS:
          1. The first time you submit this form on your live site, FormSubmit will send a verification email to careers@flysava.com.
          2. You MUST click "Activate Form" in that email before subsequent submissions will work. 
        */}
        <form 
          action="https://formsubmit.co/careers@flysava.com" 
          method="POST" 
          encType="multipart/form-data"
          className="space-y-10 p-8 md:p-12 bg-surface rounded-[2.5rem] border border-gray-100 shadow-sm"
        >
          {/* FormSubmit Configuration Fields */}
          <input type="hidden" name="_subject" value="New Project Inquiry - ProstoLabs" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          {/* Dynamically set the redirect URL to your custom Thank You page */}
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : ''} />

          {/* Section 1: Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-4">1. Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Full Name *</label>
                <input type="text" name="Full Name" required className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Company Name <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input type="text" name="Company Name" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Email Address *</label>
                <input type="email" name="Email Address" required className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary">Phone Number <span className="text-gray-400 font-normal">(Optional)</span></label>
                <input type="tel" name="Phone Number" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
            </div>
          </div>

          {/* Section 2: Project Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-4">2. Project Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-primary">Service Required *</label>
                <div className="relative">
                  <select name="Service Required" required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select a primary service...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Multiple / Full Stack">Multiple / Full Stack</option>
                    {/* ADDED OTHER OPTION HERE */}
                    <option value="Other">Other</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-sm font-semibold text-primary">Estimated Budget <span className="text-gray-400 font-normal">(Optional)</span></label>
                <div className="relative">
                  <select name="Estimated Budget" defaultValue="" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                    <option value="" disabled>Select budget range...</option>
                    <option value="< $100">Less than $100</option>
                    <option value="$100 - $10k">$100 - $10k</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2 relative">
                <label className="text-sm font-semibold text-primary">Project Timeline *</label>
                <div className="relative">
                  <select name="Project Timeline" required defaultValue="" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none cursor-pointer">
                    <option value="" disabled>When do you need this completed?</option>
                    <option value="As soon as possible">As soon as possible</option>
                    <option value="1 to 3 months">1 to 3 months</option>
                    <option value="3 to 6 months">3 to 6 months</option>
                    <option value="Flexible / Exploring options">Flexible / Exploring options</option>
                  </select>
                  <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label className="text-sm font-semibold text-primary">Project Description *</label>
                <textarea name="Project Description" required rows={6} placeholder="Tell us about the problem you are trying to solve, your target audience, and your overall goals..." className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" />
              </div>
            </div>
          </div>

          {/* Section 3: Attachments */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-b border-gray-200 pb-4">3. Attachments <span className="text-gray-400 font-normal text-base">(Optional)</span></h3>
            <div 
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-2xl p-8 text-center bg-white transition-colors cursor-pointer group ${
                fileName ? 'border-accent bg-accent/5' : 'border-gray-200 hover:bg-gray-50 hover:border-accent/30'
              }`}
            >
              {fileName ? (
                <>
                  <CheckCircle2 className="w-10 h-10 text-accent mx-auto mb-4" />
                  <p className="text-sm font-semibold text-primary mb-1">Attachment Selected</p>
                  <p className="text-sm text-accent font-medium">{fileName}</p>
                </>
              ) : (
                <>
                  <UploadCloud className="w-10 h-10 text-gray-300 mx-auto mb-4 group-hover:text-accent transition-colors" />
                  <p className="text-sm font-semibold text-primary mb-1">Click to upload requirement document</p>
                  <p className="text-xs text-gray-500">PDF, DOCX, or ZIP (Max 10MB)</p>
                </>
              )}
              {/* Hidden File Input */}
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

          {/* Submit */}
          <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <ShieldCheck className="w-5 h-5 text-green-500 shrink-0" />
              <span>Your information is strictly confidential.</span>
            </div>
            <Button type="submit" className="w-full sm:w-auto h-14 px-10 text-lg">Submit Project Brief</Button>
          </div>
        </form>
      </AnimatedSection>
    </div>
  )
}