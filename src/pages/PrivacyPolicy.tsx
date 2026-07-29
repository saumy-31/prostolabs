import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { ShieldCheck, Mail } from 'lucide-react'

export const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | ProstoLabs"
        description="Read the Privacy Policy explaining how ProstoLabs collects, uses, and protects your personal information."
        path="/privacy"
      />
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900 min-h-screen">
        <div className="max-w-[900px] mx-auto px-6 pt-16 sm:pt-20 md:pt-24 pb-16 md:pb-24">
          
          <AnimatedSection className="mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-xs md:text-sm font-bold text-[#2563EB] mb-6">
              <ShieldCheck size={14} className="text-[#2563EB]" />
              <span>Legal & Privacy</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0A0A] font-sans mb-4">
              Privacy Policy
            </h1>
            
            <p className="text-sm sm:text-base text-[#6B7280] font-medium">
              Last updated: July 2026
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="p-8 sm:p-12 bg-white rounded-[32px] border border-gray-200/80 shadow-sm space-y-10">
              
              <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed font-medium">
                At ProstoLabs ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.
              </p>

              {/* SECTION 1 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  1. Information We Collect
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium mb-4">
                  We may collect the following types of information when you use our website:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#6B7280] font-medium leading-relaxed">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you fill out our contact, project, or internship application forms.</li>
                  <li><strong>Files and Attachments:</strong> Resumes, project briefs, or other requirement documents you upload via our secure forms.</li>
                  <li><strong>Usage Data:</strong> We may automatically collect standard analytics data such as your IP address, browser type, and interaction metrics to improve our website experience.</li>
                </ul>
              </div>

              {/* SECTION 2 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  2. How We Use Your Information
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-[#6B7280] font-medium leading-relaxed">
                  <li>Review and respond to your project inquiries and contact requests.</li>
                  <li>Process and evaluate internship applications.</li>
                  <li>Communicate with you regarding our services, partnerships, or employment opportunities.</li>
                  <li>Improve our website's functionality and user experience.</li>
                </ul>
              </div>

              {/* SECTION 3 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  3. Cookies
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  We may use cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services. You can manage or disable cookies through your browser settings.
                </p>
              </div>

              {/* SECTION 4 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  4. Third-Party Services
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  We may use trusted third-party service providers, such as FormSubmit, hosting infrastructure, analytics tools, and technical partners to operate our website. These providers receive only the information necessary to perform their services on our behalf. We do not sell, rent, or share your personal information with advertisers or unauthorized third parties.
                </p>
              </div>

              {/* SECTION 5 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  5. Data Retention
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable law. When information is no longer needed, we securely delete or anonymize it.
                </p>
              </div>

              {/* SECTION 6 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  6. Data Security
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  We take reasonable technical and organizational measures to help protect the information you submit through our website. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* SECTION 7 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  7. International Visitors
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  Our website may be accessed from countries around the world. By using our website, you acknowledge that your information may be processed and stored in accordance with this Privacy Policy and applicable laws.
                </p>
              </div>

              {/* SECTION 8 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  8. Children's Privacy
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take appropriate steps to delete it.
                </p>
              </div>

              {/* SECTION 9 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  9. Your Rights
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  Depending on your location, you may have the right to access, correct, update, or request the deletion of the personal data we hold about you. To exercise these rights, please contact us using the details below.
                </p>
              </div>

              {/* SECTION 10 */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  10. Changes to This Policy
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium">
                  We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page occasionally for the latest information.
                </p>
              </div>

              {/* SECTION 11 */}
              <div className="pt-6 border-t border-gray-200/80">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] mb-4 font-sans">
                  11. Contact Us
                </h2>
                <p className="text-sm sm:text-base text-[#6B7280] leading-relaxed font-medium mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal information, please contact us directly:
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