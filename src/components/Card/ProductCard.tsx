import '../../scss/main.scss';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// defining proptypes for product
interface ProductProps {
  imageFront: string;
  imageBack: string;
  title: string;
  price: number;
}

const Product = function Product({
  imageFront,
  imageBack,
  title,
  price,
}: ProductProps) {
  // state to handle the hover effect
  const [togglerState, setTogglerState] = useState<boolean>(false);

  // function to onMouseEnter in card
  const togglerHandlerEnter: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setTogglerState(true);
  };

  // function to onMouseLeave in card
  const togglerHandlerLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    setTogglerState(false);
  };

  const navigateHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="card__container"
      onMouseEnter={(e) => togglerHandlerEnter(e)}
      onMouseLeave={(e) => togglerHandlerLeave(e)}
      onClick={(e) => navigateHandler(e)}
      aria-hidden="true"
    >
      <div className="card__img">
        {togglerState ? (
          <img src={imageBack} alt="end" />
        ) : (
          <img src={imageFront} alt="front" />
        )}
      </div>

      {togglerState ? (
        <div className="card__btn__container">
          <div className="d-flex gap-2">
            <div className="card__btn">
              <button type="button">S</button>
            </div>
            <div className="card__btn">
              <button type="button">X</button>
            </div>
            <div className="card__btn">
              <button type="button">L</button>
            </div>
            <div className="card__btn">
              <button type="button">XL</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card__content">
          <p className="card__description">{title}</p>
          <p className="card__price">NPR {price}/-</p>
        </div>
      )}

      <p className="card__icon">
        <FavoriteBorderIcon />
      </p>
    </div>
  );
};

export default Product;
