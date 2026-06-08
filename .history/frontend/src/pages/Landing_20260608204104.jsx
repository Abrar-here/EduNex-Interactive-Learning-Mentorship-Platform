import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-indigo-600 to-sky-500 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">EduNex</h1>

        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          A modern e-learning platform connecting students and instructors with
          structured courses, mentorship, and real-time learning tools.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            to="/login"
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg"
          >
            Get Started
          </Link>

          <a
            href="https://edunexplatform.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 border border-white rounded-lg"
          >
            Live Demo
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold">Course Management</h3>
            <p className="text-sm mt-2">
              Create, enroll and manage structured learning courses.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold">Mentorship System</h3>
            <p className="text-sm mt-2">
              Consultation scheduling and instructor interaction.
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <h3 className="font-semibold">Progress Tracking</h3>
            <p className="text-sm mt-2">
              Track learning progress, stats, and certificates.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gray-50 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="font-semibold">1. Sign Up</h3>
            <p className="text-sm mt-2">
              Create your account as student or instructor.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2. Learn or Teach</h3>
            <p className="text-sm mt-2">
              Access courses or manage your own content.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3. Track Progress</h3>
            <p className="text-sm mt-2">
              Monitor learning stats and achievements.
            </p>
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Built for Everyone</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Students</h3>
            <p className="text-sm mt-2">
              Learn courses, track progress, earn certificates.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Instructors</h3>
            <p className="text-sm mt-2">
              Create courses, manage students, schedule sessions.
            </p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold">Admins</h3>
            <p className="text-sm mt-2">
              Manage platform users and overall system control.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-indigo-600 text-white">
        <h2 className="text-3xl font-bold">Start Learning with EduNex Today</h2>

        <Link
          to="/login"
          className="mt-6 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg"
        >
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EduNex. Built with MERN Stack.
      </footer>
    </div>
  );
}
