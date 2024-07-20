import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row bg-black border">
      <div className="mx-6 md:mx-60 my-10">
        <h2 className="text-2xl md:text-4xl text-center mb-4">
          <span className="text-[#DC84F3]">Go</span>
          <span className="text-[#1679AB]">CPT</span>
        </h2>
        <div>
          <div className="bg-opacity-50 bg-gray-900 p-4 md:p-8 rounded-2xl shadow-2xl border w-full md:w-[500px] py-10 md:py-20">
            <h2 className="text-xl md:text-3xl text-white mb-6 text-center">Login</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300">E-Mail Address</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-gray-300"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-gray-300">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 bg-black border border-gray-700 rounded text-gray-300"
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full md:w-28 py-2 bg-purple-500 text-white rounded"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="w-full md:w-72 flex items-center justify-center border rounded-b-3xl md:rounded-l-3xl md:rounded-b-none bg-gray-900">
        <div className="text-white text-center p-4">
          <h2 className="text-xl md:text-2xl">Don't have an <br />account ?</h2>
          <button onClick={() => navigate('/signup')} className="mt-4 py-1 px-4 bg-purple-500 text-white rounded-lg">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
