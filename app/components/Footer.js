"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Thin Lime Green / Teal Accent Top Line */}
      <div className="footer-accent-top-line" />

      <div className="container footer-grid">

        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <img
              src="/logo.png"
              alt="Aarya Innovtech Logo"
              className="footer-logo-img"
              onError={(e) => { e.currentTarget.src = "/smartbuddy-logo.svg"; }}
            />
          </div>
          <p className="footer-tagline">
            Redefining public hygiene infrastructure with engineered Aarya Innovtech solutions for sanitation, waste management, recycling, and digital utility access.
          </p>
          <p className="footer-motto">
            INNOVATE. INTEGRATE. ELEVATE.
          </p>
          <div className="footer-follow-box">
            <span className="follow-title">FOLLOW US</span>
            <div className="footer-social-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-circle">in</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-circle">📷</a>
            </div>
          </div>
        </div>

        {/* Column 2: EXPLORE */}
        <div className="footer-col">
          <h4>EXPLORE</h4>
          <div className="footer-links">
            <a href="/#home">&rsaquo; Home</a>
            <a href="/about">&rsaquo; About Us</a>
            <a href="/#products">&rsaquo; Products</a>
            <a href="/#certifications">&rsaquo; Certifications</a>
            <a href="/#why-us">&rsaquo; Why Smart Buddy</a>
            <a href="/#contact">&rsaquo; Contact</a>
          </div>
        </div>

        {/* Column 3: PRODUCTS */}
        <div className="footer-col">
          <h4>PRODUCTS</h4>
          <div className="footer-links">
            <a href="/#products">&rsaquo; Electronic ECO Toilet</a>
            <a href="/#products">&rsaquo; Bio Digester</a>
            <a href="/#products">&rsaquo; Organic Waste Composter</a>
            <a href="/#products">&rsaquo; PET Bottle Shredder</a>
            <a href="/#products">&rsaquo; Computer Kiosk</a>
            <a href="/#products">&rsaquo; Vending Machines</a>
          </div>
        </div>

        {/* Column 4: GET IN TOUCH */}
        <div className="footer-col footer-get-in-touch">
          <h4>GET IN TOUCH</h4>
          <div className="aarya-touch-item">
            <div className="touch-icon-circle">📞</div>
            <div>
              <p className="touch-bold">
                <a href="tel:+918806796868">+91 88067 96868</a> / <a href="tel:+919923810197">+91 9923810197</a>
              </p>
              <span className="touch-sub">Mon - Sat: 10:00 AM - 06:00 PM</span>
            </div>
          </div>

          <div className="aarya-touch-item">
            <div className="touch-icon-circle">✉️</div>
            <div>
              <p className="touch-bold">
                <a href="mailto:sales@aaryainnovtech.com">sales@aaryainnovtech.com</a>
              </p>
            </div>
          </div>

          <div className="aarya-touch-item">
            <div className="touch-icon-circle">📍</div>
            <div>
              <span className="touch-label-title">Nashik Office</span>
              <p className="touch-sub-address">
                Flat No. 4A, Sayali Darshan A Wing, Panchavati, Nashik - 422003
              </p>
            </div>
          </div>

          <div className="aarya-touch-item">
            <div className="touch-icon-circle">🏭</div>
            <div>
              <span className="touch-label-title">Factory</span>
              <p className="touch-sub-address">
                S-27, Near Emerson, Ambad MIDC, Nashik, Maharashtra - 422010
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Certifications Strip */}
      <div className="footer-cert-strip">
        <div className="container footer-cert-inner">
          <span className="cert-chip">🎖️ GeM 4.5★ QCI OEM</span>
          <span className="cert-chip">🏅 ISO 9001:2015</span>
          <span className="cert-chip">⚙️ CE Certified</span>
          <span className="cert-chip">🌿 MPCB Compliant</span>
          <span className="cert-chip">🔬 DRDO Licensed</span>
          <span className="cert-chip">® Registered Trademark</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Copyright Aarya Innovtech Pvt. Ltd. All Rights Reserved.</p>
          <p className="footer-bottom-right">
            Made with 💙 in Nashik, Maharashtra, India |{" "}
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer">
              www.aaryainnovtech.com ↗
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}