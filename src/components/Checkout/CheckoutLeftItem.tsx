import React from 'react';
import { Breadcrumbs } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link, Outlet } from 'react-router-dom';

function CheckoutLeftItem() {
  // code for breadcrumbs
  const breadcrumbs = [
    <Link className="links" key={1} to="/checkout">
      Information
    </Link>,
    <Link className="links" key={2} to="/checkout/payment-method">
      Shipping
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
      <Outlet />
    </div>
  );
}

export default CheckoutLeftItem;
