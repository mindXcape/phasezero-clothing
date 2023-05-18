import React from 'react';
import BasicPagination from '../Provider/Pagination';
import NewArrival from '../Layouts/NewArrival/NewArrival';

function Home() {
  return (
    <>
      <BasicPagination totalPage={10} />
      <NewArrival />
    </>
  );
}

export default Home;
