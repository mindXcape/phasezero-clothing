import React, { MouseEvent } from 'react';
import Button from 'components/button/Button';
import { athleisurefront } from 'assets/index';

function ModalProductCard() {
  const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

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
