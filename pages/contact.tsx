import SEO from '../components/SEO'
import Link from 'next/link'
import Image from 'next/image'
import SimpleMobileNav from '../components/SimpleMobileNav'
import ContactForm from '../components/ContactForm'

export default function Contact() {

  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="Free Quote - ClearPoint Window Services"
        description="Get your free window cleaning quote from ClearPoint Window Services. Professional service with flexible scheduling!"
        keywords="free quote, window cleaning, ClearPoint, professional service"
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
            <Link href="/services/" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Our Work</Link>
            <Link href="/about/" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>About us</Link>
            <Link href="/contact" style={{color: '#4A5D7A', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', borderBottom: '2px solid #4A5D7A', paddingBottom: '4px'}}>Contact us</Link>
          </nav>
          
          {/* Mobile Nav */}
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
            <SimpleMobileNav currentPage="contact" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{paddingTop: '120px', paddingBottom: '20px', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem', textAlign: 'left'}}>
          <h1 style={{fontSize: '4rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#2C3E50'}}>
            Get Your Free Quote
          </h1>
          <p style={{fontSize: '1.25rem', marginBottom: '1rem', maxWidth: '42rem', lineHeight: '1.6', color: '#6C757D'}}>
            Ready to get your windows sparkling clean? Fill out our quick form below to receive your personalized free quote today.
          </p>
          <p style={{fontSize: '1.125rem', color: '#4A5D7A', fontWeight: '600'}}>
            Service Hours: Mon-Sat 8AM-6PM • Flexible scheduling available
          </p>
        </div>
      </section>

      {/* Combined Contact Form and Information Section */}
      <section style={{padding: '20px 0 80px 0', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 400px', gap: '4rem', alignItems: 'start'}} className="contact-layout">
            
            {/* Contact Form - Left Side */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information - Right Side */}
            <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
              
              {/* Phone */}
              <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '2rem', textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📞</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Call Us</h3>
                <p style={{fontSize: '1.125rem', color: '#4A5D7A', fontWeight: '600', marginBottom: '0.5rem'}}>
                  (616) 690-8576
                </p>
                <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                  Available 7 days a week
                </p>
              </div>

              {/* Email */}
              <div style={{backgroundColor: '#FFFFFF', borderRadius: '8px', padding: '2rem', textAlign: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'}}>
                <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✉️</div>
                <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Email Us</h3>
                <p style={{fontSize: '1.125rem', color: '#4A5D7A', fontWeight: '600', marginBottom: '0.5rem'}}>
                  clearpointwindows1@gmail.com
                </p>
                <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                  We'll respond within 24 hours
                </p>
              </div>


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