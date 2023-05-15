import '../../scss/main.scss';
import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = function Product() {
  // state to handle the hover effect
  const [togglerState, setTogglerState] = useState<boolean>(false);

  // function to onMouseEnter in card
  const togglerHandlerEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTogglerState(true);
  };

  // function to onMouseLeave in card
  const togglerHandlerLeave = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setTogglerState(false);
  };

  const navigateHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <div
      className="card_container"
      onMouseEnter={(e) => togglerHandlerEnter(e)}
      onMouseLeave={(e) => togglerHandlerLeave(e)}
      onClick={(e) => navigateHandler(e)}
      aria-hidden="true"
    >
      <div className="card_img">
        {togglerState ? (
          <img
            src="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
            alt="end"
          />
        ) : (
          <img
            src="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
            alt="front"
          />
        )}
      </div>

      {togglerState ? (
        <div className="card_btn_container">
          <div className="d-flex gap-2">
            <div className="card_btn">
              <button type="button">S</button>
            </div>
            <div className="card_btn">
              <button type="button">X</button>
            </div>
            <div className="card_btn">
              <button type="button">L</button>
            </div>
            <div className="card_btn">
              <button type="button">XL</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="card_content">
          <p className="card_description">
            Team 247 Oversized Hoodie x Marchon - Black
          </p>
          <p className="card_price">NPR 1200/-</p>
        </div>
      )}

      <p className="card_icon">
        <FavoriteBorderIcon />
      </p>
    </div>
  );
};

export default Product;
