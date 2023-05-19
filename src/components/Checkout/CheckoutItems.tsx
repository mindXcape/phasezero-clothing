import React from 'react';
import '../../scss/main.scss';
import { Badge } from '@mui/material';

// type Props = {}

function CheckoutItems() {
  return (
    <div className="checkoutItems__container">
      <Badge badgeContent={4} color="primary">
        <img
          className="checkout__item__image"
          src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/2dbc243c707b40339ea08e3999ae4d9d_9366/adc-patchwork-hoodie-gender-neutral.jpg"
          alt="productImage"
        />
      </Badge>

      <div className="itemName__detail">
        <span className="checkout__item__name">Hoodie</span>
        <span className="checkout__item__detail">One Size / Black</span>
      </div>
      <p className="item__price__text">$104.13</p>
    </div>
  );
}

export default CheckoutItems;
