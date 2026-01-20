import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='container mx-auto px-4 py-8'>
      <Link to='/' className='text-3xl font-bold text-gray-600'>Logo</Link>
      <ul className='flex space-x-4'>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  )
}