import Navbar from "./components/Navbar";
import HeroSection from "./components/ui/HeroSection";
import StatsStrip from "./components/ui/StatsStrip";
import Features from "./components/ui/Features";
import ProductShowcase from "./components/ui/ProductShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <Features />
      <ProductShowcase />
      <Footer />
    </main>
  );
}
