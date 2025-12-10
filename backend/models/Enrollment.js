// backend/models/Enrollment.js
import mongoose from "mongoose";

const EnrollmentSchema = new mongoose.Schema({
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User", 
    required: true 
  },
  course: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Course", 
    required: true 
  },
  status: { 
    type: String, 
    enum: ["in-progress", "completed"], 
    default: "in-progress" 
  },
  progressPercent: { 
    type: Number, 
    default: 0 
  }, // 0–100
  lastUpdated: { 
    type: Date, 
    default: Date.now 
  },
  completedAt: { 
    type: Date, 
    default: null 
  },

  // optionally: store modules completed list, lessons completed, etc.
});

const Enrollment = mongoose.model("Enrollment", EnrollmentSchema);

export default Enrollment;
