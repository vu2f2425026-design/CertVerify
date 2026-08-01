import React from 'react';
import './StatusBadge.css';

const toneMap = {
  Verified: 'success',
  VALID: 'success',
  Pending: 'warning',
  Revoked: 'danger',
};

function StatusBadge({ status, size = 'sm' }) {
  const tone = toneMap[status] || 'warning';
  return (
    <span className={`status-badge status-badge--${tone} status-badge--${size}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
