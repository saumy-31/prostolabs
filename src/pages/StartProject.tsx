import  { useState } from 'react'
import { Helmet } from 'react-helmet-async'

export function StartProject() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Web Application',
    budget: '$5,000 - $10,000',
    timeline: '1-2 Months',
    details: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = () => {
    setIsSubmitting(true)
  }

  return (
    <div style={{ width: '100%', minHeight: '85vh', backgroundColor: '#F8FAFC', color: '#0F172A', paddingTop: '120px', paddingBottom: '90px', display: 'block' }}>
      <Helmet>
        <title>Start Your Project | ProstoLabs</title>
        <meta name="description" content="Submit your project brief to ProstoLabs. Our engineering team will review your requirements and provide a detailed scope within 24 hours." />
        <link rel="canonical" href="https://prostolabs.com/start-project" />
      </Helmet>

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'start' }}>
          
          {/* Left Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', borderRadius: '9999px', backgroundColor: '#EFF6FF', border: '1px solid #DBEAFE', color: '#2563EB', fontSize: '12px', fontWeight: 700, width: 'fit-content' }}>
              <span>✨ Project Enquiry</span>
            </div>

            <h1 style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1.15, color: '#020617', margin: 0 }}>
              Let&apos;s Build Your <span style={{ color: '#2563EB' }}>Digital Product.</span>
            </h1>

            <p style={{ fontSize: '15px', color: '#475569', lineHeight: 1.6, margin: 0 }}>
              Tell us about your project goals, timelines, and requirements. Our engineering team will review your brief and send a clear roadmap and estimate within one business day.
            </p>

            <div style={{ borderTop: '1px solid #E2E8F0', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#EFF6FF', color: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✓</div>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: '#0F172A' }}>Fast 24-Hour Response</h3>
                  <p style={{ fontSize: '12px', color: '#64748B', margin: '2px 0 0 0' }}>Direct review by senior engineers with no agency bureaucracy.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#ECFDF5', color: '#059669', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✓</div>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: '#0F172A' }}>Fixed-Scope Transparency</h3>
                  <p style={{ fontSize: '12px', color: '#64748B', margin: '2px 0 0 0' }}>Detailed sprint planning, clear milestone deliverables, and zero surprise fees.</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', backgroundColor: '#EEF2FF', color: '#4F46E5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>✓</div>
                <div>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: 0, color: '#0F172A' }}>Production-Grade Quality</h3>
                  <p style={{ fontSize: '12px', color: '#64748B', margin: '2px 0 0 0' }}>Modern React, TypeScript, and cloud-native architecture built for scale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div style={{ backgroundColor: '#FFFFFF', padding: '32px', borderRadius: '24px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)' }}>
            <form 
              action="https://formsubmit.co/hello@prostolabs.com" 
              method="POST"
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}
            >
              <input type="hidden" name="_subject" value="New Client Project Enquiry | ProstoLabs" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://prostolabs.com/thank-you" />

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Company / Organization</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '14px', boxSizing: 'border-box' }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '13px', boxSizing: 'border-box' }}
                  >
                    <option value="Web Application">Web Application</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="AI Automation">AI Automation</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Website Redesign">Website Redesign</option>
                    <option value="Maintenance">Maintenance & Care</option>
                    <option value="Other">Other / Custom Scope</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Estimated Budget</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '13px', boxSizing: 'border-box' }}
                  >
                    <option value="< $5,000">&lt; $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                    <option value="Other / Flexible">Other / Flexible</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Target Launch</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '13px', boxSizing: 'border-box' }}
                  >
                    <option value="Immediately">Immediately</option>
                    <option value="1-2 Months">1-2 Months</option>
                    <option value="2-4 Months">2-4 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: 700, marginBottom: '6px', color: '#0F172A' }}>Project Overview & Goals *</label>
                <textarea
                  name="details"
                  required
                  rows={4}
                  placeholder="Tell us about the key features, users, and problems you're looking to solve..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', backgroundColor: '#F8FAFC', border: '1px solid #CBD5E1', fontSize: '14px', boxSizing: 'border-box', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  backgroundColor: '#2563EB',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 4px 14px rgba(37, 99, 235, 0.3)',
                  transition: 'all 0.2s ease'
                }}
              >
                {isSubmitting ? 'Submitting Brief...' : 'Submit Project Brief →'}
              </button>

              <p style={{ textAlign: 'center', fontSize: '11px', color: '#94A3B8', margin: 0 }}>
                Your privacy is protected. We will never share your email or project brief.
              </p>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}

export const StartAProject = StartProject
export default StartProject