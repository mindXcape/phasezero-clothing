import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <address>
      <div className="contact__contain">
        {/* Upper box for contact page */}
        <div className="top__box">
          <p>CONTACT US</p>
          <p>CONTACTS</p>
        </div>
        {/* middle box for contact page */}
        <div className="middle__box">
          <span className="border" />
          <br />
          <p>9200 Sunset Boulevard</p>
          <p>Los Angeles, California 90069</p>
          <br />
          <span className="border" />
        </div>
        {/* bottom box for contact page */}
        <div className="bottom__box">
          <div className="bottom__box__item">
            <p>FOR SHIPPING AND CUSTOMER SERVICES INQUIRIES PLEASE CONTACT:</p>
            <Link to="/orders_email" className="bottom__box__item">
              ORDERS@RH-UDE.COM
            </Link>
          </div>
          <div className="bottom__box__item">
            <p>FOR STORE BUYERS PLEASE CONTACT:</p>
            <Link to="/sales_email" className="bottom__box__item">
              SALES@RH-UDE.COM
            </Link>
          </div>
          <div className="bottom__box__item">
            <p>FOR INTERNSHIP AND CAREER OPPORTUNITIES PLEASE CONTACT:</p>
            <Link to="/work_email" className="bottom__box__item">
              WORK@RH-UDE.COM
            </Link>
          </div>
        </div>
      </div>
    </address>
  );
}
