import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

interface CartProps {
  image: string;
  product_title: string;
  quantity: number;
  price: number;
}

function CartTable({ image, product_title, quantity, price }: CartProps) {
  return (
    <div className="cart__table__container">
      <div className="cart_table_image_wrapper">
        <img src={image} alt="" />
      </div>
      <div className="cart__table__content">
        <p>{product_title}</p>
        <div className="cart__table__quantity">
          <button type="button">-</button>
          <p>{quantity}</p>
          <button type="button">+ </button>
        </div>
      </div>
      <div className="cart__table__last">
        <p>
          <CloseIcon />
        </p>
        <p>Rs {price} /-</p>
      </div>
    </div>
  );
}

export default CartTable;
