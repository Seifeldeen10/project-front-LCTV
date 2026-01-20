import React from 'react'
import HeroSection from '../components/HeroSection'

function Home() {
  return (
    <div className='container mx-auto px-4 py-8'>
      <HeroSection title='Welcome Home' subtitle='Sample Subtitle' ctaText='Learn More' />
    </div>
  )
}

export default Home