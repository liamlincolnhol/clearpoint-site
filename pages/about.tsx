import SEO from '../components/SEO'
import CalcomFloatingButton from '../components/CalcomFloatingButton'
import Link from 'next/link'

export default function About() {
  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="About ClearPoint Window Services - Mason Rose"
        description="Learn about Mason Rose, the 17-year-old entrepreneur behind ClearPoint Window Services. Dedicated to providing quality window cleaning at affordable rates."
        keywords="about, Mason Rose, ClearPoint, window cleaning, entrepreneur, young business"
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
            <Link href="/services" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Services</Link>
            <Link href="/about" style={{color: '#4A5D7A', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', borderBottom: '2px solid #4A5D7A', paddingBottom: '4px'}}>About us</Link>
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
      <section style={{paddingTop: '160px', paddingBottom: '80px', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center'}}>
          <h1 style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C3E50'}}>
            About Mason
          </h1>
          <p style={{fontSize: '1.25rem', maxWidth: '42rem', margin: '0 auto', lineHeight: '1.6', color: '#6C757D'}}>
            Hi! I'm Mason Rose, a 17-year-old starting up ClearPoint Window Services this summer. 
            I'm passionate about providing quality service and helping my community.
          </p>
        </div>
      </section>

      {/* About Story */}
      <section style={{padding: '80px 0', backgroundColor: '#FFFFFF'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center'}}>
            <div>
              <h2 style={{fontSize: '3rem', fontWeight: 'bold', color: '#2C3E50', marginBottom: '1.5rem'}}>
                My Story
              </h2>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', color: '#6C757D', fontSize: '1.125rem', lineHeight: '1.6'}}>
                <p>
                  As a 17-year-old entrepreneur, I decided to start ClearPoint Window Services to earn money 
                  over the summer while providing a valuable service to my community. I believe in doing 
                  quality work at fair prices.
                </p>
                <p>
                  Whether you need just the outside cleaned, just the inside, or both - I'm committed to 
                  making your windows shine like new. I take pride in my work and want every customer to 
                  be completely satisfied.
                </p>
                <p>
                  If your windows are looking a little foggy, dusty, or just need a refresh, feel free to 
                  message me for a free quote. I'm excited to help you see clearly again!
                </p>
              </div>
            </div>
            <div>
              <div style={{
                aspectRatio: '1',
                backgroundColor: 'rgba(135, 206, 235, 0.2)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #87CEEB'
              }}>
                <div style={{textAlign: 'center', color: '#4A5D7A'}}>
                  <div style={{fontSize: '6rem', marginBottom: '1rem'}}>👨‍💼</div>
                  <p style={{fontSize: '1.25rem', fontWeight: '600'}}>Mason Rose</p>
                  <p style={{fontSize: '0.875rem'}}>Founder & Operator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
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
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>Hardworking</h3>
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
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>Affordable</h3>
              <p style={{color: '#6C757D', fontSize: '0.875rem'}}>Fair pricing that provides great value for quality work</p>
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
              <h3 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>Quality Focused</h3>
              <p style={{color: '#6C757D', fontSize: '0.875rem'}}>I take pride in delivering excellent results every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{padding: '80px 0', backgroundColor: '#4A5D7A', color: '#FFFFFF'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center'}}>
          <h2 style={{fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem'}}>
            Ready to Work Together?
          </h2>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)'}}>
            Let's get your windows sparkling clean! Message me for a free quote.
          </p>
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
            Contact Mason
          </button>
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