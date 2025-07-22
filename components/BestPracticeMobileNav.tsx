import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

interface MobileNavProps {
  currentPage?: string
}

export default function BestPracticeMobileNav({ currentPage }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  
  const navItems = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/services', label: 'Services', id: 'services' },
    { href: '/about', label: 'About us', id: 'about' },
    { href: '/contact', label: 'Contact us', id: 'contact' }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isMenuOpen])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="md:hidden relative" ref={menuRef}>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
        style={{ minWidth: '44px', minHeight: '44px' }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'my-1'
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-gray-800 transform transition duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Dropdown */}
      <nav
        className={`absolute top-full right-0 min-w-[200px] bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="py-2">
          {navItems.map((item) => {
            const isActive = currentPage === item.id
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none ${
                  isActive
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
                style={{ minHeight: '44px' }}
              >
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-25"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </div>
  )
}