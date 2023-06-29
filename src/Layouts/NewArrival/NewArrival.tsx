import Product from 'components/Card/ProductCard';
import { Title } from 'components/Title';

const NewArrival = function NewArrival() {
  return (
    <>
      <Title title="NEW ARRIVAL" />
      <div className="new__arrival__container">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
                imageBack="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
                imageBack="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
                imageBack="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront="https://cdn.shopify.com/s/files/1/0587/5816/8785/products/1_0c21b9f6-2b1d-4df2-9e13-0d406a90480e_540x.jpg?v=1632354544"
                imageBack="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewArrival;
