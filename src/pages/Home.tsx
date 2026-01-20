import Navbar from '../components/Navbar';
import HeroHeader from '../components/HeroHeader';
import StatsSection from '../components/StatsSection';
import FeaturesList from '../components/FeaturesList';
import ConversionSection from '../components/ConversionSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroHeader
        headline="Transforming Innovation Into Impact"
        subtext="Leading investment strategies for groundbreaking technologies"
        ctaText="Explore Portfolio"
        ctaLink="/portfolio"
        backgroundImage="/images/hero-bg.jpg"
      />
      <StatsSection />
      <FeaturesList />
      <ConversionSection
        title="Ready to Partner With Us?"
        description="Join our network of innovative companies"
        ctaText="Get Started"
      />
      <Footer />
    </div>
  );
};

export default Home;