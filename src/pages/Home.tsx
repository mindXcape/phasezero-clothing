import React, { useState } from 'react';
import Button from '../components/button/button';

function Home() {
  const [count, setCount] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const addHandler = () => {
    setCount(count + 1);
  };
  const subHandler = () => {
    setCount(count - 1);
    setIsDisabled(!isDisabled);
  };
  return (
    <>
      <div>
        <Button
          className="btn_one"
          title="Add"
          eventHandler={addHandler}
          disabled={false}
        />
      </div>
      <div>
        <Button
          className="btn_one"
          title="Edit"
          eventHandler={subHandler}
          disabled={isDisabled}
        />
      </div>
      <div>
        <p>{count}</p>
      </div>
      <button type="button" disabled>
        Send
      </button>
    </>
  );
}

export default Home;
