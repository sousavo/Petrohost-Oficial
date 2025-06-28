import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HostingSection from "../components/HostingSection";
import ProductCards from "../components/ProductCards";
import AdvantagesSection from "../components/AdvantagesSection";
import MetricsAndHosting from "../components/MetricsAndHosting";
import DifferentialsGrid from "../components/DifferentialsGrid";
import LogoWall from "../components/LogoWall";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <HeroSection />
      <HostingSection />
      <MetricsAndHosting />
      <AdvantagesSection />
      <DifferentialsGrid />
      <LogoWall />
      <Footer />
    </div>
  );
};

export default Index;
