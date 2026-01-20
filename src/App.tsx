import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import InvestmentStrategy from './pages/InvestmentStrategy';
import ScientificNetwork from './pages/ScientificNetwork';
import GlobalNetwork from './pages/GlobalNetwork';
import RegionalCommercialization from './pages/RegionalCommercialization';
import News from './pages/News';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/investment-strategy" element={<InvestmentStrategy />} />
            <Route path="/scientific-network" element={<ScientificNetwork />} />
            <Route path="/global-network" element={<GlobalNetwork />} />
            <Route path="/regional-commercialization" element={<RegionalCommercialization />} />
            <Route path="/news" element={<News />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
