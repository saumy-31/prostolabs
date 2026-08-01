import { useState, useLayoutEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

import { 
  Sparkles, Clock, ArrowRight, ArrowUpRight, 
  Search, ShieldCheck, Code2, Palette, TrendingUp, Settings,
  BookOpen, ChevronDown
} from 'lucide-react'
import { SEO } from '../components/seo/SEO'
import { Helmet } from 'react-helmet-async'
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
    <div className="bg-[#FAFAFA] text-[#0A0A0A] font-sans min-h-screen selection:bg-blue-100 selection:text-blue-900 pt-20 pb-20">
      
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

      <div className="max-w-[1350px] mx-auto px-6 lg:px-12">
        
        {/* =================================================================== */}
        {/* SECTION 1 — FEATURED STORY AS THE HERO (CINEMATIC VIEWPORT FULL)  */}
        {/* =================================================================== */}
        {featuredArticle && (
          <header className="pt-4 pb-8 border-b border-gray-200/80">
            <div
              onClick={() => handleArticleClick(featuredArticle.slug)}
              className="group relative block cursor-pointer rounded-[36px] overflow-hidden bg-gray-900 shadow-2xl border border-gray-200/80"
            >
              {/* Cinematic Full-Width Hero Background */}
              <div className="relative aspect-[16/10] sm:aspect-[21/10] lg:aspect-[21/9] w-full overflow-hidden">
                <img 
                  src={featuredArticle.thumbnail} 
                  alt={featuredArticle.title} 
                  loading="eager"
                  className="w-full h-full object-cover opacity-90 scale-100 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              </div>

              {/* Overlapping Editorial Content Card */}
              <div className="p-6 sm:p-10 lg:p-12 lg:absolute lg:bottom-8 lg:left-8 lg:max-w-2xl bg-white/95 backdrop-blur-xl rounded-[28px] border border-gray-200/90 shadow-2xl space-y-4 m-4 sm:m-6 lg:m-0">
                <div className="flex items-center gap-3 text-xs font-bold text-[#2563EB]">
                  <span className="px-3 py-1 bg-blue-50 rounded-full border border-blue-100 font-extrabold uppercase tracking-wider text-[10px]">
                    Featured Cover Story
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-500 font-semibold">{featuredArticle.category}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-gray-400 font-medium flex items-center gap-1">
                    <Clock size={12} /> {featuredArticle.readingTime}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0A0A0A] leading-[1.15] group-hover:text-[#2563EB] transition-colors font-sans tracking-tight">
                  {featuredArticle.title}
                </h1>

                <p className="text-xs sm:text-sm text-[#6B7280] leading-relaxed font-medium line-clamp-3">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-gray-400">{featuredArticle.date}</span>
                  <span className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold flex items-center gap-2 group-hover:bg-blue-600 transition-colors shadow-md shadow-blue-500/20">
                    <span>Read Story</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>

            {/* Publication Metadata Bar */}
            <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-xs font-bold text-gray-500">
              <div className="flex items-center gap-4">
                <span className="text-[#0A0A0A] font-extrabold">{resources.length} Articles</span>
                <span className="text-gray-300">•</span>
                <span>5 Core Topics</span>
                <span className="text-gray-300">•</span>
                <span className="text-[#2563EB]">Updated Weekly</span>
              </div>
              <span className="text-gray-400 font-medium">The ProstoLabs Journal</span>
            </div>
          </header>
        )}


        {/* =================================================================== */}
        {/* SECTION 2 — BROWSE TOPICS (FILTER DIRECTORY)                        */}
        {/* =================================================================== */}
        <section className="py-10 border-b border-gray-200/80">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl font-extrabold text-[#0A0A0A]">Browse Topics</h2>
              <p className="text-xs text-[#6B7280] font-medium mt-0.5">Filter the complete archive by domain.</p>
            </div>
            {selectedTopic !== 'All' && (
              <button 
                onClick={() => { setSelectedTopic('All'); setVisibleCount(6); }}
                className="text-xs font-bold text-[#2563EB] hover:underline cursor-pointer"
              >
                Clear Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
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
                  className={`p-4 rounded-2xl border text-left transition-all cursor-pointer font-bold text-xs flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-[#2563EB] text-white border-[#2563EB] shadow-md shadow-blue-500/20'
                      : 'bg-white border-gray-200/80 text-gray-700 hover:border-[#2563EB]/40 hover:bg-gray-50/50'
                  }`}
                >
                  <IconComp size={18} className={isSelected ? 'text-white' : 'text-[#2563EB]'} />
                  <span>{t.name}</span>
                </button>
              )
            })}
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION 3 — LATEST ARTICLES (THE COMPLETE ARCHIVE)                  */}
        {/* =================================================================== */}
        <section className="py-12 border-b border-gray-200/80">
          
          {/* Section Heading & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h2 className="text-2xl font-extrabold text-[#0A0A0A] tracking-tight">
                {selectedTopic === 'All' ? 'All Articles' : `${selectedTopic} Articles`}
              </h2>
              <p className="text-xs text-[#6B7280] font-semibold mt-1">
                Showing {displayedArticles.length} of {filteredArticles.length} publications
              </p>
            </div>

            {/* Inline Search */}
            <div className="relative w-full sm:w-72">
              <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              <input 
                type="text" 
                placeholder="Search entire archive..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
              />
            </div>
          </div>

          {/* Article Grid Stream */}
          {displayedArticles.length === 0 ? (
            <div className="py-16 text-center max-w-sm mx-auto space-y-2">
              <BookOpen size={28} className="mx-auto text-gray-300" />
              <h3 className="text-sm font-bold text-[#0A0A0A]">No articles found</h3>
              <p className="text-xs text-gray-500 font-medium">Try adjusting your search query or selecting another topic filter above.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedArticles.map((art: Article) => (
                <div
                  key={art.slug}
                  onClick={() => handleArticleClick(art.slug)}
                  className="group rounded-[28px] bg-white border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-[#2563EB]/40 transition-all duration-300 p-6 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  <div className="space-y-4">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100">
                      <img 
                        src={art.thumbnail} 
                        alt={art.title} 
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300" 
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-[#2563EB]">{art.category}</span>
                      <span className="text-gray-400 flex items-center gap-1"><Clock size={12} /> {art.readingTime}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0A0A] group-hover:text-[#2563EB] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#6B7280] font-medium leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400">
                    <span>{art.date}</span>
                    <span className="text-[#2563EB] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                      <span>Read Story</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="pt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white border border-gray-200/90 text-[#0A0A0A] font-bold text-xs hover:border-[#2563EB] hover:text-[#2563EB] shadow-sm transition-all cursor-pointer"
              >
                <span>Load More Articles</span>
                <ChevronDown size={16} />
              </button>
            </div>
          )}
        </section>


        {/* =================================================================== */}
        {/* SECTION 4 — FINAL CONVERSION CTA                                    */}
        {/* =================================================================== */}
        <section className="pt-12">
          <div className="rounded-[32px] bg-[#0A0A0A] text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#2563EB] flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>Ready to Turn Ideas into Digital Assets?</span>
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                Partner with ProstoLabs on your next project.
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-medium leading-relaxed">
                We design and engineer high-performance websites, web applications, AI automations, and growth strategy for forward-thinking brands.
              </p>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                to="/contact"
                className="px-6 py-4 rounded-xl bg-[#2563EB] text-white font-bold text-sm shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}