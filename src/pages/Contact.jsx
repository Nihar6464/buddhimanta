import React from 'react';

function ContactUs() {
  return (
    <div className='h-screen flex flex-col justify-center items-center max-w-3xl mx-auto p-5 gap-5 text-center'>
      <h1 className='text-4xl font-extrabold'>Contact Us</h1>
      <p className='text-xl'>
        Have questions, feedback, or suggestions? We'd love to hear from you!
      </p>
      <p className='text-lg'>
        Email: support@buddhimanta.com
      </p>
      <p className='text-lg'>
        Phone: +123-456-7890
      </p>
      <p className='text-lg'>
        Address: 123 AI Street, Tech City, Bengaluru
      </p>
    </div>
  );
}

export default ContactUs;