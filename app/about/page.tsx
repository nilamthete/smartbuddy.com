import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata = {
  title: "About Us | Aarya Technologies - Smart Buddy",
  description: "Learn about Aarya Technologies, manufacturer of Smart Buddy Electronic Eco Toilets, DRDO Bio-Digesters, and Organic Waste Composters with 16+ years experience in Nashik.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-page-main">

        {/* Page Banner */}
        <section className="about-page-hero">
          <div className="container">
            <div className="about-page-badge">
              <span className="badge-dot"></span>
              AARYA TECHNOLOGIES • EST. 2004
            </div>
            <h1>About <span>Aarya Technologies</span></h1>
            <p className="about-page-subtitle">
              Pioneering Eco-Friendly Hygiene Products & Industrial Automation under the brand <strong>SMART BUDDY</strong>.
            </p>
          </div>
        </section>

        {/* Main Content Container */}
        <section className="about-page-content-section">
          <div className="container">

            {/* Overview & Installation Photo */}
            <div className="about-page-grid">
              <div className="about-page-text">
                <p className="section-label">OUR HERITAGE & PROFILE</p>
                <h2>Over 16+ Years of <span>Pioneering Engineering</span></h2>
                
                <p className="lead-paragraph">
                  Established in 2004 in Nashik, Maharashtra, <strong>Aarya Technologies (Aarya Innovtech)</strong> has 
                  established itself as a pioneer in the research, development, and indigenous manufacturing of 
                  special-purpose automated machinery and eco-friendly personal hygiene products under the registered brand <strong>Smart Buddy</strong>.
                </p>

                <p>
                  With leadership holding over <strong>16 years of profound industrial automation and eco-hygiene expertise</strong>, 
                  the company is recognized for introducing several revolutionary special-purpose machines in India for the first time.
                </p>

                <p>
                  We operate on the foundational principles of <strong>Total Quality Management (TQM)</strong>, ensuring that every 
                  system leaving our manufacturing plant in M.I.D.C. Ambad, Nashik is robust, low-maintenance, economically viable, 
                  and 100% compliant with global environmental standards.
                </p>

                <div className="about-page-badges-row">
                  <span className="about-tag">🌿 Est. 2004 (16+ Yrs Exp)</span>
                  <span className="about-tag">🔬 DRDO Bio-Digester Tech</span>
                  <span className="about-tag">🏅 ISO 9001:2015 & CE Certified</span>
                  <span className="about-tag">⚡ GeM QCI 4.5★ Rated OEM</span>
                </div>
              </div>

              <div className="about-page-image-box">
                <img
                  src="/about.jpg"
                  alt="SmartBuddy Electronic Eco Toilet Installation Site"
                  className="about-page-img"
                />
                <div className="image-caption-pill">
                  📍 SmartBuddy Electronic Eco Toilet On-Site Installation
                </div>
              </div>
            </div>

            {/* Vision & Mission Cards */}
            <div className="vision-mission-grid">
              <div className="vm-card">
                <div className="vm-icon">🎯</div>
                <h3>Our Vision</h3>
                <p>
                  To be the foremost provider of indigenous, sustainable, and smart eco-sanitation solutions in India, 
                  empowering Smart Cities, rural communities, and public infrastructure with modern, hygienic, and dignified sanitation.
                </p>
              </div>

              <div className="vm-card">
                <div className="vm-icon">🚀</div>
                <h3>Our Mission</h3>
                <p>
                  To design and manufacture high-reliability, low-maintenance, cost-effective green technologies—from 
                  Electronic Eco Toilets and DRDO Bio-Digesters to Organic Waste Composters—driving the Swachh Bharat mission forward.
                </p>
              </div>

              <div className="vm-card">
                <div className="vm-icon">⭐</div>
                <h3>Quality Policy (TQM)</h3>
                <p>
                  Adhering strictly to ISO 9001:2015 quality frameworks, CE safety compliance, and MPCB guidelines, 
                  delivering certified products recognized with a 4.5+ star rating on the Government e-Marketplace (GeM).
                </p>
              </div>
            </div>

            {/* Core Product Range Section */}
            <div className="about-page-products-block">
              <div className="section-header">
                <p className="section-label">OUR PRODUCT RANGE</p>
                <h2>Comprehensive Eco-Hygiene <span>Innovations</span></h2>
                <p className="section-desc">
                  Explore our indigenously manufactured technologies developed at our Nashik plant.
                </p>
              </div>

              <div className="about-products-grid">
                <div className="about-prod-pill">
                  <span className="prod-icon">🚽</span>
                  <div>
                    <strong>Electronic Eco Toilets (E2T)</strong>
                    <p>Fully automated, self-cleaning public sanitation with coin/RFID access and solar ready integration.</p>
                  </div>
                </div>

                <div className="about-prod-pill">
                  <span className="prod-icon">🔬</span>
                  <div>
                    <strong>DRDO Bio-Digester Systems</strong>
                    <p>Anaerobic microbial inoculum decomposing human waste into clean water & gas without sewer lines.</p>
                  </div>
                </div>

                <div className="about-prod-pill">
                  <span className="prod-icon">♻️</span>
                  <div>
                    <strong>Organic Waste Composters</strong>
                    <p>Decentralized aerobic composting machines converting wet food waste to nutrient manure in 24 hours.</p>
                  </div>
                </div>

                <div className="about-prod-pill">
                  <span className="prod-icon">🧴</span>
                  <div>
                    <strong>Sanitary Pad Incinerators</strong>
                    <p>Instant scientific high-temperature disposal converting used napkins into sterile, odorless ash.</p>
                  </div>
                </div>

                <div className="about-prod-pill">
                  <span className="prod-icon">🥤</span>
                  <div>
                    <strong>Reverse Vending Machines</strong>
                    <p>Automated PET plastic bottle and can shredders encouraging smart recycling in public areas.</p>
                  </div>
                </div>

                <div className="about-prod-pill">
                  <span className="prod-icon">💻</span>
                  <div>
                    <strong>Computer Kiosks & Health ATMs</strong>
                    <p>Interactive public citizen kiosks with integrated digital telemetry health monitoring tools.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Contact CTA Box */}
            <div className="about-cta-box">
              <h3>Have a Project or Public Sanitation Requirement?</h3>
              <p>Connect with our technical team in Nashik for customized specifications, GeM orders, and tenders.</p>
              <div className="about-cta-btns">
                <a href="/#contact" className="hero-btn">Contact Us Today 🚀</a>
                <a href="tel:+919923810197" className="hero-btn-secondary">📞 Call +91 99238 10197</a>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
