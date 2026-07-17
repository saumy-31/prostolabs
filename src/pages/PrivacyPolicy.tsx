import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'

export const PrivacyPolicy = () => {
  return (
    <>

    <SEO 
      title="Privacy Policy | ProstoLabs"
      description="Read the Privacy Policy explaining how ProstoLabs collects, uses, and protects your information."
      path="/privacy"
    />
    <div className="bg-background min-h-screen pt-24 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
            
          </div>

          <div className="prose prose-lg text-gray-500">
            <p className="leading-relaxed mb-6">
              At ProstoLabs ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">1. Information We Collect</h2>
            <p className="leading-relaxed mb-4">We may collect the following types of information when you use our website:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, and company name when you fill out our contact, project, or internship application forms.</li>
              <li><strong>Files and Attachments:</strong> Resumes, project briefs, or other documents you upload via our secure forms.</li>
              <li><strong>Usage Data:</strong> We may automatically collect standard analytics data such as your IP address, browser type, and interaction metrics to improve our website experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Review and respond to your project inquiries and contact requests.</li>
              <li>Process and evaluate internship applications.</li>
              <li>Communicate with you regarding our services, partnerships, or employment opportunities.</li>
              <li>Improve our website's functionality and user experience.</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">3. Cookies</h2>
            <p className="leading-relaxed mb-6">
              We may use cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services. You can manage or disable cookies through your browser settings.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">4. Third-Party Services</h2>
            <p className="leading-relaxed mb-6">
              We may use trusted third-party service providers, such as FormSubmit, website hosting providers, analytics tools, and other technical partners to help operate our website and process submitted information. These providers receive only the information necessary to perform their services on our behalf. We do not sell, rent, or share your personal information with advertisers or unauthorized third parties.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">5. Data Retention</h2>
            <p className="leading-relaxed mb-6">
              We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable law. When information is no longer needed, we securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">6. Data Security</h2>
            <p className="leading-relaxed mb-6">
              We take reasonable technical and organizational measures to help protect the information you submit through our website. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">7. International Visitors</h2>
            <p className="leading-relaxed mb-6">
              Our website may be accessed from countries around the world. By using our website, you acknowledge that your information may be processed and stored in accordance with this Privacy Policy and applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">8. Children's Privacy</h2>
            <p className="leading-relaxed mb-6">
              Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take appropriate steps to delete it.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">9. Your Rights</h2>
            <p className="leading-relaxed mb-6">
              Depending on your location, you may have the right to access, correct, update, or request the deletion of the personal data we hold about you. To exercise these rights, please contact us using the details below.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">10. Changes to This Policy</h2>
            <p className="leading-relaxed mb-6">
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page occasionally for the latest information.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-12 mb-4">11. Contact Us</h2>
            <p className="leading-relaxed mb-6">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us.
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