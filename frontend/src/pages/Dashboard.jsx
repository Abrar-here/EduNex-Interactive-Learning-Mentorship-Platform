import React, { useState, useEffect } from 'react';
import { fetchDashboard } from '../api/dashboardAPI';
import '../styles/dashboard.css';


function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [summary, setSummary] = useState({ totalCourses: 0, completed: 0, inProgress: 0 });

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchDashboard();
        if (data.success) {
          setCourses(data.courses);
          setSummary(data.summary);
        } else {
          console.error('Failed to fetch dashboard');
        }
      } catch (err) {
        console.error('Error fetching dashboard', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div className="container">Loading dashboard...</div>;

  return (
    <div className="container">
      <h2 className="header">My Dashboard</h2>

      <div className="summary">
        <div><strong>Total Courses:</strong> {summary.totalCourses}</div>
        <div><strong>Completed:</strong> {summary.completed}</div>
        <div><strong>In Progress:</strong> {summary.inProgress}</div>
      </div>

      <h3>Enrolled Courses</h3>
      {courses.length === 0 ? (
        <p>You are not enrolled in any course.</p>
      ) : (
        <ul className="course-list">
          {courses.map(c => (
            <li key={c.courseId} className="course-item">
              <div className="course-info">
                <span className="course-title">{c.title}</span>
                <span className="course-status">{c.status}</span>
              </div>
              <div className="course-progress">
                <progress value={c.progressPercent} max="100"></progress>
                <span>{c.progressPercent}%</span>
              </div>
              {/* optionally, link to course detail or certificate */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
