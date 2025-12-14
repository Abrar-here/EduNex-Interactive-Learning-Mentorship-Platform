// backend/routes/certificateRoutes.js

import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import {
  getMyCertificates,
  getCourseCertificates,
  getCertificateById,
  issueCertificateManually,
  revokeCertificate,
} from "../controllers/certificateController.js";

const router = express.Router();

router.get("/my", protect, authorizeRoles("student"), getMyCertificates);

router.get(
  "/course/:courseId",
  protect,
  authorizeRoles("instructor", "admin"),
  getCourseCertificates
);

router.post(
  "/course/:courseId/students/:studentId",
  protect,
  authorizeRoles("instructor", "admin"),
  issueCertificateManually
);

router.patch(
  "/:id/revoke",
  protect,
  authorizeRoles("admin", "instructor"),
  revokeCertificate
);

router.get("/:id", protect, getCertificateById);

export default router;
