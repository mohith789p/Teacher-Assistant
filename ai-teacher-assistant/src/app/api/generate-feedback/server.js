require("dotenv").config({
  path: require("path").resolve(__dirname, "../../../../.env.local"),
});
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Hugging Face API Config
const HF_TOKEN = process.env.HF_TOKEN;
const MODEL = "mistralai/Mistral-7B-Instruct-v0.2";
const API_URL = `https://api-inference.huggingface.co/models/${MODEL}`;

// Function to get AI-generated feedback
async function getFeedbackAndGrade(answer) {
  const prompt = `Evaluate the student's answer based on accuracy, clarity, and completeness.
                  Provide constructive feedback with suggestions for improvement.
                  Then, assign a grade (A-F).\n\n
                  Student Answer: ${answer}\n\n
                  Feedback:\n`;

  try {
    const response = await axios.post(
      API_URL,
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (
      response.data &&
      Array.isArray(response.data) &&
      response.data[0]?.generated_text
    ) {
      const generatedText = response.data[0].generated_text.trim();

      // Extract feedback and grade dynamically
      const feedbackMatch = generatedText.match(
        /Feedback:\n([\s\S]+?)(?:\n\n\s*Grade:|$)/
      );
      const gradeMatch = generatedText.match(/Grade:\s*([\w\+\-]+)/);

      const feedback = feedbackMatch
        ? feedbackMatch[1].trim().replace(/\s+/g, " ")
        : "Feedback not found.";
      const grade = gradeMatch ? gradeMatch[1].trim() : "Grade not found.";

      return { feedback, grade };
    } else {
      return { feedback: "Error: No valid feedback generated.", grade: "N/A" };
    }
  } catch (error) {
    console.error("Hugging Face API Error:", error.message);
    return {
      feedback: "Error: AI processing failed. Try again later.",
      grade: "N/A",
    };
  }
}

// API Endpoint to receive student answers and return feedback
app.post("/generate-feedback", async (req, res) => {
  const { student_answer } = req.body;

  if (!student_answer || student_answer.trim() === "") {
    return res.status(400).json({ error: "Student answer is required." });
  }

  const { feedback, grade } = await getFeedbackAndGrade(student_answer);
  res.json({ feedback, grade });
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
