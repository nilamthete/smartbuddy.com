"use client";

export default function FloatingActions() {
  return (
    <div className="floating-actions-container">
      {/* WhatsApp Quick Connect */}
      <a
        href="https://wa.me/919923810197?text=Hello%20Smart%20Buddy%2C%20I%20am%20interested%20in%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <span className="float-icon">💬</span>
        <span className="float-text">WhatsApp</span>
      </a>

      {/* Call Direct */}
      <a
        href="tel:+919923810197"
        className="floating-btn floating-call"
        aria-label="Call Direct"
        title="Call +91 99238 10197"
      >
        <span className="float-icon">📞</span>
        <span className="float-text">Call Us</span>
      </a>
    </div>
  );
}
