// backend/utils/reportGenerator.js
import PDFDocument from "pdfkit";
import path from "path";
import fs from "fs";

// __dirname replacement for ES Modules
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Convert CommonJS to ES Module version
export async function generateProgressReport({ userName, progressData /* e.g. list of courses with status */ }) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const timestamp = Date.now();
    const filename = `progress_report_${userName}_${timestamp}.pdf`;
    const outputPath = path.join(__dirname, "..", "generated_reports", filename);

    // ensure folder exists
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });

    const stream = fs.createWriteStream(outputPath);
    doc.pipe(stream);

    // Header
    doc.fontSize(20).text("Progress Report", { align: "center" });
    doc.moveDown();
    doc.fontSize(14).text(`Student: ${userName}`);
    doc.text(`Date: ${new Date().toLocaleDateString()}`);
    doc.moveDown();

    // Table header
    doc.fontSize(12).text("Course", { continued: true, width: 300 });
    doc.text("Status", { align: "right" });
    doc.moveDown();

    // Table data
    progressData.forEach(item => {
      doc.fontSize(12).text(item.courseTitle, { continued: true, width: 300 });
      doc.text(item.status, { align: "right" });
      doc.moveDown();
    });

    doc.end();

    stream.on("finish", () => resolve({ filePath: outputPath, filename }));
    stream.on("error", reject);
  });
}
