import React from 'react';
import BasicPagination from '../Provider/Pagination';
import NewArrival from '../Layouts/NewArrival/NewArrival';
import AddBanner from '../Layouts/Addbanners/Addbanner';
import Collection from '../Layouts/Collection/Collection';

function Home() {
  const adTexts: string[] = [
    'Buy our new product!',
    'Limited time offer! Get 10% off our new product!',
    'Our product is the best in the market!',
  ];
  return (
    <>
      <AddBanner adTexts={adTexts} />
      <BasicPagination totalPage={10} />
      <NewArrival />
      <Collection />
    </>
  );
}

export default Home;
