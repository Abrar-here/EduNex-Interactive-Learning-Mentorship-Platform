// backend/models/InstructorAvailability.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const timeRangeSchema = new Schema(
  {
    startTime: {
      type: String,
      required: true,
      trim: true,
    },

    endTime: {
      type: String,
      required: true,
      trim: true,
    },

    note: {
      type: String,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const instructorAvailabilitySchema = new Schema(
  {
    instructor: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: String,
      required: true,
      trim: true,
    },

    timeRanges: {
      type: [timeRangeSchema],
      default: [],
    },

    dayNote: {
      type: String,
      trim: true,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

instructorAvailabilitySchema.index(
  { instructor: 1, date: 1 },
  { unique: true }
);

const InstructorAvailability = mongoose.model(
  "InstructorAvailability",
  instructorAvailabilitySchema
);

export default InstructorAvailability;
