"use client";

import { useState, useEffect } from "react";
import navLogo from "../../mywebsite/public/logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#why-us", label: "Why Smart Buddy" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const logoSrc = navLogo?.src || "/logo.png";

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      {/* Main Navbar */}
      <div className="header-nav">
        <a href="#home" className="logo" aria-label="Smart Buddy Home">
          <div className="logo-badge">
            <img
              src={logoSrc}
              alt="Smart Buddy Official Brand Logo"
              onError={(e) => { e.currentTarget.src = "/logo.png"; }}
            />
          </div>
          <div className="logo-text">
            <span className="brand-main">AARYA TECHNOLOGIES</span>
            <span className="brand-sub">Brand: SMART BUDDY®</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a
            href="https://aaryainnovtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
          >
            Main Website ↗
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://aaryainnovtech.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-cta-btn"
            onClick={() => setIsMenuOpen(false)}
          >
            Main Website ↗
          </a>
        </div>
      )}
    </header>
  );
}