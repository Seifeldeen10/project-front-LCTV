import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroHeader from '../components/HeroHeader';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Accordion from '../components/Accordion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const stats = [
    { label: 'Portfolio Companies', value: '50+' },
    { label: 'Countries Reached', value: '25+' },
    { label: 'Years of Experience', value: '15+' },
    { label: 'Investment Capital', value: '$500M+' }
  ];

  const features = [
    {
      id: 1,
      title: 'Strategic Investment',
      description: 'We invest in breakthrough technologies with global impact potential',
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    },
    {
      id: 2,
      title: 'Global Network',
      description: 'Access to worldwide scientific and commercial partnerships',
      icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      id: 3,
      title: 'Expert Guidance',
      description: 'Seasoned professionals supporting your growth journey',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    },
    {
      id: 4,
      title: 'Proven Track Record',
      description: 'Successful exits and sustained portfolio company growth',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
    }
  ];

  const portfolioCompanies = [
    {
      id: 1,
      name: 'BioTech Innovations',
      sector: 'Biotechnology',
      description: 'Revolutionary gene therapy platform',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      id: 2,
      name: 'MedDevice Solutions',
      sector: 'Medical Devices',
      description: 'Next-generation diagnostic tools',
      image: 'https://via.placeholder.com/400x300'
    },
    {
      id: 3,
      name: 'HealthTech Labs',
      sector: 'Digital Health',
      description: 'AI-powered patient care platform',
      image: 'https://via.placeholder.com/400x300'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Healthcare Investment',
      excerpt: 'Exploring emerging trends in medical technology and their investment potential...',
      date: '2024-01-15',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 2,
      title: 'Building Successful Biotech Startups',
      excerpt: 'Key strategies for scaling life sciences companies in competitive markets...',
      date: '2024-01-10',
      image: 'https://via.placeholder.com/400x250'
    },
    {
      id: 3,
      title: 'Global Partnership Opportunities',
      excerpt: 'How international collaboration drives innovation in healthcare...',
      date: '2024-01-05',
      image: 'https://via.placeholder.com/400x250'
    }
  ];

  const featureDetails = [
    {
      title: 'Investment Process',
      content: 'Our rigorous investment process includes initial screening, due diligence, portfolio company support, and strategic exit planning. We work closely with founders to ensure sustainable growth and market success.'
    },
    {
      title: 'Portfolio Support',
      content: 'Beyond capital, we provide operational expertise, strategic guidance, network access, and hands-on support to help our portfolio companies achieve their full potential in global markets.'
    },
    {
      title: 'Network Access',
      content: 'Gain access to our extensive network of scientific advisors, industry experts, commercial partners, and strategic investors across 25+ countries worldwide.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <HeroHeader
        headline="Investing in the Future of Healthcare"
        subtext="We partner with innovative companies to transform breakthrough science into global healthcare solutions"
        ctaText="Explore Our Portfolio"
        ctaLink="/portfolio"
        backgroundImage="https://via.placeholder.com/1920x1080"
      />

      {/* About & Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              We are a leading life sciences investment firm dedicated to advancing healthcare through strategic partnerships and capital deployment. With over 15 years of experience, we've helped build industry-leading companies that improve patient outcomes worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Partner With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.id}>
                <div className="flex flex-col items-center text-center">
                  <svg className="w-12 h-12 text-red-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-700">Innovative companies transforming healthcare</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioCompanies.map((company) => (
              <Card key={company.id} className="overflow-hidden">
                <img src={company.image} alt={company.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-red-600 font-semibold mb-2">{company.sector}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h3>
                  <p className="text-gray-600">{company.description}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/portfolio" className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              View All Companies
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Details with Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">How We Work</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion items={featureDetails} />
          </div>
        </div>
      </section>

      {/* Blog List Previews */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
            <p className="text-lg text-gray-700">News and thought leadership from our team</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to="/news" className="text-red-600 font-semibold hover:text-red-700">Read More →</Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our network of innovative healthcare companies and gain access to capital, expertise, and global connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get in Touch
            </Link>
            <Link to="/investment-strategy" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
