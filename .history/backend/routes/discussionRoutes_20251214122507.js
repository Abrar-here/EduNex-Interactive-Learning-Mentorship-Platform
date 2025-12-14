import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";
import {
  createQuestion,
  getCourseQuestions,
  createAnswer,
  getQuestionAnswers,
  upvoteAnswer,
  markAnswerHelpful,
  deleteQuestion,
  deleteAnswer,
} from "../controllers/discussionController.js";

const router = express.Router();

router.post(
  "/courses/:courseId/questions",
  protect,
  authorizeRoles("student"),
  createQuestion
);

router.get("/courses/:courseId/questions", protect, getCourseQuestions);

router.post(
  "/questions/:questionId/answers",
  protect,
  authorizeRoles("student", "instructor"),
  createAnswer
);

router.get("/questions/:questionId/answers", protect, getQuestionAnswers);

router.post("/answers/:answerId/upvote", protect, upvoteAnswer);

router.post("/answers/:answerId/mark-helpful", protect, markAnswerHelpful);

router.delete("/questions/:questionId", protect, deleteQuestion);

router.delete("/answers/:answerId", protect, deleteAnswer);

export default router;
