export default function CalcomFloatingButton() {
  const handleBookingClick = () => {
    // This will be replaced with actual Cal.com integration
    alert('Cal.com booking widget will be integrated here')
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50
      }}
    >
      <button
        onClick={handleBookingClick}
        style={{
          backgroundColor: '#4A5D7A',
          color: '#FFFFFF',
          padding: '12px 24px',
          borderRadius: '8px',
          border: 'none',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.875rem',
          fontWeight: '500',
          transition: 'opacity 0.2s ease'
        }}
        onMouseEnter={(e) => (e.target as HTMLButtonElement).style.opacity = '0.9'}
        onMouseLeave={(e) => (e.target as HTMLButtonElement).style.opacity = '1'}
      >
        <span style={{fontSize: '1.125rem'}}>📅</span>
        <span>Book Now</span>
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          style={{transition: 'transform 0.2s ease'}}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
}