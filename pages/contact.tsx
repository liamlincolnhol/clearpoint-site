import SEO from '../components/SEO'
import CalcomFloatingButton from '../components/CalcomFloatingButton'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import SimpleMobileNav from '../components/SimpleMobileNav'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! Mason will get back to you within 24 hours.')
    console.log('Contact form data:', formData)
  }

  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="Contact ClearPoint Window Services - Get Your Free Quote"
        description="Contact Mason Rose at ClearPoint Window Services for professional window cleaning. Get your free quote today!"
        keywords="contact, window cleaning, free quote, Mason Rose, ClearPoint"
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
          
          {/* CTA Button + Mobile Nav */}
          <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
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
            Ready to get your windows sparkling clean? Get in touch with Mason for a free quote and let's discuss your window cleaning needs.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section style={{padding: '80px 0', backgroundColor: '#FFFFFF'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div className="three-col-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem'}}>
            
            {/* Phone */}
            <div style={{backgroundColor: '#FAF9F8', borderRadius: '8px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📞</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Call Us</h3>
              <p style={{fontSize: '1.125rem', color: '#4A5D7A', fontWeight: '600', marginBottom: '0.5rem'}}>
                Coming Soon
              </p>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                Available 7 days a week
              </p>
            </div>

            {/* Email */}
            <div style={{backgroundColor: '#FAF9F8', borderRadius: '8px', padding: '2rem', textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>📧</div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Email Us</h3>
              <p style={{fontSize: '1.125rem', color: '#4A5D7A', fontWeight: '600', marginBottom: '0.5rem'}}>
                mason@clearpointwindows.com
              </p>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                We respond within 24 hours
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

      {/* Contact Form */}
      <section style={{padding: '80px 0', backgroundColor: '#FAF9F8'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)', padding: '3rem', border: '1px solid #FAF9F8'}}>
            <form onSubmit={handleSubmit}>
              <div className="form-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '1.5rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '1px solid #FAF9F8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: '#FAF9F8',
                      color: '#6C757D',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '1px solid #FAF9F8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: '#FAF9F8',
                      color: '#6C757D',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
              </div>

              <div className="form-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '1.5rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '1px solid #FAF9F8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: '#FAF9F8',
                      color: '#6C757D',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '14px',
                      border: '1px solid #FAF9F8',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      backgroundColor: '#FAF9F8',
                      color: '#6C757D',
                      fontFamily: 'inherit'
                    }}
                  >
                    <option value="">Select a topic</option>
                    <option value="quote">Request a Quote</option>
                    <option value="general">General Question</option>
                    <option value="scheduling">Scheduling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom: '2rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  placeholder="Tell us about your window cleaning needs, number of windows, preferred scheduling, or any questions you have..."
                  style={{
                    width: '100%',
                    padding: '14px',
                    border: '1px solid #FAF9F8',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: '#FAF9F8',
                    color: '#6C757D',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                />
              </div>

              <div style={{textAlign: 'center'}}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: '#4A5D7A',
                    color: '#FFFFFF',
                    padding: '16px 48px',
                    borderRadius: '8px',
                    border: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => (e.target as HTMLButtonElement).style.opacity = '0.9'}
                  onMouseLeave={(e) => (e.target as HTMLButtonElement).style.opacity = '1'}
                >
                  Send Message
                </button>
                <p style={{fontSize: '0.875rem', color: '#6C757D', marginTop: '1rem'}}>
                  We'll respond to your message within 24 hours
                </p>
              </div>
            </form>
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