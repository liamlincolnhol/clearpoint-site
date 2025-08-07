import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  subject: string;
  windowCount: string;
  message: string;
  website: string; // Honeypot field
}

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    windowCount: '',
    message: '',
    website: '' // Honeypot field
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          subject: '',
          windowCount: '',
          message: '',
          website: ''
        });
        if (onSuccess) onSuccess();
      } else {
        const errorData = await response.json();
        setSubmitStatus('error');
        setErrorMessage(errorData.error || 'Failed to send message');
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    border: '2px solid #E5E7EB',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: '#FFFFFF',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
    lineHeight: '1.5',
    boxSizing: 'border-box' as const,
  };

  const selectStyle = {
    ...inputStyle,
    appearance: 'none' as const,
    backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6,9 12,15 18,9\'%3e%3c/polyline%3e%3c/svg%3e")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
    backgroundSize: '16px',
    paddingRight: '40px',
  };


  return (
    <div className="contact-form-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', backgroundColor: '#FFFFFF', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', fontFamily: 'var(--font-montserrat), system-ui, -apple-system, sans-serif' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '600', marginBottom: '2rem', color: '#2C3E50', textAlign: 'center', fontFamily: 'inherit' }}>
        Get Your Free Quote
      </h2>
      
      {submitStatus === 'success' && (
        <div style={{ 
          backgroundColor: '#D1FAE5', 
          border: '1px solid #10B981', 
          color: '#065F46', 
          padding: '12px 16px', 
          borderRadius: '8px', 
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div style={{ 
          backgroundColor: '#FEE2E2', 
          border: '1px solid #EF4444', 
          color: '#991B1B', 
          padding: '12px 16px', 
          borderRadius: '8px', 
          marginBottom: '1.5rem',
          textAlign: 'center'
        }}>
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ minWidth: 0 }}>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#374151', fontFamily: 'inherit', fontSize: '0.875rem' }}>
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#4A5D7A'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>

          <div style={{ minWidth: 0 }}>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#374151', fontFamily: 'inherit', fontSize: '0.875rem' }}>
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#4A5D7A'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ minWidth: 0 }}>
            <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#374151', fontFamily: 'inherit', fontSize: '0.875rem' }}>
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = '#4A5D7A'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            />
          </div>

          <div style={{ minWidth: 0 }}>
            <label htmlFor="subject" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#374151', fontFamily: 'inherit', fontSize: '0.875rem' }}>
              Service Type
            </label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              style={selectStyle}
              onFocus={(e) => e.target.style.borderColor = '#4A5D7A'}
              onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
            >
              <option value="">Select a service</option>
              <option value="Interior Only - Inside window cleaning">Interior Only - Inside window cleaning</option>
              <option value="Complete Service - Inside and outside cleaning">Complete Service - Inside and outside cleaning</option>
              <option value="Exterior Only - Outside window cleaning">Exterior Only - Outside window cleaning</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="address" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#374151', fontFamily: 'inherit', fontSize: '0.875rem' }}>
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Your service address"
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#4A5D7A'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="windowCount" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#374151', fontFamily: 'inherit', fontSize: '0.875rem' }}>
            Approximate Number of Windows
          </label>
          <input
            type="number"
            id="windowCount"
            name="windowCount"
            value={formData.windowCount}
            onChange={handleChange}
            placeholder="e.g. 15"
            min="1"
            max="200"
            style={inputStyle}
            onFocus={(e) => e.target.style.borderColor = '#4A5D7A'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '0.75rem', fontWeight: '500', color: '#374151', fontFamily: 'inherit', fontSize: '0.875rem' }}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your window cleaning needs..."
            style={{
              ...inputStyle,
              resize: 'vertical',
              minHeight: '120px'
            }}
            onFocus={(e) => e.target.style.borderColor = '#4A5D7A'}
            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
          />
        </div>

        {/* Honeypot field - hidden from users but visible to bots */}
        <div style={{ display: 'none' }}>
          <label htmlFor="website">Website (leave blank)</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            backgroundColor: isSubmitting ? '#9CA3AF' : '#4A5D7A',
            color: '#FFFFFF',
            padding: '14px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = '#3A4D63';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = '#4A5D7A';
            }
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}