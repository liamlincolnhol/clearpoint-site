import SEO from '../components/SEO'
import Link from 'next/link'
import Image from 'next/image'
import SimpleMobileNav from '../components/SimpleMobileNav'

export default function Contact() {

  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="Contact ClearPoint Window Services - Get Your Free Quote"
        description="Contact ClearPoint Window Services for professional window cleaning. Get your free quote today!"
        keywords="contact, window cleaning, free quote, ClearPoint"
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
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{display: 'flex', gap: '2rem', alignItems: 'center'}}>
            <Link href="/" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Home</Link>
            <Link href="/services" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Services</Link>
            <Link href="/about" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>About us</Link>
            <Link href="/contact" style={{color: '#4A5D7A', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', borderBottom: '2px solid #4A5D7A', paddingBottom: '4px'}}>Contact us</Link>
          </nav>
          
          {/* Mobile Nav */}
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <SimpleMobileNav currentPage="contact" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{paddingTop: '160px', paddingBottom: '80px', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'center'}}>
          <h1 style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C3E50'}}>
            Contact Us
          </h1>
          <p style={{fontSize: '1.25rem', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem auto', lineHeight: '1.6', color: '#6C757D'}}>
            Ready to get your windows sparkling clean? Get in touch for a free quote and let's discuss your window cleaning needs.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section style={{padding: '80px 0', backgroundColor: '#FFFFFF'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div className="two-col-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto 4rem auto'}}>
            
            {/* Phone */}
            <div style={{backgroundColor: '#FAF9F8', borderRadius: '8px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📞</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Call Us</h3>
              <p style={{fontSize: '1.125rem', color: '#4A5D7A', fontWeight: '600', marginBottom: '0.5rem'}}>
                (616) 690-8576
              </p>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                Available 7 days a week
              </p>
            </div>

            {/* Service Hours */}
            <div style={{backgroundColor: '#FAF9F8', borderRadius: '8px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🕒</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Service Hours</h3>
              <p style={{fontSize: '1.125rem', color: '#4A5D7A', fontWeight: '600', marginBottom: '0.5rem'}}>
                Mon-Sat: 8AM-6PM
              </p>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                Flexible scheduling available
              </p>
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
              <p style={{fontWeight: '600', fontSize: '1.125rem', color: '#4A5D7A', textAlign: 'center'}}>Contact Us for Free Quote</p>
              <Link href="/contact">
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
              </Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}