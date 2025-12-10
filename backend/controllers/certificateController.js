// backend/controllers/certificateController.js
const Certificate = require('../models/Certificate');
const { generateCertificate } = require('../utils/certificateGenerator');
const { v4: uuidv4 } = require('uuid');

async function issueCertificate(req, res) {
  try {
    const { userId, courseId } = req.body;
    // You might check user completed the course here.

    const certificateId = uuidv4();
    const cert = new Certificate({ user: userId, course: courseId, certificateId });
    await cert.save();

    // Optionally fetch user and course to embed names
    const user = await require('../models/User').findById(userId);
    const course = await require('../models/Course').findById(courseId);

    const filepath = await generateCertificate({
      userName: user.name,
      courseName: course.title,
      issueDate: new Date(),
      certificateId
    });

    return res.json({ success: true, certificateId, downloadPath: `/certificates/${certificateId}` });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false, error: 'Server error' });
  }
}

async function getCertificate(req, res) {
  try {
    const { certificateId } = req.params;
    const cert = await Certificate.findOne({ certificateId }).populate('user course');
    if (!cert) return res.status(404).send('Certificate not found.');

    const filepath = path.join(__dirname, '..', 'generated_certificates', `certificate_${certificateId}.pdf`);
    res.download(filepath);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error.');
  }
}

module.exports = { issueCertificate, getCertificate };
