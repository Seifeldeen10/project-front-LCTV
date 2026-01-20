import React from 'react';

function Footer() {
return (
<footer className='container mx-auto px-4 py-8'>
<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
<div className='space-y-4'>
<h2 className='text-3xl font-bold text-gray-600'>Quick links</h2>
<a href='#' className='text-gray-600'>Link 1</a>
<a href='#' className='text-gray-600'>Link 2</a>
<a href='#' className='text-gray-600'>Link 3</a>
</div>
<div className='space-y-4'>
<h2 className='text-3xl font-bold text-gray-600'>Contact info</h2>
<p className='text-gray-600'>1234 Street, City, State</p>
<p className='text-gray-600'>+1 (123) 456-7890</p>
<p className='text-gray-600'>email@example.com</p>
</div>
<div className='space-y-4'>
<h2 className='text-3xl font-bold text-gray-600'>Social media</h2>
<a href='#' className='text-gray-600'>Facebook</a>
<a href='#' className='text-gray-600'>Twitter</a>
<a href='#' className='text-gray-600'>Instagram</a>
</div>
</div>
<p className='text-center text-gray-600'>&copy; {(new Date().getFullYear())} Company Name</p>
</footer>
);
}

export default Footer;