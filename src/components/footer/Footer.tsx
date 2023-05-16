import React from 'react';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Button } from '@mui/material';
import '../../scss/main.scss';

function Footer() {
  return (
    <footer>
      <nav>
        <div className="footer_nav">
          <Link to="/about" className="footer_nav_link">
            ABOUT
          </Link>
          <Link to="/contact" className="footer_nav_link">
            CONTACT
          </Link>
          <Link to="/shipping_returns" className="footer_nav_link">
            SHIPPING & RETURNS
          </Link>
          <Link to="accessibility" className="footer_nav_link">
            ACCESSIBILITY
          </Link>
          <Link to="/stockists" className="footer_nav_link">
            STOCKISTS
          </Link>
          <Link to="/social" className="footer_nav_link">
            SOCIAL
          </Link>
          <Link to="/ccpa" className="footer_nav_link">
            CCPA
          </Link>
        </div>
      </nav>
      <p className="footer_text">EXPERIENCE WITH US</p>
      <div className="newsLetter">
        <input type="email" placeholder="EMAIL" />
        <Button className="btn_send">
          <ArrowRightAltIcon />
        </Button>
      </div>
      <div className="footer_copyright">
        <p>© 2023, PhazeZero</p>
      </div>
    </footer>
  );
}

export default Footer;
