"use client";

import { useState } from "react";

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-full max-w-[900px] h-[550px] bg-white shadow-lg rounded-2xl overflow-hidden">
        {/* Panel A (Black background, initially on the left) */}
        <div
          className={`absolute top-0 left-0 w-1/3 h-full bg-black bg-opacity-50 text-white flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
            isSignUp ? "translate-x-0" : "translate-x-[200%]"
          }`}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}
            </h3>
          </div>
          <button
            className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {/* Panel B (White background, initially on the right) */}
        <div
          className={`absolute top-0 right-0 w-2/3 h-full p-10 transition-transform duration-700 ease-in-out ${
            isSignUp ? "translate-x-0" : "-translate-x-[50%]"
          }`}
        >
          {isSignUp ? (
            // Sign Up Form (B)
            <>
              <h2 className="text-center text-2xl font-semibold">
                Create your Account
              </h2>
              <div className="mt-6">
                <label className="block text-gray-600 text-sm">Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-400 p-2 text-center focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-600 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-400 p-2 text-center focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-600 text-sm">Password</label>
                <input
                  type="password"
                  className="w-full border-b border-gray-400 p-2 text-center focus:outline-none"
                />
              </div>
              <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded-full">
                Sign Up
              </button>
            </>
          ) : (
            // Sign In Form (D)
            <>
              <h2 className="text-center text-2xl font-semibold">
                Welcome Back
              </h2>
              <div className="mt-6">
                <label className="block text-gray-600 text-sm">Email</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-400 p-2 text-center focus:outline-none"
                />
              </div>
              <div className="mt-4">
                <label className="block text-gray-600 text-sm">Password</label>
                <input
                  type="password"
                  className="w-full border-b border-gray-400 p-2 text-center focus:outline-none"
                />
              </div>
              <p className="mt-4 text-center text-sm text-gray-500 cursor-pointer">
                Forgot password?
              </p>
              <button className="w-full mt-6 bg-yellow-500 text-white py-2 rounded-full">
                Sign In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
