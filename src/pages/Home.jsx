import React from 'react';
import HeroSection from '../components/HeroSection';

function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <HeroSection title='Welcome to our homepage' subTitle='This is some descriptive text about us' btnText='Learn more' />
      <h2 className='text-primary-600 text-3xl font-bold mb-8'>Our Features</h2>
      <div className='grid md:grid-cols-3 gap-6'>
        {/* Replace with dynamic feature cards */}
        <div className='bg-primary-500 p-4 rounded'>Feature 1</div>
        <div className='bg-primary-500 p-4 rounded'>Feature 2</div>
        <div className='bg-primary-500 p-4 rounded'>Feature 3</div>
      </div>
    </div>
  );
}

export default Home;