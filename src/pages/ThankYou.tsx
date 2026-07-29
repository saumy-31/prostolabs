import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { SEO } from '../components/seo/SEO'
import { CheckCircle2, ArrowLeft, PlusCircle } from 'lucide-react'

export const ThankYou = () => {
  return (
    <>
      <SEO 
        title="Thank You | ProstoLabs"
        description="Thank you for submitting your inquiry to ProstoLabs. Our team will get back to you within one business day."
        path="/thank-you"
      />
      
      <div className="overflow-hidden bg-[#FAFAFA] text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900 min-h-[80vh] flex items-center justify-center">
        <div className="max-w-[700px] mx-auto px-6 pt-20 pb-20 text-center">
          <AnimatedSection>
            
            {/* Emerald Success Icon Badge */}
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-emerald-200/80 shadow-sm">
              <CheckCircle2 className="w-10 h-10 text-emerald-600" />
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A0A0A] font-sans mb-4">
              Project Brief <span className="text-[#2563EB]">Received!</span>
            </h1>

            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed max-w-lg mx-auto font-medium mb-10">
              Thank you for reaching out to ProstoLabs. Our technical team is reviewing your requirements and will reach out with a detailed response within one business day.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3.5">
              <Link to="/" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-[#2563EB] text-white font-bold text-sm shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer transition-colors hover:bg-[#1D4ED8]"
                >
                  <ArrowLeft size={16} />
                  <span>Return Home</span>
                </motion.button>
              </Link>

              <Link to="/start-project" className="w-full sm:w-auto">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto h-12 px-7 rounded-2xl bg-white border border-gray-200/80 text-[#0A0A0A] font-bold text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <PlusCircle size={16} className="text-[#2563EB]" />
                  <span>Submit Another Brief</span>
                </motion.button>
              </Link>
            </div>

          </AnimatedSection>
        </div>
      </div>
    </>
  )
}