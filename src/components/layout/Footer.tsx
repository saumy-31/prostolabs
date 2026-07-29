import { Link } from 'react-router-dom'
import { Instagram, Mail, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200/80 pt-16 md:pt-20 pb-8 text-[#0A0A0A] font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-8">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16">
          
          {/* LEFT COLUMN: BRAND & CONTACT */}
          <div className="lg:w-[32%] flex flex-col shrink-0">
            <Link to="/" className="inline-block mb-4 outline-none">
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <img
                  src="/logo.png"
                  alt="ProstoLabs Logo"
                  className="h-[32px] md:h-[34px] w-auto object-contain"
                />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight leading-none font-sans">
                  <span className="text-[#0A0A0A]">Prosto</span>
                  <span className="text-[#0A0A0A]">Labs</span>
                </span>
              </motion.div>
            </Link>
            
            <p className="text-[#6B7280] text-sm leading-relaxed mb-6 font-medium max-w-sm">
              We design and build modern websites, web applications, mobile software, and AI tools to help businesses scale.
            </p>

            <div className="flex flex-col space-y-3">
              <a 
                href="https://instagram.com/prostolabs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center text-xs sm:text-sm font-semibold text-[#6B7280] hover:text-[#2563EB] transition-colors w-fit"
              >
                <Instagram className="w-4 h-4 mr-2.5 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a 
                href="mailto:hello@prostolabs.com" 
                className="group flex items-center text-xs sm:text-sm font-semibold text-[#6B7280] hover:text-[#2563EB] transition-colors w-fit"
              >
                <Mail className="w-4 h-4 mr-2.5 text-gray-400 group-hover:text-[#2563EB] transition-colors" />
                <span>hello@prostolabs.com</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMNS: NAVIGATION */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* COMPANY */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0A0A0A] mb-4 font-sans">Company</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li><Link to="/about" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">Contact</Link></li>
                <li><Link to="/start-project" className="text-[#2563EB] font-bold hover:underline">Start a Project</Link></li>
              </ul>
            </div>

            {/* SERVICES */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0A0A0A] mb-4 font-sans">Capabilities</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li><Link to="/services" state={{ activeService: 'web' }} className="text-[#6B7280] hover:text-[#2563EB] transition-colors">Web Apps</Link></li>
                <li><Link to="/services" state={{ activeService: 'uiux' }} className="text-[#6B7280] hover:text-[#2563EB] transition-colors">UI/UX Design</Link></li>
                <li><Link to="/services" state={{ activeService: 'ai' }} className="text-[#6B7280] hover:text-[#2563EB] transition-colors">AI Solutions</Link></li>
                <li><Link to="/services" state={{ activeService: 'marketing' }} className="text-[#6B7280] hover:text-[#2563EB] transition-colors">SEO & Growth</Link></li>
              </ul>
            </div>

            {/* EXPLORE */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0A0A0A] mb-4 font-sans">Featured</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li>
                  <Link to="/flysava" className="inline-flex items-center gap-1.5 text-[#6B7280] hover:text-[#2563EB] transition-colors">
                    <span>FlySava</span>
                    <span className="px-1.5 py-0.5 rounded-md bg-blue-50 text-[10px] font-bold text-[#2563EB]">Product</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider text-[#0A0A0A] mb-4 font-sans">Legal</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li><Link to="/privacy" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-[#6B7280] hover:text-[#2563EB] transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="border-t border-gray-200/80 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[#6B7280] font-medium">
          <p>© 2026 ProstoLabs. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built by</span>
            <span className="font-bold text-[#0A0A0A]">ProstoLabs Engineering</span>
          </p>
        </div>

      </div>
    </footer>
  )
}