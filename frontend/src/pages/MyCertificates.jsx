import React, { useEffect, useState } from 'react';
import { fetchMyCertificates } from '../api/certificateAPI';
import CertificateList from '../components/CertificateList';

import '../styles/global.css';
import '../styles/certificate.css';

export default function MyCertificates() {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    fetchMyCertificates()
      .then(data => {
        if (data.certificates) {
          setCertificates(data.certificates);
        }
      })
      .catch(err => {
        console.error('Failed to fetch certificates', err);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="header">My Certificates</h2>
      <CertificateList certificates={certificates} />
    </div>
  );
}

