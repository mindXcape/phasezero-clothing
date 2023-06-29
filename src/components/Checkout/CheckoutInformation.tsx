import React from 'react';
import { Button } from 'components/button';
import { ShippingForm } from 'components/form';
import { ArrowBackIosIcon } from 'assets/icons';

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
