// backend/models/Report.js
import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    reporter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    targetType: {
      type: String,
      required: true,
      enum: ["course", "question", "answer", "user"],
    },

    targetId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },

    targetSummary: {
      type: String,
    },

    reason: {
      type: String,
      required: true,
    },

    details: {
      type: String,
    },

    status: {
      type: String,
      enum: ["open", "in_review", "resolved", "dismissed"],
      default: "open",
    },

    resolutionNotes: {
      type: String,
    },

    resolvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Report = mongoose.model("Report", reportSchema);
export default Report;
