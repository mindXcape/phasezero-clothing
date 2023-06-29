import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ArrowRightAltIcon } from 'assets/icons';

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
          <Link
            to="https://www.instagram.com/phasezero.clo/?hl=en"
            className="footer__nav__link"
          >
            SOCIAL
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
        <p>© 2023, Phase zero</p>
      </div>
    </footer>
  );
}

export default Footer;
