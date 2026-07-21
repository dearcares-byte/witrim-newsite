import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <section className="py-24 px-6" style={{ background: '#4A0E0E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Get In Touch</p>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contact Us</h1>
          <p className="mt-4 text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            We&apos;d love to hear from you. Reach out by phone or email and we&apos;ll get back to you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          {[
            { icon: <MapPin className="w-4 h-4" />, label: 'Address', value: '5815 Gouin W., Montreal, QC H4J 1E3' },
            { icon: <Phone className="w-4 h-4" />, label: 'Phone (Local)', value: '514-613-0656', href: 'tel:5146130656' },
            { icon: <Phone className="w-4 h-4" />, label: 'Phone (Long distance)', value: '1-833-230-2966', href: 'tel:18332302966' },
            { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'witrimcanada2013@gmail.com', href: 'mailto:witrimcanada2013@gmail.com' },
          ].map(item => (
            <div key={item.label} className="flex items-start gap-5 p-6 rounded-xl border bg-white shadow-sm" style={{ borderColor: '#E5DDD5' }}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#6B1A1A', color: '#C8912A' }}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#C8912A' }}>{item.label}</p>
                {item.href
                  ? <a href={item.href} className="text-sm transition-colors hover:text-[#6B1A1A]" style={{ color: '#5A4A3A' }}>{item.value}</a>
                  : <p className="text-sm" style={{ color: '#5A4A3A' }}>{item.value}</p>
                }
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
