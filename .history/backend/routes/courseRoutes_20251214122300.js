import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import {
  createCourse,
  getCourses,
  getCourseById,
  enrollInCourse,
  getMyCourses,
  updateCourse,
  addLessonToCourse,
  deleteLesson,
  completeLesson,
  updateCourseStatus,
  canAccessLesson,
  addAnnouncement,
  getAnnouncements,
  deleteCourse,
} from "../controllers/courseController.js";

const router = express.Router();

router.post("/", protect, authorizeRoles("instructor"), createCourse);

router.put("/:id", protect, authorizeRoles("instructor"), updateCourse);

router.post(
  "/:id/lessons",
  protect,
  authorizeRoles("instructor"),
  addLessonToCourse
);

router.delete(
  "/:courseId/lessons/:lessonId",
  protect,
  authorizeRoles("instructor"),
  deleteLesson
);

router.delete(
  "/:id",
  protect,
  authorizeRoles("instructor", "admin"),
  deleteCourse
);

router.post(
  "/:id/announcements",
  protect,
  authorizeRoles("instructor"),
  addAnnouncement
);

router.get("/my-courses", protect, authorizeRoles("student"), getMyCourses);

router.post("/:id/enroll", protect, authorizeRoles("student"), enrollInCourse);

router.post(
  "/:courseId/lessons/:lessonId/complete",
  protect,
  authorizeRoles("student"),
  canAccessLesson,
  completeLesson
);

router.get(
  "/:id/announcements",
  protect,
  authorizeRoles("student"),
  getAnnouncements
);

router.put(
  "/:id/status",
  protect,
  authorizeRoles("instructor"),
  updateCourseStatus
);

router.get("/", protect, getCourses);

router.get("/:id", protect, getCourseById);

export default router;
