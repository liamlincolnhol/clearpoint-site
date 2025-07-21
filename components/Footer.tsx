
export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="relative text-left">
              <div className="text-2xl font-bold" style={{color: '#4A5D7A'}}>CLEAR</div>
              <div className="text-2xl font-bold" style={{color: '#4A5D7A'}}>CHOICE</div>
              <div className="text-xs font-medium mt-1" style={{color: '#4A5D7A'}}>WINDOW CLEANING</div>
              {/* Blue accent swoosh */}
              <div className="absolute -right-2 top-2 w-6 h-6 rounded-full opacity-20" style={{backgroundColor: '#87CEEB'}}></div>
            </div>
          </div>
          
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm" style={{color: '#6C757D'}}>
              © {currentYear} Clear Choice Window Cleaning. All rights reserved.
            </p>
            <p className="font-semibold text-lg" style={{color: '#4A5D7A'}}>469-389-9656</p>
            <button 
              className="px-6 py-3 rounded-lg text-sm font-medium text-white transition-colors hover:opacity-90"
              style={{backgroundColor: '#4A5D7A'}}
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}