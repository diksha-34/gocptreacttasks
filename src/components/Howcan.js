import React from 'react'

const Howcan = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#161c27] text-white p-4 mt-12 shadow-2xl border border-stone-50 border-opacity-5">
    <div className="w-full max-w-4xl text-center">
      <h2 className="text-2xl md:text-4xl mb-6">How Can You Contribute?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 bg-[#31363F] rounded-xl shadow-md text-center">
          <h3 className="text-xl md:text-2xl mb-4">Sign Up and Use goCPT Beta</h3>
          <p className=" text-sm m-8">Dive into the beta version by signing up here! Explore its features and discover first hand how GoCPT can simplify your CPT coding processes.</p>
        </div>
        <div className="p-6 bg-[#31363F] rounded-xl shadow-md">
          <h3 className="text-xl md:text-2xl mb-4">Share Your Feedback</h3>
          <p className="text-sm m-8">Your experiences and insights matter. Utilize the feedback mechanism within the app to share your thoughts, suggestions, and any issues you encounter. Your feedback guides our ongoing improvements.</p>
        </div>
      </div>
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl mb-6">Join GOCPT on this Journey!</h2>
        <p className="text-base mb-6">By participating in the goCPT Beta, you're not just a user; you're a vital part of our community shaping the future of mental health billing. Together, we can create an app that truly meets your needs and exceeds your expectations.</p>
        <button className="bg-purple-400 text-gray-900 text-lg font-bold py-2 px-4 rounded-md hover:bg-purple-500 w-44">
          Sign Up Today!
        </button>
        </div>
    </div>
  </div>
  )
}

export default Howcan
