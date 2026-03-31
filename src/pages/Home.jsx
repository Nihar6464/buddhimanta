import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function Home() {
  const [prompt, setPrompt] = useState("")
  const navigate = useNavigate()
  const handlePrompt = () => {
    if (prompt.trim() == "")
      alert("Please Enter a Prompt")
    else
      navigate("/generate", { state: { prompt } })
  }
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 bg-[#0f172a] text-white'>
      <h1 className='text-5xl max-w-3xl font-extrabold text-center leading-tight'>
        Turn Your{" "}
        <span className='bg-gradient-to-r from-[#f5795a] to-[#0206e8] bg-clip-text text-transparent'>
          IDEAS
        </span>{" "}
        into Webpages Within Seconds
      </h1>
      <div className='flex flex-col md:flex-row justify-center items-center gap-5 w-full max-w-3xl'>

        <textarea
          className='resize-none w-full border border-gray-600 bg-[#1e293b] rounded-2xl p-4 text-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          rows={5}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Enter your prompt here...'
        />

        <button
          onClick={handlePrompt}
          className='bg-gradient-to-r from-[#f5795a] to-[#0206e8] text-white px-6 py-3 rounded-2xl text-lg font-semibold hover:scale-105 transition duration-300'
        >
          Generate
        </button>

      </div>
    </div>
  )
}

export default Home