import '../../scss/main.scss';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ProductCardSkeleton from 'Provider/Skeleton/ProductCardSkeleton';
import CartTable from 'components/CartTable/CartTable';

type Anchor = 'top' | 'left' | 'bottom' | 'right';
// defining prop types for product
interface ProductProps {
  imageFront: string;
  imageBack: string;
  title: string;
  price: number;
  loading: boolean;
}

const Product = function Product({
  imageFront,
  imageBack,
  title,
  price,
  loading,
}: ProductProps) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

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
    <div>
      {loading ? (
        <ProductCardSkeleton />
      ) : (
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
                  <button type="button" onClick={toggleDrawer('right', true)}>
                    S
                  </button>
                </div>
                <div className="card__btn">
                  <button type="button" onClick={toggleDrawer('right', true)}>
                    X
                  </button>
                </div>
                <div className="card__btn">
                  <button type="button" onClick={toggleDrawer('right', true)}>
                    L
                  </button>
                </div>
                <div className="card__btn">
                  <button type="button" onClick={toggleDrawer('right', true)}>
                    XL
                  </button>
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
      )}
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        <div className="cart__drawer__wrapper">
          <div className="cart__drawer__content">
            <CartTable
              image="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
              product_title="Spring 2023"
              quantity={1}
              price={2200}
            />
            <CartTable
              image="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
              product_title="Spring 2023"
              quantity={1}
              price={2200}
            />
            <CartTable
              image="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
              product_title="Spring 2023"
              quantity={1}
              price={2200}
            />
            <CartTable
              image="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
              product_title="Spring 2023"
              quantity={1}
              price={2200}
            />
          </div>
          <hr />
          <div className="cart__drawer__btn">
            <div className="d-flex justify-content-between">
              <p>Sub Total</p>
              <p className="drawer__price">Rs 40,000 /-</p>
            </div>
            <button type="button" className="view__cart__btn">
              View Cart
            </button>
            <button type="button" className="checkout__btn">
              Checkout
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Product;
