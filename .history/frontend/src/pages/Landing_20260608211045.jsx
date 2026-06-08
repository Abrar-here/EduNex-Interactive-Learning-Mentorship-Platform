import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [demoView, setDemoView] = useState("student");

  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-br from-indigo-950 via-indigo-800 to-sky-600">
        {/* glow background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-indigo-400/30 blur-3xl rounded-full top-10 left-10 animate-pulse"></div>
          <div className="absolute w-[400px] h-[400px] bg-sky-300/20 blur-3xl rounded-full bottom-10 right-10 animate-pulse"></div>
        </div>

        <div className="relative text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            EduNex
          </h1>

          <p className="mt-6 text-lg md:text-xl text-indigo-100">
            A smart learning ecosystem for students & instructors with courses,
            mentorship, progress tracking, and real growth analytics.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
            {["Courses", "Mentorship", "Progress Tracking", "Certificates"].map(
              (item) => (
                <span
                  key={item}
                  className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-7 py-3 bg-white text-indigo-700 font-semibold rounded-xl
              shadow-lg hover:shadow-indigo-300/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>

            <a
              href="#demo"
              className="px-7 py-3 border border-white/60 rounded-xl
              hover:bg-white/10 hover:shadow-lg transition-all duration-300"
            >
              Try Demo Preview
            </a>
          </div>
        </div>
      </section>

      {/* WHAT EDUNEX DOES */}
      <section className="py-24 px-6 text-center bg-slate-950">
        <h2 className="text-4xl font-bold mb-6">What is EduNex?</h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          EduNex is a full-stack e-learning platform that connects students and
          instructors in a structured digital ecosystem. It enables learning,
          teaching, progress tracking, mentorship scheduling, and certification
          — all in one place.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "📚 Structured Courses",
              desc: "Organized learning paths with lessons, enrollment, and tracking.",
            },
            {
              title: "🧑‍🏫 Instructor System",
              desc: "Create courses, manage students, schedule consultations.",
            },
            {
              title: "📊 Smart Tracking",
              desc: "Progress, stats, certificates, recommendations & analytics.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10
              hover:bg-white/10 hover:scale-105 hover:shadow-indigo-500/20 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Sign Up",
              desc: "Register as student or instructor instantly.",
            },
            {
              title: "Learn / Teach",
              desc: "Access courses or create your own content.",
            },
            {
              title: "Track Progress",
              desc: "Monitor learning journey and achievements.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10
              hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
            >
              <h3 className="text-white font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTERACTIVE DEMO */}
      <section id="demo" className="py-24 px-6 bg-slate-950 text-center">
        <h2 className="text-4xl font-bold mb-4">Interactive Demo Preview</h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Switch between Student and Instructor view to understand how EduNex
          works.
        </p>

        {/* buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setDemoView("student")}
            className={`px-5 py-2 rounded-lg border transition ${
              demoView === "student"
                ? "bg-indigo-600 shadow-lg shadow-indigo-500/30"
                : "border-white/20 hover:bg-white/10"
            }`}
          >
            Student View
          </button>

          <button
            onClick={() => setDemoView("instructor")}
            className={`px-5 py-2 rounded-lg border transition ${
              demoView === "instructor"
                ? "bg-sky-600 shadow-lg shadow-sky-500/30"
                : "border-white/20 hover:bg-white/10"
            }`}
          >
            Instructor View
          </button>
        </div>

        {/* preview */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10">
          {demoView === "student" ? (
            <div className="text-left">
              <h3 className="text-indigo-300 font-semibold text-lg">
                🎓 Student Dashboard
              </h3>
              <ul className="mt-4 text-gray-300 space-y-2">
                <li>📚 Courses & Enrollments</li>
                <li>📊 Learning Stats</li>
                <li>🏆 Certificates</li>
                <li>💬 Consultations</li>
                <li>📢 Announcements</li>
                <li>🎯 Recommendations</li>
              </ul>
            </div>
          ) : (
            <div className="text-left">
              <h3 className="text-sky-300 font-semibold text-lg">
                👨‍🏫 Instructor Dashboard
              </h3>
              <ul className="mt-4 text-gray-300 space-y-2">
                <li>📦 Course Management</li>
                <li>🔒 Lesson Locking System</li>
                <li>📅 Consultation Scheduling</li>
                <li>📈 Analytics Dashboard</li>
                <li>⏰ Upcoming Sessions</li>
                <li>🧑‍🎓 Student Management</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-indigo-900 to-sky-700">
        <h2 className="text-4xl font-bold">Contact Us</h2>

        <p className="mt-4 text-indigo-100">
          Need help or want to collaborate?
        </p>

        <div
          className="mt-8 inline-block bg-white/10 px-8 py-4 rounded-xl
        hover:scale-105 transition"
        >
          <p className="font-semibold text-white text-lg">
            📧 edunex@gmail.com
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-400 bg-slate-950 border-t border-white/10">
        © {new Date().getFullYear()} EduNex — MERN Stack Project
      </footer>
    </div>
  );
}
