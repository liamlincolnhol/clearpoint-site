import { useState, useEffect } from 'react'
import Link from 'next/link'

interface FullScreenMobileNavProps {
  currentPage?: string
}

export default function FullScreenMobileNav({ currentPage }: FullScreenMobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
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

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="p-2 -mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md relative z-50"
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
        style={{ minWidth: '44px', minHeight: '44px' }}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block h-0.5 w-6 transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45 translate-y-1.5 bg-white' : 'bg-gray-800'
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform transition duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0 bg-white' : 'my-1 bg-gray-800'
            }`}
          />
          <span
            className={`block h-0.5 w-6 transform transition duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45 -translate-y-1.5 bg-white' : 'bg-gray-800'
            }`}
          />
        </div>
      </button>

      {/* Full Screen Overlay Menu */}
      <nav
        className={`fixed inset-0 z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#4A5D7A' }}
      >
        <div className="flex flex-col justify-center items-center h-full">
          {navItems.map((item, index) => {
            const isActive = currentPage === item.id
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`block text-2xl font-medium mb-8 px-8 py-4 rounded-lg transition-all duration-300 transform ${
                  isActive
                    ? 'text-white bg-white bg-opacity-20'
                    : 'text-white hover:text-blue-200 hover:bg-white hover:bg-opacity-10'
                }`}
                style={{ 
                  minHeight: '60px',
                  animationDelay: `${index * 100}ms`,
                  animation: isMenuOpen ? `slideInFromRight 0.5s ease-out ${index * 100}ms both` : 'none'
                }}
              >
                {item.label}
              </Link>
            )
          })}
          
          {/* Call to Action */}
          <button 
            className="mt-8 px-8 py-4 bg-white text-gray-800 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            style={{ minHeight: '60px' }}
          >
            Call Now
          </button>
        </div>
      </nav>

      {/* Add keyframes for animation */}
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}