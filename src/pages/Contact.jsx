import React, { useState } from 'react';
import axios from '../api/axios';

function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const handleChange = (e) => setFormState({ ...formState, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/contact', formState)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  };
  return (
    <div className='container mx-auto px-4 py-8'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' value={formState.name} onChange={handleChange} className='block mb-4' placeholder='Name' required />
        <input type='email' name='email' value={formState.email} onChange={handleChange} className='block mb-4' placeholder='Email' required />
        <textarea name='message' value={formState.message} onChange={handleChange} className='block mb-4' placeholder='Message' required />
        <button type='submit' className='bg-primary-500 text-white px-4 py-2 rounded hover:bg-primary-700'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;