import SEO from '../components/SEO'
import CalcomFloatingButton from '../components/CalcomFloatingButton'
import Link from 'next/link'

export default function Services() {

  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="ClearPoint Window Services - Professional Window Cleaning"
        description="Professional window cleaning services by Mason Rose. Interior, exterior, or complete service - affordable rates and quality results."
        keywords="window cleaning, residential, Mason Rose, ClearPoint, professional"
      />

      {/* Navigation Header */}
      <header style={{backgroundColor: '#FAF9F8', position: 'fixed', top: 0, width: '100%', zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.1)'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px'}}>
          {/* Logo */}
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img 
              src="/images/ clearpoint-logo.png" 
              alt="ClearPoint Window Services Logo" 
              style={{height: '60px', width: 'auto'}}
            />
          </div>
          
          {/* Navigation */}
          <nav style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
            <Link href="/" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Home</Link>
            <Link href="/services" style={{color: '#4A5D7A', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', borderBottom: '2px solid #4A5D7A', paddingBottom: '4px'}}>Services</Link>
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

      {/* Hero Section with 60/40 Layout */}
      <section style={{paddingTop: '160px', paddingBottom: '80px', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '3rem', alignItems: 'center'}}>
            {/* Left Column - 60% Text Content */}
            <div>
              <h1 style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C3E50', lineHeight: '1.1'}}>
                Window Cleaning Services
              </h1>
              
              <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', color: '#6C757D', fontSize: '1.125rem', lineHeight: '1.6'}}>
                <p>
                  Hi! I'm Mason Rose, and I'm excited to help you get crystal clear windows this summer. 
                  Whether you need just the outside cleaned, just the inside, or both - I'll make your 
                  windows shine like new.
                </p>
                
                <p>
                  If your windows are looking a little foggy, dusty, or just need a refresh, 
                  you've come to the right place. I use professional techniques and equipment 
                  to ensure streak-free results every time.
                </p>
                
                <p>
                  As a young entrepreneur, I'm committed to providing excellent service at 
                  affordable rates. I take pride in my work and guarantee you'll be happy 
                  with the results.
                </p>
                
                <div style={{paddingTop: '1.5rem'}}>
                  <button style={{
                    backgroundColor: '#4A5D7A',
                    color: '#FFFFFF',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}>
                    Get Free Quote
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Column - 40% Image Stack */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              <div style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'}}>
                <div style={{
                  aspectRatio: '16/9',
                  backgroundColor: 'rgba(135, 206, 235, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(135, 206, 235, 0.3)',
                  color: '#6C757D',
                  fontSize: '1.125rem'
                }}>
                  <span>Before & After #1</span>
                </div>
              </div>
              
              <div style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'}}>
                <div style={{
                  aspectRatio: '16/9',
                  backgroundColor: 'rgba(135, 206, 235, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(135, 206, 235, 0.3)',
                  color: '#6C757D',
                  fontSize: '1.125rem'
                }}>
                  <span>Before & After #2</span>
                </div>
              </div>
              
              <div style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'}}>
                <div style={{
                  aspectRatio: '16/9',
                  backgroundColor: 'rgba(135, 206, 235, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(135, 206, 235, 0.3)',
                  color: '#6C757D',
                  fontSize: '1.125rem'
                }}>
                  <span>Before & After #3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section style={{padding: '80px 0', backgroundColor: '#FFFFFF'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2C3E50'}}>
            Service Options
          </h2>
          <p style={{fontSize: '1.125rem', marginBottom: '4rem', maxWidth: '42rem', margin: '0 auto 4rem auto', lineHeight: '1.6', color: '#6C757D'}}>
            Choose the perfect service for your needs - all with professional results guaranteed
          </p>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', padding: '2rem', border: '1px solid #E5E7EB'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🏠</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Interior Only</h3>
              <p style={{color: '#6C757D', marginBottom: '1.5rem'}}>
                Perfect for homes that just need the inside cleaned. Great for seasonal cleaning or move-in preparation.
              </p>
              
              <ul style={{textAlign: 'left', marginBottom: '2rem', color: '#6C757D'}}>
                <li style={{marginBottom: '0.5rem'}}>✓ Interior window cleaning</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Streak-free finish</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Safe for your home</li>
              </ul>
              
              <div style={{borderTop: '1px solid #E5E7EB', paddingTop: '1.5rem'}}>
                <p style={{fontSize: '1.25rem', fontWeight: '600', color: '#4A5D7A', marginBottom: '1rem'}}>Affordable Rates</p>
                <button style={{
                  width: '100%',
                  backgroundColor: '#4A5D7A',
                  color: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Get Quote
                </button>
              </div>
            </div>

            <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', padding: '2rem', border: '1px solid #E5E7EB'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🌤️</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Exterior Only</h3>
              <p style={{color: '#6C757D', marginBottom: '1.5rem'}}>
                Remove dirt, grime, and weather buildup from your exterior windows. Perfect for curb appeal.
              </p>
              
              <ul style={{textAlign: 'left', marginBottom: '2rem', color: '#6C757D'}}>
                <li style={{marginBottom: '0.5rem'}}>✓ Exterior window cleaning</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Weather damage removal</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Professional equipment</li>
              </ul>
              
              <div style={{borderTop: '1px solid #E5E7EB', paddingTop: '1.5rem'}}>
                <p style={{fontSize: '1.25rem', fontWeight: '600', color: '#4A5D7A', marginBottom: '1rem'}}>Affordable Rates</p>
                <button style={{
                  width: '100%',
                  backgroundColor: '#4A5D7A',
                  color: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Get Quote
                </button>
              </div>
            </div>

            <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', padding: '2rem', border: '2px solid #4A5D7A'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✨</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Complete Service</h3>
              <p style={{color: '#6C757D', marginBottom: '1.5rem'}}>
                Get the full treatment - both interior and exterior cleaning for crystal clear windows throughout.
              </p>
              
              <ul style={{textAlign: 'left', marginBottom: '2rem', color: '#6C757D'}}>
                <li style={{marginBottom: '0.5rem'}}>✓ Inside and outside cleaning</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Complete window refresh</li>
                <li style={{marginBottom: '0.5rem'}}>✓ Best value service</li>
              </ul>
              
              <div style={{borderTop: '1px solid #E5E7EB', paddingTop: '1.5rem'}}>
                <p style={{fontSize: '1.25rem', fontWeight: '600', color: '#4A5D7A', marginBottom: '1rem'}}>Best Value!</p>
                <button style={{
                  width: '100%',
                  backgroundColor: '#4A5D7A',
                  color: '#FFFFFF',
                  padding: '12px',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Get Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ClearPoint */}
      <section style={{padding: '80px 0', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '3rem', fontWeight: 'bold', color: '#2C3E50', marginBottom: '1rem'}}>
              Why Choose ClearPoint?
            </h2>
          </div>

          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#4A5D7A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <span style={{fontSize: '2rem', color: '#FFFFFF'}}>💪</span>
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>Young & Reliable</h3>
              <p style={{color: '#6C757D', fontSize: '0.875rem'}}>As a young entrepreneur, I bring energy and dedication to every job</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#4A5D7A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <span style={{fontSize: '2rem', color: '#FFFFFF'}}>💰</span>
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>Affordable Rates</h3>
              <p style={{color: '#6C757D', fontSize: '0.875rem'}}>Quality service at rates that won't break the bank</p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#4A5D7A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem auto'
              }}>
                <span style={{fontSize: '2rem', color: '#FFFFFF'}}>🌟</span>
              </div>
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>Quality Results</h3>
              <p style={{color: '#6C757D', fontSize: '0.875rem'}}>Professional techniques for streak-free, crystal clear windows</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{padding: '80px 0', backgroundColor: '#4A5D7A', color: '#FFFFFF'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            Ready to Get Started?
          </h2>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)'}}>
            Message me today for a free quote and let's get your windows sparkling!
          </p>
          <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
            <button style={{
              backgroundColor: '#87CEEB',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '1.125rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Get Free Quote
            </button>
            <button style={{
              backgroundColor: 'transparent',
              color: '#FFFFFF',
              padding: '16px 32px',
              borderRadius: '6px',
              border: '2px solid #FFFFFF',
              fontSize: '1.125rem',
              fontWeight: '500',
              cursor: 'pointer'
            }}>
              Contact Mason
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', padding: '3rem 0'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
            <div style={{backgroundColor: '#FAF9F8', padding: '12px', borderRadius: '8px', display: 'inline-block'}}>
              <img 
                src="/images/ clearpoint-logo.png" 
                alt="ClearPoint Window Services Logo" 
                style={{height: '80px', width: 'auto'}}
              />
            </div>
            
            <div style={{textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                © 2025 ClearPoint Window Services. All rights reserved.
              </p>
              <p style={{fontWeight: '600', fontSize: '1.125rem', color: '#4A5D7A'}}>Contact Mason for Free Quote</p>
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