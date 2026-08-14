import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Products from "./components/Products";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import FloatingActions from "./components/FloatingActions";

export const metadata = {
  title: "Smart Buddy® — Eco-Sanitation & Bio-Digester Solutions | Aarya Technologies, Nashik",
  description: "Smart Buddy® by Aarya Technologies manufactures Electronic Eco Toilets (E2T), DRDO Bio-Digesters, Organic Waste Composters, Napkin Incinerators, PET Reverse Vending Machines & Computer Kiosks. GeM 4.5★ QCI OEM | ISO 9001:2015 | DRDO Licensed | CE Certified.",
  keywords: ["Smart Buddy", "Electronic Eco Toilet", "DRDO Bio Digester", "Organic Waste Composter", "Aarya Technologies", "Nashik", "Sanitary Napkin Incinerator", "PET Reverse Vending", "Computer Kiosk", "GeM OEM", "ISO 9001"],
  openGraph: {
    title: "Smart Buddy® — Clean & Smart India Innovations",
    description: "Pioneering eco-friendly sanitation, waste management and recycling solutions since 2004. Made in India, trusted across India.",
    url: "https://aaryainnovtech.com/",
    siteName: "Smart Buddy® by Aarya Technologies",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Smart Buddy Logo" }],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <FloatingActions />
    </>
  );
}