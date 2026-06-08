import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold">Welcome to EduNex</h1>
      <p className="mt-2 text-gray-600">
        A Smart E-Learning Platform for Students & Instructors
      </p>

      <Link
        to="/login"
        className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Get Started
      </Link>
    </div>
  );
}
