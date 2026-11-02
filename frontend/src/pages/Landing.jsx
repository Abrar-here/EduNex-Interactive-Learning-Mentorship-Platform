import { useState } from "react";
import { Link } from "react-router-dom";

const heading = { fontFamily: "'Bricolage Grotesque', system-ui, sans-serif" };
const body = { fontFamily: "'Figtree', system-ui, sans-serif" };

const features = [
  {
    title: "Courses that stay organised",
    desc: "Lessons sit in a clear order, enrolment takes one click, and students always know what to open next.",
  },
  {
    title: "Tools instructors actually need",
    desc: "Build courses, lock lessons until the time is right, and take consultation requests in one place.",
  },
  {
    title: "Progress you can see",
    desc: "Every lesson finished moves a bar forward. Finish a course and the certificate is waiting for you.",
  },
];

const steps = [
  {
    title: "Create an account",
    desc: "Join as a student or as an instructor.",
  },
  { title: "Learn or teach", desc: "Enrol in courses, or publish your own." },
  {
    title: "Track progress",
    desc: "Watch achievements build up lesson by lesson.",
  },
  {
    title: "Earn a certificate",
    desc: "Complete a course and download your certificate.",
  },
];

function Progress({ value, color = "bg-indigo-500" }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-slate-100">
      <div
        className={`h-1.5 rounded-full ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function HeroPreview() {
  const rows = [
    {
      name: "Web Development Basics",
      meta: "12 of 16 lessons",
      value: 75,
      color: "bg-indigo-500",
    },
    {
      name: "Data Structures",
      meta: "5 of 14 lessons",
      value: 36,
      color: "bg-sky-500",
    },
    {
      name: "UI Design Principles",
      meta: "Completed",
      value: 100,
      color: "bg-emerald-500",
    },
  ];
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-indigo-200/60 via-sky-100/60 to-emerald-100/60 blur-2xl" />
      <div className="edx-rise relative rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-indigo-900/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">Welcome back</p>
            <p className="text-lg font-semibold text-slate-900" style={heading}>
              Continue learning
            </p>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600">
            A
          </div>
        </div>

        <div className="mt-6 space-y-5">
          {rows.map((r) => (
            <div key={r.name}>
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <p className="text-sm font-medium text-slate-800">{r.name}</p>
                <p className="shrink-0 text-xs text-slate-500">{r.meta}</p>
              </div>
              <Progress value={r.value} color={r.color} />
            </div>
          ))}
        </div>

        <div className="mt-7 flex items-center gap-3 rounded-2xl bg-emerald-50 px-4 py-3">
          <span className="text-xl" aria-hidden="true">
            🎓
          </span>
          <div>
            <p className="text-sm font-medium text-emerald-900">
              Certificate ready
            </p>
            <p className="text-xs text-emerald-700">UI Design Principles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudentDemo() {
  const courses = [
    { name: "Web Development Basics", value: 75 },
    { name: "Data Structures", value: 36 },
  ];
  return (
    <div className="grid gap-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <p className="mb-4 text-sm font-medium text-slate-500">My courses</p>
        <div className="space-y-5">
          {courses.map((c) => (
            <div key={c.name}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-medium text-slate-800">{c.name}</span>
                <span className="text-slate-500">{c.value}%</span>
              </div>
              <Progress value={c.value} />
            </div>
          ))}
        </div>
      </div>
      <div className="space-y-4 md:col-span-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-800">Consultation</p>
          <p className="mt-1 text-sm text-slate-500">
            Thursday, 4:00 PM with your instructor
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-800">Announcement</p>
          <p className="mt-1 text-sm text-slate-500">
            Week 5 lessons are now open.
          </p>
        </div>
      </div>
    </div>
  );
}

function InstructorDemo() {
  const [lessons, setLessons] = useState([
    { name: "Lesson 1: Introduction", locked: false },
    { name: "Lesson 2: Core concepts", locked: false },
    { name: "Lesson 3: Final project", locked: true },
  ]);
  const toggle = (i) =>
    setLessons((prev) =>
      prev.map((l, idx) => (idx === i ? { ...l, locked: !l.locked } : l)),
    );

  return (
    <div className="grid gap-8 md:grid-cols-5">
      <div className="md:col-span-3">
        <p className="mb-4 text-sm font-medium text-slate-500">
          Lessons (select a lesson to lock or unlock it)
        </p>
        <div className="space-y-2">
          {lessons.map((l, i) => (
            <button
              key={l.name}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-left text-sm transition hover:border-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              <span className="font-medium text-slate-800">{l.name}</span>
              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${
                  l.locked
                    ? "bg-amber-50 text-amber-700"
                    : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {l.locked ? "Locked" : "Open"}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-4 md:col-span-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-800">
            Students enrolled
          </p>
          <p className="mt-1 text-sm text-slate-500">
            See who is active and who needs a nudge.
          </p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-800">
            Consultation requests
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Accept or reschedule from one list.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [demoView, setDemoView] = useState("student");

  return (
    <div
      className="min-h-screen scroll-smooth overflow-x-hidden text-slate-700 antialiased"
      style={{ ...body, backgroundColor: "#F8F8FC" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,700&family=Figtree:wght@400;500;600&display=swap');
        @keyframes edxRise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .edx-rise { animation: edxRise .8s ease-out both; }
        @media (prefers-reduced-motion: reduce) { .edx-rise { animation: none; } html { scroll-behavior: auto; } }
      `}</style>

      {/* HERO */}
      <section
        id="top"
        className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 pt-16 md:grid-cols-2 md:pt-24"
      >
        <div className="edx-rise">
          <h1
            className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-6xl"
            style={heading}
          >
            Learn at your own pace. Teach without the busywork.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
            EduNex brings courses, mentorship, progress tracking and
            certificates into one calm place for students and instructors.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/login"
              className="rounded-full bg-indigo-600 px-7 py-3 font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Get started
            </Link>
            <a
              href="#demo"
              className="rounded-full border border-slate-300 px-7 py-3 font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              See the preview
            </a>
          </div>
        </div>
        <HeroPreview />
      </section>

      {/* FEATURES */}
      <section
        id="features"
        className="scroll-mt-20 border-y border-slate-200/70 bg-white py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <h2
              className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
              style={heading}
            >
              Everything a course needs, in one place
            </h2>
            <p className="mt-4 max-w-sm leading-relaxed text-slate-600">
              EduNex is a full-stack learning platform where students learn
              through structured courses and instructors manage content and
              sessions.
            </p>
          </div>
          <div className="divide-y divide-slate-200 md:col-span-3">
            {features.map((f) => (
              <div key={f.title} className="py-6 first:pt-0 last:pb-0">
                <h3
                  className="text-lg font-semibold text-slate-900"
                  style={heading}
                >
                  {f.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-slate-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2
          className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          style={heading}
        >
          How it works
        </h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-sm font-semibold text-indigo-600"
                style={heading}
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {s.desc}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* DEMO */}
      <section id="demo" className="scroll-mt-20 px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <h2
            className="text-center text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            style={heading}
          >
            Preview both sides of EduNex
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-slate-600">
            Switch between the student and instructor dashboards.
          </p>

          <div className="mt-8 flex justify-center">
            <div
              className="inline-flex rounded-full bg-slate-200/70 p-1"
              role="tablist"
            >
              {[
                ["student", "Student"],
                ["instructor", "Instructor"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={demoView === key}
                  onClick={() => setDemoView(key)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    demoView === key
                      ? "bg-white text-slate-900 shadow"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-indigo-900/5 md:p-10">
            {demoView === "student" ? <StudentDemo /> : <InstructorDemo />}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-indigo-700 to-sky-600 px-8 py-16 text-center text-white">
          <h2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={heading}
          >
            Ready to start learning?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-indigo-100">
            Create your account in a minute. Questions or ideas? Write to us at{" "}
            <a
              href="mailto:edunex@gmail.com"
              className="underline underline-offset-4"
            >
              edunex@gmail.com
            </a>
            .
          </p>
          <Link
            to="/login"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-medium text-indigo-700 transition hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
          >
            Get started
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} EduNex. A MERN stack project.
      </footer>
    </div>
  );
}
