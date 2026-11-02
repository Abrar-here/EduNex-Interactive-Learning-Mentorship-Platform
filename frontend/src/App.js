// frontend/src/App.js
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Landing from "./pages/Landing";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import StudentPage from "./components/StudentPage";
import InstructorPage from "./components/InstructorPage";
import AdminPage from "./components/AdminPage";
import CreateCourse from "./components/CreateCourse";
import { AuthContext } from "./context/AuthContext";
import AppNavbar from "./components/AppNavbar";

import CourseDetails from "./pages/CourseDetails";
import MyCourses from "./pages/MyCourses";
import EditCourse from "./pages/EditCourse";
import CourseDiscussion from "./pages/CourseDiscussion";
import AddLesson from "./pages/AddLesson";
import CourseList from "./pages/CourseList";
import InstructorCourseDetails from "./pages/InstructorCourseDetails";
import StudentMyConsultations from "./pages/StudentMyConsultations";
import StudentConsultationBooking from "./pages/StudentConsultationBooking";
import InstructorConsultationSchedule from "./pages/InstructorConsultationSchedule";
import InstructorTodayConsultations from "./pages/InstructorTodayConsultations";
import NotificationsPage from "./pages/NotificationsPage";
import MyCertificates from "./pages/MyCertificates";
import CertificateDetail from "./pages/CertificateDetail";
import LearningStats from "./pages/LearningStats";

function App() {
  const { auth } = useContext(AuthContext);

  const getDashboardRoute = () => {
    if (auth.user?.role === "student") return "/student";
    if (auth.user?.role === "instructor") return "/instructor";
    if (auth.user?.role === "admin") return "/admin";
    return "/";
  };

  return (
    <BrowserRouter>
      <div className="App">
        <AppNavbar />
        <main className="App-main pt-20">
          <div className="app-shell page-fade">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Landing />} />

              <Route
                path="/login"
                element={
                  !auth.user ? <Login /> : <Navigate to={getDashboardRoute()} />
                }
              />
              <Route
                path="/register"
                element={
                  !auth.user ? (
                    <Register />
                  ) : (
                    <Navigate to={getDashboardRoute()} />
                  )
                }
              />

              {/* Profile */}
              <Route
                path="/profile"
                element={auth.user ? <Profile /> : <Navigate to="/" />}
              />

              {/* ---------- Student Routes ---------- */}
              <Route
                path="/student"
                element={
                  auth.user?.role === "student" ? (
                    <StudentPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/student/courses"
                element={
                  auth.user?.role === "student" ? (
                    <CourseList />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/student/courses/:id"
                element={
                  auth.user?.role === "student" ? (
                    <CourseDetails />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/student/my-courses"
                element={
                  auth.user?.role === "student" ? (
                    <MyCourses />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/student/consultations"
                element={
                  auth.user?.role === "student" ? (
                    <StudentMyConsultations />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/student/courses/:id/consultation"
                element={
                  auth.user?.role === "student" ? (
                    <StudentConsultationBooking />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              {/* Learning Stats */}
              <Route
                path="/student/stats"
                element={
                  auth.user?.role === "student" ? (
                    <LearningStats />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              {/* Certificates */}
              <Route
                path="/student/certificates"
                element={
                  auth.user?.role === "student" ? (
                    <MyCertificates />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="/student/certificates/:id"
                element={
                  auth.user?.role === "student" ? (
                    <CertificateDetail />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              {/* ---------- Instructor Routes ---------- */}
              <Route
                path="/instructor"
                element={
                  auth.user?.role === "instructor" ? (
                    <InstructorPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/instructor/create-course"
                element={
                  auth.user?.role === "instructor" ? (
                    <CreateCourse />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/instructor/consultations/schedule"
                element={
                  auth.user?.role === "instructor" ? (
                    <InstructorConsultationSchedule />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/instructor/consultations/today"
                element={
                  auth.user?.role === "instructor" ? (
                    <InstructorTodayConsultations />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/instructor/courses/:id"
                element={
                  auth.user?.role === "instructor" ? (
                    <InstructorCourseDetails />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/instructor/course/:id/edit"
                element={
                  auth.user?.role === "instructor" ? (
                    <EditCourse />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              <Route
                path="/instructor/courses/:id/add-lesson"
                element={
                  auth.user?.role === "instructor" ? (
                    <AddLesson />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              {/* ---------- Discussion (both roles) ---------- */}
              <Route
                path="/student/courses/:id/discussion"
                element={auth.user ? <CourseDiscussion /> : <Navigate to="/" />}
              />
              <Route
                path="/instructor/courses/:id/discussion"
                element={auth.user ? <CourseDiscussion /> : <Navigate to="/" />}
              />

              {/* ---------- General Course Listing ---------- */}
              <Route path="/courses" element={<CourseList />} />

              {/* ---------- Notifications ---------- */}
              <Route
                path="/notifications"
                element={
                  auth.user ? <NotificationsPage /> : <Navigate to="/" />
                }
              />

              {/* ---------- Admin ---------- */}
              <Route
                path="/admin"
                element={
                  auth.user?.role === "admin" ? (
                    <AdminPage />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
