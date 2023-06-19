import React from 'react';
import CheckoutPayment from '../components/Checkout/CheckoutPayment';
import '../scss/main.scss';
import CheckoutLeftItem from '../components/Checkout/CheckoutLeftItem';

function Checkout() {
  return (
    <div className="checkout__wrapper">
      <div className="checkout__leftItem">
        <CheckoutLeftItem />
      </div>
      <div className="checkout__rightItem">
        <CheckoutPayment />
      </div>
    </div>
  );
}

export default Checkout;
