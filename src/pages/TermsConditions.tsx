import React, { useState, useEffect } from 'react'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { FileText, Mail, ArrowUpRight, Scale, Shield, CheckCircle2, ChevronRight, AlertCircle } from 'lucide-react'

const sections = [
  { id: 'section-1', num: '01', title: 'Acceptance of Terms' },
  { id: 'section-2', num: '02', title: 'Intellectual Property Rights' },
  { id: 'section-3', num: '03', title: 'Services and Client Agreements' },
  { id: 'section-4', num: '04', title: 'Internship Programs' },
  { id: 'section-5', num: '05', title: 'Payments' },
  { id: 'section-6', num: '06', title: 'User Conduct' },
  { id: 'section-7', num: '07', title: 'Third-Party Links' },
  { id: 'section-8', num: '08', title: 'Website Availability' },
  { id: 'section-9', num: '09', title: 'Disclaimer of Warranties' },
  { id: 'section-10', num: '10', title: 'Limitation of Liability' },
  { id: 'section-11', num: '11', title: 'Governing Law' },
  { id: 'section-12', num: '12', title: 'Changes to These Terms' },
  { id: 'section-13', num: '13', title: 'Contact Us' },
]

export const TermsConditions: React.FC = () => {
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
        title="Terms & Conditions | ProstoLabs"
        description="Read the Terms & Conditions governing the use of the ProstoLabs website and services."
        path="/terms"
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
              <FileText size={14} className="text-blue-600" />
              <span>Legal Agreements</span>
            </div>
            
            <h1 className="text-[36px] sm:text-[50px] md:text-[58px] font-extrabold tracking-[-0.035em] leading-[1.04] text-slate-950 mb-3">
              Terms & Conditions
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              Guidelines, service boundaries, and client terms governing your use of ProstoLabs.
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
                  <Scale size={16} />
                </div>
                <h2 className="text-sm font-bold text-slate-950">Binding Framework</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Standardized commercial terms ensuring clarity on milestones, ownership, and deliverables.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Shield size={16} />
                </div>
                <h2 className="text-sm font-bold text-slate-950">IP Protection</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Transparent asset licensing and code ownership transfers upon project milestone completion.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2">
                <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <AlertCircle size={16} />
                </div>
                <h2 className="text-sm font-bold text-slate-950">Fair Collaboration</h2>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Clear expectations on communication, payment schedules, and mutual project responsibilities.
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
                  <span className="text-[11px] text-slate-400 block">Questions regarding terms?</span>
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
                  Welcome to ProstoLabs. By accessing or using our website (prostolabs.com) and services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.
                </p>

                {/* Section 1 */}
                <section id="section-1" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">01</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Acceptance of Terms
                    </h2>
                  </div>
                  <p>
                    By accessing our website, submitting inquiries, or applying for our programs, you agree to these Terms. If you do not agree with any part of these terms, you may not use our website.
                  </p>
                </section>

                {/* Section 2 */}
                <section id="section-2" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">02</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Intellectual Property Rights
                    </h2>
                  </div>
                  <p>
                    All content, designs, graphics, code, and intellectual property on this website are owned by or licensed to ProstoLabs. You may not reproduce, distribute, modify, or use our intellectual property without our express written consent.
                  </p>
                </section>

                {/* Section 3 */}
                <section id="section-3" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">03</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Services and Client Agreements
                    </h2>
                  </div>
                  <p>
                    The information provided on this website is for general informational purposes only. Any project, consulting, development, design, marketing, automation, AI, or internship services provided by ProstoLabs may be subject to separate agreements, proposals, quotations, or statements of work that define the scope, deliverables, pricing, and timelines.
                  </p>
                </section>

                {/* Section 4 */}
                <section id="section-4" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">04</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Internship Programs
                    </h2>
                  </div>
                  <p>
                    Participation in any ProstoLabs internship or mentorship program does not guarantee future employment. Program details, duration, learning resources, certificates, and other requirements may vary depending on the selected program and may be updated from time to time.
                  </p>
                </section>

                {/* Section 5 */}
                <section id="section-5" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">05</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Payments
                    </h2>
                  </div>
                  <p>
                    Where applicable, payments for services or programs must be completed according to the agreed quotation, proposal, invoice, or applicable terms. Unless otherwise stated, all payments are non-refundable once work or program access has commenced.
                  </p>
                </section>

                {/* Section 6 */}
                <section id="section-6" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">06</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      User Conduct
                    </h2>
                  </div>
                  <p>
                    When using our website, you agree not to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    <li>Submit false, misleading, or malicious information through our forms.</li>
                    <li>Attempt to gain unauthorized access to our systems or servers.</li>
                    <li>Upload files that contain viruses, malware, or harmful code.</li>
                  </ul>
                </section>

                {/* Section 7 */}
                <section id="section-7" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">07</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Third-Party Links
                    </h2>
                  </div>
                  <p>
                    Our website may contain links to third-party websites, tools, platforms, or products, including FlySava and other services operated independently. We are not responsible for the content, availability, privacy practices, or policies of third-party websites.
                  </p>
                </section>

                {/* Section 8 */}
                <section id="section-8" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">08</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Website Availability
                    </h2>
                  </div>
                  <p>
                    We strive to keep our website available and up to date. However, we do not guarantee uninterrupted access and may modify, suspend, or discontinue any part of the website or its services without prior notice.
                  </p>
                </section>

                {/* Section 9 */}
                <section id="section-9" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">09</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Disclaimer of Warranties
                    </h2>
                  </div>
                  <p>
                    This website and its content are provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.
                  </p>
                </section>

                {/* Section 10 */}
                <section id="section-10" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">10</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Limitation of Liability
                    </h2>
                  </div>
                  <p>
                    In no event shall ProstoLabs, its directors, employees, or partners be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of or inability to use our website or services.
                  </p>
                </section>

                {/* Section 11 */}
                <section id="section-11" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">11</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Governing Law
                    </h2>
                  </div>
                  <p>
                    These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
                  </p>
                </section>

                {/* Section 12 */}
                <section id="section-12" className="space-y-3 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">12</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Changes to These Terms
                    </h2>
                  </div>
                  <p>
                    We may update these Terms and Conditions periodically to reflect changes in our services, legal requirements, or business practices. Continued use of the website after any updates constitutes acceptance of the revised Terms.
                  </p>
                </section>

                {/* Section 13 */}
                <section id="section-13" className="space-y-4 pt-6 border-t border-slate-100 scroll-mt-28">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">13</span>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">
                      Contact Us
                    </h2>
                  </div>
                  <p>
                    If you have any questions regarding these Terms and Conditions, please contact us directly:
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