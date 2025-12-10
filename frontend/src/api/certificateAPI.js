// src/api/certificateAPI.js
import axios from 'axios';

export async function issueCertificate(userId, courseId) {
  const resp = await axios.post('/api/certificates/issue', { userId, courseId });
  return resp.data;
}

export async function fetchMyCertificates() {
  const resp = await axios.get('/api/my-certificates');
  return resp.data;
}

export function getCertDownloadUrl(certificateId) {
  return `/api/certificates/${certificateId}`;
}
