import React from 'react';
import Title from 'components/Title/Title';
import CartTable from 'components/CartTable/CartTable';

function CartPage() {
  return (
    <>
      <Title title="CART" />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <p className="cart__page__shopping__cart">Shopping Cart</p>
            <div className="cart__page__table__wrapper">
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
          </div>
          <div className="col-md-4">
            <p className="cart__page__shopping__cart cart__page__cart__totals">
              Cart Totals
            </p>
            <div className="cart__page__total__wrapper">
              <div className="cart__page__total__bar">
                <p className="cart__page__totals">Subtotal</p>
                <p className="cart__page__totals__price">Rs 247,000.00</p>
              </div>
              <div className="cart__page__total__bar">
                <p className="cart__page__totals">Total</p>
                <p className="cart__page__totals__price">Rs 247,000.00</p>
              </div>
              <div className="cart__page__checkout">
                <button className="cart__page__checkout__btn" type="button">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
