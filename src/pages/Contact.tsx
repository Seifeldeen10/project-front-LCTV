import { useState } from 'react';
import Navbar from '../components/Navbar';
import ContactForm from '../components/ContactForm';
import LocationMap from '../components/LocationMap';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch with our team</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12">
        <ContactForm />
        <LocationMap />
      </div>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-gray-700">Innovation, Integrity, Impact</p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;