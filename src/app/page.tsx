// src/app/page.tsx
// Main page — assembles all components in order

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import HowItWorks from "@/components/HowItWorks";
import PaymentMethods from "@/components/PaymentMethods";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductCatalog />
      <HowItWorks />
      <PaymentMethods />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
