import React, { useState, useRef, useEffect } from 'react'

const Events = () => {
  const [showPreview, setShowPreview] = useState(false)
  const [previewPosition, setPreviewPosition] = useState({ x: 0, y: 0 })
  const timeoutRef = useRef(null)
  const linkRef = useRef(null)

  const events = [
    {
      name: "IronByte",
      status: "Coming Soon",
      location: "Kathmandu",
      type: "Hardware Hackathon - ironbyte.dev",
      website: "https://www.ironbyte.dev",
      previewImage: "/ironbyte-preview.jpg" // You can add a screenshot here
    }
  ]

  const handleMouseEnter = (e) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    
    // Set position near the cursor
    const rect = e.target.getBoundingClientRect()
    setPreviewPosition({
      x: rect.left,
      y: rect.bottom + 10
    })
    
    // Show preview after a short delay
    timeoutRef.current = setTimeout(() => {
      setShowPreview(true)
    }, 300)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setShowPreview(false)
  }

  // Close preview when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (linkRef.current && !linkRef.current.contains(e.target)) {
        setShowPreview(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <section id="events" className="events">
      <h2>Upcoming Events</h2>
      <p>Join our exciting lineup of workshops and competitions designed to ignite passion for STEM.</p>
      <ul className="event-list">
        {events.map((event, index) => (
          <li key={index} className="event-item"                 onMouseLeave={handleMouseLeave}
>
            <strong>
              <a 
                ref={linkRef}
                href={event.website}
                target="_blank"
                rel="noopener noreferrer"
                className="event-link"
                onMouseEnter={handleMouseEnter}
              >
                {event.name}
              </a>
            </strong> - {event.status} | {event.location} | {event.type}

            {/* Webpage Preview */}
            {showPreview && (
              <div 
                className="webpage-preview"
                style={{
                  left: `${previewPosition.x}px`,
                  top: `${previewPosition.y}px`
                }}
              >
                <div className="preview-header">
                  <div className="preview-dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                  </div>
                  <div className="preview-url">
                  </div>
                </div>
                
                <div className="preview-content">
                  {/* Option 1: If you have a screenshot */}
                  {/* <img src={event.previewImage} alt={`${event.name} website preview`} /> */}
                  
                  {/* Option 2: Live iframe preview */}
                  <iframe
                    src={event.website}
                    className="preview-iframe"
                    sandbox="allow-same-origin allow-scripts"
                    loading="lazy"
                    height="500px"
                    width="800px"
                  />
                  
                  {/* Option 3: Fallback content */}
                  <div className="preview-fallback">
                    <div className="preview-loading">
                      <div className="loading-spinner"></div>
                    </div>
                  </div>
                </div>

                <div className="preview-footer">
                  <a 
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview-visit-btn"
                  >                  </a>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Events