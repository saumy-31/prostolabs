import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { ArrowLeft, Compass } from 'lucide-react'

export const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found | ProstoLabs"
        description="The page you are looking for does not exist or has been moved."
        noIndex={true}
      />
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900 min-h-[85vh] flex items-center justify-center">
        <div className="max-w-[700px] mx-auto px-6 pt-16 pb-20 text-center">
          <AnimatedSection>
            
            {/* Soft Blue Compass Badge */}
            <div className="w-16 h-16 bg-blue-50 text-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-100 shadow-sm">
              <Compass className="w-8 h-8" />
            </div>

            {/* Styled 404 Heading */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight text-[#0A0A0A] font-sans mb-2 leading-none">
              4<span className="text-[#2563EB]">0</span>4
            </h1>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A0A0A] font-sans mb-4">
              Page not found
            </h2>

            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-md mx-auto font-medium mb-8">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, renamed, or temporarily removed.
            </p>

            {/* Action Button */}
            <div className="flex justify-center">
              <Link to="/">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-[#1D4ED8]"
                >
                  <ArrowLeft size={16} />
                  <span>Return Home</span>
                </motion.button>
              </Link>
            </div>

          </AnimatedSection>
        </div>
      </div>
    </>
  )
}