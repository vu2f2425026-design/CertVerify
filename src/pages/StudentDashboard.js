import React from 'react';
import { student, studentCertificates } from '../data/staticData';
import StudentCard from '../components/StudentCard';
import './StudentDashboard.css';
import { Link } from 'react-router-dom';

const profileFields = [
  { label: 'Student ID', value: student.studentId },
  { label: 'Institution', value: student.institution },
  { label: 'Department', value: student.department },
  { label: 'Course', value: student.course },
  { label: 'Current semester', value: student.semester },
];

function StudentDashboard() {
  return (
    <section className="page-shell student-dashboard">
      <div className="page-header">
        <h1>Welcome back, {student.name.split(' ')[0]}</h1>
        <p>Here's a summary of your profile and every certificate issued to you.</p>
        <Link to="/request-certificate" className="request-cert-link">Request a Certificate</Link>
      </div>

      <div className="profile-card">
        <div className="profile-card__avatar">{student.name.charAt(0)}</div>
        <div className="profile-card__details">
          <h2 className="profile-card__name">{student.name}</h2>
          <div className="profile-card__grid">
            {profileFields.map((field) => (
              <div key={field.label}>
                <span className="profile-card__label">{field.label}</span>
                <span className="profile-card__value">{field.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <h2 className="section-title">Your certificates</h2>
      <div className="student-dashboard__grid">
        {studentCertificates.map((cert) => (
          <StudentCard key={cert.id} certificate={cert} />
        ))}
      </div>
    </section>
  );
}

export default StudentDashboard;
