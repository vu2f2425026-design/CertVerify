import React from 'react';
import Seal from './Seal';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Seal size={26} tone="white" />
          <span>CertVerify</span>
        </div>
        <ul className="footer__links">
          <li>
            <button
              className="footer__link"
              onClick={() => alert('About CertVerify — a lab demonstration project.')}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="footer__link"
              onClick={() => alert('Privacy policy is not part of this lab demonstration.')}
            >
              Privacy
            </button>
          </li>
          <li>
            <button
              className="footer__link"
              onClick={() => alert('Terms of service are not part of this lab demonstration.')}
            >
              Terms
            </button>
          </li>
          <li>
            <button
              className="footer__link"
              onClick={() => alert('Contact: hello@certverify.example (demo only)')}
            >
              Contact
            </button>
          </li>
        </ul>
        <p className="footer__note">© 2025 CertVerify.</p>
      </div>
    </footer>
  );
}

export default Footer;
