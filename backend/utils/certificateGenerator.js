// backend/utils/certificateGenerator.js
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

function generateCertificate({ userName, courseName, issueDate, certificateId }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      layout: 'landscape'
    });

    const fileName = `certificate_${certificateId}.pdf`;
    const outputPath = path.join(__dirname, '..', 'generated_certificates', fileName);
    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    // Add background image (you can use a certificate template PNG)
    const imgPath = path.join(__dirname, '..', 'public', 'certificate_template.png');
    doc.image(imgPath, 0, 0, { width: doc.page.width, height: doc.page.height });

    // Add text: name, course name, date
    doc.fontSize(36).fillColor('#000').text(userName, { align: 'center', valign: 'center' });
    doc.moveDown();
    doc.fontSize(24).text(courseName, { align: 'center' });
    doc.moveDown();
    doc.fontSize(18).text(`Date: ${issueDate.toDateString()}`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Certificate ID: ${certificateId}`, { align: 'center' });

    doc.end();
    stream.on('finish', () => resolve(outputPath));
    stream.on('error', reject);
  });
}

module.exports = { generateCertificate };
