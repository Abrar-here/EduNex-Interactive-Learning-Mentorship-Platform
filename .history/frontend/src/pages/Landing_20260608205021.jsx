import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-900 via-indigo-700 to-sky-600">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            EduNex
          </h1>

          <p className="mt-5 text-lg text-indigo-100">
            A modern e-learning platform connecting students and instructors
            with structured courses, mentorship, progress tracking, and smart
            learning tools.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition"
            >
              Get Started
            </Link>

            <Link
              to="/register"
              className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 bg-slate-950 text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-lg">Course Management</h3>
            <p className="text-sm text-gray-300 mt-2">
              Create, enroll, and manage structured learning paths.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-lg">Mentorship System</h3>
            <p className="text-sm text-gray-300 mt-2">
              Schedule consultations between students and instructors.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <h3 className="font-semibold text-lg">Progress Tracking</h3>
            <p className="text-sm text-gray-300 mt-2">
              Track learning stats, certificates, and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-300">
          <div>
            <h3 className="text-white font-semibold">1. Sign Up</h3>
            <p className="mt-2 text-sm">
              Create your account as student or instructor.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">2. Learn / Teach</h3>
            <p className="mt-2 text-sm">
              Access courses or manage your own content.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold">3. Track Progress</h3>
            <p className="mt-2 text-sm">
              Monitor your learning journey and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 bg-slate-950 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <p className="mt-4 text-gray-300">
          Have questions or need support? Reach out anytime.
        </p>

        <div className="mt-6 inline-block bg-white/5 border border-white/10 px-6 py-3 rounded-lg">
          <p className="text-indigo-300 font-semibold">📧 edunex@gmail.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-white/10 bg-slate-950">
        © {new Date().getFullYear()} EduNex. Built with MERN Stack.
      </footer>
    </div>
  );
}
