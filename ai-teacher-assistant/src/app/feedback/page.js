"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function AITeacherAssistant() {
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!answer.trim()) return;
    setLoading(true);
    setFeedback(null);

    try {
      const response = await fetch("http://localhost:5000/generate-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ student_answer: answer }),
      });

      const data = await response.json();
      setFeedback(data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      setFeedback({ feedback: "Error retrieving feedback.", grade: "N/A" });
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://assets.aten.com/webpage/shared/Solution_Guide_Digitalized/Smart-Classroom/Banner_SmartClassroom_Scenario_Photo-4.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 min-h-screen w-full"></div>

      {/* Main Card */}
      <div className="relative z-10 w-full max-w-6xl min-h-[70vh] bg-gray-900 rounded-3xl shadow-2xl flex flex-col md:flex-row gap-8 p-8">
        {/* Input Section */}
        <div className="w-full md:w-1/2 flex flex-col space-y-6">
          <h1 className="text-4xl font-bold text-center mb-4 drop-shadow-md bg-gradient-to-r from-blue-400 via-purple-500 via-pink-500 to-orange-400 text-transparent bg-clip-text">
            AI Teacher Assistant
          </h1>

          <textarea
            className="w-full p-4 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-400 resize-none bg-gray-800 text-white placeholder-gray-400 outline-none transition-all duration-300 hover:border-blue-400 focus:border-blue-400"
            rows={15}
            placeholder="Enter your answer..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          ></textarea>

          <button
            className="w-full mt-4 flex justify-center items-center bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 hover:bg-blue-700 disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <Loader2 className="animate-spin h-6 w-6" /> : "Submit"}
          </button>
        </div>

        {/* Output Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center bg-gray-800 p-8 rounded-lg shadow-lg text-white">
          {feedback ? (
            <>
              <p className="text-3xl font-semibold text-white mb-4">
                Feedback:
              </p>
              <p className="text-gray-300 text-center italic px-4 py-2 rounded-md bg-gray-700">
                {feedback.feedback}
              </p>
              <p className="text-3xl font-semibold mt-8">
                Grade:{" "}
                <span className="text-green-400 font-bold">
                  {feedback.grade}
                </span>
              </p>
            </>
          ) : (
            <p className="text-gray-400 text-center italic">
              Feedback will appear here...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
