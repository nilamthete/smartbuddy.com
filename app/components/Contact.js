"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="contact-section dark-section">
      <div className="container contact-container">

        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-label">GET IN TOUCH</p>
          <h2>Contact <span>Aarya Innovtech &amp; Smart Buddy®</span></h2>
          <p className="section-desc">
            Connect with our technical team for custom sanitation, waste management, and bio-digester requirements.
          </p>
        </motion.div>

        <div className="contact-layout-wrapper">

          {/* Left: 2x2 Grid of 4 Info Cards */}
          <motion.div
            className="contact-cards-grid"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            {/* Card 1: CALL US */}
            <div className="aarya-contact-card">
              <div className="aarya-card-icon">📞</div>
              <div className="aarya-card-content">
                <span className="aarya-card-title">CALL US</span>
                <p className="aarya-card-text">
                  <a href="tel:+918806796868">+91 88067 96868</a> / <a href="tel:+919923810197">+91 9923810197</a>
                </p>
              </div>
            </div>

            {/* Card 2: EMAIL US */}
            <div className="aarya-contact-card">
              <div className="aarya-card-icon">✉️</div>
              <div className="aarya-card-content">
                <span className="aarya-card-title">EMAIL US</span>
                <p className="aarya-card-text">
                  <a href="mailto:sales@aaryainnovtech.com">sales@aaryainnovtech.com</a> / <a href="mailto:info@aaryainnovtech.com">info@aaryainnovtech.com</a>
                </p>
              </div>
            </div>

            {/* Card 3: REGD. OFFICE */}
            <div className="aarya-contact-card">
              <div className="aarya-card-icon">📍</div>
              <div className="aarya-card-content">
                <span className="aarya-card-title">REGD. OFFICE</span>
                <p className="aarya-card-text">
                  4A, Sayali Darshan A, Radha Nagar, Makhamalabad Road, Panchavati, Nashik - 422003
                </p>
              </div>
            </div>

            {/* Card 4: FACTORY */}
            <div className="aarya-contact-card">
              <div className="aarya-card-icon">🏭</div>
              <div className="aarya-card-content">
                <span className="aarya-card-title">FACTORY</span>
                <p className="aarya-card-text">
                  S-27, Near Emerson, Ambad MIDC, Nashik, Maharashtra - 422010
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Clean Form Box */}
          <motion.form
            className="aarya-form-card"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            onSubmit={(e) => {
              e.preventDefault();
              alert("✅ Thank you! Your enquiry has been sent successfully. Our team will respond shortly.");
            }}
          >
            <div className="aarya-form-fields">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" placeholder="sales@yourcompany.com" required />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="form-group">
                <label>Your Enquiry / Requirements *</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project or product inquiry..."
                  required
                />
              </div>
            </div>

            <motion.button
              type="submit"
              className="aarya-send-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send enquiry &rarr;
            </motion.button>

            <p className="aarya-privacy-note">
              🛡️ Your details are used only to respond to your enquiry.
            </p>
          </motion.form>

        </div>

      </div>
    </section>
  );
}