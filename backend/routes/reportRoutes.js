import express from "express";
import { exportProgressReport } from "../controllers/reportController.js";

const router = express.Router();

// Route to export the progress report PDF
router.get("/", exportProgressReport);

export default router;
