// frontend/src/pages/ProgressReportPage.jsx
import React from 'react';
import ExportReportButton from '../components/ExportReportButton';
import '../styles/global.css';
import '../styles/report.css';

export default function ProgressReportPage() {
  return (
    <div className="container">
      <h2 className="header">My Progress Report</h2>
      <p>Click the button below to download your learning progress as a PDF report.</p>
      <ExportReportButton />
    </div>
  );
}
