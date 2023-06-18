import React from 'react';
import Button from '../button/Button';
import { athleisurefront } from '../../assets/index';

type Props = {};

function ModalProductCard({ }: Props) {
  const handleOnClick = (e) => { };

  return (
    <div className="modal__product__wrapper">
      <div className="modal__product__img__wrapper">
        <img src={athleisurefront} alt="" />
      </div>
      <div className="modal__product__name__wrapper">
        <p>$205.00</p>
        <p>INITIAL ZIP HOODIE - ULTIMATE GREY</p>
        <Button
          className="modal__product__button"
          title="ADD TO CART"
          eventHandler={handleOnClick}
        />
      </div>
    </div>
  );
}

export default ModalProductCard;
