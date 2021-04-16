import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.jpg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <img src={logo} alt="brand" />
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-home">Home</Link>
        <Link to="/">Services</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
      </div>
    </nav>
  );
}
