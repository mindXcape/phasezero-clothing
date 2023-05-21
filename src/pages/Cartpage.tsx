import React from 'react';
import Title from '../components/Title/Title';
import CartTable from '../components/CartTable/CartTable';

function CartPage() {
  return (
    <>
      <Title title="CART" />
      <div className="mx-4">
        <div className="row">
          <div className="col-md-8">
            <p>Shopping Cart</p>
            <div className="cart__page__table__wrapper">
              <CartTable
                image="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
                product_title="Spring 2023"
                quantity={1}
                price={2200}
              />
            </div>
          </div>
          <div className="col-md-4">
            <p>Cart Totals</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartPage;
