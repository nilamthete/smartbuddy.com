"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const headerVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.94 },
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

const credentials = [
  {
    icon: "🎖️",
    badge: "GeM 4.5★ Rated",
    title: "QCI Approved OEM",
    desc: "Authorized manufacturer approved by Quality Council of India on the Government e-Marketplace (GeM) with 4.5+ star customer ratings.",
  },
  {
    icon: "🔬",
    badge: "DRDO Licensed",
    title: "Anaerobic Bio-Digesters",
    desc: "DRDO-certified microbial bio-digester technology converting human waste into eco-friendly reusable water & bio-gas naturally.",
  },
  {
    icon: "🏅",
    badge: "ISO 9001:2015 & CE",
    title: "Total Quality Management",
    desc: "Certified with ISO 9001:2015, CE European Safety Standards and MPCB compliance across all manufacturing lines.",
  },
  {
    icon: "🏭",
    badge: "Make In India",
    title: "Nashik Manufacturing Plant",
    desc: "State-of-the-art facility at M.I.D.C. Ambad, Nashik — delivering custom automation, robust engineering and nationwide service.",
  },
];

const highlights = [
  { icon: "🌿", num: "16+", label: "Years Engineering Experience" },
  { icon: "⚡", num: "4.5★", label: "GeM QCI Rated OEM" },
  { icon: "🔬", num: "DRDO", label: "Licensed Bio-Digester Tech" },
  { icon: "🇮🇳", num: "100%", label: "Indigenous Nashik Plant" },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" ref={ref} className="why-us-section">
      <div className="hero-orb why-orb-1" />
      <div className="hero-orb why-orb-2" />

      <div className="container">
        {/* Section Header Animation */}
        <motion.div
          className="section-header"
          variants={headerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p 
            className="section-label"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            WHY SMART BUDDY®
          </motion.p>
          <h2>Pillars of Quality &amp; <span>National Trust</span></h2>
          <p className="section-desc">
            With over 16 years of engineering excellence, SMART BUDDY® by Aarya Technologies is trusted by Smart Cities, Municipal Corporations, Defense Establishments &amp; Highway Authorities across India.
          </p>
        </motion.div>

        {/* Staggered Cards Grid */}
        <motion.div
          className="why-grid"
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {credentials.map((item) => (
            <motion.div
              key={item.title}
              className="why-card"
              variants={cardVariant}
              whileHover="hover"
              initial="rest"
              animate={inView ? "visible" : "hidden"}
            >
              <div className="why-card-top">
                <motion.span className="why-card-icon" variants={iconHover}>
                  {item.icon}
                </motion.span>
                <span className="why-card-badge">{item.badge}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quick Highlight Counter Bar */}
        <motion.div 
          className="why-highlights-bar"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {highlights.map((h) => (
            <motion.div 
              key={h.label} 
              className="why-hl-chip"
              whileHover={{ scale: 1.05, translateY: -3 }}
            >
              <span className="why-hl-icon">{h.icon}</span>
              <div>
                <strong className="why-hl-num">{h.num}</strong>
                <span className="why-hl-text">{h.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

