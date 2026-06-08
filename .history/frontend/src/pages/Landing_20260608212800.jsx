import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [demoView, setDemoView] = useState("student");

  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-6 bg-gradient-to-br from-indigo-950 via-indigo-800 to-sky-600">
        {/* animated background icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute text-white/10 text-6xl top-10 left-10 animate-bounce">
            📚
          </div>
          <div className="absolute text-white/10 text-5xl top-1/3 right-16 animate-pulse">
            🎓
          </div>
          <div className="absolute text-white/10 text-6xl bottom-10 left-1/4 animate-bounce">
            📖
          </div>
          <div className="absolute text-white/10 text-5xl bottom-20 right-1/4 animate-pulse">
            ✏️
          </div>
        </div>

        <div className="relative text-center max-w-4xl">
          {/* badge */}
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 border border-white/20 text-xs text-indigo-100 backdrop-blur">
            🚀 Full-Stack MERN Learning Platform
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            EduNex
          </h1>

          <p className="mt-6 text-lg md:text-xl text-indigo-100">
            A smart learning ecosystem connecting students & instructors with
            courses, mentorship, progress tracking, and certifications.
          </p>

          {/* chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm">
            {["Courses", "Mentorship", "Progress", "Certificates"].map(
              (item) => (
                <span
                  key={item}
                  className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-md hover:bg-white/20 transition"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/login"
              className="px-7 py-3 bg-white text-indigo-700 font-semibold rounded-xl
              shadow-lg hover:shadow-indigo-300/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>

            {/* FIXED DEMO BUTTON */}
            <a
              href="#demo"
              className="relative px-7 py-3 rounded-xl font-semibold
              bg-emerald-500 text-white
              hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-400/40
              transition-all duration-300"
            >
              ✨ Try Demo Preview
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-ping"></span>
            </a>
          </div>

          {/* scroll hint */}
          <div className="mt-10 text-xs text-white/70 animate-bounce">
            ↓ Scroll to explore
          </div>
        </div>
      </section>

      {/* WHAT EDUNEX DOES */}
      <section className="py-24 px-6 text-center bg-slate-950">
        <h2 className="text-4xl font-bold mb-6">What is EduNex?</h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          EduNex is a full-stack e-learning platform where students learn
          through structured courses, instructors manage content and sessions,
          and users track progress with certificates and analytics.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "📚 Structured Courses",
              desc: "Organized lessons, enrollment system, and learning paths.",
            },
            {
              title: "🧑‍🏫 Instructor Tools",
              desc: "Course creation, lesson locking, consultations, and management.",
            },
            {
              title: "📊 Smart Tracking",
              desc: "Progress monitoring, analytics, achievements, and certificates.",
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

      {/* HOW IT WORKS (UPDATED) */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Sign Up",
              desc: "Create account as student or instructor.",
            },
            {
              title: "Learn / Teach",
              desc: "Use courses, lessons, and mentorship system.",
            },
            {
              title: "Track Progress",
              desc: "Monitor achievements and growth.",
            },
            {
              title: "Earn Certificates",
              desc: "Receive certificates after completing courses and milestones.",
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

      {/* DEMO */}
      <section id="demo" className="py-24 px-6 bg-slate-950 text-center">
        <h2 className="text-4xl font-bold mb-4">Interactive Demo Preview</h2>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          Switch between student and instructor views to explore real platform
          features.
        </p>

        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setDemoView("student")}
            className={`px-5 py-2 rounded-lg border transition ${
              demoView === "student"
                ? "bg-indigo-600 shadow-lg shadow-indigo-500/40"
                : "border-white/20 hover:bg-white/10"
            }`}
          >
            Student View
          </button>

          <button
            onClick={() => setDemoView("instructor")}
            className={`px-5 py-2 rounded-lg border transition ${
              demoView === "instructor"
                ? "bg-sky-600 shadow-lg shadow-sky-500/40"
                : "border-white/20 hover:bg-white/10"
            }`}
          >
            Instructor View
          </button>
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white/5 border border-white/10">
          {demoView === "student" ? (
            <div className="text-left">
              <h3 className="text-indigo-300 font-semibold text-lg">
                🎓 Student Dashboard
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Courses, progress tracking, certificates, consultations,
                recommendations, announcements.
              </p>
            </div>
          ) : (
            <div className="text-left">
              <h3 className="text-sky-300 font-semibold text-lg">
                👨‍🏫 Instructor Dashboard
              </h3>
              <p className="text-gray-400 mt-2 text-sm">
                Course creation, lesson locking system, consultations,
                analytics, student management.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 px-6 text-center bg-gradient-to-br from-indigo-900 to-sky-700">
        <h2 className="text-4xl font-bold">Contact Us</h2>

        <p className="mt-4 text-indigo-100">
          For queries, support, or collaboration
        </p>

        <div
          className="mt-8 inline-block bg-white/10 px-8 py-4 rounded-xl
        hover:scale-105 hover:shadow-xl transition-all duration-300"
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
