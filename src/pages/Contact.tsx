import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { MapPin, Mail } from 'lucide-react'
import { SEO } from '../components/seo/SEO'

export const Contact = () => (
  <>
  <SEO 
      title="Contact ProstoLabs | Let's Build Something Great"
      description="Get in touch with ProstoLabs to discuss your project, partnership, or business inquiry."
      path="/contact"
    />
  <div className="max-w-7xl mx-auto px-6 pt-12 md:pt-16 pb-24">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <AnimatedSection>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6">Let's build <br/><span className="text-accent">together.</span></h1>
        <p className="text-xl text-gray-500 mb-12 max-w-lg">For general enquiries, partnership opportunities, internship questions, and support, drop us a message below.</p>
        
        <div className="space-y-8 mb-12 border-t border-gray-100 pt-10">
          <div className="flex items-center gap-5 text-gray-600">
            <div className="w-14 h-14 rounded-full bg-surface border border-gray-100 flex items-center justify-center">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-1">Email Us</p>
              <p className="font-medium text-lg text-primary">hello@prostolabs.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5 text-gray-600">
            <div className="w-14 h-14 rounded-full bg-surface border border-gray-100 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-400 mb-1">Global HQ</p>
              <p className="font-medium text-lg text-primary">Remote First Organization</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        {/* 
          IMPORTANT FORM SUBMIT INSTRUCTIONS:
          If this is the first form you test on the live site, FormSubmit will send a verification email.
          You must click "Activate Form" in that email before it starts working seamlessly.
        */}
        <form 
          action="https://formsubmit.co/careers@flysava.com" 
          method="POST"
          className="space-y-6 p-8 md:p-12 bg-surface rounded-[2rem] border border-gray-100 shadow-sm"
        >
          {/* FormSubmit Configuration Fields */}
          <input type="hidden" name="_subject" value="New General Inquiry - ProstoLabs" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/thank-you` : ''} />

          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary">Name *</label>
            <input type="text" name="Name" required placeholder="John Doe" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary">Email Address *</label>
            <input type="email" name="Email Address" required placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary">Subject</label>
            <input type="text" name="Subject" placeholder="How can we help?" className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-primary">Message *</label>
            <textarea name="Message" required rows={5} placeholder="Tell us more about your enquiry..." className="w-full px-5 py-4 rounded-xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" />
          </div>
          <Button type="submit" className="w-full h-14 text-lg mt-4">Send Message</Button>
        </form>
      </AnimatedSection>
    </div>
  </div>
  </>
)