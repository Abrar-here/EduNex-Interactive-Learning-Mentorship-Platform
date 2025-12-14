import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import { getProfile, updateProfile } from "../controllers/userController.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Role-based pages
router.get("/student", protect, authorizeRoles("student"), (req, res) =>
  res.json({ message: "Welcome Student" })
);
router.get("/instructor", protect, authorizeRoles("instructor"), (req, res) =>
  res.json({ message: "Welcome Instructor" })
);
router.get("/admin", protect, authorizeRoles("admin"), (req, res) =>
  res.json({ message: "Welcome Admin" })
);

// Profile routes
router.get("/me", protect, getProfile);
router.put("/me", protect, updateProfile);

export default router;
