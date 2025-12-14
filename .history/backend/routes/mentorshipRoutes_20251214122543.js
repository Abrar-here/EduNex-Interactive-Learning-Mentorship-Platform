// backend/routes/mentorshipRoutes.js

import express from "express";
import {
  getMyAvailability,
  upsertAvailabilityForDate,
  getAvailableSlotsForCourse,
  bookSession,
  getTodaySessionsForInstructor,
  getMySessionsForStudent,
  cancelSessionByStudent,
} from "../controllers/mentorshipController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get(
  "/availability/my",
  protect,
  authorizeRoles("instructor"),
  getMyAvailability
);

router.post(
  "/availability",
  protect,
  authorizeRoles("instructor"),
  upsertAvailabilityForDate
);

router.get(
  "/available-slots",
  protect,
  authorizeRoles("student"),
  getAvailableSlotsForCourse
);

router.post("/sessions", protect, authorizeRoles("student"), bookSession);

router.get(
  "/sessions/my",
  protect,
  authorizeRoles("student"),
  getMySessionsForStudent
);

router.delete(
  "/sessions/:id",
  protect,
  authorizeRoles("student"),
  cancelSessionByStudent
);

router.get(
  "/sessions/today",
  protect,
  authorizeRoles("instructor"),
  getTodaySessionsForInstructor
);

export default router;
