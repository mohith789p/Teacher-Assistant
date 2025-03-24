"use client";

import {
  FaRocket,
  FaBrain,
  FaClipboardCheck,
  FaClock,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

export default function Features() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 space-y-8 relative"
      style={{
        backgroundImage:
          "url('https://assets.aten.com/webpage/shared/Solution_Guide_Digitalized/Smart-Classroom/Banner_SmartClassroom_Scenario_Photo-4.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 min-h-screen w-full"></div>

      <div className="relative z-10 w-full flex flex-col items-center space-y-10 pb-10">
        {/* Title Section */}
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">App Features</h1>
          <p className="text-lg mt-2 text-gray-300">
            Explore the powerful features that make our AI Assistant unique.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-lg border border-white/30 p-6 rounded-xl text-white shadow-lg">
            <FaRocket className="text-blue-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Fast Processing</h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              Get instant feedback on your answers without delay.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-lg border border-white/30 p-6 rounded-xl text-white shadow-lg">
            <FaBrain className="text-blue-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">AI-Powered Analysis</h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              Advanced AI evaluates accuracy, clarity, and completeness.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-lg border border-white/30 p-6 rounded-xl text-white shadow-lg">
            <FaClipboardCheck className="text-blue-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Comprehensive Feedback</h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              Detailed suggestions for improvement to enhance learning.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-lg border border-white/30 p-6 rounded-xl text-white shadow-lg">
            <FaClock className="text-blue-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">24/7 Availability</h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              Use the app anytime to get feedback at your convenience.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-lg border border-white/30 p-6 rounded-xl text-white shadow-lg">
            <FaShieldAlt className="text-blue-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Secure & Private</h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              Your responses are processed securely with privacy in mind.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="flex flex-col items-center bg-black/50 backdrop-blur-lg border border-white/30 p-6 rounded-xl text-white shadow-lg">
            <FaChartLine className="text-blue-300 text-5xl mb-4" />
            <h3 className="text-xl font-semibold">Progress Tracking</h3>
            <p className="text-sm text-gray-300 text-center mt-2">
              Monitor your improvement with analytics and reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
