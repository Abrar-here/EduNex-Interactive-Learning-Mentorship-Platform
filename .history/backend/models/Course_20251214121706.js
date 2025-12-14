// backend/models/Course.js
import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    contentType: {
      type: String,
      enum: ["video", "pdf", "doc"],
      required: true,
    },
    url: { type: String, required: true },
    durationMinutes: { type: Number, default: 0 },
    isLocked: { type: Boolean, default: false },
  },
  { _id: true }
);

const announcementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  { timestamps: true }
);

const completedLessonSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    lessons: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    completedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { _id: false }
);

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    level: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },

    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "draft",
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    prerequisites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],

    lessons: [lessonSchema],

    enrolledStudents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    completedLessons: [completedLessonSchema],

    announcements: [announcementSchema],

    startDate: { type: Date, default: null },
    endDate: { type: Date, default: null },

    duration: { type: Number, default: null },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
