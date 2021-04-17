import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer fixed-bottom container-fluid p-0" role="contentinfo">
    <div className="row">

      <div className="footer-wrap d-md-flex">

        <div className="col-md footer-brand">
          <a href="/" className="page-brand">
            IoTPost
            <span className="dot" />
          </a>
        </div>

        <div className="col-md copy d-md-flex justify-content-center">
          <div className="privacy-text mr-2">Privacy policy Terms &amp; Conditions</div>
          <div> &copy; Copyright 2020.  All rights reserved.</div>
        </div>

        <div className="col-md social-wrap">
          <ul className="social-network">
            <li className="social-circle"><a href="https://web.facebook.com/su.ezeilo/" className="icoFacebook" target="_blank" rel="noreferrer"><i className="fa fa-facebook social-icons" ariaHidden="true" /></a></li>
            <li className="social-circle"><a href="https://www.linkedin.com/in/sunday-ezeilo-a6a67664/" className="icoLinkedin" target="_blank" rel="noreferrer"><i className="fa fa-linkedin social-icons" ariaHidden="true" /></a></li>
            <li className="social-circle"><a href="https://github.com/ezeilo-su" className="icoGitHub" target="_blank" rel="noreferrer"><i className="fa fa-github social-icons" ariaHidden="true" /></a></li>
            <li className="social-circle"><a href="https://twitter.com/SundayEzeilo" className="icoTwitter" target="_blank" rel="noreferrer"><i className="fa fa-twitter social-icons" ariaHidden="true" /></a></li>
            <li className="social-circle"><a href="https://www.instagram.com/sunday_ezeilo/" className="icoInstagram" target="_blank" rel="noreferrer"><i className="fa fa-instagram social-icons" ariaHidden="true" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
