import React from 'react';

function AboutUs() {
  return (
    <div className='h-screen flex flex-col justify-center items-center max-w-3xl mx-auto p-5 gap-5 text-center'>
      <h1 className='text-4xl font-extrabold'>About Us</h1>
      <p className='text-xl'>
        Welcome to <span className='bg-linear-120 from-[#f5795a] to-[#0206e8] bg-clip-text text-transparent'>
					BUDDHIMANTA
				</span> AI Prompt Generator! Our mission is to help users transform their ideas into meaningful results instantly. 
        Using advanced AI technology, our application takes your prompt and generates accurate, creative, and useful outputs, 
        all within seconds. We aim to make AI accessible, intuitive, and fun for everyone.
      </p>
    </div>
  );
}

export default AboutUs;