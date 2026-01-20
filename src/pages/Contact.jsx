import React, { useState } from 'react'
import axios from '../api/axios'

function Contact() {
  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/contact', formData)
      alert('Message sent')
    } catch(err) {
      alert('Error sending message')
    }
  }
  return (
    <form onSubmit={handleSubmit} className='container mx-auto px-4 py-8'>
      <!-- form fields and submit button goes here -->
    </form>
  )
}

export default Contact