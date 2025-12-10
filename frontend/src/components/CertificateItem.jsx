import React from 'react';

export default function CertificateItem({ cert }) {
  const { certificateId, course, issuedAt } = cert;
  const downloadUrl = `/api/certificates/${certificateId}`;

  return (
    <li className="certificate-item">
      <div>
        <strong>{course.title}</strong> — {new Date(issuedAt).toLocaleDateString()}
      </div>
      <div>
        <a href={downloadUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
          Download
        </a>
      </div>
    </li>
  );
}
