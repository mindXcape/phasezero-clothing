import React from 'react';
import '../../scss/main.scss';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { dummyQR } from '../../assets/index';

function CheckoutPaymentMethod() {
  const breadcrumbs = [
    <Link className="links" key={1} to="/">
      Information
    </Link>,
    <Link className="links" key={2} to="/">
      Shipping
    </Link>,
    <Link className="links" key={3} to="/">
      Checkout
    </Link>,
  ];
  return (
    <div className="payment__method__wrapper">
      <div className="bread__Crumbs">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      <div className="payment__method">
        <h3>Payment Method</h3>
      </div>
      <div className="qr__wrapper">
        <div className="qr__divider">
          <span className="qr__divider__content"> Esewa Checkout</span>
        </div>
        <div className="qr__button__wrapper">
          <img src={dummyQR} alt="" className="qr__image" />
        </div>
      </div>
      {/* or content wrapper */}
      <div className="or__wrapper">
        <span className="or__content">OR</span>
      </div>
      <div className="cash__on__delivery">
        <label htmlFor="checkboxFormInput">
          <input
            className="checkbox__input"
            type="checkbox"
            id="checkboxFormInput"
          />
          <span>Cash on Delivery</span>
        </label>
      </div>
    </div>
  );
}

export default CheckoutPaymentMethod;
