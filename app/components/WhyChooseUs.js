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

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="why-us" ref={ref} className="why-us-section">
      <div className="hero-orb why-orb-1" />
      <div className="hero-orb why-orb-2" />

      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-label">WHY SMART BUDDY®</p>
          <h2>Pillars of Quality &amp; <span>National Trust</span></h2>
          <p className="section-desc">
            With over 16 years of engineering excellence, SMART BUDDY® by Aarya Technologies is trusted by Smart Cities, Municipal Corporations, Defense Establishments &amp; Highway Authorities across India.
          </p>
        </motion.div>

        <div className="why-grid">
          {credentials.map((item, idx) => (
            <motion.div
              key={item.title}
              className="why-card"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={idx * 0.4}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="why-card-top">
                <span className="why-card-icon">{item.icon}</span>
                <span className="why-card-badge">{item.badge}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
