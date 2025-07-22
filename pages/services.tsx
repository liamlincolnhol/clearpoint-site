import SEO from '../components/SEO'
import CalcomFloatingButton from '../components/CalcomFloatingButton'
import Link from 'next/link'
import Image from 'next/image'
import SimpleMobileNav from '../components/SimpleMobileNav'

export default function Services() {

  return (
    <div style={{backgroundColor: '#F8F9FA', minHeight: '100vh'}}>
      <SEO
        title="Our Work - ClearPoint Window Services"
        description="Professional window cleaning services by Mason Rose. Interior, exterior, or complete service - affordable rates and quality results."
        keywords="window cleaning, residential, Mason Rose, ClearPoint, professional"
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
            <Link href="/services" style={{color: '#4A5D7A', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '600', borderBottom: '2px solid #4A5D7A', paddingBottom: '4px'}}>Services</Link>
            <Link href="/about" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>About us</Link>
            <Link href="/contact" style={{color: '#2C3E50', textDecoration: 'none', fontSize: '0.875rem', fontWeight: '500'}}>Contact us</Link>
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
            <SimpleMobileNav currentPage="services" />
          </div>
        </div>
      </header>

      {/* Our Work Gallery - Hero Section */}
      <section style={{paddingTop: '90px', paddingBottom: '10px', backgroundColor: '#F8F9FA'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 1rem'}}>
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h1 className="hero-title" style={{fontSize: '4rem', fontWeight: 'bold', color: '#2C3E50', marginBottom: '1rem'}}>
              Our Work
            </h1>
            <p style={{fontSize: '1.25rem', color: '#6C757D', maxWidth: '600px', margin: '0 auto'}}>
              See the difference professional window cleaning makes. Before and after photos from our recent jobs.
            </p>
          </div>

          <div className="before-after-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginBottom: '3rem'}}>
            
            {/* Before/After Comparison 1 */}
            <div style={{backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '2rem', border: '1px solid #E5E7EB', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#2C3E50', textAlign: 'center'}}>
                Residential Window Transformation
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
                <div>
                  <p style={{fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#6C757D', textAlign: 'center'}}>BEFORE</p>
                  <Image 
                    src="/images/photos/before1.jpg" 
                    alt="Before window cleaning" 
                    width={300}
                    height={225}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #E5E7EB'
                    }}
                  />
                </div>
                <div>
                  <p style={{fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#4A5D7A', textAlign: 'center'}}>AFTER</p>
                  <Image 
                    src="/images/photos/after1.jpeg" 
                    alt="After window cleaning" 
                    width={300}
                    height={225}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #4A5D7A'
                    }}
                  />
                </div>
              </div>
              <p style={{fontSize: '0.875rem', color: '#6C757D', textAlign: 'center', fontStyle: 'italic'}}>
                Complete interior and exterior window cleaning service
              </p>
            </div>

            {/* Before/After Comparison 2 */}
            <div style={{backgroundColor: '#FFFFFF', borderRadius: '12px', padding: '2rem', border: '1px solid #E5E7EB', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'}}>
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#2C3E50', textAlign: 'center'}}>
                Home Window Restoration
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem'}}>
                <div>
                  <p style={{fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#6C757D', textAlign: 'center'}}>BEFORE</p>
                  <Image 
                    src="/images/photos/before2.jpeg" 
                    alt="Before window cleaning" 
                    width={300}
                    height={225}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #E5E7EB'
                    }}
                  />
                </div>
                <div>
                  <p style={{fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: '#4A5D7A', textAlign: 'center'}}>AFTER</p>
                  <Image 
                    src="/images/photos/after2.jpg" 
                    alt="After window cleaning" 
                    width={300}
                    height={225}
                    style={{
                      width: '100%',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '8px',
                      border: '2px solid #4A5D7A'
                    }}
                  />
                </div>
              </div>
              <p style={{fontSize: '0.875rem', color: '#6C757D', textAlign: 'center', fontStyle: 'italic'}}>
                Professional cleaning removes years of buildup
              </p>
            </div>

          </div>

          {/* Service Process Photos */}
          <div className="three-col-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
            
            <div style={{textAlign: 'center'}}>
              <Image 
                src="/images/photos/wash1.jpeg" 
                alt="Professional window cleaning in action" 
                width={300}
                height={225}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  marginBottom: '1rem'
                }}
              />
              <h4 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>
                Professional Equipment
              </h4>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                Using the right tools for streak-free results
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image 
                src="/images/photos/wash2.jpeg" 
                alt="Quality window cleaning technique" 
                width={300}
                height={225}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  marginBottom: '1rem'
                }}
              />
              <h4 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>
                Attention to Detail
              </h4>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                Thorough cleaning of every corner and frame
              </p>
            </div>

            <div style={{textAlign: 'center'}}>
              <Image 
                src="/images/photos/house1.jpeg" 
                alt="Beautiful home with clean windows" 
                width={300}
                height={225}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'cover',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                  marginBottom: '1rem'
                }}
              />
              <h4 style={{fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#2C3E50'}}>
                Enhanced Curb Appeal
              </h4>
              <p style={{fontSize: '0.875rem', color: '#6C757D'}}>
                Clean windows make your home shine
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <footer style={{backgroundColor: '#FAF9F8', borderTop: '1px solid #E5E7EB', padding: '3rem 0'}}>
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