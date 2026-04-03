import Image from 'next/image'

const pillars = [
  { title: 'About Us', body: 'We are a Bible believing church established on the foundation of Jesus Christ.' },
  { title: 'Our Vision', body: 'To build you to become like Jesus Christ so as to fulfill your divine destiny. Ephesians 4:14-16' },
  { title: 'Our Family', body: 'We allow the love of Christ to help us live as one family in Christ. Respect each other\'s values, bear one another\'s burden and pray for one another.' },
  { title: 'Our Style of Worship', body: 'We freely express ourselves and emotions to God in our worship services through clapping of hands, singing and dancing, praying freely in an audible manner.' },
  { title: 'Our Mission', body: 'Bring you out of darkness into the light of God through evangelising, deliverance, preaching and teaching of the word of God. Acts 1:8, Isaiah 42:6-8' },
]

export default function OurStoryPage() {
  return (
    <>
      <section className="relative h-80 flex items-end overflow-hidden">
        <Image src="/ourstory.jpg" alt="Our Story" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,14,14,0.95) 0%, rgba(74,14,14,0.5) 60%, transparent 100%)' }} />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>About Us</p>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our Story</h1>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#5A4A3A' }}>
            WITRIM is a ministry given by the LORD JESUS CHRIST to establish the true Biblical standard of Love, Holiness and Prosperity by highly exalting only Jesus Christ in all things.
          </p>

          <blockquote className="border-l-4 pl-6 py-2 mb-10 text-xl italic leading-relaxed" style={{ borderColor: '#C8912A', fontFamily: 'Cormorant Garamond, serif', color: '#6B1A1A' }}>
            "Wherefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight and the sin which doth so easily beset us, and let us run with patience the race that is set before us. Looking unto Jesus, the author and finisher of our faith who for the Joy that was set before him endured the cross, despising the shame, and is sat down at the right hand of the throne of God."
            <footer className="text-sm not-italic mt-3" style={{ color: '#9A8070' }}>— Hebrews 12:1–2</footer>
          </blockquote>

          <p className="text-base leading-relaxed mb-6" style={{ color: '#5A4A3A' }}>
            WITRIM builds people to look only unto Jesus Christ and fight to be like him.
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#5A4A3A' }}>
            The Lord began speaking to his servant Apostle Efon Brillant (Founding Missionary) from 2004 that he bear witness of the Truth (Jesus Christ) unto Nations. This continued all through to 2010.
          </p>
          <p className="text-base leading-relaxed mb-6" style={{ color: '#5A4A3A' }}>
            In 2010 following a series of seven days fast led by the Holy Spirit from February to July 2010, the Lord gave many messages to his Servant.
          </p>

          <div className="rounded-2xl p-8 mb-12" style={{ background: '#4A0E0E' }}>
            <p className="text-lg italic leading-relaxed text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              "I have called thee and will lift thee up to go and bear witness of the truth to nations. I will pour my anointing upon you to bear witness of the truth, to bring out those who are in prison and in dark cell. I will lift you up in my anointing but you must walk in HUMILITY and never allow pride to enter you because of the things I will use you to do."
            </p>
          </div>

          <p className="text-base leading-relaxed mb-16" style={{ color: '#5A4A3A' }}>
            The Lord emphasized that WITRIM should be built in total HUMILITY and in fulfilling her mandate everyone must walk in HUMILITY.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map(p => (
              <div key={p.title} className="rounded-2xl p-6 border" style={{ borderColor: '#E5DDD5', background: '#FDFCFA' }}>
                <h3 className="font-bold text-base mb-2" style={{ color: '#6B1A1A' }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#7A6A5A' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
