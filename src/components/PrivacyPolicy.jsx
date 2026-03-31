import React from 'react';

function PrivacyPolicy() {
  return (
    <div className='h-screen flex flex-col justify-center items-center max-w-3xl mx-auto p-5 gap-5 text-center'>
      <h1 className='text-4xl font-extrabold'>Privacy Policy</h1>
      <p className='text-xl'>
        At <span className='bg-linear-120 from-[#f5795a] to-[#0206e8] bg-clip-text text-transparent'>
					BUDDHIMANTA
			</span> AI Prompt Generator, your privacy is our top priority. We only collect information necessary to provide 
        our services and never share personal data with third parties without consent. All prompts and data are handled 
        securely to ensure a safe and trustworthy experience.
      </p>
    </div>
  );
}

export default PrivacyPolicy;