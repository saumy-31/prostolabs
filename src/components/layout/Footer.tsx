import { Link } from 'react-router-dom'
import { Mail, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200/90 font-sans text-slate-600">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group inline-flex cursor-pointer">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center text-base shadow-sm">
                P
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-950">
                ProstoLabs
              </span>
            </Link>
            
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              We design and build modern websites, web applications, mobile software, and AI tools to help businesses scale.
            </p>

            <div className="space-y-2 pt-2 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-2">
                <Instagram size={15} className="text-slate-400" />
                <a 
                  href="https://instagram.com/prostolabs" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-blue-600 transition-colors"
                >
                  Instagram
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-slate-400" />
                <a 
                  href="mailto:hello@prostolabs.com" 
                  className="hover:text-blue-600 transition-colors"
                >
                  hello@prostolabs.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-950 block font-mono">
              Company
            </span>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
              <li>
                <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/start-project" className="hover:text-blue-600 transition-colors">Start a Project</Link>
              </li>
            </ul>
          </div>

          {/* Capabilities Links */}
          <div className="space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-950 block font-mono">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors">Web Apps</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-600 transition-colors">SEO & Growth</Link>
              </li>
            </ul>
          </div>

          {/* Explore & Legal */}
          <div className="space-y-3.5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-950 block font-mono">
              Explore & Legal
            </span>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-600">
              <li>
                <Link to="/resources" className="hover:text-blue-600 transition-colors">Resources Hub</Link>
              </li>
              <li>
                <Link to="/flysava" className="hover:text-blue-600 transition-colors">FlySava Case Study</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-blue-600 transition-colors">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 mt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 ProstoLabs. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-blue-600">💙</span>
            <span>by ProstoLabs</span>
          </p>
        </div>

      </div>
    </footer>
  )
}