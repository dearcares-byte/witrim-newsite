import { Users } from 'lucide-react'

const groups = [
  { name: 'Men Group', description: 'A group where we discover what it means to be a man in the kingdom of God. We love to spend quality time together in prayer, meditating, outdoors & indoors activity.', time: 'Zoom every Monday 7PM · In person every Saturday 9AM @Church', leaders: 'Pastor Johnstone Tita & Brother Donald A.', age: 'All' },
  { name: 'Youth Group', description: 'We are the youth who want to grow deeper with Jesus and walk into our calling. The focus is to grow spiritually, form connections, establish a safe place to fellowship, and demonstrate the love of God.', time: '@Church every last Friday at 7PM', leaders: 'Adam & Kimberly Boussedra', age: '13–29' },
  { name: 'Evangelism', description: 'Reaching out to share the love and truth of Jesus Christ with our community and beyond.', time: 'TBC', leaders: 'Pastor Johnstone Tita', age: 'All' },
  { name: 'Children Sunday School', description: 'A nurturing space for children to learn about Jesus and grow in faith.', time: 'Every Sunday service @Church', leaders: 'Sister Jose Moke', age: 'Children' },
  { name: 'Women Group', description: 'Women of all ages who encourage each other in our walk with Jesus. We share goals, encourage through Spirit-filled prayer, and equip through workshops and conferences.', time: 'One Saturday per month @Church', leaders: 'Pastor Faith Efon & Minister Marianne Tita', age: 'All' },
  { name: 'Intercession', description: 'A group committed to prayer — interceding for our church, our nation, and our children. We pray for protection, against prejudices, through grief, for salvations, and over personal needs.', time: 'Every Monday at 6PM @Church', leaders: 'Pastor Kalombo Harriette', age: 'All' },
  { name: 'Business Forum', description: 'A space for believers in the marketplace to connect, grow, and apply Kingdom principles to business.', time: 'TBC', leaders: 'Pastor Joner B', age: 'All' },
]

export default function ConnectPage() {
  return (
    <>
      <section className="py-24 px-6" style={{ background: '#4A0E0E' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8" style={{ background: '#C8912A' }} />
            <p className="text-xs font-semibold tracking-[0.3em] uppercase" style={{ color: '#C8912A' }}>Community</p>
          </div>
          <h1 className="text-6xl sm:text-7xl font-bold text-white mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>Connect Groups</h1>
          <p className="text-base max-w-2xl" style={{ color: 'rgba(255,255,255,0.55)' }}>
            No matter who you are or where you are located, we have a group that&apos;s right for you.
          </p>
        </div>
      </section>

      <section className="py-20 px-6" style={{ background: '#FDFCFA' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map(group => (
            <div key={group.name} className="rounded-2xl border flex flex-col overflow-hidden" style={{ borderColor: '#E5DDD5', background: '#fff' }}>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: '#F5F0EB' }}>
                    <Users className="w-4 h-4" style={{ color: '#6B1A1A' }} />
                  </div>
                  <h2 className="font-bold text-lg" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A0E0E', fontSize: '1.2rem' }}>{group.name}</h2>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#7A6A5A' }}>{group.description}</p>
                <div className="mt-auto pt-4 border-t flex flex-col gap-1.5" style={{ borderColor: '#F0E8DF' }}>
                  <p className="text-xs" style={{ color: '#9A8070' }}><span className="font-semibold" style={{ color: '#5A4A3A' }}>When:</span> {group.time}</p>
                  <p className="text-xs" style={{ color: '#9A8070' }}><span className="font-semibold" style={{ color: '#5A4A3A' }}>Leader:</span> {group.leaders}</p>
                  <p className="text-xs" style={{ color: '#9A8070' }}><span className="font-semibold" style={{ color: '#5A4A3A' }}>Age:</span> {group.age}</p>
                </div>
              </div>
              <a
                href={`mailto:witrimcanada2013@gmail.com?subject=Join Connect Group: ${group.name}`}
                className="block text-center py-3.5 px-5 text-sm font-semibold transition-opacity hover:opacity-90"
                style={{ background: '#6B1A1A', color: '#fff' }}
              >
                Join Group
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
