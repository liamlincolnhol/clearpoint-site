import { useState } from 'react'

interface SimpleMobileNavProps {
  currentPage?: string
}

export default function SimpleMobileNav({ currentPage }: SimpleMobileNavProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Hamburger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '3px',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '44px'
        }}
        aria-label="Menu"
      >
        <span style={{ width: '20px', height: '2px', background: '#2C3E50' }}></span>
        <span style={{ width: '20px', height: '2px', background: '#2C3E50' }}></span>
        <span style={{ width: '20px', height: '2px', background: '#2C3E50' }}></span>
      </button>

      {/* Dropdown Menu - Only exists when open */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: '0',
          background: 'white',
          border: '1px solid #ccc',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          minWidth: '200px',
          zIndex: 1000,
          marginTop: '8px'
        }}>
          <a 
            href="/" 
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              padding: '12px 16px',
              textDecoration: 'none',
              color: '#2C3E50',
              borderBottom: '1px solid #eee'
            }}
          >
            Home
          </a>
          <a 
            href="/services" 
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              padding: '12px 16px',
              textDecoration: 'none',
              color: '#2C3E50',
              borderBottom: '1px solid #eee'
            }}
          >
            Services
          </a>
          <a 
            href="/about" 
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              padding: '12px 16px',
              textDecoration: 'none',
              color: '#2C3E50',
              borderBottom: '1px solid #eee'
            }}
          >
            About us
          </a>
          <a 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            style={{
              display: 'block',
              padding: '12px 16px',
              textDecoration: 'none',
              color: '#2C3E50'
            }}
          >
            Contact us
          </a>
        </div>
      )}
    </div>
  )
}