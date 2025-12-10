import React from 'react';
import CertificateItem from './CertificateItem';

export default function CertificateList({ certificates }) {
  if (!certificates || certificates.length === 0) {
    return <p>No certificates yet.</p>;
  }
  return (
    <ul className="certificate-list">
      {certificates.map(cert => (
        <CertificateItem key={cert.certificateId} cert={cert} />
      ))}
    </ul>
  );
}
