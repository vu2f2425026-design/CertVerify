import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowRight } from 'react-icons/hi';
import Seal from './Seal';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <span className="hero__eyebrow">Trusted by 40+ institutions</span>
        <h1 className="hero__title">
          Verify academic certificates <em>instantly</em>.
        </h1>
        <p className="hero__description">
          CertVerify gives every certificate a unique ID and lets employers
          confirm it's genuine with a single search — no phone calls, no waiting.
        </p>
        <div className="hero__actions">
          <Link to="/verify" className="btn btn--primary">
            Verify a certificate <HiOutlineArrowRight />
          </Link>
          <Link to="/about" className="btn btn--ghost">
            How it works
          </Link>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__certificate">
          <div className="hero__certificate-header">
            <Seal size={30} tone="primary" />
            <span>ABC Engineering College</span>
          </div>
          <div className="hero__certificate-line hero__certificate-line--title" />
          <div className="hero__certificate-line" />
          <div className="hero__certificate-line hero__certificate-line--short" />
          <div className="hero__certificate-footer">
            <span className="hero__certificate-id">CERT-2025-0417</span>
          </div>
        </div>
        <div className="hero__stamp">
          <Seal size={92} tone="success" className="seal--stamp" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
