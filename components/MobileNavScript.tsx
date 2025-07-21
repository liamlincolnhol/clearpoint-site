import { useEffect } from 'react'

export default function MobileNavScript() {
  useEffect(() => {
    const handleMobileNav = () => {
      if (window.innerWidth <= 768) {
        // Force hide desktop navigation
        const desktopNavs = document.querySelectorAll('nav[style*="flex"], .desktop-nav, header nav')
        desktopNavs.forEach((nav) => {
          if (nav instanceof HTMLElement) {
            nav.style.display = 'none'
            nav.style.visibility = 'hidden'
            nav.style.opacity = '0'
          }
        })
        
        // Force show mobile navigation
        const mobileNavs = document.querySelectorAll('.improved-mobile-nav')
        mobileNavs.forEach((nav) => {
          if (nav instanceof HTMLElement) {
            nav.style.display = 'block'
            nav.style.visibility = 'visible'
            nav.style.opacity = '1'
          }
        })
      }
    }

    // Run on load and resize
    handleMobileNav()
    window.addEventListener('resize', handleMobileNav)
    
    // Run after a short delay to ensure DOM is ready
    setTimeout(handleMobileNav, 100)

    return () => window.removeEventListener('resize', handleMobileNav)
  }, [])

  return null
}