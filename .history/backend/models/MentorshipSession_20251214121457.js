// backend/models/MentorshipSession.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const mentorshipSessionSchema = new Schema(
  {
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    student: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },

    startTime: {
      type: Date,
      required: true,
    },

    endTime: {
      type: Date,
      required: true,
    },

    durationMinutes: {
      type: Number,
      required: true,
      enum: [15, 30],
    },

    status: {
      type: String,
      enum: [
        "booked",
        "cancelledByStudent",
        "cancelledByInstructor",
        "completed",
      ],
      default: "booked",
    },

    studentNote: {
      type: String,
      trim: true,
    },

    instructorNote: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

mentorshipSessionSchema.index({ instructor: 1, startTime: 1 });
mentorshipSessionSchema.index({ student: 1, startTime: 1 });
mentorshipSessionSchema.index({ course: 1, startTime: 1 });

const MentorshipSession = mongoose.model(
  "MentorshipSession",
  mentorshipSessionSchema
);

export default MentorshipSession;
