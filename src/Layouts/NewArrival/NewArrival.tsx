import React from 'react';
import Title from 'components/Title/Title';
import Product from 'components/Card/ProductCard';
import { NAone, NAtwo } from 'assets/Images/index';

const NewArrival = function NewArrival() {
  return (
    <>
      <Title title="NEW ARRIVAL" />
      <div className="new__arrival__container">
        <div>
          <div className="row">
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront={NAone}
                imageBack="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront={NAtwo}
                imageBack="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront={NAone}
                imageBack="https://cdn.shopify.com/s/files/1/0587/5816/8785/files/53Gn7CvMzuP8815M6SiPF_Foum-AdrNWBrqw3qI1gIw_540x.jpg?v=1682507128"
              />
            </div>
            <div className="col-6 col-lg-3 col-md-6">
              <Product
                loading={false}
                price={1200}
                title="Team 247 Oversized Hoodie x Marchon - Black"
                imageFront={NAtwo}
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
