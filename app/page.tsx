import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ComparisonSection from "@/components/ComparisonSection";
import InnovationSection from "@/components/InnovationSection";
import ModernDevelopers from "@/components/ModernDevelopers";
import SpecializedAPIs from "@/components/SpecializedAPIs";
import ScalableExtraction from "@/components/ScalableExtraction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--homepage-background)] text-white selection:bg-[var(--homepage-primary)] selection:text-white">
      <Navbar />
      <div>
        <Hero />
        <ComparisonSection />
        <InnovationSection />
        <ModernDevelopers />
        <SpecializedAPIs />
        <ScalableExtraction />
      </div>
      <Footer />
    </main>
  );
}
