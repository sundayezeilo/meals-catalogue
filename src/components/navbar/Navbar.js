import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">Brand</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}
