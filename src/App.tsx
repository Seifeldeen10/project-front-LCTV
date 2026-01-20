import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AboutUs from './pages/AboutUs';
import InvestmentStrategy from './pages/InvestmentStrategy';
import Portfolio from './pages/Portfolio';
import ScientificNetwork from './pages/ScientificNetwork';
import GlobalNetwork from './pages/GlobalNetwork';
import RegionalCommercialization from './pages/RegionalCommercialization';
import News from './pages/News';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import './index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/investment-strategy" element={<InvestmentStrategy />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/scientific-network" element={<ScientificNetwork />} />
        <Route path="/global-network" element={<GlobalNetwork />} />
        <Route path="/regional-commercialization" element={<RegionalCommercialization />} />
        <Route path="/news" element={<News />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
