"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        {/* Brand Column */}
        <div className="footer-brand-col">
          <div className="footer-logo">
            <img
              src="/logo.png"
              alt="Smart Buddy Logo"
              className="footer-logo-img"
              onError={(e) => { e.currentTarget.src = "/smartbuddy-logo.svg"; }}
            />
          </div>
          <p className="footer-tagline">
            Empowering Clean &amp; Smart India with eco-friendly sanitation, waste management and recycling innovations since 2004.
          </p>
          <a
            href="https://aaryainnovtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-main-link"
          >
            🌐 Visit Aarya Innovtech — Our Company Website ↗
          </a>
          <div className="footer-social-row">
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer" aria-label="Website">🌐</a>
            <a href="mailto:info@aaryainnovtech.com" aria-label="Email">✉️</a>
            <a href="tel:+919923810197" aria-label="Phone">📞</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="/#home">Home</a>
            <a href="/about">About Us</a>
            <a href="/#products">Products</a>
            <a href="/#certifications">Certifications</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>

        {/* Products */}
        <div className="footer-col">
          <h4>Smart Buddy Products</h4>
          <div className="footer-links">
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer">🚽 E2T Eco Toilets</a>
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer">🔬 DRDO Bio-Digesters</a>
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer">♻️ Organic Composters</a>
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer">🧴 Napkin Incinerators</a>
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer">🥤 PET Vending RVM</a>
            <a href="https://aaryainnovtech.com/" target="_blank" rel="noopener noreferrer">🖥️ Computer Kiosks</a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p className="footer-contact-item">📍 Works: D104/1, M.I.D.C. Ambad, Nashik — 422010</p>
          <p className="footer-contact-item">🏢 Office: Panchavati, Nashik — 422003</p>
          <p className="footer-contact-item">
            📞 <a href="tel:+919923810197">+91 99238 10197</a> / <a href="tel:+918806796868">+91 88067 96868</a>
          </p>
          <p className="footer-contact-item">
            ✉️ <a href="mailto:info@aaryainnovtech.com">info@aaryainnovtech.com</a>
          </p>
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
          <p>© {new Date().getFullYear()} Aarya Innovtech Pvt. Ltd. — Brand: SMART BUDDY®. All Rights Reserved.</p>
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