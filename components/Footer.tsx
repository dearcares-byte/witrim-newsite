import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#1C0A0A' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>

          {/* Brand */}
          <div className="md:col-span-4">
            <p className="text-2xl font-bold mb-1" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C8912A', fontSize: '1.75rem' }}>WITRIM</p>
            <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>Witness of the Truth International Mission</p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.5)' }}>
              Building you to become like Jesus and fulfill your destiny.
            </p>
            <div className="flex gap-5">
              {[{ label: 'Facebook', href: 'https://www.facebook.com/witnessofthetruth' }, { label: 'Instagram', href: 'https://www.instagram.com/witrimcanada/' }, { label: 'YouTube', href: 'https://www.youtube.com/@witrimcanada7254' }].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs font-medium tracking-widest uppercase transition-colors hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.4)' }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#C8912A' }}>Navigate</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Our Story', href: '/about/our-story' },
                { label: 'Leadership', href: '/about/leadership' },
                { label: 'Staff', href: '/about/staff' },
                { label: 'Tenets of Faith', href: '/about/tenets-of-faith' },
                { label: 'Sermons', href: '/live' },
                { label: 'Groups', href: '/connect' },
                { label: 'Contact', href: '/contact' },
              ].map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: '#C8912A' }}>Find Us</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#C8912A' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>5815 Gouin W, Montreal, QC H4J 1E3</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0" style={{ color: '#C8912A' }} />
                <span className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>514-336-1261</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0" style={{ color: '#C8912A' }} />
                <a href="mailto:witrimcanada2013@gmail.com" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  witrimcanada2013@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-8 text-center text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
          © {new Date().getFullYear()} WITRIM Canada. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
