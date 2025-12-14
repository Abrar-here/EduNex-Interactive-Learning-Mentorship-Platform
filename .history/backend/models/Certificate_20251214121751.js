// backend/models/Certificate.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const certificateSchema = new Schema(
  {
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

    completionDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    issuedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },

    certificateCode: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    pdfUrl: {
      type: String,
      trim: true,
    },

    status: {
      type: String,
      enum: ["issued", "revoked"],
      default: "issued",
    },
  },
  {
    timestamps: true,
  }
);

certificateSchema.index({ student: 1, course: 1 }, { unique: true });

const Certificate = mongoose.model("Certificate", certificateSchema);
export default Certificate;
