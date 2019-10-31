import React from 'react';
import './footer.scss';

const Footer = () => (
  <footer id="footer">
    <div className="footer-top">
      <div className="footer-description">
        <div className="footer-summary">
          <p>The awards for design, creativity and innovation on the Internet</p>
        </div>
        <div className="footer-menu">
          <ul>
            <li><a href="/directory">Directory</a></li>
            <li><a href="/jobs">Jobs</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/websites">Winners</a></li>
            <li><a href="/websites/nominees">Nominees</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <p>Follow us</p>
          <ul>
            <li><a href="https://twitter.com/awwwards">Twitter</a></li>
            <li><a href="https://www.facebook.com/awwwards/">Facebook</a></li>
            <li><a href="https://www.youtube.com/channel/UCYWGYef22gx8PaXZMLHAQsw/">Youtube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-conference">
        <p>
          New Conferences
          {' '}
          <i className="far fa-calendar-alt" />
          <span>New York</span>
          {' '}
          and
          {' '}
          <span>Tokyo</span>
        </p>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-menu-extra">
        <ul>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/faqs">F.A.Q</a></li>
          <li><a href="/cookies-policy">Cookies Policy</a></li>
          <li><a href="/terms">Legal Terms</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/english">English</a></li>
        </ul>
      </div>
      <div className="footer-owner">
        <p>
          Private Cloud by
          {' '}
          <span>Stackscale</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
