"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import smartBuddyImg from "../../mywebsite/public/smart_buddy23.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const imgSrc = smartBuddyImg?.src || "/logo.png";

  return (
    <section id="about" ref={ref} className="about-section classic-about">
      <div className="container">

        {/* Top Centered Section Header */}
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ textAlign: "center", marginBottom: "44px" }}
        >
          <p className="section-label">ABOUT US</p>
          <h2 className="classic-about-title" style={{ fontSize: "clamp(34px, 4vw, 44px)", marginTop: "12px", marginBottom: "8px" }}>
            ABOUT <span>SMART BUDDY®</span>
          </h2>
          <p style={{ color: "#64748b", fontSize: "15.5px", fontWeight: "600", maxWidth: "680px", margin: "0 auto" }}>
            Pioneering Eco-Sanitation, Industrial Automation &amp; Waste Management Innovations Since 2004
          </p>
        </motion.div>

        {/* 2-column layout */}
        <div className="classic-about-grid">

          {/* Left: Image Card Container */}
          <motion.div
            className="about-mascot-col"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
          >
            <div className="classic-mascot-wrapper">
              <img
                src={imgSrc}
                alt="Smart Buddy Mascot Logo"
                className="classic-mascot-img"
                onError={(e) => { e.currentTarget.src = "/logo.png"; }}
              />
            </div>
          </motion.div>

          {/* Right: Clean Text Content */}
          <motion.div
            className="about-text-col classic-about-text"
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={1}
          >
            <p>
              SMART BUDDY represent more than a decade of pioneering enterprises headquartered in Nashik, Maharashtra, India.
              We are renowned for introducing Several Special Purpose Machines in India for first time. Our main line of business is
              manufacturing &amp; supply of a comprehensive array of eco-friendly hygiene products.
              The Director of company have considerable experience in industrial automation &amp; hygiene products of 16 years.
              Our products are <strong>ELECTRONIC ECO TOILET, BIO-DIGESTER, ORGANIC WASTE COMPOSTER, VENDING MACHINES,
              REVERSE VENDING MACHINE, SANITARY PAD INCINERATOR &amp; COMPUTER KIOSK</strong>. These are fabricated using
              advanced machines as per the international standards to ensure their reliable functioning.
            </p>

            <p>
              We focus on the quality of the product &amp; render timely service so as to achieve full customers satisfaction.
              Our business is driven by simplistic indigenous technology that is accessible, flexible, low cost &amp; reliable,
              is harvested from our passion of innovation &amp; commitment to research &amp; development.
              We market products for personal hygiene. Our uniqueness is to develop products that address every single requirement
              in most cost effective way. We never compromise on the quality of our products.
            </p>

            <p>
              SMART BUDDY is specialized in research &amp; development that focus mainly on manufacturing wide range of eco-friendly
              hygienic products with international quality. The company is strong believer in <strong>Total Quality Management,
              Customer Focus &amp; Team Work</strong>, which led to its products having won several awards.
              We are certified with <strong>ISO 9001:2015, CE &amp; MPCB</strong> also having brand name with registered
              trade mark <strong>&apos;SMART BUDDY&apos; &amp; E T (ELECTRONIC ECO TOILET)</strong>.
            </p>

            {/* GeM Alert Box */}
            <div className="about-gem-card">
              <span className="gem-star">🎖️</span>
              <p>
                SMART BUDDY is authorized OEM approved by <strong>Quality Council of India (QCI)</strong> on
                Government e-Marketplace (GeM) portal with ratings of <strong>4.5+</strong>.
              </p>
            </div>

            <div className="about-tags" style={{ margin: "24px 0" }}>
              <span className="about-tag">🌿 Est. 2004</span>
              <span className="about-tag">🔬 DRDO Licensed</span>
              <span className="about-tag">🏅 ISO 9001:2015</span>
              <span className="about-tag">⚡ GeM 4.5★ OEM</span>
              <span className="about-tag">🇮🇳 Make in India</span>
            </div>

            <a
              href="https://aaryainnovtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="about-visit-btn"
            >
              Visit Aarya Innovtech — Our Company Website ↗
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}