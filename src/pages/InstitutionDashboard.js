import React from 'react';
import { institutionStats, institutionRecords } from '../data/staticData';
import StatCard from '../components/StatCard';
import CertificateTable from '../components/CertificateTable';
import './InstitutionDashboard.css';

function InstitutionDashboard() {
  return (
    <section className="page-shell">
      <div className="page-header page-header--row">
        <div>
          <h1>Institution dashboard</h1>
          <p>Track certificate activity for ABC Engineering College.</p>
        </div>
        <button
          className="btn btn--primary"
          onClick={() => alert('Opening the new certificate issuance form')}
        >
          Issue new certificate
        </button>
      </div>

      <div className="institution-dashboard__stats">
        {institutionStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <h2 className="section-title">Recent certificates</h2>
      <CertificateTable records={institutionRecords} />
    </section>
  );
}

export default InstitutionDashboard;
