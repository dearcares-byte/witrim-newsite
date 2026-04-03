const YOUTUBE_CHANNEL = 'https://www.youtube.com/@witrimcanada7254'
// To embed a specific video, replace null with the video ID string e.g. 'dQw4w9WgXcQ'
const FEATURED_VIDEO_ID: string | null = 'n9IAHzzmbkM'

export default function LivePage() {
  return (
    <>
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
        <div className="max-w-4xl mx-auto">
          {FEATURED_VIDEO_ID ? (
            <div className="rounded-2xl overflow-hidden shadow-sm border aspect-video" style={{ borderColor: '#E5DDD5' }}>
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}`}
                title="WITRIM Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center rounded-2xl border aspect-video transition-colors hover:border-[#C8912A] group"
              style={{ borderColor: '#E5DDD5', background: '#fff' }}
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-5 transition-colors group-hover:bg-red-600" style={{ background: '#e0e0e0' }}>
                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </div>
              <p className="text-base font-semibold mb-1" style={{ color: '#4A0E0E' }}>Watch on YouTube</p>
              <p className="text-sm" style={{ color: '#9A8070' }}>@witrimcanada7254</p>
            </a>
          )}

          <p className="text-center text-sm mt-6" style={{ color: '#9A8070' }}>
            Visit our full channel at{' '}
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
