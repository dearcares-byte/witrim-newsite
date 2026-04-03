import Image from 'next/image'

const team = [
  { name: 'Apostle Efon Brillant', role: 'The Visionary / Senior Pastor', image: '/apostle.jpg', bio: 'He is an ordained apostle of the Church of Jesus Christ who was called into ministry in 2001 and anointed with the gift of teaching the word of God. He has been blessing people ever since, with proven testimonies from all over the world.' },
  { name: 'Pastor Johnstone Tita', role: 'Assistant Pastor', image: '/johnstone.jpg', bio: '' },
  { name: 'Prophetess Marcia Curtis', role: 'Church Prophet', image: '/marcia.jpg', bio: '' },
  { name: 'Deaconess Nicole Gueliambe', role: 'Deaconess', image: '/nicole.jpg', bio: '' },
  { name: 'Prophetess Melissa Paquet', role: 'Church Administrator', image: '/melissa.jpg', bio: '' },
  { name: 'Minister Mary McDonough', role: 'Secretary', image: '/mary.jpg', bio: '' },
]

export default function StaffPage() {
  return (
    <>
      <section className="py-24 px-6" style={{ background: '#4A0E0E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>About Us</p>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-white" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Our Team</h1>
          <p className="mt-4 text-base max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>Dedicated servants of God committed to building this community.</p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-5xl mx-auto">

          {/* Visionary — featured card */}
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden mb-10 shadow-sm border" style={{ borderColor: '#E5DDD5' }}>
            <div className="relative" style={{ minHeight: '400px' }}>
              <Image
                src={team[0].image}
                alt={team[0].name}
                fill
                className="object-cover"
                style={{ objectPosition: 'center top', filter: 'brightness(1.25)' }}
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: '#fff' }}>
              <p className="text-xs font-semibold tracking-[0.3em] uppercase mb-2" style={{ color: '#C8912A' }}>{team[0].role}</p>
              <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A0E0E' }}>{team[0].name}</h2>
              <p className="text-sm leading-relaxed" style={{ color: '#5A4A3A' }}>{team[0].bio}</p>
            </div>
          </div>

          {/* Team grid — 2 columns always for even alignment */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {team.slice(1).map(member => (
              <div key={member.name} className="rounded-2xl overflow-hidden border shadow-sm flex flex-col" style={{ borderColor: '#E5DDD5' }}>
                <div className="relative w-full" style={{ paddingBottom: '120%' }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: 'center top' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(74,14,14,0.85) 0%, transparent 55%)' }} />
                </div>
                <div className="p-4" style={{ background: '#fff' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: '#C8912A' }}>{member.role}</p>
                  <h3 className="font-bold text-sm" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A0E0E', fontSize: '1rem' }}>{member.name}</h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
