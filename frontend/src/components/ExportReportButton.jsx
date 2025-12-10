// frontend/src/components/ExportReportButton.jsx
import React from 'react';

export default function ExportReportButton() {
  const handleExport = async () => {
    try {
      const resp = await fetch('/api/reports/export-progress', {
        method: 'GET',
        credentials: 'include', // if using cookies/auth
      });
      if (!resp.ok) {
        throw new Error('Error exporting report');
      }
      const blob = await resp.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'progress_report.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (err) {
      console.error(err);
      alert('Failed to export report');
    }
  };

  return <button className="btn" onClick={handleExport}>Export Progress Report (PDF)</button>;
}
