import { Link } from 'react-router-dom'
import { SEO } from '../components/seo/SEO'
import { Button } from '../components/ui/Button'
import { AnimatedSection } from '../components/ui/AnimatedSection'

export const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found | ProstoLabs"
        description="The page you are looking for does not exist or has been moved."
        path="/404"
      />
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <AnimatedSection className="text-center max-w-xl">
          <h1 className="text-8xl md:text-9xl font-extrabold text-gray-100 mb-6 tracking-tighter">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Page not found</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. It might have been removed, renamed, or temporarily unavailable.
          </p>
          <Link to="/">
            <Button size="lg" className="px-10 h-14">Return Home</Button>
          </Link>
        </AnimatedSection>
      </div>
    </>
  )
}