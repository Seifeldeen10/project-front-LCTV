import React from 'react'
import HeroSection from '../components/HeroSection'

export default function Home() {
  return (
    <main className='container mx-auto px-4 py-8'>
      <HeroSection />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        <div className='bg-primary-500 text-primary-600 hover:bg-primary-700'>
          <h2 className='text-3xl font-bold'>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <!-- More divs for other features -->
      </div>
    </main>
  )
}