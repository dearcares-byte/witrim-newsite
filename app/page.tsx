import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react'

const services = [
  { title: 'Bible Study', day: 'Every Wednesday', time: '5:30 – 7:30 PM' },
  { title: 'Deliverance Service', day: 'First Saturday monthly', time: '12:00 PM' },
  { title: 'French Sunday Service', day: 'Every Sunday', time: '9:00 AM' },
  { title: 'English Sunday Service', day: 'Every Sunday', time: '11:30 AM' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[95dvh] flex items-end overflow-hidden">
        <Image src="/apostlenpastor.jpg" alt="WITRIM congregation" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(74,14,14,0.92) 0%, rgba(28,10,10,0.6) 60%, rgba(28,10,10,0.3) 100%)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12" style={{ background: '#C8912A' }} />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Montreal, Canada</p>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Witness of the Truth<br />
              <em className="not-italic" style={{ color: '#C8912A' }}>International Mission</em>
            </h1>
            <p className="text-base sm:text-lg mb-10 leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Building you to become like Jesus and fulfill your destiny.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/connect"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-opacity hover:opacity-90"
                style={{ background: '#C8912A', color: '#fff' }}
              >
                Join a Connect Group <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about/our-story"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm tracking-wide border transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scrolling service ticker */}
        <div className="absolute bottom-0 left-0 right-0 flex items-stretch" style={{ background: 'rgba(200,145,42,0.95)' }}>
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-2 md:grid-cols-4 divide-x divide-white/20">
            {services.map(s => (
              <div key={s.title} className="px-4 py-3 text-center">
                <p className="text-xs font-bold tracking-wider uppercase text-white/80">{s.title}</p>
                <p className="text-xs text-white/70 mt-0.5">{s.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ──────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8" style={{ background: '#C8912A' }} />
              <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Who We Are</p>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold leading-tight mb-8" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A0E0E' }}>
              Our Story
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: '#5A4A3A' }}>
              WITRIM is a mission given by the LORD JESUS CHRIST to establish the true Biblical standard of Love, Holiness and Prosperity by highly exalting only Jesus Christ in all things.
            </p>
            <blockquote className="border-l-4 pl-6 py-2 mb-8 text-lg italic leading-relaxed" style={{ borderColor: '#C8912A', fontFamily: 'Cormorant Garamond, serif', color: '#6B1A1A' }}>
              "Looking unto Jesus, the author and finisher of our faith, who for the joy that was set before him endured the cross."
              <footer className="text-sm not-italic mt-2" style={{ color: '#9A8070' }}>— Hebrews 12:2</footer>
            </blockquote>
            <Link href="/about/our-story" className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:gap-3" style={{ color: '#6B1A1A' }}>
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden" style={{ background: '#ffffff' }}>
            <Image src="/ourstory.jpg" alt="Our congregation" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: '#4A0E0E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8" style={{ background: '#C8912A' }} />
                <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Join Us</p>
              </div>
              <h2 className="text-5xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Services</h2>
            </div>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Get directions →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.1)' }}>
            {services.map((s, i) => (
              <div key={s.title} className="p-8 flex flex-col gap-4" style={{ background: i % 2 === 0 ? '#4A0E0E' : '#5A1414' }}>
                <span className="text-4xl font-bold" style={{ fontFamily: 'Cormorant Garamond, serif', color: 'rgba(200,145,42,0.3)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{s.title}</h3>
                <div className="mt-auto">
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.day}</p>
                  <p className="text-base font-semibold mt-1" style={{ color: '#C8912A' }}>{s.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIVE ───────────────────────────────────────── */}
      <section className="relative py-32 px-6 overflow-hidden">
        <Image src="/tenetoffaith.jpg" alt="Give" fill className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'rgba(28,10,10,0.85)' }} />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Support the Mission</p>
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
            Make a Donation
          </h2>
          <p className="text-base mb-10 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Your generosity helps us reach people and build a community rooted in truth and love.
          </p>
          <a href="https://tithe.ly/give?c=6386412" target="_blank" rel="noopener noreferrer"
            className="inline-block px-12 py-4 rounded-lg font-semibold text-sm tracking-wide transition-opacity hover:opacity-90"
            style={{ background: '#C8912A', color: '#fff' }}
          >
            Support Us
          </a>
        </div>
      </section>

      {/* ── CONTACT STRIP ──────────────────────────────── */}
      <section className="py-14 px-6" style={{ background: '#F5F0EB' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { icon: <MapPin className="w-5 h-5" />, text: '5815 Gouin W, Montreal, QC H4J 1E3' },
            { icon: <Phone className="w-5 h-5" />, text: '514-336-1261' },
            { icon: <Mail className="w-5 h-5" />, text: 'witrimcanada2013@gmail.com', href: 'mailto:witrimcanada2013@gmail.com' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: '#6B1A1A', color: '#C8912A' }}>
                {item.icon}
              </div>
              {item.href
                ? <a href={item.href} className="text-sm transition-colors hover:text-[#6B1A1A]" style={{ color: '#7A6A5A' }}>{item.text}</a>
                : <p className="text-sm" style={{ color: '#7A6A5A' }}>{item.text}</p>
              }
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
