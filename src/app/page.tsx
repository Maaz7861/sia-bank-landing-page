import Navbar from "./components/Navbar";
import HeroSection from "./components/ui/HeroSection";
import AboutUs from "./components/ui/AboutUs";
import ProductTabs from "./components/ui/ProductTabs";
import InvestmentPlans from "./components/ui/InvestmentPlans";
import AnalyticsSection from "./components/ui/AnalyticsSection";
import LoanShowcase from "./components/ui/LoanShowcase";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ProductTabs />
      <InvestmentPlans />
      <AnalyticsSection />
      <LoanShowcase />
      <Footer />
    </main>
  );
}
