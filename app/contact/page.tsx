'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const mailto = `mailto:witrimcanada2013@gmail.com?subject=${encodeURIComponent(form.subject || 'Website Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <>
      <section className="py-24 px-6" style={{ background: '#4A0E0E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Get In Touch</p>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Contact Us</h1>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Info */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A0E0E' }}>
                We&apos;d love to hear from you.
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: '#7A6A5A' }}>
                Whether you have a question, want to join a group, or just want to say hello — reach out and we&apos;ll get back to you.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { icon: <MapPin className="w-4 h-4" />, label: 'Address', value: '5815 Gouin W., Montreal, QC H4J 1E3' },
                { icon: <Phone className="w-4 h-4" />, label: 'Phone', value: '514-336-1261', href: 'tel:5143361261' },
                { icon: <Mail className="w-4 h-4" />, label: 'Email', value: 'witrimcanada2013@gmail.com', href: 'mailto:witrimcanada2013@gmail.com' },
              ].map(item => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: '#6B1A1A', color: '#C8912A' }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#C8912A' }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="text-sm transition-colors hover:text-[#6B1A1A]" style={{ color: '#5A4A3A' }}>{item.value}</a>
                      : <p className="text-sm" style={{ color: '#5A4A3A' }}>{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3 rounded-2xl p-8 border" style={{ borderColor: '#E5DDD5', background: '#fff' }}>
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: '#F5F0EB' }}>
                  <Mail className="w-7 h-7" style={{ color: '#C8912A' }} />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A0E0E' }}>Message sent!</h3>
                <p className="text-sm" style={{ color: '#7A6A5A' }}>Thank you for reaching out. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9A8070' }}>Name *</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                      className="px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                      style={{ borderColor: '#E5DDD5', color: '#1C1008' }}
                      onFocus={e => (e.target.style.borderColor = '#6B1A1A')}
                      onBlur={e => (e.target.style.borderColor = '#E5DDD5')}
                      placeholder="Your name" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9A8070' }}>Phone</label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                      className="px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                      style={{ borderColor: '#E5DDD5', color: '#1C1008' }}
                      onFocus={e => (e.target.style.borderColor = '#6B1A1A')}
                      onBlur={e => (e.target.style.borderColor = '#E5DDD5')}
                      placeholder="Your phone" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9A8070' }}>Email *</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                    className="px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                    style={{ borderColor: '#E5DDD5', color: '#1C1008' }}
                    onFocus={e => (e.target.style.borderColor = '#6B1A1A')}
                    onBlur={e => (e.target.style.borderColor = '#E5DDD5')}
                    placeholder="your@email.com" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9A8070' }}>Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                    className="px-4 py-3 rounded-lg border text-sm outline-none transition-colors"
                    style={{ borderColor: '#E5DDD5', color: '#1C1008' }}
                    onFocus={e => (e.target.style.borderColor = '#6B1A1A')}
                    onBlur={e => (e.target.style.borderColor = '#E5DDD5')}
                    placeholder="How can we help?" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide" style={{ color: '#9A8070' }}>Message *</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                    className="px-4 py-3 rounded-lg border text-sm outline-none transition-colors resize-none"
                    style={{ borderColor: '#E5DDD5', color: '#1C1008' }}
                    onFocus={e => (e.target.style.borderColor = '#6B1A1A')}
                    onBlur={e => (e.target.style.borderColor = '#E5DDD5')}
                    placeholder="Your message..." />
                </div>
                <button type="submit"
                  className="py-3.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: '#6B1A1A' }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
