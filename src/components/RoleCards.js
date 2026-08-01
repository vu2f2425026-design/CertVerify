import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineAcademicCap, HiOutlineOfficeBuilding, HiOutlineBadgeCheck } from 'react-icons/hi';
import './RoleCards.css';

const roles = [
  {
    icon: HiOutlineAcademicCap,
    title: 'Student Portal',
    description: 'View your issued certificates, download them, and share a verification link with employers.',
    to: '/student',
    cta: 'Open student portal',
  },
  {
    icon: HiOutlineOfficeBuilding,
    title: 'Institution Portal',
    description: 'Issue new certificates, track how many are pending review, and revoke records when needed.',
    to: '/institution',
    cta: 'Open institution portal',
  },
  {
    icon: HiOutlineBadgeCheck,
    title: 'Verify Certificate',
    description: 'Enter a certificate ID or scan its QR code to confirm it was genuinely issued and is still valid.',
    to: '/verify',
    cta: 'Verify a certificate',
  },
];

function RoleCards() {
  return (
    <section className="role-cards">
      <div className="role-cards__inner">
        {roles.map(({ icon: Icon, title, description, to, cta }) => (
          <div className="role-card" key={title}>
            <div className="role-card__icon">
              <Icon size={26} />
            </div>
            <h3 className="role-card__title">{title}</h3>
            <p className="role-card__description">{description}</p>
            <Link to={to} className="role-card__cta">
              {cta} →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default RoleCards;
