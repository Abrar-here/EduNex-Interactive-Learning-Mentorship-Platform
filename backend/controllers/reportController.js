// backend/controllers/reportController.js
import { generateProgressReport } from "../utils/reportGenerator.js";
// optional: import Report from "../models/Report.js";
import User from "../models/User.js";
import Course from "../models/Course.js";   // assuming you have a Course model
// and progress data is derived from user or enrollment + course completion data

export async function exportProgressReport(req, res) {
  try {
    const userId = req.user.id;  // assuming you use auth middleware, and req.user is populated
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Fetch progress data — this depends on how you store progress in your DB.
    // Here's a placeholder example — adjust according to your schema:
    const courses = await Course.find({ /* filter courses relevant to user */ });

    // Suppose for each course you check if user.completedCourses includes that course._id
    const progressData = courses.map(course => {
      const completed = user.completedCourses?.includes(course._id);
      return {
        courseTitle: course.title,
        status: completed ? 'Completed' : 'In Progress'
      };
    });

    // Generate PDF
    const { filePath, filename } = await generateProgressReport({
      userName: user.name,
      progressData
    });

    // Optional: save record
    // await new Report({ user: userId }).save();

    // Send file as download
    res.download(filePath, filename, err => {
      if (err) {
        console.error('Error sending report', err);
        res.status(500).json({ error: 'Failed to download report' });
      }
      // Optionally, delete file after download, or schedule cleanup
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error generating report' });
  }
}
