// backend/controllers/dashboardController.js
import Enrollment from "../models/Enrollment.js";
import Course from "../models/Course.js";
import User from "../models/User.js";

export async function getStudentDashboard(req, res) {
  try {
    const userId = req.user.id;  // assuming auth middleware sets req.user

    // Fetch enrollments for this user
    const enrollments = await Enrollment.find({ user: userId })
      .populate("course")  // bring course details
      .exec();

    // Build data
    const courses = enrollments.map(e => ({
      courseId: e.course._id,
      title: e.course.title,
      status: e.status,
      progressPercent: e.progressPercent,
      completedAt: e.completedAt,
    }));

    const summary = {
      totalCourses: courses.length,
      completed: courses.filter(c => c.status === "completed").length,
      inProgress: courses.filter(c => c.status === "in-progress").length,
      // optionally: overallProgressPercent: average of progressPercent, or derived logic
    };

    return res.json({ success: true, courses, summary });
  } catch (err) {
    console.error("Error in getStudentDashboard", err);
    return res.status(500).json({ success: false, error: "Server error" });
  }
}
