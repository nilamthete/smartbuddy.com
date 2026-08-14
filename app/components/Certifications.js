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

const certs = [
  { icon: "🎖️", title: "GeM 4.5★ Rated OEM", body: "Quality Council of India (QCI) approved OEM on Government e-Marketplace (GeM) portal with an outstanding rating of 4.5+.", color: "cert-blue" },
  { icon: "🏅", title: "ISO 9001:2015 Certified", body: "International Standard Organization certification for Quality Management Systems — ensuring consistent product quality and customer satisfaction.", color: "cert-green" },
  { icon: "⚙️", title: "CE Marked Products", body: "European Conformity (CE) marking on Electronic Eco Toilets and bio-digesters, meeting EU safety, health and environmental standards.", color: "cert-teal" },
  { icon: "🌿", title: "MPCB Compliant", body: "Maharashtra Pollution Control Board compliant across all manufacturing processes and products — zero environmental compromise.", color: "cert-emerald" },
  { icon: "🔬", title: "DRDO Licensed Tech", body: "DRDO (Defence Research and Development Organisation) licensed anaerobic microbial bio-digester technology deployed since 2004.", color: "cert-sky" },
  { icon: "®", title: "Registered Trademark", body: "SMART BUDDY® and E T (Electronic Eco Toilet) are registered trade marks with the Government of India Intellectual Property Office.", color: "cert-indigo" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="certifications" ref={ref} className="certs-section">
      <div className="hero-orb certs-orb-1" />
      <div className="container">

        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-label">TRUSTED & CERTIFIED</p>
          <h2>Certifications &amp; <span>Credentials</span></h2>
          <p className="section-desc">
            Every Smart Buddy product is backed by internationally recognised certifications and government-approved quality standards.
          </p>
        </motion.div>

        <div className="certs-grid">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              className={`cert-card ${c.color}`}
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i * 0.5}
              whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
            >
              <div className="cert-icon">{c.icon}</div>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-body">{c.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
