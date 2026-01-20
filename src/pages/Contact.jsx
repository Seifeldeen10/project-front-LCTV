import React, { useState } from 'react';
import axios from '../api/axios';

function Contact() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = async (e) => {
e.preventDefault();

try {
await axios.post('/contact', { name, email, message });
} catch (error) {
console.error(error);
}
};

return (
<div className='container mx-auto px-4 py-8'>
<form onSubmit={handleSubmit}>
<input type='text' value={name} onChange={(e) => setName(e.target.value)} className='mb-8' placeholder='Name' required />
<input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='mb-8' placeholder='Email' required />
<textarea value={message} onChange={(e) => setMessage(e.target.value)} className='mb-8' placeholder='Message' required />
<button type='submit' className='bg-primary-500 text-primary-600 hover:bg-primary-700'>Send</button>
</form>
</div>
);
}

export default Contact;