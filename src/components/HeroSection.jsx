import React from 'react'

function HeroSection({title, subtitle, ctaText}) {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-gray-600'>{title}</h1>
      <p className='text-primary-600'>{subtitle}</p>
      <button className='bg-primary-500 hover:bg-primary-700'>{ctaText}</button>
    </div>
  )
}

export default HeroSection