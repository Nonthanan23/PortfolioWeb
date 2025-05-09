import { useEffect, useState } from 'react'

const sections = ['home', 'projects', 'about', 'contact']

export default function DotNav() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      let closestSection = 'home'
      let closestOffset = Infinity

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          const offset = Math.abs(rect.top)
          if (offset < closestOffset) {
            closestOffset = offset
            closestSection = id
          }
        }
      }

      setActiveSection(closestSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // init on load

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="hidden md:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-50">
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full transition ${
            activeSection === id
              ? 'bg-blue-500 scale-125'
              : 'bg-slate-500 hover:bg-blue-400'
          }`}
        >
          <span className="sr-only">{id}</span>
        </a>
      ))}
    </div>
  )
}