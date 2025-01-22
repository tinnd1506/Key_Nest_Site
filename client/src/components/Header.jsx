import React from 'react';
import { NavLink } from 'react-router-dom';
import keyLogo from '../assets/key-logo.svg';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="./" className="header-logo">
          <span>KeyNest</span>
          <img src={keyLogo} alt="KeyNest logo" />
        </a>
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
