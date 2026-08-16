"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const headerVariant = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 45, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 110,
      damping: 14,
    },
  },
};

const iconHover = {
  rest: { scale: 1, rotate: 0 },
  hover: { scale: 1.25, rotate: [0, -8, 8, -4, 0], transition: { duration: 0.4 } },
};

const certs = [
  {
    icon: "🎖️",
    title: "GeM 4.5★ Rated OEM",
    badge: "GOVT PORTAL OEM",
    body: "Quality Council of India (QCI) approved OEM on Government e-Marketplace (GeM) portal with an outstanding rating of 4.5+.",
    specs: ["QCI Rating 4.5+", "Official Portal Vendor", "Trusted Govt. Supplier"],
    color: "cert-blue"
  },
  {
    icon: "🏅",
    title: "ISO 9001:2015 Certified",
    badge: "ISO COMPLIANT",
    body: "International Standard Organization certification for Quality Management Systems — ensuring consistent product quality and customer satisfaction.",
    specs: ["Quality Management", "Audited Processes", "Global Standard"],
    color: "cert-green"
  },
  {
    icon: "⚙️",
    title: "CE Marked Products",
    badge: "EUROPEAN SAFETY",
    body: "European Conformity (CE) marking on Electronic Eco Toilets and bio-digesters, meeting EU safety, health and environmental standards.",
    specs: ["EU Safety Certified", "Eco & Health Safe", "International Mark"],
    color: "cert-teal"
  },
  {
    icon: "🌿",
    title: "MPCB Compliant",
    badge: "POLLUTION BOARD",
    body: "Maharashtra Pollution Control Board compliant across all manufacturing processes and products — zero environmental compromise.",
    specs: ["Zero Harmful Waste", "State Pollution Audit", "Eco Sanitation"],
    color: "cert-emerald"
  },
  {
    icon: "🔬",
    title: "DRDO Licensed Tech",
    badge: "DEFENCE LICENSED",
    body: "DRDO (Defence Research and Development Organisation) licensed anaerobic microbial bio-digester technology deployed since 2004.",
    specs: ["Microbial Digestion", "DRDO Transfer Tech", "High Efficiency"],
    color: "cert-sky"
  },
  {
    icon: "®",
    title: "Registered Trademark",
    badge: "GOVT TM OFFICE",
    body: "SMART BUDDY® and E T (Electronic Eco Toilet) are registered trade marks with the Government of India Intellectual Property Office.",
    specs: ["Official Reg. Mark", "Intellectual Property", "Authentic Brand"],
    color: "cert-indigo"
  },
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
          variants={headerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p 
            className="section-label"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            TRUSTED &amp; CERTIFIED
          </motion.p>
          <h2>Certifications &amp; <span>Credentials</span></h2>
          <p className="section-desc">
            Every Smart Buddy product is backed by internationally recognised certifications and government-approved quality standards.
          </p>
        </motion.div>

        <motion.div 
          className="certs-grid"
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certs.map((c) => (
            <motion.div
              key={c.title}
              className={`cert-card ${c.color}`}
              variants={cardVariant}
              whileHover="hover"
              initial="rest"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="cert-card-top-row">
                <motion.div className="cert-icon" variants={iconHover}>{c.icon}</motion.div>
                <span className="cert-badge">{c.badge}</span>
              </div>
              <h3 className="cert-title">{c.title}</h3>
              <p className="cert-body">{c.body}</p>

              <ul className="cert-specs-list">
                {c.specs.map((spec, i) => (
                  <li key={i}>
                    <span className="spec-check">✓</span> {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

