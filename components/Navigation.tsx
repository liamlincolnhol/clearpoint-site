import Link from 'next/link'

export default function Navigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About me' },
    { href: '/contact', label: 'Free Quote' }
  ]

  return (
    <header className="bg-white fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Left - Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative">
              <div className="text-left">
                <div className="text-xl font-bold" style={{color: '#4A5D7A'}}>CLEAR</div>
                <div className="text-xl font-bold" style={{color: '#4A5D7A'}}>CHOICE</div>
                <div className="text-xs font-medium mt-1" style={{color: '#4A5D7A'}}>WINDOW CLEANING</div>
              </div>
              {/* Blue accent swoosh */}
              <div className="absolute -right-2 top-1 w-6 h-6 rounded-full opacity-30" style={{backgroundColor: '#87CEEB'}}></div>
            </div>
          </Link>
          
          {/* Right - Navigation and CTA */}
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:opacity-80 ${
                    item.label === 'Free Quote' 
                      ? 'border-2 px-3 py-2 rounded-md' 
                      : ''
                  }`}
                  style={{
                    color: item.label === 'Free Quote' ? '#FFFFFF' : '#2C3E50',
                    backgroundColor: item.label === 'Free Quote' ? '#4A5D7A' : 'transparent',
                    borderColor: item.label === 'Free Quote' ? '#4A5D7A' : 'transparent'
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            
            <button 
              className="px-6 py-3 rounded-lg text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{backgroundColor: '#4A5D7A'}}
            >
              Call Us
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}