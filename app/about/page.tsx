import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const cards = [
  { title: 'Our Story', href: '/about/our-story', image: '/ourstory.jpg', description: 'How WITRIM was founded and the vision behind the mission.' },
  { title: 'Leadership', href: '/about/leadership', image: '/leadership.jpg', description: 'Meet Apostle Efon and Pastor Faith who lead the church.' },
  { title: 'Staff', href: '/about/staff', image: '/apostle.jpg', description: 'Our dedicated team serving the congregation.' },
  { title: 'Tenets of Faith', href: '/about/tenets-of-faith', image: '/tenetoffaith.jpg', description: 'The foundational beliefs that guide our church.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="py-24 px-6 text-white" style={{ background: '#4A0E0E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Who We Are</p>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold" style={{ fontFamily: 'Cormorant Garamond, serif' }}>About Us</h1>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            We are a Bible-believing church established on the foundation of Jesus Christ.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map(card => (
            <Link key={card.href} href={card.href} className="group relative overflow-hidden rounded-2xl h-72 block">
              <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 transition-opacity duration-300" style={{ background: 'linear-gradient(to top, rgba(74,14,14,0.9) 0%, rgba(74,14,14,0.3) 60%, transparent 100%)' }} />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{card.title}</h2>
                <p className="text-sm mb-3" style={{ color: 'rgba(255,255,255,0.65)' }}>{card.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase" style={{ color: '#C8912A' }}>
                  Read more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
