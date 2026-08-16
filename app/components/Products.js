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
      staggerChildren: 0.16,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 110, rotateX: 35, scale: 0.72 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 14,
      mass: 0.9,
    },
  },
};

const iconHover = {
  rest: { scale: 1, rotate: 0, y: 0 },
  hover: {
    scale: 1.5,
    rotate: [0, -25, 25, -12, 12, 0],
    y: -14,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const products = [
  {
    num: "01",
    icon: "🚽",
    title: "Electronic Eco Toilets (E2T)",
    desc: "Auto-cleaning, sensor-operated ECO toilets for highways, smart cities, malls & public spaces. DRDO-approved, water-efficient & self-sustaining.",
    tag: "Smart Buddy E2T",
    specs: ["DRDO Tech Approved", "Auto Flush & Wash", "Solar & Water Efficient"],
    link: "https://aaryainnovtech.com/",
  },
  {
    num: "02",
    icon: "🔬",
    title: "DRDO Anaerobic Bio-Digesters",
    desc: "DRDO-licensed microbial bio-digester tanks that break down waste naturally. Zero maintenance, 100% eco-friendly for municipalities & campuses.",
    tag: "Smart Buddy Bio-Digester",
    specs: ["Microbial Inoculum", "Zero Maintenance", "100% Eco-Friendly"],
    link: "https://aaryainnovtech.com/",
  },
  {
    num: "03",
    icon: "♻️",
    title: "Organic Waste Composters (OWC)",
    desc: "24-hour fully automatic organic composters converting kitchen & wet waste into nutrient-rich compost — ideal for hotels, hospitals & institutions.",
    tag: "Smart Buddy OWC",
    specs: ["24-Hour Composting", "Fully Automatic", "Odourless & Clean"],
    link: "https://aaryainnovtech.com/",
  },
  {
    num: "04",
    icon: "🧴",
    title: "Sanitary Napkin Incinerators",
    desc: "Smokeless, odourless, hygienic napkin incinerators designed for schools, colleges & offices. ISO-certified for safe & effective disposal.",
    tag: "Smart Buddy Incinerator",
    specs: ["Smokeless Burn", "ISO Certified Safe", "High Capacity Ash Tray"],
    link: "https://aaryainnovtech.com/",
  },
  {
    num: "05",
    icon: "🥤",
    title: "PET Reverse Vending Machines",
    desc: "Smart PET bottle collectors that accept, crush & reward users. Turning recycling into an incentive for Swachh Bharat and smart cities.",
    tag: "Smart Buddy RVM",
    specs: ["Instant Crush Tech", "User Reward Points", "IoT Connected Screen"],
    link: "https://aaryainnovtech.com/",
  },
  {
    num: "06",
    icon: "🖥️",
    title: "Computer Kiosks & Vending",
    desc: "Ruggedised outdoor computer kiosks, ration vending machines & ATM-style service kiosks for digital India deployments at government offices.",
    tag: "Smart Buddy Kiosk",
    specs: ["Outdoor Weatherproof", "Touchscreen Display", "Cash/Ration Dispenser"],
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
            OUR PRODUCTS
          </motion.p>
          <h2>Smart Buddy <span>Product Range</span></h2>
          <p className="section-desc">
            Six certified product lines — engineered in Nashik, Maharashtra — delivering clean India solutions for sanitation, waste management and recycling.
          </p>
        </motion.div>

        <motion.div 
          className="products-grid"
          variants={containerVariant}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              className="product-card"
              variants={cardVariant}
              whileHover="hover"
              initial="rest"
              animate={inView ? "visible" : "hidden"}
              whileTap={{ scale: 0.98 }}
            >
              <div className="product-card-top-row">
                <motion.div
                  className="product-card-icon"
                  variants={iconHover}
                >
                  {p.icon}
                </motion.div>
                <span className="product-num-badge">{p.num}</span>
              </div>

              <div className="product-card-tag">{p.tag}</div>
              <h3 className="product-card-title">{p.title}</h3>
              <p className="product-card-desc">{p.desc}</p>

              <ul className="product-specs-list">
                {p.specs.map((spec, i) => (
                  <li key={i}>
                    <span className="spec-check">✓</span> {spec}
                  </li>
                ))}
              </ul>

              <motion.a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="product-card-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Inquire Product ↗
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

