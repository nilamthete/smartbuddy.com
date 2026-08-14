"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: "easeOut" },
  }),
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="contact-section dark-section">
      <div className="hero-orb contact-orb-1" />
      <div className="hero-orb contact-orb-2" />
      <div className="container contact-container">

        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-label">GET IN TOUCH</p>
          <h2>Contact <span>Smart Buddy</span></h2>
          <p className="section-desc">
            Ready to transform your sanitation and waste management? Talk to our team today.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* Left: Info Cards */}
          <motion.div
            className="contact-info-col"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <div className="contact-info-card">
              <div className="contact-icon-wrap">📍</div>
              <div>
                <h4>Factory / Works</h4>
                <p>D104/1, M.I.D.C. Ambad,<br />Nashik — 422010, Maharashtra</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">🏢</div>
              <div>
                <h4>Registered Office</h4>
                <p>Panchavati, Nashik — 422003,<br />Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">📞</div>
              <div>
                <h4>Phone / Mobile</h4>
                <p>
                  <a href="tel:+919923810197">+91 99238 10197</a><br />
                  <a href="tel:+918806796868">+91 88067 96868</a>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">✉️</div>
              <div>
                <h4>Email</h4>
                <p>
                  <a href="mailto:info@aaryainnovtech.com">info@aaryainnovtech.com</a><br />
                  <a href="mailto:aryaprotech@gmail.com">aryaprotech@gmail.com</a>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">🌐</div>
              <div>
                <h4>Main Website</h4>
                <p>
                  <a
                    href="https://aaryainnovtech.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    www.aaryainnovtech.com ↗
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            className="contact-form-glass"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={2}
            onSubmit={(e) => {
              e.preventDefault();
              alert("✅ Thank you! Your message has been received. Our team will respond within 24 hours.");
            }}
          >
            <h3>Send Us a Message</h3>
            <p className="form-sub">We usually respond within 24 business hours.</p>

            <div className="form-row">
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" placeholder="Your full name" required />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
              <div className="form-group">
                <label>Organisation</label>
                <input type="text" placeholder="Company / Institution" />
              </div>
            </div>

            <div className="form-group">
              <label>Product Interest</label>
              <select>
                <option value="">Select a Smart Buddy product...</option>
                <option>Electronic Eco Toilet (E2T)</option>
                <option>DRDO Bio-Digester</option>
                <option>Organic Waste Composter (OWC)</option>
                <option>Sanitary Napkin Incinerator</option>
                <option>PET Reverse Vending Machine</option>
                <option>Computer Kiosk</option>
                <option>Other / Multiple Products</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                rows={4}
                placeholder="Describe your requirement, project location, quantity needed..."
                required
              />
            </div>

            <motion.button
              type="submit"
              className="contact-submit-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Send Enquiry 🚀
            </motion.button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}