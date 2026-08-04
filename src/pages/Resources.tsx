import { useState, useLayoutEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Sparkles, Clock, ArrowRight, ArrowUpRight, 
  Search, ShieldCheck, Code2, Palette, TrendingUp, Settings,
  BookOpen, ChevronDown
} from 'lucide-react'
import { SEO } from '../components/seo/SEO'
import { Helmet } from 'react-helmet-async'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { resources, type Article } from '../data/resourcesData'

// Session Storage Helpers for Preserving Page Position & State
const STORAGE_KEY = 'prostolabs_resources_state'

interface SavedResourcesState {
  selectedTopic: string
  searchQuery: string
  visibleCount: number
  scrollY: number
  isReturning: boolean
}

const saveResourcesState = (state: Omit<SavedResourcesState, 'isReturning'>) => {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ ...state, isReturning: true }))
  } catch (e) {
    console.error('Failed to save resources state', e)
  }
}

const getResourcesState = (): SavedResourcesState | null => {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as SavedResourcesState
  } catch (e) {
    return null
  }
}

const clearResourcesState = () => {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch (e) {
    console.error('Failed to clear resources state', e)
  }
}

export function Resources() {
  const navigate = useNavigate()
  const location = useLocation()

  // Detect if user is returning from an article
  const savedState = getResourcesState()
  const isReturningFromArticle = Boolean(
    (location.state as { fromArticle?: boolean })?.fromArticle || savedState?.isReturning
  )

  // Initialize state from sessionStorage if returning, otherwise set defaults
  const [selectedTopic, setSelectedTopic] = useState<string>(
    isReturningFromArticle && savedState ? savedState.selectedTopic : 'All'
  )
  const [searchQuery, setSearchQuery] = useState<string>(
    isReturningFromArticle && savedState ? savedState.searchQuery : ''
  )
  const [visibleCount, setVisibleCount] = useState<number>(
    isReturningFromArticle && savedState ? savedState.visibleCount : 6
  )

  // The latest featured article becomes the entire hero
  const featuredArticle = resources[0]

  // Topics/Categories Definition
  const topics = [
    { name: 'All', icon: BookOpen },
    { name: 'Web Development', icon: Code2 },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'AI & Automation', icon: Sparkles },
    { name: 'SEO & Growth', icon: TrendingUp },
    { name: 'Maintenance', icon: Settings },
  ]

  // Filtered Archive Stream
  const filteredArticles = resources.filter((art: Article) => {
    const matchesTopic = selectedTopic === 'All' || art.category === selectedTopic
    const matchesQuery = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTopic && matchesQuery
  })

  // Paginated View
  const displayedArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  // Restore scroll position after DOM renders when returning
  useLayoutEffect(() => {
    if (isReturningFromArticle && savedState?.scrollY) {
      window.scrollTo(0, savedState.scrollY)
      clearResourcesState()
    }
  }, [])

  // Navigation Handler to store scroll position and state before viewing an article
  const handleArticleClick = (slug: string) => {
    saveResourcesState({
      selectedTopic,
      searchQuery,
      visibleCount,
      scrollY: window.scrollY
    })
    navigate(`/resources/${slug}`)
  }

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Resources & Journal | ProstoLabs",
    "description": "Practical guides, essays, and insights on web development, UI/UX design, AI automations, and growth strategy.",
    "url": "https://prostolabs.com/resources",
    "publisher": {
      "@type": "Organization",
      "name": "ProstoLabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prostolabs.com/logo.png"
      }
    }
  }

  return (
    <div className="relative bg-[#FAFAFA] text-[#0A0A0A] font-sans min-h-screen selection:bg-blue-500/30 selection:text-blue-900 pt-24 md:pt-32 pb-20 overflow-hidden">
      
      {/* GLOBAL PREMIUM BACKGROUND ELEMENTS */}
      <div className="absolute top-0 left-0 right-0 h-[120vh] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-[-5%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/10 blur-[120px] pointer-events-none mix-blend-multiply z-0" />
      <div className="absolute top-[15%] right-[-5%] w-[35%] h-[40%] rounded-full bg-cyan-400/10 blur-[120px] pointer-events-none mix-blend-multiply z-0" />
      
      <SEO 
        title="Resources & Journal | ProstoLabs"
        description="Explore articles on web engineering, product design systems, business AI automations, and search strategy."
        path="/resources"
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(collectionPageSchema)}
        </script>
      </Helmet>

      <div className="max-w-[1350px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* =================================================================== */}
        {/* SECTION 1 — FEATURED STORY AS THE HERO (CINEMATIC VIEWPORT FULL)  */}
        {/* =================================================================== */}
        {featuredArticle && (
          <AnimatedSection className="mb-16 md:mb-24">
            {/* Header / Intro */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] text-xs md:text-sm font-bold text-[#2563EB] mb-6 transform-gpu">
                <Sparkles size={16} className="text-[#2563EB]" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">ProstoLabs Journal</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.1] mb-4 text-[#0A0A0A] font-sans">
                Insights & Engineering
              </h1>
              <p className="text-lg sm:text-xl text-[#6B7280] font-medium tracking-tight">
                Practical guides, essays, and insights on web development, UI/UX design, AI automations, and growth strategy.
              </p>
            </div>

            {/* Featured Article Card */}
            <div
              onClick={() => handleArticleClick(featuredArticle.slug)}
              className="group relative block cursor-pointer rounded-[40px] overflow-hidden bg-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-gray-200/80 transition-transform duration-500 hover:-translate-y-1"
            >
              {/* Cinematic Full-Width Hero Background */}
              <div className="relative aspect-[16/11] sm:aspect-[21/10] lg:aspect-[21/9] w-full overflow-hidden">
                <img 
                  src={featuredArticle.thumbnail} 
                  alt={featuredArticle.title} 
                  loading="eager"
                  className="w-full h-full object-cover scale-100 group-hover:scale-[1.05] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
              </div>

              {/* Overlapping Editorial Content Card */}
              <div className="p-8 sm:p-10 lg:p-12 absolute bottom-0 left-0 w-full lg:w-auto lg:bottom-8 lg:left-8 lg:max-w-2xl bg-white/80 lg:bg-white/90 backdrop-blur-2xl lg:rounded-[32px] border-t lg:border border-white/40 lg:shadow-2xl transition-all duration-500 flex flex-col justify-end lg:justify-start">
                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#2563EB] mb-4">
                  <span className="px-3 py-1 bg-blue-50/80 rounded-full border border-blue-100 font-extrabold uppercase tracking-widest text-[10px]">
                    Featured Cover Story
                  </span>
                  <span className="text-gray-300 hidden sm:block">•</span>
                  <span className="text-gray-600 font-semibold">{featuredArticle.category}</span>
                  <span className="text-gray-300 hidden sm:block">•</span>
                  <span className="text-gray-500 font-medium flex items-center gap-1.5">
                    <Clock size={14} /> {featuredArticle.readingTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A0A0A] leading-[1.15] tracking-tight group-hover:text-[#2563EB] transition-colors font-sans mb-4">
                  {featuredArticle.title}
                </h2>

                <p className="text-[15px] sm:text-base text-[#4B5563] leading-relaxed font-medium line-clamp-3 mb-8">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{featuredArticle.date}</span>
                  <span className="px-6 py-3 rounded-full bg-[#0A0A0A] text-white text-sm font-bold flex items-center gap-2 group-hover:bg-[#2563EB] transition-colors shadow-lg shadow-black/10">
                    <span>Read Story</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}


        {/* =================================================================== */}
        {/* SECTION 2 — BROWSE TOPICS (FILTER DIRECTORY)                        */}
        {/* =================================================================== */}
        <AnimatedSection delay={0.1} className="mb-12 border-b border-gray-200/60 pb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A0A0A] tracking-tight">Browse Topics</h2>
              <p className="text-sm text-[#6B7280] font-medium mt-1">Filter the complete archive by domain.</p>
            </div>
            
            {/* Search Input */}
            <div className="relative group/search w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within/search:text-[#2563EB] transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search archive..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/60 backdrop-blur-md border border-gray-200/80 text-[15px] font-medium text-[#0A0A0A] focus:outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-blue-500/10 transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Topic Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {topics.map((t) => {
              const IconComp = t.icon
              const isSelected = selectedTopic === t.name
              return (
                <button
                  key={t.name}
                  onClick={() => {
                    setSelectedTopic(t.name)
                    setVisibleCount(6)
                  }}
                  className={`px-5 py-2.5 rounded-full border transition-all duration-300 cursor-pointer font-bold text-sm flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-[0_4px_15px_rgba(0,0,0,0.15)]'
                      : 'bg-white/60 backdrop-blur-md border-gray-200/80 text-[#4B5563] hover:border-gray-300 hover:bg-white hover:text-[#0A0A0A] shadow-sm hover:shadow-md'
                  }`}
                >
                  <IconComp size={16} className={isSelected ? 'text-white' : 'text-gray-400'} strokeWidth={2.5} />
                  <span>{t.name}</span>
                </button>
              )
            })}
            {selectedTopic !== 'All' && (
              <button 
                onClick={() => { setSelectedTopic('All'); setVisibleCount(6); }}
                className="ml-auto text-xs font-bold text-[#2563EB] hover:text-blue-700 hover:underline cursor-pointer transition-colors hidden sm:block px-2"
              >
                Clear Filters
              </button>
            )}
          </div>
        </AnimatedSection>


        {/* =================================================================== */}
        {/* SECTION 3 — LATEST ARTICLES (THE COMPLETE ARCHIVE)                  */}
        {/* =================================================================== */}
        <section className="py-8 border-b border-gray-200/60 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-[#0A0A0A] tracking-tight">
              {selectedTopic === 'All' && !searchQuery ? 'All Publications' : 'Search Results'}
            </h2>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest px-3 py-1 bg-gray-100 rounded-full">
              {displayedArticles.length} / {filteredArticles.length}
            </span>
          </div>

          {/* Article Grid Stream */}
          {displayedArticles.length === 0 ? (
            <AnimatedSection className="py-20 text-center max-w-sm mx-auto space-y-4">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto border border-gray-200 shadow-sm">
                <BookOpen size={32} className="text-gray-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#0A0A0A] tracking-tight">No articles found</h3>
                <p className="text-[15px] text-[#6B7280] font-medium mt-2">Try adjusting your search query or selecting a different topic filter.</p>
              </div>
              <button 
                onClick={() => { setSelectedTopic('All'); setSearchQuery(''); }}
                className="text-sm font-bold text-[#2563EB] hover:text-blue-700 hover:underline transition-colors mt-2"
              >
                Clear all filters
              </button>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {displayedArticles.map((art: Article, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.05}>
                  <div
                    onClick={() => handleArticleClick(art.slug)}
                    className="group rounded-[32px] bg-white/70 backdrop-blur-xl border border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:border-[#2563EB]/40 transition-all duration-500 p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                  >
                    <div className="space-y-5">
                      <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 relative shadow-sm">
                        <img 
                          src={art.thumbnail} 
                          alt={art.title} 
                          loading="lazy"
                          className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#0A0A0A] shadow-sm uppercase tracking-wider">
                            {art.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 text-xs font-bold text-gray-400 uppercase tracking-wider">
                        <span>{art.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="flex items-center gap-1.5"><Clock size={14} /> {art.readingTime}</span>
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors leading-[1.25] tracking-tight font-sans">
                        {art.title}
                      </h3>
                      
                      <p className="text-[15px] text-[#6B7280] font-medium leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-6 mt-8 border-t border-gray-100/80 flex items-center justify-between text-sm font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors">
                      <span>Read Story</span>
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="pt-16 text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white border border-gray-200 text-[#0A0A0A] font-bold text-sm hover:border-[#2563EB] hover:text-[#2563EB] shadow-sm hover:shadow-[0_8px_20px_rgba(37,99,235,0.1)] transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]"
              >
                <span>Load More Articles</span>
                <ChevronDown size={16} />
              </motion.button>
            </div>
          )}
        </section>


        {/* =================================================================== */}
        {/* SECTION 4 — FINAL CONVERSION CTA                                    */}
        {/* =================================================================== */}
        <section className="py-24">
          <AnimatedSection className="rounded-[40px] bg-[#0A0A0A] text-white p-10 sm:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Premium Dark Gradient Overlays */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_top_left,_rgba(37,99,235,0.25)_0%,_transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_bottom_right,_rgba(96,165,250,0.15)_0%,_transparent_70%)] pointer-events-none" />
            
            <div className="space-y-6 max-w-2xl relative z-10 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] flex items-center justify-center lg:justify-start gap-2">
                <ShieldCheck size={16} />
                <span>Ready to Turn Ideas into Digital Assets?</span>
              </span>
              <h3 className="text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] font-sans leading-[1.1]">
                Partner with ProstoLabs on your next project.
              </h3>
              <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                We design and engineer high-performance websites, web applications, AI automations, and growth strategy for forward-thinking brands.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link to="/start-project">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-14 px-8 rounded-full bg-white text-[#0A0A0A] font-bold text-base shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all cursor-pointer overflow-hidden flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] group/btn"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </div>
  )
}