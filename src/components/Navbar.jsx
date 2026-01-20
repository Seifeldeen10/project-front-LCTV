import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
return (
<nav className='container mx-auto px-4 py-8'>
<ul className='flex space-x-4'>
<li><Link to='/' className='text-3xl font-bold text-gray-600'>Home</Link></li>
<li><Link to='/about' className='text-3xl font-bold text-gray-600'>About</Link></li>
<li><Link to='/contact' className='text-3xl font-bold text-gray-600'>Contact</Link></li>
</ul>
</nav>
);
}

export default Navbar;