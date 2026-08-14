export default function Services() {
  const services = [
    {
      icon: "🌱",
      title: "Sustainable Energy Solutions",
      desc: "Smart, eco-conscious clean energy architectures designed to reduce environmental impact and maximize performance."
    },
    {
      icon: "⚡",
      title: "Smart Digital Automation",
      desc: "Modern automated digital workflows and IoT systems engineered to make business operations smarter and faster."
    },
    {
      icon: "💡",
      title: "Innovative Product Engineering",
      desc: "Future-ready hardware and software engineering delivering high reliability and practical sustainability."
    },
    {
      icon: "♻️",
      title: "Resource & Waste Optimization",
      desc: "Data-driven optimization systems that minimize resource wastage and accelerate carbon-neutral goals."
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">

        <div className="section-header">
          <p className="section-label">OUR SOLUTIONS</p>
          <h2>
            Pioneering Smart & <span>Sustainable Technology</span>
          </h2>
          <p className="section-desc">
            We engineer high-impact solutions that empower businesses to operate cleanly, efficiently, and sustainably.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-box">{srv.icon}</div>
              <h3>{srv.title}</h3>
              <p>{srv.desc}</p>
              <a href="#contact" className="service-link">
                Learn More →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
