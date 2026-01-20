import React, { useState } from 'react';
import HeroHeader from '../components/HeroHeader';
import FeatureCard from '../components/FeatureCard';
import PortfolioCard from '../components/PortfolioCard';
import BlogPreview from '../components/BlogPreview';
import Accordion from '../components/Accordion';
import Newsletter from '../components/Newsletter';

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { label: 'Companies Funded', value: '150+' },
    { label: 'Total Investment', value: '$2.5B' },
    { label: 'Success Rate', value: '87%' },
    { label: 'Global Offices', value: '12' },
  ];

  const features = [
    {
      icon: '💡',
      title: 'Innovation Focus',
      description: 'Investing in breakthrough technologies that transform industries and improve lives globally.',
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Strategic presence across major markets with local expertise and international networks.',
    },
    {
      icon: '🤝',
      title: 'Partnership Model',
      description: 'Working closely with founders to accelerate growth and achieve sustainable success.',
    },
    {
      icon: '📈',
      title: 'Proven Track Record',
      description: 'Decades of experience delivering exceptional returns and building market leaders.',
    },
  ];

  const portfolioCompanies = [
    {
      name: 'BioTech Innovations',
      category: 'Healthcare',
      description: 'Revolutionary gene therapy platform',
      image: 'https://via.placeholder.com/300x200/dc2626/ffffff?text=BioTech',
    },
    {
      name: 'CleanEnergy Solutions',
      category: 'Energy',
      description: 'Next-generation solar technology',
      image: 'https://via.placeholder.com/300x200/991b1b/ffffff?text=CleanEnergy',
    },
    {
      name: 'AI Analytics Corp',
      category: 'Technology',
      description: 'Advanced machine learning platform',
      image: 'https://via.placeholder.com/300x200/ef4444/ffffff?text=AI+Analytics',
    },
  ];

  const blogs = [
    {
      title: 'The Future of Biotechnology Investment',
      excerpt: 'Exploring emerging trends in biotech and their investment potential...',
      date: '2024-01-15',
      author: 'Dr. Sarah Chen',
    },
    {
      title: 'Scaling Startups in Global Markets',
      excerpt: 'Key strategies for international expansion and market penetration...',
      date: '2024-01-10',
      author: 'Michael Roberts',
    },
    {
      title: 'Sustainable Innovation: A New Paradigm',
      excerpt: 'How sustainability drives innovation and creates long-term value...',
      date: '2024-01-05',
      author: 'Emma Thompson',
    },
  ];

  const featureDetails = [
    {
      title: 'Investment Approach',
      content: 'Our systematic approach combines rigorous analysis with strategic insights to identify high-potential opportunities. We focus on companies with strong fundamentals, innovative solutions, and exceptional leadership teams.',
    },
    {
      title: 'Portfolio Support',
      content: 'Beyond capital, we provide comprehensive support including strategic guidance, operational expertise, network access, and resources to help portfolio companies achieve their full potential.',
    },
    {
      title: 'Global Network',
      content: 'Our extensive network spans academia, industry, and government, providing unique access to partnerships, talent, customers, and opportunities that accelerate growth and innovation.',
    },
  ];

  return (
    <div className="bg-white">
      <HeroHeader
        headline="Powering Innovation, Building the Future"
        subtext="Strategic venture capital partner for transformative technologies"
        ctaText="Explore Opportunities"
        ctaLink="/portfolio"
        backgroundImage="https://via.placeholder.com/1920x1080/dc2626/ffffff?text=Innovation"
      />

      {/* About & Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Firm</h2>
            <p className="text-xl text-gray-600">
              We are a leading venture capital firm dedicated to identifying and nurturing breakthrough innovations.
              With decades of experience and a global presence, we partner with visionary entrepreneurs to build
              companies that shape the future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <PortfolioCard key={index} {...company} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/portfolio"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Portfolio Companies
            </a>
          </div>
        </div>
      </section>

      {/* Feature Details - Tabbed UI */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Value Proposition</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap border-b border-gray-200 mb-8">
              {featureDetails.map((detail, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 font-semibold transition-colors ${
                    activeTab === index
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-600 hover:text-primary-600'
                  }`}
                >
                  {detail.title}
                </button>
              ))}
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 text-lg leading-relaxed">{featureDetails[activeTab].content}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Previews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Latest Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <BlogPreview key={index} {...blog} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/news"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
            >
              Read More Articles
            </a>
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Vision?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our portfolio of innovative companies shaping the future. Let's discuss how we can partner
            to accelerate your growth and maximize impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/application"
              className="inline-block bg-white text-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Apply for Funding
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent text-white px-8 py-4 rounded-lg font-bold border-2 border-white hover:bg-white hover:text-primary-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Home;
