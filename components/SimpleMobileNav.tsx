import Link from 'next/link'

interface SimpleMobileNavProps {
  currentPage?: string
}

export default function SimpleMobileNav({ currentPage }: SimpleMobileNavProps) {
  return (
    <div className="simple-mobile-nav">
      {/* CSS-only dropdown using details/summary */}
      <details className="mobile-nav-dropdown">
        <summary className="mobile-nav-toggle-simple" aria-label="Toggle mobile menu">
          <span className="hamburger-icon">☰</span>
        </summary>
        
        <nav className="mobile-dropdown-menu">
          <Link 
            href="/" 
            className={`mobile-nav-link ${currentPage === 'home' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`mobile-nav-link ${currentPage === 'services' ? 'active' : ''}`}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`mobile-nav-link ${currentPage === 'about' ? 'active' : ''}`}
          >
            About us
          </Link>
          <Link 
            href="/contact" 
            className={`mobile-nav-link ${currentPage === 'contact' ? 'active' : ''}`}
          >
            Contact us
          </Link>
        </nav>
      </details>
    </div>
  )
}