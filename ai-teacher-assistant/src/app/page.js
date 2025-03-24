import React from "react";

const App = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/real-classroom-background-uucayjk4hp74akty.jpg')",
      }}
    >
      <header className="text-white py-4 px-6 flex justify-between items-center bg-black">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Teacher Assistant
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="\" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="\features" className="hover:text-yellow-400">
                Features
              </a>
            </li>
            <li>
              <a href="\works" className="hover:text-yellow-400">
                How It Works
              </a>
            </li>
            <li>
              <a
                href="/feedback"
                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded"
              >
                Get Started
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="text-white text-center py-20 px-6 bg-black/70">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-lime-400 text-transparent bg-clip-text">
            AI-Powered Assistant for Teachers
          </h1>
          <p className="text-lg my-4">
            Effortlessly provide feedback and grading with our AI assistant,
            designed to help educators streamline their assessment process.
          </p>
          <a
            href="/feedback"
            className="bg-yellow-400 text-gray-900 px-6 py-3 rounded text-lg"
          >
            Try Now
          </a>
        </section>

        <section className="py-16 text-center text-white flex justify-center items-center bg-black/50">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-amber-500 text-transparent bg-clip-text">
              What Teachers Say
            </h2>

            <p className="text-lg italic">
              "This AI assistant has saved me hours of grading and given my
              students better feedback!"
            </p>
            <p className="text-sm mt-4">— Saraswathi , High School Teacher</p>
          </div>
          <img
            src="https://th.bing.com/th/id/OIP.wfl00mk6XwLDdo0kg3gKcAHaHa?pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
            alt="Teacher Testimonial"
            className="w-52 h-52 ml-6 rounded-full"
          />
        </section>

        <section className="py-16 text-center text-white bg-black/70">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 text-transparent bg-clip-text">
            Key Features
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="max-w-sm">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                Automated Grading
              </h3>
              <p>Save time with AI-powered scoring.</p>
            </div>
            <div className="max-w-sm">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 text-transparent bg-clip-text">
                Personalized Feedback
              </h3>
              <p>AI provides specific and constructive feedback.</p>
            </div>
          </div>
        </section>

        <section className="text-center py-16 bg-black/50">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 text-transparent bg-clip-text mb-4">
            Start Using AI for Free
          </h2>
          <p className="text-lg text-gray-200">
            Join teachers and make grading effortless.
          </p>
          <a
            href="\auth"
            className="mt-4 bg-black text-white px-6 py-3 rounded inline-block"
          >
            Sign Up Now
          </a>
        </section>
      </main>

      <footer className="text-white text-center py-4 bg-black bg-opacity-50 mt-auto">
        <p>&copy; 2023 Teacher Assistant. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
