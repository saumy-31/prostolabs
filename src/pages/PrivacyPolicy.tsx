import React, { useState, useEffect } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { ShieldCheck, Mail, ArrowUpRight, Lock, Eye, FileText, CheckCircle2, ChevronRight } from 'lucide-react'

const sections = [
  { id: 'section-1', num: '01', title: 'Information We Collect' },
  { id: 'section-2', num: '02', title: 'How We Use Your Information' },
  { id: 'section-3', num: '03', title: 'Cookies' },
  { id: 'section-4', num: '04', title: 'Third-Party Services' },
  { id: 'section-5', num: '05', title: 'Data Retention' },
  { id: 'section-6', num: '06', title: 'Data Security' },
  { id: 'section-7', num: '07', title: 'International Visitors' },
  { id: 'section-8', num: '08', title: "Children's Privacy" },
  { id: 'section-9', num: '09', title: 'Your Rights' },
  { id: 'section-10', num: '10', title: 'Changes to This Policy' },
  { id: 'section-11', num: '11', title: 'Contact Us' },
]

export const PrivacyPolicy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('section-1')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-15% 0px -70% 0px' }
    )

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SEO 
        title="Privacy Policy | ProstoLabs"
        description="Read the Privacy Policy explaining how ProstoLabs collects, uses, and protects your personal information."
        path="/privacy"
      />
      
      <div className="relative w-full overflow-x-clip bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-600 min-h-screen pt-28 sm:pt-36 pb-20 sm:pb-28">
        
        {/* Subtle Ambient Grid Layer */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 top-0 h-[600px] w-full bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" 
        />
        <div 
          aria-hidden="true" 
          className="absolute top-0 left-0 right-0 h-[600px] bg-[linear-gradient(to_right,#E2E8F040_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F040_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
        />

        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          
          {/* Hero Header */}
          <AnimatedSection className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-blue-600 mb-4">
              <ShieldCheck size={14} className="text-blue-600" />
              <span>Legal Transparency</span>
            </div>
            
            <h1 className="text-[36px] sm:text-[50px] md:text-[58px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950 mb-3">
              Privacy Policy
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              How we collect, handle, and safeguard your data when partnering with ProstoLabs.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs font-mono text-slate-400">
              <span>EFFECTIVE DATE: JULY 2026</span>
              <span>•</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 size={13} /> CURRENT VERSION
              </span>
            </div>
          </AnimatedSection>

          {/* Key Principles Summary Strip */}
          <AnimatedSection delay={0.05} className="mb-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Lock size={16} />
                </div>
                <h2 className="text-sm font-bold text-slate-950">Zero Data Selling</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  We never rent, trade, or monetize your submitted details with advertisers or external brokers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Eye size={16} />
                </div>
                <h2 className="text-sm font-bold text-slate-950">Full Visibility</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  You maintain full rights to request verification, edits, or total deletion of your personal records.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FileText size={16} />
                </div>
                <h2 className="text-sm font-bold text-slate-950">Encrypted Transfers</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  All brief uploads, resumes, and intake messages are transmitted across secured HTTPS/SSL layers.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block font-mono">
                  Navigation Index
                </span>
                
                <nav className="space-y-1 text-xs">
                  {sections.map((sec) => {
                    const isActive = activeSection === sec.id
                    return (
                      <a
                        key={sec.id}
                        href={`#${sec.id}`}
                        className={`flex items-center justify-between p-2.5 rounded-xl transition-all duration-200 ${
                          isActive 
                            ? 'bg-blue-50 text-blue-600 font-semibold' 
                            : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50 font-normal'
                        }`}
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          <span className="font-mono text-[11px] opacity-60">{sec.num}</span>
                          <span className="truncate">{sec.title}</span>
                        </span>
                        <ChevronRight size={13} className={`shrink-0 transition-transform ${isActive ? 'translate-x-0.5' : 'opacity-0'}`} />
                      </a>
                    )
                  })}
                </nav>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <span className="text-[11px] text-slate-400 block">Questions regarding privacy?</span>
                  <a 
                    href="mailto:hello@prostolabs.com"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    <span>hello@prostolabs.com</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </aside>

            {/* Document Content */}
            <main className="lg:col-span-8 space-y-10">
              
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-2xs space-y-8 text-slate-600 leading-relaxed text-sm sm:text-base font-normal">
                
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  At ProstoLabs (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or interact with our services.
                </p>

                {/* Section 1 */}
                <section id="section-1" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">01</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Information We Collect
                    </h2>
                  </div>
                  <p>
                    We may collect the following types of information when you use our website:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li><strong className="font-semibold text-slate-900">Personal Information:</strong> Name, email address, phone number, and company name when you fill out our contact, project, or internship application forms.</li>
                    <li><strong className="font-semibold text-slate-900">Files and Attachments:</strong> Resumes, project briefs, or other requirement documents you upload via our secure forms.</li>
                    <li><strong className="font-semibold text-slate-900">Usage Data:</strong> We may automatically collect standard analytics data such as your IP address, browser type, and interaction metrics to improve our website experience.</li>
                  </ul>
                </section>

                {/* Section 2 */}
                <section id="section-2" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">02</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      How We Use Your Information
                    </h2>
                  </div>
                  <p>
                    We use the information we collect to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Review and respond to your project inquiries and contact requests.</li>
                    <li>Process and evaluate internship applications.</li>
                    <li>Communicate with you regarding our services, partnerships, or employment opportunities.</li>
                    <li>Improve our website&apos;s functionality and user experience.</li>
                  </ul>
                </section>

                {/* Section 3 */}
                <section id="section-3" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">03</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Cookies
                    </h2>
                  </div>
                  <p>
                    We may use cookies and similar technologies to improve your browsing experience, analyze website traffic, and enhance our services. You can manage or disable cookies through your browser settings.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="section-4" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">04</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Third-Party Services
                    </h2>
                  </div>
                  <p>
                    We may use trusted third-party service providers, such as FormSubmit, hosting infrastructure, analytics tools, and technical partners to operate our website. These providers receive only the information necessary to perform their services on our behalf. We do not sell, rent, or share your personal information with advertisers or unauthorized third parties.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="section-5" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">05</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Data Retention
                    </h2>
                  </div>
                  <p>
                    We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by applicable law. When information is no longer needed, we securely delete or anonymize it.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="section-6" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Data Security
                    </h2>
                  </div>
                  <p>
                    We take reasonable technical and organizational measures to help protect the information you submit through our website. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                {/* Section 7 */}
                <section id="section-7" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">07</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      International Visitors
                    </h2>
                  </div>
                  <p>
                    Our website may be accessed from countries around the world. By using our website, you acknowledge that your information may be processed and stored in accordance with this Privacy Policy and applicable laws.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="section-8" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">08</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Children&apos;s Privacy
                    </h2>
                  </div>
                  <p>
                    Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children. If we become aware that such information has been collected, we will take appropriate steps to delete it.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="section-9" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">09</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Your Rights
                    </h2>
                  </div>
                  <p>
                    Depending on your location, you may have the right to access, correct, update, or request the deletion of the personal data we hold about you. To exercise these rights, please contact us using the details below.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="section-10" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">10</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Changes to This Policy
                    </h2>
                  </div>
                  <p>
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page occasionally for the latest information.
                  </p>
                </section>

                {/* Section 11 */}
                <section id="section-11" className="space-y-4 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">11</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Contact Us
                    </h2>
                  </div>
                  <p>
                    If you have any questions about this Privacy Policy or how we handle your personal information, please contact us directly:
                  </p>
                  <div className="pt-2">
                    <a 
                      href="mailto:hello@prostolabs.com" 
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-100/70 border border-blue-100 text-blue-600 font-semibold text-xs sm:text-sm transition-colors group"
                    >
                      <Mail size={15} />
                      <span>hello@prostolabs.com</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </section>

              </div>

            </main>

          </div>

        </div>
      </div>
    </>
  )
}