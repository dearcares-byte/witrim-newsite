import Image from 'next/image'

export default function LeadershipPage() {
  return (
    <>
      <section className="relative h-80 flex items-end overflow-hidden">
        <Image src="/leadership.jpg" alt="Leadership" fill className="object-cover object-top" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,14,14,0.95) 0%, rgba(74,14,14,0.4) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>About Us</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Leadership</h1>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-sm border" style={{ borderColor: '#E5DDD5' }}>
            <div className="relative h-[480px]">
              <Image src="/leadership.jpg" alt="Apostle Efon & Pastor Faith" fill className="object-cover object-top" />
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center" style={{ background: '#fff' }}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-3" style={{ color: '#C8912A' }}>Senior Pastors</p>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A0E0E' }}>
                Apostle Efon &amp; Pastor Faith
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A4A3A' }}>
                Apostle Efon Brillant Efa is the senior Pastor and founding Missionary of WITRIM. He operates with God's undeniable authority, power and grace in the ministries of spiritual deliverance and healing.
              </p>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#5A4A3A' }}>
                Called into ministry in 2001 and anointed with the gift of teaching, he has been blessing people with proven testimonies from all over the world. He is committed to church planting across Africa, Europe and Canada.
              </p>
              <p className="text-sm leading-relaxed mb-8" style={{ color: '#5A4A3A' }}>
                He and his wife Pastor Faith Efon co-pastor the flock of God with fervour, compassion and Agape love.
              </p>
              <div className="border-t pt-6" style={{ borderColor: '#E5DDD5' }}>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#C8912A' }}>Their Calling</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Bring people out of spiritual dark cells and prisons',
                    'Open the eyes of the spiritually blind to see the bright light of God\'s love',
                    'Help people reach spiritual maturity and fulfill their divine destiny',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-3 text-sm" style={{ color: '#5A4A3A' }}>
                      <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#C8912A' }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
