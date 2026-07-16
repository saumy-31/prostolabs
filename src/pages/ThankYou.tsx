import { AnimatedSection } from '../components/ui/AnimatedSection'
import { Button } from '../components/ui/Button'
import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

export const ThankYou = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-24 text-center min-h-[70vh] flex flex-col justify-center">
      <AnimatedSection>
        <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/20">
          <CheckCircle2 className="w-12 h-12 text-green-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Project Brief <span className="text-accent">Submitted</span>
        </h1>
        <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-xl mx-auto">
          Thank you for contacting ProstoLabs.<br /><br />
          We've successfully received your project inquiry. Our team will review your requirements and get back to you within one business day.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button size="lg" className="w-full sm:w-auto">Return Home</Button>
          </Link>
          <Link to="/start-project">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">Start Another Project</Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  )
}