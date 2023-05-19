import React from 'react';
import '../../scss/main.scss';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import InputRhude from '../ui/input/InputRhude';
import ShippingForm from '../form/ShippingForm';
import Button from '../button/Button';

function ShippingInfo() {
  // code for breadcrumbs
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
    <div className="main__wrapper">
      <div className="shipping__wrapper">
        <div className="bread__Crumbs">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </div>
        <div className="qr__wrapper">
          <div className="qr__divider">
            <span className="qr__divider__content"> Esewa Checkout</span>
          </div>
          <div className="qr__button__wrapper">
            <Button
              className="pay__btn"
              disabled={false}
              eventHandler={(e) => e.preventDefault()}
              title="Shop Pay"
            />
          </div>
        </div>
        <div className="or__wrapper">
          <span className="or__content">OR</span>
        </div>
        <div className="email__form__wrapper">
          <div className="titles__wrapper">
            <p>Contact Information</p>
            <div className="right__wrapper">
              Already have an account?
              <span>Login in</span>
            </div>
          </div>
          <div className="input__wrapper">
            <InputRhude
              className="checkout__email__input"
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="checkbox__wrapper">
            <label htmlFor="checkbox_input">
              <input
                className="checkbox__input"
                type="checkbox"
                id="checkbox_input"
              />
              <span>Email me with news and offer</span>
            </label>
          </div>
        </div>
        <div className="shipping__form__wrapper">
          <ShippingForm />
        </div>
        <div className="shipping__navigation">
          <div className="left__items">
            <ArrowBackIosIcon />
            <h4>Return to cart</h4>
          </div>
          <Button
            className="continue__btn"
            disabled={false}
            eventHandler={(e) => e.preventDefault()}
            title="Continue to Shipping"
          />
        </div>
        <nav className="checkout__navigation">
          <div className="navigtion__items">
            <Link className="checkout__navigation__link" to="/">
              Refund Policy
            </Link>
            <Link className="checkout__navigation__link" to="/">
              Terms of Service
            </Link>
            <Link className="checkout__navigation__link" to="/contact">
              Contact Information
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default ShippingInfo;