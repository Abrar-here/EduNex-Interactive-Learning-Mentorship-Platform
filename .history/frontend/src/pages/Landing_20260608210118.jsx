import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-slate-950 text-white scroll-smooth">
      {/* HERO */}
      <section className="min-h-[85vh] flex items-center justify-center px-6 bg-gradient-to-br from-indigo-900 via-indigo-700 to-sky-600">
        <div className="max-w-3xl text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight drop-shadow-lg">
            EduNex
          </h1>

          <p className="mt-5 text-lg text-indigo-100">
            A modern e-learning platform for students and instructors with
            courses, mentorship, progress tracking, and smart learning tools.
          </p>

          {/* feature chips */}
          <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
            {["Courses", "Mentorship", "Progress", "Certificates"].map(
              (item) => (
                <span
                  key={item}
                  className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          {/* buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg
              hover:shadow-indigo-300/50 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>

            <a
              href="#features"
              className="px-6 py-3 border border-white/60 text-white rounded-lg
              hover:bg-white/10 hover:shadow-lg hover:shadow-white/20
              transition-all duration-300"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-20 px-6 bg-slate-950 text-center">
        <h2 className="text-3xl font-bold mb-12">Key Features</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Course Management",
              desc: "Create, enroll, and manage structured learning paths.",
            },
            {
              title: "Mentorship System",
              desc: "Schedule consultations between students and instructors.",
            },
            {
              title: "Progress Tracking",
              desc: "Track learning stats, certificates, and achievements.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10
              hover:bg-white/10 hover:shadow-lg hover:shadow-indigo-500/20
              hover:scale-105 transition-all duration-300"
            >
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-950 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto text-gray-300">
          {[
            {
              title: "Sign Up",
              desc: "Create your account as student or instructor.",
            },
            {
              title: "Learn / Teach",
              desc: "Access courses or manage your own content.",
            },
            {
              title: "Track Progress",
              desc: "Monitor your learning journey and achievements.",
            },
          ].map((step, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 bg-white/5
              hover:shadow-lg hover:shadow-sky-500/20 transition-all duration-300"
            >
              <h3 className="text-white font-semibold">
                {i + 1}. {step.title}
              </h3>
              <p className="mt-2 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 px-6 bg-slate-950 text-center border-t border-white/10">
        <h2 className="text-3xl font-bold">Contact Us</h2>

        <p className="mt-4 text-gray-300">
          Have questions or need support? Reach out anytime.
        </p>

        <div
          className="mt-6 inline-block bg-white/5 border border-white/10 px-6 py-3 rounded-lg
          hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300"
        >
          <p className="text-indigo-300 font-semibold">📧 edunex@gmail.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-white/10 bg-slate-950">
        © {new Date().getFullYear()} EduNex. Built with MERN Stack.
      </footer>

      {/* tiny animation style */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
