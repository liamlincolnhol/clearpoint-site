import Link from 'next/link'

interface ImprovedMobileNavProps {
  currentPage?: string
}

export default function ImprovedMobileNav({ currentPage }: ImprovedMobileNavProps) {
  return (
    <div className="improved-mobile-nav">
      {/* Method 1: CSS-only dropdown using details/summary (most reliable) */}
      <details className="mobile-nav-details">
        <summary className="mobile-nav-summary" aria-label="Navigation menu">
          <span className="hamburger-lines">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </summary>
        
        <div className="mobile-nav-content">
          <nav className="mobile-nav-menu">
            <Link 
              href="/" 
              className={`mobile-nav-item ${currentPage === 'home' ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`mobile-nav-item ${currentPage === 'services' ? 'active' : ''}`}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className={`mobile-nav-item ${currentPage === 'about' ? 'active' : ''}`}
            >
              About us
            </Link>
            <Link 
              href="/contact" 
              className={`mobile-nav-item ${currentPage === 'contact' ? 'active' : ''}`}
            >
              Contact us
            </Link>
          </nav>
          
          {/* Debug content to verify rendering */}
          <div style={{ 
            background: 'red', 
            color: 'white', 
            padding: '10px', 
            margin: '5px',
            fontSize: '14px',
            fontWeight: 'bold' 
          }}>
            DEBUG: Mobile nav is rendering
          </div>
        </div>
      </details>
    </div>
  )
}