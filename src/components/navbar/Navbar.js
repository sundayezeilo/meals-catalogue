import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.jpg';

export default function Navbar() {
  return (
    <nav id="navbar" className="d-flex align-items-center justify-content-between">
      <Link to="/">
        <div className="nav-brand">
          <img src={logo} alt="brand" />
        </div>
        <h2 className="brand-text">MealsCatalogue</h2>
      </Link>
      <div className="nav-item">
        <Link to="/" className="nav-link nav-home active" aria-current="page">Home</Link>
      </div>
    </nav>
  );
}
