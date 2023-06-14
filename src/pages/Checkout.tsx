import React from 'react';
import { Outlet } from 'react-router-dom';
import CheckoutShipping from '../components/Checkout/CheckoutInformation';
import CheckoutPayment from '../components/Checkout/CheckoutPayment';
import '../scss/main.scss';

function Checkout() {
  return (
    <div className="checkout__wrapper">
      <div className="checkout__leftItem">
        <Outlet />
      </div>
      <div className="checkout__rightItem">
        <CheckoutPayment />
      </div>
    </div>
  );
}

export default Checkout;
