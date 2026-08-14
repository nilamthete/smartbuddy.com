import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Buddy® — Eco-Sanitation & Bio-Digester Solutions | Aarya Technologies, Nashik",
  description: "Smart Buddy® by Aarya Technologies manufactures Electronic Eco Toilets (E2T), DRDO Bio-Digesters, Organic Waste Composters, Napkin Incinerators, PET Reverse Vending & Computer Kiosks. GeM 4.5★ QCI OEM | ISO 9001:2015 | MPCB | CE Certified.",
  keywords: "Smart Buddy, Electronic Eco Toilet, DRDO Bio Digester, Organic Waste Composter, Aarya Technologies, Nashik, Sanitary Napkin Incinerator, PET Reverse Vending Machine, Computer Kiosk, GeM OEM, ISO 9001, QCI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}