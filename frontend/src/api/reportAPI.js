import axios from 'axios';

export async function exportProgressReport() {
  // this will initiate download
  const resp = await axios.get('/api/reports/export-progress', {
    responseType: 'blob'  // important for binary file
  });
  return resp;
}
