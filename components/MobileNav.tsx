import { useState } from 'react'
import Link from 'next/link'

interface MobileNavProps {
  currentPage?: string
}

export default function MobileNav({ currentPage }: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <button 
        className="mobile-nav-toggle"
        onClick={toggleMenu}
        aria-label="Toggle mobile menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-menu-links">
          <Link 
            href="/" 
            onClick={closeMenu}
            style={{ 
              fontWeight: currentPage === 'home' ? '600' : '500',
              color: currentPage === 'home' ? '#4A5D7A' : '#2C3E50'
            }}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            onClick={closeMenu}
            style={{ 
              fontWeight: currentPage === 'services' ? '600' : '500',
              color: currentPage === 'services' ? '#4A5D7A' : '#2C3E50'
            }}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            onClick={closeMenu}
            style={{ 
              fontWeight: currentPage === 'about' ? '600' : '500',
              color: currentPage === 'about' ? '#4A5D7A' : '#2C3E50'
            }}
          >
            About us
          </Link>
          <Link 
            href="/contact" 
            onClick={closeMenu}
            style={{ 
              fontWeight: currentPage === 'contact' ? '600' : '500',
              color: currentPage === 'contact' ? '#4A5D7A' : '#2C3E50'
            }}
          >
            Contact us
          </Link>
        </nav>
      </div>
      
      {/* Backdrop to close menu when clicking outside */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 35
          }}
          onClick={closeMenu}
        />
      )}
    </>
  )
}