import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { X } from 'lucide-react'

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the user has already consented
    const hasConsented = localStorage.getItem('prostolabs-cookie-consent')
    
    if (!hasConsented) {
      // Add a slight delay before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleDismiss = () => {
    // Save choice to localStorage and trigger the fade-out animation
    localStorage.setItem('prostolabs-cookie-consent', 'true')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          // Smooth 250ms fade-out with a slight downward slide on dismiss
          exit={{ opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.25, ease: 'easeOut' } }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          // UPDATED: Shifted to bottom-right (md:left-auto md:right-8) and removed the thick left border
          className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 w-auto md:w-[380px] z-[100] bg-[rgba(255,255,255,0.92)] backdrop-blur-[10px] rounded-[20px] border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-5 md:p-6"
        >
          {/* Refined Close Icon: Larger clickable area, subtle gray hover */}
          <button 
            onClick={handleDismiss}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100/80 transition-colors duration-200 outline-none flex items-center justify-center"
            aria-label="Dismiss cookie banner"
          >
            <X className="w-4 h-4" />
          </button>

          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-primary pr-6">
            <span>🍪</span> Cookies for a better experience
          </h3>
          
          <p className="text-gray-500 text-sm leading-relaxed mb-5 pr-2">
            We use cookies to improve performance, analyze website traffic, and enhance your experience. Learn more in our{' '}
            {/* Refined Link: Smooth transition, pointer cursor, subtle underline hover */}
            <Link 
              to="/privacy" 
              className="text-primary font-medium cursor-pointer underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all duration-200"
            >
              Privacy Policy
            </Link>.
          </p>
          
          <div className="px-1 md:px-2">
            <Button 
              onClick={handleDismiss} 
              // Refined Button: Added lift (-translate-y-[2px]) and shadow increase on hover
              className="w-full h-10 !rounded-full text-sm font-medium hover:-translate-y-[2px] hover:shadow-lg transition-all duration-200 ease-out"
            >
              Got it
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}