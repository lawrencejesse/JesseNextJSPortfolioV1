import Link from 'next/link'
import Drawer from './Drawer'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-800 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            Jesse Lawrence
          </Link>
          <Drawer />
        </div>
      </div>
    </nav>
  )
} 