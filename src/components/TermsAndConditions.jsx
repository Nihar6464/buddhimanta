import React from 'react';

function TermsAndConditions() {
  return (
    <div className='h-screen flex flex-col justify-center items-center max-w-3xl mx-auto p-5 gap-5 text-center'>
      <h1 className='text-4xl font-extrabold'>Terms & Conditions</h1>
      <p className='text-xl'>
        By using <span className='bg-linear-120 from-[#f5795a] to-[#0206e8] bg-clip-text text-transparent'>
					BUDDHIMANTA
				</span> AI Prompt Generator, you agree to our terms and conditions. You accept that all content is generated 
        by AI and is for informational purposes. You will use this application responsibly and agree not to misuse it. 
        We reserve the right to modify these terms at any time, and continued use constitutes acceptance of any changes.
      </p>
    </div>
  );
}

export default TermsAndConditions;