import React from 'react'

export default function Footer() {
  return (
    <footer className='container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6'>
      <div>
        <h2 className='text-3xl font-bold text-gray-600'>Logo</h2>
      </div>
      <div>
        <h3>Contact Info</h3>
        <p>Address</p>
        <p>Email</p>
        <p>Phone</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  )
}