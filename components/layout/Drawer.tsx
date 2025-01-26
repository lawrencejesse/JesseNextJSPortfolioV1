import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const menuItems = [
  { name: 'Home', path: '/' },
  { name: 'Portfolio Videos', path: '/portfolio-videos' },
  { name: 'Coding Projects', path: '/coding-projects' },
  { name: 'GIS Services', path: '/gis' },
  { name: 'AI Coding Poster - NPRRW', path: '/research-poster' },
  { name: 'Blog', path: '/blog' },
]

export default function Drawer() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 hover:bg-gray-800 rounded"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/80" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 left-0 w-64 bg-gray-900/95 backdrop-blur-md border-r border-gray-800 p-6">
            <div className="flex flex-col space-y-6 bg-gray-900 rounded-lg p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-lg ${
                    router.pathname === item.path ? 'text-primary' : 'text-gray-300 hover:text-primary'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
} 