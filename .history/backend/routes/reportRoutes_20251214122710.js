// backend/routes/reportRoutes.js
import express from "express";
import { generateProgressReport } from "../controllers/reportController.js";
import {
  createContentReport,
  getMyContentReports,
  adminGetReports,
  adminUpdateReportStatus,
} from "../controllers/contentReportController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/progress", protect, generateProgressReport);

router.post("/content", protect, createContentReport);
router.post("/", protect, createContentReport);

router.get("/my-content", protect, getMyContentReports);

router.get("/", protect, authorizeRoles("admin"), adminGetReports);

router.patch(
  "/:id/status",
  protect,
  authorizeRoles("admin"),
  adminUpdateReportStatus
);

export default router;
