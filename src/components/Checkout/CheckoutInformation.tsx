import React from 'react';
import '../../scss/main.scss';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ShippingForm from '../form/ShippingForm';
import Button from '../button/Button';

function CheckoutInformation() {
  return (
    <div className="checkoutShipping__wrapper">
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