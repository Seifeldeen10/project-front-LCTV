import React from 'react';
import HeroHeader from '../components/HeroHeader';
import StatsSection from '../components/StatsSection';
import FeaturesList from '../components/FeaturesList';
import PortfolioList from '../components/PortfolioList';
import FeatureDetails from '../components/FeatureDetails';
import BlogList from '../components/BlogList';
import ConversionSection from '../components/ConversionSection';

const Home: React.FC = () => {
  const heroData = {
    headline: 'Transforming Innovation into Impact',
    subtext: 'We invest in groundbreaking technologies that shape the future of healthcare and biotechnology',
    ctaText: 'Explore Our Portfolio',
    ctaLink: '/portfolio',
    backgroundImage: '/images/hero-bg.jpg'
  };

  const stats = [
    { label: 'Portfolio Companies', value: '50+' },
    { label: 'Countries', value: '20+' },
    { label: 'Investment Volume', value: '$2B+' },
    { label: 'Years of Experience', value: '25+' }
  ];

  const features = [
    {
      id: 1,
      title: 'Strategic Investment',
      description: 'We provide capital and strategic guidance to innovative companies in the life sciences sector.',
      icon: 'chart'
    },
    {
      id: 2,
      title: 'Global Network',
      description: 'Access our extensive network of industry experts, researchers, and commercial partners worldwide.',
      icon: 'globe'
    },
    {
      id: 3,
      title: 'Scientific Excellence',
      description: 'Our team combines deep scientific knowledge with proven investment expertise.',
      icon: 'science'
    },
    {
      id: 4,
      title: 'Commercialization Support',
      description: 'We help transform scientific breakthroughs into successful commercial ventures.',
      icon: 'rocket'
    }
  ];

  const portfolioHighlights = [
    {
      id: 1,
      name: 'BioTech Innovations',
      category: 'Biotechnology',
      description: 'Pioneering gene therapy solutions for rare diseases',
      image: '/images/portfolio-1.jpg'
    },
    {
      id: 2,
      name: 'MedDevice Solutions',
      category: 'Medical Devices',
      description: 'Next-generation diagnostic equipment',
      image: '/images/portfolio-2.jpg'
    },
    {
      id: 3,
      name: 'Pharma Dynamics',
      category: 'Pharmaceuticals',
      description: 'Innovative drug discovery platform',
      image: '/images/portfolio-3.jpg'
    }
  ];

  const featureDetailsTabs = [
    {
      id: 1,
      title: 'Investment Approach',
      content: 'Our disciplined investment approach focuses on companies with strong scientific foundations, clear market opportunities, and experienced management teams.'
    },
    {
      id: 2,
      title: 'Value Creation',
      content: 'We work closely with portfolio companies to accelerate growth through strategic planning, operational excellence, and market expansion.'
    },
    {
      id: 3,
      title: 'Exit Strategy',
      content: 'Our proven track record includes successful IPOs, strategic acquisitions, and secondary sales that maximize returns for our investors.'
    }
  ];

  const blogPreviews = [
    {
      id: 1,
      title: 'The Future of Gene Therapy',
      excerpt: 'Exploring the latest advancements in gene therapy and their potential to revolutionize healthcare.',
      date: '2024-01-15',
      image: '/images/blog-1.jpg'
    },
    {
      id: 2,
      title: 'Investment Trends in Biotech 2024',
      excerpt: 'Key trends shaping the biotechnology investment landscape this year.',
      date: '2024-01-10',
      image: '/images/blog-2.jpg'
    },
    {
      id: 3,
      title: 'Building Successful Startups',
      excerpt: 'Lessons learned from our most successful portfolio companies.',
      date: '2024-01-05',
      image: '/images/blog-3.jpg'
    }
  ];

  return (
    <div className="home-page">
      <HeroHeader {...heroData} />
      
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Firm</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a leading investment firm focused on life sciences and biotechnology. 
              With decades of experience and a global network, we partner with innovators 
              to bring transformative therapies and technologies to market.
            </p>
          </div>
          <StatsSection stats={stats} />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Our comprehensive approach to investment and partnership</p>
          </div>
          <FeaturesList features={features} />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Investment Process</h2>
          </div>
          <FeatureDetails tabs={featureDetailsTabs} />
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Portfolio Companies</h2>
            <p className="text-lg text-gray-600">Discover our portfolio of innovative companies</p>
          </div>
          <PortfolioList items={portfolioHighlights} />
          <div className="text-center mt-8">
            <a href="/portfolio" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              View Full Portfolio
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-600">Stay informed with our latest news and thought leadership</p>
          </div>
          <BlogList posts={blogPreviews} limit={3} />
          <div className="text-center mt-8">
            <a href="/news" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              Read More Articles
            </a>
          </div>
        </div>
      </section>

      <ConversionSection 
        headline="Ready to Partner With Us?"
        subtext="Whether you're an entrepreneur with a breakthrough idea or an investor seeking opportunities in life sciences, we'd love to hear from you."
        primaryCta={{ text: 'Get in Touch', link: '/contact' }}
        secondaryCta={{ text: 'Learn More', link: '/about' }}
      />
    </div>
  );
};

export default Home;
