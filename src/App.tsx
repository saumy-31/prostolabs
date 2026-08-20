import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { CookieBanner } from './components/ui/CookieBanner'

// Critical static imports
import { Home } from './pages/Home'
import { StartProject } from './pages/StartProject'

// Lazy loaded secondary routes
const lazyNamed = <T extends Record<string, any>, K extends keyof T>(
  factory: () => Promise<T>,
  name: K
) => lazy(() => factory().then((m) => ({ default: m[name] || m.default })))

const About = lazyNamed(() => import('./pages/About'), 'About')
const Services = lazyNamed(() => import('./pages/Services'), 'Services')
const Careers = lazyNamed(() => import('./pages/Careers'), 'Careers')
const Contact = lazyNamed(() => import('./pages/Contact'), 'Contact')
const ThankYou = lazyNamed(() => import('./pages/ThankYou'), 'ThankYou')
const FlySava = lazyNamed(() => import('./pages/FlySava'), 'FlySava')
const PrivacyPolicy = lazyNamed(() => import('./pages/PrivacyPolicy'), 'PrivacyPolicy')
const TermsConditions = lazyNamed(() => import('./pages/TermsConditions'), 'TermsConditions')
const Resources = lazyNamed(() => import('./pages/Resources'), 'Resources')
const ResourceArticle = lazyNamed(() => import('./pages/ResourceArticle'), 'ResourceArticle')
const NotFound = lazyNamed(() => import('./pages/NotFound'), 'NotFound')

const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#F8FAFC]">
    <div className="w-8 h-8 border-3 border-blue-600 border-t-transparent rounded-full animate-spin" />
  </div>
)

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col justify-between bg-[#F8FAFC] text-[#0F172A] relative">
          <Navbar />
          
          <main className="flex-grow">
            <Suspense fallback={<PageFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Start Project routes */}
                <Route path="/start-project" element={<StartProject />} />
                <Route path="/start-project/*" element={<StartProject />} />
                <Route path="/start-a-project" element={<StartProject />} />
                <Route path="/start-a-project/*" element={<StartProject />} />
                
                <Route path="/thank-you" element={<ThankYou />} />
                <Route path="/flysava" element={<FlySava />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/terms-and-conditions" element={<TermsConditions />} />
                
                <Route path="/resources" element={<Resources />} />
                <Route path="/resources/:slug" element={<ResourceArticle />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <CookieBanner />
        </div>
      </Router>
    </HelmetProvider>
  )
}