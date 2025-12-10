// backend/models/Certificate.js
const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  issuedAt: { type: Date, default: Date.now },
  certificateId: { type: String, required: true, unique: true },
  // optionally: url or path if storing the PDF file, or we can regenerate on demand
});

module.exports = mongoose.model('Certificate', CertificateSchema);
