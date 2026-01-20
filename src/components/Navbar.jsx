import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <nav className="p-6 bg-primary-500 text-white">
            <Link to='/' className='p-4'>Home</Link>
            <Link to='/about' className='p-4'>About</Link>
            <Link to='/contact' className='p-4'>Contact</Link>
        </nav>
    </div>
  );
}
export default Navbar;