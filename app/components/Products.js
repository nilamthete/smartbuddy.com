"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const products = [
  {
    icon: "🚽",
    title: "Electronic Eco Toilets (E2T)",
    desc: "Auto-cleaning, sensor-operated ECO toilets for highways, smart cities, malls & public spaces. DRDO-approved, water-efficient & self-sustaining.",
    tag: "Smart Buddy E2T",
    link: "https://aaryainnovtech.com/",
  },
  {
    icon: "🔬",
    title: "DRDO Anaerobic Bio-Digesters",
    desc: "DRDO-licensed microbial bio-digester tanks that break down waste naturally. Zero maintenance, 100% eco-friendly for municipalities & campuses.",
    tag: "Smart Buddy Bio-Digester",
    link: "https://aaryainnovtech.com/",
  },
  {
    icon: "♻️",
    title: "Organic Waste Composters (OWC)",
    desc: "24-hour fully automatic organic composters converting kitchen & wet waste into nutrient-rich compost — ideal for hotels, hospitals & institutions.",
    tag: "Smart Buddy OWC",
    link: "https://aaryainnovtech.com/",
  },
  {
    icon: "🧴",
    title: "Sanitary Napkin Incinerators",
    desc: "Smokeless, odourless, hygienic napkin incinerators designed for schools, colleges & offices. ISO-certified for safe & effective disposal.",
    tag: "Smart Buddy Incinerator",
    link: "https://aaryainnovtech.com/",
  },
  {
    icon: "🥤",
    title: "PET Reverse Vending Machines",
    desc: "Smart PET bottle collectors that accept, crush & reward users. Turning recycling into an incentive for Swachh Bharat and smart cities.",
    tag: "Smart Buddy RVM",
    link: "https://aaryainnovtech.com/",
  },
  {
    icon: "🖥️",
    title: "Computer Kiosks & Vending",
    desc: "Ruggedised outdoor computer kiosks, ration vending machines & ATM-style service kiosks for digital India deployments at government offices.",
    tag: "Smart Buddy Kiosk",
    link: "https://aaryainnovtech.com/",
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" ref={ref} className="products-section">
      <div className="hero-orb products-orb-1" />
      <div className="hero-orb products-orb-2" />

      <div className="container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <p className="section-label">OUR PRODUCTS</p>
          <h2>Smart Buddy <span>Product Range</span></h2>
          <p className="section-desc">
            Six certified product lines — engineered in Nashik, Maharashtra — delivering clean India solutions for sanitation, waste management and recycling.
          </p>
        </motion.div>

        <div className="products-grid">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              className="product-card"
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 22px 50px rgba(5, 150, 105, 0.18)",
                borderColor: "#10b981",
                transition: { duration: 0.25, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="product-card-icon"
                whileHover={{ scale: 1.2, rotate: 10, transition: { type: "spring", stiffness: 300 } }}
              >
                {p.icon}
              </motion.div>

              <div className="product-card-tag">{p.tag}</div>
              <h3 className="product-card-title">{p.title}</h3>
              <p className="product-card-desc">{p.desc}</p>

              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Inquire Product ↗
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
