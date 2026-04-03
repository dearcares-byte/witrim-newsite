import Image from 'next/image'

const tenets = [
  'We believe the Bible is the mind of Jesus Christ. It is divinely inspired, and the only infallible and authoritative Word of God, whose direct authority is final in all matters of faith and worship.',
  'We believe in the reality of Heaven (as the final resting place for believers) and hell (as a place for punishment and torment for unbelievers).',
  'We believe in the Baptism of the Holy Spirit with the evidences of speaking in tongues and selfless demonstration of love and boldness (Matt. 3:11, Acts 21:1-47, Acts 4:23-37); the gifts and the fruits of the Spirit (1 Cor. 12:7-11, Gal 5:22-23); and the 5-fold ministry gifts of the Lord Jesus Christ (Eph. 4:10-12).',
  'We believe there is only one God, manifested to mankind in three different manifestation or personalities; the Father, the Son and the Holy Spirit. (Ephesians 4:4-6, Deuteronomy 6:4, 1 Timothy 3:16)',
  'We believe in the reality of Satan and his present control over unregenerate man.',
  'The obligatory nature of tithes and offerings.',
  'We believe in water baptism by Immersion in the name of Jesus Christ. It must be preceded by repentance and faith in Jesus Christ. (Acts 2:37-38, Mark 16:15-16)',
  'We believe in the present supernatural ministry of the Holy Spirit as living and ministering within and amongst believers of Jesus Christ.',
  'Our Christian Faith is based on the deity of our Lord Jesus Christ — His sinless life, His miracles, His blood shed upon the cross of Calvary through His vicarious and atoning death, His bodily resurrection, His bodily ascension to the right hand of the Father in heaven, His personal return in power and glory as the King of Kings and the Lord of Lords.',
]

export default function TenetsPage() {
  return (
    <>
      <section className="relative h-80 flex items-end overflow-hidden">
        <Image src="/tenetoffaith.jpg" alt="Tenets of Faith" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,14,14,0.95) 0%, rgba(74,14,14,0.4) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>About Us</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Tenets of Faith</h1>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-base leading-relaxed mb-14 text-center" style={{ color: '#7A6A5A' }}>
            The following are the foundational beliefs upon which WITRIM is established and which guide our faith and practice.
          </p>
          <ol className="flex flex-col gap-5">
            {tenets.map((tenet, i) => (
              <li key={i} className="flex gap-6 rounded-2xl p-6 border" style={{ borderColor: '#E5DDD5', background: '#fff' }}>
                <span className="text-3xl font-bold shrink-0 leading-none" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C8912A' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-sm sm:text-base leading-relaxed pt-1" style={{ color: '#5A4A3A' }}>{tenet}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
