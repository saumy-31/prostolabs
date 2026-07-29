import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { FileText, Mail } from 'lucide-react'

export const TermsConditions = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions | ProstoLabs"
        description="Read the Terms & Conditions governing the use of the ProstoLabs website and services."
        path="/terms"
      />
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900 min-h-screen">
        <div className="max-w-[900px] mx-auto px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24">
          
          <AnimatedSection className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
              <FileText size={14} className="text-[#2563EB]" />
              <span>Legal & Agreements</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] font-sans mb-4">
              Terms & Conditions
            </h1>
            
            <p className="text-sm sm:text-base text-[#6B7280] font-medium">
              Last updated: July 2026
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="p-8 sm:p-12 bg-white rounded-[32px] border border-gray-200/80 shadow-sm space-y-10">
              
              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed font-medium">
                Welcome to ProstoLabs. By accessing or using our website (prostolabs.com) and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
              </p>

              {/* SECTION 1 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  1. Acceptance of Terms
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  By accessing our website, submitting inquiries, or applying for our programs, you agree to these Terms. If you do not agree with any part of these terms, you may not use our website.
                </p>
              </div>

              {/* SECTION 2 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  2. Intellectual Property Rights
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  All content, designs, graphics, code, and intellectual property on this website are owned by or licensed to ProstoLabs. You may not reproduce, distribute, modify, or use our intellectual property without our express written consent.
                </p>
              </div>

              {/* SECTION 3 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  3. Services and Client Agreements
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  The information provided on this website is for general informational purposes only. Any project, consulting, development, design, marketing, automation, AI, or internship services provided by ProstoLabs may be subject to separate agreements, proposals, quotations, or statements of work that define the scope, deliverables, pricing, and timelines.
                </p>
              </div>

              {/* SECTION 4 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  4. Internship Programs
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  Participation in any ProstoLabs internship or mentorship program does not guarantee future employment. Program details, duration, learning resources, certificates, and other requirements may vary depending on the selected program and may be updated from time to time.
                </p>
              </div>

              {/* SECTION 5 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  5. Payments
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  Where applicable, payments for services or programs must be completed according to the agreed quotation, proposal, invoice, or applicable terms. Unless otherwise stated, all payments are non-refundable once work or program access has commenced.
                </p>
              </div>

              {/* SECTION 6 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  6. User Conduct
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium mb-4">
                  When using our website, you agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#6B7280] font-medium leading-relaxed">
                  <li>Submit false, misleading, or malicious information through our forms.</li>
                  <li>Attempt to gain unauthorized access to our systems or servers.</li>
                  <li>Upload files that contain viruses, malware, or harmful code.</li>
                </ul>
              </div>

              {/* SECTION 7 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  7. Third-Party Links
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  Our website may contain links to third-party websites, tools, platforms, or products, including FlySava and other services operated independently. We are not responsible for the content, availability, privacy practices, or policies of third-party websites.
                </p>
              </div>

              {/* SECTION 8 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  8. Website Availability
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  We strive to keep our website available and up to date. However, we do not guarantee uninterrupted access and may modify, suspend, or discontinue any part of the website or its services without prior notice.
                </p>
              </div>

              {/* SECTION 9 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  9. Disclaimer of Warranties
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.
                </p>
              </div>

              {/* SECTION 10 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  10. Limitation of Liability
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  In no event shall ProstoLabs, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use our website or services.
                </p>
              </div>

              {/* SECTION 11 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  11. Governing Law
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                </p>
              </div>

              {/* SECTION 12 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  12. Changes to These Terms
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  We may update these Terms and Conditions periodically to reflect changes in our services, legal requirements, or business practices. Continued use of the website after any updates constitutes acceptance of the revised Terms.
                </p>
              </div>

              {/* SECTION 13 */}
              <div className="pt-6 border-t border-gray-200/80">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  13. Contact Us
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium mb-4">
                  If you have any questions regarding these Terms and Conditions, please contact us directly:
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-blue-50 text-[#2563EB] font-bold text-sm">
                  <Mail size={16} />
                  <a href="mailto:hello@prostolabs.com" className="hover:underline">hello@prostolabs.com</a>
                </div>
              </div>

            </div>
          </AnimatedSection>
        </div>
      </div>
    </>
  )
}