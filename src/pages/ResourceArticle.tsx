import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { resources } from '../data/resourcesData'
import { 
  ArrowLeft, Clock, Calendar, User, 
  ChevronDown, ChevronUp, Check, Copy, MessageSquare,
  Sparkles, Lightbulb, Quote, TrendingUp, CheckCircle2,
  AlertTriangle, ArrowRight, Building2
} from 'lucide-react'
import { SEO } from '../components/seo/SEO'

export function ResourceArticle() {
  const { slug } = useParams<{ slug: string }>()
  
  // Find article matching route slug or fallback to first article
  const article = resources.find((r) => r.slug === slug) || resources[0]

  const [activeId, setActiveId] = useState<string>('')
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })

  // Auto-detect active H2 in Table of Contents
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id)
        })
      },
      { rootMargin: '-10% 0px -65% 0px' }
    )

    const headings = document.querySelectorAll('h2[id]')
    headings.forEach((h) => observer.observe(h))

    return () => observer.disconnect()
  }, [article])

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${article.title} - ${window.location.href}`)
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank')
  }

  const tocHeadings = article.contentBlocks.filter((b) => b.type === 'h2')
  const relatedArticles = resources.filter((r) => r.slug !== article.slug).slice(0, 2)

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A] font-sans min-h-screen relative selection:bg-blue-600/15 selection:text-blue-600 pt-20">
      
      {/* Top Reading Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50 shadow-xs" 
        style={{ scaleX }} 
      />

      <SEO
        title={article.title}
        description={article.seoDescription}
        path={`/resources/${article.slug}`}
        image={article.thumbnail}
        type="article"
        published={article.date}
        modified={article.date}
        author="ProstoLabs Editorial"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: article.title, path: `/resources/${article.slug}` }
        ]}
      />

      {/* ARTICLE HEADER CONTAINER */}
      <header className="pt-8 pb-12 px-5 sm:px-8 lg:px-12 border-b border-slate-200/80 bg-white">
        <div className="max-w-4xl mx-auto space-y-5">
          
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link 
              to="/resources" 
              state={{ fromArticle: true }}
              className="hover:text-blue-600 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Resources</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="text-blue-600 font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 border border-blue-100/80 text-[11px] font-mono uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-950 leading-[1.12] tracking-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <User size={14} className="text-blue-600" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-blue-600" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-blue-600" />
              <span>{article.readingTime}</span>
            </div>
          </div>

        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT / MAIN COLUMN */}
        <main className="lg:col-span-8 space-y-8">
          
          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xs aspect-[16/9] bg-slate-100">
            <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
          </div>

          {/* Mobile TOC Accordion */}
          {tocHeadings.length > 0 && (
            <div className="lg:hidden border border-slate-200 rounded-2xl overflow-hidden bg-white p-4 shadow-2xs">
              <button 
                type="button"
                onClick={() => setIsTocOpen(!isTocOpen)} 
                className="w-full flex items-center justify-between font-bold text-sm text-slate-900 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={15} className="text-blue-600" />
                  <span>Table of Contents</span>
                </span>
                {isTocOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
              {isTocOpen && (
                <div className="pt-3 space-y-1.5 border-t border-slate-100 mt-3 text-xs font-semibold text-slate-600">
                  {tocHeadings.map((h, i) => (
                    <a 
                      key={i}
                      href={`#${h.id}`} 
                      onClick={() => setIsTocOpen(false)} 
                      className="block hover:text-blue-600 py-1"
                    >
                      {h.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* EDITORIAL CONTENT RENDERER */}
          <div className="space-y-6 text-slate-900">
            {article.contentBlocks.map((block, idx) => {
              switch (block.type) {
                
                case 'paragraph':
                  return (
                    <p key={idx} className="text-base sm:text-lg text-slate-700 leading-[1.8] font-normal">
                      {block.text}
                    </p>
                  )

                case 'h2':
                  return (
                    <div key={idx} className="pt-6 pb-2 border-t border-slate-200/80 mt-10">
                      <h2 
                        id={block.id} 
                        className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight"
                      >
                        {block.title}
                      </h2>
                    </div>
                  )

                case 'stat':
                  return (
                    <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 my-6 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center gap-5">
                      <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                        <TrendingUp size={22} />
                      </div>
                      <div>
                        <span className="text-3xl sm:text-4xl font-extrabold text-blue-600 block tracking-tight">
                          {block.value}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold text-slate-700 leading-snug block mt-0.5">
                          {block.label}
                        </span>
                      </div>
                    </div>
                  )

                case 'tip':
                  return (
                    <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-blue-50/50 border border-blue-100 my-6 space-y-2 relative overflow-hidden">
                      <div className="w-1 absolute left-0 top-0 bottom-0 bg-blue-600" />
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600">
                        <Lightbulb size={15} />
                        <span>{block.title || 'Pro Tip'}</span>
                      </div>
                      <p className="text-sm sm:text-base font-medium text-slate-800 leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  )

                case 'warning':
                  return (
                    <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200 my-6 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800">
                        <AlertTriangle size={16} />
                        <span>{block.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-amber-900 leading-relaxed whitespace-pre-line">
                        {block.text}
                      </p>
                    </div>
                  )

                case 'checklist':
                  return (
                    <div key={idx} className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs my-6 space-y-4">
                      {block.title && (
                        <h4 className="font-bold text-base sm:text-lg text-slate-950 flex items-center gap-2">
                          <CheckCircle2 size={18} className="text-blue-600" />
                          <span>{block.title}</span>
                        </h4>
                      )}
                      <div className="space-y-2.5">
                        {block.items?.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                            <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                              ✓
                            </span>
                            <span className="text-xs sm:text-sm font-medium text-slate-700 leading-normal">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )

                case 'table':
                  return (
                    <div key={idx} className="my-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-2xs">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                            {block.tableData?.headers.map((h, i) => (
                              <th key={i} className="p-3.5 sm:p-4">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 font-normal text-slate-700">
                          {block.tableData?.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-slate-50/50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className={`p-3.5 sm:p-4 ${cIdx === 0 ? 'font-semibold text-slate-950' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )

                case 'case_study':
                  return (
                    <div key={idx} className="my-6 p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3.5">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Case Study</span>
                          <h4 className="text-lg sm:text-xl font-bold text-slate-950">{block.caseStudyData?.name}</h4>
                        </div>
                        <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                          <Building2 size={12} /> {block.caseStudyData?.location}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 space-y-2">
                          <span className="text-xs font-bold text-rose-700 uppercase">BEFORE Website</span>
                          {block.caseStudyData?.before.map((b, i) => (
                            <div key={i} className="text-xs font-medium text-slate-700 flex justify-between">
                              <span>{b.label}:</span>
                              <span className="font-semibold text-slate-900">{b.value}</span>
                            </div>
                          ))}
                        </div>

                        <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                          <span className="text-xs font-bold text-emerald-700 uppercase">AFTER Website</span>
                          {block.caseStudyData?.after.map((a, i) => (
                            <div key={i} className="text-xs font-medium text-slate-700 flex justify-between">
                              <span>{a.label}:</span>
                              <span className="font-semibold text-emerald-800">{a.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                        {block.caseStudyData?.summary}
                      </p>
                    </div>
                  )

                case 'faq':
                  return (
                    <div key={idx} className="my-6 space-y-2.5">
                      {block.faqItems?.map((faq, fIdx) => (
                        <div key={fIdx} className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
                          <button 
                            type="button"
                            onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                            className="w-full p-4 text-left font-bold text-sm text-slate-900 flex justify-between items-center cursor-pointer hover:text-blue-600 transition-colors"
                          >
                            <span>{faq.question}</span>
                            {openFaq === fIdx ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                          </button>
                          {openFaq === fIdx && (
                            <div className="p-4 pt-0 text-xs sm:text-sm font-normal text-slate-600 border-t border-slate-50 leading-relaxed">
                              {faq.answer}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )

                case 'quote':
                  return (
                    <div key={idx} className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white my-6 space-y-3 shadow-sm relative overflow-hidden">
                      <Quote className="w-8 h-8 text-blue-500/20 absolute right-4 top-4" />
                      <p className="text-base sm:text-lg font-semibold leading-relaxed relative z-10 italic">
                        &quot;{block.text}&quot;
                      </p>
                      {block.author && (
                        <span className="text-xs font-semibold text-blue-400 block tracking-wider uppercase">
                          — {block.author}
                        </span>
                      )}
                    </div>
                  )

                case 'image':
                  return (
                    <div key={idx} className="my-6 space-y-2">
                      <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-2xs aspect-[16/9] bg-slate-100">
                        <img src={block.src} alt={block.alt || 'Article visual'} className="w-full h-full object-cover" />
                      </div>
                      {block.alt && (
                        <span className="text-xs font-normal text-slate-400 block text-center">
                          {block.alt}
                        </span>
                      )}
                    </div>
                  )

                default:
                  return null
              }
            })}
          </div>

          {/* Social Share Bar */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Share this resource:
            </span>
            <div className="flex items-center gap-2.5">
              <button 
                type="button"
                onClick={shareOnWhatsApp}
                className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer"
              >
                <MessageSquare size={14} />
                <span>WhatsApp</span>
              </button>
              <button 
                type="button"
                onClick={handleCopyLink}
                className="px-4 py-2 rounded-xl bg-white text-slate-700 border border-slate-200 text-xs font-semibold flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
              >
                {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>
            </div>
          </div>

          {/* Recommended Next Reads */}
          <div className="pt-8 border-t border-slate-200 space-y-5">
            <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">Recommended Next Reads</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedArticles.map((rel) => (
                <Link 
                  key={rel.slug} 
                  to={`/resources/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-slate-300 hover:shadow-xs transition-all group cursor-pointer block space-y-2 shadow-2xs"
                >
                  <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider block font-mono">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-sm sm:text-base text-slate-950 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 pt-1">
                    <span>Read Article</span>
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

        </main>

        {/* RIGHT COLUMN: Desktop Sticky TOC Sidebar */}
        <aside className="hidden lg:block lg:col-span-4">
          <div className="sticky top-28 space-y-6">
            
            {/* TOC Box */}
            {tocHeadings.length > 0 && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-3.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-950">
                  <Sparkles size={13} className="text-blue-600" />
                  <span>Table of Contents</span>
                </div>
                <nav className="space-y-1 text-xs font-medium text-slate-600">
                  {tocHeadings.map((h, i) => (
                    <a 
                      key={i}
                      href={`#${h.id}`} 
                      className={`block p-2 rounded-lg transition-colors ${
                        activeId === h.id 
                          ? 'bg-blue-50 text-blue-600 font-semibold border-l-2 border-blue-600' 
                          : 'hover:text-slate-950 hover:bg-slate-50'
                      }`}
                    >
                      {h.title}
                    </a>
                  ))}
                </nav>
              </div>
            )}

            {/* Sidebar CTA Card */}
            <div className="p-6 rounded-2xl bg-slate-950 text-white text-center space-y-3.5 shadow-sm">
              <h4 className="text-lg font-bold leading-snug tracking-tight">
                Ready to build your business website?
              </h4>
              <p className="text-xs text-slate-400 font-normal leading-relaxed">
                Partner with ProstoLabs to launch a fast, managed website with hosting, SSL, and updates included.
              </p>
              <Link 
                to="/contact"
                className="block w-full py-2.5 px-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-2xs cursor-pointer"
              >
                Let&apos;s Build Your Website
              </Link>
            </div>

          </div>
        </aside>

      </div>
    </div>
  )
}