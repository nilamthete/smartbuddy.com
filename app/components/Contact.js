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
        
        <div className="contact-layout-wrapper">

          {/* Left Column: Inquiry Header + Badges + 4 Info Cards */}
          <motion.div
            className="contact-left-col"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <p className="contact-section-badge">✉ INQUIRY FORM</p>
            <h2 className="contact-main-heading">Send your enquiry.</h2>
            <p className="contact-main-desc">
              Share your enquiry for Electronic ECO Toilet, Bio-Digester, Organic Waste Composter, PET Bottle Shredder, Computer Kiosk, Vending Machines.
            </p>

            {/* 3 Pill Badges */}
            <div className="contact-feature-pills">
              <span className="contact-pill"><span className="pill-check">✓</span> OEM since 2010</span>
              <span className="contact-pill">🔧 Hygiene-sector product range</span>
              <span className="contact-pill">🌐 Installed across India</span>
            </div>

            {/* 2x2 Grid of 4 Info Cards */}
            <div className="contact-cards-grid">
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
                    <a href="mailto:sales@aaryainnovtech.com">sales@aaryainnovtech.com</a>
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
                    S 27, Near Emerson, Ambad MIDC, Nashik, Maharashtra - 422010
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean White Form Box */}
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
            <div className="form-card-header">
              <span className="form-badge">PRODUCT ENQUIRY</span>
              <h3 className="form-title">Send enquiry.</h3>
              <p className="form-desc">
                Share a few details and our team will guide you toward the right product.
              </p>
            </div>

            <div className="aarya-form-fields">
              <div className="form-row-2col">
                <div className="form-group">
                  <label>YOUR NAME</label>
                  <input type="text" placeholder="Full name" required />
                </div>
                <div className="form-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" placeholder="+91" required />
                </div>
              </div>

              <div className="form-group">
                <label>HOW CAN WE HELP?</label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you need"
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