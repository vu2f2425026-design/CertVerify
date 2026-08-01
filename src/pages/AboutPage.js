import React from 'react';
import { HiOutlineDocumentText, HiOutlineShieldCheck, HiOutlineLightningBolt } from 'react-icons/hi';
import './AboutPage.css';

const points = [
  {
    icon: HiOutlineDocumentText,
    title: 'One certificate ID, one record',
    text: 'Every certificate CertVerify issues gets a unique ID that maps to exactly one record, so there is never any ambiguity about which document is being checked.',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Built for tamper-evidence',
    text: 'Institutions control issuance and revocation, so a certificate\u2019s status always reflects the issuing college\u2019s own records.',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Verification in seconds',
    text: 'Employers do not need an account. A certificate ID or a QR scan is all it takes to confirm a document is genuine.',
  },
];

function AboutPage() {
  return (
    <section className="page-shell about-page">
      <div className="page-header page-header--center">
        <h1>About CertVerify</h1>
        <p>
          CertVerify is a digital platform that lets educational institutions issue
          authentic academic certificates, and lets anyone verify them instantly.
        </p>
      </div>

      <div className="about-page__grid">
        {points.map(({ icon: Icon, title, text }) => (
          <div className="about-point" key={title}>
            <div className="about-point__icon">
              <Icon size={24} />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
