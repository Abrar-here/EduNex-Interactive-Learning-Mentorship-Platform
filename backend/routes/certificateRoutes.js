// backend/routes/certificateRoutes.js
const express = require('express');
const router = express.Router();
const { issueCertificate, getCertificate } = require('../controllers/certificateController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/issue', authMiddleware, issueCertificate);
router.get('/:certificateId', authMiddleware, getCertificate);

module.exports = router;
