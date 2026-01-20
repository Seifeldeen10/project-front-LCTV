import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='bg-primary-500 text-primary-600'>
      <ul className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar