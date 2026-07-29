import { useState, useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'

// --- MAGNETIC BUTTON COMPONENT FROM .IN ---
interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

function MagneticButton({ children, className, onClick }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    x.set((e.clientX - (left + width / 2)) * 0.2)
    y.set((e.clientY - (top + height / 2)) * 0.2)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      onClick={onClick}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('#')) {
      e.preventDefault()
      if (location.pathname !== '/') {
        navigate(`/${href}`)
      } else {
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  const handleStartProject = () => {
    setIsMobileMenuOpen(false)
    navigate('/start-project')
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-[#FAFAFA]/80 backdrop-blur-xl border-gray-200/60 shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* BRAND LOGO (EXACT .IN MATCH) */}
        <Link to="/" className="flex items-center gap-2 group relative z-50 outline-none">
          <motion.div 
            whileHover={{ rotate: 90, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center shadow-md shadow-blue-500/20"
          >
            <motion.span whileHover={{ rotate: -90 }} className="text-white font-black text-lg leading-none block">
              P
            </motion.span>
          </motion.div>
          <span className="text-xl font-bold tracking-tight text-[#0A0A0A] font-sans">
            ProstoLabs
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href
            return (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative group text-xs sm:text-sm font-semibold transition-colors ${
                  isActive ? 'text-[#0A0A0A] font-bold' : 'text-[#6B7280] hover:text-[#0A0A0A]'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-[2px] bg-[#2563EB] transition-all duration-300 rounded-full ${
                  isActive ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </a>
            )
          })}
          
          {/* MAGNETIC ACTION BUTTON */}
          <MagneticButton 
            onClick={handleStartProject}
            className="bg-[#2563EB] text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:bg-blue-600 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Start Your Project</span>
          </MagneticButton>
        </nav>

        {/* MOBILE TOGGLE BUTTON */}
        <button 
          className="md:hidden text-[#0A0A0A] relative z-50 p-2 rounded-xl bg-gray-100/80 cursor-pointer" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-x-0 top-0 pt-20 pb-8 px-6 bg-white/95 backdrop-blur-2xl border-b border-gray-200 shadow-2xl md:hidden z-40 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-3 pt-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-bold text-gray-800 hover:text-[#2563EB] py-2 border-b border-gray-100 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                onClick={handleStartProject}
                className="w-full mt-2 bg-[#2563EB] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  )
}