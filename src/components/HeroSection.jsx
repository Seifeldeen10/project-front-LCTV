import React from 'react';

function HeroSection({ title, subTitle, btnText }) {
  return (
    <section className='mb-8'>
      <h1 className='text-3xl font-bold text-primary-600'>{title}</h1>
      <p className='text-gray-600'>{subTitle}</p>
      <button className='bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-700'>{btnText}</button>
    </section>
  );
}

export default HeroSection;