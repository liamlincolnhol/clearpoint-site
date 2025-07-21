import SEO from '../components/SEO'
import CalcomFloatingButton from '../components/CalcomFloatingButton'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import ImprovedMobileNav from '../components/ImprovedMobileNav'

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    windowCount: '',
    preferredDate: '',
    preferredTime: '',
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
    // This will be replaced with actual form submission logic
    alert('Booking request submitted! Mason will contact you soon to confirm your appointment.')
    console.log('Booking data:', formData)
  }

  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="Book Your Window Cleaning - ClearPoint Window Services"
        description="Schedule your window cleaning appointment with Mason Rose. Quick and easy booking for interior, exterior, or complete window cleaning services."
        keywords="book appointment, window cleaning booking, schedule service, Mason Rose, ClearPoint"
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
            <Link href="/contact" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Contact us</Link>
            <span style={{color: '#4A5D7A', fontSize: '0.875rem', fontWeight: '600', borderBottom: '2px solid #4A5D7A', paddingBottom: '4px'}}>Book Now</span>
          </nav>
          
          {/* Mobile Navigation */}
          <ImprovedMobileNav currentPage="booking" />
          
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
      <section style={{paddingTop: '160px', paddingBottom: '20px', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '800px', margin: '0 auto', padding: '0 1rem', textAlign: 'center'}}>
          <h1 style={{fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#2C3E50'}}>
            Book Your Appointment
          </h1>
          <p style={{fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.6', color: '#6C757D'}}>
            Ready to get your windows sparkling clean? Fill out the form below and Mason will contact you to confirm your appointment and provide a free quote.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section style={{padding: '20px 0 80px 0', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1000px', margin: '0 auto', padding: '0 1rem'}}>
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
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
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
                    Service Type *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
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
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Only</option>
                    <option value="exterior">Exterior Only</option>
                    <option value="complete">Complete Service (Interior + Exterior)</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom: '1.5rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                  Property Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  placeholder="Street address, city, state, zip code"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #FAF9F8',
                    borderRadius: '8px',
                    fontSize: '1rem',
                    backgroundColor: '#FAF9F8'
                  }}
                />
              </div>

              <div className="form-grid" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '1.5rem'}}>
                <div>
                  <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                    Approximate Window Count
                  </label>
                  <input
                    type="number"
                    name="windowCount"
                    value={formData.windowCount}
                    onChange={handleInputChange}
                    placeholder="e.g. 15"
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
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
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
                    Preferred Time
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
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
                    <option value="">Any time</option>
                    <option value="morning">Morning (8 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
              </div>

              <div style={{marginBottom: '2rem'}}>
                <label style={{display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#2C3E50'}}>
                  Additional Information
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special instructions, access information, or questions you'd like to share..."
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
                  Submit Booking Request
                </button>
                <p style={{fontSize: '0.875rem', color: '#6C757D', marginTop: '1rem'}}>
                  Mason will contact you within 24 hours to confirm your appointment and provide a free quote.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section style={{padding: '80px 0', backgroundColor: '#FAF9F8'}}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '3rem'}}>
            <h2 style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#2C3E50', marginBottom: '1rem'}}>
              What Happens Next?
            </h2>
            <p style={{fontSize: '1.125rem', color: '#6C757D', maxWidth: '600px', margin: '0 auto'}}>
              Here's what you can expect after submitting your booking request
            </p>
          </div>

          <div className="three-col-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', maxWidth: '900px', margin: '0 auto'}}>
            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#4A5D7A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <span style={{fontSize: '2.5rem', color: '#FFFFFF'}}>1</span>
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Quick Response</h3>
              <p style={{color: '#6C757D', lineHeight: '1.6'}}>
                Mason will contact you within 24 hours via phone or email to discuss your needs and confirm availability.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#4A5D7A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <span style={{fontSize: '2.5rem', color: '#FFFFFF'}}>2</span>
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Free Quote</h3>
              <p style={{color: '#6C757D', lineHeight: '1.6'}}>
                You'll receive a free, no-obligation quote based on your specific needs and window count.
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <div style={{
                width: '80px',
                height: '80px',
                backgroundColor: '#4A5D7A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem auto'
              }}>
                <span style={{fontSize: '2.5rem', color: '#FFFFFF'}}>3</span>
              </div>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#2C3E50'}}>Schedule & Clean</h3>
              <p style={{color: '#6C757D', lineHeight: '1.6'}}>
                Once you approve the quote, we'll schedule your appointment and deliver sparkling clean windows!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{backgroundColor: '#FAF9F8', borderTop: '1px solid #FAF9F8', padding: '3rem 0'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem'}}>
            <div>
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