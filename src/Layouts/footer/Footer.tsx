import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';
import '../../scss/main.scss';

function Footer() {
  return (
    <footer>
      <nav>
        <div className="footer__nav">
          <Link to="/about" className="footer__nav__link">
            ABOUT
          </Link>
          <Link to="/contact" className="footer__nav__link">
            CONTACT
          </Link>
          <Link to="/shipping_returns" className="footer__nav__link">
            SHIPPING & RETURNS
          </Link>
          <Link to="accessibility" className="footer__nav__link">
            ACCESSIBILITY
          </Link>
          <Link to="/stockists" className="footer__nav__link">
            STOCKISTS
          </Link>
          <Link to="/social" className="footer__nav__link">
            SOCIAL
          </Link>
          <Link to="/ccpa" className="footer__nav__link">
            CCPA
          </Link>
        </div>
      </nav>
      <p className="footer__text">EXPERIENCE WITH US</p>
      <div className="newsLetter">
        <input type="email" placeholder="EMAIL" />
        <Button className="btn__send">
          <ArrowRightAltIcon />
        </Button>
      </div>
      <div className="footer__copyright">
        <p>© 2023, PhazeZero</p>
      </div>
    </footer>
  );
}

export default Footer;
