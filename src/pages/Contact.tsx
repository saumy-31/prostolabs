import { motion } from 'framer-motion'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { MapPin, Mail, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react'
import { SEO } from '../components/seo/SEO'

export const Contact = () => (
  <>
    <SEO 
      title="Contact ProstoLabs | Get in Touch with Our Team"
      description="Get in touch with ProstoLabs to discuss your custom web development project, AI integration, partnership, or general inquiry."
      path="/contact"
    />
    
    <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-[1300px] mx-auto px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: TEXT & INFO */}
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
              <Sparkles size={14} className="text-[#2563EB]" />
              <span>Get In Touch</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-[#0A0A0A] font-sans">
              Let's build <br />
              <span className="text-[#2563EB]">something great.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B7280] mb-10 max-w-lg font-medium leading-relaxed">
              Have a project in mind, a partnership inquiry, or a question about our services? Send us a message and our team will get back to you within 24 hours.
            </p>
            
            {/* CONTACT DETAILS CARDS */}
            <div className="space-y-6 pt-8 border-t border-gray-200/80">
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-0.5">Email Us</p>
                  <a href="mailto:hello@prostolabs.com" className="font-bold text-base text-[#0A0A0A] hover:text-[#2563EB] transition-colors">
                    hello@prostolabs.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-gray-200/80 shadow-2xs">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-0.5">Global Headquarters</p>
                  <p className="font-bold text-base text-[#0A0A0A]">Remote-First Organization</p>
                </div>
              </div>

            </div>
          </AnimatedSection>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <AnimatedSection delay={0.15}>
            <form 
              action="https://formsubmit.co/careers@flysava.com" 
              method="POST"
              className="space-y-5 p-6 sm:p-10 bg-white rounded-[32px] border border-gray-200/80 shadow-lg shadow-gray-200/50"
            >
              {/* FormSubmit Configuration Fields */}
              <input type="hidden" name="_subject" value="New General Inquiry - ProstoLabs" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/contact?submitted=true` : ''} />

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                  Your Name *
                </label>
                <input 
                  type="text" 
                  name="Name" 
                  required 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="Email Address" 
                  required 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                  Subject
                </label>
                <input 
                  type="text" 
                  name="Subject" 
                  placeholder="How can we help?" 
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors" 
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#0A0A0A] uppercase tracking-wider block font-sans">
                  Message *
                </label>
                <textarea 
                  name="Message" 
                  required 
                  rows={5} 
                  placeholder="Tell us about your project or inquiry..." 
                  className="w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200/80 text-sm font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors resize-none" 
                />
              </div>

              <div className="pt-2">
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit" 
                  className="w-full h-12 bg-[#2563EB] text-white rounded-2xl font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-[#1D4ED8]"
                >
                  <MessageSquare size={16} />
                  <span>Send Message</span>
                </motion.button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-[#6B7280] font-medium pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>We respect your privacy. Zero spam guaranteed.</span>
              </div>
            </form>
          </AnimatedSection>

        </div>
      </div>
    </div>
  </>
)