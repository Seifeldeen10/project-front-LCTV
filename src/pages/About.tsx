import Navbar from '../components/Navbar';
import HeroHeader from '../components/HeroHeader';
import TeamSection from '../components/TeamSection';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroHeader
        headline="About Our Company"
        subtext="Driving innovation through strategic investments"
        ctaText="View Investment Strategy"
        ctaLink="/strategy"
        backgroundImage="/images/about-bg.jpg"
      />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-700">We invest in breakthrough technologies that shape the future.</p>
      </section>
      <TeamSection />
      <Timeline />
      <Footer />
    </div>
  );
};

export default About;