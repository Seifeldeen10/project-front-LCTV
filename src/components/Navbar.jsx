import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='container mx-auto px-4 py-8'>
      <Link to='/' className='text-primary-600 text-3xl font-bold'>Brand</Link>
      <div className='space-x-4'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;