import { useState, useLayoutEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { 
  Sparkles, Clock, ArrowRight, ArrowUpRight, 
  Search, ShieldCheck, Code2, Palette, TrendingUp, Settings,
  BookOpen, ChevronDown
} from 'lucide-react'
import { SEO } from '../components/seo/SEO'
import { Helmet } from 'react-helmet-async'
import { AnimatedSection } from '../components/ui/AnimatedSection'
import { resources, type Article } from '../data/resourcesData'

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

  const savedState = getResourcesState()
  const isReturningFromArticle = Boolean(
    (location.state as { fromArticle?: boolean })?.fromArticle || savedState?.isReturning
  )

  const [selectedTopic, setSelectedTopic] = useState<string>(
    isReturningFromArticle && savedState ? savedState.selectedTopic : 'All'
  )
  const [searchQuery, setSearchQuery] = useState<string>(
    isReturningFromArticle && savedState ? savedState.searchQuery : ''
  )
  const [visibleCount, setVisibleCount] = useState<number>(
    isReturningFromArticle && savedState ? savedState.visibleCount : 6
  )

  const featuredArticle = resources[0]

  const topics = [
    { name: 'All', icon: BookOpen },
    { name: 'Web Development', icon: Code2 },
    { name: 'UI/UX Design', icon: Palette },
    { name: 'AI & Automation', icon: Sparkles },
    { name: 'SEO & Growth', icon: TrendingUp },
    { name: 'Maintenance', icon: Settings },
  ]

  const filteredArticles = resources.filter((art: Article) => {
    const matchesTopic = selectedTopic === 'All' || art.category === selectedTopic
    const matchesQuery = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTopic && matchesQuery
  })

  const displayedArticles = filteredArticles.slice(0, visibleCount)
  const hasMore = visibleCount < filteredArticles.length

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  useLayoutEffect(() => {
    if (isReturningFromArticle && savedState?.scrollY) {
      window.scrollTo(0, savedState.scrollY)
      clearResourcesState()
    }
  }, [])

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
    <div className="relative w-full overflow-x-clip bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600/15 selection:text-blue-600 min-h-screen pt-28 sm:pt-36 pb-20">
      
      {/* Ambient Grid Layer */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 top-0 h-[650px] w-full bg-[radial-gradient(ellipse_75%_50%_at_50%_0%,rgba(37,99,235,0.06),transparent_70%)] pointer-events-none" 
      />
      <div 
        aria-hidden="true" 
        className="absolute top-0 left-0 right-0 h-[700px] bg-[linear-gradient(to_right,#E2E8F040_1px,transparent_1px),linear-gradient(to_bottom,#E2E8F040_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" 
      />
      
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

      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* =================================================================== */}
        {/* 1. HERO HEADER */}
        {/* =================================================================== */}
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-blue-600 mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span>ProstoLabs Journal</span>
          </div>
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-extrabold tracking-[-0.035em] leading-[1.05] text-slate-950 mb-3">
            Insights & Engineering
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Practical guides, architectural frameworks, and product strategies on web development, UI/UX, and AI.
          </p>
        </AnimatedSection>

        {/* =================================================================== */}
        {/* 2. FEATURED COVER STORY */}
        {/* =================================================================== */}
        {featuredArticle && (
          <AnimatedSection className="mb-14 sm:mb-20">
            <div
              onClick={() => handleArticleClick(featuredArticle.slug)}
              className="group cursor-pointer rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0"
            >
              {/* Media (7 Cols) */}
              <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto overflow-hidden bg-slate-100 min-h-[260px] sm:min-h-[340px]">
                <img 
                  src={featuredArticle.thumbnail} 
                  alt={featuredArticle.title} 
                  loading="eager"
                  className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md text-slate-900 rounded-md font-mono text-xs font-semibold shadow-2xs">
                  Featured Story
                </span>
              </div>

              {/* Editorial Content (5 Cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-3">
                    <span className="text-blue-600">{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {featuredArticle.readingTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-snug tracking-tight group-hover:text-blue-600 transition-colors mb-3">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal line-clamp-3 sm:line-clamp-4">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Read Full Article</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* =================================================================== */}
        {/* 3. TOPIC FILTERS & SEARCH BAR */}
        {/* =================================================================== */}
        <AnimatedSection delay={0.05} className="mb-10 border-b border-slate-200/80 pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight">Browse Topics</h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal mt-0.5">Filter the complete archive by domain.</p>
            </div>
            
            {/* Search Input */}
            <div className="relative group/search w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/search:text-blue-600 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setVisibleCount(6); }}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-normal text-slate-900 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all shadow-2xs"
              />
            </div>
          </div>

          {/* Topic Badges */}
          <div className="flex flex-wrap items-center gap-2">
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
                  className={`px-3.5 py-2 rounded-xl border transition-all duration-200 cursor-pointer text-xs font-semibold flex items-center gap-2 ${
                    isSelected
                      ? 'bg-slate-950 text-white border-slate-950 shadow-2xs'
                      : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:text-slate-950 shadow-2xs'
                  }`}
                >
                  <IconComp size={14} className={isSelected ? 'text-blue-400' : 'text-slate-400'} strokeWidth={2} />
                  <span>{t.name}</span>
                </button>
              )
            })}
            {selectedTopic !== 'All' && (
              <button 
                onClick={() => { setSelectedTopic('All'); setSearchQuery(''); setVisibleCount(6); }}
                className="ml-auto text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer transition-colors hidden sm:block px-2"
              >
                Clear Filters
              </button>
            )}
          </div>
        </AnimatedSection>

        {/* =================================================================== */}
        {/* 4. ARTICLE GRID */}
        {/* =================================================================== */}
        <section className="py-4 border-b border-slate-200/80 pb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-950 tracking-tight">
              {selectedTopic === 'All' && !searchQuery ? 'All Publications' : 'Search Results'}
            </h2>
            <span className="text-xs font-mono text-slate-500 uppercase tracking-wider px-2.5 py-1 bg-slate-100 rounded-md">
              {displayedArticles.length} / {filteredArticles.length}
            </span>
          </div>

          {displayedArticles.length === 0 ? (
            <AnimatedSection className="py-16 text-center max-w-sm mx-auto space-y-3">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto border border-slate-200 shadow-2xs">
                <BookOpen size={22} className="text-slate-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 tracking-tight">No articles found</h3>
                <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">Try adjusting your search query or selecting a different topic filter.</p>
              </div>
              <button 
                onClick={() => { setSelectedTopic('All'); setSearchQuery(''); }}
                className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors mt-2"
              >
                Clear all filters
              </button>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedArticles.map((art: Article, i) => (
                <AnimatedSection key={art.slug} delay={i * 0.04}>
                  <div
                    onClick={() => handleArticleClick(art.slug)}
                    className="group rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all p-5 sm:p-6 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                  >
                    <div className="space-y-4">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 relative shadow-2xs">
                        <img 
                          src={art.thumbnail} 
                          alt={art.title} 
                          loading="lazy"
                          className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-300" 
                        />
                        <div className="absolute top-2.5 left-2.5">
                          <span className="px-2.5 py-0.5 rounded-md bg-white/95 backdrop-blur-md text-[11px] font-bold text-slate-900 shadow-2xs">
                            {art.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {art.readingTime}</span>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-bold text-slate-950 group-hover:text-blue-600 transition-colors leading-snug tracking-tight">
                        {art.title}
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed line-clamp-3">
                        {art.excerpt}
                      </p>
                    </div>

                    <div className="pt-5 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      <span>Read Story</span>
                      <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="pt-12 text-center">
              <button
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2 h-11 px-6 rounded-full bg-white border border-slate-200 text-slate-900 font-medium text-xs sm:text-sm hover:border-slate-300 hover:bg-slate-50 shadow-2xs transition-colors cursor-pointer"
              >
                <span>Load More Articles</span>
                <ChevronDown size={14} />
              </button>
            </div>
          )}
        </section>

        {/* =================================================================== */}
        {/* 5. CONVERSION CTA */}
        {/* =================================================================== */}
        <section className="py-16 sm:py-24">
          <AnimatedSection className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400">
                <ShieldCheck size={15} />
                <span>Ready to Turn Ideas into Digital Assets?</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Partner with ProstoLabs on your next project.
              </h3>
              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
                We design and engineer high-performance websites, web applications, AI automations, and growth strategy for forward-thinking brands.
              </p>
            </div>

            <div className="shrink-0">
              <Link to="/start-project">
                <button className="h-12 px-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm sm:text-base shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </section>

      </div>
    </div>
  )
}