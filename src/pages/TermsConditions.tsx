import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'

export const TermsConditions = () => {
  return (
    <>
    <SEO 
      title="Terms & Conditions | ProstoLabs"
      description="Read the Terms & Conditions governing the use of the ProstoLabs website and services."
      path="/terms"
    />
    <div className="bg-background min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms & Conditions</h1>
            <p className="text-gray-500">Effective Date: July 16, 2026</p>
          </div>

          <div className="prose prose-lg text-gray-500">
            <p className="leading-relaxed mb-6">
              Welcome to ProstoLabs. By accessing or using our website (prostolabs.com) and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed mb-6">
              By accessing our website, submitting inquiries, or applying for our programs, you agree to these Terms. If you do not agree with any part of these terms, you may not use our website.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">2. Intellectual Property Rights</h2>
            <p className="leading-relaxed mb-6">
              All content, designs, graphics, code, and intellectual property on this website are owned by or licensed to ProstoLabs. You may not reproduce, distribute, modify, or use our intellectual property without our express written consent.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">3. Services and Client Agreements</h2>
            <p className="leading-relaxed mb-6">
              The information provided on this website is for general informational purposes only. Any project, consulting, development, design, marketing, automation, AI, or internship services provided by ProstoLabs may be subject to separate agreements, proposals, quotations, or statements of work that define the scope, deliverables, pricing, and timelines.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">4. Internship Programs</h2>
            <p className="leading-relaxed mb-6">
              Participation in any ProstoLabs internship or mentorship program does not guarantee future employment. Program details, duration, learning resources, certificates, and other requirements may vary depending on the selected program and may be updated from time to time.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">5. Payments</h2>
            <p className="leading-relaxed mb-6">
              Where applicable, payments for services or programs must be completed according to the agreed quotation, proposal, invoice, or applicable terms. Unless otherwise stated, all payments are non-refundable once work or program access has commenced.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">6. User Conduct</h2>
            <p className="leading-relaxed mb-4">When using our website, you agree not to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Submit false, misleading, or malicious information through our forms.</li>
              <li>Attempt to gain unauthorized access to our systems or servers.</li>
              <li>Upload files that contain viruses, malware, or harmful code.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">7. Third-Party Links</h2>
            <p className="leading-relaxed mb-6">
              Our website may contain links to third-party websites, tools, platforms, or products, including FlySava and other services operated independently. We are not responsible for the content, availability, privacy practices, or policies of third-party websites.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">8. Website Availability</h2>
            <p className="leading-relaxed mb-6">
              We strive to keep our website available and up to date. However, we do not guarantee uninterrupted access and may modify, suspend, or discontinue any part of the website or its services without prior notice.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">9. Disclaimer of Warranties</h2>
            <p className="leading-relaxed mb-6">
              This website and its content are provided on an "as is" and "as available" basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">10. Limitation of Liability</h2>
            <p className="leading-relaxed mb-6">
              In no event shall ProstoLabs, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">11. Governing Law</h2>
            <p className="leading-relaxed mb-6">
              These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">12. Changes to These Terms</h2>
            <p className="leading-relaxed mb-6">
              We may update these Terms and Conditions periodically to reflect changes in our services, legal requirements, or business practices. Continued use of the website after any updates constitutes acceptance of the revised Terms.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">13. Contact Us</h2>
            <p className="leading-relaxed mb-6">
              If you have any questions regarding these Terms and Conditions, please contact us.
            </p>
            <p className="leading-relaxed mb-6">
              <strong>Email:</strong> <a href="mailto:hello@prostolabs.com" className="text-accent hover:underline font-medium">hello@prostolabs.com</a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
    </>
  )
}