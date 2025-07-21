import SEO from '../components/SEO'
import CalcomFloatingButton from '../components/CalcomFloatingButton'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="ClearPoint Window Services - Professional Window Cleaning"
        description="Hi! I'm Mason Rose, a 17-year-old entrepreneur offering professional window cleaning services. Inside, outside, or both - I'll make your windows shine like new!"
        keywords="window cleaning, window washing, residential, ClearPoint, Mason Rose, professional"
      />

      {/* Navigation Header */}
      <header style={{backgroundColor: '#FAF9F8', position: 'fixed', top: 0, width: '100%', zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
          {/* Logo */}
          <div style={{display: 'flex', alignItems: 'center'}}>
            <Image 
              src="/images/ clearpoint-logo.png" 
              alt="ClearPoint Window Services Logo" 
              width={120}
              height={60}
              style={{height: '60px', width: 'auto'}}
            />
          </div>
          
          {/* Navigation */}
          <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
            <Link href="/" style={{color: '#4A5D7A', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', borderBottom: '2px solid #4A5D7A', paddingBottom: '4px'}}>Home</Link>
            <Link href="/services" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Services</Link>
            <Link href="/about" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>About us</Link>
            <Link href="/contact" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Contact us</Link>
          </nav>
          
          {/* CTA Button */}
          <Link href="/booking">
            <button style={{
              backgroundColor: '#4A5D7A', 
              color: '#FFFFFF', 
              padding: '12px 24px', 
              borderRadius: '8px', 
              border: 'none', 
              fontSize: '0.875rem', 
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Book Now
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{paddingTop: '160px', paddingBottom: '80px', backgroundImage: 'linear-gradient(rgba(248, 249, 250, 0.85), rgba(248, 249, 250, 0.85)), url(/images/photos/wash3.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
            {/* Left Column - Text Content */}
            <div>
              <p style={{
                fontSize: '0.875rem', 
                fontWeight: '500', 
                marginBottom: '1rem', 
                textTransform: 'uppercase', 
                letterSpacing: '0.05em', 
                color: '#4A5D7A'
              }}>
                WELCOME TO CLEARPOINT WINDOW SERVICES
              </p>
              <h1 style={{
                fontSize: '4rem', 
                fontWeight: 'bold', 
                marginBottom: '1.5rem', 
                lineHeight: '1.1', 
                color: '#2C3E50'
              }}>
                Making Your<br />
                Windows Shine
              </h1>
              <p style={{
                fontSize: '1.125rem', 
                marginBottom: '2rem', 
                lineHeight: '1.6', 
                maxWidth: '28rem', 
                color: '#6C757D'
              }}>
                Hi! I'm Mason Rose, a 17-year-old entrepreneur starting 
                ClearPoint Window Services. Whether it's inside, outside, 
                or both - I'll make your windows shine like new this summer!
              </p>
              <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                <button 
                  style={{
                    backgroundColor: '#4A5D7A',
                    color: '#FFFFFF',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = '#3A4D6A';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 8px 25px rgba(74, 93, 122, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = '#4A5D7A';
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = 'none';
                  }}
                >
                  Call Us Now
                </button>
                <button 
                  style={{
                    backgroundColor: 'transparent',
                    color: '#4A5D7A',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: '2px solid #4A5D7A',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = '#4A5D7A';
                    target.style.color = '#FFFFFF';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 8px 25px rgba(74, 93, 122, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLButtonElement;
                    target.style.backgroundColor = 'transparent';
                    target.style.color = '#4A5D7A';
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = 'none';
                  }}
                >
                  About Us
                </button>
              </div>
            </div>
            
            {/* Right Column - Empty space to maintain layout */}
            <div></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{padding: '80px 0', backgroundColor: '#FAF9F8'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center'}}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#2C3E50'
          }}>
            Our Services
          </h2>
          <p style={{
            fontSize: '1.125rem',
            marginBottom: '4rem',
            maxWidth: '60rem',
            margin: '0 auto 4rem auto',
            lineHeight: '1.6',
            color: '#6C757D'
          }}>
            If your windows are looking a little foggy, dusty, or just need a refresh, I'm here to help!
          </p>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', maxWidth: '1200px', margin: '0 auto'}}>
            <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', padding: '2rem', textAlign: 'center', border: '1px solid #FAF9F8', flex: '0 0 300px'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏠</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2C3E50'}}>Interior Only</h3>
              <p style={{fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6', color: '#6C757D'}}>
                Perfect for homes that just need the inside cleaned. Great for seasonal cleaning.
              </p>
              <ul style={{textAlign: 'left', marginBottom: '1.5rem', color: '#6C757D', fontSize: '0.875rem'}}>
                <li style={{marginBottom: '0.5rem'}}>✓ Interior window cleaning</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Streak-free finish</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Safe for your home</li>
              </ul>
              <button style={{
                width: '100%',
                backgroundColor: '#4A5D7A',
                color: '#FFFFFF',
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Get Quote
              </button>
            </div>

            <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)', padding: '2.5rem', textAlign: 'center', border: '2px solid #4A5D7A', flex: '0 0 320px', transform: 'scale(1.05)'}}>
              <div style={{fontSize: '3.5rem', marginBottom: '1rem'}}>✨</div>
              <h3 style={{fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2C3E50'}}>Complete Service</h3>
              <div style={{backgroundColor: '#4A5D7A', color: '#FFFFFF', padding: '4px 12px', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '600', marginBottom: '1rem', display: 'inline-block'}}>BEST VALUE</div>
              <p style={{fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6', color: '#6C757D'}}>
                Get the full treatment - both interior and exterior cleaning for crystal clear windows.
              </p>
              <ul style={{textAlign: 'left', marginBottom: '1.5rem', color: '#6C757D', fontSize: '0.875rem'}}>
                <li style={{marginBottom: '0.5rem'}}>✓ Inside and outside cleaning</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Complete window refresh</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Best value service</li>
              </ul>
              <button style={{
                width: '100%',
                backgroundColor: '#4A5D7A',
                color: '#FFFFFF',
                padding: '14px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Get Quote
              </button>
            </div>

            <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', padding: '2rem', textAlign: 'center', border: '1px solid #FAF9F8', flex: '0 0 300px'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌤️</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2C3E50'}}>Exterior Only</h3>
              <p style={{fontSize: '1rem', marginBottom: '1.5rem', lineHeight: '1.6', color: '#6C757D'}}>
                Remove dirt, grime, and weather buildup from your exterior windows.
              </p>
              <ul style={{textAlign: 'left', marginBottom: '1.5rem', color: '#6C757D', fontSize: '0.875rem'}}>
                <li style={{marginBottom: '0.5rem'}}>✓ Exterior window cleaning</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Weather damage removal</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Professional equipment</li>
              </ul>
              <button style={{
                width: '100%',
                backgroundColor: '#4A5D7A',
                color: '#FFFFFF',
                padding: '12px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#FAF9F8', borderTop: '1px solid #FAF9F8', padding: '3rem 0'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
            <div style={{backgroundColor: '#FAF9F8', padding: '12px', borderRadius: '8px', display: 'inline-block'}}>
              <Image 
                src="/images/ clearpoint-logo.png" 
                alt="ClearPoint Window Services Logo" 
                width={160}
                height={80}
                style={{height: '80px', width: 'auto'}}
              />
            </div>
            
            <div style={{textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                © 2025 ClearPoint Window Services. All rights reserved.
              </p>
              <p style={{fontWeight: '600', fontSize: '1.125rem', color: '#4A5D7A', textAlign: 'center'}}>Contact Mason for Free Quote</p>
              <button style={{
                backgroundColor: '#4A5D7A',
                color: '#FFFFFF',
                padding: '12px 24px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </footer>

      <CalcomFloatingButton />
    </div>
  )
}