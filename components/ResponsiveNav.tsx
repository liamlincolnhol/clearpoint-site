import Link from 'next/link'

interface ResponsiveNavProps {
  currentPage?: string
}

export default function ResponsiveNav({ currentPage }: ResponsiveNavProps) {
  const isHome = currentPage === 'home'
  const isServices = currentPage === 'services' 
  const isAbout = currentPage === 'about'
  const isContact = currentPage === 'contact'

  return (
    <>
      {/* Desktop Navigation */}
      <nav style={{
        display: 'flex', 
        gap: '2rem', 
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          color: isHome ? '#4A5D7A' : '#2C3E50', 
          textDecoration: 'none', 
          fontSize: '0.875rem', 
          fontWeight: isHome ? '600' : '500',
          borderBottom: isHome ? '2px solid #4A5D7A' : 'none',
          paddingBottom: isHome ? '4px' : '0'
        }}>
          Home
        </Link>
        <Link href="/services" style={{
          color: isServices ? '#4A5D7A' : '#2C3E50', 
          textDecoration: 'none', 
          fontSize: '0.875rem', 
          fontWeight: isServices ? '600' : '500',
          borderBottom: isServices ? '2px solid #4A5D7A' : 'none',
          paddingBottom: isServices ? '4px' : '0'
        }}>
          Services
        </Link>
        <Link href="/about" style={{
          color: isAbout ? '#4A5D7A' : '#2C3E50', 
          textDecoration: 'none', 
          fontSize: '0.875rem', 
          fontWeight: isAbout ? '600' : '500',
          borderBottom: isAbout ? '2px solid #4A5D7A' : 'none',
          paddingBottom: isAbout ? '4px' : '0'
        }}>
          About us
        </Link>
        <Link href="/contact" style={{
          color: isContact ? '#4A5D7A' : '#2C3E50', 
          textDecoration: 'none', 
          fontSize: '0.875rem', 
          fontWeight: isContact ? '600' : '500',
          borderBottom: isContact ? '2px solid #4A5D7A' : 'none',
          paddingBottom: isContact ? '4px' : '0'
        }}>
          Contact us
        </Link>
      </nav>

      {/* Mobile Navigation - Simple Select Dropdown */}
      <select 
        onChange={(e) => {
          if (e.target.value) {
            window.location.href = e.target.value
          }
        }}
        value={`/${currentPage === 'home' ? '' : currentPage}`}
        style={{
          display: 'none',
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #E5E7EB',
          backgroundColor: '#FAF9F8',
          color: '#2C3E50',
          fontSize: '0.875rem',
          fontWeight: '500',
          cursor: 'pointer'
        }}
      >
        <option value="/">Home</option>
        <option value="/services">Services</option>
        <option value="/about">About us</option>
        <option value="/contact">Contact us</option>
      </select>
    </>
  )
}