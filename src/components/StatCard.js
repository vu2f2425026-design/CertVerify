import React from 'react';
import './StatCard.css';

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <p className="stat-card__value">{value}</p>
      <p className="stat-card__label">{label}</p>
    </div>
  );
}

export default StatCard;
