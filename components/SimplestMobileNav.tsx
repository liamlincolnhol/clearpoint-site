import { useState } from 'react'
import Link from 'next/link'

export default function SimplestMobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mobile-nav-container">
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="hamburger-btn"
        aria-label="Toggle menu"
      >
        {isOpen ? '✕' : '☰'}
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
      
      {/* Close on backdrop click */}
      {isOpen && (
        <div 
          className="backdrop" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}