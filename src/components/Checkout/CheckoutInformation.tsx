import React from 'react';
import '../../scss/main.scss';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import InputRhude from '../ui/input/InputRhude';
import ShippingForm from '../form/ShippingForm';
import Button from '../button/Button';

function CheckoutInformation() {
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
    <div className="checkoutShipping__wrapper">
      {/* code for breadCrumbs from MUI */}
      <div className="bread__Crumbs">
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </div>
      {/* shipping form is kept here */}
      <div className="shipping__form__wrapper">
        <ShippingForm />
      </div>
      <div className="shipping__navigation">
        <div className="left__items">
          <ArrowBackIosIcon fontSize="small" />
          <span>Return to cart</span>
        </div>
        <Button
          className="continue__btn"
          disabled={false}
          eventHandler={(e) => e.preventDefault()}
          title="Continue to Shipping"
        />
      </div>
    </div>
  );
}

export default CheckoutInformation;
