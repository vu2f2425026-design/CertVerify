import React from 'react';
import { HiOutlineEye, HiOutlineDownload, HiOutlineShare } from 'react-icons/hi';
import StatusBadge from './StatusBadge';
import './StudentCard.css';

function StudentCard({ certificate }) {
  const { id, course, grade, issueDate, status } = certificate;

  return (
    <div className="student-card">
      <div className="student-card__top">
        <div>
          <p className="student-card__course">{course}</p>
          <p className="student-card__id">{id}</p>
        </div>
        <StatusBadge status={status} />
      </div>

      <div className="student-card__meta">
        <div>
          <span className="student-card__meta-label">Grade</span>
          <span className="student-card__meta-value">{grade}</span>
        </div>
        <div>
          <span className="student-card__meta-label">Issued on</span>
          <span className="student-card__meta-value">{issueDate}</span>
        </div>
      </div>

      <div className="student-card__actions">
        <button className="icon-btn" onClick={() => alert(`Viewing certificate ${id}`)}>
          <HiOutlineEye /> View
        </button>
        <button className="icon-btn" onClick={() => alert(`Downloading certificate ${id}`)}>
          <HiOutlineDownload /> Download
        </button>
        <button className="icon-btn" onClick={() => alert(`Sharing certificate ${id}`)}>
          <HiOutlineShare /> Share
        </button>
      </div>
    </div>
  );
}

export default StudentCard;
