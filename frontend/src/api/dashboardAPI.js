import axios from 'axios';

export async function fetchDashboard() {
  const resp = await axios.get('/api/dashboard');  // backend endpoint
  return resp.data;  // expect { success: true, courses: [...], summary: {...} }
}
