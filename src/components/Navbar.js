import logo from '../assets/logo.png';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import Seal from './Seal';
import './Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/verify', label: 'Verify' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="CertVerify logo" className="navbar__logo" />
          <span className="navbar__wordmark">CertVerify</span>
        </NavLink>

        <nav className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `navbar__link ${isActive ? 'navbar__link--active' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
