import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div>
      <header className="w-full flex flex-col md:flex-row justify-between items-center py-4 px-8 bg-gray-800 rounded-md">
      <h1 className="text-xl md:text-3xl"><span className="text-[#DC84F3]">Go</span><span className="text-[#1679AB]">CPT</span>
        </h1>
        <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
          <a href="/" className="text-lg hover:text-purple-400">Home</a>
          <a href="/" className="text-lg hover:text-purple-400">FAQ</a>
          <a href="/" className="text-lg hover:text-purple-400">Features</a>
          <a href="/" className="text-lg hover:text-purple-400">About Us</a>
          <a href="/" className="text-lg hover:text-purple-400">Contact Us</a>
        </nav>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <button onClick={()=>navigate('/login')} className="text-lg border border-purple-400 rounded-md px-4 py-1 hover:bg-purple-400 hover:text-gray-900">Log In</button>
          <button onClick={()=>navigate('/signup')} className="text-lg border border-purple-400 rounded-md px-4 py-1 hover:bg-purple-400 hover:text-gray-900">Sign Up</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar
