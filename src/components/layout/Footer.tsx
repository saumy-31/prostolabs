import { Link } from 'react-router-dom'
import { Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export const Footer = () => {
  return (
    <footer className="bg-surface pt-24 pb-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 mb-16">
          
          {/* Left Side: Brand & Contact */}
          <div className="lg:w-[30%] flex flex-col shrink-0">
            <Link to="/" className="inline-block mb-6 outline-none">
              <motion.div 
                className="flex items-center gap-2.5"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <img
                  src="/5CBCF654-557C-4E52-8DA9-680922E94A43.PNG"
                  alt="ProstoLabs Logo"
                  className="h-[34px] md:h-[36px] w-auto object-contain"
                />
                <span className="text-xl md:text-2xl font-extrabold tracking-tight leading-none">
                  <span className="text-primary">Prosto</span>
                  <span className="text-accent">Labs</span>
                </span>
              </motion.div>
            </Link>
            
            <p className="text-gray-500 text-base leading-relaxed mb-8 pr-4">
              Building modern websites, AI solutions, and digital experiences that help businesses grow.
            </p>

            <div className="flex flex-col space-y-4">
              <a 
                href="https://instagram.com/prostolabs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors w-fit"
              >
                <Instagram className="w-5 h-5 mr-3 text-gray-400 group-hover:text-accent transition-colors" />
                Instagram
              </a>
              <a 
                href="mailto:hello@prostolabs.com" 
                className="group flex items-center text-sm font-medium text-gray-500 hover:text-primary transition-colors w-fit"
              >
                <Mail className="w-5 h-5 mr-3 text-gray-400 group-hover:text-accent transition-colors" />
                hello@prostolabs.com
              </a>
            </div>
          </div>

          {/* Right Side: Navigation Columns */}
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div>
              <h4 className="font-semibold text-primary mb-6">Company</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="text-gray-500 hover:text-primary transition-colors">About</Link></li>
                <li><Link to="/careers" className="text-gray-500 hover:text-primary transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-500 hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-6">Services</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services" state={{ activeService: 'web' }} className="text-gray-500 hover:text-primary transition-colors">Web Development</Link></li>
                <li><Link to="/services" state={{ activeService: 'uiux' }} className="text-gray-500 hover:text-primary transition-colors">UI/UX Design</Link></li>
                <li><Link to="/services" state={{ activeService: 'ai' }} className="text-gray-500 hover:text-primary transition-colors">AI Solutions</Link></li>
                <li><Link to="/services" state={{ activeService: 'marketing' }} className="text-gray-500 hover:text-primary transition-colors">Digital Marketing</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-6">Explore</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/flysava" className="text-gray-500 hover:text-primary transition-colors">FlySava</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-6">Legal</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/privacy" className="text-gray-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-gray-500 hover:text-primary transition-colors">Terms & Conditions</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2026 ProstoLabs. All rights reserved.</p>
          <p>Built with ❤️ by ProstoLabs.</p>
        </div>

      </div>
    </footer>
  )
}