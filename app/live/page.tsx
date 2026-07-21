const YOUTUBE_CHANNEL = 'https://www.youtube.com/@witrimcanada7254'

const FEATURED_ID = 'HxFlQSCc4gY'
const PREVIOUS_IDS = ['FccGWIXvrZQ', 'YI4xniq_wJA', 'GWFyokrptuM']

async function getVideoTitle(id: string): Promise<string> {
  try {
    const res = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`, { next: { revalidate: 86400 } })
    if (!res.ok) return 'Sunday Service'
    const data = await res.json()
    return data.title ?? 'Sunday Service'
  } catch {
    return 'Sunday Service'
  }
}

export default async function LivePage() {
  const [featuredTitle, ...previousTitles] = await Promise.all([
    getVideoTitle(FEATURED_ID),
    ...PREVIOUS_IDS.map(getVideoTitle),
  ])

  const previous = PREVIOUS_IDS.map((id, i) => ({ id, title: previousTitles[i] }))

  return (
    <>
      {/* Header */}
      <section className="py-24 px-6" style={{ background: '#4A0E0E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Watch</p>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Sermons</h1>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Join us online or catch up on past services and messages.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-5xl mx-auto space-y-14">

          {/* Featured */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1 rounded-full" style={{ background: '#C8912A', color: '#fff' }}>Latest</span>
              <h2 className="text-xl font-semibold" style={{ color: '#4A0E0E', fontFamily: 'Cormorant Garamond, serif' }}>{featuredTitle}</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border aspect-video" style={{ borderColor: '#E5DDD5' }}>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${FEATURED_ID}`}
                title={featuredTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Previous 3 */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: '#C8912A' }} />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Previous Messages</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {previous.map((v) => (
                <a
                  key={v.id}
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl overflow-hidden border shadow-sm transition-shadow hover:shadow-md"
                  style={{ borderColor: '#E5DDD5', background: '#fff' }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(74,14,14,0.35)' }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center transition-colors group-hover:bg-[#C8912A]" style={{ background: 'rgba(200,145,42,0.85)' }}>
                        <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3">
                    <p className="text-sm font-medium line-clamp-2" style={{ color: '#4A0E0E' }}>{v.title}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Channel link */}
          <p className="text-center text-sm" style={{ color: '#9A8070' }}>
            View all sermons at{' '}
            <a href={YOUTUBE_CHANNEL} target="_blank" rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-[#6B1A1A]" style={{ color: '#C8912A' }}>
              youtube.com/@witrimcanada7254
            </a>
          </p>

        </div>
      </section>
    </>
  )
}
