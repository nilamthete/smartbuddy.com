"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.65, ease: "easeOut" },
  }),
};

const floatAnim = {
  animate: {
    y: [0, -14, 0],
    transition: { repeat: Infinity, duration: 3.5, ease: "easeInOut" },
  },
};

const products = [
  { icon: "🚽", label: "Auto-Clean E2T Toilets" },
  { icon: "🔬", label: "DRDO Bio-Digesters" },
  { icon: "♻️", label: "Organic Composters" },
  { icon: "🧴", label: "Napkin Incinerators" },
  { icon: "🥤", label: "PET Reverse Vending" },
  { icon: "🖥️", label: "Computer Kiosks" },
];

const stats = [
  { icon: "🎖️", num: "GeM 4.5★", label: "QCI Approved OEM" },
  { icon: "🌿", num: "16+", label: "Years of Excellence" },
  { icon: "🔬", num: "DRDO", label: "Bio-Digester Tech" },
  { icon: "🏅", num: "ISO & CE", label: "9001:2015 Certified" },
];

export default function Hero() {
  const [count, setCount] = useState({ years: 0, projects: 0, clients: 0 });

  useEffect(() => {
    const targets = { years: 16, projects: 500, clients: 200 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCount({
        years: Math.floor(targets.years * progress),
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero hero-emerald-glass">
      {/* Animated Glass Orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      <div className="container hero-content">

        {/* Left: Text */}
        <div className="hero-text">
          <motion.div
            className="small-title-badge"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="badge-dot" />
            SMART BUDDY® — CLEAN &amp; SMART INDIA INNOVATIONS
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            India's Pioneer in{" "}
            <span className="hero-highlight">Smart Eco-Sanitation</span>{" "}
            &amp; Bio-Digesters
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Manufactured by <strong>Aarya Technologies, Nashik, Maharashtra</strong> —
            <strong> SMART BUDDY®</strong> delivers DRDO-licensed Electronic Eco Toilets (E2T),
            Anaerobic Bio-Digesters, Organic Waste Composters (OWC), Sanitary Napkin Incinerators,
            PET Reverse Vending Machines &amp; Computer Kiosks across India.
          </motion.p>

          {/* Product Chips */}
          <motion.div
            className="hero-product-tags"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {products.map((p) => (
              <span key={p.label} className="hero-tag">
                {p.icon} {p.label}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero-actions"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a href="#contact" className="hero-btn">
              Get a Quote 🚀
            </a>
            <a
              href="https://aaryainnovtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-secondary"
            >
              Main Website ↗
            </a>
          </motion.div>

          {/* Stat Chips */}
          <motion.div
            className="hero-stats"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            {stats.map((s) => (
              <div key={s.label} className="stat-item">
                <span className="stat-num">{s.icon} {s.num}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: Floating Image */}
        <motion.div
          className="hero-image"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          <motion.div animate={floatAnim.animate}>
            <img
              src="/logo.png"
              alt="Smart Buddy Official Mascot"
              className="hero-main-img"
              onError={(e) => { e.currentTarget.src = "/smartbuddy-logo.svg"; }}
            />
          </motion.div>

          {/* Animated Badges */}
          <motion.div
            className="hero-floating-badge badge-top-right"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            🎖️ GeM Rated 4.5★
          </motion.div>
          <motion.div
            className="hero-floating-badge badge-bottom-left"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            🔬 DRDO Certified
          </motion.div>
        </motion.div>

      </div>

      {/* Animated Counters */}
      <motion.div
        className="hero-counters container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
      >
        <div className="counter-item">
          <span className="counter-num">{count.years}+</span>
          <span className="counter-label">Years of Innovation</span>
        </div>
        <div className="counter-divider" />
        <div className="counter-item">
          <span className="counter-num">{count.projects}+</span>
          <span className="counter-label">Projects Delivered</span>
        </div>
        <div className="counter-divider" />
        <div className="counter-item">
          <span className="counter-num">{count.clients}+</span>
          <span className="counter-label">Happy Clients</span>
        </div>
        <div className="counter-divider" />
        <div className="counter-item">
          <span className="counter-num">6+</span>
          <span className="counter-label">Product Categories</span>
        </div>
      </motion.div>
    </section>
  );
}