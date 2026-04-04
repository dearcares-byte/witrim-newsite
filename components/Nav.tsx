'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const aboutLinks = [
  { label: 'Our Story', href: '/about/our-story' },
  { label: 'Leadership', href: '/about/leadership' },
  { label: 'Staff', href: '/about/staff' },
  { label: 'Tenets of Faith', href: '/about/tenets-of-faith' },
]

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header className="sticky top-0 z-50" style={{ background: '#4A0E0E' }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/wittimlogo.jpg" alt="WITRIM" width={36} height={36} className="rounded-full object-cover ring-2 ring-[#C8912A]" />
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#C8912A' }}>WITRIM</p>
            <p className="text-[10px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.4)' }}>Canada</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: 'Home', href: '/' },
            { label: 'Sermons', href: '/live' },
            { label: 'Groups', href: '/connect' },
            { label: 'Contact', href: '/contact' },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              {l.label}
            </Link>
          ))}

          {/* About dropdown — click to open, closes on outside click */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAboutOpen(v => !v)}
              className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-white"
              style={{ color: 'rgba(255,255,255,0.75)' }}
            >
              About
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
            </button>

            {aboutOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 w-52 z-50">
                {/* Invisible bridge to prevent gap-triggered close */}
                <div className="absolute -top-3 left-0 right-0 h-3" />
                <Link href="/about" onClick={() => setAboutOpen(false)}
                  className="block px-4 py-2.5 text-sm font-semibold border-b border-gray-100 transition-colors hover:text-[#6B1A1A] hover:bg-[#F5F0EB]"
                  style={{ color: '#4A0E0E' }}
                >
                  About Us
                </Link>
                {aboutLinks.map(l => (
                  <Link key={l.href} href={l.href} onClick={() => setAboutOpen(false)}
                    className="block px-4 py-2.5 text-sm transition-colors hover:text-[#6B1A1A] hover:bg-[#F5F0EB]"
                    style={{ color: '#5A4A3A' }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="https://tithe.ly/give?c=6386412" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-90"
            style={{ background: '#C8912A', color: '#fff' }}
          >
            Give
          </a>
        </nav>

        {/* Mobile button */}
        <button className="md:hidden p-2 rounded-lg" style={{ color: 'rgba(255,255,255,0.8)' }}
          onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t px-6 py-4 flex flex-col gap-0.5" style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#4A0E0E' }}>
          {[
            { label: 'Home', href: '/' },
            { label: 'Sermons', href: '/live' },
            { label: 'Groups', href: '/connect' },
            { label: 'Contact', href: '/contact' },
          ].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
              className="py-3 text-sm font-medium border-b"
              style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.08)' }}
            >
              {l.label}
            </Link>
          ))}

          <button onClick={() => setMobileAboutOpen(v => !v)}
            className="flex items-center justify-between py-3 text-sm font-medium border-b"
            style={{ color: 'rgba(255,255,255,0.8)', borderColor: 'rgba(255,255,255,0.08)' }}
          >
            About
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileAboutOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileAboutOpen && (
            <div className="pl-4 flex flex-col">
              <Link href="/about" onClick={() => setMobileOpen(false)}
                className="py-2.5 text-sm border-b font-medium"
                style={{ color: 'rgba(255,255,255,0.7)', borderColor: 'rgba(255,255,255,0.06)' }}
              >
                About Us
              </Link>
              {aboutLinks.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm border-b"
                  style={{ color: 'rgba(255,255,255,0.6)', borderColor: 'rgba(255,255,255,0.06)' }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          )}

          <a href="https://tithe.ly/give?c=6386412" target="_blank" rel="noopener noreferrer"
            className="mt-3 py-3 rounded-lg text-sm font-semibold text-center"
            style={{ background: '#C8912A', color: '#fff' }}
          >
            Give
          </a>
        </div>
      )}
    </header>
  )
}
