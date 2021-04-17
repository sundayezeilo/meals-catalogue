import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer fixed-bottom">
    <div className="container-fluid">

      <div className="footer-wrap row">

        <div className="col-4 footer-brand">
          <a href="/" className="page-brand">MealsCatalogue</a>
        </div>

        <div className="col-4 copy d-md-flex justify-content-center">
          <div className="privacy-text">Privacy policy Terms &amp; Conditions</div>
          <div> &copy; Copyright 2021.  All rights reserved.</div>
        </div>

        <div className="col-4 social-wrap">
          <ul className="social-network">
            <li className="social-circle"><a href="https://github.com/ezeilo-su" className="icoGitHub" target="_blank" rel="noreferrer"><i className="fa fa-github social-icons" aria-hidden="true" /></a></li>
            <li className="social-circle"><a href="https://www.linkedin.com/in/sundayezeilo/" className="icoLinkedin" target="_blank" rel="noreferrer"><i className="fa fa-linkedin social-icons" aria-hidden="true" /></a></li>
            <li className="social-circle"><a href="https://twitter.com/SundayEzeilo" className="icoTwitter" target="_blank" rel="noreferrer"><i className="fa fa-twitter social-icons" aria-hidden="true" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
