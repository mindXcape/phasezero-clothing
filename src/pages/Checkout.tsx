import React from 'react';
import CheckoutLeftItem from 'components/Checkout/CheckoutLeftItem';
import CheckoutPayment from 'components/Checkout/CheckoutPayment';

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
