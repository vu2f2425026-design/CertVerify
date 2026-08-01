import React, { useState } from 'react';
import { HiOutlineSearch, HiOutlineQrcode } from 'react-icons/hi';
import { sampleVerificationResult } from '../data/staticData';
import Seal from '../components/Seal';
import './VerificationPage.css';

function VerificationPage() {
  const [certId, setCertId] = useState('');
  const [showResult, setShowResult] = useState(true);
  const result = sampleVerificationResult;

  function handleSearch(e) {
    e.preventDefault();
    if (!certId.trim()) {
      alert('Enter a certificate ID to search.');
      return;
    }
    setShowResult(true);
  }

  return (
    <section className="page-shell verification-page">
      <div className="page-header page-header--center">
        <h1>Verify a certificate</h1>
        <p>Enter a certificate ID below, or scan the QR code printed on the certificate.</p>
      </div>

      <form className="verification-search" onSubmit={handleSearch}>
        <div className="verification-search__field">
          <HiOutlineSearch className="verification-search__icon" />
          <input
            type="text"
            placeholder="Enter Certificate ID"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn--primary">
          Search
        </button>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => alert('Opening camera to scan a QR code')}
        >
          <HiOutlineQrcode /> Scan QR
        </button>
      </form>

      {showResult && (
        <div className="result-card">
          <div className="result-card__header">
            <Seal size={44} tone="success" />
            <span className="status-badge status-badge--success status-badge--lg">
              {result.status}
            </span>
          </div>

          <div className="result-card__grid">
            <div>
              <span className="result-card__label">Certificate ID</span>
              <span className="result-card__value result-card__value--mono">{result.certId}</span>
            </div>
            <div>
              <span className="result-card__label">Student name</span>
              <span className="result-card__value">{result.studentName}</span>
            </div>
            <div>
              <span className="result-card__label">Institution</span>
              <span className="result-card__value">{result.institution}</span>
            </div>
            <div>
              <span className="result-card__label">Course</span>
              <span className="result-card__value">{result.course}</span>
            </div>
            <div>
              <span className="result-card__label">Issue date</span>
              <span className="result-card__value">{result.issueDate}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default VerificationPage;
