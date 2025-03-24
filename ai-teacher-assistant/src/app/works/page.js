"use client";

import { FaEdit, FaBrain, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default function HowItWorks() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 space-y-8 relative"
      style={{
        backgroundImage:
          "url('https://assets.aten.com/webpage/shared/Solution_Guide_Digitalized/Smart-Classroom/Banner_SmartClassroom_Scenario_Photo-4.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 min-h-screen w-full"></div>

      <div className="relative z-10 w-full flex flex-col items-center space-y-10 pb-10">
        {/* Title Section */}
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">How Our App Works</h1>
          <p className="text-lg mt-2 text-gray-300">
            A simple and efficient way to get AI-powered feedback
          </p>
        </div>

        {/* Main Card */}
        <div className="w-full max-w-4xl bg-white/10 backdrop-blur-s border border-white/30 p-10 rounded-2xl shadow-xl text-white">
          <div className="flex items-center justify-center space-x-8 text-lg">
            {/* Step 1 */}
            <div className="flex flex-col items-center w-1/3">
              <FaEdit className="text-blue-300 text-5xl mb-2" />
              <span className="text-blue-300 font-semibold text-xl">
                1. Enter Your Answer
              </span>
              <p className="text-sm text-gray-200 mt-1 text-center">
                Type your response in the text box and click submit.
              </p>
            </div>

            <IoIosArrowForward className="text-white text-3xl" />

            {/* Step 2 */}
            <div className="flex flex-col items-center w-1/3">
              <FaBrain className="text-blue-300 text-5xl mb-2" />
              <span className="text-blue-300 font-semibold text-xl">
                2. AI Analyzes
              </span>
              <p className="text-sm text-gray-200 mt-1 text-center">
                Our AI evaluates accuracy, clarity, and completeness.
              </p>
            </div>

            <IoIosArrowForward className="text-white text-3xl" />

            {/* Step 3 */}
            <div className="flex flex-col items-center w-1/3">
              <FaCheckCircle className="text-blue-300 text-5xl mb-2" />
              <span className="text-blue-300 font-semibold text-xl">
                3. Receive Feedback
              </span>
              <p className="text-sm text-gray-200 mt-1 text-center">
                Instant feedback and a grade will be displayed.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Section */}
        <div className="text-center text-white max-w-3xl">
          <h2 className="text-3xl font-semibold">Why Choose Our App?</h2>
          <p className="text-lg text-gray-300 mt-2">
            Our AI-driven feedback system helps students improve their responses
            with detailed insights and grading.
          </p>
        </div>
      </div>
    </div>
  );
}
