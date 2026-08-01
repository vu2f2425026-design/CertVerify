import React from 'react';
import './Seal.css';

// The seal is CertVerify's signature mark: a 12-point medallion with a
// checkmark, styled after an embossed wax seal / notary stamp. It is reused
// as the logo mark, the hero stamp, and the "verified" indicator so the same
// shape always means the same thing: authenticity confirmed.
const points = [
  [92, 50], [86.4, 71], [71, 86.4], [50, 92], [29, 86.4], [13.6, 71],
  [8, 50], [13.6, 29], [29, 13.6], [50, 8], [71, 13.6], [86.4, 29],
];

function Seal({ size = 40, tone = 'primary', className = '' }) {
  return (
    <svg
      className={`seal seal--${tone} ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="CertVerify authenticity seal"
    >
      {points.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="9" className="seal__scallop" />
      ))}
      <circle cx="50" cy="50" r="40" className="seal__scallop" />
      <circle cx="50" cy="50" r="33" className="seal__face" />
      <path d="M35 51 L45 61 L67 38" className="seal__check" />
    </svg>
  );
}

export default Seal;
