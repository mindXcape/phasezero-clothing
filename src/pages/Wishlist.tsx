import CartTable from 'components/CartTable/CartTable';
import { Title } from 'components/Title';

function Wishlist() {
  return (
    <>
      <Title title="WISHLIST" />
      <div className="container">
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
    </>
  );
}
export default Wishlist;
