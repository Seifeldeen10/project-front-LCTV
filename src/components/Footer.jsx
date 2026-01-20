import React from 'react';

function Footer() {
  return (
    <footer className='container mx-auto px-4 py-8 bg-primary-500 text-gray-100'>
      <div className='grid md:grid-cols-3 gap-6'>
        {/* Replace with actual footer columns content */}
        <div>Column 1</div>
        <div>Column 2</div>
        <div>Column 3</div>
      </div>
      <div className='text-center text-sm'>© 2022 Your Brand</div>
    </footer>
  );
}

export default Footer;