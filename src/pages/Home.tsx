import React, { useState } from 'react';
import Button from '../components/button/Button';
import BasicPagination from '../Provider/Pagination';

function Home() {
  const [count, setCount] = useState<number>(0);
  const addHandler = () => {
    setCount(count + 1);
  };
  const subHandler = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div>
        <Button
          className="represent__btn"
          title="Add"
          eventHandler={addHandler}
          disabled={false}
        />
      </div>
      <div>
        <Button
          className="represent__btn"
          title="Edit"
          eventHandler={subHandler}
          disabled
        />
      </div>
      <BasicPagination count={10} />
      <div>
        <p>{count}</p>
      </div>
    </>
  );
}

export default Home;
