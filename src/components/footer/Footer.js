import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import './Footer.css';

const Footer = () => (
  <footer className="footer fixed-bottom">
    <div className="container-fluid w-100">

      <div className="footer-wrap row">

        <div className="col-md-3 footer-brand-wrap">
          <a href="/" className="footer-brand">MealsCatalogue</a>
        </div>

        <div className="col-md-3 privacy-text">Privacy policy Terms &amp; Conditions</div>

        <div className="col-md-3 legal"> &copy; Copyright 2021.  All rights reserved.</div>

        <ul className="col-md-2 social-network">
          <li className="social-circle">
            <a href="https://github.com/ezeilo-su" className="icoGitHub" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
          </li>
          <li className="social-circle">
            <a href="https://www.linkedin.com/in/sundayezeilo/" className="icoLinkedin" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </li>
          <li className="social-circle">
            <a href="https://twitter.com/SundayEzeilo" className="icoTwitter" target="_blank" rel="noreferrer">
              <TwitterIcon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
